// src/components/RicherEditor.tsx
import React33, { useCallback, useState as useState3 } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Heading from "@tiptap/extension-heading";
import ListItem from "@tiptap/extension-list-item";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Underline from "@tiptap/extension-underline";
import Strike from "@tiptap/extension-strike";
import Blockquote from "@tiptap/extension-blockquote";
import CodeBlock from "@tiptap/extension-code-block";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import TextAlign from "@tiptap/extension-text-align";
import { Table } from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import Dropcursor from "@tiptap/extension-dropcursor";
import Gapcursor from "@tiptap/extension-gapcursor";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import Superscript from "@tiptap/extension-superscript";
import Subscript from "@tiptap/extension-subscript";
import Typography from "@tiptap/extension-typography";
import Youtube from "@tiptap/extension-youtube";
import Highlight from "@tiptap/extension-highlight";
import Placeholder from "@tiptap/extension-placeholder";

// src/icons/BoldIcon.tsx
import React from "react";
var BoldIcon = ({ size = 18, color = "currentColor", className }) => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", className }, /* @__PURE__ */ React.createElement("path", { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8" }));
var BoldIcon_default = BoldIcon;

// src/icons/ItalicIcon.tsx
import React2 from "react";
var ItalicIcon = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ React2.createElement(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    ...props
  },
  /* @__PURE__ */ React2.createElement("line", { x1: "19", x2: "10", y1: "4", y2: "4" }),
  /* @__PURE__ */ React2.createElement("line", { x1: "14", x2: "5", y1: "20", y2: "20" }),
  /* @__PURE__ */ React2.createElement("line", { x1: "15", x2: "9", y1: "4", y2: "20" })
);
var ItalicIcon_default = ItalicIcon;

// src/icons/UnderlineIcon.tsx
import React3 from "react";
var UnderlineIcon = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ React3.createElement(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    ...props
  },
  /* @__PURE__ */ React3.createElement("path", { d: "M6 4v6a6 6 0 0 0 12 0V4" }),
  /* @__PURE__ */ React3.createElement("line", { x1: "4", x2: "20", y1: "20", y2: "20" })
);
var UnderlineIcon_default = UnderlineIcon;

// src/icons/StrikeIcon.tsx
import React4 from "react";
var StrikeIcon = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ React4.createElement(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    ...props
  },
  /* @__PURE__ */ React4.createElement("path", { d: "M16 4H9a3 3 0 0 0-2.83 4" }),
  /* @__PURE__ */ React4.createElement("path", { d: "M14 12a4 4 0 0 1 0 8H8" }),
  /* @__PURE__ */ React4.createElement("line", { x1: "4", x2: "20", y1: "12", y2: "12" })
);
var StrikeIcon_default = StrikeIcon;

// src/icons/CodeIcon.tsx
import React5 from "react";
var CodeIcon = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ React5.createElement(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    ...props
  },
  /* @__PURE__ */ React5.createElement("path", { d: "m18 16 4-4-4-4" }),
  /* @__PURE__ */ React5.createElement("path", { d: "m6 8-4 4 4 4" }),
  /* @__PURE__ */ React5.createElement("path", { d: "m14.5 4-5 16" })
);
var CodeIcon_default = CodeIcon;

// src/icons/BulletListIcon.tsx
import React6 from "react";
var BulletListIcon = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ React6.createElement(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    ...props
  },
  /* @__PURE__ */ React6.createElement("line", { x1: "8", x2: "21", y1: "6", y2: "6" }),
  /* @__PURE__ */ React6.createElement("line", { x1: "8", x2: "21", y1: "12", y2: "12" }),
  /* @__PURE__ */ React6.createElement("line", { x1: "8", x2: "21", y1: "18", y2: "18" }),
  /* @__PURE__ */ React6.createElement("line", { x1: "3", x2: "3.01", y1: "6", y2: "6" }),
  /* @__PURE__ */ React6.createElement("line", { x1: "3", x2: "3.01", y1: "12", y2: "12" }),
  /* @__PURE__ */ React6.createElement("line", { x1: "3", x2: "3.01", y1: "18", y2: "18" })
);
var BulletListIcon_default = BulletListIcon;

// src/icons/OrderedListIcon.tsx
import React7 from "react";
var OrderedListIcon = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ React7.createElement(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    ...props
  },
  /* @__PURE__ */ React7.createElement("path", { d: "M10 12h11" }),
  /* @__PURE__ */ React7.createElement("path", { d: "M10 18h11" }),
  /* @__PURE__ */ React7.createElement("path", { d: "M10 6h11" }),
  /* @__PURE__ */ React7.createElement("path", { d: "M4 10h2" }),
  /* @__PURE__ */ React7.createElement("path", { d: "M4 6h1v4" }),
  /* @__PURE__ */ React7.createElement("path", { d: "M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" })
);
var OrderedListIcon_default = OrderedListIcon;

// src/icons/TaskListIcon.tsx
import React8 from "react";
var TaskListIcon = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ React8.createElement(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    ...props
  },
  /* @__PURE__ */ React8.createElement("rect", { x: "3", y: "5", width: "6", height: "6", rx: "1" }),
  /* @__PURE__ */ React8.createElement("path", { d: "m3 17 2 2 4-4" }),
  /* @__PURE__ */ React8.createElement("path", { d: "M13 6h8" }),
  /* @__PURE__ */ React8.createElement("path", { d: "M13 12h8" }),
  /* @__PURE__ */ React8.createElement("path", { d: "M13 18h8" })
);
var TaskListIcon_default = TaskListIcon;

// src/icons/BlockquoteIcon.tsx
import React9 from "react";
var BlockquoteIcon = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ React9.createElement(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    "stroke-width": "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    ...props
  },
  /* @__PURE__ */ React9.createElement("path", { d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" }),
  /* @__PURE__ */ React9.createElement("path", { d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" })
);
var BlockquoteIcon_default = BlockquoteIcon;

// src/icons/LinkIcon.tsx
import React10 from "react";
var LinkIcon = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ React10.createElement(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    ...props
  },
  /* @__PURE__ */ React10.createElement("path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" }),
  /* @__PURE__ */ React10.createElement("path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" })
);
var LinkIcon_default = LinkIcon;

// src/icons/ImageIcon.tsx
import React11 from "react";
var ImageIcon = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ React11.createElement(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    ...props
  },
  /* @__PURE__ */ React11.createElement("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }),
  /* @__PURE__ */ React11.createElement("circle", { cx: "9", cy: "9", r: "2" }),
  /* @__PURE__ */ React11.createElement("path", { d: "m21 15-4.35-4.35a2 2 0 0 0-2.83 0L3 21" })
);
var ImageIcon_default = ImageIcon;

// src/icons/TableIcon.tsx
import React12 from "react";
var TableIcon = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ React12.createElement(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    ...props
  },
  /* @__PURE__ */ React12.createElement("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }),
  /* @__PURE__ */ React12.createElement("path", { d: "M3 9h18" }),
  /* @__PURE__ */ React12.createElement("path", { d: "M3 15h18" }),
  /* @__PURE__ */ React12.createElement("path", { d: "M9 3v18" }),
  /* @__PURE__ */ React12.createElement("path", { d: "M15 3v18" })
);
var TableIcon_default = TableIcon;

// src/icons/UndoIcon.tsx
import React13 from "react";
var UndoIcon = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ React13.createElement(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    ...props
  },
  /* @__PURE__ */ React13.createElement("path", { d: "M3 7v6h6" }),
  /* @__PURE__ */ React13.createElement("path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" })
);
var UndoIcon_default = UndoIcon;

// src/icons/RedoIcon.tsx
import React14 from "react";
var RedoIcon = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ React14.createElement(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    ...props
  },
  /* @__PURE__ */ React14.createElement("path", { d: "M21 7v6h-6" }),
  /* @__PURE__ */ React14.createElement("path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" })
);
var RedoIcon_default = RedoIcon;

// src/icons/AlignLeft.tsx
import React15 from "react";
var AlignLeft = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ React15.createElement(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    ...props
  },
  /* @__PURE__ */ React15.createElement("line", { x1: "21", x2: "3", y1: "6", y2: "6" }),
  /* @__PURE__ */ React15.createElement("line", { x1: "15", x2: "3", y1: "12", y2: "12" }),
  /* @__PURE__ */ React15.createElement("line", { x1: "17", x2: "3", y1: "18", y2: "18" })
);
var AlignLeft_default = AlignLeft;

// src/icons/AlignCenter.tsx
import React16 from "react";
var AlignCenter = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ React16.createElement(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    ...props
  },
  /* @__PURE__ */ React16.createElement("line", { x1: "21", x2: "3", y1: "6", y2: "6" }),
  /* @__PURE__ */ React16.createElement("line", { x1: "17", x2: "7", y1: "12", y2: "12" }),
  /* @__PURE__ */ React16.createElement("line", { x1: "19", x2: "5", y1: "18", y2: "18" })
);
var AlignCenter_default = AlignCenter;

// src/icons/AlignRight.tsx
import React17 from "react";
var AlignRight = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ React17.createElement(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    ...props
  },
  /* @__PURE__ */ React17.createElement("line", { x1: "21", x2: "3", y1: "6", y2: "6" }),
  /* @__PURE__ */ React17.createElement("line", { x1: "21", x2: "9", y1: "12", y2: "12" }),
  /* @__PURE__ */ React17.createElement("line", { x1: "21", x2: "7", y1: "18", y2: "18" })
);
var AlignRight_default = AlignRight;

// src/icons/AlignJustify.tsx
import React18 from "react";
var AlignJustify = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ React18.createElement(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    ...props
  },
  /* @__PURE__ */ React18.createElement("line", { x1: "21", x2: "3", y1: "6", y2: "6" }),
  /* @__PURE__ */ React18.createElement("line", { x1: "21", x2: "3", y1: "12", y2: "12" }),
  /* @__PURE__ */ React18.createElement("line", { x1: "21", x2: "3", y1: "18", y2: "18" })
);
var AlignJustify_default = AlignJustify;

// src/icons/Highlighter.tsx
import React19 from "react";
var Highlighter = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ React19.createElement(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    ...props
  },
  /* @__PURE__ */ React19.createElement("path", { d: "m9 11-6 6v3h9l3-3" }),
  /* @__PURE__ */ React19.createElement("path", { d: "M22 15 11 4l-3 3 11 11 3-3Z" })
);
var Highlighter_default = Highlighter;

// src/icons/Heading1.tsx
import React20 from "react";
var Heading1 = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ React20.createElement(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    ...props
  },
  /* @__PURE__ */ React20.createElement("path", { d: "M4 12h8" }),
  /* @__PURE__ */ React20.createElement("path", { d: "M4 18V6" }),
  /* @__PURE__ */ React20.createElement("path", { d: "M12 18V6" }),
  /* @__PURE__ */ React20.createElement("path", { d: "M17 12v-1h-2V9h3" })
);
var Heading1_default = Heading1;

// src/icons/Heading2.tsx
import React21 from "react";
var Heading2 = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ React21.createElement(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    ...props
  },
  /* @__PURE__ */ React21.createElement("path", { d: "M4 12h8" }),
  /* @__PURE__ */ React21.createElement("path", { d: "M4 18V6" }),
  /* @__PURE__ */ React21.createElement("path", { d: "M12 18V6" }),
  /* @__PURE__ */ React21.createElement("path", { d: "M17 12a2 2 0 1 1 0 4h-3" }),
  /* @__PURE__ */ React21.createElement("path", { d: "M19 16v.01" })
);
var Heading2_default = Heading2;

// src/icons/Heading3.tsx
import React22 from "react";
var Heading3 = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ React22.createElement(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    ...props
  },
  /* @__PURE__ */ React22.createElement("path", { d: "M4 12h8" }),
  /* @__PURE__ */ React22.createElement("path", { d: "M4 18V6" }),
  /* @__PURE__ */ React22.createElement("path", { d: "M12 18V6" }),
  /* @__PURE__ */ React22.createElement("path", { d: "M17 14a2 2 0 1 0 0-4h-2" }),
  /* @__PURE__ */ React22.createElement("path", { d: "M15 16a2 2 0 1 0 0 4h2" })
);
var Heading3_default = Heading3;

// src/icons/Heading4.tsx
import React23 from "react";
var Heading4 = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ React23.createElement(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    ...props
  },
  /* @__PURE__ */ React23.createElement("path", { d: "M4 12h8" }),
  /* @__PURE__ */ React23.createElement("path", { d: "M4 18V6" }),
  /* @__PURE__ */ React23.createElement("path", { d: "M12 18V6" }),
  /* @__PURE__ */ React23.createElement("path", { d: "M17 18v-8l-2 2" }),
  /* @__PURE__ */ React23.createElement("path", { d: "M15 14h4" })
);
var Heading4_default = Heading4;

// src/icons/Heading5.tsx
import React24 from "react";
var Heading5 = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ React24.createElement(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    ...props
  },
  /* @__PURE__ */ React24.createElement("path", { d: "M4 12h8" }),
  /* @__PURE__ */ React24.createElement("path", { d: "M4 18V6" }),
  /* @__PURE__ */ React24.createElement("path", { d: "M12 18V6" }),
  /* @__PURE__ */ React24.createElement("path", { d: "M17 13.5V12a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2v2h4" })
);
var Heading5_default = Heading5;

// src/icons/Heading6.tsx
import React25 from "react";
var Heading6 = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ React25.createElement(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    ...props
  },
  /* @__PURE__ */ React25.createElement("path", { d: "M4 12h8" }),
  /* @__PURE__ */ React25.createElement("path", { d: "M4 18V6" }),
  /* @__PURE__ */ React25.createElement("path", { d: "M12 18V6" }),
  /* @__PURE__ */ React25.createElement("circle", { cx: "19", cy: "16", r: "2" }),
  /* @__PURE__ */ React25.createElement("path", { d: "M19 14v-2" })
);
var Heading6_default = Heading6;

// src/icons/VideoIcon.tsx
import React26 from "react";
var VideoIcon = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ React26.createElement(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    ...props
  },
  /* @__PURE__ */ React26.createElement("path", { d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" }),
  /* @__PURE__ */ React26.createElement("rect", { x: "2", y: "6", width: "14", height: "12", rx: "2" })
);
var VideoIcon_default = VideoIcon;

// src/icons/SubscriptIcon.tsx
import React27 from "react";
var SubscriptIcon = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ React27.createElement(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    ...props
  },
  /* @__PURE__ */ React27.createElement("path", { d: "m4 5 8 8" }),
  /* @__PURE__ */ React27.createElement("path", { d: "m12 5-8 8" }),
  /* @__PURE__ */ React27.createElement("path", { d: "M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07" })
);
var SubscriptIcon_default = SubscriptIcon;

// src/icons/SuperscriptIcon.tsx
import React28 from "react";
var SuperscriptIcon = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ React28.createElement(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    ...props
  },
  /* @__PURE__ */ React28.createElement("path", { d: "m4 19 8-8" }),
  /* @__PURE__ */ React28.createElement("path", { d: "m12 19-8-8" }),
  /* @__PURE__ */ React28.createElement("path", { d: "M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06" })
);
var SuperscriptIcon_default = SuperscriptIcon;

// src/icons/PaintBucket.tsx
import React29 from "react";
var PaintBucket = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ React29.createElement(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    ...props
  },
  /* @__PURE__ */ React29.createElement("path", { d: "m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z" }),
  /* @__PURE__ */ React29.createElement("path", { d: "m5 2 5 5" }),
  /* @__PURE__ */ React29.createElement("path", { d: "M2 13h15" }),
  /* @__PURE__ */ React29.createElement("path", { d: "M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z" })
);
var PaintBucket_default = PaintBucket;

// src/icons/TextColorIcon.tsx
import React30 from "react";
var TextColorIcon = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ React30.createElement(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    ...props
  },
  /* @__PURE__ */ React30.createElement("path", { d: "M12 4v16" }),
  /* @__PURE__ */ React30.createElement("path", { d: "M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2" }),
  /* @__PURE__ */ React30.createElement("path", { d: "M9 20h6" })
);
var TextColorIcon_default = TextColorIcon;

// src/components/RicherEditor.tsx
import { TextStyle } from "@tiptap/extension-text-style";
import FontFamily from "@tiptap/extension-font-family";
import FontSize from "@tiptap/extension-font-size";
import Color from "@tiptap/extension-color";

// src/components/tiptap-extensions/CustomBulletList.ts
import { BulletList } from "@tiptap/extension-bullet-list";
import { mergeAttributes } from "@tiptap/core";
var CustomBulletList = BulletList.extend({
  addAttributes() {
    var _a;
    return {
      ...(_a = this.parent) == null ? void 0 : _a.call(this),
      listStyleType: {
        default: "disc",
        parseHTML: (element) => element.style.listStyleType || "disc",
        renderHTML: (attributes) => {
          return {
            style: `list-style-type: ${attributes.listStyleType || "disc"}`
          };
        }
      }
    };
  },
  renderHTML({ HTMLAttributes }) {
    return ["ul", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
  }
});

// src/components/tiptap-extensions/CustomOrderedList.ts
import { OrderedList } from "@tiptap/extension-ordered-list";
import { mergeAttributes as mergeAttributes2 } from "@tiptap/core";
var CustomOrderedList = OrderedList.extend({
  addAttributes() {
    var _a;
    return {
      ...(_a = this.parent) == null ? void 0 : _a.call(this),
      listStyleType: {
        default: "decimal",
        parseHTML: (element) => element.style.listStyleType || "decimal",
        renderHTML: (attributes) => {
          return {
            style: `list-style-type: ${attributes.listStyleType || "decimal"}`
          };
        }
      }
    };
  },
  renderHTML({ HTMLAttributes }) {
    return ["ol", mergeAttributes2(this.options.HTMLAttributes, HTMLAttributes), 0];
  }
});

// src/components/ui/CustomSelect.tsx
import React31, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import "./CustomSelect-AGHTICJO.css";

// src/lib/utils.ts
import { clsx } from "clsx";
function cn(...inputs) {
  return clsx(...inputs);
}

// src/components/ui/CustomSelect.tsx
var CustomSelect = ({ value, options, onChange, className, placeholder, label }) => {
  const [open, setOpen] = useState(false);
  const [highlighted, setHighlighted] = useState(-1);
  const triggerRef = useRef(null);
  const listRef = useRef(null);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0, width: 0 });
  useEffect(() => {
    if (open && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setDropdownPos({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width
      });
    }
  }, [open]);
  useEffect(() => {
    if (open && listRef.current && highlighted >= 0) {
      const el = listRef.current.children[highlighted];
      if (el) el.scrollIntoView({ block: "nearest" });
    }
  }, [open, highlighted]);
  useEffect(() => {
    if (!open) setHighlighted(-1);
  }, [open]);
  useEffect(() => {
    function handleClickOutside(e) {
      if (triggerRef.current && !triggerRef.current.contains(e.target) && listRef.current && !listRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);
  function handleKeyDown(e) {
    if (!open) {
      if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
        setOpen(true);
        setHighlighted(0);
        e.preventDefault();
      }
      return;
    }
    if (e.key === "ArrowDown") {
      setHighlighted((h) => Math.min(h + 1, options.length - 1));
      e.preventDefault();
    } else if (e.key === "ArrowUp") {
      setHighlighted((h) => Math.max(h - 1, 0));
      e.preventDefault();
    } else if (e.key === "Enter" || e.key === " ") {
      if (highlighted >= 0) {
        onChange(options[highlighted].value);
        setOpen(false);
      }
      e.preventDefault();
    } else if (e.key === "Escape") {
      setOpen(false);
      e.preventDefault();
    }
  }
  function handleOptionClick(idx) {
    onChange(options[idx].value);
    setOpen(false);
  }
  const selectedOption = options.find((o) => o.value === value);
  return /* @__PURE__ */ React31.createElement(
    "div",
    {
      className: cn("selectWrapper", className),
      tabIndex: 0,
      onBlur: (e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false);
      },
      style: { display: "inline-block" }
    },
    label && /* @__PURE__ */ React31.createElement("div", { className: "label" }, label),
    /* @__PURE__ */ React31.createElement(
      "button",
      {
        ref: triggerRef,
        className: "trigger",
        "aria-haspopup": "listbox",
        "aria-expanded": open,
        onClick: () => setOpen((o) => !o),
        onKeyDown: handleKeyDown,
        type: "button"
      },
      /* @__PURE__ */ React31.createElement("span", { className: selectedOption ? void 0 : "placeholder" }, selectedOption ? selectedOption.label : placeholder || "Select..."),
      /* @__PURE__ */ React31.createElement("span", { className: "chevron", "aria-hidden": true }, "\u25BC")
    ),
    open && ReactDOM.createPortal(
      /* @__PURE__ */ React31.createElement(
        "ul",
        {
          className: "options",
          ref: listRef,
          role: "listbox",
          tabIndex: -1,
          style: {
            position: "absolute",
            top: dropdownPos.top,
            left: dropdownPos.left,
            minWidth: dropdownPos.width,
            maxWidth: 200,
            zIndex: 2e3
          }
        },
        options.map((opt, idx) => /* @__PURE__ */ React31.createElement(
          "li",
          {
            key: opt.value,
            className: `option ${value === opt.value ? "selected" : ""} ${highlighted === idx ? "highlighted" : ""}`,
            role: "option",
            "aria-selected": value === opt.value,
            onMouseDown: (e) => {
              e.preventDefault();
              handleOptionClick(idx);
            },
            onMouseEnter: () => setHighlighted(idx)
          },
          opt.label
        ))
      ),
      document.body
    )
  );
};
var CustomSelect_default = CustomSelect;

// src/components/ui/CustomPopover.tsx
import React32, { useRef as useRef2, useState as useState2, useEffect as useEffect2 } from "react";
import ReactDOM2 from "react-dom";
import "./CustomPopover-WHNAJV7I.css";
var CustomPopover = ({ open, onOpenChange, anchorEl, children, className, closeButton, onEsc }) => {
  const popoverRef = useRef2(null);
  const [position, setPosition] = useState2({ top: 0, left: 0 });
  useEffect2(() => {
    if (open && anchorEl) {
      const rect = anchorEl.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY + 8,
        left: rect.left + window.scrollX
      });
    }
  }, [open, anchorEl]);
  useEffect2(() => {
    function handleClickOutside(event) {
      if (popoverRef.current && !popoverRef.current.contains(event.target) && anchorEl && !anchorEl.contains(event.target)) {
        onOpenChange(false);
      }
    }
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        if (onEsc) onEsc();
        else onOpenChange(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onOpenChange, anchorEl, onEsc]);
  if (!open || !anchorEl) return null;
  return ReactDOM2.createPortal(
    /* @__PURE__ */ React32.createElement(
      "div",
      {
        ref: popoverRef,
        className: cn("popover", className),
        style: { top: position.top, left: position.left, position: "absolute", zIndex: 1e3 },
        tabIndex: -1,
        role: "dialog"
      },
      closeButton && /* @__PURE__ */ React32.createElement(
        "button",
        {
          className: "closeBtn",
          "aria-label": "Close",
          onClick: () => onOpenChange(false),
          style: { position: "absolute", top: 8, right: 8 }
        },
        "\xD7"
      ),
      children
    ),
    document.body
  );
};
var CustomPopover_default = CustomPopover;

// src/components/RicherEditor.tsx
import "./RicherEditor-AV2BARFI.css";
var fontSizes = [
  { name: "10px", value: "10px" },
  { name: "12px", value: "12px" },
  { name: "14px", value: "14px" },
  { name: "16px", value: "16px" },
  { name: "18px", value: "18px" },
  { name: "20px", value: "20px" },
  { name: "22px", value: "22px" },
  { name: "24px", value: "24px" },
  { name: "26px", value: "26px" },
  { name: "28px", value: "28px" },
  { name: "32px", value: "32px" },
  { name: "36px", value: "36px" },
  { name: "40px", value: "40px" },
  { name: "48px", value: "48px" },
  { name: "56px", value: "56px" },
  { name: "64px", value: "64px" }
];
var fontFamilies = [
  { name: "Sans-serif", value: "sans-serif" },
  { name: "Serif", value: "serif" },
  { name: "Monospace", value: "monospace" },
  { name: "Arial", value: "Arial, sans-serif" },
  { name: "Helvetica", value: "Helvetica, Arial, sans-serif" },
  { name: "Times New Roman", value: "Times New Roman, Times, serif" },
  { name: "Georgia", value: "Georgia, serif" },
  { name: "Courier New", value: "Courier New, Courier, monospace" },
  { name: "Verdana", value: "Verdana, Geneva, sans-serif" },
  { name: "Trebuchet MS", value: "Trebuchet MS, sans-serif" },
  { name: "Palatino", value: "Palatino, serif" },
  { name: "Garamond", value: "Garamond, serif" },
  { name: "Comic Sans MS", value: "Comic Sans MS, cursive, sans-serif" },
  { name: "Impact", value: "Impact, Charcoal, sans-serif" },
  { name: "Lucida Console", value: "Lucida Console, Monaco, monospace" },
  { name: "Tahoma", value: "Tahoma, Geneva, sans-serif" },
  { name: "Optima", value: "Optima, sans-serif" },
  { name: "Futura", value: "Futura, sans-serif" },
  { name: "Franklin Gothic", value: "Franklin Gothic Medium, Arial Narrow, Arial, sans-serif" },
  { name: "Century Gothic", value: "Century Gothic, sans-serif" }
];
var headingOptions = [
  { level: 1, label: /* @__PURE__ */ React33.createElement(Heading1_default, { size: 18 }) },
  { level: 2, label: /* @__PURE__ */ React33.createElement(Heading2_default, { size: 18 }) },
  { level: 3, label: /* @__PURE__ */ React33.createElement(Heading3_default, { size: 18 }) },
  { level: 4, label: /* @__PURE__ */ React33.createElement(Heading4_default, { size: 18 }) },
  { level: 5, label: /* @__PURE__ */ React33.createElement(Heading5_default, { size: 18 }) },
  { level: 6, label: /* @__PURE__ */ React33.createElement(Heading6_default, { size: 18 }) }
];
var unorderedListStyles = [
  { name: "Disc", value: "disc", icon: "\u25CF", aria: "Disc" },
  { name: "Circle", value: "circle", icon: "\u25CB", aria: "Circle" },
  { name: "Square", value: "square", icon: "\u25A0", aria: "Square" }
];
var orderedListStyles = [
  { name: "Decimal", value: "decimal", icon: "1.", aria: "Decimal" },
  { name: "Lower Alpha", value: "lower-alpha", icon: "a.", aria: "Lower Alpha" },
  { name: "Upper Alpha", value: "upper-alpha", icon: "A.", aria: "Upper Alpha" },
  { name: "Lower Roman", value: "lower-roman", icon: "i.", aria: "Lower Roman" },
  { name: "Upper Roman", value: "upper-roman", icon: "I.", aria: "Upper Roman" }
];
var defaultI18n = {
  heading: "Heading",
  fontSize: "Font Size",
  fontFamily: "Font Family",
  bold: "Bold",
  italic: "Italic",
  underline: "Underline",
  strike: "Strikethrough",
  highlight: "Highlight",
  code: "Code Block",
  bulletList: "Bullet List",
  orderedList: "Ordered List",
  taskList: "Task List",
  blockquote: "Blockquote",
  hr: "Horizontal Rule",
  table: "Insert Table",
  link: "Insert/Edit Link",
  image: "Insert Image",
  video: "Insert YouTube Video",
  alignLeft: "Align Left",
  alignCenter: "Align Center",
  alignRight: "Align Right",
  alignJustify: "Align Justify",
  textColor: "Text Color",
  bgColor: "Background Color",
  subscript: "Subscript",
  superscript: "Superscript",
  undo: "Undo",
  redo: "Redo",
  insert: "Insert",
  remove: "Remove",
  add: "Add",
  cancel: "Cancel"
};
var MenuBar = ({ editor, imageUploadUrl, excludeToolbarButtons = [], i18n = {} }) => {
  const [imagePopoverOpen, setImagePopoverOpen] = useState3(false);
  const [imageTab, setImageTab] = useState3("url");
  const [imageUrl, setImageUrl] = useState3("");
  const [imageWidth, setImageWidth] = useState3("");
  const [imageHeight, setImageHeight] = useState3("");
  const [uploading, setUploading] = useState3(false);
  const [uploadError, setUploadError] = useState3(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState3("");
  const [imageFile, setImageFile] = useState3(null);
  const [videoPopoverOpen, setVideoPopoverOpen] = useState3(false);
  const [videoUrl, setVideoUrl] = useState3("");
  const [videoWidth, setVideoWidth] = useState3("");
  const [videoHeight, setVideoHeight] = useState3("");
  const [linkPopoverOpen, setLinkPopoverOpen] = useState3(false);
  const [linkUrl, setLinkUrl] = useState3("");
  const linkButtonRef = React33.useRef(null);
  const imageButtonRef = React33.useRef(null);
  const videoButtonRef = React33.useRef(null);
  const handleImageUrlInsert = useCallback(() => {
    if (imageUrl) {
      const attrs = { src: imageUrl };
      if (imageWidth) attrs.width = imageWidth;
      if (imageHeight) attrs.height = imageHeight;
      editor.chain().focus().setImage(attrs).run();
      setImagePopoverOpen(false);
      setImageUrl("");
      setImageWidth("");
      setImageHeight("");
    }
  }, [editor, imageUrl, imageWidth, imageHeight]);
  const handleImageUpload = async (file) => {
    setUploading(true);
    setUploadError(null);
    setUploadedImageUrl("");
    try {
      let url = "";
      if (imageUploadUrl) {
        const formData = new FormData();
        formData.append("file", file);
        const response = await fetch(imageUploadUrl, {
          method: "POST",
          body: formData
        });
        if (!response.ok) throw new Error("Upload failed");
        const data = await response.json();
        url = data.link || data.url || data.src || "";
      }
      if (!url) throw new Error("No image URL returned");
      setUploadedImageUrl(url);
    } catch (err) {
      setUploadError(err.message || "Upload failed");
    } finally {
      setUploading(false);
    }
  };
  const handleUploadInputChange = (e) => {
    var _a;
    const file = (_a = e.target.files) == null ? void 0 : _a[0];
    if (file) {
      setImageFile(file);
      handleImageUpload(file);
    }
  };
  const handleUploadedImageInsert = () => {
    if (uploadedImageUrl) {
      const attrs = { src: uploadedImageUrl };
      if (imageWidth) attrs.width = imageWidth;
      if (imageHeight) attrs.height = imageHeight;
      editor.chain().focus().setImage(attrs).run();
      setImagePopoverOpen(false);
      setUploadedImageUrl("");
      setImageFile(null);
      setImageWidth("");
      setImageHeight("");
      setUploadError(null);
      setImageTab("url");
    }
  };
  const handleVideoUrlInsert = useCallback(() => {
    if (videoUrl) {
      const attrs = { src: videoUrl };
      if (videoWidth) attrs.width = videoWidth;
      if (videoHeight) attrs.height = videoHeight;
      editor.chain().focus().setYoutubeVideo(attrs).run();
      setVideoPopoverOpen(false);
      setVideoUrl("");
      setVideoWidth("");
      setVideoHeight("");
    }
  }, [editor, videoUrl, videoWidth, videoHeight]);
  const handleLinkInsert = useCallback(() => {
    if (linkUrl) {
      editor.chain().focus().setLink({ href: linkUrl }).run();
      setLinkPopoverOpen(false);
      setLinkUrl("");
    }
  }, [editor, linkUrl]);
  const handleLinkUnset = useCallback(() => {
    editor.chain().focus().unsetLink().run();
    setLinkPopoverOpen(false);
    setLinkUrl("");
  }, [editor]);
  if (!editor) return null;
  const t = { ...defaultI18n, ...i18n };
  return /* @__PURE__ */ React33.createElement("div", { className: "richer-editor-toolbar global-toolbar" }, /* @__PURE__ */ React33.createElement(
    CustomSelect_default,
    {
      value: (() => {
        const activeHeading = headingOptions.find((opt) => editor.isActive("heading", { level: opt.level }));
        return activeHeading ? activeHeading.level.toString() : "";
      })(),
      options: [
        { value: "paragraph", label: "Paragraph" },
        ...headingOptions.map((opt) => ({ value: opt.level.toString(), label: `H${opt.level}` }))
      ],
      onChange: (val) => {
        if (val === "paragraph") {
          editor.chain().focus().setParagraph().run();
        } else {
          editor.chain().focus().toggleHeading({ level: Number(val) }).run();
        }
      },
      className: "richer-editor-select",
      placeholder: "Heading",
      "aria-label": "Heading Level"
    }
  ), /* @__PURE__ */ React33.createElement("div", { className: "toolbar-divider" }), /* @__PURE__ */ React33.createElement(
    CustomSelect_default,
    {
      value: editor.getAttributes("fontSize").fontSize || "",
      options: fontSizes.map((f) => ({ value: f.value, label: f.name })),
      onChange: (val) => editor.chain().focus().setFontSize(val).run(),
      className: "richer-editor-select",
      placeholder: "Font Size",
      "aria-label": "Font Size"
    }
  ), /* @__PURE__ */ React33.createElement(
    CustomSelect_default,
    {
      value: editor.getAttributes("fontFamily").fontFamily || "",
      options: fontFamilies.map((f) => ({
        value: f.value,
        label: /* @__PURE__ */ React33.createElement("span", { style: { fontFamily: f.value } }, f.name)
      })),
      onChange: (val) => editor.chain().focus().setFontFamily(val).run(),
      className: "richer-editor-select",
      placeholder: "Font Family",
      "aria-label": "Font Family"
    }
  ), /* @__PURE__ */ React33.createElement("div", { className: "toolbar-divider" }), !excludeToolbarButtons.includes("bold") && /* @__PURE__ */ React33.createElement("button", { onClick: () => editor.chain().focus().toggleBold().run(), className: `richer-editor-button ${editor.isActive("bold") ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": t.bold, title: t.bold }, /* @__PURE__ */ React33.createElement(BoldIcon_default, { size: 16 })), !excludeToolbarButtons.includes("italic") && /* @__PURE__ */ React33.createElement("button", { onClick: () => editor.chain().focus().toggleItalic().run(), className: `richer-editor-button ${editor.isActive("italic") ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": t.italic, title: t.italic }, /* @__PURE__ */ React33.createElement(ItalicIcon_default, { size: 16 })), !excludeToolbarButtons.includes("underline") && /* @__PURE__ */ React33.createElement("button", { onClick: () => editor.chain().focus().toggleUnderline().run(), className: `richer-editor-button ${editor.isActive("underline") ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": t.underline, title: t.underline }, /* @__PURE__ */ React33.createElement(UnderlineIcon_default, { size: 16 })), !excludeToolbarButtons.includes("strike") && /* @__PURE__ */ React33.createElement("button", { onClick: () => editor.chain().focus().toggleStrike().run(), className: `richer-editor-button ${editor.isActive("strike") ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": t.strike, title: t.strike }, /* @__PURE__ */ React33.createElement(StrikeIcon_default, { size: 16 })), !excludeToolbarButtons.includes("highlight") && /* @__PURE__ */ React33.createElement("button", { onClick: () => editor.chain().focus().toggleHighlight().run(), className: `richer-editor-button ${editor.isActive("highlight") ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": t.highlight, title: t.highlight }, /* @__PURE__ */ React33.createElement(Highlighter_default, { size: 16 })), !excludeToolbarButtons.includes("code") && /* @__PURE__ */ React33.createElement("button", { onClick: () => editor.chain().focus().toggleCodeBlock().run(), className: `richer-editor-button ${editor.isActive("codeBlock") ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": t.code, title: t.code }, /* @__PURE__ */ React33.createElement(CodeIcon_default, { size: 16 })), /* @__PURE__ */ React33.createElement("div", { className: "toolbar-divider" }), !excludeToolbarButtons.includes("bulletList") && /* @__PURE__ */ React33.createElement(React33.Fragment, null, /* @__PURE__ */ React33.createElement("button", { onClick: () => editor.chain().focus().toggleBulletList().run(), className: `richer-editor-button ${editor.isActive("bulletList") ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": t.bulletList, title: t.bulletList }, /* @__PURE__ */ React33.createElement(BulletListIcon_default, { size: 16 })), /* @__PURE__ */ React33.createElement(
    CustomSelect_default,
    {
      value: editor.getAttributes("bulletList").listStyleType || "",
      options: unorderedListStyles.map((opt) => ({ value: opt.value, label: /* @__PURE__ */ React33.createElement(React33.Fragment, null, opt.icon, " ", opt.name) })),
      onChange: (val) => {
        if (editor.isActive("bulletList")) {
          editor.chain().focus().updateAttributes("bulletList", { listStyleType: val }).run();
        } else {
          window.alert("Please place the cursor inside an unordered list to change its style.");
        }
      },
      className: "richer-editor-select",
      placeholder: "UL Style",
      "aria-label": "Unordered List Style"
    }
  )), !excludeToolbarButtons.includes("orderedList") && /* @__PURE__ */ React33.createElement(React33.Fragment, null, /* @__PURE__ */ React33.createElement("button", { onClick: () => editor.chain().focus().toggleOrderedList().run(), className: `richer-editor-button ${editor.isActive("orderedList") ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": t.orderedList, title: t.orderedList }, /* @__PURE__ */ React33.createElement(OrderedListIcon_default, { size: 16 })), /* @__PURE__ */ React33.createElement(
    CustomSelect_default,
    {
      value: editor.getAttributes("orderedList").listStyleType || "",
      options: orderedListStyles.map((opt) => ({ value: opt.value, label: /* @__PURE__ */ React33.createElement(React33.Fragment, null, opt.icon, " ", opt.name) })),
      onChange: (val) => {
        if (editor.isActive("orderedList")) {
          editor.chain().focus().updateAttributes("orderedList", { listStyleType: val }).run();
        } else {
          window.alert("Please place the cursor inside an ordered list to change its style.");
        }
      },
      className: "richer-editor-select",
      placeholder: "OL Style",
      "aria-label": "Ordered List Style"
    }
  )), !excludeToolbarButtons.includes("taskList") && /* @__PURE__ */ React33.createElement("button", { onClick: () => editor.chain().focus().toggleTaskList().run(), className: `richer-editor-button ${editor.isActive("taskList") ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": t.taskList, title: t.taskList }, /* @__PURE__ */ React33.createElement(TaskListIcon_default, { size: 16 })), /* @__PURE__ */ React33.createElement("div", { className: "toolbar-divider" }), !excludeToolbarButtons.includes("blockquote") && /* @__PURE__ */ React33.createElement("button", { onClick: () => editor.chain().focus().toggleBlockquote().run(), className: `richer-editor-button ${editor.isActive("blockquote") ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": t.blockquote, title: t.blockquote }, /* @__PURE__ */ React33.createElement(BlockquoteIcon_default, { size: 16 })), !excludeToolbarButtons.includes("hr") && /* @__PURE__ */ React33.createElement("button", { onClick: () => editor.chain().focus().setHorizontalRule().run(), className: "richer-editor-button", type: "button", "aria-label": t.hr, title: t.hr }, "HR"), /* @__PURE__ */ React33.createElement("div", { className: "toolbar-divider" }), !excludeToolbarButtons.includes("table") && /* @__PURE__ */ React33.createElement("button", { onClick: () => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run(), className: "richer-editor-button", type: "button", "aria-label": t.table, title: t.table }, /* @__PURE__ */ React33.createElement(TableIcon_default, { size: 16 })), /* @__PURE__ */ React33.createElement("div", { className: "toolbar-divider" }), !excludeToolbarButtons.includes("link") && /* @__PURE__ */ React33.createElement(React33.Fragment, null, /* @__PURE__ */ React33.createElement(
    "button",
    {
      ref: linkButtonRef,
      onClick: () => {
        setLinkPopoverOpen((open) => !open);
        setLinkUrl(editor.getAttributes("link").href || "");
      },
      className: `richer-editor-button${editor.isActive("link") ? " richer-editor-buttonActive" : ""}`,
      type: "button",
      "aria-label": t.link,
      title: t.link
    },
    /* @__PURE__ */ React33.createElement(LinkIcon_default, { size: 16 })
  ), /* @__PURE__ */ React33.createElement(
    CustomPopover_default,
    {
      open: linkPopoverOpen,
      onOpenChange: setLinkPopoverOpen,
      anchorEl: linkButtonRef.current,
      closeButton: true,
      onEsc: () => setLinkPopoverOpen(false)
    },
    /* @__PURE__ */ React33.createElement("div", { className: "mb-2 font-semibold text-base" }, "Insert Link"),
    /* @__PURE__ */ React33.createElement(
      "input",
      {
        type: "text",
        placeholder: "Paste link URL here...",
        value: linkUrl,
        onChange: (e) => setLinkUrl(e.target.value),
        className: "richer-editor-input",
        autoFocus: true
      }
    ),
    /* @__PURE__ */ React33.createElement("div", { className: "richer-editor-flexRow" }, /* @__PURE__ */ React33.createElement(
      "button",
      {
        className: "richer-editor-primaryBtn",
        onClick: handleLinkInsert,
        disabled: !linkUrl
      },
      t.insert
    ), /* @__PURE__ */ React33.createElement(
      "button",
      {
        className: "richer-editor-secondaryBtn",
        onClick: handleLinkUnset,
        disabled: !editor.isActive("link")
      },
      t.remove
    ))
  )), !excludeToolbarButtons.includes("image") && /* @__PURE__ */ React33.createElement(React33.Fragment, null, /* @__PURE__ */ React33.createElement(
    "button",
    {
      ref: imageButtonRef,
      onClick: () => {
        setImagePopoverOpen((open) => !open);
        if (!imageUploadUrl) setImageTab("url");
      },
      className: "richer-editor-button",
      type: "button"
    },
    /* @__PURE__ */ React33.createElement(ImageIcon_default, { size: 16 })
  ), /* @__PURE__ */ React33.createElement(
    CustomPopover_default,
    {
      open: imagePopoverOpen,
      onOpenChange: setImagePopoverOpen,
      anchorEl: imageButtonRef.current,
      closeButton: true,
      onEsc: () => setImagePopoverOpen(false)
    },
    /* @__PURE__ */ React33.createElement("div", { className: "mb-2 font-semibold text-base flex gap-4 border-b pb-2" }, /* @__PURE__ */ React33.createElement("button", { className: `richer-editor-button${imageTab === "url" ? " richer-editor-buttonActive" : ""}`, onClick: () => setImageTab("url") }, "URL"), imageUploadUrl && /* @__PURE__ */ React33.createElement("button", { className: `richer-editor-button${imageTab === "upload" ? " richer-editor-buttonActive" : ""}`, onClick: () => setImageTab("upload") }, "Upload")),
    imageTab === "url" && /* @__PURE__ */ React33.createElement(React33.Fragment, null, /* @__PURE__ */ React33.createElement(
      "input",
      {
        type: "text",
        placeholder: "Paste image URL here...",
        value: imageUrl,
        onChange: (e) => setImageUrl(e.target.value),
        className: "richer-editor-input",
        autoFocus: true
      }
    ), /* @__PURE__ */ React33.createElement("div", { className: "richer-editor-flexRowMb2" }, /* @__PURE__ */ React33.createElement(
      "input",
      {
        type: "text",
        placeholder: "Width (e.g. 400 or 50%)",
        value: imageWidth,
        onChange: (e) => setImageWidth(e.target.value),
        className: "richer-editor-input"
      }
    ), /* @__PURE__ */ React33.createElement(
      "input",
      {
        type: "text",
        placeholder: "Height (e.g. 300 or 50%)",
        value: imageHeight,
        onChange: (e) => setImageHeight(e.target.value),
        className: "richer-editor-input"
      }
    )), /* @__PURE__ */ React33.createElement("div", { className: "richer-editor-textXs" }, "Leave blank for default size. Use px (e.g. 400) or % (e.g. 50%)."), /* @__PURE__ */ React33.createElement(
      "button",
      {
        className: "richer-editor-primaryBtn",
        onClick: handleImageUrlInsert,
        disabled: !imageUrl
      },
      t.image
    )),
    imageTab === "upload" && imageUploadUrl && /* @__PURE__ */ React33.createElement(React33.Fragment, null, !uploadedImageUrl && /* @__PURE__ */ React33.createElement(React33.Fragment, null, /* @__PURE__ */ React33.createElement(
      "input",
      {
        type: "file",
        accept: "image/*",
        onChange: handleUploadInputChange,
        className: "mb2",
        disabled: uploading
      }
    ), uploading && /* @__PURE__ */ React33.createElement("div", { className: "text-sm text-blue-600 mb-2" }, "Uploading..."), uploadError && /* @__PURE__ */ React33.createElement("div", { className: "text-sm text-red-600 mb-2" }, uploadError)), uploadedImageUrl && /* @__PURE__ */ React33.createElement(React33.Fragment, null, /* @__PURE__ */ React33.createElement("div", { className: "mb-2 flex flex-col items-center" }, /* @__PURE__ */ React33.createElement("img", { src: uploadedImageUrl, alt: "Preview", className: "max-h-40 max-w-full rounded border mb-2" })), /* @__PURE__ */ React33.createElement("div", { className: "richer-editor-flexRowMb2" }, /* @__PURE__ */ React33.createElement(
      "input",
      {
        type: "text",
        placeholder: "Width (e.g. 400 or 50%)",
        value: imageWidth,
        onChange: (e) => setImageWidth(e.target.value),
        className: "richer-editor-input"
      }
    ), /* @__PURE__ */ React33.createElement(
      "input",
      {
        type: "text",
        placeholder: "Height (e.g. 300 or 50%)",
        value: imageHeight,
        onChange: (e) => setImageHeight(e.target.value),
        className: "richer-editor-input"
      }
    )), /* @__PURE__ */ React33.createElement("div", { className: "richer-editor-flexRow" }, /* @__PURE__ */ React33.createElement(
      "button",
      {
        className: "richer-editor-primaryBtn",
        onClick: handleUploadedImageInsert
      },
      t.add
    ), /* @__PURE__ */ React33.createElement(
      "button",
      {
        className: "richer-editor-secondaryBtn",
        onClick: () => {
          setUploadedImageUrl("");
          setImageFile(null);
          setImageWidth("");
          setImageHeight("");
          setUploadError(null);
        }
      },
      t.cancel
    ))))
  )), !excludeToolbarButtons.includes("video") && /* @__PURE__ */ React33.createElement(React33.Fragment, null, /* @__PURE__ */ React33.createElement(
    "button",
    {
      ref: videoButtonRef,
      onClick: () => setVideoPopoverOpen((open) => !open),
      className: "richer-editor-button",
      type: "button"
    },
    /* @__PURE__ */ React33.createElement(VideoIcon_default, { size: 16 })
  ), /* @__PURE__ */ React33.createElement(
    CustomPopover_default,
    {
      open: videoPopoverOpen,
      onOpenChange: setVideoPopoverOpen,
      anchorEl: videoButtonRef.current,
      closeButton: true,
      onEsc: () => setVideoPopoverOpen(false)
    },
    /* @__PURE__ */ React33.createElement("div", { className: "mb-2 font-semibold text-base" }, "Insert YouTube Video"),
    /* @__PURE__ */ React33.createElement(
      "input",
      {
        type: "text",
        placeholder: "Paste YouTube video URL here...",
        value: videoUrl,
        onChange: (e) => setVideoUrl(e.target.value),
        className: "richer-editor-input",
        autoFocus: true
      }
    ),
    /* @__PURE__ */ React33.createElement("div", { className: "richer-editor-flexRowMb2" }, /* @__PURE__ */ React33.createElement(
      "input",
      {
        type: "text",
        placeholder: "Width (e.g. 400 or 50%)",
        value: videoWidth,
        onChange: (e) => setVideoWidth(e.target.value),
        className: "richer-editor-input"
      }
    ), /* @__PURE__ */ React33.createElement(
      "input",
      {
        type: "text",
        placeholder: "Height (e.g. 300 or 50%)",
        value: videoHeight,
        onChange: (e) => setVideoHeight(e.target.value),
        className: "richer-editor-input"
      }
    )),
    /* @__PURE__ */ React33.createElement("div", { className: "richer-editor-textXs" }, "Leave blank for default size. Use px (e.g. 400) or % (e.g. 50%)."),
    /* @__PURE__ */ React33.createElement(
      "button",
      {
        className: "richer-editor-primaryBtn",
        onClick: handleVideoUrlInsert,
        disabled: !videoUrl
      },
      t.video
    )
  )), !excludeToolbarButtons.includes("alignLeft") && /* @__PURE__ */ React33.createElement("button", { onClick: () => editor.chain().focus().setTextAlign("left").run(), className: `richer-editor-button ${editor.isActive({ textAlign: "left" }) ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": t.alignLeft, title: t.alignLeft }, /* @__PURE__ */ React33.createElement(AlignLeft_default, { size: 16 })), !excludeToolbarButtons.includes("alignCenter") && /* @__PURE__ */ React33.createElement("button", { onClick: () => editor.chain().focus().setTextAlign("center").run(), className: `richer-editor-button ${editor.isActive({ textAlign: "center" }) ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": t.alignCenter, title: t.alignCenter }, /* @__PURE__ */ React33.createElement(AlignCenter_default, { size: 16 })), !excludeToolbarButtons.includes("alignRight") && /* @__PURE__ */ React33.createElement("button", { onClick: () => editor.chain().focus().setTextAlign("right").run(), className: `richer-editor-button ${editor.isActive({ textAlign: "right" }) ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": t.alignRight, title: t.alignRight }, /* @__PURE__ */ React33.createElement(AlignRight_default, { size: 16 })), !excludeToolbarButtons.includes("alignJustify") && /* @__PURE__ */ React33.createElement("button", { onClick: () => editor.chain().focus().setTextAlign("justify").run(), className: `richer-editor-button ${editor.isActive({ textAlign: "justify" }) ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": t.alignJustify, title: t.alignJustify }, /* @__PURE__ */ React33.createElement(AlignJustify_default, { size: 16 })), !excludeToolbarButtons.includes("textColor") && /* @__PURE__ */ React33.createElement("div", { className: "richer-editor-colorpicker", style: { height: 28 }, title: t.textColor, "aria-label": t.textColor }, /* @__PURE__ */ React33.createElement(TextColorIcon_default, { size: 16 }), /* @__PURE__ */ React33.createElement(
    "input",
    {
      type: "color",
      value: editor.getAttributes("textStyle").color || "#000000",
      onChange: (e) => {
        editor.commands.focus();
        editor.commands.setColor(e.target.value);
      },
      style: { width: 20, height: 20, border: "none", background: "none", cursor: "pointer", padding: 0 },
      className: "richer-editor-colorInput"
    }
  )), !excludeToolbarButtons.includes("bgColor") && /* @__PURE__ */ React33.createElement("div", { className: "richer-editor-colorpicker", style: { height: 28 }, title: t.bgColor, "aria-label": t.bgColor }, /* @__PURE__ */ React33.createElement(PaintBucket_default, { size: 16 }), /* @__PURE__ */ React33.createElement(
    "input",
    {
      type: "color",
      value: editor.getAttributes("highlight").color || "#ffff00",
      onChange: (e) => {
        editor.commands.focus();
        editor.commands.setHighlight({ color: e.target.value });
      },
      style: { width: 20, height: 20, border: "none", background: "none", cursor: "pointer", padding: 0 },
      className: "richer-editor-colorInput"
    }
  )), !excludeToolbarButtons.includes("subscript") && /* @__PURE__ */ React33.createElement(
    "button",
    {
      onClick: () => editor.chain().focus().toggleSubscript().run(),
      className: `richer-editor-button ${editor.isActive("subscript") ? "richer-editor-buttonActive" : ""}`,
      type: "button",
      title: "Subscript",
      "aria-label": t.subscript
    },
    /* @__PURE__ */ React33.createElement(SubscriptIcon_default, { size: 16 })
  ), !excludeToolbarButtons.includes("superscript") && /* @__PURE__ */ React33.createElement(
    "button",
    {
      onClick: () => editor.chain().focus().toggleSuperscript().run(),
      className: `richer-editor-button ${editor.isActive("superscript") ? "richer-editor-buttonActive" : ""}`,
      type: "button",
      title: "Superscript",
      "aria-label": t.superscript
    },
    /* @__PURE__ */ React33.createElement(SuperscriptIcon_default, { size: 16 })
  ), /* @__PURE__ */ React33.createElement("div", { className: "richer-editor-ml2" }), !excludeToolbarButtons.includes("undo") && /* @__PURE__ */ React33.createElement("button", { onClick: () => editor.chain().focus().undo().run(), className: "richer-editor-button", type: "button", "aria-label": t.undo, title: t.undo }, /* @__PURE__ */ React33.createElement(UndoIcon_default, { size: 16 })), !excludeToolbarButtons.includes("redo") && /* @__PURE__ */ React33.createElement("button", { onClick: () => editor.chain().focus().redo().run(), className: "richer-editor-button", type: "button", "aria-label": t.redo, title: t.redo }, /* @__PURE__ */ React33.createElement(RedoIcon_default, { size: 16 })));
};
var getSafeContent = (content, outputFormat) => {
  if (outputFormat === "json") {
    if (typeof content === "object" && content !== null) {
      return content;
    }
    if (typeof content === "string") {
      try {
        const parsed = JSON.parse(content);
        if (typeof parsed === "object" && parsed !== null) {
          return parsed;
        }
      } catch {
      }
    }
    return { type: "doc", content: [{ type: "paragraph" }] };
  } else {
    if (typeof content === "string") {
      return content;
    }
    if (typeof content === "object" && content !== null) {
      return "";
    }
    return "";
  }
};
var RicherEditor = ({
  content = "",
  onChange,
  imageUploadUrl,
  minHeight,
  maxHeight,
  editorProps = {},
  outputFormat = "html",
  readOnly = false,
  placeholder,
  className = "",
  excludeToolbarButtons = [],
  style = {},
  i18n = {}
}) => {
  var _a;
  const safeContent = React33.useMemo(() => getSafeContent(content, outputFormat), [content, outputFormat]);
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({ openOnClick: true }),
      Image,
      Heading.configure({ levels: [1, 2, 3, 4, 5, 6] }),
      CustomBulletList,
      CustomOrderedList,
      ListItem,
      Bold,
      Italic,
      Underline,
      Strike,
      Blockquote,
      CodeBlock,
      HorizontalRule,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Table.configure({ resizable: true }),
      TableRow,
      TableCell,
      TableHeader,
      Dropcursor,
      Gapcursor,
      TaskList,
      TaskItem,
      Superscript,
      Subscript,
      Typography,
      Youtube.configure({
        controls: true,
        allowFullscreen: true,
        width: 640,
        height: 360,
        HTMLAttributes: {
          class: "mx-auto my-4 rounded-lg shadow"
        }
      }),
      Color,
      // <-- Color must come before TextStyle
      TextStyle,
      FontFamily,
      FontSize,
      Highlight.configure({
        multicolor: true
      }),
      Placeholder.configure({
        placeholder: placeholder || "Write something..."
      })
    ],
    content: safeContent,
    editorProps: {
      ...editorProps,
      attributes: {
        class: `richer-editor-textarea prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg sm:prose-base prose-p:mt-0 prose-p:mb-1 leading-6 prose-blockquote:bg-muted/50 prose-blockquote:p-2 prose-blockquote:px-6 prose-blockquote:border-border prose-blockquote:not-italic prose-blockquote:rounded-r-lg [&_blockquote>p]:after:content-none [&_blockquote>p]:before:content-none  prose-li:marker:text-muted-foreground w-full max-w-full ${className || ""}`,
        style: `${minHeight ? `min-height:${minHeight};` : ""}${((_a = editorProps == null ? void 0 : editorProps.attributes) == null ? void 0 : _a.style) || ""}`,
        spellCheck: "true",
        readOnly: readOnly ? "true" : void 0,
        placeholder: placeholder || void 0,
        ...editorProps == null ? void 0 : editorProps.attributes
      }
    },
    onUpdate({ editor: editor2 }) {
      if (onChange) {
        if (outputFormat === "json") {
          onChange(editor2.getJSON());
        } else {
          onChange(editor2.getHTML());
        }
      }
    },
    editable: !readOnly,
    immediatelyRender: false
  });
  React33.useEffect(() => {
    if (editor && content !== void 0) {
      const current = outputFormat === "json" ? editor.getJSON() : editor.getHTML();
      if (outputFormat === "json") {
        let parsed = content;
        if (typeof content === "string") {
          try {
            parsed = JSON.parse(content);
          } catch {
            parsed = { type: "doc", content: [{ type: "paragraph" }] };
          }
        }
        if (JSON.stringify(current) !== JSON.stringify(parsed)) {
          editor.commands.setContent(getSafeContent(content, outputFormat));
        }
      } else {
        if (current !== content) {
          editor.commands.setContent(getSafeContent(content, outputFormat));
        }
      }
    }
  }, [content]);
  return /* @__PURE__ */ React33.createElement("div", { className: `richer-editor-roundedMdBorder ${className || ""}`, style }, /* @__PURE__ */ React33.createElement(MenuBar, { editor, imageUploadUrl, excludeToolbarButtons, i18n }), /* @__PURE__ */ React33.createElement("div", { className: "richer-editor-overflowAuto", style: { maxHeight } }, /* @__PURE__ */ React33.createElement(EditorContent, { editor })));
};
var RicherEditor_default = RicherEditor;

// src/components/SmallRicherEditor.tsx
import React34, { useCallback as useCallback2, useState as useState4 } from "react";
import { useEditor as useEditor2, EditorContent as EditorContent2 } from "@tiptap/react";
import StarterKit2 from "@tiptap/starter-kit";
import Link2 from "@tiptap/extension-link";
import Image2 from "@tiptap/extension-image";
import Bold2 from "@tiptap/extension-bold";
import Underline2 from "@tiptap/extension-underline";
import Highlight2 from "@tiptap/extension-highlight";
import CodeBlock2 from "@tiptap/extension-code-block";
import Youtube2 from "@tiptap/extension-youtube";
import TextAlign2 from "@tiptap/extension-text-align";
import { ListItem as ListItem2 } from "@tiptap/extension-list-item";
import { BulletList as BulletList2 } from "@tiptap/extension-bullet-list";
import { OrderedList as OrderedList2 } from "@tiptap/extension-ordered-list";
import { TextStyle as TextStyle2 } from "@tiptap/extension-text-style";
import FontSize2 from "@tiptap/extension-font-size";
import Placeholder2 from "@tiptap/extension-placeholder";
import "./RicherEditor-AV2BARFI.css";
var fontSizes2 = [
  { name: "10px", value: "10px" },
  { name: "12px", value: "12px" },
  { name: "14px", value: "14px" },
  { name: "16px", value: "16px" },
  { name: "18px", value: "18px" },
  { name: "20px", value: "20px" },
  { name: "22px", value: "22px" },
  { name: "24px", value: "24px" },
  { name: "26px", value: "26px" },
  { name: "28px", value: "28px" },
  { name: "30px", value: "30px" },
  { name: "32px", value: "32px" }
];
var alignmentOptions = [
  { value: "left", label: /* @__PURE__ */ React34.createElement(AlignLeft_default, { size: 18 }), name: "Left" },
  { value: "center", label: /* @__PURE__ */ React34.createElement(AlignCenter_default, { size: 18 }), name: "Center" },
  { value: "right", label: /* @__PURE__ */ React34.createElement(AlignRight_default, { size: 18 }), name: "Right" },
  { value: "justify", label: /* @__PURE__ */ React34.createElement(AlignJustify_default, { size: 18 }), name: "Justify" }
];
var defaultI18n2 = {
  bold: "Bold",
  underline: "Underline",
  highlight: "Highlight",
  code: "Code Block",
  bulletList: "Bullet List",
  orderedList: "Ordered List",
  link: "Insert/Edit Link",
  image: "Insert Image",
  video: "Insert YouTube Video",
  align: "Align",
  insert: "Insert",
  remove: "Remove",
  add: "Add",
  cancel: "Cancel",
  fontSize: "Font Size"
};
var MenuBar2 = ({ editor, imageUploadUrl, excludeToolbarButtons = [], i18n = {} }) => {
  const [imagePopoverOpen, setImagePopoverOpen] = useState4(false);
  const [imageTab, setImageTab] = useState4("url");
  const [imageUrl, setImageUrl] = useState4("");
  const [imageWidth, setImageWidth] = useState4("");
  const [imageHeight, setImageHeight] = useState4("");
  const [uploading, setUploading] = useState4(false);
  const [uploadError, setUploadError] = useState4(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState4("");
  const [imageFile, setImageFile] = useState4(null);
  const [videoPopoverOpen, setVideoPopoverOpen] = useState4(false);
  const [videoUrl, setVideoUrl] = useState4("");
  const [videoWidth, setVideoWidth] = useState4("");
  const [videoHeight, setVideoHeight] = useState4("");
  const [linkPopoverOpen, setLinkPopoverOpen] = useState4(false);
  const [linkUrl, setLinkUrl] = useState4("");
  const linkButtonRef = React34.useRef(null);
  const imageButtonRef = React34.useRef(null);
  const videoButtonRef = React34.useRef(null);
  const t = { ...defaultI18n2, ...i18n };
  const handleImageUrlInsert = useCallback2(() => {
    if (imageUrl) {
      const attrs = { src: imageUrl };
      if (imageWidth) attrs.width = imageWidth;
      if (imageHeight) attrs.height = imageHeight;
      editor.chain().focus().setImage(attrs).run();
      setImagePopoverOpen(false);
      setImageUrl("");
      setImageWidth("");
      setImageHeight("");
    }
  }, [editor, imageUrl, imageWidth, imageHeight]);
  const handleImageUpload = async (file) => {
    if (!imageUploadUrl) return;
    setUploading(true);
    setUploadError(null);
    setUploadedImageUrl("");
    try {
      const formData = new FormData();
      formData.append("file", file);
      const response = await fetch(imageUploadUrl, {
        method: "POST",
        body: formData
      });
      if (!response.ok) throw new Error("Upload failed");
      const data = await response.json();
      const url = data.link || data.url || data.src || "";
      if (!url) throw new Error("No image URL returned");
      setUploadedImageUrl(url);
    } catch (err) {
      setUploadError(err.message || "Upload failed");
    } finally {
      setUploading(false);
    }
  };
  const handleUploadInputChange = (e) => {
    var _a;
    const file = (_a = e.target.files) == null ? void 0 : _a[0];
    if (file) {
      setImageFile(file);
      handleImageUpload(file);
    }
  };
  const handleUploadedImageInsert = () => {
    if (uploadedImageUrl) {
      const attrs = { src: uploadedImageUrl };
      if (imageWidth) attrs.width = imageWidth;
      if (imageHeight) attrs.height = imageHeight;
      editor.chain().focus().setImage(attrs).run();
      setImagePopoverOpen(false);
      setUploadedImageUrl("");
      setImageFile(null);
      setImageWidth("");
      setImageHeight("");
      setUploadError(null);
      setImageTab("url");
    }
  };
  const handleVideoUrlInsert = useCallback2(() => {
    if (videoUrl) {
      const attrs = { src: videoUrl };
      if (videoWidth) attrs.width = videoWidth;
      if (videoHeight) attrs.height = videoHeight;
      editor.chain().focus().setYoutubeVideo(attrs).run();
      setVideoPopoverOpen(false);
      setVideoUrl("");
      setVideoWidth("");
      setVideoHeight("");
    }
  }, [editor, videoUrl, videoWidth, videoHeight]);
  const handleLinkInsert = useCallback2(() => {
    if (linkUrl) {
      editor.chain().focus().setLink({ href: linkUrl }).run();
      setLinkPopoverOpen(false);
      setLinkUrl("");
    }
  }, [editor, linkUrl]);
  const handleLinkUnset = useCallback2(() => {
    editor.chain().focus().unsetLink().run();
    setLinkPopoverOpen(false);
    setLinkUrl("");
  }, [editor]);
  if (!editor) return null;
  return /* @__PURE__ */ React34.createElement(React34.Fragment, null, /* @__PURE__ */ React34.createElement("div", { className: "richer-editor-toolbar global-toolbar" }, !excludeToolbarButtons.includes("fontSize") && /* @__PURE__ */ React34.createElement(
    CustomSelect_default,
    {
      value: editor.getAttributes("fontSize").fontSize || "",
      options: fontSizes2.map((f) => ({ value: f.value, label: f.name })),
      onChange: (val) => editor.chain().focus().setFontSize(val).run(),
      className: "richer-editor-select",
      placeholder: t.fontSize || "Font Size",
      "aria-label": t.fontSize || "Font Size"
    }
  ), /* @__PURE__ */ React34.createElement("div", { className: "toolbar-divider" }), !excludeToolbarButtons.includes("bold") && /* @__PURE__ */ React34.createElement("button", { onClick: () => editor.chain().focus().toggleBold().run(), className: `richer-editor-button${editor.isActive("bold") ? " richer-editor-buttonActive" : ""}`, type: "button", "aria-label": t.bold, title: t.bold }, /* @__PURE__ */ React34.createElement(BoldIcon_default, { size: 16 })), !excludeToolbarButtons.includes("underline") && /* @__PURE__ */ React34.createElement("button", { onClick: () => editor.chain().focus().toggleUnderline().run(), className: `richer-editor-button${editor.isActive("underline") ? " richer-editor-buttonActive" : ""}`, type: "button", "aria-label": t.underline, title: t.underline }, /* @__PURE__ */ React34.createElement(UnderlineIcon_default, { size: 16 })), !excludeToolbarButtons.includes("highlight") && /* @__PURE__ */ React34.createElement("button", { onClick: () => editor.chain().focus().toggleHighlight({ color: "#fff59d" }).run(), className: `richer-editor-button${editor.isActive("highlight") ? " richer-editor-buttonActive" : ""}`, type: "button", "aria-label": t.highlight, title: t.highlight }, /* @__PURE__ */ React34.createElement(Highlighter_default, { size: 16 })), !excludeToolbarButtons.includes("code") && /* @__PURE__ */ React34.createElement("button", { onClick: () => editor.chain().focus().toggleCodeBlock().run(), className: `richer-editor-button${editor.isActive("codeBlock") ? " richer-editor-buttonActive" : ""}`, type: "button", "aria-label": t.code, title: t.code }, /* @__PURE__ */ React34.createElement(CodeIcon_default, { size: 16 })), /* @__PURE__ */ React34.createElement("div", { className: "toolbar-divider" }), !excludeToolbarButtons.includes("bulletList") && /* @__PURE__ */ React34.createElement("button", { onClick: () => editor.chain().focus().toggleBulletList().run(), className: `richer-editor-button${editor.isActive("bulletList") ? " richer-editor-buttonActive" : ""}`, type: "button", "aria-label": t.bulletList, title: t.bulletList }, /* @__PURE__ */ React34.createElement(BulletListIcon_default, { size: 16 })), !excludeToolbarButtons.includes("orderedList") && /* @__PURE__ */ React34.createElement("button", { onClick: () => editor.chain().focus().toggleOrderedList().run(), className: `richer-editor-button${editor.isActive("orderedList") ? " richer-editor-buttonActive" : ""}`, type: "button", "aria-label": t.orderedList, title: t.orderedList }, /* @__PURE__ */ React34.createElement(OrderedListIcon_default, { size: 16 })), /* @__PURE__ */ React34.createElement("div", { className: "toolbar-divider" }), !excludeToolbarButtons.includes("link") && /* @__PURE__ */ React34.createElement(React34.Fragment, null, /* @__PURE__ */ React34.createElement(
    "button",
    {
      ref: linkButtonRef,
      onClick: () => {
        setLinkPopoverOpen((open) => !open);
        setLinkUrl(editor.getAttributes("link").href || "");
      },
      className: `richer-editor-button${editor.isActive("link") ? " richer-editor-buttonActive" : ""}`,
      type: "button",
      "aria-label": t.link,
      title: t.link
    },
    /* @__PURE__ */ React34.createElement(LinkIcon_default, { size: 16 })
  ), /* @__PURE__ */ React34.createElement(
    CustomPopover_default,
    {
      open: linkPopoverOpen,
      onOpenChange: setLinkPopoverOpen,
      anchorEl: linkButtonRef.current,
      closeButton: true,
      onEsc: () => setLinkPopoverOpen(false)
    },
    /* @__PURE__ */ React34.createElement("div", { className: "mb-2 font-semibold text-base" }, t.link),
    /* @__PURE__ */ React34.createElement(
      "input",
      {
        type: "text",
        placeholder: "Paste link URL here...",
        value: linkUrl,
        onChange: (e) => setLinkUrl(e.target.value),
        className: "richer-editor-input",
        autoFocus: true
      }
    ),
    /* @__PURE__ */ React34.createElement("div", { className: "richer-editor-flexRow" }, /* @__PURE__ */ React34.createElement(
      "button",
      {
        className: "richer-editor-primaryBtn",
        onClick: handleLinkInsert,
        disabled: !linkUrl
      },
      t.insert
    ), /* @__PURE__ */ React34.createElement(
      "button",
      {
        className: "richer-editor-secondaryBtn",
        onClick: handleLinkUnset,
        disabled: !editor.isActive("link")
      },
      t.remove
    ))
  )), !excludeToolbarButtons.includes("image") && /* @__PURE__ */ React34.createElement(React34.Fragment, null, /* @__PURE__ */ React34.createElement(
    "button",
    {
      ref: imageButtonRef,
      onClick: () => {
        setImagePopoverOpen((open) => !open);
        if (!imageUploadUrl) setImageTab("url");
      },
      className: "richer-editor-button",
      type: "button",
      "aria-label": t.image,
      title: t.image
    },
    /* @__PURE__ */ React34.createElement(ImageIcon_default, { size: 16 })
  ), /* @__PURE__ */ React34.createElement(
    CustomPopover_default,
    {
      open: imagePopoverOpen,
      onOpenChange: setImagePopoverOpen,
      anchorEl: imageButtonRef.current,
      closeButton: true,
      onEsc: () => setImagePopoverOpen(false)
    },
    /* @__PURE__ */ React34.createElement("div", { className: "mb-2 font-semibold text-base flex gap-4 border-b pb-2" }, /* @__PURE__ */ React34.createElement("button", { className: `richer-editor-button${imageTab === "url" ? " richer-editor-buttonActive" : ""}`, onClick: () => setImageTab("url") }, "URL"), imageUploadUrl && /* @__PURE__ */ React34.createElement("button", { className: `richer-editor-button${imageTab === "upload" ? " richer-editor-buttonActive" : ""}`, onClick: () => setImageTab("upload") }, "Upload")),
    imageTab === "url" && /* @__PURE__ */ React34.createElement(React34.Fragment, null, /* @__PURE__ */ React34.createElement(
      "input",
      {
        type: "text",
        placeholder: "Paste image URL here...",
        value: imageUrl,
        onChange: (e) => setImageUrl(e.target.value),
        className: "richer-editor-input",
        autoFocus: true
      }
    ), /* @__PURE__ */ React34.createElement("div", { className: "richer-editor-flexRowMb2" }, /* @__PURE__ */ React34.createElement(
      "input",
      {
        type: "text",
        placeholder: "Width (e.g. 400 or 50%)",
        value: imageWidth,
        onChange: (e) => setImageWidth(e.target.value),
        className: "richer-editor-input"
      }
    ), /* @__PURE__ */ React34.createElement(
      "input",
      {
        type: "text",
        placeholder: "Height (e.g. 300 or 50%)",
        value: imageHeight,
        onChange: (e) => setImageHeight(e.target.value),
        className: "richer-editor-input"
      }
    )), /* @__PURE__ */ React34.createElement("div", { className: "richer-editor-textXs" }, "Leave blank for default size. Use px (e.g. 400) or % (e.g. 50%)."), /* @__PURE__ */ React34.createElement(
      "button",
      {
        className: "richer-editor-primaryBtn",
        onClick: handleImageUrlInsert,
        disabled: !imageUrl
      },
      t.image
    )),
    imageTab === "upload" && imageUploadUrl && /* @__PURE__ */ React34.createElement(React34.Fragment, null, !uploadedImageUrl && /* @__PURE__ */ React34.createElement(React34.Fragment, null, /* @__PURE__ */ React34.createElement(
      "input",
      {
        type: "file",
        accept: "image/*",
        onChange: handleUploadInputChange,
        className: "mb2",
        disabled: uploading
      }
    ), uploading && /* @__PURE__ */ React34.createElement("div", { className: "text-sm text-blue-600 mb-2" }, "Uploading..."), uploadError && /* @__PURE__ */ React34.createElement("div", { className: "text-sm text-red-600 mb-2" }, uploadError)), uploadedImageUrl && /* @__PURE__ */ React34.createElement(React34.Fragment, null, /* @__PURE__ */ React34.createElement("div", { className: "mb-2 flex flex-col items-center" }, /* @__PURE__ */ React34.createElement("img", { src: uploadedImageUrl, alt: "Preview", className: "max-h-40 max-w-full rounded border mb-2" })), /* @__PURE__ */ React34.createElement("div", { className: "richer-editor-flexRowMb2" }, /* @__PURE__ */ React34.createElement(
      "input",
      {
        type: "text",
        placeholder: "Width (e.g. 400 or 50%)",
        value: imageWidth,
        onChange: (e) => setImageWidth(e.target.value),
        className: "richer-editor-input"
      }
    ), /* @__PURE__ */ React34.createElement(
      "input",
      {
        type: "text",
        placeholder: "Height (e.g. 300 or 50%)",
        value: imageHeight,
        onChange: (e) => setImageHeight(e.target.value),
        className: "richer-editor-input"
      }
    )), /* @__PURE__ */ React34.createElement("div", { className: "richer-editor-flexRow" }, /* @__PURE__ */ React34.createElement(
      "button",
      {
        className: "richer-editor-primaryBtn",
        onClick: handleUploadedImageInsert
      },
      t.add
    ), /* @__PURE__ */ React34.createElement(
      "button",
      {
        className: "richer-editor-secondaryBtn",
        onClick: () => {
          setUploadedImageUrl("");
          setImageFile(null);
          setImageWidth("");
          setImageHeight("");
          setUploadError(null);
        }
      },
      t.cancel
    ))))
  )), !excludeToolbarButtons.includes("video") && /* @__PURE__ */ React34.createElement(React34.Fragment, null, /* @__PURE__ */ React34.createElement(
    "button",
    {
      ref: videoButtonRef,
      onClick: () => setVideoPopoverOpen((open) => !open),
      className: "richer-editor-button",
      type: "button",
      "aria-label": t.video,
      title: t.video
    },
    /* @__PURE__ */ React34.createElement(VideoIcon_default, { size: 16 })
  ), /* @__PURE__ */ React34.createElement(
    CustomPopover_default,
    {
      open: videoPopoverOpen,
      onOpenChange: setVideoPopoverOpen,
      anchorEl: videoButtonRef.current,
      closeButton: true,
      onEsc: () => setVideoPopoverOpen(false)
    },
    /* @__PURE__ */ React34.createElement("div", { className: "mb-2 font-semibold text-base" }, t.video),
    /* @__PURE__ */ React34.createElement(
      "input",
      {
        type: "text",
        placeholder: "Paste YouTube video URL here...",
        value: videoUrl,
        onChange: (e) => setVideoUrl(e.target.value),
        className: "richer-editor-input",
        autoFocus: true
      }
    ),
    /* @__PURE__ */ React34.createElement("div", { className: "richer-editor-flexRowMb2" }, /* @__PURE__ */ React34.createElement(
      "input",
      {
        type: "text",
        placeholder: "Width (e.g. 400 or 50%)",
        value: videoWidth,
        onChange: (e) => setVideoWidth(e.target.value),
        className: "richer-editor-input"
      }
    ), /* @__PURE__ */ React34.createElement(
      "input",
      {
        type: "text",
        placeholder: "Height (e.g. 300 or 50%)",
        value: videoHeight,
        onChange: (e) => setVideoHeight(e.target.value),
        className: "richer-editor-input"
      }
    )),
    /* @__PURE__ */ React34.createElement("div", { className: "richer-editor-textXs" }, "Leave blank for default size. Use px (e.g. 400) or % (e.g. 50%)."),
    /* @__PURE__ */ React34.createElement(
      "button",
      {
        className: "richer-editor-primaryBtn",
        onClick: handleVideoUrlInsert,
        disabled: !videoUrl
      },
      t.video
    )
  )), !excludeToolbarButtons.includes("align") && /* @__PURE__ */ React34.createElement(
    CustomSelect_default,
    {
      value: editor.getAttributes("textAlign") || "left",
      options: alignmentOptions.map((opt) => ({ value: opt.value, label: /* @__PURE__ */ React34.createElement(React34.Fragment, null, opt.label, " ", opt.name) })),
      onChange: (val) => editor.chain().focus().setTextAlign(val).run(),
      className: "richer-editor-select",
      placeholder: t.align
    }
  )));
};
var getSafeContent2 = (content, outputFormat) => {
  if (outputFormat === "json") {
    if (typeof content === "object" && content !== null) {
      return content;
    }
    if (typeof content === "string") {
      try {
        const parsed = JSON.parse(content);
        if (typeof parsed === "object" && parsed !== null) {
          return parsed;
        }
      } catch {
      }
    }
    return { type: "doc", content: [{ type: "paragraph" }] };
  } else {
    if (typeof content === "string") {
      return content;
    }
    if (typeof content === "object" && content !== null) {
      return "";
    }
    return "";
  }
};
var SmallRicherEditor = ({
  content = "",
  onChange,
  imageUploadUrl,
  placeholder,
  minHeight,
  maxHeight,
  editorProps = {},
  outputFormat = "html",
  readOnly = false,
  className = "",
  style = {},
  excludeToolbarButtons = [],
  i18n = {}
}) => {
  var _a;
  const safeContent = React34.useMemo(() => getSafeContent2(content, outputFormat), [content, outputFormat]);
  const editor = useEditor2({
    extensions: [
      StarterKit2,
      Link2.configure({ openOnClick: true }),
      Image2,
      Bold2,
      Underline2,
      Highlight2.configure({ multicolor: false, HTMLAttributes: { style: "background-color: #fff59d" } }),
      CodeBlock2,
      BulletList2,
      OrderedList2,
      ListItem2,
      TextAlign2.configure({ types: ["paragraph"] }),
      Youtube2.configure({
        controls: true,
        allowFullscreen: true,
        width: 640,
        height: 360,
        HTMLAttributes: {
          class: "mx-auto my-4 rounded-lg shadow"
        }
      }),
      TextStyle2,
      FontSize2,
      Placeholder2.configure({
        placeholder: placeholder || "Write something..."
      })
    ],
    content: safeContent,
    editorProps: {
      ...editorProps,
      attributes: {
        class: `richer-editor-textarea prose dark:prose-invert prose-sm prose-p:mt-0 prose-p:mb-1 leading-6 prose-blockquote:bg-muted/50 prose-blockquote:p-2 prose-blockquote:px-6 prose-blockquote:border-border prose-blockquote:not-italic prose-blockquote:rounded-r-lg [&_blockquote>p]:after:content-none [&_blockquote>p]:before:content-none  prose-li:marker:text-muted-foreground w-full max-w-full ${className || ""}`,
        style: `${minHeight ? `min-height:${minHeight};` : ""}${((_a = editorProps == null ? void 0 : editorProps.attributes) == null ? void 0 : _a.style) || ""}`,
        spellCheck: "true",
        readOnly: readOnly ? "true" : void 0,
        ...editorProps == null ? void 0 : editorProps.attributes
      }
    },
    onUpdate({ editor: editor2 }) {
      if (onChange) {
        if (outputFormat === "json") {
          onChange(editor2.getJSON());
        } else {
          onChange(editor2.getHTML());
        }
      }
    },
    editable: !readOnly,
    immediatelyRender: false
  });
  React34.useEffect(() => {
    if (editor && content !== void 0) {
      const current = outputFormat === "json" ? editor.getJSON() : editor.getHTML();
      if (outputFormat === "json") {
        let parsed = content;
        if (typeof content === "string") {
          try {
            parsed = JSON.parse(content);
          } catch {
            parsed = { type: "doc", content: [{ type: "paragraph" }] };
          }
        }
        if (JSON.stringify(current) !== JSON.stringify(parsed)) {
          editor.commands.setContent(getSafeContent2(content, outputFormat));
        }
      } else {
        if (current !== content) {
          editor.commands.setContent(getSafeContent2(content, outputFormat));
        }
      }
    }
  }, [content]);
  return /* @__PURE__ */ React34.createElement("div", { className: `richer-editor-roundedMdBorder ${className || ""}`, style }, /* @__PURE__ */ React34.createElement(MenuBar2, { editor, imageUploadUrl, excludeToolbarButtons, i18n }), /* @__PURE__ */ React34.createElement("div", { className: "richer-editor-overflowAuto", style: { maxHeight } }, /* @__PURE__ */ React34.createElement(EditorContent2, { editor })));
};
var SmallRicherEditor_default = SmallRicherEditor;

// src/components/RicherContent.tsx
import React35 from "react";
var RicherContent = ({ content, className = "" }) => {
  return /* @__PURE__ */ React35.createElement("div", { className: cn(`prose dark:prose-invert
        prose-sm
        lg:prose-lg
        sm:prose-base //to make font medium
        prose-p:mt-0
        prose-p:mb-1
        leading-6

        prose-blockquote:bg-muted/50
        prose-blockquote:p-2
        prose-blockquote:px-6
        prose-blockquote:border-border
        prose-blockquote:not-italic
        prose-blockquote:rounded-r-lg
        [&_blockquote>p]:after:content-none
        [&_blockquote>p]:before:content-none

        prose-li:marker:text-muted-foreground
        w-full
        max-w-full`, className) }, /* @__PURE__ */ React35.createElement(
    "div",
    {
      className: "max-w-none",
      dangerouslySetInnerHTML: { __html: content || "" }
    }
  ));
};
var RicherContent_default = RicherContent;
export {
  CustomBulletList,
  CustomOrderedList,
  RicherContent_default as RicherContent,
  RicherEditor_default as RicherEditor,
  SmallRicherEditor_default as SmallRicherEditor
};
//# sourceMappingURL=index.mjs.map