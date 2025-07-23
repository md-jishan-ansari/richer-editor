"use client";

import React, { useState } from "react";
import SmallTiptapEditor from "@/components/SmallRicherEditor";
import TiptapEditor from "@/components/RicherEditor";
import RicherContent from "@/components/RicherContent";

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
  // Store JSON as object for large editor
  const [largeContent, setLargeContent] = useState<any>("");
  const [smallContent, setSmallContent] = useState<any>("");

  // Accepts string or object, stores as object for JSON, string for HTML
  const handleLargeChange = (value: any) => {
    setLargeContent(value);
  };
  const handleSmallChange = (value: string | object) => {
    setSmallContent(value);
  };

  // Example i18n objects
  const i18nLarge = { bold: "Bold (Large)", image: "Insert Image (Large)", code: "Code (Large)" };
  const i18nSmall = { bold: "Bold (Small)", image: "Insert Image (Small)", code: "Code (Small)" };


  return (
    <div className="bg-white dark:bg-black">
      <ThemeToggle />
      <h2>Large Editor (RicherEditor)</h2>
      <TiptapEditor
        minHeight="300px"
        maxHeight="300px"
        content={largeContent}
        onChange={handleLargeChange}
        outputFormat="html"
        // excludeToolbarButtons={["image", "code", "video"]}
        readOnly={false}
        placeholder="Start typing in the large editor..."
        className="my-large-editor"
        style={{ minHeight: 300 }}
        i18n={i18nLarge}
        imageUploadUrl="/api/temp-image-upload"
      />
      <RicherContent content={largeContent} />


      <h2>Small Editor (SmallRicherEditor)</h2>
      <SmallTiptapEditor
        minHeight="150px"
        maxHeight="300px"
        content={smallContent}
        onChange={handleSmallChange}
        outputFormat="html"
        // excludeToolbarButtons={["video", "code", "bold"]}
        placeholder="Read-only small editor..."
        className="my-small-editor"
        style={{ minHeight: 150 }}
        i18n={i18nSmall}
        imageUploadUrl="/api/temp-image-upload"
      />
      <RicherContent content={smallContent} />
    </div>
  );
}
