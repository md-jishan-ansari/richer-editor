"use client";

import React, { useState } from "react";
import SmallTiptapEditor from "@/components/SmallRicherEditor";
import { ThemeToggle } from "@/components/tiptap-templates/simple/theme-toggle";
import TiptapEditor from "@/components/RicherEditor";
import RichTextContent from "@/components/RichTextContent";

export default function Home() {
  // Store JSON as object for large editor
  const [largeContent, setLargeContent] = useState<any>("");
  const [smallContent, setSmallContent] = useState<any>("");

  // Accepts string or object, stores as object for JSON, string for HTML
  const handleLargeChange = (value: any) => {

    if (typeof value === 'string') {
      setLargeContent(value);
    } else {
      setLargeContent(JSON.stringify(value, null, 2));
    }

  };
  const handleSmallChange = (value: string | object) => {
    if (typeof value === 'string') {
      setSmallContent(value);
    } else {
      setSmallContent(JSON.stringify(value, null, 2));
    }
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
      <RichTextContent content={largeContent} />
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
      <RichTextContent content={smallContent} />
    </div>
  );
}
