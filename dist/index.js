"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/components/index.ts
var index_exports = {};
__export(index_exports, {
  CustomBulletList: () => CustomBulletList,
  CustomOrderedList: () => CustomOrderedList,
  RicherContent: () => RicherContent_default,
  RicherEditor: () => RicherEditor_default,
  SmallRicherEditor: () => SmallRicherEditor_default
});
module.exports = __toCommonJS(index_exports);

// src/components/RicherEditor.tsx
var import_react33 = __toESM(require("react"));
var import_react34 = require("@tiptap/react");
var import_starter_kit = __toESM(require("@tiptap/starter-kit"));
var import_extension_link = __toESM(require("@tiptap/extension-link"));
var import_extension_image = __toESM(require("@tiptap/extension-image"));
var import_extension_heading = __toESM(require("@tiptap/extension-heading"));
var import_extension_list_item = __toESM(require("@tiptap/extension-list-item"));
var import_extension_bold = __toESM(require("@tiptap/extension-bold"));
var import_extension_italic = __toESM(require("@tiptap/extension-italic"));
var import_extension_underline = __toESM(require("@tiptap/extension-underline"));
var import_extension_strike = __toESM(require("@tiptap/extension-strike"));
var import_extension_blockquote = __toESM(require("@tiptap/extension-blockquote"));
var import_extension_code_block = __toESM(require("@tiptap/extension-code-block"));
var import_extension_horizontal_rule = __toESM(require("@tiptap/extension-horizontal-rule"));
var import_extension_text_align = __toESM(require("@tiptap/extension-text-align"));
var import_extension_table = require("@tiptap/extension-table");
var import_extension_table_row = __toESM(require("@tiptap/extension-table-row"));
var import_extension_table_cell = __toESM(require("@tiptap/extension-table-cell"));
var import_extension_table_header = __toESM(require("@tiptap/extension-table-header"));
var import_extension_dropcursor = __toESM(require("@tiptap/extension-dropcursor"));
var import_extension_gapcursor = __toESM(require("@tiptap/extension-gapcursor"));
var import_extension_task_list = __toESM(require("@tiptap/extension-task-list"));
var import_extension_task_item = __toESM(require("@tiptap/extension-task-item"));
var import_extension_superscript = __toESM(require("@tiptap/extension-superscript"));
var import_extension_subscript = __toESM(require("@tiptap/extension-subscript"));
var import_extension_typography = __toESM(require("@tiptap/extension-typography"));
var import_extension_youtube = __toESM(require("@tiptap/extension-youtube"));
var import_extension_highlight = __toESM(require("@tiptap/extension-highlight"));
var import_extension_placeholder = __toESM(require("@tiptap/extension-placeholder"));

// src/icons/BoldIcon.tsx
var import_react = __toESM(require("react"));
var BoldIcon = ({ size = 18, color = "currentColor", className }) => /* @__PURE__ */ import_react.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: color, "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", className }, /* @__PURE__ */ import_react.default.createElement("path", { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8" }));
var BoldIcon_default = BoldIcon;

// src/icons/ItalicIcon.tsx
var import_react2 = __toESM(require("react"));
var ItalicIcon = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ import_react2.default.createElement(
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
  /* @__PURE__ */ import_react2.default.createElement("line", { x1: "19", x2: "10", y1: "4", y2: "4" }),
  /* @__PURE__ */ import_react2.default.createElement("line", { x1: "14", x2: "5", y1: "20", y2: "20" }),
  /* @__PURE__ */ import_react2.default.createElement("line", { x1: "15", x2: "9", y1: "4", y2: "20" })
);
var ItalicIcon_default = ItalicIcon;

// src/icons/UnderlineIcon.tsx
var import_react3 = __toESM(require("react"));
var UnderlineIcon = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ import_react3.default.createElement(
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
  /* @__PURE__ */ import_react3.default.createElement("path", { d: "M6 4v6a6 6 0 0 0 12 0V4" }),
  /* @__PURE__ */ import_react3.default.createElement("line", { x1: "4", x2: "20", y1: "20", y2: "20" })
);
var UnderlineIcon_default = UnderlineIcon;

// src/icons/StrikeIcon.tsx
var import_react4 = __toESM(require("react"));
var StrikeIcon = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ import_react4.default.createElement(
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
  /* @__PURE__ */ import_react4.default.createElement("path", { d: "M16 4H9a3 3 0 0 0-2.83 4" }),
  /* @__PURE__ */ import_react4.default.createElement("path", { d: "M14 12a4 4 0 0 1 0 8H8" }),
  /* @__PURE__ */ import_react4.default.createElement("line", { x1: "4", x2: "20", y1: "12", y2: "12" })
);
var StrikeIcon_default = StrikeIcon;

// src/icons/CodeIcon.tsx
var import_react5 = __toESM(require("react"));
var CodeIcon = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ import_react5.default.createElement(
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
  /* @__PURE__ */ import_react5.default.createElement("path", { d: "m18 16 4-4-4-4" }),
  /* @__PURE__ */ import_react5.default.createElement("path", { d: "m6 8-4 4 4 4" }),
  /* @__PURE__ */ import_react5.default.createElement("path", { d: "m14.5 4-5 16" })
);
var CodeIcon_default = CodeIcon;

// src/icons/BulletListIcon.tsx
var import_react6 = __toESM(require("react"));
var BulletListIcon = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ import_react6.default.createElement(
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
  /* @__PURE__ */ import_react6.default.createElement("line", { x1: "8", x2: "21", y1: "6", y2: "6" }),
  /* @__PURE__ */ import_react6.default.createElement("line", { x1: "8", x2: "21", y1: "12", y2: "12" }),
  /* @__PURE__ */ import_react6.default.createElement("line", { x1: "8", x2: "21", y1: "18", y2: "18" }),
  /* @__PURE__ */ import_react6.default.createElement("line", { x1: "3", x2: "3.01", y1: "6", y2: "6" }),
  /* @__PURE__ */ import_react6.default.createElement("line", { x1: "3", x2: "3.01", y1: "12", y2: "12" }),
  /* @__PURE__ */ import_react6.default.createElement("line", { x1: "3", x2: "3.01", y1: "18", y2: "18" })
);
var BulletListIcon_default = BulletListIcon;

// src/icons/OrderedListIcon.tsx
var import_react7 = __toESM(require("react"));
var OrderedListIcon = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ import_react7.default.createElement(
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
  /* @__PURE__ */ import_react7.default.createElement("path", { d: "M10 12h11" }),
  /* @__PURE__ */ import_react7.default.createElement("path", { d: "M10 18h11" }),
  /* @__PURE__ */ import_react7.default.createElement("path", { d: "M10 6h11" }),
  /* @__PURE__ */ import_react7.default.createElement("path", { d: "M4 10h2" }),
  /* @__PURE__ */ import_react7.default.createElement("path", { d: "M4 6h1v4" }),
  /* @__PURE__ */ import_react7.default.createElement("path", { d: "M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" })
);
var OrderedListIcon_default = OrderedListIcon;

// src/icons/TaskListIcon.tsx
var import_react8 = __toESM(require("react"));
var TaskListIcon = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ import_react8.default.createElement(
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
  /* @__PURE__ */ import_react8.default.createElement("rect", { x: "3", y: "5", width: "6", height: "6", rx: "1" }),
  /* @__PURE__ */ import_react8.default.createElement("path", { d: "m3 17 2 2 4-4" }),
  /* @__PURE__ */ import_react8.default.createElement("path", { d: "M13 6h8" }),
  /* @__PURE__ */ import_react8.default.createElement("path", { d: "M13 12h8" }),
  /* @__PURE__ */ import_react8.default.createElement("path", { d: "M13 18h8" })
);
var TaskListIcon_default = TaskListIcon;

// src/icons/BlockquoteIcon.tsx
var import_react9 = __toESM(require("react"));
var BlockquoteIcon = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ import_react9.default.createElement(
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
  /* @__PURE__ */ import_react9.default.createElement("path", { d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" }),
  /* @__PURE__ */ import_react9.default.createElement("path", { d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" })
);
var BlockquoteIcon_default = BlockquoteIcon;

// src/icons/LinkIcon.tsx
var import_react10 = __toESM(require("react"));
var LinkIcon = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ import_react10.default.createElement(
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
  /* @__PURE__ */ import_react10.default.createElement("path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" }),
  /* @__PURE__ */ import_react10.default.createElement("path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" })
);
var LinkIcon_default = LinkIcon;

// src/icons/ImageIcon.tsx
var import_react11 = __toESM(require("react"));
var ImageIcon = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ import_react11.default.createElement(
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
  /* @__PURE__ */ import_react11.default.createElement("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }),
  /* @__PURE__ */ import_react11.default.createElement("circle", { cx: "9", cy: "9", r: "2" }),
  /* @__PURE__ */ import_react11.default.createElement("path", { d: "m21 15-4.35-4.35a2 2 0 0 0-2.83 0L3 21" })
);
var ImageIcon_default = ImageIcon;

// src/icons/TableIcon.tsx
var import_react12 = __toESM(require("react"));
var TableIcon = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ import_react12.default.createElement(
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
  /* @__PURE__ */ import_react12.default.createElement("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }),
  /* @__PURE__ */ import_react12.default.createElement("path", { d: "M3 9h18" }),
  /* @__PURE__ */ import_react12.default.createElement("path", { d: "M3 15h18" }),
  /* @__PURE__ */ import_react12.default.createElement("path", { d: "M9 3v18" }),
  /* @__PURE__ */ import_react12.default.createElement("path", { d: "M15 3v18" })
);
var TableIcon_default = TableIcon;

// src/icons/UndoIcon.tsx
var import_react13 = __toESM(require("react"));
var UndoIcon = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ import_react13.default.createElement(
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
  /* @__PURE__ */ import_react13.default.createElement("path", { d: "M3 7v6h6" }),
  /* @__PURE__ */ import_react13.default.createElement("path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" })
);
var UndoIcon_default = UndoIcon;

// src/icons/RedoIcon.tsx
var import_react14 = __toESM(require("react"));
var RedoIcon = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ import_react14.default.createElement(
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
  /* @__PURE__ */ import_react14.default.createElement("path", { d: "M21 7v6h-6" }),
  /* @__PURE__ */ import_react14.default.createElement("path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" })
);
var RedoIcon_default = RedoIcon;

// src/icons/AlignLeft.tsx
var import_react15 = __toESM(require("react"));
var AlignLeft = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ import_react15.default.createElement(
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
  /* @__PURE__ */ import_react15.default.createElement("line", { x1: "21", x2: "3", y1: "6", y2: "6" }),
  /* @__PURE__ */ import_react15.default.createElement("line", { x1: "15", x2: "3", y1: "12", y2: "12" }),
  /* @__PURE__ */ import_react15.default.createElement("line", { x1: "17", x2: "3", y1: "18", y2: "18" })
);
var AlignLeft_default = AlignLeft;

// src/icons/AlignCenter.tsx
var import_react16 = __toESM(require("react"));
var AlignCenter = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ import_react16.default.createElement(
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
  /* @__PURE__ */ import_react16.default.createElement("line", { x1: "21", x2: "3", y1: "6", y2: "6" }),
  /* @__PURE__ */ import_react16.default.createElement("line", { x1: "17", x2: "7", y1: "12", y2: "12" }),
  /* @__PURE__ */ import_react16.default.createElement("line", { x1: "19", x2: "5", y1: "18", y2: "18" })
);
var AlignCenter_default = AlignCenter;

// src/icons/AlignRight.tsx
var import_react17 = __toESM(require("react"));
var AlignRight = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ import_react17.default.createElement(
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
  /* @__PURE__ */ import_react17.default.createElement("line", { x1: "21", x2: "3", y1: "6", y2: "6" }),
  /* @__PURE__ */ import_react17.default.createElement("line", { x1: "21", x2: "9", y1: "12", y2: "12" }),
  /* @__PURE__ */ import_react17.default.createElement("line", { x1: "21", x2: "7", y1: "18", y2: "18" })
);
var AlignRight_default = AlignRight;

// src/icons/AlignJustify.tsx
var import_react18 = __toESM(require("react"));
var AlignJustify = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ import_react18.default.createElement(
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
  /* @__PURE__ */ import_react18.default.createElement("line", { x1: "21", x2: "3", y1: "6", y2: "6" }),
  /* @__PURE__ */ import_react18.default.createElement("line", { x1: "21", x2: "3", y1: "12", y2: "12" }),
  /* @__PURE__ */ import_react18.default.createElement("line", { x1: "21", x2: "3", y1: "18", y2: "18" })
);
var AlignJustify_default = AlignJustify;

// src/icons/Highlighter.tsx
var import_react19 = __toESM(require("react"));
var Highlighter = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ import_react19.default.createElement(
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
  /* @__PURE__ */ import_react19.default.createElement("path", { d: "m9 11-6 6v3h9l3-3" }),
  /* @__PURE__ */ import_react19.default.createElement("path", { d: "M22 15 11 4l-3 3 11 11 3-3Z" })
);
var Highlighter_default = Highlighter;

// src/icons/Heading1.tsx
var import_react20 = __toESM(require("react"));
var Heading1 = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ import_react20.default.createElement(
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
  /* @__PURE__ */ import_react20.default.createElement("path", { d: "M4 12h8" }),
  /* @__PURE__ */ import_react20.default.createElement("path", { d: "M4 18V6" }),
  /* @__PURE__ */ import_react20.default.createElement("path", { d: "M12 18V6" }),
  /* @__PURE__ */ import_react20.default.createElement("path", { d: "M17 12v-1h-2V9h3" })
);
var Heading1_default = Heading1;

// src/icons/Heading2.tsx
var import_react21 = __toESM(require("react"));
var Heading2 = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ import_react21.default.createElement(
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
  /* @__PURE__ */ import_react21.default.createElement("path", { d: "M4 12h8" }),
  /* @__PURE__ */ import_react21.default.createElement("path", { d: "M4 18V6" }),
  /* @__PURE__ */ import_react21.default.createElement("path", { d: "M12 18V6" }),
  /* @__PURE__ */ import_react21.default.createElement("path", { d: "M17 12a2 2 0 1 1 0 4h-3" }),
  /* @__PURE__ */ import_react21.default.createElement("path", { d: "M19 16v.01" })
);
var Heading2_default = Heading2;

// src/icons/Heading3.tsx
var import_react22 = __toESM(require("react"));
var Heading3 = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ import_react22.default.createElement(
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
  /* @__PURE__ */ import_react22.default.createElement("path", { d: "M4 12h8" }),
  /* @__PURE__ */ import_react22.default.createElement("path", { d: "M4 18V6" }),
  /* @__PURE__ */ import_react22.default.createElement("path", { d: "M12 18V6" }),
  /* @__PURE__ */ import_react22.default.createElement("path", { d: "M17 14a2 2 0 1 0 0-4h-2" }),
  /* @__PURE__ */ import_react22.default.createElement("path", { d: "M15 16a2 2 0 1 0 0 4h2" })
);
var Heading3_default = Heading3;

// src/icons/Heading4.tsx
var import_react23 = __toESM(require("react"));
var Heading4 = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ import_react23.default.createElement(
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
  /* @__PURE__ */ import_react23.default.createElement("path", { d: "M4 12h8" }),
  /* @__PURE__ */ import_react23.default.createElement("path", { d: "M4 18V6" }),
  /* @__PURE__ */ import_react23.default.createElement("path", { d: "M12 18V6" }),
  /* @__PURE__ */ import_react23.default.createElement("path", { d: "M17 18v-8l-2 2" }),
  /* @__PURE__ */ import_react23.default.createElement("path", { d: "M15 14h4" })
);
var Heading4_default = Heading4;

// src/icons/Heading5.tsx
var import_react24 = __toESM(require("react"));
var Heading5 = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ import_react24.default.createElement(
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
  /* @__PURE__ */ import_react24.default.createElement("path", { d: "M4 12h8" }),
  /* @__PURE__ */ import_react24.default.createElement("path", { d: "M4 18V6" }),
  /* @__PURE__ */ import_react24.default.createElement("path", { d: "M12 18V6" }),
  /* @__PURE__ */ import_react24.default.createElement("path", { d: "M17 13.5V12a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2v2h4" })
);
var Heading5_default = Heading5;

// src/icons/Heading6.tsx
var import_react25 = __toESM(require("react"));
var Heading6 = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ import_react25.default.createElement(
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
  /* @__PURE__ */ import_react25.default.createElement("path", { d: "M4 12h8" }),
  /* @__PURE__ */ import_react25.default.createElement("path", { d: "M4 18V6" }),
  /* @__PURE__ */ import_react25.default.createElement("path", { d: "M12 18V6" }),
  /* @__PURE__ */ import_react25.default.createElement("circle", { cx: "19", cy: "16", r: "2" }),
  /* @__PURE__ */ import_react25.default.createElement("path", { d: "M19 14v-2" })
);
var Heading6_default = Heading6;

// src/icons/VideoIcon.tsx
var import_react26 = __toESM(require("react"));
var VideoIcon = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ import_react26.default.createElement(
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
  /* @__PURE__ */ import_react26.default.createElement("path", { d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" }),
  /* @__PURE__ */ import_react26.default.createElement("rect", { x: "2", y: "6", width: "14", height: "12", rx: "2" })
);
var VideoIcon_default = VideoIcon;

// src/icons/SubscriptIcon.tsx
var import_react27 = __toESM(require("react"));
var SubscriptIcon = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ import_react27.default.createElement(
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
  /* @__PURE__ */ import_react27.default.createElement("path", { d: "m4 5 8 8" }),
  /* @__PURE__ */ import_react27.default.createElement("path", { d: "m12 5-8 8" }),
  /* @__PURE__ */ import_react27.default.createElement("path", { d: "M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07" })
);
var SubscriptIcon_default = SubscriptIcon;

// src/icons/SuperscriptIcon.tsx
var import_react28 = __toESM(require("react"));
var SuperscriptIcon = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ import_react28.default.createElement(
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
  /* @__PURE__ */ import_react28.default.createElement("path", { d: "m4 19 8-8" }),
  /* @__PURE__ */ import_react28.default.createElement("path", { d: "m12 19-8-8" }),
  /* @__PURE__ */ import_react28.default.createElement("path", { d: "M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06" })
);
var SuperscriptIcon_default = SuperscriptIcon;

// src/icons/PaintBucket.tsx
var import_react29 = __toESM(require("react"));
var PaintBucket = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ import_react29.default.createElement(
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
  /* @__PURE__ */ import_react29.default.createElement("path", { d: "m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z" }),
  /* @__PURE__ */ import_react29.default.createElement("path", { d: "m5 2 5 5" }),
  /* @__PURE__ */ import_react29.default.createElement("path", { d: "M2 13h15" }),
  /* @__PURE__ */ import_react29.default.createElement("path", { d: "M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z" })
);
var PaintBucket_default = PaintBucket;

// src/icons/TextColorIcon.tsx
var import_react30 = __toESM(require("react"));
var TextColorIcon = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ import_react30.default.createElement(
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
  /* @__PURE__ */ import_react30.default.createElement("path", { d: "M12 4v16" }),
  /* @__PURE__ */ import_react30.default.createElement("path", { d: "M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2" }),
  /* @__PURE__ */ import_react30.default.createElement("path", { d: "M9 20h6" })
);
var TextColorIcon_default = TextColorIcon;

// src/components/RicherEditor.tsx
var import_extension_text_style = require("@tiptap/extension-text-style");
var import_extension_font_family = __toESM(require("@tiptap/extension-font-family"));
var import_extension_font_size = __toESM(require("@tiptap/extension-font-size"));
var import_extension_color = __toESM(require("@tiptap/extension-color"));

// src/components/tiptap-extensions/CustomBulletList.ts
var import_extension_bullet_list = require("@tiptap/extension-bullet-list");
var import_core = require("@tiptap/core");
var CustomBulletList = import_extension_bullet_list.BulletList.extend({
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
    return ["ul", (0, import_core.mergeAttributes)(this.options.HTMLAttributes, HTMLAttributes), 0];
  }
});

// src/components/tiptap-extensions/CustomOrderedList.ts
var import_extension_ordered_list = require("@tiptap/extension-ordered-list");
var import_core2 = require("@tiptap/core");
var CustomOrderedList = import_extension_ordered_list.OrderedList.extend({
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
    return ["ol", (0, import_core2.mergeAttributes)(this.options.HTMLAttributes, HTMLAttributes), 0];
  }
});

// src/components/ui/CustomSelect.tsx
var import_react31 = __toESM(require("react"));
var import_react_dom = __toESM(require("react-dom"));
var import_CustomSelect = require("./CustomSelect-AGHTICJO.css");

// src/lib/utils.ts
var import_clsx = require("clsx");
function cn(...inputs) {
  return (0, import_clsx.clsx)(...inputs);
}

// src/components/ui/CustomSelect.tsx
var CustomSelect = ({ value, options, onChange, className, placeholder, label }) => {
  const [open, setOpen] = (0, import_react31.useState)(false);
  const [highlighted, setHighlighted] = (0, import_react31.useState)(-1);
  const triggerRef = (0, import_react31.useRef)(null);
  const listRef = (0, import_react31.useRef)(null);
  const [dropdownPos, setDropdownPos] = (0, import_react31.useState)({ top: 0, left: 0, width: 0 });
  (0, import_react31.useEffect)(() => {
    if (open && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setDropdownPos({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width
      });
    }
  }, [open]);
  (0, import_react31.useEffect)(() => {
    if (open && listRef.current && highlighted >= 0) {
      const el = listRef.current.children[highlighted];
      if (el) el.scrollIntoView({ block: "nearest" });
    }
  }, [open, highlighted]);
  (0, import_react31.useEffect)(() => {
    if (!open) setHighlighted(-1);
  }, [open]);
  (0, import_react31.useEffect)(() => {
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
  return /* @__PURE__ */ import_react31.default.createElement(
    "div",
    {
      className: cn("selectWrapper", className),
      tabIndex: 0,
      onBlur: (e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false);
      },
      style: { display: "inline-block" }
    },
    label && /* @__PURE__ */ import_react31.default.createElement("div", { className: "label" }, label),
    /* @__PURE__ */ import_react31.default.createElement(
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
      /* @__PURE__ */ import_react31.default.createElement("span", { className: selectedOption ? void 0 : "placeholder" }, selectedOption ? selectedOption.label : placeholder || "Select..."),
      /* @__PURE__ */ import_react31.default.createElement("span", { className: "chevron", "aria-hidden": true }, "\u25BC")
    ),
    open && import_react_dom.default.createPortal(
      /* @__PURE__ */ import_react31.default.createElement(
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
        options.map((opt, idx) => /* @__PURE__ */ import_react31.default.createElement(
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
var import_react32 = __toESM(require("react"));
var import_react_dom2 = __toESM(require("react-dom"));
var import_CustomPopover = require("./CustomPopover-WHNAJV7I.css");
var CustomPopover = ({ open, onOpenChange, anchorEl, children, className, closeButton, onEsc }) => {
  const popoverRef = (0, import_react32.useRef)(null);
  const [position, setPosition] = (0, import_react32.useState)({ top: 0, left: 0 });
  (0, import_react32.useEffect)(() => {
    if (open && anchorEl) {
      const rect = anchorEl.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY + 8,
        left: rect.left + window.scrollX
      });
    }
  }, [open, anchorEl]);
  (0, import_react32.useEffect)(() => {
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
  return import_react_dom2.default.createPortal(
    /* @__PURE__ */ import_react32.default.createElement(
      "div",
      {
        ref: popoverRef,
        className: cn("popover", className),
        style: { top: position.top, left: position.left, position: "absolute", zIndex: 1e3 },
        tabIndex: -1,
        role: "dialog"
      },
      closeButton && /* @__PURE__ */ import_react32.default.createElement(
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
var import_RicherEditor = require("./RicherEditor-AV2BARFI.css");
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
  { level: 1, label: /* @__PURE__ */ import_react33.default.createElement(Heading1_default, { size: 18 }) },
  { level: 2, label: /* @__PURE__ */ import_react33.default.createElement(Heading2_default, { size: 18 }) },
  { level: 3, label: /* @__PURE__ */ import_react33.default.createElement(Heading3_default, { size: 18 }) },
  { level: 4, label: /* @__PURE__ */ import_react33.default.createElement(Heading4_default, { size: 18 }) },
  { level: 5, label: /* @__PURE__ */ import_react33.default.createElement(Heading5_default, { size: 18 }) },
  { level: 6, label: /* @__PURE__ */ import_react33.default.createElement(Heading6_default, { size: 18 }) }
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
  const [imagePopoverOpen, setImagePopoverOpen] = (0, import_react33.useState)(false);
  const [imageTab, setImageTab] = (0, import_react33.useState)("url");
  const [imageUrl, setImageUrl] = (0, import_react33.useState)("");
  const [imageWidth, setImageWidth] = (0, import_react33.useState)("");
  const [imageHeight, setImageHeight] = (0, import_react33.useState)("");
  const [uploading, setUploading] = (0, import_react33.useState)(false);
  const [uploadError, setUploadError] = (0, import_react33.useState)(null);
  const [uploadedImageUrl, setUploadedImageUrl] = (0, import_react33.useState)("");
  const [imageFile, setImageFile] = (0, import_react33.useState)(null);
  const [videoPopoverOpen, setVideoPopoverOpen] = (0, import_react33.useState)(false);
  const [videoUrl, setVideoUrl] = (0, import_react33.useState)("");
  const [videoWidth, setVideoWidth] = (0, import_react33.useState)("");
  const [videoHeight, setVideoHeight] = (0, import_react33.useState)("");
  const [linkPopoverOpen, setLinkPopoverOpen] = (0, import_react33.useState)(false);
  const [linkUrl, setLinkUrl] = (0, import_react33.useState)("");
  const linkButtonRef = import_react33.default.useRef(null);
  const imageButtonRef = import_react33.default.useRef(null);
  const videoButtonRef = import_react33.default.useRef(null);
  const handleImageUrlInsert = (0, import_react33.useCallback)(() => {
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
  const handleVideoUrlInsert = (0, import_react33.useCallback)(() => {
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
  const handleLinkInsert = (0, import_react33.useCallback)(() => {
    if (linkUrl) {
      editor.chain().focus().setLink({ href: linkUrl }).run();
      setLinkPopoverOpen(false);
      setLinkUrl("");
    }
  }, [editor, linkUrl]);
  const handleLinkUnset = (0, import_react33.useCallback)(() => {
    editor.chain().focus().unsetLink().run();
    setLinkPopoverOpen(false);
    setLinkUrl("");
  }, [editor]);
  if (!editor) return null;
  const t = { ...defaultI18n, ...i18n };
  return /* @__PURE__ */ import_react33.default.createElement("div", { className: "richer-editor-toolbar global-toolbar" }, /* @__PURE__ */ import_react33.default.createElement(
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
  ), /* @__PURE__ */ import_react33.default.createElement("div", { className: "toolbar-divider" }), /* @__PURE__ */ import_react33.default.createElement(
    CustomSelect_default,
    {
      value: editor.getAttributes("fontSize").fontSize || "",
      options: fontSizes.map((f) => ({ value: f.value, label: f.name })),
      onChange: (val) => editor.chain().focus().setFontSize(val).run(),
      className: "richer-editor-select",
      placeholder: "Font Size",
      "aria-label": "Font Size"
    }
  ), /* @__PURE__ */ import_react33.default.createElement(
    CustomSelect_default,
    {
      value: editor.getAttributes("fontFamily").fontFamily || "",
      options: fontFamilies.map((f) => ({
        value: f.value,
        label: /* @__PURE__ */ import_react33.default.createElement("span", { style: { fontFamily: f.value } }, f.name)
      })),
      onChange: (val) => editor.chain().focus().setFontFamily(val).run(),
      className: "richer-editor-select",
      placeholder: "Font Family",
      "aria-label": "Font Family"
    }
  ), /* @__PURE__ */ import_react33.default.createElement("div", { className: "toolbar-divider" }), !excludeToolbarButtons.includes("bold") && /* @__PURE__ */ import_react33.default.createElement("button", { onClick: () => editor.chain().focus().toggleBold().run(), className: `richer-editor-button ${editor.isActive("bold") ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": t.bold, title: t.bold }, /* @__PURE__ */ import_react33.default.createElement(BoldIcon_default, { size: 16 })), !excludeToolbarButtons.includes("italic") && /* @__PURE__ */ import_react33.default.createElement("button", { onClick: () => editor.chain().focus().toggleItalic().run(), className: `richer-editor-button ${editor.isActive("italic") ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": t.italic, title: t.italic }, /* @__PURE__ */ import_react33.default.createElement(ItalicIcon_default, { size: 16 })), !excludeToolbarButtons.includes("underline") && /* @__PURE__ */ import_react33.default.createElement("button", { onClick: () => editor.chain().focus().toggleUnderline().run(), className: `richer-editor-button ${editor.isActive("underline") ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": t.underline, title: t.underline }, /* @__PURE__ */ import_react33.default.createElement(UnderlineIcon_default, { size: 16 })), !excludeToolbarButtons.includes("strike") && /* @__PURE__ */ import_react33.default.createElement("button", { onClick: () => editor.chain().focus().toggleStrike().run(), className: `richer-editor-button ${editor.isActive("strike") ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": t.strike, title: t.strike }, /* @__PURE__ */ import_react33.default.createElement(StrikeIcon_default, { size: 16 })), !excludeToolbarButtons.includes("highlight") && /* @__PURE__ */ import_react33.default.createElement("button", { onClick: () => editor.chain().focus().toggleHighlight().run(), className: `richer-editor-button ${editor.isActive("highlight") ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": t.highlight, title: t.highlight }, /* @__PURE__ */ import_react33.default.createElement(Highlighter_default, { size: 16 })), !excludeToolbarButtons.includes("code") && /* @__PURE__ */ import_react33.default.createElement("button", { onClick: () => editor.chain().focus().toggleCodeBlock().run(), className: `richer-editor-button ${editor.isActive("codeBlock") ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": t.code, title: t.code }, /* @__PURE__ */ import_react33.default.createElement(CodeIcon_default, { size: 16 })), /* @__PURE__ */ import_react33.default.createElement("div", { className: "toolbar-divider" }), !excludeToolbarButtons.includes("bulletList") && /* @__PURE__ */ import_react33.default.createElement(import_react33.default.Fragment, null, /* @__PURE__ */ import_react33.default.createElement("button", { onClick: () => editor.chain().focus().toggleBulletList().run(), className: `richer-editor-button ${editor.isActive("bulletList") ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": t.bulletList, title: t.bulletList }, /* @__PURE__ */ import_react33.default.createElement(BulletListIcon_default, { size: 16 })), /* @__PURE__ */ import_react33.default.createElement(
    CustomSelect_default,
    {
      value: editor.getAttributes("bulletList").listStyleType || "",
      options: unorderedListStyles.map((opt) => ({ value: opt.value, label: /* @__PURE__ */ import_react33.default.createElement(import_react33.default.Fragment, null, opt.icon, " ", opt.name) })),
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
  )), !excludeToolbarButtons.includes("orderedList") && /* @__PURE__ */ import_react33.default.createElement(import_react33.default.Fragment, null, /* @__PURE__ */ import_react33.default.createElement("button", { onClick: () => editor.chain().focus().toggleOrderedList().run(), className: `richer-editor-button ${editor.isActive("orderedList") ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": t.orderedList, title: t.orderedList }, /* @__PURE__ */ import_react33.default.createElement(OrderedListIcon_default, { size: 16 })), /* @__PURE__ */ import_react33.default.createElement(
    CustomSelect_default,
    {
      value: editor.getAttributes("orderedList").listStyleType || "",
      options: orderedListStyles.map((opt) => ({ value: opt.value, label: /* @__PURE__ */ import_react33.default.createElement(import_react33.default.Fragment, null, opt.icon, " ", opt.name) })),
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
  )), !excludeToolbarButtons.includes("taskList") && /* @__PURE__ */ import_react33.default.createElement("button", { onClick: () => editor.chain().focus().toggleTaskList().run(), className: `richer-editor-button ${editor.isActive("taskList") ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": t.taskList, title: t.taskList }, /* @__PURE__ */ import_react33.default.createElement(TaskListIcon_default, { size: 16 })), /* @__PURE__ */ import_react33.default.createElement("div", { className: "toolbar-divider" }), !excludeToolbarButtons.includes("blockquote") && /* @__PURE__ */ import_react33.default.createElement("button", { onClick: () => editor.chain().focus().toggleBlockquote().run(), className: `richer-editor-button ${editor.isActive("blockquote") ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": t.blockquote, title: t.blockquote }, /* @__PURE__ */ import_react33.default.createElement(BlockquoteIcon_default, { size: 16 })), !excludeToolbarButtons.includes("hr") && /* @__PURE__ */ import_react33.default.createElement("button", { onClick: () => editor.chain().focus().setHorizontalRule().run(), className: "richer-editor-button", type: "button", "aria-label": t.hr, title: t.hr }, "HR"), /* @__PURE__ */ import_react33.default.createElement("div", { className: "toolbar-divider" }), !excludeToolbarButtons.includes("table") && /* @__PURE__ */ import_react33.default.createElement("button", { onClick: () => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run(), className: "richer-editor-button", type: "button", "aria-label": t.table, title: t.table }, /* @__PURE__ */ import_react33.default.createElement(TableIcon_default, { size: 16 })), /* @__PURE__ */ import_react33.default.createElement("div", { className: "toolbar-divider" }), !excludeToolbarButtons.includes("link") && /* @__PURE__ */ import_react33.default.createElement(import_react33.default.Fragment, null, /* @__PURE__ */ import_react33.default.createElement(
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
    /* @__PURE__ */ import_react33.default.createElement(LinkIcon_default, { size: 16 })
  ), /* @__PURE__ */ import_react33.default.createElement(
    CustomPopover_default,
    {
      open: linkPopoverOpen,
      onOpenChange: setLinkPopoverOpen,
      anchorEl: linkButtonRef.current,
      closeButton: true,
      onEsc: () => setLinkPopoverOpen(false)
    },
    /* @__PURE__ */ import_react33.default.createElement("div", { className: "mb-2 font-semibold text-base" }, "Insert Link"),
    /* @__PURE__ */ import_react33.default.createElement(
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
    /* @__PURE__ */ import_react33.default.createElement("div", { className: "richer-editor-flexRow" }, /* @__PURE__ */ import_react33.default.createElement(
      "button",
      {
        className: "richer-editor-primaryBtn",
        onClick: handleLinkInsert,
        disabled: !linkUrl
      },
      t.insert
    ), /* @__PURE__ */ import_react33.default.createElement(
      "button",
      {
        className: "richer-editor-secondaryBtn",
        onClick: handleLinkUnset,
        disabled: !editor.isActive("link")
      },
      t.remove
    ))
  )), !excludeToolbarButtons.includes("image") && /* @__PURE__ */ import_react33.default.createElement(import_react33.default.Fragment, null, /* @__PURE__ */ import_react33.default.createElement(
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
    /* @__PURE__ */ import_react33.default.createElement(ImageIcon_default, { size: 16 })
  ), /* @__PURE__ */ import_react33.default.createElement(
    CustomPopover_default,
    {
      open: imagePopoverOpen,
      onOpenChange: setImagePopoverOpen,
      anchorEl: imageButtonRef.current,
      closeButton: true,
      onEsc: () => setImagePopoverOpen(false)
    },
    /* @__PURE__ */ import_react33.default.createElement("div", { className: "mb-2 font-semibold text-base flex gap-4 border-b pb-2" }, /* @__PURE__ */ import_react33.default.createElement("button", { className: `richer-editor-button${imageTab === "url" ? " richer-editor-buttonActive" : ""}`, onClick: () => setImageTab("url") }, "URL"), imageUploadUrl && /* @__PURE__ */ import_react33.default.createElement("button", { className: `richer-editor-button${imageTab === "upload" ? " richer-editor-buttonActive" : ""}`, onClick: () => setImageTab("upload") }, "Upload")),
    imageTab === "url" && /* @__PURE__ */ import_react33.default.createElement(import_react33.default.Fragment, null, /* @__PURE__ */ import_react33.default.createElement(
      "input",
      {
        type: "text",
        placeholder: "Paste image URL here...",
        value: imageUrl,
        onChange: (e) => setImageUrl(e.target.value),
        className: "richer-editor-input",
        autoFocus: true
      }
    ), /* @__PURE__ */ import_react33.default.createElement("div", { className: "richer-editor-flexRowMb2" }, /* @__PURE__ */ import_react33.default.createElement(
      "input",
      {
        type: "text",
        placeholder: "Width (e.g. 400 or 50%)",
        value: imageWidth,
        onChange: (e) => setImageWidth(e.target.value),
        className: "richer-editor-input"
      }
    ), /* @__PURE__ */ import_react33.default.createElement(
      "input",
      {
        type: "text",
        placeholder: "Height (e.g. 300 or 50%)",
        value: imageHeight,
        onChange: (e) => setImageHeight(e.target.value),
        className: "richer-editor-input"
      }
    )), /* @__PURE__ */ import_react33.default.createElement("div", { className: "richer-editor-textXs" }, "Leave blank for default size. Use px (e.g. 400) or % (e.g. 50%)."), /* @__PURE__ */ import_react33.default.createElement(
      "button",
      {
        className: "richer-editor-primaryBtn",
        onClick: handleImageUrlInsert,
        disabled: !imageUrl
      },
      t.image
    )),
    imageTab === "upload" && imageUploadUrl && /* @__PURE__ */ import_react33.default.createElement(import_react33.default.Fragment, null, !uploadedImageUrl && /* @__PURE__ */ import_react33.default.createElement(import_react33.default.Fragment, null, /* @__PURE__ */ import_react33.default.createElement(
      "input",
      {
        type: "file",
        accept: "image/*",
        onChange: handleUploadInputChange,
        className: "mb2",
        disabled: uploading
      }
    ), uploading && /* @__PURE__ */ import_react33.default.createElement("div", { className: "text-sm text-blue-600 mb-2" }, "Uploading..."), uploadError && /* @__PURE__ */ import_react33.default.createElement("div", { className: "text-sm text-red-600 mb-2" }, uploadError)), uploadedImageUrl && /* @__PURE__ */ import_react33.default.createElement(import_react33.default.Fragment, null, /* @__PURE__ */ import_react33.default.createElement("div", { className: "mb-2 flex flex-col items-center" }, /* @__PURE__ */ import_react33.default.createElement("img", { src: uploadedImageUrl, alt: "Preview", className: "max-h-40 max-w-full rounded border mb-2" })), /* @__PURE__ */ import_react33.default.createElement("div", { className: "richer-editor-flexRowMb2" }, /* @__PURE__ */ import_react33.default.createElement(
      "input",
      {
        type: "text",
        placeholder: "Width (e.g. 400 or 50%)",
        value: imageWidth,
        onChange: (e) => setImageWidth(e.target.value),
        className: "richer-editor-input"
      }
    ), /* @__PURE__ */ import_react33.default.createElement(
      "input",
      {
        type: "text",
        placeholder: "Height (e.g. 300 or 50%)",
        value: imageHeight,
        onChange: (e) => setImageHeight(e.target.value),
        className: "richer-editor-input"
      }
    )), /* @__PURE__ */ import_react33.default.createElement("div", { className: "richer-editor-flexRow" }, /* @__PURE__ */ import_react33.default.createElement(
      "button",
      {
        className: "richer-editor-primaryBtn",
        onClick: handleUploadedImageInsert
      },
      t.add
    ), /* @__PURE__ */ import_react33.default.createElement(
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
  )), !excludeToolbarButtons.includes("video") && /* @__PURE__ */ import_react33.default.createElement(import_react33.default.Fragment, null, /* @__PURE__ */ import_react33.default.createElement(
    "button",
    {
      ref: videoButtonRef,
      onClick: () => setVideoPopoverOpen((open) => !open),
      className: "richer-editor-button",
      type: "button"
    },
    /* @__PURE__ */ import_react33.default.createElement(VideoIcon_default, { size: 16 })
  ), /* @__PURE__ */ import_react33.default.createElement(
    CustomPopover_default,
    {
      open: videoPopoverOpen,
      onOpenChange: setVideoPopoverOpen,
      anchorEl: videoButtonRef.current,
      closeButton: true,
      onEsc: () => setVideoPopoverOpen(false)
    },
    /* @__PURE__ */ import_react33.default.createElement("div", { className: "mb-2 font-semibold text-base" }, "Insert YouTube Video"),
    /* @__PURE__ */ import_react33.default.createElement(
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
    /* @__PURE__ */ import_react33.default.createElement("div", { className: "richer-editor-flexRowMb2" }, /* @__PURE__ */ import_react33.default.createElement(
      "input",
      {
        type: "text",
        placeholder: "Width (e.g. 400 or 50%)",
        value: videoWidth,
        onChange: (e) => setVideoWidth(e.target.value),
        className: "richer-editor-input"
      }
    ), /* @__PURE__ */ import_react33.default.createElement(
      "input",
      {
        type: "text",
        placeholder: "Height (e.g. 300 or 50%)",
        value: videoHeight,
        onChange: (e) => setVideoHeight(e.target.value),
        className: "richer-editor-input"
      }
    )),
    /* @__PURE__ */ import_react33.default.createElement("div", { className: "richer-editor-textXs" }, "Leave blank for default size. Use px (e.g. 400) or % (e.g. 50%)."),
    /* @__PURE__ */ import_react33.default.createElement(
      "button",
      {
        className: "richer-editor-primaryBtn",
        onClick: handleVideoUrlInsert,
        disabled: !videoUrl
      },
      t.video
    )
  )), !excludeToolbarButtons.includes("alignLeft") && /* @__PURE__ */ import_react33.default.createElement("button", { onClick: () => editor.chain().focus().setTextAlign("left").run(), className: `richer-editor-button ${editor.isActive({ textAlign: "left" }) ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": t.alignLeft, title: t.alignLeft }, /* @__PURE__ */ import_react33.default.createElement(AlignLeft_default, { size: 16 })), !excludeToolbarButtons.includes("alignCenter") && /* @__PURE__ */ import_react33.default.createElement("button", { onClick: () => editor.chain().focus().setTextAlign("center").run(), className: `richer-editor-button ${editor.isActive({ textAlign: "center" }) ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": t.alignCenter, title: t.alignCenter }, /* @__PURE__ */ import_react33.default.createElement(AlignCenter_default, { size: 16 })), !excludeToolbarButtons.includes("alignRight") && /* @__PURE__ */ import_react33.default.createElement("button", { onClick: () => editor.chain().focus().setTextAlign("right").run(), className: `richer-editor-button ${editor.isActive({ textAlign: "right" }) ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": t.alignRight, title: t.alignRight }, /* @__PURE__ */ import_react33.default.createElement(AlignRight_default, { size: 16 })), !excludeToolbarButtons.includes("alignJustify") && /* @__PURE__ */ import_react33.default.createElement("button", { onClick: () => editor.chain().focus().setTextAlign("justify").run(), className: `richer-editor-button ${editor.isActive({ textAlign: "justify" }) ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": t.alignJustify, title: t.alignJustify }, /* @__PURE__ */ import_react33.default.createElement(AlignJustify_default, { size: 16 })), !excludeToolbarButtons.includes("textColor") && /* @__PURE__ */ import_react33.default.createElement("div", { className: "richer-editor-colorpicker", style: { height: 28 }, title: t.textColor, "aria-label": t.textColor }, /* @__PURE__ */ import_react33.default.createElement(TextColorIcon_default, { size: 16 }), /* @__PURE__ */ import_react33.default.createElement(
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
  )), !excludeToolbarButtons.includes("bgColor") && /* @__PURE__ */ import_react33.default.createElement("div", { className: "richer-editor-colorpicker", style: { height: 28 }, title: t.bgColor, "aria-label": t.bgColor }, /* @__PURE__ */ import_react33.default.createElement(PaintBucket_default, { size: 16 }), /* @__PURE__ */ import_react33.default.createElement(
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
  )), !excludeToolbarButtons.includes("subscript") && /* @__PURE__ */ import_react33.default.createElement(
    "button",
    {
      onClick: () => editor.chain().focus().toggleSubscript().run(),
      className: `richer-editor-button ${editor.isActive("subscript") ? "richer-editor-buttonActive" : ""}`,
      type: "button",
      title: "Subscript",
      "aria-label": t.subscript
    },
    /* @__PURE__ */ import_react33.default.createElement(SubscriptIcon_default, { size: 16 })
  ), !excludeToolbarButtons.includes("superscript") && /* @__PURE__ */ import_react33.default.createElement(
    "button",
    {
      onClick: () => editor.chain().focus().toggleSuperscript().run(),
      className: `richer-editor-button ${editor.isActive("superscript") ? "richer-editor-buttonActive" : ""}`,
      type: "button",
      title: "Superscript",
      "aria-label": t.superscript
    },
    /* @__PURE__ */ import_react33.default.createElement(SuperscriptIcon_default, { size: 16 })
  ), /* @__PURE__ */ import_react33.default.createElement("div", { className: "richer-editor-ml2" }), !excludeToolbarButtons.includes("undo") && /* @__PURE__ */ import_react33.default.createElement("button", { onClick: () => editor.chain().focus().undo().run(), className: "richer-editor-button", type: "button", "aria-label": t.undo, title: t.undo }, /* @__PURE__ */ import_react33.default.createElement(UndoIcon_default, { size: 16 })), !excludeToolbarButtons.includes("redo") && /* @__PURE__ */ import_react33.default.createElement("button", { onClick: () => editor.chain().focus().redo().run(), className: "richer-editor-button", type: "button", "aria-label": t.redo, title: t.redo }, /* @__PURE__ */ import_react33.default.createElement(RedoIcon_default, { size: 16 })));
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
  const safeContent = import_react33.default.useMemo(() => getSafeContent(content, outputFormat), [content, outputFormat]);
  const editor = (0, import_react34.useEditor)({
    extensions: [
      import_starter_kit.default,
      import_extension_link.default.configure({ openOnClick: true }),
      import_extension_image.default,
      import_extension_heading.default.configure({ levels: [1, 2, 3, 4, 5, 6] }),
      CustomBulletList,
      CustomOrderedList,
      import_extension_list_item.default,
      import_extension_bold.default,
      import_extension_italic.default,
      import_extension_underline.default,
      import_extension_strike.default,
      import_extension_blockquote.default,
      import_extension_code_block.default,
      import_extension_horizontal_rule.default,
      import_extension_text_align.default.configure({ types: ["heading", "paragraph"] }),
      import_extension_table.Table.configure({ resizable: true }),
      import_extension_table_row.default,
      import_extension_table_cell.default,
      import_extension_table_header.default,
      import_extension_dropcursor.default,
      import_extension_gapcursor.default,
      import_extension_task_list.default,
      import_extension_task_item.default,
      import_extension_superscript.default,
      import_extension_subscript.default,
      import_extension_typography.default,
      import_extension_youtube.default.configure({
        controls: true,
        allowFullscreen: true,
        width: 640,
        height: 360,
        HTMLAttributes: {
          class: "mx-auto my-4 rounded-lg shadow"
        }
      }),
      import_extension_color.default,
      // <-- Color must come before TextStyle
      import_extension_text_style.TextStyle,
      import_extension_font_family.default,
      import_extension_font_size.default,
      import_extension_highlight.default.configure({
        multicolor: true
      }),
      import_extension_placeholder.default.configure({
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
  import_react33.default.useEffect(() => {
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
  return /* @__PURE__ */ import_react33.default.createElement("div", { className: `richer-editor-roundedMdBorder ${className || ""}`, style }, /* @__PURE__ */ import_react33.default.createElement(MenuBar, { editor, imageUploadUrl, excludeToolbarButtons, i18n }), /* @__PURE__ */ import_react33.default.createElement("div", { className: "richer-editor-overflowAuto", style: { maxHeight } }, /* @__PURE__ */ import_react33.default.createElement(import_react34.EditorContent, { editor })));
};
var RicherEditor_default = RicherEditor;

// src/components/SmallRicherEditor.tsx
var import_react35 = __toESM(require("react"));
var import_react36 = require("@tiptap/react");
var import_starter_kit2 = __toESM(require("@tiptap/starter-kit"));
var import_extension_link2 = __toESM(require("@tiptap/extension-link"));
var import_extension_image2 = __toESM(require("@tiptap/extension-image"));
var import_extension_bold2 = __toESM(require("@tiptap/extension-bold"));
var import_extension_underline2 = __toESM(require("@tiptap/extension-underline"));
var import_extension_highlight2 = __toESM(require("@tiptap/extension-highlight"));
var import_extension_code_block2 = __toESM(require("@tiptap/extension-code-block"));
var import_extension_youtube2 = __toESM(require("@tiptap/extension-youtube"));
var import_extension_text_align2 = __toESM(require("@tiptap/extension-text-align"));
var import_extension_list_item2 = require("@tiptap/extension-list-item");
var import_extension_bullet_list2 = require("@tiptap/extension-bullet-list");
var import_extension_ordered_list2 = require("@tiptap/extension-ordered-list");
var import_extension_text_style2 = require("@tiptap/extension-text-style");
var import_extension_font_size2 = __toESM(require("@tiptap/extension-font-size"));
var import_extension_placeholder2 = __toESM(require("@tiptap/extension-placeholder"));
var import_RicherEditor2 = require("./RicherEditor-AV2BARFI.css");
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
  { value: "left", label: /* @__PURE__ */ import_react35.default.createElement(AlignLeft_default, { size: 18 }), name: "Left" },
  { value: "center", label: /* @__PURE__ */ import_react35.default.createElement(AlignCenter_default, { size: 18 }), name: "Center" },
  { value: "right", label: /* @__PURE__ */ import_react35.default.createElement(AlignRight_default, { size: 18 }), name: "Right" },
  { value: "justify", label: /* @__PURE__ */ import_react35.default.createElement(AlignJustify_default, { size: 18 }), name: "Justify" }
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
  const [imagePopoverOpen, setImagePopoverOpen] = (0, import_react35.useState)(false);
  const [imageTab, setImageTab] = (0, import_react35.useState)("url");
  const [imageUrl, setImageUrl] = (0, import_react35.useState)("");
  const [imageWidth, setImageWidth] = (0, import_react35.useState)("");
  const [imageHeight, setImageHeight] = (0, import_react35.useState)("");
  const [uploading, setUploading] = (0, import_react35.useState)(false);
  const [uploadError, setUploadError] = (0, import_react35.useState)(null);
  const [uploadedImageUrl, setUploadedImageUrl] = (0, import_react35.useState)("");
  const [imageFile, setImageFile] = (0, import_react35.useState)(null);
  const [videoPopoverOpen, setVideoPopoverOpen] = (0, import_react35.useState)(false);
  const [videoUrl, setVideoUrl] = (0, import_react35.useState)("");
  const [videoWidth, setVideoWidth] = (0, import_react35.useState)("");
  const [videoHeight, setVideoHeight] = (0, import_react35.useState)("");
  const [linkPopoverOpen, setLinkPopoverOpen] = (0, import_react35.useState)(false);
  const [linkUrl, setLinkUrl] = (0, import_react35.useState)("");
  const linkButtonRef = import_react35.default.useRef(null);
  const imageButtonRef = import_react35.default.useRef(null);
  const videoButtonRef = import_react35.default.useRef(null);
  const t = { ...defaultI18n2, ...i18n };
  const handleImageUrlInsert = (0, import_react35.useCallback)(() => {
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
  const handleVideoUrlInsert = (0, import_react35.useCallback)(() => {
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
  const handleLinkInsert = (0, import_react35.useCallback)(() => {
    if (linkUrl) {
      editor.chain().focus().setLink({ href: linkUrl }).run();
      setLinkPopoverOpen(false);
      setLinkUrl("");
    }
  }, [editor, linkUrl]);
  const handleLinkUnset = (0, import_react35.useCallback)(() => {
    editor.chain().focus().unsetLink().run();
    setLinkPopoverOpen(false);
    setLinkUrl("");
  }, [editor]);
  if (!editor) return null;
  return /* @__PURE__ */ import_react35.default.createElement(import_react35.default.Fragment, null, /* @__PURE__ */ import_react35.default.createElement("div", { className: "richer-editor-toolbar global-toolbar" }, !excludeToolbarButtons.includes("fontSize") && /* @__PURE__ */ import_react35.default.createElement(
    CustomSelect_default,
    {
      value: editor.getAttributes("fontSize").fontSize || "",
      options: fontSizes2.map((f) => ({ value: f.value, label: f.name })),
      onChange: (val) => editor.chain().focus().setFontSize(val).run(),
      className: "richer-editor-select",
      placeholder: t.fontSize || "Font Size",
      "aria-label": t.fontSize || "Font Size"
    }
  ), /* @__PURE__ */ import_react35.default.createElement("div", { className: "toolbar-divider" }), !excludeToolbarButtons.includes("bold") && /* @__PURE__ */ import_react35.default.createElement("button", { onClick: () => editor.chain().focus().toggleBold().run(), className: `richer-editor-button${editor.isActive("bold") ? " richer-editor-buttonActive" : ""}`, type: "button", "aria-label": t.bold, title: t.bold }, /* @__PURE__ */ import_react35.default.createElement(BoldIcon_default, { size: 16 })), !excludeToolbarButtons.includes("underline") && /* @__PURE__ */ import_react35.default.createElement("button", { onClick: () => editor.chain().focus().toggleUnderline().run(), className: `richer-editor-button${editor.isActive("underline") ? " richer-editor-buttonActive" : ""}`, type: "button", "aria-label": t.underline, title: t.underline }, /* @__PURE__ */ import_react35.default.createElement(UnderlineIcon_default, { size: 16 })), !excludeToolbarButtons.includes("highlight") && /* @__PURE__ */ import_react35.default.createElement("button", { onClick: () => editor.chain().focus().toggleHighlight({ color: "#fff59d" }).run(), className: `richer-editor-button${editor.isActive("highlight") ? " richer-editor-buttonActive" : ""}`, type: "button", "aria-label": t.highlight, title: t.highlight }, /* @__PURE__ */ import_react35.default.createElement(Highlighter_default, { size: 16 })), !excludeToolbarButtons.includes("code") && /* @__PURE__ */ import_react35.default.createElement("button", { onClick: () => editor.chain().focus().toggleCodeBlock().run(), className: `richer-editor-button${editor.isActive("codeBlock") ? " richer-editor-buttonActive" : ""}`, type: "button", "aria-label": t.code, title: t.code }, /* @__PURE__ */ import_react35.default.createElement(CodeIcon_default, { size: 16 })), /* @__PURE__ */ import_react35.default.createElement("div", { className: "toolbar-divider" }), !excludeToolbarButtons.includes("bulletList") && /* @__PURE__ */ import_react35.default.createElement("button", { onClick: () => editor.chain().focus().toggleBulletList().run(), className: `richer-editor-button${editor.isActive("bulletList") ? " richer-editor-buttonActive" : ""}`, type: "button", "aria-label": t.bulletList, title: t.bulletList }, /* @__PURE__ */ import_react35.default.createElement(BulletListIcon_default, { size: 16 })), !excludeToolbarButtons.includes("orderedList") && /* @__PURE__ */ import_react35.default.createElement("button", { onClick: () => editor.chain().focus().toggleOrderedList().run(), className: `richer-editor-button${editor.isActive("orderedList") ? " richer-editor-buttonActive" : ""}`, type: "button", "aria-label": t.orderedList, title: t.orderedList }, /* @__PURE__ */ import_react35.default.createElement(OrderedListIcon_default, { size: 16 })), /* @__PURE__ */ import_react35.default.createElement("div", { className: "toolbar-divider" }), !excludeToolbarButtons.includes("link") && /* @__PURE__ */ import_react35.default.createElement(import_react35.default.Fragment, null, /* @__PURE__ */ import_react35.default.createElement(
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
    /* @__PURE__ */ import_react35.default.createElement(LinkIcon_default, { size: 16 })
  ), /* @__PURE__ */ import_react35.default.createElement(
    CustomPopover_default,
    {
      open: linkPopoverOpen,
      onOpenChange: setLinkPopoverOpen,
      anchorEl: linkButtonRef.current,
      closeButton: true,
      onEsc: () => setLinkPopoverOpen(false)
    },
    /* @__PURE__ */ import_react35.default.createElement("div", { className: "mb-2 font-semibold text-base" }, t.link),
    /* @__PURE__ */ import_react35.default.createElement(
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
    /* @__PURE__ */ import_react35.default.createElement("div", { className: "richer-editor-flexRow" }, /* @__PURE__ */ import_react35.default.createElement(
      "button",
      {
        className: "richer-editor-primaryBtn",
        onClick: handleLinkInsert,
        disabled: !linkUrl
      },
      t.insert
    ), /* @__PURE__ */ import_react35.default.createElement(
      "button",
      {
        className: "richer-editor-secondaryBtn",
        onClick: handleLinkUnset,
        disabled: !editor.isActive("link")
      },
      t.remove
    ))
  )), !excludeToolbarButtons.includes("image") && /* @__PURE__ */ import_react35.default.createElement(import_react35.default.Fragment, null, /* @__PURE__ */ import_react35.default.createElement(
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
    /* @__PURE__ */ import_react35.default.createElement(ImageIcon_default, { size: 16 })
  ), /* @__PURE__ */ import_react35.default.createElement(
    CustomPopover_default,
    {
      open: imagePopoverOpen,
      onOpenChange: setImagePopoverOpen,
      anchorEl: imageButtonRef.current,
      closeButton: true,
      onEsc: () => setImagePopoverOpen(false)
    },
    /* @__PURE__ */ import_react35.default.createElement("div", { className: "mb-2 font-semibold text-base flex gap-4 border-b pb-2" }, /* @__PURE__ */ import_react35.default.createElement("button", { className: `richer-editor-button${imageTab === "url" ? " richer-editor-buttonActive" : ""}`, onClick: () => setImageTab("url") }, "URL"), imageUploadUrl && /* @__PURE__ */ import_react35.default.createElement("button", { className: `richer-editor-button${imageTab === "upload" ? " richer-editor-buttonActive" : ""}`, onClick: () => setImageTab("upload") }, "Upload")),
    imageTab === "url" && /* @__PURE__ */ import_react35.default.createElement(import_react35.default.Fragment, null, /* @__PURE__ */ import_react35.default.createElement(
      "input",
      {
        type: "text",
        placeholder: "Paste image URL here...",
        value: imageUrl,
        onChange: (e) => setImageUrl(e.target.value),
        className: "richer-editor-input",
        autoFocus: true
      }
    ), /* @__PURE__ */ import_react35.default.createElement("div", { className: "richer-editor-flexRowMb2" }, /* @__PURE__ */ import_react35.default.createElement(
      "input",
      {
        type: "text",
        placeholder: "Width (e.g. 400 or 50%)",
        value: imageWidth,
        onChange: (e) => setImageWidth(e.target.value),
        className: "richer-editor-input"
      }
    ), /* @__PURE__ */ import_react35.default.createElement(
      "input",
      {
        type: "text",
        placeholder: "Height (e.g. 300 or 50%)",
        value: imageHeight,
        onChange: (e) => setImageHeight(e.target.value),
        className: "richer-editor-input"
      }
    )), /* @__PURE__ */ import_react35.default.createElement("div", { className: "richer-editor-textXs" }, "Leave blank for default size. Use px (e.g. 400) or % (e.g. 50%)."), /* @__PURE__ */ import_react35.default.createElement(
      "button",
      {
        className: "richer-editor-primaryBtn",
        onClick: handleImageUrlInsert,
        disabled: !imageUrl
      },
      t.image
    )),
    imageTab === "upload" && imageUploadUrl && /* @__PURE__ */ import_react35.default.createElement(import_react35.default.Fragment, null, !uploadedImageUrl && /* @__PURE__ */ import_react35.default.createElement(import_react35.default.Fragment, null, /* @__PURE__ */ import_react35.default.createElement(
      "input",
      {
        type: "file",
        accept: "image/*",
        onChange: handleUploadInputChange,
        className: "mb2",
        disabled: uploading
      }
    ), uploading && /* @__PURE__ */ import_react35.default.createElement("div", { className: "text-sm text-blue-600 mb-2" }, "Uploading..."), uploadError && /* @__PURE__ */ import_react35.default.createElement("div", { className: "text-sm text-red-600 mb-2" }, uploadError)), uploadedImageUrl && /* @__PURE__ */ import_react35.default.createElement(import_react35.default.Fragment, null, /* @__PURE__ */ import_react35.default.createElement("div", { className: "mb-2 flex flex-col items-center" }, /* @__PURE__ */ import_react35.default.createElement("img", { src: uploadedImageUrl, alt: "Preview", className: "max-h-40 max-w-full rounded border mb-2" })), /* @__PURE__ */ import_react35.default.createElement("div", { className: "richer-editor-flexRowMb2" }, /* @__PURE__ */ import_react35.default.createElement(
      "input",
      {
        type: "text",
        placeholder: "Width (e.g. 400 or 50%)",
        value: imageWidth,
        onChange: (e) => setImageWidth(e.target.value),
        className: "richer-editor-input"
      }
    ), /* @__PURE__ */ import_react35.default.createElement(
      "input",
      {
        type: "text",
        placeholder: "Height (e.g. 300 or 50%)",
        value: imageHeight,
        onChange: (e) => setImageHeight(e.target.value),
        className: "richer-editor-input"
      }
    )), /* @__PURE__ */ import_react35.default.createElement("div", { className: "richer-editor-flexRow" }, /* @__PURE__ */ import_react35.default.createElement(
      "button",
      {
        className: "richer-editor-primaryBtn",
        onClick: handleUploadedImageInsert
      },
      t.add
    ), /* @__PURE__ */ import_react35.default.createElement(
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
  )), !excludeToolbarButtons.includes("video") && /* @__PURE__ */ import_react35.default.createElement(import_react35.default.Fragment, null, /* @__PURE__ */ import_react35.default.createElement(
    "button",
    {
      ref: videoButtonRef,
      onClick: () => setVideoPopoverOpen((open) => !open),
      className: "richer-editor-button",
      type: "button",
      "aria-label": t.video,
      title: t.video
    },
    /* @__PURE__ */ import_react35.default.createElement(VideoIcon_default, { size: 16 })
  ), /* @__PURE__ */ import_react35.default.createElement(
    CustomPopover_default,
    {
      open: videoPopoverOpen,
      onOpenChange: setVideoPopoverOpen,
      anchorEl: videoButtonRef.current,
      closeButton: true,
      onEsc: () => setVideoPopoverOpen(false)
    },
    /* @__PURE__ */ import_react35.default.createElement("div", { className: "mb-2 font-semibold text-base" }, t.video),
    /* @__PURE__ */ import_react35.default.createElement(
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
    /* @__PURE__ */ import_react35.default.createElement("div", { className: "richer-editor-flexRowMb2" }, /* @__PURE__ */ import_react35.default.createElement(
      "input",
      {
        type: "text",
        placeholder: "Width (e.g. 400 or 50%)",
        value: videoWidth,
        onChange: (e) => setVideoWidth(e.target.value),
        className: "richer-editor-input"
      }
    ), /* @__PURE__ */ import_react35.default.createElement(
      "input",
      {
        type: "text",
        placeholder: "Height (e.g. 300 or 50%)",
        value: videoHeight,
        onChange: (e) => setVideoHeight(e.target.value),
        className: "richer-editor-input"
      }
    )),
    /* @__PURE__ */ import_react35.default.createElement("div", { className: "richer-editor-textXs" }, "Leave blank for default size. Use px (e.g. 400) or % (e.g. 50%)."),
    /* @__PURE__ */ import_react35.default.createElement(
      "button",
      {
        className: "richer-editor-primaryBtn",
        onClick: handleVideoUrlInsert,
        disabled: !videoUrl
      },
      t.video
    )
  )), !excludeToolbarButtons.includes("align") && /* @__PURE__ */ import_react35.default.createElement(
    CustomSelect_default,
    {
      value: editor.getAttributes("textAlign") || "left",
      options: alignmentOptions.map((opt) => ({ value: opt.value, label: /* @__PURE__ */ import_react35.default.createElement(import_react35.default.Fragment, null, opt.label, " ", opt.name) })),
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
  const safeContent = import_react35.default.useMemo(() => getSafeContent2(content, outputFormat), [content, outputFormat]);
  const editor = (0, import_react36.useEditor)({
    extensions: [
      import_starter_kit2.default,
      import_extension_link2.default.configure({ openOnClick: true }),
      import_extension_image2.default,
      import_extension_bold2.default,
      import_extension_underline2.default,
      import_extension_highlight2.default.configure({ multicolor: false, HTMLAttributes: { style: "background-color: #fff59d" } }),
      import_extension_code_block2.default,
      import_extension_bullet_list2.BulletList,
      import_extension_ordered_list2.OrderedList,
      import_extension_list_item2.ListItem,
      import_extension_text_align2.default.configure({ types: ["paragraph"] }),
      import_extension_youtube2.default.configure({
        controls: true,
        allowFullscreen: true,
        width: 640,
        height: 360,
        HTMLAttributes: {
          class: "mx-auto my-4 rounded-lg shadow"
        }
      }),
      import_extension_text_style2.TextStyle,
      import_extension_font_size2.default,
      import_extension_placeholder2.default.configure({
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
  import_react35.default.useEffect(() => {
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
  return /* @__PURE__ */ import_react35.default.createElement("div", { className: `richer-editor-roundedMdBorder ${className || ""}`, style }, /* @__PURE__ */ import_react35.default.createElement(MenuBar2, { editor, imageUploadUrl, excludeToolbarButtons, i18n }), /* @__PURE__ */ import_react35.default.createElement("div", { className: "richer-editor-overflowAuto", style: { maxHeight } }, /* @__PURE__ */ import_react35.default.createElement(import_react36.EditorContent, { editor })));
};
var SmallRicherEditor_default = SmallRicherEditor;

// src/components/RicherContent.tsx
var import_react37 = __toESM(require("react"));
var RicherContent = ({ content, className = "" }) => {
  return /* @__PURE__ */ import_react37.default.createElement("div", { className: cn(`prose dark:prose-invert
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
        max-w-full`, className) }, /* @__PURE__ */ import_react37.default.createElement(
    "div",
    {
      className: "max-w-none",
      dangerouslySetInnerHTML: { __html: content || "" }
    }
  ));
};
var RicherContent_default = RicherContent;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CustomBulletList,
  CustomOrderedList,
  RicherContent,
  RicherEditor,
  SmallRicherEditor
});
//# sourceMappingURL=index.js.map