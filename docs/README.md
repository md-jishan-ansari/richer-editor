# Richer Editor

A modern, customizable React and Next.js rich text editor built with Tiptap and ProseMirror. Fast, extensible, and perfect for blogs, CMS, and web apps.

Richer Editor provides a powerful, feature-rich text editing experience with a clean, modern interface. Built on top of Tiptap and ProseMirror, it offers excellent performance, extensibility, and a comprehensive set of formatting tools. Whether you're building a blog platform, content management system, or any web application that requires rich text editing, Richer Editor delivers a professional editing experience with minimal setup.

## Features

* **Comprehensive Text Formatting**: Bold, italic, underline, strikethrough, code, and text highlighting
* **Block-level Elements**: Headings (H1-H6), bullet lists, ordered lists, task lists, and blockquotes
* **Advanced Typography**: Font family selection, font size control, text color, and background color
* **Content Alignment**: Left, center, right, and justify alignment options
* **Media Support**: Image and video embedding with drag-and-drop functionality
* **Link Management**: Easy link insertion and editing
* **Customizable Toolbar**: Show/hide specific buttons or add custom toolbar elements
* **Internationalization**: Built-in i18n support for customizing labels
* **Responsive Design**: Works seamlessly across desktop and mobile devices
* **TypeScript Support**: Full TypeScript definitions for better development experience
* **Extensible Architecture**: Add custom Tiptap extensions and toolbar buttons

## Two Editor Variants

Richer Editor comes with two main components to suit different use cases:

### RicherEditor
The full-featured editor with comprehensive formatting options, media support, and advanced typography controls. Perfect for blog posts, articles, and rich content creation.

![RicherEditor Full Featured Editor](https://via.placeholder.com/800x400/4F46E5/FFFFFF?text=RicherEditor+Full+Featured+Editor)
<!-- Screenshot: RicherEditor showing full toolbar with all formatting options, media buttons, and advanced typography controls -->

### SmallRicherEditor
A simplified version with a streamlined toolbar and fewer formatting options. Ideal for comments, quick notes, and when you need a distraction-free writing experience.

![SmallRicherEditor Simplified Editor](https://via.placeholder.com/800x300/10B981/FFFFFF?text=SmallRicherEditor+Simplified+Editor)
<!-- Screenshot: SmallRicherEditor showing minimal toolbar with basic formatting options only -->

## Getting Started

### Installation

```bash
npm install richer-editor
```

```bash
yarn add richer-editor
```

```bash
pnpm add richer-editor
```

### Peer Dependencies

The following peer dependencies will be automatically installed with the package, but if you encounter any issues, you can install them manually:

```bash
npm install @tiptap/react @tiptap/starter-kit @tiptap/extension-link @tiptap/extension-text-align @tiptap/extension-task-list @tiptap/extension-task-item @tiptap/extension-superscript @tiptap/extension-subscript @tiptap/extension-image @tiptap/extension-drag-handle-react @tiptap/extension-youtube @tiptap/extension-highlight @tiptap/extension-text-style @tiptap/extension-font-family @tiptap/extension-font-size @tiptap/extension-color clsx react react-dom
```

## Basic Usage

### Simple Editor Component

Here's a basic editor component that works with both React and Next.js:

#### Without TypeScript

```jsx
import React, { useState, useRef } from 'react';
import { RicherEditor } from 'richer-editor';

const MyEditor = () => {
  // Initialize with empty content structure
  const [content, setContent] = useState({
    html: '',
    json: {}
  });

  const editorRef = useRef(null);

  const handleSave = () => {
    // This will trigger the save function and update content via onChange
    editorRef.current?.save();
    console.log('Content saved:', content);
  };

  const handleClear = () => {
    editorRef.current?.clear();
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Editor</h1>

      <RicherEditor
        ref={editorRef}
        content={content}
        onChange={setContent}
        className="min-h-[400px]"
      />

      <div className="mt-4 flex gap-2">
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Save
        </button>
        <button
          onClick={handleClear}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Clear
        </button>
      </div>

      <div className="mt-4 p-4 bg-gray-50 rounded">
        <h3 className="font-semibold mb-2">Generated HTML:</h3>
        <pre className="text-sm overflow-x-auto">{content.html}</pre>
      </div>
    </div>
  );
};

export default MyEditor;
```

#### With TypeScript

```tsx
import React, { useState, useRef } from 'react';
import { RicherEditor } from 'richer-editor';

interface EditorRef {
  save: () => void;
  clear: () => void;
  editor: any;
}

const MyEditor = () => {
  // Initialize with empty content structure
  const [content, setContent] = useState<{ html: string; json: object | string }>({
    html: '',
    json: {}
  });

  const editorRef = useRef<EditorRef>(null);

  const handleSave = () => {
    // This will trigger the save function and update content via onChange
    editorRef.current?.save();
    console.log('Content saved:', content);
  };

  const handleClear = () => {
    editorRef.current?.clear();
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Editor</h1>

      <RicherEditor
        ref={editorRef}
        content={content}
        onChange={setContent}
        className="min-h-[400px]"
      />

      <div className="mt-4 flex gap-2">
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Save
        </button>
        <button
          onClick={handleClear}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Clear
        </button>
      </div>

      <div className="mt-4 p-4 bg-gray-50 rounded">
        <h3 className="font-semibold mb-2">Generated HTML:</h3>
        <pre className="text-sm overflow-x-auto">{content.html}</pre>
      </div>
    </div>
  );
};

export default MyEditor;
```

**Important Notes:**
- The `content` state should always have the structure `{ html: string; json: object | string }`
- The `onChange` callback will be triggered when you click the Save button or click anywhere outside the editor
- Use the `ref` to access the `save()` and `clear()` methods
- The `save()` method will call your `onChange` handler with the current content
- **For editing existing content**: The editor can receive content with just `json` property. If `html` is not provided, it will still work as long as `json` is present.

## Framework-Specific Usage

### React (Create React App)

#### Basic Setup

```jsx
// App.js
import React, { useState, useRef } from 'react';
import { RicherEditor } from 'richer-editor';

function App() {
  const [content, setContent] = useState({
    html: '<p>Start typing here...</p>',
    json: {}
  });

  const editorRef = useRef(null);

  const handleSave = () => {
    editorRef.current?.save();
    console.log('Content saved:', content);
  };

  const handleClear = () => {
    editorRef.current?.clear();
  };

  return (
    <div className="App">
      <h1>My React App with Richer Editor</h1>
      <RicherEditor
        ref={editorRef}
        content={content}
        onChange={setContent}
        className="min-h-[400px]"
      />
      <div className="mt-4 flex gap-2">
        <button onClick={handleSave}>Save</button>
        <button onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
}

export default App;
```

#### With TypeScript

```tsx
// App.tsx
import React, { useState, useRef } from 'react';
import { RicherEditor } from 'richer-editor';

interface ContentType {
  html: string;
  json: object | string;
}

interface EditorRef {
  save: () => void;
  clear: () => void;
  editor: any;
}

function App(): JSX.Element {
  const [content, setContent] = useState<ContentType>({
    html: '<p>Start typing here...</p>',
    json: {}
  });

  const editorRef = useRef<EditorRef>(null);

  const handleSave = () => {
    editorRef.current?.save();
    console.log('Content saved:', content);
  };

  const handleClear = () => {
    editorRef.current?.clear();
  };

  return (
    <div className="App">
      <h1>My React App with Richer Editor</h1>
      <RicherEditor
        ref={editorRef}
        content={content}
        onChange={setContent}
        className="min-h-[400px]"
      />
      <div className="mt-4 flex gap-2">
        <button onClick={handleSave}>Save</button>
        <button onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
}

export default App;
```

### Next.js Pages Router

#### Basic Page Component

```tsx
// pages/editor.tsx
import React, { useState, useRef } from 'react';
import { RicherEditor } from 'richer-editor';
import type { NextPage } from 'next';

interface EditorRef {
  save: () => void;
  clear: () => void;
  editor: any;
}

const EditorPage: NextPage = () => {
  const [content, setContent] = useState({
    html: '<p>Start typing here...</p>',
    json: {}
  });

  const editorRef = useRef<EditorRef>(null);

  const handleSave = () => {
    editorRef.current?.save();
    console.log('Content saved:', content);
  };

  const handleClear = () => {
    editorRef.current?.clear();
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Next.js Pages Router Editor</h1>
      <RicherEditor
        ref={editorRef}
        content={content}
        onChange={setContent}
        className="min-h-[400px]"
      />
      <div className="mt-4 flex gap-2">
        <button onClick={handleSave}>Save</button>
        <button onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
};

export default EditorPage;
```

#### API Route for Image Upload

```tsx
// pages/api/upload-image.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const form = formidable();
    const [fields, files] = await form.parse(req);

    // Handle file upload logic here
    // Example: upload to cloud storage, save to database, etc.

    // Return the uploaded image URL
    res.status(200).json({
      success: true,
      url: 'https://example.com/uploaded-image.jpg'
    });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Upload failed' });
  }
}
```

## Styling

### With Tailwind CSS

To properly style the editor content with Tailwind CSS, you need to:

1. **Install the typography plugin:**
```bash
npm install @tailwindcss/typography
```

2. **Configure Tailwind CSS:**
```js
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
```

3. **Use the recommended classes:**
```tsx
import React, { useState, useRef } from 'react';
import { RicherEditor } from 'richer-editor';

const MyEditor = () => {
  const [content, setContent] = useState({ html: '', json: {} });
  const editorRef = useRef(null);

  const classes = "prose dark:prose-invert prose-sm lg:prose-lg prose-p:mt-0 prose-p:mb-1 leading-6 prose-blockquote:bg-muted/50 prose-blockquote:p-2 prose-blockquote:px-6 prose-blockquote:border-border prose-blockquote:not-italic prose-blockquote:rounded-r-lg [&_blockquote>p]:after:content-none [&_blockquote>p]:before:content-none prose-li:marker:text-muted-foreground w-full max-w-full";

  return (
    <div className="p-4">
      <RicherEditor
        ref={editorRef}
        content={content}
        onChange={setContent}
        className={classes}
      />
    </div>
  );
};
```

### Without Tailwind CSS

If you're not using Tailwind CSS, you need to add custom CSS for the editor content:

```css
/* Add this to your CSS file */
p {
  font-size: 16px;
  line-height: 1.6;
  margin: 0 0 1rem 0;
}

h1 {
  font-size: 2rem;
  font-weight: bold;
  margin: 1.5rem 0 1rem 0;
}

h2 {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 1.25rem 0 0.75rem 0;
}

h3 {
  font-size: 1.25rem;
  font-weight: bold;
  margin: 1rem 0 0.5rem 0;
}

ul {
  list-style-type: disc;
  margin: 1rem 0;
  padding-left: 2rem;
}

ol {
  list-style-type: decimal;
  margin: 1rem 0;
  padding-left: 2rem;
}

li {
  padding-left: 0.5rem;
  margin: 0.25rem 0;
}

blockquote {
  border-left: 4px solid #e5e7eb;
  padding-left: 1rem;
  margin: 1rem 0;
  font-style: italic;
  color: #6b7280;
}

code {
  background-color: #f3f4f6;
  padding: 0.125rem 0.25rem;
  border-radius: 0.25rem;
  font-family: monospace;
}

pre {
  background-color: #f3f4f6;
  padding: 1rem;
  border-radius: 0.5rem;
  overflow-x: auto;
  margin: 1rem 0;
}

img {
  max-width: 100%;
  height: auto;
  margin: 1rem 0;
}

a {
  color: #3b82f6;
  text-decoration: underline;
}

a:hover {
  color: #1d4ed8;
}
```

**Note:** Edit these CSS rules according to your design preferences and requirements.

## Props API Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `content` | `{ json?: object \| string, html?: string }` | `{}` | Controls the initial content of the editor. Can contain both HTML and JSON formats. |
| `onChange` | `(value: { html: string; json: object \| string }) => void` | `undefined` | Callback function that fires when the editor content changes. Returns both HTML and JSON formats. |
| `imageUploadUrl` | `string` | `undefined` | URL endpoint for image upload functionality. If not provided, only URL insertion is available. |
| `minHeight` | `string` | `undefined` | Sets the minimum height of the editor. |
| `maxHeight` | `string` | `undefined` | Sets the maximum height of the editor. |
| `editorProps` | `any` | `{}` | Additional props to pass to the underlying Tiptap editor. |
| `className` | `string` | `''` | Additional CSS classes to apply to the editor container. |
| `excludeToolbarButtons` | `string[]` | `[]` | Array of toolbar button keys to hide from the editor. |
| `i18n` | `Record<string, string>` | `{}` | Internationalization object for customizing button labels and text. |
| `fontSizeOptions` | `{ name: string; value: string }[]` | `undefined` | Custom font size options to replace the default ones. |
| `fontFamilyOptions` | `{ name: string; value: string }[]` | `undefined` | Custom font family options to replace the default ones. |
| `extensions` | `any[]` | `[]` | Additional Tiptap extensions to add to the editor. |
| `customToolbarButtons` | `React.ReactNode \| ((editor: any) => React.ReactNode)` | `undefined` | Custom toolbar buttons or function to render custom toolbar elements. |

### Available Toolbar Buttons for `excludeToolbarButtons`

```tsx
const excludeToolbarButtons = [
  'heading',        // Heading dropdown (H1-H6)
  'fontSize',       // Font size dropdown
  'fontFamily',     // Font family dropdown
  'bold',           // Bold button
  'italic',         // Italic button
  'underline',      // Underline button
  'strike',         // Strikethrough button
  'highlight',      // Text highlight button
  'code',           // Code block button
  'bulletList',     // Bullet list button
  'orderedList',    // Ordered list button
  'taskList',       // Task list button
  'blockquote',     // Blockquote button
  'hr',             // Horizontal rule button
  'table',          // Table button
  'link',           // Link button
  'image',          // Image button
  'video',          // Video button
  'alignLeft',      // Align left button
  'alignCenter',    // Align center button
  'alignRight',     // Align right button
  'alignJustify',   // Align justify button
  'textColor',      // Text color button
  'bgColor',        // Background color button
  'subscript',      // Subscript button
  'superscript',    // Superscript button
  'undo',           // Undo button
  'redo'            // Redo button
];
```

### Available i18n Keys

```tsx
const i18n = {
  heading: 'Heading',
  fontSize: 'Font Size',
  fontFamily: 'Font Family',
  lineHeight: 'Line Height',
  bold: 'Bold',
  italic: 'Italic',
  underline: 'Underline',
  strike: 'Strikethrough',
  highlight: 'Highlight',
  code: 'Code Block',
  bulletList: 'Bullet List',
  orderedList: 'Ordered List',
  taskList: 'Task List',
  blockquote: 'Blockquote',
  hr: 'Horizontal Rule',
  link: 'Insert/Edit Link',
  image: 'Insert Image',
  video: 'Insert YouTube Video',
  alignLeft: 'Align Left',
  alignCenter: 'Align Center',
  alignRight: 'Align Right',
  alignJustify: 'Align Justify',
  textColor: 'Text Color',
  bgColor: 'Background Color',
  subscript: 'Subscript',
  superscript: 'Superscript',
  undo: 'Undo',
  redo: 'Redo',
  insert: 'Insert',
  remove: 'Remove',
  add: 'Add',
  cancel: 'Cancel',
  paragraph: 'Paragraph',
  url: 'URL',
  upload: 'Upload',
  pasteImageUrl: 'Paste image URL here...',
  pasteLinkUrl: 'Paste link URL here...',
  pasteVideoUrl: 'Paste YouTube video URL here...',
  width: 'Width',
  height: 'Height',
  ulStyle: 'UL Style',
  olStyle: 'OL Style',
  removeColor: 'Remove Color',
  uploading: 'Uploading...',
  uploadFailed: 'Upload failed',
  newTab: 'New Tab (_blank)',
  sameTab: 'Same Tab (_self)',
  parentFrame: 'Parent Frame (_parent)',
  topFrame: 'Top Frame (_top)'
};
```

## Image Upload

### Setting up Image Upload

To enable image upload functionality, provide the `imageUploadUrl` prop:

```tsx
<RicherEditor
  content={content}
  onChange={setContent}
  imageUploadUrl="/api/upload-image"
  className="min-h-[400px]"
/>
```

### API Endpoint Example

Your API endpoint should handle file uploads and return the image URL:

```tsx
// pages/api/upload-image.ts (Next.js Pages Router)
import type { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const form = formidable();
    const [fields, files] = await form.parse(req);

    // Handle file upload logic here
    // Example: upload to cloud storage, save to database, etc.

    // Return the uploaded image URL
    res.status(200).json({
      success: true,
      url: 'https://example.com/uploaded-image.jpg'
    });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Upload failed' });
  }
}
```

### Without Image Upload

If you don't provide `imageUploadUrl`, only the URL insertion option will be available for images. Users can paste image URLs directly into the editor.

## Content Sanitization and Code Highlighting

Before saving content to your backend, it's recommended to sanitize the HTML and highlight code blocks for better security and presentation. Here's how to set up an API endpoint for this:

### API Endpoint for Content Processing

```tsx
// pages/api/code-highlighter.ts (Next.js Pages Router)
import { createHighlighter } from 'shiki'
import DOMPurify from 'isomorphic-dompurify';
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

  // Sanitize the HTML content
  const cleanHtml = DOMPurify.sanitize(html);

  return cleanHtml.replace(
    /<pre><code class="language-(\w+)">([\s\S]*?)<\/code><\/pre>/g,
    (_, lang, code) => {
      try {
        const decodedCode = decodeHTMLEntities(code);
        const resolvedLang = langMap[lang] || lang;

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
  const content = body.data.content;

  const highlightedContent = await highlightHtmlWithShiki(content)

  return NextResponse.json({ content: highlightedContent })
}
```

### Required Dependencies

Install the necessary packages:

```bash
npm install shiki isomorphic-dompurify
```

### Usage in Your Application

```tsx
// API service function
const blogApi = {
  purifyAndHighlight: (content: any) => {
    try {
      return axios.post('/api/code-highlighter', {
        data: {
          content,
        }
      })
    } catch (err) {
      console.log("Error processing content", err);
      return Promise.reject(err);
    }
  },
};

// Usage in your save function
const handleSave = async () => {
  editorRef.current?.save();

  try {
    // Process content before saving to backend
    const response = await blogApi.purifyAndHighlight(content.html || "");
    const processedContent = response.data.content;

    // Now save the processed content to your backend
    await saveToBackend(processedContent);

    console.log('Content saved successfully');
  } catch (error) {
    console.error('Error saving content:', error);
  }
};
```

### What This Does

1. **Sanitizes HTML**: Removes potentially malicious scripts and unsafe content using DOMPurify
2. **Highlights Code**: Uses Shiki to add syntax highlighting to code blocks
3. **Supports Multiple Languages**: Handles JavaScript, TypeScript, JSX, TSX, HTML, CSS, Python, and JSON
4. **Error Handling**: Falls back gracefully if highlighting fails

### Alternative: Client-Side Processing

If you prefer client-side processing, you can use libraries like `highlight.js` or `prismjs`:

```tsx
import hljs from 'highlight.js';
import DOMPurify from 'dompurify';

const processContent = (html: string) => {
  // Sanitize first
  const cleanHtml = DOMPurify.sanitize(html);

  // Then highlight code blocks
  const highlightedHtml = hljs.highlightAll();

  return cleanHtml;
};
```

**Note**: Always sanitize content on the server-side for security, even if you also process it on the client-side.

## Detailed Prop Examples

### `content` - Initial Content

```tsx
// With HTML content
<RicherEditor
  content={{ html: '<h1>Hello World</h1><p>This is some content.</p>' }}
  onChange={setContent}
/>

// With JSON content (Tiptap format)
<RicherEditor
  content={{
    json: {
      type: "doc",
      content: [
        {
          type: "heading",
          attrs: { level: 1 },
          content: [{ type: "text", text: "Hello World" }]
        },
        {
          type: "paragraph",
          content: [{ type: "text", text: "This is some content." }]
        }
      ]
    }
  }}
  onChange={setContent}
/>

// With both HTML and JSON
<RicherEditor
  content={{
    html: '<h1>Hello World</h1><p>This is some content.</p>',
    json: { /* Tiptap JSON structure */ }
  }}
  onChange={setContent}
/>

// For editing existing content (only JSON required)
<RicherEditor
  content={{ json: existingContentJson }}
  onChange={setContent}
/>
```

### `onChange` - Content Change Handler

```tsx
// Direct setState usage
<RicherEditor
  content={content}
  onChange={setContent}
/>

// With custom handler
<RicherEditor
  content={content}
  onChange={(newContent) => {
    setContent(newContent);
    console.log('Content changed:', newContent.html);
    // Save to database or perform other actions
    saveToDatabase(newContent.html);
  }}
/>
```

### `imageUploadUrl` - Image Upload Endpoint

```tsx
// With image upload enabled
<RicherEditor
  content={content}
  onChange={setContent}
  imageUploadUrl="/api/upload-image"
/>

// Without image upload (only URL insertion available)
<RicherEditor
  content={content}
  onChange={setContent}
  // imageUploadUrl not provided
/>
```

### `minHeight` and `maxHeight` - Editor Dimensions

```tsx
// Set minimum height
<RicherEditor
  content={content}
  onChange={setContent}
  minHeight="300px"
/>

// Set maximum height with scrolling
<RicherEditor
  content={content}
  onChange={setContent}
  maxHeight="500px"
/>

// Both minimum and maximum height
<RicherEditor
  content={content}
  onChange={setContent}
  minHeight="200px"
  maxHeight="600px"
/>
```

### `className` - Custom CSS Classes

```tsx
// With Tailwind CSS classes
<RicherEditor
  content={content}
  onChange={setContent}
  className="prose max-w-none border border-gray-300 rounded-lg"
/>

// With custom CSS classes
<RicherEditor
  content={content}
  onChange={setContent}
  className="my-custom-editor-class"
/>
```

### `excludeToolbarButtons` - Hide Toolbar Buttons

```tsx
// Hide specific buttons
<RicherEditor
  content={content}
  onChange={setContent}
  excludeToolbarButtons={['image', 'video', 'table']}
/>

// Hide multiple buttons for simplified editor
<RicherEditor
  content={content}
  onChange={setContent}
  excludeToolbarButtons={[
    'heading',
    'fontSize',
    'fontFamily',
    'textColor',
    'bgColor',
    'subscript',
    'superscript',
    'image',
    'video'
  ]}
/>

// Hide all advanced formatting options
<RicherEditor
  content={content}
  onChange={setContent}
  excludeToolbarButtons={[
    'heading',
    'fontSize',
    'fontFamily',
    'textColor',
    'bgColor',
    'subscript',
    'superscript',
    'image',
    'video',
    'table',
    'taskList'
  ]}
/>
```

### `i18n` - Internationalization

```tsx
// Spanish labels
const spanishLabels = {
  bold: 'Negrita',
  italic: 'Cursiva',
  underline: 'Subrayado',
  strike: 'Tachado',
  code: 'Código',
  bulletList: 'Lista con viñetas',
  orderedList: 'Lista numerada',
  taskList: 'Lista de tareas',
  blockquote: 'Cita',
  link: 'Enlace',
  image: 'Imagen',
  video: 'Video',
  alignLeft: 'Alinear izquierda',
  alignCenter: 'Centrar',
  alignRight: 'Alinear derecha',
  alignJustify: 'Justificar'
};

<RicherEditor
  content={content}
  onChange={setContent}
  i18n={spanishLabels}
/>

// Custom labels for specific use case
const customLabels = {
  bold: 'Make Bold',
  italic: 'Make Italic',
  link: 'Add Link',
  image: 'Insert Picture',
  video: 'Add Video'
};

<RicherEditor
  content={content}
  onChange={setContent}
  i18n={customLabels}
/>
```

### `fontSizeOptions` - Custom Font Sizes

```tsx
// Custom font size options
const customFontSizes = [
  { name: 'Small', value: '12px' },
  { name: 'Normal', value: '16px' },
  { name: 'Large', value: '20px' },
  { name: 'Extra Large', value: '24px' },
  { name: 'Huge', value: '32px' }
];

<RicherEditor
  content={content}
  onChange={setContent}
  fontSizeOptions={customFontSizes}
/>
```

### `fontFamilyOptions` - Custom Font Families

```tsx
// Custom font family options
const customFontFamilies = [
  { name: 'Default', value: 'system-ui, sans-serif' },
  { name: 'Serif', value: 'Georgia, serif' },
  { name: 'Monospace', value: 'Consolas, monospace' },
  { name: 'Handwriting', value: 'Comic Sans MS, cursive' },
  { name: 'Modern', value: 'Inter, sans-serif' }
];

<RicherEditor
  content={content}
  onChange={setContent}
  fontFamilyOptions={customFontFamilies}
/>
```

### `extensions` - Custom Tiptap Extensions

```tsx
import CustomExtension from './CustomExtension';

// Add custom extension
<RicherEditor
  content={content}
  onChange={setContent}
  extensions={[CustomExtension]}
/>

// Add multiple extensions
<RicherEditor
  content={content}
  onChange={setContent}
  extensions={[CustomExtension1, CustomExtension2]}
/>
```

### `customToolbarButtons` - Custom Toolbar Elements

```tsx
// Custom button component
const CustomSaveButton = ({ editor }) => (
  <button
    onClick={() => {
      const content = editor.getHTML();
      console.log('Saving content:', content);
    }}
    className="toolbar-button"
    title="Save"
  >
    💾
  </button>
);

// Using custom toolbar buttons
<RicherEditor
  content={content}
  onChange={setContent}
  customToolbarButtons={CustomSaveButton}
/>

// Or as a function
<RicherEditor
  content={content}
  onChange={setContent}
  customToolbarButtons={(editor) => (
    <div className="custom-toolbar-section">
      <CustomSaveButton editor={editor} />
      <CustomExportButton editor={editor} />
    </div>
  )}
/>
```

### `editorProps` - Additional Tiptap Props

```tsx
// Pass additional Tiptap editor props
<RicherEditor
  content={content}
  onChange={setContent}
  editorProps={{
    attributes: {
      class: 'custom-editor-class',
      style: 'background-color: #f9f9f9;'
    },
    handleDOMEvents: {
      keydown: (view, event) => {
        // Custom keydown handling
        return false;
      }
    }
  }}
/>
```

## Component Variants

### RicherEditor

The main editor component with full feature set including all formatting options, media support, and advanced typography controls.

```tsx
import { RicherEditor } from 'richer-editor';

// Full-featured editor
<RicherEditor
  content={content}
  onChange={setContent}
  imageUploadUrl="/api/upload-image"
  className="min-h-[500px]"
/>
```

### SmallRicherEditor

A simplified version of the editor with a reduced toolbar and fewer formatting options, perfect for comments, quick notes, or when you need a more streamlined interface.

```tsx
import { SmallRicherEditor } from 'richer-editor';

// Simplified editor for comments
<SmallRicherEditor
  content={content}
  onChange={setContent}
  excludeToolbarButtons={['heading', 'image', 'video']}
  className="min-h-[150px]"
/>
```

### RicherContent

A display-only component for rendering the HTML content generated by the editor without editing capabilities.

```tsx
import { RicherContent } from 'richer-editor';

const BlogPost = ({ postContent }) => {
  return (
    <article className="blog-post">
      <RicherContent
        content={postContent.html}
        className="prose max-w-none"
      />
    </article>
  );
};
```

## Troubleshooting

### Common Issues

#### 1. Peer Dependencies Not Installed

**Error:** `Module not found: Can't resolve '@tiptap/react'`

**Solution:** Install all peer dependencies:
```bash
npm install @tiptap/react @tiptap/starter-kit @tiptap/extension-link @tiptap/extension-text-align @tiptap/extension-task-list @tiptap/extension-task-item @tiptap/extension-superscript @tiptap/extension-subscript @tiptap/extension-image @tiptap/extension-drag-handle-react @tiptap/extension-youtube @tiptap/extension-highlight @tiptap/extension-text-style @tiptap/extension-font-family @tiptap/extension-font-size @tiptap/extension-color clsx react react-dom
```

#### 2. Next.js App Router Issues

**Error:** `use client` directive missing

**Solution:** Add `'use client'` directive to components using the editor:
```tsx
'use client';

import { RicherEditor } from 'richer-editor';
// ... rest of your component
```

#### 3. TypeScript Errors

**Error:** Type definitions not found

**Solution:** Ensure you're using TypeScript and the types are properly imported:
```tsx
import { RicherEditor } from 'richer-editor';

interface ContentType {
  html: string;
  json: object | string;
}
```

#### 4. Styling Issues

**Problem:** Editor styles not applying correctly

**Solution:** Make sure the editor's CSS is properly imported. The component includes its own CSS, but you may need to ensure it's not being overridden by your global styles.

#### 5. Image Upload Issues

**Problem:** Images not uploading

**Solution:** Ensure your API endpoint is properly configured and returns the expected response format:
```json
{
  "success": true,
  "url": "https://example.com/uploaded-image.jpg"
}
```

## Contributing

We welcome contributions! Please feel free to submit issues for bugs and feature requests, and pull requests are always welcome.

To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT license.