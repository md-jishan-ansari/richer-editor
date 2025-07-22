"use client";

import React, { useState } from "react";
import SmallTiptapEditor from "@/components/SmallRicherEditor";
import { ThemeToggle } from "@/components/tiptap-templates/simple/theme-toggle";
import TiptapEditor from "@/components/RicherEditor";

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

  return (
    <div>
      <ThemeToggle />
      <h2>Large Editor</h2>
      <TiptapEditor
        minHeight="300px"
        maxHeight="600px"
        content={largeContent}
        onChange={handleLargeChange}
      />
      <div style={{margin: '1em 0', background: '#f8f8f8', padding: 8}}>
        <b>Large Editor Content:</b>
        <pre style={{whiteSpace: 'pre-wrap'}}>{largeContent}</pre>
      </div>
      <h2>Small Editor</h2>
      <SmallTiptapEditor
        content={smallContent}
        onChange={handleSmallChange}
        imageUploadUrl="/api/temp-image-upload"
      />
      <div style={{margin: '1em 0', background: '#f8f8f8', padding: 8}}>
        <b>Small Editor Content:</b>
        <pre style={{whiteSpace: 'pre-wrap'}}>{smallContent}</pre>
      </div>
    </div>
  );
}
