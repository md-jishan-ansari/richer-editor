"use client";

import React, { useState, useRef } from "react";
import SmallRicherEditor from "@/components/SmallRicherEditor";
import RicherEditor from "@/components/RicherEditor";
import RicherContent from "@/components/RicherContent";
import Italic from '@tiptap/extension-italic';
import SubscriptIcon from "@/icons/SubscriptIcon";
import SuperscriptIcon from "@/icons/SuperscriptIcon";
import Superscript from "@tiptap/extension-superscript";
import Subscript from "@tiptap/extension-subscript";

const ThemeToggle = () => {
  const [dark, setDark] = React.useState(false);
  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);
  return (
    <button
      className="px-2 py-1 rounded border bg-white dark:bg-gray-800 dark:text-white"
      onClick={() => setDark(d => !d)}
      type="button"
    >
      {dark ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default function Home() {
  // Store last saved content for both editors
  const [largeContent, setLargeContent] = useState<{ json?: object | string, html?: string }>({});
  const [smallContent, setSmallContent] = useState<{ json?: object | string, html?: string }>({});

  // Refs for imperative save
  const largeEditorRef = useRef<any>(null);
  const smallEditorRef = useRef<any>(null);

  // Accepts { html, json } and stores as { json: object }
  const handleLargeChange = (value: { html: string; json: object | string }) => {
    setLargeContent(value);
  };
  const handleSmallChange = (value: { html: string; json: object | string }) => {
    setSmallContent(value);
  };

  // Example i18n objects
  const i18nLarge = { bold: "Bold (Large)", image: "Insert Image (Large)", code: "Code (Large)" };
  const i18nSmall = { bold: "Bold (Small)", image: "Insert Image (Small)", code: "Code (Small)" };

  const classes = "prose dark:prose-invert prose-sm lg:prose-lg prose-p:mt-0 prose-p:mb-1 leading-6 prose-blockquote:bg-muted/50 prose-blockquote:p-2 prose-blockquote:px-6 prose-blockquote:border-border prose-blockquote:not-italic prose-blockquote:rounded-r-lg [&_blockquote>p]:after:content-none [&_blockquote>p]:before:content-none  prose-li:marker:text-muted-foreground w-full max-w-full";

  // Initial content for demonstration (optional)
  const initialLargeContent = {
    html: `
      <h1>Code Block Language Class Test</h1>
      <p>This editor now properly applies language classes to the &lt;code&gt; element!</p>
      <pre><code class="language-javascript">// This is JavaScript code
function hello() {
  console.log("Hello, World!");
}</code></pre>
      <pre><code class="language-typescript">// This is TypeScript code
interface User {
  name: string;
  age: number;
}</code></pre>
      <pre><code class="language-json">{
  "name": "test",
  "value": 123
}</code></pre>
      <p>Notice that the language class is now on the &lt;code&gt; element, not the &lt;pre&gt; element.</p>
    `,
    json: ''
  };
  const initialSmallContent = {
    html: `
      <h2>Small Editor Test</h2>
      <p>This editor also applies language classes correctly.</p>
      <pre><code class="language-python"># This is Python code
def hello():
    print("Hello, World!")</code></pre>
    `,
    json: ''
  };

  return (
    <div className="bg-white dark:bg-black">
      <ThemeToggle />
      <h2>Large Editor (RicherEditor)</h2>

      <RicherEditor
        ref={largeEditorRef}
        minHeight="200px"
        maxHeight="300px"
        content={initialLargeContent}
        onChange={handleLargeChange}
        className={classes}
        i18n={i18nLarge}
        fontSizeOptions={[
          { name: '66px', value: '66px' },
          { name: '68px', value: '68px' },
        ]}
        fontFamilyOptions={[
          { name: 'Arial', value: 'Arial, sans-serif' },
          { name: 'Georgia', value: 'Georgia, serif' },
          { name: 'Inter', value: 'Inter, sans-serif' },
        ]}
      />
      <button type="button" className="richer-editor-primaryBtn mt-2" onClick={() => largeEditorRef.current?.save()}>
        Save Large Editor (from outside)
      </button>
      <div className="mt-2">
        <strong>Last Saved Content (Large):</strong>
        <RicherContent content={largeContent.html || ""} className={classes}  />
      </div>

      <h2>Small Editor (SmallRicherEditor)</h2>
      <SmallRicherEditor
        ref={smallEditorRef}
        minHeight="150px"
        maxHeight="300px"
        content={initialSmallContent}
        onChange={setSmallContent}
        className={classes}

      />
      <button type="button" className="richer-editor-primaryBtn mt-2" onClick={() => smallEditorRef.current?.save()}>
        Save Small Editor (from outside)
      </button>

      <div className="mt-2">
        <strong>Last Saved Content (Small):</strong>
        <RicherContent content={smallContent.html || ""} className={classes}  />
      </div>
    </div>
  );
}
