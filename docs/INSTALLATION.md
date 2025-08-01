# Installation Guide

## Installation

### Using npm
```bash
npm install richer-editor
```

### Using yarn
```bash
yarn add richer-editor
```

### Using pnpm
```bash
pnpm add richer-editor
```

## Peer Dependencies

Peer dependencies will be automatically installed, but if they're not, make sure you have the following peer dependencies installed:

```bash
npm install @tiptap/react @tiptap/starter-kit @tiptap/extension-link @tiptap/extension-text-align @tiptap/extension-task-list @tiptap/extension-task-item @tiptap/extension-superscript @tiptap/extension-subscript @tiptap/extension-image @tiptap/extension-drag-handle-react @tiptap/extension-youtube @tiptap/extension-highlight @tiptap/extension-text-style @tiptap/extension-font-family @tiptap/extension-font-size @tiptap/extension-color clsx
```

## Getting Started

### Basic Usage

Here's a basic editor component that works with both React and Next.js:

<TabsWrapper>
  <Tab id="withouttypescript" title="Without TypeScript">
     ```jsx
      import React, { useState, useRef, useEffect } from 'react';
      import { RicherContent, RicherEditor } from 'richer-editor';

      const MyEditor = () => {
        // Initialize with empty content structure
        const [content, setContent] = useState();

        const editorRef = useRef(null);

        const handleSave = () => {
          // This will trigger the save function and update content via onChange
          editorRef.current?.save();

          // TODO: Add your backend logic here to save content to database
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
              <button onClick={handleSave}>Save</button>
              <button onClick={handleClear}>Clear</button>
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

  <Tab id="withtypescript" title="With TypeScript">
    ```tsx
      "use client"

      import React, { useState, useRef } from 'react';
      import { RicherContent, RicherEditor } from 'richer-editor';

      interface EditorRef {
        save: () => void;
        clear: () => void;
        editor: any;
      }

      const MyEditor = () => {
        // Initialize with empty content structure
        const [content, setContent] = useState<{ html?: string; json?: object | string }>({});

        const editorRef = useRef<EditorRef>(null);

        const handleSave = () => {
          // This will trigger the save function and update content via onChange
          editorRef.current?.save();

          // TODO: Add your backend logic here to save content to database
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

<Alert>
**Important Notes:**
- The `content` state should always have the structure `{ html: string; json: object | string }`
- The `onChange` callback will be triggered when you click the Save button or click anywhere outside the editor
- Use the `ref` to access the `save()` and `clear()` methods
- The `save()` method will call your `onChange` handler with the current content
- **For editing existing content**: The editor can receive content with just the `json` property. If `html` is not provided, it will still work as long as `json` is present like this: `{ json: object | string }`.
</Alert>

## Styling Setup

### With Tailwind CSS

First, set up your React/Next.js project with Tailwind CSS. <br />
To properly style the editor content with Tailwind CSS, you need to:

1. **Install the typography package:**
```bash
npm install @tailwindcss/typography
```

2. **Configure Tailwind CSS:**
```ts {3, 19-21}
// tailwind.config.ts
import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    typography,
  ],
};
export default config;

```

3. **Use the recommended classes:**
```tsx {8, 16}
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

If you're not using Tailwind CSS, you need to add custom CSS for the editor and page:

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

h4 {
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0.75rem 0 0.5rem 0;
}

h5 {
  font-size: 1rem;
  font-weight: 600;
  margin: 0.5rem 0 0.25rem 0;
}

h6 {
  font-size: 0.875rem;
  font-weight: 600;
  margin: 0.5rem 0 0.25rem 0;
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
  font-size: 0.875em;
}

pre {
  color: #e5e7eb;
  background-color: #1f2937;
  white-space: pre-wrap;
  padding: 1rem;
  border-radius: 0.5rem;
  overflow-x: auto;
  margin: 1rem 0;
}

pre code {
  background-color: transparent;
  padding: 0;
  border-radius: 0;
}

img {
  max-width: 100%;
  height: auto;
  margin: 1rem 0;
  border-radius: 0.375rem;
}

a {
  color: #3b82f6;
  text-decoration: underline;
}

a:hover {
  color: #1d4ed8;
}

hr {
  border: none;
  border-top: 1px solid #e5e7eb;
  margin: 2rem 0;
}

strong {
  font-weight: 600;
}

em {
  font-style: italic;
}

small {
  font-size: 0.875em;
  color: #6b7280;
}

mark {
  background-color: #fef3c7;
  padding: 0.125rem 0.25rem;
  border-radius: 0.25rem;
}

del {
  text-decoration: line-through;
  color: #6b7280;
}

ins {
  text-decoration: underline;
}

/* Definition list */
dl {
  margin: 1rem 0;
}

dt {
  font-weight: 600;
  margin-top: 1rem;
}

dd {
  margin-left: 1rem;
  margin-top: 0.25rem;
  color: #6b7280;
}

/* Figure and figcaption */
figure {
  margin: 1rem 0;
}

figcaption {
  text-align: center;
  font-size: 0.875rem;
  color: #6b7280;
  margin-top: 0.5rem;
}
```

<Alert>Edit these CSS rules according to your design preferences and requirements.</Alert>

## Next Steps

Now that you have the basic setup complete, you can:

1. **[Explore the API Reference](API-REFERENCE.md)** - Learn about all available props and options
2. **[Check out Examples](EXAMPLES.md)** - See practical usage examples
3. **[Learn about Extending](EXTENDING.md)** - Add custom functionality
4. **[Read Troubleshooting](TROUBLESHOOTING.md)** - Common issues and solutions