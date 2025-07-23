import { createHighlighter } from 'shiki'
import { NextResponse } from "next/server";

let highlighterPromise: ReturnType<typeof createHighlighter> | null = null

async function getHighlighterInstance() {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: ['github-dark'],
      langs: ['javascript', 'tsx', 'jsx', 'typescript', 'html', 'css', 'python', 'json'],
    })
  }
  return highlighterPromise
}

const langMap: Record<string, string> = {
  typescriptreact: 'tsx',
  javascriptreact: 'jsx',
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

async function highlightHtmlWithShiki(html: string): Promise<string> {
  const highlighter = await getHighlighterInstance()

  return html.replace(
    /<pre><code class="language-(\w+)">([\s\S]*?)<\/code><\/pre>/g,
    (_, lang, code) => {
      try {
        console.log(lang);
        const decodedCode = decodeHTMLEntities(code);
        const resolvedLang = langMap[lang] || lang;
        console.log(resolvedLang);
        const highlightedCode = highlighter.codeToHtml(decodedCode, {
          lang: resolvedLang,
          theme: 'github-dark',
        })
        return highlightedCode
      } catch (error) {
        console.error('Shiki highlighting error:', error)
        return `<pre><code class="language-${lang}">${code}</code></pre>`
      }
    }
  )
}

export async function POST(request: Request) {
  const body = await request.json()
  const content = body.content

  const highlitdcontent = await highlightHtmlWithShiki(content)

  return NextResponse.json({ highlitdcontent })
}