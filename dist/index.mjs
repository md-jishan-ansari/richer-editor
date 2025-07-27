// src/components/RicherEditor.tsx
import React34, { useCallback, useState as useState3, useImperativeHandle, forwardRef } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import TaskList2 from "@tiptap/extension-task-list";
import TaskItem2 from "@tiptap/extension-task-item";
import Superscript from "@tiptap/extension-superscript";
import Subscript from "@tiptap/extension-subscript";
import Image from "@tiptap/extension-image";
import DragHandle from "@tiptap/extension-drag-handle-react";
import Youtube from "@tiptap/extension-youtube";
import Highlight from "@tiptap/extension-highlight";
import { TextStyle, LineHeight } from "@tiptap/extension-text-style";
import FontFamily from "@tiptap/extension-font-family";
import FontSize from "@tiptap/extension-font-size";
import Color from "@tiptap/extension-color";

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

// src/icons/UndoIcon.tsx
import React12 from "react";
var UndoIcon = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ React12.createElement(
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
  /* @__PURE__ */ React12.createElement("path", { d: "M3 7v6h6" }),
  /* @__PURE__ */ React12.createElement("path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" })
);
var UndoIcon_default = UndoIcon;

// src/icons/RedoIcon.tsx
import React13 from "react";
var RedoIcon = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ React13.createElement(
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
  /* @__PURE__ */ React13.createElement("path", { d: "M21 7v6h-6" }),
  /* @__PURE__ */ React13.createElement("path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" })
);
var RedoIcon_default = RedoIcon;

// src/icons/AlignLeft.tsx
import React14 from "react";
var AlignLeft = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ React14.createElement(
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
  /* @__PURE__ */ React14.createElement("line", { x1: "21", x2: "3", y1: "6", y2: "6" }),
  /* @__PURE__ */ React14.createElement("line", { x1: "15", x2: "3", y1: "12", y2: "12" }),
  /* @__PURE__ */ React14.createElement("line", { x1: "17", x2: "3", y1: "18", y2: "18" })
);
var AlignLeft_default = AlignLeft;

// src/icons/AlignCenter.tsx
import React15 from "react";
var AlignCenter = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ React15.createElement(
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
  /* @__PURE__ */ React15.createElement("line", { x1: "17", x2: "7", y1: "12", y2: "12" }),
  /* @__PURE__ */ React15.createElement("line", { x1: "19", x2: "5", y1: "18", y2: "18" })
);
var AlignCenter_default = AlignCenter;

// src/icons/AlignRight.tsx
import React16 from "react";
var AlignRight = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ React16.createElement(
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
  /* @__PURE__ */ React16.createElement("line", { x1: "21", x2: "9", y1: "12", y2: "12" }),
  /* @__PURE__ */ React16.createElement("line", { x1: "21", x2: "7", y1: "18", y2: "18" })
);
var AlignRight_default = AlignRight;

// src/icons/AlignJustify.tsx
import React17 from "react";
var AlignJustify = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ React17.createElement(
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
  /* @__PURE__ */ React17.createElement("line", { x1: "21", x2: "3", y1: "12", y2: "12" }),
  /* @__PURE__ */ React17.createElement("line", { x1: "21", x2: "3", y1: "18", y2: "18" })
);
var AlignJustify_default = AlignJustify;

// src/icons/Highlighter.tsx
import React18 from "react";
var Highlighter = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ React18.createElement(
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
  /* @__PURE__ */ React18.createElement("path", { d: "m9 11-6 6v3h9l3-3" }),
  /* @__PURE__ */ React18.createElement("path", { d: "M22 15 11 4l-3 3 11 11 3-3Z" })
);
var Highlighter_default = Highlighter;

// src/icons/Heading1.tsx
import React19 from "react";
var Heading1 = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ React19.createElement(
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
  /* @__PURE__ */ React19.createElement("path", { d: "M4 12h8" }),
  /* @__PURE__ */ React19.createElement("path", { d: "M4 18V6" }),
  /* @__PURE__ */ React19.createElement("path", { d: "M12 18V6" }),
  /* @__PURE__ */ React19.createElement("path", { d: "M17 12v-1h-2V9h3" })
);
var Heading1_default = Heading1;

// src/icons/Heading2.tsx
import React20 from "react";
var Heading2 = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ React20.createElement(
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
  /* @__PURE__ */ React20.createElement("path", { d: "M17 12a2 2 0 1 1 0 4h-3" }),
  /* @__PURE__ */ React20.createElement("path", { d: "M19 16v.01" })
);
var Heading2_default = Heading2;

// src/icons/Heading3.tsx
import React21 from "react";
var Heading3 = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ React21.createElement(
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
  /* @__PURE__ */ React21.createElement("path", { d: "M17 14a2 2 0 1 0 0-4h-2" }),
  /* @__PURE__ */ React21.createElement("path", { d: "M15 16a2 2 0 1 0 0 4h2" })
);
var Heading3_default = Heading3;

// src/icons/Heading4.tsx
import React22 from "react";
var Heading4 = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ React22.createElement(
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
  /* @__PURE__ */ React22.createElement("path", { d: "M17 18v-8l-2 2" }),
  /* @__PURE__ */ React22.createElement("path", { d: "M15 14h4" })
);
var Heading4_default = Heading4;

// src/icons/Heading5.tsx
import React23 from "react";
var Heading5 = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ React23.createElement(
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
  /* @__PURE__ */ React23.createElement("path", { d: "M17 13.5V12a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2v2h4" })
);
var Heading5_default = Heading5;

// src/icons/Heading6.tsx
import React24 from "react";
var Heading6 = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ React24.createElement(
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
  /* @__PURE__ */ React24.createElement("circle", { cx: "19", cy: "16", r: "2" }),
  /* @__PURE__ */ React24.createElement("path", { d: "M19 14v-2" })
);
var Heading6_default = Heading6;

// src/icons/VideoIcon.tsx
import React25 from "react";
var VideoIcon = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ React25.createElement(
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
  /* @__PURE__ */ React25.createElement("path", { d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" }),
  /* @__PURE__ */ React25.createElement("rect", { x: "2", y: "6", width: "14", height: "12", rx: "2" })
);
var VideoIcon_default = VideoIcon;

// src/icons/SubscriptIcon.tsx
import React26 from "react";
var SubscriptIcon = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ React26.createElement(
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
  /* @__PURE__ */ React26.createElement("path", { d: "m4 5 8 8" }),
  /* @__PURE__ */ React26.createElement("path", { d: "m12 5-8 8" }),
  /* @__PURE__ */ React26.createElement("path", { d: "M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07" })
);
var SubscriptIcon_default = SubscriptIcon;

// src/icons/SuperscriptIcon.tsx
import React27 from "react";
var SuperscriptIcon = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ React27.createElement(
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
  /* @__PURE__ */ React27.createElement("path", { d: "m4 19 8-8" }),
  /* @__PURE__ */ React27.createElement("path", { d: "m12 19-8-8" }),
  /* @__PURE__ */ React27.createElement("path", { d: "M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06" })
);
var SuperscriptIcon_default = SuperscriptIcon;

// src/icons/PaintBucket.tsx
import React28 from "react";
var PaintBucket = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ React28.createElement(
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
  /* @__PURE__ */ React28.createElement("path", { d: "m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z" }),
  /* @__PURE__ */ React28.createElement("path", { d: "m5 2 5 5" }),
  /* @__PURE__ */ React28.createElement("path", { d: "M2 13h15" }),
  /* @__PURE__ */ React28.createElement("path", { d: "M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z" })
);
var PaintBucket_default = PaintBucket;

// src/icons/TextColorIcon.tsx
import React29 from "react";
var TextColorIcon = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ React29.createElement(
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
  /* @__PURE__ */ React29.createElement("path", { d: "M12 4v16" }),
  /* @__PURE__ */ React29.createElement("path", { d: "M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2" }),
  /* @__PURE__ */ React29.createElement("path", { d: "M9 20h6" })
);
var TextColorIcon_default = TextColorIcon;

// node_modules/@tiptap/extension-list/dist/index.js
import { mergeAttributes, Node, wrappingInputRule } from "@tiptap/core";
import { mergeAttributes as mergeAttributes2, Node as Node2 } from "@tiptap/core";
import { Extension } from "@tiptap/core";
import { getNodeType } from "@tiptap/core";
import { getNodeAtPosition } from "@tiptap/core";
import { isAtStartOfNode, isNodeActive } from "@tiptap/core";
import { getNodeType as getNodeType2 } from "@tiptap/core";
import { isAtEndOfNode, isNodeActive as isNodeActive2 } from "@tiptap/core";
import { Extension as Extension2 } from "@tiptap/core";
import { mergeAttributes as mergeAttributes3, Node as Node3, wrappingInputRule as wrappingInputRule2 } from "@tiptap/core";
import { mergeAttributes as mergeAttributes4, Node as Node4, wrappingInputRule as wrappingInputRule3 } from "@tiptap/core";
import { mergeAttributes as mergeAttributes5, Node as Node5 } from "@tiptap/core";
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var ListItemName = "listItem";
var TextStyleName = "textStyle";
var bulletListInputRegex = /^\s*([-+*])\s$/;
var BulletList = Node.create({
  name: "bulletList",
  addOptions() {
    return {
      itemTypeName: "listItem",
      HTMLAttributes: {},
      keepMarks: false,
      keepAttributes: false
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  parseHTML() {
    return [{ tag: "ul" }];
  },
  renderHTML({ HTMLAttributes }) {
    return ["ul", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  addCommands() {
    return {
      toggleBulletList: () => ({ commands, chain }) => {
        if (this.options.keepAttributes) {
          return chain().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(ListItemName, this.editor.getAttributes(TextStyleName)).run();
        }
        return commands.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks);
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-8": () => this.editor.commands.toggleBulletList()
    };
  },
  addInputRules() {
    let inputRule = wrappingInputRule({
      find: bulletListInputRegex,
      type: this.type
    });
    if (this.options.keepMarks || this.options.keepAttributes) {
      inputRule = wrappingInputRule({
        find: bulletListInputRegex,
        type: this.type,
        keepMarks: this.options.keepMarks,
        keepAttributes: this.options.keepAttributes,
        getAttributes: () => {
          return this.editor.getAttributes(TextStyleName);
        },
        editor: this.editor
      });
    }
    return [inputRule];
  }
});
var ListItem = Node2.create({
  name: "listItem",
  addOptions() {
    return {
      HTMLAttributes: {},
      bulletListTypeName: "bulletList",
      orderedListTypeName: "orderedList"
    };
  },
  content: "paragraph block*",
  defining: true,
  parseHTML() {
    return [
      {
        tag: "li"
      }
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ["li", mergeAttributes2(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  addKeyboardShortcuts() {
    return {
      Enter: () => this.editor.commands.splitListItem(this.name),
      Tab: () => this.editor.commands.sinkListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
  }
});
var listHelpers_exports = {};
__export(listHelpers_exports, {
  findListItemPos: () => findListItemPos,
  getNextListDepth: () => getNextListDepth,
  handleBackspace: () => handleBackspace,
  handleDelete: () => handleDelete,
  hasListBefore: () => hasListBefore,
  hasListItemAfter: () => hasListItemAfter,
  hasListItemBefore: () => hasListItemBefore,
  listItemHasSubList: () => listItemHasSubList,
  nextListIsDeeper: () => nextListIsDeeper,
  nextListIsHigher: () => nextListIsHigher
});
var findListItemPos = (typeOrName, state) => {
  const { $from } = state.selection;
  const nodeType = getNodeType(typeOrName, state.schema);
  let currentNode = null;
  let currentDepth = $from.depth;
  let currentPos = $from.pos;
  let targetDepth = null;
  while (currentDepth > 0 && targetDepth === null) {
    currentNode = $from.node(currentDepth);
    if (currentNode.type === nodeType) {
      targetDepth = currentDepth;
    } else {
      currentDepth -= 1;
      currentPos -= 1;
    }
  }
  if (targetDepth === null) {
    return null;
  }
  return { $pos: state.doc.resolve(currentPos), depth: targetDepth };
};
var getNextListDepth = (typeOrName, state) => {
  const listItemPos = findListItemPos(typeOrName, state);
  if (!listItemPos) {
    return false;
  }
  const [, depth] = getNodeAtPosition(state, typeOrName, listItemPos.$pos.pos + 4);
  return depth;
};
var hasListBefore = (editorState, name, parentListTypes) => {
  const { $anchor } = editorState.selection;
  const previousNodePos = Math.max(0, $anchor.pos - 2);
  const previousNode = editorState.doc.resolve(previousNodePos).node();
  if (!previousNode || !parentListTypes.includes(previousNode.type.name)) {
    return false;
  }
  return true;
};
var hasListItemBefore = (typeOrName, state) => {
  var _a;
  const { $anchor } = state.selection;
  const $targetPos = state.doc.resolve($anchor.pos - 2);
  if ($targetPos.index() === 0) {
    return false;
  }
  if (((_a = $targetPos.nodeBefore) == null ? void 0 : _a.type.name) !== typeOrName) {
    return false;
  }
  return true;
};
var listItemHasSubList = (typeOrName, state, node) => {
  if (!node) {
    return false;
  }
  const nodeType = getNodeType2(typeOrName, state.schema);
  let hasSubList = false;
  node.descendants((child) => {
    if (child.type === nodeType) {
      hasSubList = true;
    }
  });
  return hasSubList;
};
var handleBackspace = (editor, name, parentListTypes) => {
  if (editor.commands.undoInputRule()) {
    return true;
  }
  if (editor.state.selection.from !== editor.state.selection.to) {
    return false;
  }
  if (!isNodeActive(editor.state, name) && hasListBefore(editor.state, name, parentListTypes)) {
    const { $anchor } = editor.state.selection;
    const $listPos = editor.state.doc.resolve($anchor.before() - 1);
    const listDescendants = [];
    $listPos.node().descendants((node, pos) => {
      if (node.type.name === name) {
        listDescendants.push({ node, pos });
      }
    });
    const lastItem = listDescendants.at(-1);
    if (!lastItem) {
      return false;
    }
    const $lastItemPos = editor.state.doc.resolve($listPos.start() + lastItem.pos + 1);
    return editor.chain().cut({ from: $anchor.start() - 1, to: $anchor.end() + 1 }, $lastItemPos.end()).joinForward().run();
  }
  if (!isNodeActive(editor.state, name)) {
    return false;
  }
  if (!isAtStartOfNode(editor.state)) {
    return false;
  }
  const listItemPos = findListItemPos(name, editor.state);
  if (!listItemPos) {
    return false;
  }
  const $prev = editor.state.doc.resolve(listItemPos.$pos.pos - 2);
  const prevNode = $prev.node(listItemPos.depth);
  const previousListItemHasSubList = listItemHasSubList(name, editor.state, prevNode);
  if (hasListItemBefore(name, editor.state) && !previousListItemHasSubList) {
    return editor.commands.joinItemBackward();
  }
  return editor.chain().liftListItem(name).run();
};
var nextListIsDeeper = (typeOrName, state) => {
  const listDepth = getNextListDepth(typeOrName, state);
  const listItemPos = findListItemPos(typeOrName, state);
  if (!listItemPos || !listDepth) {
    return false;
  }
  if (listDepth > listItemPos.depth) {
    return true;
  }
  return false;
};
var nextListIsHigher = (typeOrName, state) => {
  const listDepth = getNextListDepth(typeOrName, state);
  const listItemPos = findListItemPos(typeOrName, state);
  if (!listItemPos || !listDepth) {
    return false;
  }
  if (listDepth < listItemPos.depth) {
    return true;
  }
  return false;
};
var handleDelete = (editor, name) => {
  if (!isNodeActive2(editor.state, name)) {
    return false;
  }
  if (!isAtEndOfNode(editor.state, name)) {
    return false;
  }
  const { selection } = editor.state;
  const { $from, $to } = selection;
  if (!selection.empty && $from.sameParent($to)) {
    return false;
  }
  if (nextListIsDeeper(name, editor.state)) {
    return editor.chain().focus(editor.state.selection.from + 4).lift(name).joinBackward().run();
  }
  if (nextListIsHigher(name, editor.state)) {
    return editor.chain().joinForward().joinBackward().run();
  }
  return editor.commands.joinItemForward();
};
var hasListItemAfter = (typeOrName, state) => {
  var _a;
  const { $anchor } = state.selection;
  const $targetPos = state.doc.resolve($anchor.pos - $anchor.parentOffset - 2);
  if ($targetPos.index() === $targetPos.parent.childCount - 1) {
    return false;
  }
  if (((_a = $targetPos.nodeAfter) == null ? void 0 : _a.type.name) !== typeOrName) {
    return false;
  }
  return true;
};
var ListKeymap = Extension.create({
  name: "listKeymap",
  addOptions() {
    return {
      listTypes: [
        {
          itemName: "listItem",
          wrapperNames: ["bulletList", "orderedList"]
        },
        {
          itemName: "taskItem",
          wrapperNames: ["taskList"]
        }
      ]
    };
  },
  addKeyboardShortcuts() {
    return {
      Delete: ({ editor }) => {
        let handled = false;
        this.options.listTypes.forEach(({ itemName }) => {
          if (editor.state.schema.nodes[itemName] === void 0) {
            return;
          }
          if (handleDelete(editor, itemName)) {
            handled = true;
          }
        });
        return handled;
      },
      "Mod-Delete": ({ editor }) => {
        let handled = false;
        this.options.listTypes.forEach(({ itemName }) => {
          if (editor.state.schema.nodes[itemName] === void 0) {
            return;
          }
          if (handleDelete(editor, itemName)) {
            handled = true;
          }
        });
        return handled;
      },
      Backspace: ({ editor }) => {
        let handled = false;
        this.options.listTypes.forEach(({ itemName, wrapperNames }) => {
          if (editor.state.schema.nodes[itemName] === void 0) {
            return;
          }
          if (handleBackspace(editor, itemName, wrapperNames)) {
            handled = true;
          }
        });
        return handled;
      },
      "Mod-Backspace": ({ editor }) => {
        let handled = false;
        this.options.listTypes.forEach(({ itemName, wrapperNames }) => {
          if (editor.state.schema.nodes[itemName] === void 0) {
            return;
          }
          if (handleBackspace(editor, itemName, wrapperNames)) {
            handled = true;
          }
        });
        return handled;
      }
    };
  }
});
var ListItemName2 = "listItem";
var TextStyleName2 = "textStyle";
var orderedListInputRegex = /^(\d+)\.\s$/;
var OrderedList = Node3.create({
  name: "orderedList",
  addOptions() {
    return {
      itemTypeName: "listItem",
      HTMLAttributes: {},
      keepMarks: false,
      keepAttributes: false
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  addAttributes() {
    return {
      start: {
        default: 1,
        parseHTML: (element) => {
          return element.hasAttribute("start") ? parseInt(element.getAttribute("start") || "", 10) : 1;
        }
      },
      type: {
        default: null,
        parseHTML: (element) => element.getAttribute("type")
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "ol"
      }
    ];
  },
  renderHTML({ HTMLAttributes }) {
    const { start, ...attributesWithoutStart } = HTMLAttributes;
    return start === 1 ? ["ol", mergeAttributes3(this.options.HTMLAttributes, attributesWithoutStart), 0] : ["ol", mergeAttributes3(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
  addCommands() {
    return {
      toggleOrderedList: () => ({ commands, chain }) => {
        if (this.options.keepAttributes) {
          return chain().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(ListItemName2, this.editor.getAttributes(TextStyleName2)).run();
        }
        return commands.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks);
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-7": () => this.editor.commands.toggleOrderedList()
    };
  },
  addInputRules() {
    let inputRule = wrappingInputRule2({
      find: orderedListInputRegex,
      type: this.type,
      getAttributes: (match) => ({ start: +match[1] }),
      joinPredicate: (match, node) => node.childCount + node.attrs.start === +match[1]
    });
    if (this.options.keepMarks || this.options.keepAttributes) {
      inputRule = wrappingInputRule2({
        find: orderedListInputRegex,
        type: this.type,
        keepMarks: this.options.keepMarks,
        keepAttributes: this.options.keepAttributes,
        getAttributes: (match) => ({ start: +match[1], ...this.editor.getAttributes(TextStyleName2) }),
        joinPredicate: (match, node) => node.childCount + node.attrs.start === +match[1],
        editor: this.editor
      });
    }
    return [inputRule];
  }
});
var inputRegex = /^\s*(\[([( |x])?\])\s$/;
var TaskItem = Node4.create({
  name: "taskItem",
  addOptions() {
    return {
      nested: false,
      HTMLAttributes: {},
      taskListTypeName: "taskList",
      a11y: void 0
    };
  },
  content() {
    return this.options.nested ? "paragraph block*" : "paragraph+";
  },
  defining: true,
  addAttributes() {
    return {
      checked: {
        default: false,
        keepOnSplit: false,
        parseHTML: (element) => {
          const dataChecked = element.getAttribute("data-checked");
          return dataChecked === "" || dataChecked === "true";
        },
        renderHTML: (attributes) => ({
          "data-checked": attributes.checked
        })
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: `li[data-type="${this.name}"]`,
        priority: 51
      }
    ];
  },
  renderHTML({ node, HTMLAttributes }) {
    return [
      "li",
      mergeAttributes4(this.options.HTMLAttributes, HTMLAttributes, {
        "data-type": this.name
      }),
      [
        "label",
        [
          "input",
          {
            type: "checkbox",
            checked: node.attrs.checked ? "checked" : null
          }
        ],
        ["span"]
      ],
      ["div", 0]
    ];
  },
  addKeyboardShortcuts() {
    const shortcuts = {
      Enter: () => this.editor.commands.splitListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
    if (!this.options.nested) {
      return shortcuts;
    }
    return {
      ...shortcuts,
      Tab: () => this.editor.commands.sinkListItem(this.name)
    };
  },
  addNodeView() {
    return ({ node, HTMLAttributes, getPos, editor }) => {
      const listItem = document.createElement("li");
      const checkboxWrapper = document.createElement("label");
      const checkboxStyler = document.createElement("span");
      const checkbox = document.createElement("input");
      const content = document.createElement("div");
      const updateA11Y = () => {
        var _a, _b;
        checkbox.ariaLabel = ((_b = (_a = this.options.a11y) == null ? void 0 : _a.checkboxLabel) == null ? void 0 : _b.call(_a, node, checkbox.checked)) || `Task item checkbox for ${node.textContent || "empty task item"}`;
      };
      updateA11Y();
      checkboxWrapper.contentEditable = "false";
      checkbox.type = "checkbox";
      checkbox.addEventListener("mousedown", (event) => event.preventDefault());
      checkbox.addEventListener("change", (event) => {
        if (!editor.isEditable && !this.options.onReadOnlyChecked) {
          checkbox.checked = !checkbox.checked;
          return;
        }
        const { checked } = event.target;
        if (editor.isEditable && typeof getPos === "function") {
          editor.chain().focus(void 0, { scrollIntoView: false }).command(({ tr }) => {
            const position = getPos();
            if (typeof position !== "number") {
              return false;
            }
            const currentNode = tr.doc.nodeAt(position);
            tr.setNodeMarkup(position, void 0, {
              ...currentNode == null ? void 0 : currentNode.attrs,
              checked
            });
            return true;
          }).run();
        }
        if (!editor.isEditable && this.options.onReadOnlyChecked) {
          if (!this.options.onReadOnlyChecked(node, checked)) {
            checkbox.checked = !checkbox.checked;
          }
        }
      });
      Object.entries(this.options.HTMLAttributes).forEach(([key, value]) => {
        listItem.setAttribute(key, value);
      });
      listItem.dataset.checked = node.attrs.checked;
      checkbox.checked = node.attrs.checked;
      checkboxWrapper.append(checkbox, checkboxStyler);
      listItem.append(checkboxWrapper, content);
      Object.entries(HTMLAttributes).forEach(([key, value]) => {
        listItem.setAttribute(key, value);
      });
      return {
        dom: listItem,
        contentDOM: content,
        update: (updatedNode) => {
          if (updatedNode.type !== this.type) {
            return false;
          }
          listItem.dataset.checked = updatedNode.attrs.checked;
          checkbox.checked = updatedNode.attrs.checked;
          updateA11Y();
          return true;
        }
      };
    };
  },
  addInputRules() {
    return [
      wrappingInputRule3({
        find: inputRegex,
        type: this.type,
        getAttributes: (match) => ({
          checked: match[match.length - 1] === "x"
        })
      })
    ];
  }
});
var TaskList = Node5.create({
  name: "taskList",
  addOptions() {
    return {
      itemTypeName: "taskItem",
      HTMLAttributes: {}
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  parseHTML() {
    return [
      {
        tag: `ul[data-type="${this.name}"]`,
        priority: 51
      }
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ["ul", mergeAttributes5(this.options.HTMLAttributes, HTMLAttributes, { "data-type": this.name }), 0];
  },
  addCommands() {
    return {
      toggleTaskList: () => ({ commands }) => {
        return commands.toggleList(this.name, this.options.itemTypeName);
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-9": () => this.editor.commands.toggleTaskList()
    };
  }
});
var ListKit = Extension2.create({
  name: "listKit",
  addExtensions() {
    const extensions = [];
    if (this.options.bulletList !== false) {
      extensions.push(BulletList.configure(this.options.bulletList));
    }
    if (this.options.listItem !== false) {
      extensions.push(ListItem.configure(this.options.listItem));
    }
    if (this.options.listKeymap !== false) {
      extensions.push(ListKeymap.configure(this.options.listKeymap));
    }
    if (this.options.orderedList !== false) {
      extensions.push(OrderedList.configure(this.options.orderedList));
    }
    if (this.options.taskItem !== false) {
      extensions.push(TaskItem.configure(this.options.taskItem));
    }
    if (this.options.taskList !== false) {
      extensions.push(TaskList.configure(this.options.taskList));
    }
    return extensions;
  }
});

// src/components/tiptap-extensions/CustomBulletList.ts
import { mergeAttributes as mergeAttributes6 } from "@tiptap/core";
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
    return ["ul", mergeAttributes6(this.options.HTMLAttributes, HTMLAttributes), 0];
  }
});

// src/components/tiptap-extensions/CustomOrderedList.ts
import { mergeAttributes as mergeAttributes7 } from "@tiptap/core";
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
    return ["ol", mergeAttributes7(this.options.HTMLAttributes, HTMLAttributes), 0];
  }
});

// src/components/ui/CustomSelect.tsx
import React30, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import "./CustomSelect-U6MJMVUK.css";

// src/lib/utils.ts
import { clsx } from "clsx";
function cn(...inputs) {
  return clsx(...inputs);
}
var getSafeContent = (content) => {
  if (!content || !content.json) {
    return { type: "doc", content: [{ type: "paragraph" }] };
  }
  if (typeof content.json === "object") {
    return content.json;
  }
  if (typeof content.json === "string") {
    const parsed = JSON.parse(content.json);
    if (typeof parsed === "object" && parsed !== null) {
      return parsed;
    }
  }
  return { type: "doc", content: [{ type: "paragraph" }] };
};

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
  return /* @__PURE__ */ React30.createElement(
    "div",
    {
      className: cn("richer-editor-selectWrapper", className),
      tabIndex: 0,
      onBlur: (e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false);
      },
      style: { display: "inline-block" }
    },
    label && /* @__PURE__ */ React30.createElement("div", { className: "richer-editor-label" }, label),
    /* @__PURE__ */ React30.createElement(
      "button",
      {
        ref: triggerRef,
        className: "richer-editor-trigger",
        "aria-haspopup": "listbox",
        "aria-expanded": open,
        onClick: () => setOpen((o) => !o),
        onKeyDown: handleKeyDown,
        type: "button"
      },
      /* @__PURE__ */ React30.createElement("span", { className: selectedOption ? void 0 : "richer-editor-placeholder" }, selectedOption ? selectedOption.label : placeholder || "Select..."),
      /* @__PURE__ */ React30.createElement("span", { className: "richer-editor-chevron", "aria-hidden": true }, "\u25BC")
    ),
    open && ReactDOM.createPortal(
      /* @__PURE__ */ React30.createElement(
        "ul",
        {
          className: "richer-editor-options",
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
        options.map((opt, idx) => /* @__PURE__ */ React30.createElement(
          "li",
          {
            key: opt.value,
            className: `richer-editor-option${value === opt.value ? " richer-editor-selected" : ""}${highlighted === idx ? " richer-editor-highlighted" : ""}`,
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
import React31, { useRef as useRef2, useState as useState2, useEffect as useEffect2, useLayoutEffect } from "react";
import ReactDOM2 from "react-dom";
import "./CustomPopover-APWYDOEU.css";
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
  useLayoutEffect(() => {
    if (open && popoverRef.current) {
      const popoverRect = popoverRef.current.getBoundingClientRect();
      let left = position.left;
      if (popoverRect.right > window.innerWidth - 8) {
        left = Math.max(8, window.innerWidth - popoverRect.width - 8);
        setPosition((pos) => ({ ...pos, left }));
      }
    }
  }, [open, position.left]);
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
    /* @__PURE__ */ React31.createElement(
      "div",
      {
        ref: popoverRef,
        className: cn("richer-editor-popover", className),
        style: { top: position.top, left: position.left, position: "absolute", zIndex: 1e3 },
        tabIndex: -1,
        role: "dialog",
        "aria-modal": "true"
      },
      closeButton && /* @__PURE__ */ React31.createElement(
        "button",
        {
          className: "richer-editor-closeBtn",
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
import "./RicherEditor-F2PMNB34.css";

// src/icons/LineHeightIcon.tsx
import React32 from "react";
var LineHeightIcon = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ React32.createElement(
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
  /* @__PURE__ */ React32.createElement("path", { d: "M12 8V2" }),
  /* @__PURE__ */ React32.createElement("path", { d: "M4 12H2" }),
  /* @__PURE__ */ React32.createElement("path", { d: "M10 12H8" }),
  /* @__PURE__ */ React32.createElement("path", { d: "M16 12h-2" }),
  /* @__PURE__ */ React32.createElement("path", { d: "M22 12h-2" }),
  /* @__PURE__ */ React32.createElement("path", { d: "m15 19-3 3-3-3" }),
  /* @__PURE__ */ React32.createElement("path", { d: "m15 5-3-3-3 3" })
);
var LineHeightIcon_default = LineHeightIcon;

// src/icons/DragIcon.tsx
import React33 from "react";
var DragIcon = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ React33.createElement(
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
  /* @__PURE__ */ React33.createElement("circle", { cx: "12", cy: "9", r: "1" }),
  /* @__PURE__ */ React33.createElement("circle", { cx: "19", cy: "9", r: "1" }),
  /* @__PURE__ */ React33.createElement("circle", { cx: "5", cy: "9", r: "1" }),
  /* @__PURE__ */ React33.createElement("circle", { cx: "12", cy: "15", r: "1" }),
  /* @__PURE__ */ React33.createElement("circle", { cx: "19", cy: "15", r: "1" }),
  /* @__PURE__ */ React33.createElement("circle", { cx: "5", cy: "15", r: "1" })
);
var DragIcon_default = DragIcon;

// src/components/RicherEditor.tsx
function isSafeUrl(url) {
  try {
    const parsed = new URL(url, window.location.origin);
    return ["http:", "https:"].includes(parsed.protocol) || parsed.protocol === "data:" && url.startsWith("data:image/");
  } catch {
    return false;
  }
}
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
  { level: 1, label: /* @__PURE__ */ React34.createElement(Heading1_default, { size: 18 }) },
  { level: 2, label: /* @__PURE__ */ React34.createElement(Heading2_default, { size: 18 }) },
  { level: 3, label: /* @__PURE__ */ React34.createElement(Heading3_default, { size: 18 }) },
  { level: 4, label: /* @__PURE__ */ React34.createElement(Heading4_default, { size: 18 }) },
  { level: 5, label: /* @__PURE__ */ React34.createElement(Heading5_default, { size: 18 }) },
  { level: 6, label: /* @__PURE__ */ React34.createElement(Heading6_default, { size: 18 }) }
];
var lineHeights = [
  { name: "Single", value: "1" },
  { name: "1.15", value: "1.15" },
  { name: "1.5", value: "1.5" },
  { name: "Double", value: "2" },
  { name: "2.5", value: "2.5" },
  { name: "3", value: "3" }
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
  cancel: "Cancel",
  paragraph: "Paragraph",
  h1: "Heading 1",
  h2: "Heading 2",
  h3: "Heading 3",
  h4: "Heading 4",
  h5: "Heading 5",
  h6: "Heading 6",
  url: "URL",
  upload: "Upload",
  pasteImageUrl: "Paste image URL here...",
  pasteLinkUrl: "Paste link URL here...",
  pasteVideoUrl: "Paste YouTube video URL here...",
  width: "Width",
  height: "Height",
  ulStyle: "UL Style",
  olStyle: "OL Style",
  removeColor: "Remove Color",
  uploading: "Uploading...",
  uploadFailed: "Upload failed",
  newTab: "New Tab (_blank)",
  sameTab: "Same Tab (_self)",
  parentFrame: "Parent Frame (_parent)",
  topFrame: "Top Frame (_top)"
};
var MenuBar = ({ editor, imageUploadUrl, excludeToolbarButtons = [], i18n = {}, fontSizeOptions, fontFamilyOptions, customToolbarButtons }) => {
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
  const [linkTarget, setLinkTarget] = useState3("_blank");
  const linkButtonRef = React34.useRef(null);
  const imageButtonRef = React34.useRef(null);
  const videoButtonRef = React34.useRef(null);
  const [textColorPopoverOpen, setTextColorPopoverOpen] = React34.useState(false);
  const textColorButtonRef = React34.useRef(null);
  const [bgColorPopoverOpen, setBgColorPopoverOpen] = React34.useState(false);
  const bgColorButtonRef = React34.useRef(null);
  const handleImageUrlInsert = useCallback(() => {
    if (imageUrl && isSafeUrl(imageUrl)) {
      const attrs = { src: imageUrl };
      if (imageWidth) attrs.width = imageWidth;
      if (imageHeight) attrs.height = imageHeight;
      editor.chain().focus().setImage(attrs).run();
      setImagePopoverOpen(false);
      setImageUrl("");
      setImageWidth("");
      setImageHeight("");
    } else if (imageUrl) {
      window.alert("Invalid or unsafe image URL.");
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
    if (videoUrl && isSafeUrl(videoUrl)) {
      const attrs = { src: videoUrl };
      if (videoWidth) attrs.width = videoWidth;
      if (videoHeight) attrs.height = videoHeight;
      editor.chain().focus().setYoutubeVideo(attrs).run();
      setVideoPopoverOpen(false);
      setVideoUrl("");
      setVideoWidth("");
      setVideoHeight("");
    } else if (videoUrl) {
      window.alert("Invalid or unsafe video URL.");
    }
  }, [editor, videoUrl, videoWidth, videoHeight]);
  const handleLinkInsert = useCallback(() => {
    if (linkUrl && isSafeUrl(linkUrl)) {
      editor.chain().focus().setLink({ href: linkUrl, target: linkTarget }).run();
      setLinkPopoverOpen(false);
      setLinkUrl("");
      setLinkTarget("_blank");
    } else if (linkUrl) {
      window.alert("Invalid or unsafe link URL.");
    }
  }, [editor, linkUrl, linkTarget]);
  const handleLinkUnset = useCallback(() => {
    editor.chain().focus().unsetLink().run();
    setLinkPopoverOpen(false);
    setLinkUrl("");
  }, [editor]);
  if (!editor) return null;
  const labels = { ...defaultI18n, ...i18n };
  return /* @__PURE__ */ React34.createElement(React34.Fragment, null, /* @__PURE__ */ React34.createElement("div", { className: "richer-editor-toolbar" }, !excludeToolbarButtons.includes("heading") && /* @__PURE__ */ React34.createElement(React34.Fragment, null, /* @__PURE__ */ React34.createElement(
    CustomSelect_default,
    {
      value: (() => {
        const activeHeading = headingOptions.find((opt) => editor.isActive("heading", { level: opt.level }));
        return activeHeading ? activeHeading.level.toString() : "";
      })(),
      options: [
        { value: "paragraph", label: labels.paragraph },
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
      placeholder: labels.heading,
      "aria-label": "Heading Level"
    }
  ), /* @__PURE__ */ React34.createElement("div", { className: "richer-editor-toolbar-divider" })), !excludeToolbarButtons.includes("fontSize") && /* @__PURE__ */ React34.createElement(
    CustomSelect_default,
    {
      value: editor.getAttributes("fontSize").fontSize || "",
      options: (fontSizeOptions || fontSizes).map((f) => ({ value: f.value, label: f.name })),
      onChange: (val) => editor.chain().focus().setFontSize(val).run(),
      className: "richer-editor-select",
      placeholder: labels.fontSize,
      "aria-label": "Font Size"
    }
  ), !excludeToolbarButtons.includes("fontFamily") && /* @__PURE__ */ React34.createElement(React34.Fragment, null, /* @__PURE__ */ React34.createElement(
    CustomSelect_default,
    {
      value: editor.getAttributes("fontFamily").fontFamily || "",
      options: (fontFamilyOptions || fontFamilies).map((f) => ({
        value: f.value,
        label: /* @__PURE__ */ React34.createElement("span", { style: { fontFamily: f.value } }, f.name)
      })),
      onChange: (val) => editor.chain().focus().setFontFamily(val).run(),
      className: "richer-editor-select",
      placeholder: labels.fontFamily,
      "aria-label": "Font Family"
    }
  ), /* @__PURE__ */ React34.createElement("div", { className: "richer-editor-toolbar-divider" })), !excludeToolbarButtons.includes("lineHeight") && /* @__PURE__ */ React34.createElement(
    CustomSelect_default,
    {
      value: "__placeholder__",
      options: [
        ...lineHeights.map((lh) => ({ value: lh.value, label: lh.name })),
        { value: "", label: "Reset" }
      ],
      onChange: (val) => {
        if (val === "") {
          editor.chain().focus().unsetLineHeight().run();
        } else {
          editor.chain().focus().setLineHeight(val).run();
        }
      },
      className: "richer-editor-select",
      placeholder: /* @__PURE__ */ React34.createElement(LineHeightIcon_default, { size: 16 }),
      "aria-label": "Line Height"
    }
  ), !excludeToolbarButtons.includes("bold") && /* @__PURE__ */ React34.createElement("button", { onClick: () => editor.chain().focus().toggleBold().run(), className: `richer-editor-button ${editor.isActive("bold") ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": labels.bold, title: labels.bold }, /* @__PURE__ */ React34.createElement(BoldIcon_default, { size: 16 })), !excludeToolbarButtons.includes("italic") && /* @__PURE__ */ React34.createElement("button", { onClick: () => editor.chain().focus().toggleItalic().run(), className: `richer-editor-button ${editor.isActive("italic") ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": labels.italic, title: labels.italic }, /* @__PURE__ */ React34.createElement(ItalicIcon_default, { size: 16 })), !excludeToolbarButtons.includes("underline") && /* @__PURE__ */ React34.createElement("button", { onClick: () => editor.chain().focus().toggleUnderline().run(), className: `richer-editor-button ${editor.isActive("underline") ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": labels.underline, title: labels.underline }, /* @__PURE__ */ React34.createElement(UnderlineIcon_default, { size: 16 })), !excludeToolbarButtons.includes("strike") && /* @__PURE__ */ React34.createElement("button", { onClick: () => editor.chain().focus().toggleStrike().run(), className: `richer-editor-button ${editor.isActive("strike") ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": labels.strike, title: labels.strike }, /* @__PURE__ */ React34.createElement(StrikeIcon_default, { size: 16 })), !excludeToolbarButtons.includes("highlight") && /* @__PURE__ */ React34.createElement("button", { onClick: () => editor.chain().focus().toggleHighlight().run(), className: `richer-editor-button ${editor.isActive("highlight") ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": labels.highlight, title: labels.highlight }, /* @__PURE__ */ React34.createElement(Highlighter_default, { size: 16 })), !excludeToolbarButtons.includes("code") && /* @__PURE__ */ React34.createElement(React34.Fragment, null, /* @__PURE__ */ React34.createElement("button", { onClick: () => editor.chain().focus().toggleCodeBlock().run(), className: `richer-editor-button ${editor.isActive("codeBlock") ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": labels.code, title: labels.code }, /* @__PURE__ */ React34.createElement(CodeIcon_default, { size: 16 })), /* @__PURE__ */ React34.createElement("div", { className: "richer-editor-toolbar-divider" })), !excludeToolbarButtons.includes("bulletList") && /* @__PURE__ */ React34.createElement(React34.Fragment, null, /* @__PURE__ */ React34.createElement("button", { onClick: () => editor.chain().focus().toggleBulletList().run(), className: `richer-editor-button ${editor.isActive("bulletList") ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": labels.bulletList, title: labels.bulletList }, /* @__PURE__ */ React34.createElement(BulletListIcon_default, { size: 16 })), /* @__PURE__ */ React34.createElement(
    CustomSelect_default,
    {
      value: editor.getAttributes("bulletList").listStyleType || "",
      options: unorderedListStyles.map((opt) => ({ value: opt.value, label: /* @__PURE__ */ React34.createElement(React34.Fragment, null, opt.icon, " ", opt.name) })),
      onChange: (val) => {
        if (editor.isActive("bulletList")) {
          editor.chain().focus().updateAttributes("bulletList", { listStyleType: val }).run();
        } else {
          window.alert("Please place the cursor inside an unordered list to change its style.");
        }
      },
      className: "richer-editor-select",
      placeholder: labels.ulStyle,
      "aria-label": "Unordered List Style"
    }
  )), !excludeToolbarButtons.includes("orderedList") && /* @__PURE__ */ React34.createElement(React34.Fragment, null, /* @__PURE__ */ React34.createElement("button", { onClick: () => editor.chain().focus().toggleOrderedList().run(), className: `richer-editor-button ${editor.isActive("orderedList") ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": labels.orderedList, title: labels.orderedList }, /* @__PURE__ */ React34.createElement(OrderedListIcon_default, { size: 16 })), /* @__PURE__ */ React34.createElement(
    CustomSelect_default,
    {
      value: editor.getAttributes("orderedList").listStyleType || "",
      options: orderedListStyles.map((opt) => ({ value: opt.value, label: /* @__PURE__ */ React34.createElement(React34.Fragment, null, opt.icon, " ", opt.name) })),
      onChange: (val) => {
        if (editor.isActive("orderedList")) {
          editor.chain().focus().updateAttributes("orderedList", { listStyleType: val }).run();
        } else {
          window.alert("Please place the cursor inside an ordered list to change its style.");
        }
      },
      className: "richer-editor-select",
      placeholder: labels.olStyle,
      "aria-label": "Ordered List Style"
    }
  )), !excludeToolbarButtons.includes("taskList") && /* @__PURE__ */ React34.createElement(React34.Fragment, null, /* @__PURE__ */ React34.createElement("button", { onClick: () => editor.chain().focus().toggleTaskList().run(), className: `richer-editor-button ${editor.isActive("taskList") ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": labels.taskList, title: labels.taskList }, /* @__PURE__ */ React34.createElement(TaskListIcon_default, { size: 16 })), /* @__PURE__ */ React34.createElement("div", { className: "richer-editor-toolbar-divider" })), !excludeToolbarButtons.includes("blockquote") && /* @__PURE__ */ React34.createElement("button", { onClick: () => editor.chain().focus().toggleBlockquote().run(), className: `richer-editor-button ${editor.isActive("blockquote") ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": labels.blockquote, title: labels.blockquote }, /* @__PURE__ */ React34.createElement(BlockquoteIcon_default, { size: 16 })), !excludeToolbarButtons.includes("hr") && /* @__PURE__ */ React34.createElement(React34.Fragment, null, /* @__PURE__ */ React34.createElement("button", { onClick: () => editor.chain().focus().setHorizontalRule().run(), className: "richer-editor-button", type: "button", "aria-label": labels.hr, title: labels.hr }, "HR"), /* @__PURE__ */ React34.createElement("div", { className: "richer-editor-toolbar-divider" })), !excludeToolbarButtons.includes("link") && /* @__PURE__ */ React34.createElement(React34.Fragment, null, /* @__PURE__ */ React34.createElement(
    "button",
    {
      ref: linkButtonRef,
      onClick: () => {
        setLinkPopoverOpen((open) => !open);
        setLinkUrl(editor.getAttributes("link").href || "");
        setLinkTarget(editor.getAttributes("link").target || "_blank");
      },
      className: `richer-editor-button${editor.isActive("link") ? " richer-editor-buttonActive" : ""}`,
      type: "button",
      "aria-label": labels.link,
      title: labels.link
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
    /* @__PURE__ */ React34.createElement("div", { className: "richer-editor-mb2 richer-editor-fontSemibold richer-editor-textBase" }, labels.link),
    /* @__PURE__ */ React34.createElement(
      "input",
      {
        type: "text",
        placeholder: labels.pasteLinkUrl,
        value: linkUrl,
        onChange: (e) => setLinkUrl(e.target.value),
        className: "richer-editor-input",
        autoFocus: true
      }
    ),
    /* @__PURE__ */ React34.createElement(
      "select",
      {
        name: "target",
        value: linkTarget,
        onChange: (e) => setLinkTarget(e.target.value),
        className: "richer-editor-input",
        style: { marginBottom: 8 }
      },
      /* @__PURE__ */ React34.createElement("option", { value: "_blank" }, labels.newTab),
      /* @__PURE__ */ React34.createElement("option", { value: "_self" }, "Same Tab (_self)"),
      /* @__PURE__ */ React34.createElement("option", { value: "_parent" }, "Parent Frame (_parent)"),
      /* @__PURE__ */ React34.createElement("option", { value: "_top" }, "Top Frame (_top)")
    ),
    /* @__PURE__ */ React34.createElement("div", { className: "richer-editor-flexRow" }, /* @__PURE__ */ React34.createElement(
      "button",
      {
        className: "richer-editor-primaryBtn",
        onClick: handleLinkInsert,
        disabled: !linkUrl
      },
      labels.insert
    ), /* @__PURE__ */ React34.createElement(
      "button",
      {
        className: "richer-editor-secondaryBtn",
        onClick: handleLinkUnset,
        disabled: !editor.isActive("link")
      },
      labels.remove
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
      type: "button"
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
    /* @__PURE__ */ React34.createElement("div", { className: "richer-editor-mb2 richer-editor-fontSemibold richer-editor-textBase flex gap-4 border-b pb-2" }, /* @__PURE__ */ React34.createElement("button", { className: `richer-editor-button${imageTab === "url" ? " richer-editor-buttonActive" : ""}`, onClick: () => setImageTab("url") }, labels.url), imageUploadUrl && /* @__PURE__ */ React34.createElement("button", { className: `richer-editor-button${imageTab === "upload" ? " richer-editor-buttonActive" : ""}`, onClick: () => setImageTab("upload") }, labels.upload)),
    imageTab === "url" && /* @__PURE__ */ React34.createElement(React34.Fragment, null, /* @__PURE__ */ React34.createElement(
      "input",
      {
        type: "text",
        placeholder: labels.pasteImageUrl,
        value: imageUrl,
        onChange: (e) => setImageUrl(e.target.value),
        className: "richer-editor-input",
        autoFocus: true
      }
    ), /* @__PURE__ */ React34.createElement("div", { className: "richer-editor-flexRowMb2" }, /* @__PURE__ */ React34.createElement(
      "input",
      {
        type: "text",
        placeholder: labels.width,
        value: imageWidth,
        onChange: (e) => setImageWidth(e.target.value),
        className: "richer-editor-input"
      }
    ), /* @__PURE__ */ React34.createElement(
      "input",
      {
        type: "text",
        placeholder: labels.height,
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
      labels.image
    )),
    imageTab === "upload" && imageUploadUrl && /* @__PURE__ */ React34.createElement(React34.Fragment, null, !uploadedImageUrl && /* @__PURE__ */ React34.createElement(React34.Fragment, null, /* @__PURE__ */ React34.createElement(
      "input",
      {
        type: "file",
        accept: "image/*",
        onChange: handleUploadInputChange,
        className: "richer-editor-mb2",
        disabled: uploading
      }
    ), uploading && /* @__PURE__ */ React34.createElement("div", { className: "richer-editor-textSm richer-editor-textBlue600 richer-editor-mb2" }, labels.uploading), uploadError && /* @__PURE__ */ React34.createElement("div", { className: "richer-editor-textSm richer-editor-textRed600 richer-editor-mb2" }, labels.uploadFailed)), uploadedImageUrl && /* @__PURE__ */ React34.createElement(React34.Fragment, null, /* @__PURE__ */ React34.createElement("div", { className: "richer-editor-mb2 richer-editor-flex richer-editor-flexCol richer-editor-itemsCenter" }, /* @__PURE__ */ React34.createElement("img", { src: uploadedImageUrl, alt: "Preview", className: "richer-editor-maxH40 richer-editor-maxWFull rounded border mb-2" })), /* @__PURE__ */ React34.createElement("div", { className: "richer-editor-flexRowMb2" }, /* @__PURE__ */ React34.createElement(
      "input",
      {
        type: "text",
        placeholder: labels.width,
        value: imageWidth,
        onChange: (e) => setImageWidth(e.target.value),
        className: "richer-editor-input"
      }
    ), /* @__PURE__ */ React34.createElement(
      "input",
      {
        type: "text",
        placeholder: labels.height,
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
      labels.add
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
      labels.cancel
    ))))
  )), !excludeToolbarButtons.includes("video") && /* @__PURE__ */ React34.createElement(React34.Fragment, null, /* @__PURE__ */ React34.createElement(
    "button",
    {
      ref: videoButtonRef,
      onClick: () => setVideoPopoverOpen((open) => !open),
      className: "richer-editor-button",
      type: "button"
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
    /* @__PURE__ */ React34.createElement("div", { className: "richer-editor-mb2 richer-editor-fontSemibold richer-editor-textBase" }, labels.video),
    /* @__PURE__ */ React34.createElement(
      "input",
      {
        type: "text",
        placeholder: labels.pasteVideoUrl,
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
        placeholder: labels.width,
        value: videoWidth,
        onChange: (e) => setVideoWidth(e.target.value),
        className: "richer-editor-input"
      }
    ), /* @__PURE__ */ React34.createElement(
      "input",
      {
        type: "text",
        placeholder: labels.height,
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
      labels.video
    )
  )), !excludeToolbarButtons.includes("alignLeft") && /* @__PURE__ */ React34.createElement("button", { onClick: () => editor.chain().focus().setTextAlign("left").run(), className: `richer-editor-button ${editor.isActive({ textAlign: "left" }) ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": labels.alignLeft, title: labels.alignLeft }, /* @__PURE__ */ React34.createElement(AlignLeft_default, { size: 16 })), !excludeToolbarButtons.includes("alignCenter") && /* @__PURE__ */ React34.createElement("button", { onClick: () => editor.chain().focus().setTextAlign("center").run(), className: `richer-editor-button ${editor.isActive({ textAlign: "center" }) ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": labels.alignCenter, title: labels.alignCenter }, /* @__PURE__ */ React34.createElement(AlignCenter_default, { size: 16 })), !excludeToolbarButtons.includes("alignRight") && /* @__PURE__ */ React34.createElement("button", { onClick: () => editor.chain().focus().setTextAlign("right").run(), className: `richer-editor-button ${editor.isActive({ textAlign: "right" }) ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": labels.alignRight, title: labels.alignRight }, /* @__PURE__ */ React34.createElement(AlignRight_default, { size: 16 })), !excludeToolbarButtons.includes("alignJustify") && /* @__PURE__ */ React34.createElement("button", { onClick: () => editor.chain().focus().setTextAlign("justify").run(), className: `richer-editor-button ${editor.isActive({ textAlign: "justify" }) ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": labels.alignJustify, title: labels.alignJustify }, /* @__PURE__ */ React34.createElement(AlignJustify_default, { size: 16 })), !excludeToolbarButtons.includes("textColor") && /* @__PURE__ */ React34.createElement("div", { className: "richer-editor-colorpicker-wrapper" }, /* @__PURE__ */ React34.createElement("span", { style: { display: "flex", alignItems: "center" } }, /* @__PURE__ */ React34.createElement(TextColorIcon_default, { size: 16 })), /* @__PURE__ */ React34.createElement(
    "button",
    {
      ref: textColorButtonRef,
      onClick: () => setTextColorPopoverOpen((open) => !open),
      className: `richer-editor-button${editor.getAttributes("textStyle").color ? " richer-editor-buttonActive" : ""}`,
      type: "button",
      "aria-label": labels.textColor,
      title: labels.textColor,
      style: { display: "flex", alignItems: "center", padding: 0, border: "none", background: "none", boxShadow: "none" }
    },
    /* @__PURE__ */ React34.createElement("span", { style: {
      display: "inline-block",
      width: 18,
      height: 18,
      borderRadius: "50%",
      background: editor.getAttributes("textStyle").color || "#000",
      border: "1px solid #ccc"
    } })
  ), /* @__PURE__ */ React34.createElement(
    "input",
    {
      type: "color",
      value: editor.getAttributes("textStyle").color || "#000000",
      onChange: (e) => {
        editor.commands.focus();
        editor.commands.setColor(e.target.value);
      },
      style: { width: 24, height: 24, border: "none", background: "none", cursor: "pointer", padding: 0 },
      className: "richer-editor-colorInput",
      "aria-label": "Custom text color picker"
    }
  ), /* @__PURE__ */ React34.createElement(
    CustomPopover_default,
    {
      open: textColorPopoverOpen,
      onOpenChange: setTextColorPopoverOpen,
      anchorEl: textColorButtonRef.current,
      closeButton: true,
      onEsc: () => setTextColorPopoverOpen(false)
    },
    /* @__PURE__ */ React34.createElement("div", { style: { minWidth: 200, padding: 16 } }, editor.getAttributes("textStyle").color && /* @__PURE__ */ React34.createElement(
      "button",
      {
        className: "richer-editor-secondaryBtn mb-2 w-full",
        onClick: () => {
          editor.commands.focus();
          editor.commands.unsetColor();
          setTextColorPopoverOpen(false);
        },
        style: { marginBottom: 8, width: "100%" }
      },
      labels.removeColor
    ), /* @__PURE__ */ React34.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(8, 1fr)", gap: 8, marginBottom: 12 } }, colorPalette.map((color) => /* @__PURE__ */ React34.createElement(
      "button",
      {
        key: color,
        type: "button",
        "aria-label": `Select text color ${color}`,
        onClick: () => {
          editor.commands.focus();
          editor.commands.setColor(color);
          setTextColorPopoverOpen(false);
        },
        style: {
          background: color,
          width: 22,
          height: 22,
          borderRadius: "50%",
          border: editor.getAttributes("textStyle").color === color ? "2px solid #333" : "1px solid #ccc",
          outline: "none",
          cursor: "pointer",
          boxSizing: "border-box"
        },
        tabIndex: 0
      }
    ))))
  )), !excludeToolbarButtons.includes("bgColor") && /* @__PURE__ */ React34.createElement("div", { className: "richer-editor-colorpicker-wrapper" }, /* @__PURE__ */ React34.createElement("span", { style: { display: "flex", alignItems: "center" } }, /* @__PURE__ */ React34.createElement(PaintBucket_default, { size: 16 })), /* @__PURE__ */ React34.createElement(
    "button",
    {
      ref: bgColorButtonRef,
      onClick: () => setBgColorPopoverOpen((open) => !open),
      className: `richer-editor-button${editor.getAttributes("highlight").color ? " richer-editor-buttonActive" : ""}`,
      type: "button",
      "aria-label": labels.bgColor,
      title: labels.bgColor,
      style: { display: "flex", alignItems: "center", padding: 0, border: "none", background: "none", boxShadow: "none" }
    },
    /* @__PURE__ */ React34.createElement("span", { style: {
      display: "inline-block",
      width: 18,
      height: 18,
      borderRadius: "50%",
      background: editor.getAttributes("highlight").color || "#ffff00",
      border: "1px solid #ccc"
    } })
  ), /* @__PURE__ */ React34.createElement(
    "input",
    {
      type: "color",
      value: editor.getAttributes("highlight").color || "#ffff00",
      onChange: (e) => {
        editor.commands.focus();
        editor.commands.setHighlight({ color: e.target.value });
      },
      style: { width: 24, height: 24, border: "none", background: "none", cursor: "pointer", padding: 0 },
      className: "richer-editor-colorInput",
      "aria-label": "Custom background color picker"
    }
  ), /* @__PURE__ */ React34.createElement(
    CustomPopover_default,
    {
      open: bgColorPopoverOpen,
      onOpenChange: setBgColorPopoverOpen,
      anchorEl: bgColorButtonRef.current,
      closeButton: true,
      onEsc: () => setBgColorPopoverOpen(false)
    },
    /* @__PURE__ */ React34.createElement("div", { style: { minWidth: 200, padding: 16 } }, editor.getAttributes("highlight").color && /* @__PURE__ */ React34.createElement(
      "button",
      {
        className: "richer-editor-secondaryBtn mb-2 w-full",
        onClick: () => {
          editor.commands.focus();
          editor.commands.setHighlight({ color: null });
          editor.commands.unsetHighlight();
          setBgColorPopoverOpen(false);
        },
        style: { marginBottom: 8, width: "100%" }
      },
      labels.removeColor
    ), /* @__PURE__ */ React34.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(8, 1fr)", gap: 8, marginBottom: 12 } }, colorPalette.map((color) => /* @__PURE__ */ React34.createElement(
      "button",
      {
        key: color,
        type: "button",
        "aria-label": `Select background color ${color}`,
        onClick: () => {
          editor.commands.focus();
          editor.commands.setHighlight({ color });
          setBgColorPopoverOpen(false);
        },
        style: {
          background: color,
          width: 22,
          height: 22,
          borderRadius: "50%",
          border: editor.getAttributes("highlight").color === color ? "2px solid #333" : "1px solid #ccc",
          outline: "none",
          cursor: "pointer",
          boxSizing: "border-box"
        },
        tabIndex: 0
      }
    ))))
  )), !excludeToolbarButtons.includes("subscript") && /* @__PURE__ */ React34.createElement(
    "button",
    {
      onClick: () => editor.chain().focus().toggleSubscript().run(),
      className: `richer-editor-button ${editor.isActive("subscript") ? "richer-editor-buttonActive" : ""}`,
      type: "button",
      title: labels.subscript,
      "aria-label": labels.subscript
    },
    /* @__PURE__ */ React34.createElement(SubscriptIcon_default, { size: 16 })
  ), !excludeToolbarButtons.includes("superscript") && /* @__PURE__ */ React34.createElement(
    "button",
    {
      onClick: () => editor.chain().focus().toggleSuperscript().run(),
      className: `richer-editor-button ${editor.isActive("superscript") ? "richer-editor-buttonActive" : ""}`,
      type: "button",
      title: labels.superscript,
      "aria-label": labels.superscript
    },
    /* @__PURE__ */ React34.createElement(SuperscriptIcon_default, { size: 16 })
  ), customToolbarButtons && (typeof customToolbarButtons === "function" ? customToolbarButtons(editor) : customToolbarButtons), !excludeToolbarButtons.includes("undo") && /* @__PURE__ */ React34.createElement(React34.Fragment, null, /* @__PURE__ */ React34.createElement("div", { className: "richer-editor-toolbar-divider" }), /* @__PURE__ */ React34.createElement("button", { onClick: () => editor.chain().focus().undo().run(), className: "richer-editor-button", type: "button", "aria-label": labels.undo, title: labels.undo }, /* @__PURE__ */ React34.createElement(UndoIcon_default, { size: 16 }))), !excludeToolbarButtons.includes("redo") && /* @__PURE__ */ React34.createElement("button", { onClick: () => editor.chain().focus().redo().run(), className: "richer-editor-button", type: "button", "aria-label": labels.redo, title: labels.redo }, /* @__PURE__ */ React34.createElement(RedoIcon_default, { size: 16 }))), !excludeToolbarButtons.includes("dragHandle") && /* @__PURE__ */ React34.createElement(DragHandle, { editor }, /* @__PURE__ */ React34.createElement(DragIcon_default, { size: 18, style: { marginTop: 3 } })));
};
var colorPalette = [
  "#000000",
  "#434343",
  "#666666",
  "#999999",
  "#b7b7b7",
  "#cccccc",
  "#e6e6e6",
  "#ffffff",
  "#ff0000",
  "#ff9900",
  "#ffff00",
  "#00ff00",
  "#00b050",
  "#00b0f0",
  "#0070c0",
  "#002060",
  "#7030a0",
  "#ff00ff",
  "#ffb6c1",
  "#f4cccc",
  "#fce5cd",
  "#fff2cc",
  "#d9ead3",
  "#d0e0e3",
  "#cfe2f3",
  "#c9daf8",
  "#b4a7d6",
  "#d9d2e9",
  "#ead1dc",
  "#f9cb9c",
  "#ffe599",
  "#b6d7a8",
  "#a2c4c9",
  "#a4c2f4",
  "#6fa8dc",
  "#8e7cc3",
  "#b4a7d6",
  "#d5a6bd",
  "#e06666",
  "#f6b26b"
];
var RicherEditor = forwardRef(function RicherEditor2({
  content = {},
  onChange,
  imageUploadUrl,
  minHeight,
  maxHeight,
  editorProps = {},
  className = "",
  excludeToolbarButtons = [],
  i18n = {},
  fontSizeOptions,
  fontFamilyOptions,
  extensions = [],
  // default to empty array
  customToolbarButtons
}, ref) {
  var _a;
  const initialContent = getSafeContent(content);
  const defaultExtensions = [
    StarterKit,
    Link.configure({ openOnClick: true }),
    CustomBulletList,
    CustomOrderedList,
    TextAlign.configure({ types: ["heading", "paragraph"] }),
    Image,
    TaskList2,
    TaskItem2,
    Superscript,
    Subscript,
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
    LineHeight,
    FontFamily,
    FontSize,
    Highlight.configure({
      multicolor: true
    })
  ];
  const editor = useEditor({
    extensions: [
      ...defaultExtensions,
      ...extensions
      // Merge user-provided extensions
    ],
    content: initialContent,
    editorProps: {
      ...editorProps,
      attributes: {
        class: `richer-editor-textarea richer-editor-dragactive ${className || ""}`,
        style: `${minHeight ? `min-height:${minHeight};` : ""}${((_a = editorProps == null ? void 0 : editorProps.attributes) == null ? void 0 : _a.style) || ""}`,
        spellCheck: "true",
        ...editorProps == null ? void 0 : editorProps.attributes
      }
    },
    immediatelyRender: false
  });
  React34.useEffect(() => {
    if (editor && content && editor.isEmpty) {
      const safeContent = getSafeContent(content);
      const currentContent = editor.getJSON();
      if (JSON.stringify(currentContent) !== JSON.stringify(safeContent)) {
        editor.commands.setContent(safeContent);
      }
    }
  }, [content, editor]);
  const save = useCallback(() => {
    if (editor && onChange) {
      onChange({
        html: editor.getHTML(),
        json: editor.getJSON()
      });
    }
  }, [editor, onChange]);
  const handleBlur = useCallback(() => {
    save();
  }, [save]);
  useImperativeHandle(ref, () => ({ save, editor }), [save, editor]);
  return /* @__PURE__ */ React34.createElement("div", { className: `richer-editor-roundedMdBorder` }, /* @__PURE__ */ React34.createElement(MenuBar, { editor, imageUploadUrl, excludeToolbarButtons, i18n, fontSizeOptions, fontFamilyOptions, customToolbarButtons }), /* @__PURE__ */ React34.createElement("div", { className: "richer-editor-overflowAuto", style: { maxHeight } }, /* @__PURE__ */ React34.createElement(EditorContent, { editor, onBlur: handleBlur })));
});
var RicherEditor_default = RicherEditor;

// src/components/SmallRicherEditor.tsx
import React36, { useCallback as useCallback2, useImperativeHandle as useImperativeHandle2, forwardRef as forwardRef2, useState as useState4 } from "react";
import { useEditor as useEditor2, EditorContent as EditorContent2 } from "@tiptap/react";
import StarterKit2 from "@tiptap/starter-kit";
import Link2 from "@tiptap/extension-link";
import Highlight2 from "@tiptap/extension-highlight";
import Youtube2 from "@tiptap/extension-youtube";
import TextAlign2 from "@tiptap/extension-text-align";
import { TextStyle as TextStyle2 } from "@tiptap/extension-text-style";
import FontSize2 from "@tiptap/extension-font-size";
import Image2 from "@tiptap/extension-image";
import "./RicherEditor-F2PMNB34.css";

// src/icons/Heading.tsx
import React35 from "react";
var Heading = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ React35.createElement(
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
  /* @__PURE__ */ React35.createElement("path", { d: "M6 12h12" }),
  /* @__PURE__ */ React35.createElement("path", { d: "M6 20V4" }),
  /* @__PURE__ */ React35.createElement("path", { d: "M18 20V4" })
);
var Heading_default = Heading;

// src/components/SmallRicherEditor.tsx
function isSafeUrl2(url) {
  try {
    const parsed = new URL(url, window.location.origin);
    return ["http:", "https:"].includes(parsed.protocol) || parsed.protocol === "data:" && url.startsWith("data:image/");
  } catch {
    return false;
  }
}
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
  { value: "left", label: /* @__PURE__ */ React36.createElement(AlignLeft_default, { size: 18 }), name: "Left" },
  { value: "center", label: /* @__PURE__ */ React36.createElement(AlignCenter_default, { size: 18 }), name: "Center" },
  { value: "right", label: /* @__PURE__ */ React36.createElement(AlignRight_default, { size: 18 }), name: "Right" },
  { value: "justify", label: /* @__PURE__ */ React36.createElement(AlignJustify_default, { size: 18 }), name: "Justify" }
];
var headingOptions2 = [
  { level: 1, label: /* @__PURE__ */ React36.createElement(Heading1_default, { size: 18 }) },
  { level: 2, label: /* @__PURE__ */ React36.createElement(Heading2_default, { size: 18 }) },
  { level: 3, label: /* @__PURE__ */ React36.createElement(Heading3_default, { size: 18 }) },
  { level: 4, label: /* @__PURE__ */ React36.createElement(Heading4_default, { size: 18 }) },
  { level: 5, label: /* @__PURE__ */ React36.createElement(Heading5_default, { size: 18 }) },
  { level: 6, label: /* @__PURE__ */ React36.createElement(Heading6_default, { size: 18 }) }
];
var defaultI18n2 = {
  bold: "Bold",
  italic: "Italic",
  underline: "Underline",
  strike: "Strikethrough",
  highlight: "Highlight",
  code: "Code Block",
  bulletList: "Bullet List",
  orderedList: "Ordered List",
  blockquote: "Blockquote",
  hr: "Horizontal Rule",
  link: "Insert/Edit Link",
  image: "Insert Image",
  video: "Insert YouTube Video",
  align: "Align",
  insert: "Insert",
  remove: "Remove",
  add: "Add",
  cancel: "Cancel",
  fontSize: "Font Size",
  heading: "Heading",
  paragraph: "Paragraph",
  h1: "Heading 1",
  h2: "Heading 2",
  h3: "Heading 3",
  h4: "Heading 4",
  h5: "Heading 5",
  h6: "Heading 6",
  url: "URL",
  upload: "Upload",
  pasteImageUrl: "Paste image URL here...",
  pasteLinkUrl: "Paste link URL here...",
  pasteVideoUrl: "Paste YouTube video URL here...",
  width: "Width",
  height: "Height",
  ulStyle: "UL Style",
  olStyle: "OL Style",
  fontFamily: "Font Family",
  removeColor: "Remove Color",
  uploading: "Uploading...",
  uploadFailed: "Upload failed",
  newTab: "New Tab (_blank)",
  sameTab: "Same Tab (_self)",
  parentFrame: "Parent Frame (_parent)",
  topFrame: "Top Frame (_top)"
};
var MenuBar2 = ({ editor, imageUploadUrl, excludeToolbarButtons = [], i18n = {}, fontSizeOptions, fontFamilyOptions, customToolbarButtons }) => {
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
  const [linkTarget, setLinkTarget] = useState4("_blank");
  const linkButtonRef = React36.useRef(null);
  const imageButtonRef = React36.useRef(null);
  const videoButtonRef = React36.useRef(null);
  const labels = { ...defaultI18n2, ...i18n };
  const handleImageUrlInsert = useCallback2(() => {
    if (imageUrl && isSafeUrl2(imageUrl)) {
      const attrs = { src: imageUrl };
      if (imageWidth) attrs.width = imageWidth;
      if (imageHeight) attrs.height = imageHeight;
      editor.chain().focus().setImage(attrs).run();
      setImagePopoverOpen(false);
      setImageUrl("");
      setImageWidth("");
      setImageHeight("");
    } else if (imageUrl) {
      window.alert("Invalid or unsafe image URL.");
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
    if (videoUrl && isSafeUrl2(videoUrl)) {
      const attrs = { src: videoUrl };
      if (videoWidth) attrs.width = videoWidth;
      if (videoHeight) attrs.height = videoHeight;
      editor.chain().focus().setYoutubeVideo(attrs).run();
      setVideoPopoverOpen(false);
      setVideoUrl("");
      setVideoWidth("");
      setVideoHeight("");
    } else if (videoUrl) {
      window.alert("Invalid or unsafe video URL.");
    }
  }, [editor, videoUrl, videoWidth, videoHeight]);
  const handleLinkInsert = useCallback2(() => {
    if (linkUrl && isSafeUrl2(linkUrl)) {
      editor.chain().focus().setLink({ href: linkUrl, target: linkTarget }).run();
      setLinkPopoverOpen(false);
      setLinkUrl("");
      setLinkTarget("_blank");
    } else if (linkUrl) {
      window.alert("Invalid or unsafe link URL.");
    }
  }, [editor, linkUrl, linkTarget]);
  const handleLinkUnset = useCallback2(() => {
    editor.chain().focus().unsetLink().run();
    setLinkPopoverOpen(false);
    setLinkUrl("");
  }, [editor]);
  if (!editor) return null;
  return /* @__PURE__ */ React36.createElement(React36.Fragment, null, /* @__PURE__ */ React36.createElement("div", { className: "richer-editor-toolbar" }, !excludeToolbarButtons.includes("heading") && /* @__PURE__ */ React36.createElement(React36.Fragment, null, /* @__PURE__ */ React36.createElement(
    CustomSelect_default,
    {
      value: (() => {
        const activeHeading = headingOptions2.find((opt) => editor.isActive("heading", { level: opt.level }));
        return activeHeading ? activeHeading.level.toString() : "";
      })(),
      options: [
        { value: "paragraph", label: "Paragraph" },
        ...headingOptions2.map((opt) => ({ value: opt.level.toString(), label: `H${opt.level}` }))
      ],
      onChange: (val) => {
        if (val === "paragraph") {
          editor.chain().focus().setParagraph().run();
        } else {
          editor.chain().focus().toggleHeading({ level: Number(val) }).run();
        }
      },
      className: "richer-editor-select",
      placeholder: /* @__PURE__ */ React36.createElement(Heading_default, { size: 16 }),
      "aria-label": "Heading Level"
    }
  ), /* @__PURE__ */ React36.createElement("div", { className: "richer-editor-toolbar-divider" })), !excludeToolbarButtons.includes("fontSize") && /* @__PURE__ */ React36.createElement(
    CustomSelect_default,
    {
      value: editor.getAttributes("fontSize").fontSize || "",
      options: (fontSizeOptions || fontSizes2).map((f) => ({ value: f.value, label: f.name })),
      onChange: (val) => editor.chain().focus().setFontSize(val).run(),
      className: "richer-editor-select",
      placeholder: labels.fontSize,
      "aria-label": labels.fontSize || "Font Size"
    }
  ), !excludeToolbarButtons.includes("bold") && /* @__PURE__ */ React36.createElement("button", { onClick: () => editor.chain().focus().toggleBold().run(), className: `richer-editor-button${editor.isActive("bold") ? " richer-editor-buttonActive" : ""}`, type: "button", "aria-label": labels.bold, title: labels.bold }, /* @__PURE__ */ React36.createElement(BoldIcon_default, { size: 16 })), !excludeToolbarButtons.includes("italic") && /* @__PURE__ */ React36.createElement("button", { onClick: () => editor.chain().focus().toggleItalic().run(), className: `richer-editor-button ${editor.isActive("italic") ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": labels.italic, title: labels.italic }, /* @__PURE__ */ React36.createElement(ItalicIcon_default, { size: 16 })), !excludeToolbarButtons.includes("underline") && /* @__PURE__ */ React36.createElement("button", { onClick: () => editor.chain().focus().toggleUnderline().run(), className: `richer-editor-button${editor.isActive("underline") ? " richer-editor-buttonActive" : ""}`, type: "button", "aria-label": labels.underline, title: labels.underline }, /* @__PURE__ */ React36.createElement(UnderlineIcon_default, { size: 16 })), !excludeToolbarButtons.includes("strike") && /* @__PURE__ */ React36.createElement("button", { onClick: () => editor.chain().focus().toggleStrike().run(), className: `richer-editor-button ${editor.isActive("strike") ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": labels.strike, title: labels.strike }, /* @__PURE__ */ React36.createElement(StrikeIcon_default, { size: 16 })), !excludeToolbarButtons.includes("highlight") && /* @__PURE__ */ React36.createElement("button", { onClick: () => editor.chain().focus().toggleHighlight({ color: "#fff59d" }).run(), className: `richer-editor-button${editor.isActive("highlight") ? " richer-editor-buttonActive" : ""}`, type: "button", "aria-label": labels.highlight, title: labels.highlight }, /* @__PURE__ */ React36.createElement(Highlighter_default, { size: 16 })), !excludeToolbarButtons.includes("code") && /* @__PURE__ */ React36.createElement(React36.Fragment, null, /* @__PURE__ */ React36.createElement("button", { onClick: () => editor.chain().focus().toggleCodeBlock().run(), className: `richer-editor-button${editor.isActive("codeBlock") ? " richer-editor-buttonActive" : ""}`, type: "button", "aria-label": labels.code, title: labels.code }, /* @__PURE__ */ React36.createElement(CodeIcon_default, { size: 16 })), /* @__PURE__ */ React36.createElement("div", { className: "richer-editor-toolbar-divider" })), !excludeToolbarButtons.includes("bulletList") && /* @__PURE__ */ React36.createElement("button", { onClick: () => editor.chain().focus().toggleBulletList().run(), className: `richer-editor-button${editor.isActive("bulletList") ? " richer-editor-buttonActive" : ""}`, type: "button", "aria-label": labels.bulletList, title: labels.bulletList }, /* @__PURE__ */ React36.createElement(BulletListIcon_default, { size: 16 })), !excludeToolbarButtons.includes("orderedList") && /* @__PURE__ */ React36.createElement(React36.Fragment, null, /* @__PURE__ */ React36.createElement("button", { onClick: () => editor.chain().focus().toggleOrderedList().run(), className: `richer-editor-button${editor.isActive("orderedList") ? " richer-editor-buttonActive" : ""}`, type: "button", "aria-label": labels.orderedList, title: labels.orderedList }, /* @__PURE__ */ React36.createElement(OrderedListIcon_default, { size: 16 })), /* @__PURE__ */ React36.createElement("div", { className: "richer-editor-toolbar-divider" })), !excludeToolbarButtons.includes("blockquote") && /* @__PURE__ */ React36.createElement("button", { onClick: () => editor.chain().focus().toggleBlockquote().run(), className: `richer-editor-button ${editor.isActive("blockquote") ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": labels.blockquote, title: labels.blockquote }, /* @__PURE__ */ React36.createElement(BlockquoteIcon_default, { size: 16 })), !excludeToolbarButtons.includes("hr") && /* @__PURE__ */ React36.createElement(React36.Fragment, null, /* @__PURE__ */ React36.createElement("button", { onClick: () => editor.chain().focus().setHorizontalRule().run(), className: "richer-editor-button", type: "button", "aria-label": labels.hr, title: labels.hr }, "HR"), /* @__PURE__ */ React36.createElement("div", { className: "richer-editor-toolbar-divider" })), !excludeToolbarButtons.includes("link") && /* @__PURE__ */ React36.createElement(React36.Fragment, null, /* @__PURE__ */ React36.createElement(
    "button",
    {
      ref: linkButtonRef,
      onClick: () => {
        setLinkPopoverOpen((open) => !open);
        setLinkUrl(editor.getAttributes("link").href || "");
        setLinkTarget(editor.getAttributes("link").target || "_blank");
      },
      className: `richer-editor-button${editor.isActive("link") ? " richer-editor-buttonActive" : ""}`,
      type: "button",
      "aria-label": labels.link,
      title: labels.link
    },
    /* @__PURE__ */ React36.createElement(LinkIcon_default, { size: 16 })
  ), /* @__PURE__ */ React36.createElement(
    CustomPopover_default,
    {
      open: linkPopoverOpen,
      onOpenChange: setLinkPopoverOpen,
      anchorEl: linkButtonRef.current,
      closeButton: true,
      onEsc: () => setLinkPopoverOpen(false)
    },
    /* @__PURE__ */ React36.createElement("div", { className: "richer-editor-mb2 richer-editor-fontSemibold richer-editor-textBase" }, labels.link),
    /* @__PURE__ */ React36.createElement(
      "input",
      {
        type: "text",
        placeholder: labels.pasteLinkUrl,
        value: linkUrl,
        onChange: (e) => setLinkUrl(e.target.value),
        className: "richer-editor-input",
        autoFocus: true
      }
    ),
    /* @__PURE__ */ React36.createElement(
      "select",
      {
        name: "target",
        value: linkTarget,
        onChange: (e) => setLinkTarget(e.target.value),
        className: "richer-editor-input",
        style: { marginBottom: 8 }
      },
      /* @__PURE__ */ React36.createElement("option", { value: "_blank" }, labels.newTab),
      /* @__PURE__ */ React36.createElement("option", { value: "_self" }, labels.sameTab),
      /* @__PURE__ */ React36.createElement("option", { value: "_parent" }, labels.parentFrame),
      /* @__PURE__ */ React36.createElement("option", { value: "_top" }, labels.topFrame)
    ),
    /* @__PURE__ */ React36.createElement("div", { className: "richer-editor-flexRow" }, /* @__PURE__ */ React36.createElement(
      "button",
      {
        className: "richer-editor-primaryBtn",
        onClick: handleLinkInsert,
        disabled: !linkUrl
      },
      labels.insert
    ), /* @__PURE__ */ React36.createElement(
      "button",
      {
        className: "richer-editor-secondaryBtn",
        onClick: handleLinkUnset,
        disabled: !editor.isActive("link")
      },
      labels.remove
    ))
  )), !excludeToolbarButtons.includes("image") && /* @__PURE__ */ React36.createElement(React36.Fragment, null, /* @__PURE__ */ React36.createElement(
    "button",
    {
      ref: imageButtonRef,
      onClick: () => {
        setImagePopoverOpen((open) => !open);
        if (!imageUploadUrl) setImageTab("url");
      },
      className: "richer-editor-button",
      type: "button",
      "aria-label": labels.image,
      title: labels.image
    },
    /* @__PURE__ */ React36.createElement(ImageIcon_default, { size: 16 })
  ), /* @__PURE__ */ React36.createElement(
    CustomPopover_default,
    {
      open: imagePopoverOpen,
      onOpenChange: setImagePopoverOpen,
      anchorEl: imageButtonRef.current,
      closeButton: true,
      onEsc: () => setImagePopoverOpen(false)
    },
    /* @__PURE__ */ React36.createElement("div", { className: "richer-editor-mb2 richer-editor-fontSemibold richer-editor-textBase flex gap-4 border-b pb-2" }, /* @__PURE__ */ React36.createElement("button", { className: `richer-editor-button${imageTab === "url" ? " richer-editor-buttonActive" : ""}`, onClick: () => setImageTab("url") }, labels.url), imageUploadUrl && /* @__PURE__ */ React36.createElement("button", { className: `richer-editor-button${imageTab === "upload" ? " richer-editor-buttonActive" : ""}`, onClick: () => setImageTab("upload") }, labels.upload)),
    imageTab === "url" && /* @__PURE__ */ React36.createElement(React36.Fragment, null, /* @__PURE__ */ React36.createElement(
      "input",
      {
        type: "text",
        placeholder: labels.pasteImageUrl,
        value: imageUrl,
        onChange: (e) => setImageUrl(e.target.value),
        className: "richer-editor-input",
        autoFocus: true
      }
    ), /* @__PURE__ */ React36.createElement("div", { className: "richer-editor-flexRowMb2" }, /* @__PURE__ */ React36.createElement(
      "input",
      {
        type: "text",
        placeholder: labels.width,
        value: imageWidth,
        onChange: (e) => setImageWidth(e.target.value),
        className: "richer-editor-input"
      }
    ), /* @__PURE__ */ React36.createElement(
      "input",
      {
        type: "text",
        placeholder: labels.height,
        value: imageHeight,
        onChange: (e) => setImageHeight(e.target.value),
        className: "richer-editor-input"
      }
    )), /* @__PURE__ */ React36.createElement("div", { className: "richer-editor-textXs" }, "Leave blank for default size. Use px (e.g. 400) or % (e.g. 50%)."), /* @__PURE__ */ React36.createElement(
      "button",
      {
        className: "richer-editor-primaryBtn",
        onClick: handleImageUrlInsert,
        disabled: !imageUrl
      },
      labels.image
    )),
    imageTab === "upload" && imageUploadUrl && /* @__PURE__ */ React36.createElement(React36.Fragment, null, !uploadedImageUrl && /* @__PURE__ */ React36.createElement(React36.Fragment, null, /* @__PURE__ */ React36.createElement(
      "input",
      {
        type: "file",
        accept: "image/*",
        onChange: handleUploadInputChange,
        className: "richer-editor-mb2",
        disabled: uploading
      }
    ), uploading && /* @__PURE__ */ React36.createElement("div", { className: "richer-editor-textSm richer-editor-textBlue600 richer-editor-mb2" }, labels.uploading), uploadError && /* @__PURE__ */ React36.createElement("div", { className: "richer-editor-textSm richer-editor-textRed600 richer-editor-mb2" }, labels.uploadFailed)), uploadedImageUrl && /* @__PURE__ */ React36.createElement(React36.Fragment, null, /* @__PURE__ */ React36.createElement("div", { className: "richer-editor-mb2 flex flex-col items-center" }, /* @__PURE__ */ React36.createElement("img", { src: uploadedImageUrl, alt: "Preview", className: "richer-editor-maxH40 richer-editor-maxWFull rounded border mb-2" })), /* @__PURE__ */ React36.createElement("div", { className: "richer-editor-flexRowMb2" }, /* @__PURE__ */ React36.createElement(
      "input",
      {
        type: "text",
        placeholder: labels.width,
        value: imageWidth,
        onChange: (e) => setImageWidth(e.target.value),
        className: "richer-editor-input"
      }
    ), /* @__PURE__ */ React36.createElement(
      "input",
      {
        type: "text",
        placeholder: labels.height,
        value: imageHeight,
        onChange: (e) => setImageHeight(e.target.value),
        className: "richer-editor-input"
      }
    )), /* @__PURE__ */ React36.createElement("div", { className: "richer-editor-flexRow" }, /* @__PURE__ */ React36.createElement(
      "button",
      {
        className: "richer-editor-primaryBtn",
        onClick: handleUploadedImageInsert
      },
      labels.add
    ), /* @__PURE__ */ React36.createElement(
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
      labels.cancel
    ))))
  )), !excludeToolbarButtons.includes("video") && /* @__PURE__ */ React36.createElement(React36.Fragment, null, /* @__PURE__ */ React36.createElement(
    "button",
    {
      ref: videoButtonRef,
      onClick: () => setVideoPopoverOpen((open) => !open),
      className: "richer-editor-button",
      type: "button",
      "aria-label": labels.video,
      title: labels.video
    },
    /* @__PURE__ */ React36.createElement(VideoIcon_default, { size: 16 })
  ), /* @__PURE__ */ React36.createElement(
    CustomPopover_default,
    {
      open: videoPopoverOpen,
      onOpenChange: setVideoPopoverOpen,
      anchorEl: videoButtonRef.current,
      closeButton: true,
      onEsc: () => setVideoPopoverOpen(false)
    },
    /* @__PURE__ */ React36.createElement("div", { className: "richer-editor-mb2 richer-editor-fontSemibold richer-editor-textBase" }, labels.video),
    /* @__PURE__ */ React36.createElement(
      "input",
      {
        type: "text",
        placeholder: labels.pasteVideoUrl,
        value: videoUrl,
        onChange: (e) => setVideoUrl(e.target.value),
        className: "richer-editor-input",
        autoFocus: true
      }
    ),
    /* @__PURE__ */ React36.createElement("div", { className: "richer-editor-flexRowMb2" }, /* @__PURE__ */ React36.createElement(
      "input",
      {
        type: "text",
        placeholder: labels.width,
        value: videoWidth,
        onChange: (e) => setVideoWidth(e.target.value),
        className: "richer-editor-input"
      }
    ), /* @__PURE__ */ React36.createElement(
      "input",
      {
        type: "text",
        placeholder: labels.height,
        value: videoHeight,
        onChange: (e) => setVideoHeight(e.target.value),
        className: "richer-editor-input"
      }
    )),
    /* @__PURE__ */ React36.createElement("div", { className: "richer-editor-textXs" }, "Leave blank for default size. Use px (e.g. 400) or % (e.g. 50%)."),
    /* @__PURE__ */ React36.createElement(
      "button",
      {
        className: "richer-editor-primaryBtn",
        onClick: handleVideoUrlInsert,
        disabled: !videoUrl
      },
      labels.video
    )
  )), !excludeToolbarButtons.includes("align") && /* @__PURE__ */ React36.createElement(
    CustomSelect_default,
    {
      value: editor.getAttributes("textAlign") || "left",
      options: alignmentOptions.map((opt) => ({ value: opt.value, label: /* @__PURE__ */ React36.createElement(React36.Fragment, null, opt.label, " ", opt.name) })),
      onChange: (val) => editor.chain().focus().setTextAlign(val).run(),
      className: "richer-editor-select",
      placeholder: /* @__PURE__ */ React36.createElement(AlignJustify_default, { size: 16 })
    }
  ), customToolbarButtons && (typeof customToolbarButtons === "function" ? customToolbarButtons(editor) : customToolbarButtons)));
};
var SmallRicherEditor = forwardRef2(function SmallRicherEditor2({
  content = {},
  onChange,
  imageUploadUrl,
  minHeight,
  maxHeight,
  editorProps = {},
  className = "",
  excludeToolbarButtons = [],
  i18n = {},
  fontSizeOptions,
  fontFamilyOptions,
  extensions = [],
  // default to empty array
  customToolbarButtons
}, ref) {
  var _a;
  const initialContent = getSafeContent(content);
  const defaultExtensions = [
    StarterKit2,
    Link2.configure({ openOnClick: true }),
    Highlight2.configure({ multicolor: false, HTMLAttributes: { style: "background-color: #fff59d" } }),
    TextAlign2.configure({ types: ["paragraph"] }),
    Image2,
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
    FontSize2
  ];
  const editor = useEditor2({
    extensions: [
      ...defaultExtensions,
      ...extensions
    ],
    content: initialContent,
    editorProps: {
      ...editorProps,
      attributes: {
        class: `richer-editor-textarea ${className || ""}`,
        style: `${minHeight ? `min-height:${minHeight};` : ""}${((_a = editorProps == null ? void 0 : editorProps.attributes) == null ? void 0 : _a.style) || ""}`,
        spellCheck: "true",
        ...editorProps == null ? void 0 : editorProps.attributes
      }
    },
    immediatelyRender: false
  });
  React36.useEffect(() => {
    if (editor && content && editor.isEmpty) {
      const safeContent = getSafeContent(content);
      const currentContent = editor.getJSON();
      if (JSON.stringify(currentContent) !== JSON.stringify(safeContent)) {
        editor.commands.setContent(safeContent);
      }
    }
  }, [content, editor]);
  const save = useCallback2(() => {
    if (editor && onChange) {
      onChange({
        html: editor.getHTML(),
        json: editor.getJSON()
      });
    }
  }, [editor, onChange]);
  const handleBlur = useCallback2(() => {
    save();
  }, [save]);
  useImperativeHandle2(ref, () => ({ save, editor }), [save, editor]);
  return /* @__PURE__ */ React36.createElement("div", { className: `richer-editor-roundedMdBorder` }, /* @__PURE__ */ React36.createElement(MenuBar2, { editor, imageUploadUrl, excludeToolbarButtons, i18n, fontSizeOptions, fontFamilyOptions, customToolbarButtons }), /* @__PURE__ */ React36.createElement("div", { className: "richer-editor-overflowAuto", style: { maxHeight } }, /* @__PURE__ */ React36.createElement(EditorContent2, { editor, onBlur: handleBlur })));
});
var SmallRicherEditor_default = SmallRicherEditor;

// src/components/RicherContent.tsx
import React37 from "react";
var RicherContent = ({ content, className = "" }) => {
  return /* @__PURE__ */ React37.createElement("div", { className }, /* @__PURE__ */ React37.createElement(
    "div",
    {
      className: "max-w-none",
      dangerouslySetInnerHTML: { __html: content }
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