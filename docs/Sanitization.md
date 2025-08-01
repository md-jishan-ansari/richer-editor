
## Content Sanitization and Code Highlighting

Before saving content to your backend, it's recommended to sanitize the HTML and highlight code blocks for better security and presentation. Here's how to set up a Next.js API endpoint for this:

### Required Dependencies

Install the necessary packages:

```bash
npm install shiki isomorphic-dompurify
```

**Here is an example of the API and how to use it with the Editor:** <br />
<p style={{marginBottom: 14}}></p>

<TabsWrapper>
    <Tab id="tab2" title="Content Purify and Highlighter API">
    **src/api/code-highlighter/route.ts (Next.js Pages Router)**

    ```typescript
      import { createHighlighter } from 'shiki'
      import DOMPurify from 'isomorphic-dompurify';
      import { NextResponse } from "next/server";

      // Cache for highlighter instances with TTL (Time To Live)
      interface CacheEntry {
        highlighter: Awaited<ReturnType<typeof createHighlighter>>;
        timestamp: number;
      }

      const highlighterCache = new Map<string, CacheEntry>()
      const CACHE_TTL = 60 * 60 * 1000 // 1 hour - increased for better performance
      const CACHE_CLEANUP_CHANCE = 0.05 // 5% chance to clean cache - reduced frequency

      // Core languages that are commonly used (90% of use cases)
      const coreLanguages = ['javascript', 'typescript', 'tsx', 'jsx', 'html', 'css', 'json', 'bash']

      // Extended languages for less common use cases (only languages available in Shiki)
      const extendedLanguages = [
        'scss', 'sass', 'python', 'cpp', 'java', 'csharp', 'php', 'ruby', 'go', 'rust', 'swift', 'kotlin', 'scala', 'r', 'sql', 'markdown', 'yaml', 'xml', 'shellscript', 'powershell', 'diff', 'dockerfile', 'graphql', 'vue', 'svelte', 'toml', 'matlab', 'ini', 'properties', 'dart'
      ]

      // Language mapping for aliases and fallbacks
      const langMap: Record<string, string> = {
        typescriptreact: 'tsx',
        javascriptreact: 'jsx',
        react: 'jsx',
        nextjs: 'javascript',
        tailwindcss: 'css',
        prisma: 'sql',
        mongodb: 'javascript',
        postgresql: 'sql',
        mysql: 'sql',
        redis: 'bash',
        linux: 'bash',
        windows: 'powershell',
        macos: 'bash',
        nginx: 'bash',
        apache: 'bash',
        git: 'bash', // git is not available, fallback to bash
        shell: 'shellscript', // shell maps to shellscript
        sh: 'shellscript', // sh maps to shellscript
        zsh: 'shellscript', // zsh maps to shellscript
        console: 'shellscript', // console maps to shellscript
        // Additional common aliases
        js: 'javascript',
        ts: 'typescript',
        py: 'python',
        rb: 'ruby',
        rs: 'rust',
        kt: 'kotlin',
        sc: 'scala',
        md: 'markdown',
        yml: 'yaml',
        ps1: 'powershell',
        docker: 'dockerfile',
        gql: 'graphql',
        angular: 'typescript' // angular maps to typescript
      }

      // Clean expired cache entries
      function cleanCache() {
        const now = Date.now()
        for (const [key, entry] of Array.from(highlighterCache.entries())) {
          if (now - entry.timestamp > CACHE_TTL) {
            highlighterCache.delete(key)
          }
        }
      }

      async function getHighlighterForLanguages(languages: string[]): Promise<Awaited<ReturnType<typeof createHighlighter>>> {
        // Clean expired cache entries periodically
        if (Math.random() < CACHE_CLEANUP_CHANCE) {
          cleanCache()
        }

        // Check if any language requires extended set
        const needsExtended = languages.some(lang => extendedLanguages.includes(lang))
        const cacheKey = needsExtended ? 'extended' : 'core'

        if (!highlighterCache.has(cacheKey)) {
          const highlighter = await createHighlighter({
            themes: ['github-dark', 'github-light'],
            langs: needsExtended ? [...coreLanguages, ...extendedLanguages] : coreLanguages,
          })
          highlighterCache.set(cacheKey, { highlighter, timestamp: Date.now() })
        }

        return highlighterCache.get(cacheKey)!.highlighter
      }

      function decodeHTMLEntities(str: string): string {
        return str.replace(/&#(\d+);/g, (_, dec) => String.fromCharCode(dec))
                  .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)))
                  .replace(/&amp;/g, '&')
                  .replace(/&lt;/g, '<')
                  .replace(/&gt;/g, '>')
                  .replace(/&quot;/g, '"')
                  .replace(/&#39;/g, "'")
                  .replace(/&nbsp;/g, ' ')
      }

      // Server-side iframe validation function
      function validateIframes(html: string): string {
        const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com)\/embed\//;

        return html.replace(
          /<iframe([^>]*?)src=["']([^"']*)["']([^>]*?)>/gi,
          (match, beforeSrc, src, afterSrc) => {
            // If the src is not a valid YouTube embed URL, remove the src attribute
            if (!youtubeRegex.test(src)) {
              return `<iframe${beforeSrc}${afterSrc}>`;
            }
            return match;
          }
        );
      }

      async function highlightHtmlWithShiki(html: string): Promise<string> {
        // Simple sanitization with YouTube iframe support - everything else uses DOMPurify defaults
        const cleanHtml = DOMPurify.sanitize(html, {
          ADD_TAGS: ['iframe'],
          ADD_ATTR: ['allowfullscreen', 'autoplay', 'disablekbcontrols', 'enableiframeapi', 'endtime', 'ivloadpolicy', 'loop', 'modestbranding', 'origin', 'playlist', 'rel', 'src', 'start', 'width', 'height', 'class', 'style', 'target']
        });

        // CRITICAL SECURITY: Post-process to validate iframe sources for YouTube only
        const validatedHtml = validateIframes(cleanHtml);

        // Extract all unique languages from the HTML efficiently
        const uniqueLanguages = new Set<string>()
        const languageRegex = /<pre><code(?: class="language-(\w+)")?>/g
        let match

        while ((match = languageRegex.exec(validatedHtml)) !== null) {
          const lang = match[1] || 'plain' // If no language class, default to 'plain'
          const resolvedLang = langMap[lang] || lang
          uniqueLanguages.add(resolvedLang)
        }

        // Get the appropriate highlighter instance based on the languages needed
        const highlighter = await getHighlighterForLanguages(Array.from(uniqueLanguages))

        // Process the content with the correct highlighter - generate both themes
        return validatedHtml.replace(
          /<pre><code(?: class="language-(\w+)")?>([\s\S]*?)<\/code><\/pre>/g,
          (_, lang, code) => {
            try {
              const decodedCode = decodeHTMLEntities(code)
              const resolvedLang = langMap[lang || 'plain'] || (lang || 'plain')

              // Check if the resolved language is available in the highlighter
              const availableLangs = [...coreLanguages, ...extendedLanguages]
              const finalLang = availableLangs.includes(resolvedLang) ? resolvedLang : 'plain'

              // Generate both dark and light theme versions
              const darkHighlighted = highlighter.codeToHtml(decodedCode, {
                lang: finalLang,
                theme: 'github-dark',
              })

              // const lightHighlighted = highlighter.codeToHtml(decodedCode, {
              //   lang: finalLang,
              //   theme: 'github-light',
              // })

              return darkHighlighted;
            } catch (error) {
              console.error('Shiki highlighting error:', error)
              // Fallback to plain code block with the original language class
              return `<pre><code class="language-${lang || 'jsx'}">${code}</code></pre>`
            }
          }
        )
      }

      export async function POST(request: Request) {
        try {
          // Parse and validate request body
          const body = await request.json();

          if (!body || !body.data || typeof body.data.content !== 'string') {
            return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
          }

          const content = body.data.content;

          // Validate content length to prevent DoS attacks
          if (content.length > 1000000) { // 1MB limit
            return NextResponse.json({ error: 'Content too large' }, { status: 413 });
          }

          const highlightedContent = await highlightHtmlWithShiki(content);

          return NextResponse.json({
            content: highlightedContent
          });
        } catch (error) {
          console.error('Code highlighter API error:', error);
          return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
        }
      }
    ```

  </Tab>

  <Tab id="myeditor" title="MyEditor">
    **src/components/MyEditor.tsx**
    ```tsx
    "use client"

    import React, { useState, useRef } from 'react';
    import { RicherContent, RicherEditor } from 'richer-editor';

    interface EditorRef {
      save: () => void;
      clear: () => void;
      editor: React.RefObject<HTMLElement> | null;
    }

    const MyEditor = () => {
      // Initialize with empty content structure
      const [content, setContent] = useState<{ html?: string; json?: object | string }>({});

      const editorRef = useRef<EditorRef>(null);

      const handleSave = async () => {
        // This will trigger the save function and update content via onChange
        editorRef.current?.save();

        // Call the code-highlighter API to get highlighted HTML
        try {
          if (content?.html) {
            const response = await fetch('/api/code-highlighter', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                data: {
                  content: content.html
                }
              })
            });

            if (response.ok) {
              const result = await response.json();
              // Update content with highlighted HTML while preserving JSON
              setContent(prevContent => ({
                ...prevContent,
                html: result.content
              }));

              // TODO: store this updatedContent in backend and use wherever needed
              const updatedContent = JSON.stringify({
                ...content,
                html: result.content
              });
            } else {
              console.error('Code highlighting failed:', response.statusText);
            }
          }
        } catch (error) {
          console.error('Error calling code-highlighter API:', error);
        }
      };

      const handleClear = () => {
        // This will trigger the clear function and make content empty
        editorRef.current?.clear();
      };

      return (
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">My Editor</h1>

          <RicherEditor
            ref={editorRef}
            content={content}
            onChange={setContent}
            minHeight='300px'
            maxHeight='70vh'
          />

          <div style={{ margin: 20 }}>
            <button style={{border: "1px solid black", padding: "10px", marginRight: "10px"}} onClick={handleSave}>Save</button>
            <button style={{border: "1px solid black", padding: "10px"}} onClick={handleClear}>Clear</button>
          </div>

          {/* Generated content */}
          <div style={{ margin: 20 }}>
            <strong>Last Saved Content:</strong>
            <RicherContent content={content?.html || ""} />
          </div>

        </div>
      );
    };

    export default MyEditor;

    ```
  </Tab>
</TabsWrapper>

### What This Does

1. **Sanitizes HTML**: Removes potentially malicious scripts and unsafe content using DOMPurify
2. **Highlights Code**: Uses Shiki to add syntax highlighting to code blocks
3. **Supports Multiple Languages**: Handles JavaScript, TypeScript, JSX, TSX, HTML, CSS, Python, JSON, and many more programming languages
4. **Error Handling**: Falls back gracefully if highlighting fails
5. **Performance Optimized**: Includes caching mechanisms for better performance

<Alert type="warning">Always sanitize content on the server-side for security, even if you also process it on the client-side.</Alert>