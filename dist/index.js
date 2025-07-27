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
  CustomCodeBlock: () => CustomCodeBlock,
  CustomOrderedList: () => CustomOrderedList,
  RicherContent: () => RicherContent_default,
  RicherEditor: () => RicherEditor_default,
  SmallRicherEditor: () => SmallRicherEditor_default
});
module.exports = __toCommonJS(index_exports);

// src/components/RicherEditor.tsx
var import_react36 = __toESM(require("react"));
var import_react37 = require("@tiptap/react");
var import_starter_kit = __toESM(require("@tiptap/starter-kit"));
var import_extension_link = __toESM(require("@tiptap/extension-link"));
var import_extension_text_align = __toESM(require("@tiptap/extension-text-align"));
var import_extension_task_list = __toESM(require("@tiptap/extension-task-list"));
var import_extension_task_item = __toESM(require("@tiptap/extension-task-item"));
var import_extension_superscript = __toESM(require("@tiptap/extension-superscript"));
var import_extension_subscript = __toESM(require("@tiptap/extension-subscript"));
var import_extension_image = __toESM(require("@tiptap/extension-image"));
var import_extension_drag_handle_react = __toESM(require("@tiptap/extension-drag-handle-react"));
var import_extension_youtube = __toESM(require("@tiptap/extension-youtube"));
var import_extension_highlight = __toESM(require("@tiptap/extension-highlight"));
var import_extension_text_style = require("@tiptap/extension-text-style");
var import_extension_font_family = __toESM(require("@tiptap/extension-font-family"));
var import_extension_font_size = __toESM(require("@tiptap/extension-font-size"));
var import_extension_color = __toESM(require("@tiptap/extension-color"));

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

// src/icons/UndoIcon.tsx
var import_react12 = __toESM(require("react"));
var UndoIcon = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ import_react12.default.createElement(
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
  /* @__PURE__ */ import_react12.default.createElement("path", { d: "M3 7v6h6" }),
  /* @__PURE__ */ import_react12.default.createElement("path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" })
);
var UndoIcon_default = UndoIcon;

// src/icons/RedoIcon.tsx
var import_react13 = __toESM(require("react"));
var RedoIcon = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ import_react13.default.createElement(
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
  /* @__PURE__ */ import_react13.default.createElement("path", { d: "M21 7v6h-6" }),
  /* @__PURE__ */ import_react13.default.createElement("path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" })
);
var RedoIcon_default = RedoIcon;

// src/icons/AlignLeft.tsx
var import_react14 = __toESM(require("react"));
var AlignLeft = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ import_react14.default.createElement(
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
  /* @__PURE__ */ import_react14.default.createElement("line", { x1: "21", x2: "3", y1: "6", y2: "6" }),
  /* @__PURE__ */ import_react14.default.createElement("line", { x1: "15", x2: "3", y1: "12", y2: "12" }),
  /* @__PURE__ */ import_react14.default.createElement("line", { x1: "17", x2: "3", y1: "18", y2: "18" })
);
var AlignLeft_default = AlignLeft;

// src/icons/AlignCenter.tsx
var import_react15 = __toESM(require("react"));
var AlignCenter = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ import_react15.default.createElement(
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
  /* @__PURE__ */ import_react15.default.createElement("line", { x1: "17", x2: "7", y1: "12", y2: "12" }),
  /* @__PURE__ */ import_react15.default.createElement("line", { x1: "19", x2: "5", y1: "18", y2: "18" })
);
var AlignCenter_default = AlignCenter;

// src/icons/AlignRight.tsx
var import_react16 = __toESM(require("react"));
var AlignRight = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ import_react16.default.createElement(
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
  /* @__PURE__ */ import_react16.default.createElement("line", { x1: "21", x2: "9", y1: "12", y2: "12" }),
  /* @__PURE__ */ import_react16.default.createElement("line", { x1: "21", x2: "7", y1: "18", y2: "18" })
);
var AlignRight_default = AlignRight;

// src/icons/AlignJustify.tsx
var import_react17 = __toESM(require("react"));
var AlignJustify = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ import_react17.default.createElement(
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
  /* @__PURE__ */ import_react17.default.createElement("line", { x1: "21", x2: "3", y1: "12", y2: "12" }),
  /* @__PURE__ */ import_react17.default.createElement("line", { x1: "21", x2: "3", y1: "18", y2: "18" })
);
var AlignJustify_default = AlignJustify;

// src/icons/Highlighter.tsx
var import_react18 = __toESM(require("react"));
var Highlighter = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ import_react18.default.createElement(
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
  /* @__PURE__ */ import_react18.default.createElement("path", { d: "m9 11-6 6v3h9l3-3" }),
  /* @__PURE__ */ import_react18.default.createElement("path", { d: "M22 15 11 4l-3 3 11 11 3-3Z" })
);
var Highlighter_default = Highlighter;

// src/icons/Heading1.tsx
var import_react19 = __toESM(require("react"));
var Heading1 = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ import_react19.default.createElement(
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
  /* @__PURE__ */ import_react19.default.createElement("path", { d: "M4 12h8" }),
  /* @__PURE__ */ import_react19.default.createElement("path", { d: "M4 18V6" }),
  /* @__PURE__ */ import_react19.default.createElement("path", { d: "M12 18V6" }),
  /* @__PURE__ */ import_react19.default.createElement("path", { d: "M17 12v-1h-2V9h3" })
);
var Heading1_default = Heading1;

// src/icons/Heading2.tsx
var import_react20 = __toESM(require("react"));
var Heading2 = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ import_react20.default.createElement(
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
  /* @__PURE__ */ import_react20.default.createElement("path", { d: "M17 12a2 2 0 1 1 0 4h-3" }),
  /* @__PURE__ */ import_react20.default.createElement("path", { d: "M19 16v.01" })
);
var Heading2_default = Heading2;

// src/icons/Heading3.tsx
var import_react21 = __toESM(require("react"));
var Heading3 = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ import_react21.default.createElement(
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
  /* @__PURE__ */ import_react21.default.createElement("path", { d: "M17 14a2 2 0 1 0 0-4h-2" }),
  /* @__PURE__ */ import_react21.default.createElement("path", { d: "M15 16a2 2 0 1 0 0 4h2" })
);
var Heading3_default = Heading3;

// src/icons/Heading4.tsx
var import_react22 = __toESM(require("react"));
var Heading4 = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ import_react22.default.createElement(
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
  /* @__PURE__ */ import_react22.default.createElement("path", { d: "M17 18v-8l-2 2" }),
  /* @__PURE__ */ import_react22.default.createElement("path", { d: "M15 14h4" })
);
var Heading4_default = Heading4;

// src/icons/Heading5.tsx
var import_react23 = __toESM(require("react"));
var Heading5 = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ import_react23.default.createElement(
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
  /* @__PURE__ */ import_react23.default.createElement("path", { d: "M17 13.5V12a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2v2h4" })
);
var Heading5_default = Heading5;

// src/icons/Heading6.tsx
var import_react24 = __toESM(require("react"));
var Heading6 = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ import_react24.default.createElement(
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
  /* @__PURE__ */ import_react24.default.createElement("circle", { cx: "19", cy: "16", r: "2" }),
  /* @__PURE__ */ import_react24.default.createElement("path", { d: "M19 14v-2" })
);
var Heading6_default = Heading6;

// src/icons/VideoIcon.tsx
var import_react25 = __toESM(require("react"));
var VideoIcon = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ import_react25.default.createElement(
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
  /* @__PURE__ */ import_react25.default.createElement("path", { d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" }),
  /* @__PURE__ */ import_react25.default.createElement("rect", { x: "2", y: "6", width: "14", height: "12", rx: "2" })
);
var VideoIcon_default = VideoIcon;

// src/icons/SubscriptIcon.tsx
var import_react26 = __toESM(require("react"));
var SubscriptIcon = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ import_react26.default.createElement(
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
  /* @__PURE__ */ import_react26.default.createElement("path", { d: "m4 5 8 8" }),
  /* @__PURE__ */ import_react26.default.createElement("path", { d: "m12 5-8 8" }),
  /* @__PURE__ */ import_react26.default.createElement("path", { d: "M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07" })
);
var SubscriptIcon_default = SubscriptIcon;

// src/icons/SuperscriptIcon.tsx
var import_react27 = __toESM(require("react"));
var SuperscriptIcon = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ import_react27.default.createElement(
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
  /* @__PURE__ */ import_react27.default.createElement("path", { d: "m4 19 8-8" }),
  /* @__PURE__ */ import_react27.default.createElement("path", { d: "m12 19-8-8" }),
  /* @__PURE__ */ import_react27.default.createElement("path", { d: "M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06" })
);
var SuperscriptIcon_default = SuperscriptIcon;

// src/icons/PaintBucket.tsx
var import_react28 = __toESM(require("react"));
var PaintBucket = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ import_react28.default.createElement(
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
  /* @__PURE__ */ import_react28.default.createElement("path", { d: "m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z" }),
  /* @__PURE__ */ import_react28.default.createElement("path", { d: "m5 2 5 5" }),
  /* @__PURE__ */ import_react28.default.createElement("path", { d: "M2 13h15" }),
  /* @__PURE__ */ import_react28.default.createElement("path", { d: "M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z" })
);
var PaintBucket_default = PaintBucket;

// src/icons/TextColorIcon.tsx
var import_react29 = __toESM(require("react"));
var TextColorIcon = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ import_react29.default.createElement(
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
  /* @__PURE__ */ import_react29.default.createElement("path", { d: "M12 4v16" }),
  /* @__PURE__ */ import_react29.default.createElement("path", { d: "M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2" }),
  /* @__PURE__ */ import_react29.default.createElement("path", { d: "M9 20h6" })
);
var TextColorIcon_default = TextColorIcon;

// node_modules/@tiptap/extension-list/dist/index.js
var import_core = require("@tiptap/core");
var import_core2 = require("@tiptap/core");
var import_core3 = require("@tiptap/core");
var import_core4 = require("@tiptap/core");
var import_core5 = require("@tiptap/core");
var import_core6 = require("@tiptap/core");
var import_core7 = require("@tiptap/core");
var import_core8 = require("@tiptap/core");
var import_core9 = require("@tiptap/core");
var import_core10 = require("@tiptap/core");
var import_core11 = require("@tiptap/core");
var import_core12 = require("@tiptap/core");
var __defProp2 = Object.defineProperty;
var __export2 = (target, all) => {
  for (var name in all)
    __defProp2(target, name, { get: all[name], enumerable: true });
};
var ListItemName = "listItem";
var TextStyleName = "textStyle";
var bulletListInputRegex = /^\s*([-+*])\s$/;
var BulletList = import_core.Node.create({
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
    return ["ul", (0, import_core.mergeAttributes)(this.options.HTMLAttributes, HTMLAttributes), 0];
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
    let inputRule = (0, import_core.wrappingInputRule)({
      find: bulletListInputRegex,
      type: this.type
    });
    if (this.options.keepMarks || this.options.keepAttributes) {
      inputRule = (0, import_core.wrappingInputRule)({
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
var ListItem = import_core2.Node.create({
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
    return ["li", (0, import_core2.mergeAttributes)(this.options.HTMLAttributes, HTMLAttributes), 0];
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
__export2(listHelpers_exports, {
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
  const nodeType = (0, import_core4.getNodeType)(typeOrName, state.schema);
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
  const [, depth] = (0, import_core5.getNodeAtPosition)(state, typeOrName, listItemPos.$pos.pos + 4);
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
  const nodeType = (0, import_core7.getNodeType)(typeOrName, state.schema);
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
  if (!(0, import_core6.isNodeActive)(editor.state, name) && hasListBefore(editor.state, name, parentListTypes)) {
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
  if (!(0, import_core6.isNodeActive)(editor.state, name)) {
    return false;
  }
  if (!(0, import_core6.isAtStartOfNode)(editor.state)) {
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
  if (!(0, import_core8.isNodeActive)(editor.state, name)) {
    return false;
  }
  if (!(0, import_core8.isAtEndOfNode)(editor.state, name)) {
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
var ListKeymap = import_core3.Extension.create({
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
var OrderedList = import_core10.Node.create({
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
    return start === 1 ? ["ol", (0, import_core10.mergeAttributes)(this.options.HTMLAttributes, attributesWithoutStart), 0] : ["ol", (0, import_core10.mergeAttributes)(this.options.HTMLAttributes, HTMLAttributes), 0];
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
    let inputRule = (0, import_core10.wrappingInputRule)({
      find: orderedListInputRegex,
      type: this.type,
      getAttributes: (match) => ({ start: +match[1] }),
      joinPredicate: (match, node) => node.childCount + node.attrs.start === +match[1]
    });
    if (this.options.keepMarks || this.options.keepAttributes) {
      inputRule = (0, import_core10.wrappingInputRule)({
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
var TaskItem = import_core11.Node.create({
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
      (0, import_core11.mergeAttributes)(this.options.HTMLAttributes, HTMLAttributes, {
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
      (0, import_core11.wrappingInputRule)({
        find: inputRegex,
        type: this.type,
        getAttributes: (match) => ({
          checked: match[match.length - 1] === "x"
        })
      })
    ];
  }
});
var TaskList = import_core12.Node.create({
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
    return ["ul", (0, import_core12.mergeAttributes)(this.options.HTMLAttributes, HTMLAttributes, { "data-type": this.name }), 0];
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
var ListKit = import_core9.Extension.create({
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
var import_core13 = require("@tiptap/core");
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
    return ["ul", (0, import_core13.mergeAttributes)(this.options.HTMLAttributes, HTMLAttributes), 0];
  }
});

// src/components/tiptap-extensions/CustomOrderedList.ts
var import_core14 = require("@tiptap/core");
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
    return ["ol", (0, import_core14.mergeAttributes)(this.options.HTMLAttributes, HTMLAttributes), 0];
  }
});

// node_modules/@tiptap/extension-code-block/dist/index.js
var import_core15 = require("@tiptap/core");

// node_modules/prosemirror-model/dist/index.js
function findDiffStart(a, b, pos) {
  for (let i = 0; ; i++) {
    if (i == a.childCount || i == b.childCount)
      return a.childCount == b.childCount ? null : pos;
    let childA = a.child(i), childB = b.child(i);
    if (childA == childB) {
      pos += childA.nodeSize;
      continue;
    }
    if (!childA.sameMarkup(childB))
      return pos;
    if (childA.isText && childA.text != childB.text) {
      for (let j = 0; childA.text[j] == childB.text[j]; j++)
        pos++;
      return pos;
    }
    if (childA.content.size || childB.content.size) {
      let inner = findDiffStart(childA.content, childB.content, pos + 1);
      if (inner != null)
        return inner;
    }
    pos += childA.nodeSize;
  }
}
function findDiffEnd(a, b, posA, posB) {
  for (let iA = a.childCount, iB = b.childCount; ; ) {
    if (iA == 0 || iB == 0)
      return iA == iB ? null : { a: posA, b: posB };
    let childA = a.child(--iA), childB = b.child(--iB), size = childA.nodeSize;
    if (childA == childB) {
      posA -= size;
      posB -= size;
      continue;
    }
    if (!childA.sameMarkup(childB))
      return { a: posA, b: posB };
    if (childA.isText && childA.text != childB.text) {
      let same = 0, minSize = Math.min(childA.text.length, childB.text.length);
      while (same < minSize && childA.text[childA.text.length - same - 1] == childB.text[childB.text.length - same - 1]) {
        same++;
        posA--;
        posB--;
      }
      return { a: posA, b: posB };
    }
    if (childA.content.size || childB.content.size) {
      let inner = findDiffEnd(childA.content, childB.content, posA - 1, posB - 1);
      if (inner)
        return inner;
    }
    posA -= size;
    posB -= size;
  }
}
var Fragment = class _Fragment {
  /**
  @internal
  */
  constructor(content, size) {
    this.content = content;
    this.size = size || 0;
    if (size == null)
      for (let i = 0; i < content.length; i++)
        this.size += content[i].nodeSize;
  }
  /**
  Invoke a callback for all descendant nodes between the given two
  positions (relative to start of this fragment). Doesn't descend
  into a node when the callback returns `false`.
  */
  nodesBetween(from, to, f, nodeStart = 0, parent) {
    for (let i = 0, pos = 0; pos < to; i++) {
      let child = this.content[i], end = pos + child.nodeSize;
      if (end > from && f(child, nodeStart + pos, parent || null, i) !== false && child.content.size) {
        let start = pos + 1;
        child.nodesBetween(Math.max(0, from - start), Math.min(child.content.size, to - start), f, nodeStart + start);
      }
      pos = end;
    }
  }
  /**
  Call the given callback for every descendant node. `pos` will be
  relative to the start of the fragment. The callback may return
  `false` to prevent traversal of a given node's children.
  */
  descendants(f) {
    this.nodesBetween(0, this.size, f);
  }
  /**
  Extract the text between `from` and `to`. See the same method on
  [`Node`](https://prosemirror.net/docs/ref/#model.Node.textBetween).
  */
  textBetween(from, to, blockSeparator, leafText) {
    let text = "", first = true;
    this.nodesBetween(from, to, (node, pos) => {
      let nodeText = node.isText ? node.text.slice(Math.max(from, pos) - pos, to - pos) : !node.isLeaf ? "" : leafText ? typeof leafText === "function" ? leafText(node) : leafText : node.type.spec.leafText ? node.type.spec.leafText(node) : "";
      if (node.isBlock && (node.isLeaf && nodeText || node.isTextblock) && blockSeparator) {
        if (first)
          first = false;
        else
          text += blockSeparator;
      }
      text += nodeText;
    }, 0);
    return text;
  }
  /**
  Create a new fragment containing the combined content of this
  fragment and the other.
  */
  append(other) {
    if (!other.size)
      return this;
    if (!this.size)
      return other;
    let last = this.lastChild, first = other.firstChild, content = this.content.slice(), i = 0;
    if (last.isText && last.sameMarkup(first)) {
      content[content.length - 1] = last.withText(last.text + first.text);
      i = 1;
    }
    for (; i < other.content.length; i++)
      content.push(other.content[i]);
    return new _Fragment(content, this.size + other.size);
  }
  /**
  Cut out the sub-fragment between the two given positions.
  */
  cut(from, to = this.size) {
    if (from == 0 && to == this.size)
      return this;
    let result = [], size = 0;
    if (to > from)
      for (let i = 0, pos = 0; pos < to; i++) {
        let child = this.content[i], end = pos + child.nodeSize;
        if (end > from) {
          if (pos < from || end > to) {
            if (child.isText)
              child = child.cut(Math.max(0, from - pos), Math.min(child.text.length, to - pos));
            else
              child = child.cut(Math.max(0, from - pos - 1), Math.min(child.content.size, to - pos - 1));
          }
          result.push(child);
          size += child.nodeSize;
        }
        pos = end;
      }
    return new _Fragment(result, size);
  }
  /**
  @internal
  */
  cutByIndex(from, to) {
    if (from == to)
      return _Fragment.empty;
    if (from == 0 && to == this.content.length)
      return this;
    return new _Fragment(this.content.slice(from, to));
  }
  /**
  Create a new fragment in which the node at the given index is
  replaced by the given node.
  */
  replaceChild(index, node) {
    let current = this.content[index];
    if (current == node)
      return this;
    let copy = this.content.slice();
    let size = this.size + node.nodeSize - current.nodeSize;
    copy[index] = node;
    return new _Fragment(copy, size);
  }
  /**
  Create a new fragment by prepending the given node to this
  fragment.
  */
  addToStart(node) {
    return new _Fragment([node].concat(this.content), this.size + node.nodeSize);
  }
  /**
  Create a new fragment by appending the given node to this
  fragment.
  */
  addToEnd(node) {
    return new _Fragment(this.content.concat(node), this.size + node.nodeSize);
  }
  /**
  Compare this fragment to another one.
  */
  eq(other) {
    if (this.content.length != other.content.length)
      return false;
    for (let i = 0; i < this.content.length; i++)
      if (!this.content[i].eq(other.content[i]))
        return false;
    return true;
  }
  /**
  The first child of the fragment, or `null` if it is empty.
  */
  get firstChild() {
    return this.content.length ? this.content[0] : null;
  }
  /**
  The last child of the fragment, or `null` if it is empty.
  */
  get lastChild() {
    return this.content.length ? this.content[this.content.length - 1] : null;
  }
  /**
  The number of child nodes in this fragment.
  */
  get childCount() {
    return this.content.length;
  }
  /**
  Get the child node at the given index. Raise an error when the
  index is out of range.
  */
  child(index) {
    let found2 = this.content[index];
    if (!found2)
      throw new RangeError("Index " + index + " out of range for " + this);
    return found2;
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(index) {
    return this.content[index] || null;
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(f) {
    for (let i = 0, p = 0; i < this.content.length; i++) {
      let child = this.content[i];
      f(child, p, i);
      p += child.nodeSize;
    }
  }
  /**
  Find the first position at which this fragment and another
  fragment differ, or `null` if they are the same.
  */
  findDiffStart(other, pos = 0) {
    return findDiffStart(this, other, pos);
  }
  /**
  Find the first position, searching from the end, at which this
  fragment and the given fragment differ, or `null` if they are
  the same. Since this position will not be the same in both
  nodes, an object with two separate positions is returned.
  */
  findDiffEnd(other, pos = this.size, otherPos = other.size) {
    return findDiffEnd(this, other, pos, otherPos);
  }
  /**
  Find the index and inner offset corresponding to a given relative
  position in this fragment. The result object will be reused
  (overwritten) the next time the function is called. @internal
  */
  findIndex(pos) {
    if (pos == 0)
      return retIndex(0, pos);
    if (pos == this.size)
      return retIndex(this.content.length, pos);
    if (pos > this.size || pos < 0)
      throw new RangeError(`Position ${pos} outside of fragment (${this})`);
    for (let i = 0, curPos = 0; ; i++) {
      let cur = this.child(i), end = curPos + cur.nodeSize;
      if (end >= pos) {
        if (end == pos)
          return retIndex(i + 1, end);
        return retIndex(i, curPos);
      }
      curPos = end;
    }
  }
  /**
  Return a debugging string that describes this fragment.
  */
  toString() {
    return "<" + this.toStringInner() + ">";
  }
  /**
  @internal
  */
  toStringInner() {
    return this.content.join(", ");
  }
  /**
  Create a JSON-serializeable representation of this fragment.
  */
  toJSON() {
    return this.content.length ? this.content.map((n) => n.toJSON()) : null;
  }
  /**
  Deserialize a fragment from its JSON representation.
  */
  static fromJSON(schema, value) {
    if (!value)
      return _Fragment.empty;
    if (!Array.isArray(value))
      throw new RangeError("Invalid input for Fragment.fromJSON");
    return new _Fragment(value.map(schema.nodeFromJSON));
  }
  /**
  Build a fragment from an array of nodes. Ensures that adjacent
  text nodes with the same marks are joined together.
  */
  static fromArray(array) {
    if (!array.length)
      return _Fragment.empty;
    let joined, size = 0;
    for (let i = 0; i < array.length; i++) {
      let node = array[i];
      size += node.nodeSize;
      if (i && node.isText && array[i - 1].sameMarkup(node)) {
        if (!joined)
          joined = array.slice(0, i);
        joined[joined.length - 1] = node.withText(joined[joined.length - 1].text + node.text);
      } else if (joined) {
        joined.push(node);
      }
    }
    return new _Fragment(joined || array, size);
  }
  /**
  Create a fragment from something that can be interpreted as a
  set of nodes. For `null`, it returns the empty fragment. For a
  fragment, the fragment itself. For a node or array of nodes, a
  fragment containing those nodes.
  */
  static from(nodes) {
    if (!nodes)
      return _Fragment.empty;
    if (nodes instanceof _Fragment)
      return nodes;
    if (Array.isArray(nodes))
      return this.fromArray(nodes);
    if (nodes.attrs)
      return new _Fragment([nodes], nodes.nodeSize);
    throw new RangeError("Can not convert " + nodes + " to a Fragment" + (nodes.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
  }
};
Fragment.empty = new Fragment([], 0);
var found = { index: 0, offset: 0 };
function retIndex(index, offset) {
  found.index = index;
  found.offset = offset;
  return found;
}
function compareDeep(a, b) {
  if (a === b)
    return true;
  if (!(a && typeof a == "object") || !(b && typeof b == "object"))
    return false;
  let array = Array.isArray(a);
  if (Array.isArray(b) != array)
    return false;
  if (array) {
    if (a.length != b.length)
      return false;
    for (let i = 0; i < a.length; i++)
      if (!compareDeep(a[i], b[i]))
        return false;
  } else {
    for (let p in a)
      if (!(p in b) || !compareDeep(a[p], b[p]))
        return false;
    for (let p in b)
      if (!(p in a))
        return false;
  }
  return true;
}
var Mark = class _Mark {
  /**
  @internal
  */
  constructor(type, attrs) {
    this.type = type;
    this.attrs = attrs;
  }
  /**
  Given a set of marks, create a new set which contains this one as
  well, in the right position. If this mark is already in the set,
  the set itself is returned. If any marks that are set to be
  [exclusive](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) with this mark are present,
  those are replaced by this one.
  */
  addToSet(set) {
    let copy, placed = false;
    for (let i = 0; i < set.length; i++) {
      let other = set[i];
      if (this.eq(other))
        return set;
      if (this.type.excludes(other.type)) {
        if (!copy)
          copy = set.slice(0, i);
      } else if (other.type.excludes(this.type)) {
        return set;
      } else {
        if (!placed && other.type.rank > this.type.rank) {
          if (!copy)
            copy = set.slice(0, i);
          copy.push(this);
          placed = true;
        }
        if (copy)
          copy.push(other);
      }
    }
    if (!copy)
      copy = set.slice();
    if (!placed)
      copy.push(this);
    return copy;
  }
  /**
  Remove this mark from the given set, returning a new set. If this
  mark is not in the set, the set itself is returned.
  */
  removeFromSet(set) {
    for (let i = 0; i < set.length; i++)
      if (this.eq(set[i]))
        return set.slice(0, i).concat(set.slice(i + 1));
    return set;
  }
  /**
  Test whether this mark is in the given set of marks.
  */
  isInSet(set) {
    for (let i = 0; i < set.length; i++)
      if (this.eq(set[i]))
        return true;
    return false;
  }
  /**
  Test whether this mark has the same type and attributes as
  another mark.
  */
  eq(other) {
    return this == other || this.type == other.type && compareDeep(this.attrs, other.attrs);
  }
  /**
  Convert this mark to a JSON-serializeable representation.
  */
  toJSON() {
    let obj = { type: this.type.name };
    for (let _ in this.attrs) {
      obj.attrs = this.attrs;
      break;
    }
    return obj;
  }
  /**
  Deserialize a mark from JSON.
  */
  static fromJSON(schema, json) {
    if (!json)
      throw new RangeError("Invalid input for Mark.fromJSON");
    let type = schema.marks[json.type];
    if (!type)
      throw new RangeError(`There is no mark type ${json.type} in this schema`);
    let mark = type.create(json.attrs);
    type.checkAttrs(mark.attrs);
    return mark;
  }
  /**
  Test whether two sets of marks are identical.
  */
  static sameSet(a, b) {
    if (a == b)
      return true;
    if (a.length != b.length)
      return false;
    for (let i = 0; i < a.length; i++)
      if (!a[i].eq(b[i]))
        return false;
    return true;
  }
  /**
  Create a properly sorted mark set from null, a single mark, or an
  unsorted array of marks.
  */
  static setFrom(marks) {
    if (!marks || Array.isArray(marks) && marks.length == 0)
      return _Mark.none;
    if (marks instanceof _Mark)
      return [marks];
    let copy = marks.slice();
    copy.sort((a, b) => a.type.rank - b.type.rank);
    return copy;
  }
};
Mark.none = [];
var ReplaceError = class extends Error {
};
var Slice = class _Slice {
  /**
  Create a slice. When specifying a non-zero open depth, you must
  make sure that there are nodes of at least that depth at the
  appropriate side of the fragment—i.e. if the fragment is an
  empty paragraph node, `openStart` and `openEnd` can't be greater
  than 1.
  
  It is not necessary for the content of open nodes to conform to
  the schema's content constraints, though it should be a valid
  start/end/middle for such a node, depending on which sides are
  open.
  */
  constructor(content, openStart, openEnd) {
    this.content = content;
    this.openStart = openStart;
    this.openEnd = openEnd;
  }
  /**
  The size this slice would add when inserted into a document.
  */
  get size() {
    return this.content.size - this.openStart - this.openEnd;
  }
  /**
  @internal
  */
  insertAt(pos, fragment) {
    let content = insertInto(this.content, pos + this.openStart, fragment);
    return content && new _Slice(content, this.openStart, this.openEnd);
  }
  /**
  @internal
  */
  removeBetween(from, to) {
    return new _Slice(removeRange(this.content, from + this.openStart, to + this.openStart), this.openStart, this.openEnd);
  }
  /**
  Tests whether this slice is equal to another slice.
  */
  eq(other) {
    return this.content.eq(other.content) && this.openStart == other.openStart && this.openEnd == other.openEnd;
  }
  /**
  @internal
  */
  toString() {
    return this.content + "(" + this.openStart + "," + this.openEnd + ")";
  }
  /**
  Convert a slice to a JSON-serializable representation.
  */
  toJSON() {
    if (!this.content.size)
      return null;
    let json = { content: this.content.toJSON() };
    if (this.openStart > 0)
      json.openStart = this.openStart;
    if (this.openEnd > 0)
      json.openEnd = this.openEnd;
    return json;
  }
  /**
  Deserialize a slice from its JSON representation.
  */
  static fromJSON(schema, json) {
    if (!json)
      return _Slice.empty;
    let openStart = json.openStart || 0, openEnd = json.openEnd || 0;
    if (typeof openStart != "number" || typeof openEnd != "number")
      throw new RangeError("Invalid input for Slice.fromJSON");
    return new _Slice(Fragment.fromJSON(schema, json.content), openStart, openEnd);
  }
  /**
  Create a slice from a fragment by taking the maximum possible
  open value on both side of the fragment.
  */
  static maxOpen(fragment, openIsolating = true) {
    let openStart = 0, openEnd = 0;
    for (let n = fragment.firstChild; n && !n.isLeaf && (openIsolating || !n.type.spec.isolating); n = n.firstChild)
      openStart++;
    for (let n = fragment.lastChild; n && !n.isLeaf && (openIsolating || !n.type.spec.isolating); n = n.lastChild)
      openEnd++;
    return new _Slice(fragment, openStart, openEnd);
  }
};
Slice.empty = new Slice(Fragment.empty, 0, 0);
function removeRange(content, from, to) {
  let { index, offset } = content.findIndex(from), child = content.maybeChild(index);
  let { index: indexTo, offset: offsetTo } = content.findIndex(to);
  if (offset == from || child.isText) {
    if (offsetTo != to && !content.child(indexTo).isText)
      throw new RangeError("Removing non-flat range");
    return content.cut(0, from).append(content.cut(to));
  }
  if (index != indexTo)
    throw new RangeError("Removing non-flat range");
  return content.replaceChild(index, child.copy(removeRange(child.content, from - offset - 1, to - offset - 1)));
}
function insertInto(content, dist, insert, parent) {
  let { index, offset } = content.findIndex(dist), child = content.maybeChild(index);
  if (offset == dist || child.isText) {
    if (parent && !parent.canReplace(index, index, insert))
      return null;
    return content.cut(0, dist).append(insert).append(content.cut(dist));
  }
  let inner = insertInto(child.content, dist - offset - 1, insert);
  return inner && content.replaceChild(index, child.copy(inner));
}
function replace($from, $to, slice) {
  if (slice.openStart > $from.depth)
    throw new ReplaceError("Inserted content deeper than insertion position");
  if ($from.depth - slice.openStart != $to.depth - slice.openEnd)
    throw new ReplaceError("Inconsistent open depths");
  return replaceOuter($from, $to, slice, 0);
}
function replaceOuter($from, $to, slice, depth) {
  let index = $from.index(depth), node = $from.node(depth);
  if (index == $to.index(depth) && depth < $from.depth - slice.openStart) {
    let inner = replaceOuter($from, $to, slice, depth + 1);
    return node.copy(node.content.replaceChild(index, inner));
  } else if (!slice.content.size) {
    return close(node, replaceTwoWay($from, $to, depth));
  } else if (!slice.openStart && !slice.openEnd && $from.depth == depth && $to.depth == depth) {
    let parent = $from.parent, content = parent.content;
    return close(parent, content.cut(0, $from.parentOffset).append(slice.content).append(content.cut($to.parentOffset)));
  } else {
    let { start, end } = prepareSliceForReplace(slice, $from);
    return close(node, replaceThreeWay($from, start, end, $to, depth));
  }
}
function checkJoin(main, sub) {
  if (!sub.type.compatibleContent(main.type))
    throw new ReplaceError("Cannot join " + sub.type.name + " onto " + main.type.name);
}
function joinable($before, $after, depth) {
  let node = $before.node(depth);
  checkJoin(node, $after.node(depth));
  return node;
}
function addNode(child, target) {
  let last = target.length - 1;
  if (last >= 0 && child.isText && child.sameMarkup(target[last]))
    target[last] = child.withText(target[last].text + child.text);
  else
    target.push(child);
}
function addRange($start, $end, depth, target) {
  let node = ($end || $start).node(depth);
  let startIndex = 0, endIndex = $end ? $end.index(depth) : node.childCount;
  if ($start) {
    startIndex = $start.index(depth);
    if ($start.depth > depth) {
      startIndex++;
    } else if ($start.textOffset) {
      addNode($start.nodeAfter, target);
      startIndex++;
    }
  }
  for (let i = startIndex; i < endIndex; i++)
    addNode(node.child(i), target);
  if ($end && $end.depth == depth && $end.textOffset)
    addNode($end.nodeBefore, target);
}
function close(node, content) {
  node.type.checkContent(content);
  return node.copy(content);
}
function replaceThreeWay($from, $start, $end, $to, depth) {
  let openStart = $from.depth > depth && joinable($from, $start, depth + 1);
  let openEnd = $to.depth > depth && joinable($end, $to, depth + 1);
  let content = [];
  addRange(null, $from, depth, content);
  if (openStart && openEnd && $start.index(depth) == $end.index(depth)) {
    checkJoin(openStart, openEnd);
    addNode(close(openStart, replaceThreeWay($from, $start, $end, $to, depth + 1)), content);
  } else {
    if (openStart)
      addNode(close(openStart, replaceTwoWay($from, $start, depth + 1)), content);
    addRange($start, $end, depth, content);
    if (openEnd)
      addNode(close(openEnd, replaceTwoWay($end, $to, depth + 1)), content);
  }
  addRange($to, null, depth, content);
  return new Fragment(content);
}
function replaceTwoWay($from, $to, depth) {
  let content = [];
  addRange(null, $from, depth, content);
  if ($from.depth > depth) {
    let type = joinable($from, $to, depth + 1);
    addNode(close(type, replaceTwoWay($from, $to, depth + 1)), content);
  }
  addRange($to, null, depth, content);
  return new Fragment(content);
}
function prepareSliceForReplace(slice, $along) {
  let extra = $along.depth - slice.openStart, parent = $along.node(extra);
  let node = parent.copy(slice.content);
  for (let i = extra - 1; i >= 0; i--)
    node = $along.node(i).copy(Fragment.from(node));
  return {
    start: node.resolveNoCache(slice.openStart + extra),
    end: node.resolveNoCache(node.content.size - slice.openEnd - extra)
  };
}
var ResolvedPos = class _ResolvedPos {
  /**
  @internal
  */
  constructor(pos, path, parentOffset) {
    this.pos = pos;
    this.path = path;
    this.parentOffset = parentOffset;
    this.depth = path.length / 3 - 1;
  }
  /**
  @internal
  */
  resolveDepth(val) {
    if (val == null)
      return this.depth;
    if (val < 0)
      return this.depth + val;
    return val;
  }
  /**
  The parent node that the position points into. Note that even if
  a position points into a text node, that node is not considered
  the parent—text nodes are ‘flat’ in this model, and have no content.
  */
  get parent() {
    return this.node(this.depth);
  }
  /**
  The root node in which the position was resolved.
  */
  get doc() {
    return this.node(0);
  }
  /**
  The ancestor node at the given level. `p.node(p.depth)` is the
  same as `p.parent`.
  */
  node(depth) {
    return this.path[this.resolveDepth(depth) * 3];
  }
  /**
  The index into the ancestor at the given level. If this points
  at the 3rd node in the 2nd paragraph on the top level, for
  example, `p.index(0)` is 1 and `p.index(1)` is 2.
  */
  index(depth) {
    return this.path[this.resolveDepth(depth) * 3 + 1];
  }
  /**
  The index pointing after this position into the ancestor at the
  given level.
  */
  indexAfter(depth) {
    depth = this.resolveDepth(depth);
    return this.index(depth) + (depth == this.depth && !this.textOffset ? 0 : 1);
  }
  /**
  The (absolute) position at the start of the node at the given
  level.
  */
  start(depth) {
    depth = this.resolveDepth(depth);
    return depth == 0 ? 0 : this.path[depth * 3 - 1] + 1;
  }
  /**
  The (absolute) position at the end of the node at the given
  level.
  */
  end(depth) {
    depth = this.resolveDepth(depth);
    return this.start(depth) + this.node(depth).content.size;
  }
  /**
  The (absolute) position directly before the wrapping node at the
  given level, or, when `depth` is `this.depth + 1`, the original
  position.
  */
  before(depth) {
    depth = this.resolveDepth(depth);
    if (!depth)
      throw new RangeError("There is no position before the top-level node");
    return depth == this.depth + 1 ? this.pos : this.path[depth * 3 - 1];
  }
  /**
  The (absolute) position directly after the wrapping node at the
  given level, or the original position when `depth` is `this.depth + 1`.
  */
  after(depth) {
    depth = this.resolveDepth(depth);
    if (!depth)
      throw new RangeError("There is no position after the top-level node");
    return depth == this.depth + 1 ? this.pos : this.path[depth * 3 - 1] + this.path[depth * 3].nodeSize;
  }
  /**
  When this position points into a text node, this returns the
  distance between the position and the start of the text node.
  Will be zero for positions that point between nodes.
  */
  get textOffset() {
    return this.pos - this.path[this.path.length - 1];
  }
  /**
  Get the node directly after the position, if any. If the position
  points into a text node, only the part of that node after the
  position is returned.
  */
  get nodeAfter() {
    let parent = this.parent, index = this.index(this.depth);
    if (index == parent.childCount)
      return null;
    let dOff = this.pos - this.path[this.path.length - 1], child = parent.child(index);
    return dOff ? parent.child(index).cut(dOff) : child;
  }
  /**
  Get the node directly before the position, if any. If the
  position points into a text node, only the part of that node
  before the position is returned.
  */
  get nodeBefore() {
    let index = this.index(this.depth);
    let dOff = this.pos - this.path[this.path.length - 1];
    if (dOff)
      return this.parent.child(index).cut(0, dOff);
    return index == 0 ? null : this.parent.child(index - 1);
  }
  /**
  Get the position at the given index in the parent node at the
  given depth (which defaults to `this.depth`).
  */
  posAtIndex(index, depth) {
    depth = this.resolveDepth(depth);
    let node = this.path[depth * 3], pos = depth == 0 ? 0 : this.path[depth * 3 - 1] + 1;
    for (let i = 0; i < index; i++)
      pos += node.child(i).nodeSize;
    return pos;
  }
  /**
  Get the marks at this position, factoring in the surrounding
  marks' [`inclusive`](https://prosemirror.net/docs/ref/#model.MarkSpec.inclusive) property. If the
  position is at the start of a non-empty node, the marks of the
  node after it (if any) are returned.
  */
  marks() {
    let parent = this.parent, index = this.index();
    if (parent.content.size == 0)
      return Mark.none;
    if (this.textOffset)
      return parent.child(index).marks;
    let main = parent.maybeChild(index - 1), other = parent.maybeChild(index);
    if (!main) {
      let tmp = main;
      main = other;
      other = tmp;
    }
    let marks = main.marks;
    for (var i = 0; i < marks.length; i++)
      if (marks[i].type.spec.inclusive === false && (!other || !marks[i].isInSet(other.marks)))
        marks = marks[i--].removeFromSet(marks);
    return marks;
  }
  /**
  Get the marks after the current position, if any, except those
  that are non-inclusive and not present at position `$end`. This
  is mostly useful for getting the set of marks to preserve after a
  deletion. Will return `null` if this position is at the end of
  its parent node or its parent node isn't a textblock (in which
  case no marks should be preserved).
  */
  marksAcross($end) {
    let after = this.parent.maybeChild(this.index());
    if (!after || !after.isInline)
      return null;
    let marks = after.marks, next = $end.parent.maybeChild($end.index());
    for (var i = 0; i < marks.length; i++)
      if (marks[i].type.spec.inclusive === false && (!next || !marks[i].isInSet(next.marks)))
        marks = marks[i--].removeFromSet(marks);
    return marks;
  }
  /**
  The depth up to which this position and the given (non-resolved)
  position share the same parent nodes.
  */
  sharedDepth(pos) {
    for (let depth = this.depth; depth > 0; depth--)
      if (this.start(depth) <= pos && this.end(depth) >= pos)
        return depth;
    return 0;
  }
  /**
  Returns a range based on the place where this position and the
  given position diverge around block content. If both point into
  the same textblock, for example, a range around that textblock
  will be returned. If they point into different blocks, the range
  around those blocks in their shared ancestor is returned. You can
  pass in an optional predicate that will be called with a parent
  node to see if a range into that parent is acceptable.
  */
  blockRange(other = this, pred) {
    if (other.pos < this.pos)
      return other.blockRange(this);
    for (let d = this.depth - (this.parent.inlineContent || this.pos == other.pos ? 1 : 0); d >= 0; d--)
      if (other.pos <= this.end(d) && (!pred || pred(this.node(d))))
        return new NodeRange(this, other, d);
    return null;
  }
  /**
  Query whether the given position shares the same parent node.
  */
  sameParent(other) {
    return this.pos - this.parentOffset == other.pos - other.parentOffset;
  }
  /**
  Return the greater of this and the given position.
  */
  max(other) {
    return other.pos > this.pos ? other : this;
  }
  /**
  Return the smaller of this and the given position.
  */
  min(other) {
    return other.pos < this.pos ? other : this;
  }
  /**
  @internal
  */
  toString() {
    let str = "";
    for (let i = 1; i <= this.depth; i++)
      str += (str ? "/" : "") + this.node(i).type.name + "_" + this.index(i - 1);
    return str + ":" + this.parentOffset;
  }
  /**
  @internal
  */
  static resolve(doc, pos) {
    if (!(pos >= 0 && pos <= doc.content.size))
      throw new RangeError("Position " + pos + " out of range");
    let path = [];
    let start = 0, parentOffset = pos;
    for (let node = doc; ; ) {
      let { index, offset } = node.content.findIndex(parentOffset);
      let rem = parentOffset - offset;
      path.push(node, index, start + offset);
      if (!rem)
        break;
      node = node.child(index);
      if (node.isText)
        break;
      parentOffset = rem - 1;
      start += offset + 1;
    }
    return new _ResolvedPos(pos, path, parentOffset);
  }
  /**
  @internal
  */
  static resolveCached(doc, pos) {
    let cache = resolveCache.get(doc);
    if (cache) {
      for (let i = 0; i < cache.elts.length; i++) {
        let elt = cache.elts[i];
        if (elt.pos == pos)
          return elt;
      }
    } else {
      resolveCache.set(doc, cache = new ResolveCache());
    }
    let result = cache.elts[cache.i] = _ResolvedPos.resolve(doc, pos);
    cache.i = (cache.i + 1) % resolveCacheSize;
    return result;
  }
};
var ResolveCache = class {
  constructor() {
    this.elts = [];
    this.i = 0;
  }
};
var resolveCacheSize = 12;
var resolveCache = /* @__PURE__ */ new WeakMap();
var NodeRange = class {
  /**
  Construct a node range. `$from` and `$to` should point into the
  same node until at least the given `depth`, since a node range
  denotes an adjacent set of nodes in a single parent node.
  */
  constructor($from, $to, depth) {
    this.$from = $from;
    this.$to = $to;
    this.depth = depth;
  }
  /**
  The position at the start of the range.
  */
  get start() {
    return this.$from.before(this.depth + 1);
  }
  /**
  The position at the end of the range.
  */
  get end() {
    return this.$to.after(this.depth + 1);
  }
  /**
  The parent node that the range points into.
  */
  get parent() {
    return this.$from.node(this.depth);
  }
  /**
  The start index of the range in the parent node.
  */
  get startIndex() {
    return this.$from.index(this.depth);
  }
  /**
  The end index of the range in the parent node.
  */
  get endIndex() {
    return this.$to.indexAfter(this.depth);
  }
};
var emptyAttrs = /* @__PURE__ */ Object.create(null);
var Node6 = class _Node {
  /**
  @internal
  */
  constructor(type, attrs, content, marks = Mark.none) {
    this.type = type;
    this.attrs = attrs;
    this.marks = marks;
    this.content = content || Fragment.empty;
  }
  /**
  The array of this node's child nodes.
  */
  get children() {
    return this.content.content;
  }
  /**
  The size of this node, as defined by the integer-based [indexing
  scheme](https://prosemirror.net/docs/guide/#doc.indexing). For text nodes, this is the
  amount of characters. For other leaf nodes, it is one. For
  non-leaf nodes, it is the size of the content plus two (the
  start and end token).
  */
  get nodeSize() {
    return this.isLeaf ? 1 : 2 + this.content.size;
  }
  /**
  The number of children that the node has.
  */
  get childCount() {
    return this.content.childCount;
  }
  /**
  Get the child node at the given index. Raises an error when the
  index is out of range.
  */
  child(index) {
    return this.content.child(index);
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(index) {
    return this.content.maybeChild(index);
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(f) {
    this.content.forEach(f);
  }
  /**
  Invoke a callback for all descendant nodes recursively between
  the given two positions that are relative to start of this
  node's content. The callback is invoked with the node, its
  position relative to the original node (method receiver),
  its parent node, and its child index. When the callback returns
  false for a given node, that node's children will not be
  recursed over. The last parameter can be used to specify a
  starting position to count from.
  */
  nodesBetween(from, to, f, startPos = 0) {
    this.content.nodesBetween(from, to, f, startPos, this);
  }
  /**
  Call the given callback for every descendant node. Doesn't
  descend into a node when the callback returns `false`.
  */
  descendants(f) {
    this.nodesBetween(0, this.content.size, f);
  }
  /**
  Concatenates all the text nodes found in this fragment and its
  children.
  */
  get textContent() {
    return this.isLeaf && this.type.spec.leafText ? this.type.spec.leafText(this) : this.textBetween(0, this.content.size, "");
  }
  /**
  Get all text between positions `from` and `to`. When
  `blockSeparator` is given, it will be inserted to separate text
  from different block nodes. If `leafText` is given, it'll be
  inserted for every non-text leaf node encountered, otherwise
  [`leafText`](https://prosemirror.net/docs/ref/#model.NodeSpec.leafText) will be used.
  */
  textBetween(from, to, blockSeparator, leafText) {
    return this.content.textBetween(from, to, blockSeparator, leafText);
  }
  /**
  Returns this node's first child, or `null` if there are no
  children.
  */
  get firstChild() {
    return this.content.firstChild;
  }
  /**
  Returns this node's last child, or `null` if there are no
  children.
  */
  get lastChild() {
    return this.content.lastChild;
  }
  /**
  Test whether two nodes represent the same piece of document.
  */
  eq(other) {
    return this == other || this.sameMarkup(other) && this.content.eq(other.content);
  }
  /**
  Compare the markup (type, attributes, and marks) of this node to
  those of another. Returns `true` if both have the same markup.
  */
  sameMarkup(other) {
    return this.hasMarkup(other.type, other.attrs, other.marks);
  }
  /**
  Check whether this node's markup correspond to the given type,
  attributes, and marks.
  */
  hasMarkup(type, attrs, marks) {
    return this.type == type && compareDeep(this.attrs, attrs || type.defaultAttrs || emptyAttrs) && Mark.sameSet(this.marks, marks || Mark.none);
  }
  /**
  Create a new node with the same markup as this node, containing
  the given content (or empty, if no content is given).
  */
  copy(content = null) {
    if (content == this.content)
      return this;
    return new _Node(this.type, this.attrs, content, this.marks);
  }
  /**
  Create a copy of this node, with the given set of marks instead
  of the node's own marks.
  */
  mark(marks) {
    return marks == this.marks ? this : new _Node(this.type, this.attrs, this.content, marks);
  }
  /**
  Create a copy of this node with only the content between the
  given positions. If `to` is not given, it defaults to the end of
  the node.
  */
  cut(from, to = this.content.size) {
    if (from == 0 && to == this.content.size)
      return this;
    return this.copy(this.content.cut(from, to));
  }
  /**
  Cut out the part of the document between the given positions, and
  return it as a `Slice` object.
  */
  slice(from, to = this.content.size, includeParents = false) {
    if (from == to)
      return Slice.empty;
    let $from = this.resolve(from), $to = this.resolve(to);
    let depth = includeParents ? 0 : $from.sharedDepth(to);
    let start = $from.start(depth), node = $from.node(depth);
    let content = node.content.cut($from.pos - start, $to.pos - start);
    return new Slice(content, $from.depth - depth, $to.depth - depth);
  }
  /**
  Replace the part of the document between the given positions with
  the given slice. The slice must 'fit', meaning its open sides
  must be able to connect to the surrounding content, and its
  content nodes must be valid children for the node they are placed
  into. If any of this is violated, an error of type
  [`ReplaceError`](https://prosemirror.net/docs/ref/#model.ReplaceError) is thrown.
  */
  replace(from, to, slice) {
    return replace(this.resolve(from), this.resolve(to), slice);
  }
  /**
  Find the node directly after the given position.
  */
  nodeAt(pos) {
    for (let node = this; ; ) {
      let { index, offset } = node.content.findIndex(pos);
      node = node.maybeChild(index);
      if (!node)
        return null;
      if (offset == pos || node.isText)
        return node;
      pos -= offset + 1;
    }
  }
  /**
  Find the (direct) child node after the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childAfter(pos) {
    let { index, offset } = this.content.findIndex(pos);
    return { node: this.content.maybeChild(index), index, offset };
  }
  /**
  Find the (direct) child node before the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childBefore(pos) {
    if (pos == 0)
      return { node: null, index: 0, offset: 0 };
    let { index, offset } = this.content.findIndex(pos);
    if (offset < pos)
      return { node: this.content.child(index), index, offset };
    let node = this.content.child(index - 1);
    return { node, index: index - 1, offset: offset - node.nodeSize };
  }
  /**
  Resolve the given position in the document, returning an
  [object](https://prosemirror.net/docs/ref/#model.ResolvedPos) with information about its context.
  */
  resolve(pos) {
    return ResolvedPos.resolveCached(this, pos);
  }
  /**
  @internal
  */
  resolveNoCache(pos) {
    return ResolvedPos.resolve(this, pos);
  }
  /**
  Test whether a given mark or mark type occurs in this document
  between the two given positions.
  */
  rangeHasMark(from, to, type) {
    let found2 = false;
    if (to > from)
      this.nodesBetween(from, to, (node) => {
        if (type.isInSet(node.marks))
          found2 = true;
        return !found2;
      });
    return found2;
  }
  /**
  True when this is a block (non-inline node)
  */
  get isBlock() {
    return this.type.isBlock;
  }
  /**
  True when this is a textblock node, a block node with inline
  content.
  */
  get isTextblock() {
    return this.type.isTextblock;
  }
  /**
  True when this node allows inline content.
  */
  get inlineContent() {
    return this.type.inlineContent;
  }
  /**
  True when this is an inline node (a text node or a node that can
  appear among text).
  */
  get isInline() {
    return this.type.isInline;
  }
  /**
  True when this is a text node.
  */
  get isText() {
    return this.type.isText;
  }
  /**
  True when this is a leaf node.
  */
  get isLeaf() {
    return this.type.isLeaf;
  }
  /**
  True when this is an atom, i.e. when it does not have directly
  editable content. This is usually the same as `isLeaf`, but can
  be configured with the [`atom` property](https://prosemirror.net/docs/ref/#model.NodeSpec.atom)
  on a node's spec (typically used when the node is displayed as
  an uneditable [node view](https://prosemirror.net/docs/ref/#view.NodeView)).
  */
  get isAtom() {
    return this.type.isAtom;
  }
  /**
  Return a string representation of this node for debugging
  purposes.
  */
  toString() {
    if (this.type.spec.toDebugString)
      return this.type.spec.toDebugString(this);
    let name = this.type.name;
    if (this.content.size)
      name += "(" + this.content.toStringInner() + ")";
    return wrapMarks(this.marks, name);
  }
  /**
  Get the content match in this node at the given index.
  */
  contentMatchAt(index) {
    let match = this.type.contentMatch.matchFragment(this.content, 0, index);
    if (!match)
      throw new Error("Called contentMatchAt on a node with invalid content");
    return match;
  }
  /**
  Test whether replacing the range between `from` and `to` (by
  child index) with the given replacement fragment (which defaults
  to the empty fragment) would leave the node's content valid. You
  can optionally pass `start` and `end` indices into the
  replacement fragment.
  */
  canReplace(from, to, replacement = Fragment.empty, start = 0, end = replacement.childCount) {
    let one = this.contentMatchAt(from).matchFragment(replacement, start, end);
    let two = one && one.matchFragment(this.content, to);
    if (!two || !two.validEnd)
      return false;
    for (let i = start; i < end; i++)
      if (!this.type.allowsMarks(replacement.child(i).marks))
        return false;
    return true;
  }
  /**
  Test whether replacing the range `from` to `to` (by index) with
  a node of the given type would leave the node's content valid.
  */
  canReplaceWith(from, to, type, marks) {
    if (marks && !this.type.allowsMarks(marks))
      return false;
    let start = this.contentMatchAt(from).matchType(type);
    let end = start && start.matchFragment(this.content, to);
    return end ? end.validEnd : false;
  }
  /**
  Test whether the given node's content could be appended to this
  node. If that node is empty, this will only return true if there
  is at least one node type that can appear in both nodes (to avoid
  merging completely incompatible nodes).
  */
  canAppend(other) {
    if (other.content.size)
      return this.canReplace(this.childCount, this.childCount, other.content);
    else
      return this.type.compatibleContent(other.type);
  }
  /**
  Check whether this node and its descendants conform to the
  schema, and raise an exception when they do not.
  */
  check() {
    this.type.checkContent(this.content);
    this.type.checkAttrs(this.attrs);
    let copy = Mark.none;
    for (let i = 0; i < this.marks.length; i++) {
      let mark = this.marks[i];
      mark.type.checkAttrs(mark.attrs);
      copy = mark.addToSet(copy);
    }
    if (!Mark.sameSet(copy, this.marks))
      throw new RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map((m) => m.type.name)}`);
    this.content.forEach((node) => node.check());
  }
  /**
  Return a JSON-serializeable representation of this node.
  */
  toJSON() {
    let obj = { type: this.type.name };
    for (let _ in this.attrs) {
      obj.attrs = this.attrs;
      break;
    }
    if (this.content.size)
      obj.content = this.content.toJSON();
    if (this.marks.length)
      obj.marks = this.marks.map((n) => n.toJSON());
    return obj;
  }
  /**
  Deserialize a node from its JSON representation.
  */
  static fromJSON(schema, json) {
    if (!json)
      throw new RangeError("Invalid input for Node.fromJSON");
    let marks = void 0;
    if (json.marks) {
      if (!Array.isArray(json.marks))
        throw new RangeError("Invalid mark data for Node.fromJSON");
      marks = json.marks.map(schema.markFromJSON);
    }
    if (json.type == "text") {
      if (typeof json.text != "string")
        throw new RangeError("Invalid text node in JSON");
      return schema.text(json.text, marks);
    }
    let content = Fragment.fromJSON(schema, json.content);
    let node = schema.nodeType(json.type).create(json.attrs, content, marks);
    node.type.checkAttrs(node.attrs);
    return node;
  }
};
Node6.prototype.text = void 0;
function wrapMarks(marks, str) {
  for (let i = marks.length - 1; i >= 0; i--)
    str = marks[i].type.name + "(" + str + ")";
  return str;
}
var ContentMatch = class _ContentMatch {
  /**
  @internal
  */
  constructor(validEnd) {
    this.validEnd = validEnd;
    this.next = [];
    this.wrapCache = [];
  }
  /**
  @internal
  */
  static parse(string, nodeTypes) {
    let stream = new TokenStream(string, nodeTypes);
    if (stream.next == null)
      return _ContentMatch.empty;
    let expr = parseExpr(stream);
    if (stream.next)
      stream.err("Unexpected trailing text");
    let match = dfa(nfa(expr));
    checkForDeadEnds(match, stream);
    return match;
  }
  /**
  Match a node type, returning a match after that node if
  successful.
  */
  matchType(type) {
    for (let i = 0; i < this.next.length; i++)
      if (this.next[i].type == type)
        return this.next[i].next;
    return null;
  }
  /**
  Try to match a fragment. Returns the resulting match when
  successful.
  */
  matchFragment(frag, start = 0, end = frag.childCount) {
    let cur = this;
    for (let i = start; cur && i < end; i++)
      cur = cur.matchType(frag.child(i).type);
    return cur;
  }
  /**
  @internal
  */
  get inlineContent() {
    return this.next.length != 0 && this.next[0].type.isInline;
  }
  /**
  Get the first matching node type at this match position that can
  be generated.
  */
  get defaultType() {
    for (let i = 0; i < this.next.length; i++) {
      let { type } = this.next[i];
      if (!(type.isText || type.hasRequiredAttrs()))
        return type;
    }
    return null;
  }
  /**
  @internal
  */
  compatible(other) {
    for (let i = 0; i < this.next.length; i++)
      for (let j = 0; j < other.next.length; j++)
        if (this.next[i].type == other.next[j].type)
          return true;
    return false;
  }
  /**
  Try to match the given fragment, and if that fails, see if it can
  be made to match by inserting nodes in front of it. When
  successful, return a fragment of inserted nodes (which may be
  empty if nothing had to be inserted). When `toEnd` is true, only
  return a fragment if the resulting match goes to the end of the
  content expression.
  */
  fillBefore(after, toEnd = false, startIndex = 0) {
    let seen = [this];
    function search(match, types) {
      let finished = match.matchFragment(after, startIndex);
      if (finished && (!toEnd || finished.validEnd))
        return Fragment.from(types.map((tp) => tp.createAndFill()));
      for (let i = 0; i < match.next.length; i++) {
        let { type, next } = match.next[i];
        if (!(type.isText || type.hasRequiredAttrs()) && seen.indexOf(next) == -1) {
          seen.push(next);
          let found2 = search(next, types.concat(type));
          if (found2)
            return found2;
        }
      }
      return null;
    }
    return search(this, []);
  }
  /**
  Find a set of wrapping node types that would allow a node of the
  given type to appear at this position. The result may be empty
  (when it fits directly) and will be null when no such wrapping
  exists.
  */
  findWrapping(target) {
    for (let i = 0; i < this.wrapCache.length; i += 2)
      if (this.wrapCache[i] == target)
        return this.wrapCache[i + 1];
    let computed = this.computeWrapping(target);
    this.wrapCache.push(target, computed);
    return computed;
  }
  /**
  @internal
  */
  computeWrapping(target) {
    let seen = /* @__PURE__ */ Object.create(null), active = [{ match: this, type: null, via: null }];
    while (active.length) {
      let current = active.shift(), match = current.match;
      if (match.matchType(target)) {
        let result = [];
        for (let obj = current; obj.type; obj = obj.via)
          result.push(obj.type);
        return result.reverse();
      }
      for (let i = 0; i < match.next.length; i++) {
        let { type, next } = match.next[i];
        if (!type.isLeaf && !type.hasRequiredAttrs() && !(type.name in seen) && (!current.type || next.validEnd)) {
          active.push({ match: type.contentMatch, type, via: current });
          seen[type.name] = true;
        }
      }
    }
    return null;
  }
  /**
  The number of outgoing edges this node has in the finite
  automaton that describes the content expression.
  */
  get edgeCount() {
    return this.next.length;
  }
  /**
  Get the _n_​th outgoing edge from this node in the finite
  automaton that describes the content expression.
  */
  edge(n) {
    if (n >= this.next.length)
      throw new RangeError(`There's no ${n}th edge in this content match`);
    return this.next[n];
  }
  /**
  @internal
  */
  toString() {
    let seen = [];
    function scan(m) {
      seen.push(m);
      for (let i = 0; i < m.next.length; i++)
        if (seen.indexOf(m.next[i].next) == -1)
          scan(m.next[i].next);
    }
    scan(this);
    return seen.map((m, i) => {
      let out = i + (m.validEnd ? "*" : " ") + " ";
      for (let i2 = 0; i2 < m.next.length; i2++)
        out += (i2 ? ", " : "") + m.next[i2].type.name + "->" + seen.indexOf(m.next[i2].next);
      return out;
    }).join("\n");
  }
};
ContentMatch.empty = new ContentMatch(true);
var TokenStream = class {
  constructor(string, nodeTypes) {
    this.string = string;
    this.nodeTypes = nodeTypes;
    this.inline = null;
    this.pos = 0;
    this.tokens = string.split(/\s*(?=\b|\W|$)/);
    if (this.tokens[this.tokens.length - 1] == "")
      this.tokens.pop();
    if (this.tokens[0] == "")
      this.tokens.shift();
  }
  get next() {
    return this.tokens[this.pos];
  }
  eat(tok) {
    return this.next == tok && (this.pos++ || true);
  }
  err(str) {
    throw new SyntaxError(str + " (in content expression '" + this.string + "')");
  }
};
function parseExpr(stream) {
  let exprs = [];
  do {
    exprs.push(parseExprSeq(stream));
  } while (stream.eat("|"));
  return exprs.length == 1 ? exprs[0] : { type: "choice", exprs };
}
function parseExprSeq(stream) {
  let exprs = [];
  do {
    exprs.push(parseExprSubscript(stream));
  } while (stream.next && stream.next != ")" && stream.next != "|");
  return exprs.length == 1 ? exprs[0] : { type: "seq", exprs };
}
function parseExprSubscript(stream) {
  let expr = parseExprAtom(stream);
  for (; ; ) {
    if (stream.eat("+"))
      expr = { type: "plus", expr };
    else if (stream.eat("*"))
      expr = { type: "star", expr };
    else if (stream.eat("?"))
      expr = { type: "opt", expr };
    else if (stream.eat("{"))
      expr = parseExprRange(stream, expr);
    else
      break;
  }
  return expr;
}
function parseNum(stream) {
  if (/\D/.test(stream.next))
    stream.err("Expected number, got '" + stream.next + "'");
  let result = Number(stream.next);
  stream.pos++;
  return result;
}
function parseExprRange(stream, expr) {
  let min = parseNum(stream), max = min;
  if (stream.eat(",")) {
    if (stream.next != "}")
      max = parseNum(stream);
    else
      max = -1;
  }
  if (!stream.eat("}"))
    stream.err("Unclosed braced range");
  return { type: "range", min, max, expr };
}
function resolveName(stream, name) {
  let types = stream.nodeTypes, type = types[name];
  if (type)
    return [type];
  let result = [];
  for (let typeName in types) {
    let type2 = types[typeName];
    if (type2.isInGroup(name))
      result.push(type2);
  }
  if (result.length == 0)
    stream.err("No node type or group '" + name + "' found");
  return result;
}
function parseExprAtom(stream) {
  if (stream.eat("(")) {
    let expr = parseExpr(stream);
    if (!stream.eat(")"))
      stream.err("Missing closing paren");
    return expr;
  } else if (!/\W/.test(stream.next)) {
    let exprs = resolveName(stream, stream.next).map((type) => {
      if (stream.inline == null)
        stream.inline = type.isInline;
      else if (stream.inline != type.isInline)
        stream.err("Mixing inline and block content");
      return { type: "name", value: type };
    });
    stream.pos++;
    return exprs.length == 1 ? exprs[0] : { type: "choice", exprs };
  } else {
    stream.err("Unexpected token '" + stream.next + "'");
  }
}
function nfa(expr) {
  let nfa2 = [[]];
  connect(compile(expr, 0), node());
  return nfa2;
  function node() {
    return nfa2.push([]) - 1;
  }
  function edge(from, to, term) {
    let edge2 = { term, to };
    nfa2[from].push(edge2);
    return edge2;
  }
  function connect(edges, to) {
    edges.forEach((edge2) => edge2.to = to);
  }
  function compile(expr2, from) {
    if (expr2.type == "choice") {
      return expr2.exprs.reduce((out, expr3) => out.concat(compile(expr3, from)), []);
    } else if (expr2.type == "seq") {
      for (let i = 0; ; i++) {
        let next = compile(expr2.exprs[i], from);
        if (i == expr2.exprs.length - 1)
          return next;
        connect(next, from = node());
      }
    } else if (expr2.type == "star") {
      let loop = node();
      edge(from, loop);
      connect(compile(expr2.expr, loop), loop);
      return [edge(loop)];
    } else if (expr2.type == "plus") {
      let loop = node();
      connect(compile(expr2.expr, from), loop);
      connect(compile(expr2.expr, loop), loop);
      return [edge(loop)];
    } else if (expr2.type == "opt") {
      return [edge(from)].concat(compile(expr2.expr, from));
    } else if (expr2.type == "range") {
      let cur = from;
      for (let i = 0; i < expr2.min; i++) {
        let next = node();
        connect(compile(expr2.expr, cur), next);
        cur = next;
      }
      if (expr2.max == -1) {
        connect(compile(expr2.expr, cur), cur);
      } else {
        for (let i = expr2.min; i < expr2.max; i++) {
          let next = node();
          edge(cur, next);
          connect(compile(expr2.expr, cur), next);
          cur = next;
        }
      }
      return [edge(cur)];
    } else if (expr2.type == "name") {
      return [edge(from, void 0, expr2.value)];
    } else {
      throw new Error("Unknown expr type");
    }
  }
}
function cmp(a, b) {
  return b - a;
}
function nullFrom(nfa2, node) {
  let result = [];
  scan(node);
  return result.sort(cmp);
  function scan(node2) {
    let edges = nfa2[node2];
    if (edges.length == 1 && !edges[0].term)
      return scan(edges[0].to);
    result.push(node2);
    for (let i = 0; i < edges.length; i++) {
      let { term, to } = edges[i];
      if (!term && result.indexOf(to) == -1)
        scan(to);
    }
  }
}
function dfa(nfa2) {
  let labeled = /* @__PURE__ */ Object.create(null);
  return explore(nullFrom(nfa2, 0));
  function explore(states) {
    let out = [];
    states.forEach((node) => {
      nfa2[node].forEach(({ term, to }) => {
        if (!term)
          return;
        let set;
        for (let i = 0; i < out.length; i++)
          if (out[i][0] == term)
            set = out[i][1];
        nullFrom(nfa2, to).forEach((node2) => {
          if (!set)
            out.push([term, set = []]);
          if (set.indexOf(node2) == -1)
            set.push(node2);
        });
      });
    });
    let state = labeled[states.join(",")] = new ContentMatch(states.indexOf(nfa2.length - 1) > -1);
    for (let i = 0; i < out.length; i++) {
      let states2 = out[i][1].sort(cmp);
      state.next.push({ type: out[i][0], next: labeled[states2.join(",")] || explore(states2) });
    }
    return state;
  }
}
function checkForDeadEnds(match, stream) {
  for (let i = 0, work = [match]; i < work.length; i++) {
    let state = work[i], dead = !state.validEnd, nodes = [];
    for (let j = 0; j < state.next.length; j++) {
      let { type, next } = state.next[j];
      nodes.push(type.name);
      if (dead && !(type.isText || type.hasRequiredAttrs()))
        dead = false;
      if (work.indexOf(next) == -1)
        work.push(next);
    }
    if (dead)
      stream.err("Only non-generatable nodes (" + nodes.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
  }
}

// node_modules/prosemirror-transform/dist/index.js
var lower16 = 65535;
var factor16 = Math.pow(2, 16);
function makeRecover(index, offset) {
  return index + offset * factor16;
}
function recoverIndex(value) {
  return value & lower16;
}
function recoverOffset(value) {
  return (value - (value & lower16)) / factor16;
}
var DEL_BEFORE = 1;
var DEL_AFTER = 2;
var DEL_ACROSS = 4;
var DEL_SIDE = 8;
var MapResult = class {
  /**
  @internal
  */
  constructor(pos, delInfo, recover) {
    this.pos = pos;
    this.delInfo = delInfo;
    this.recover = recover;
  }
  /**
  Tells you whether the position was deleted, that is, whether the
  step removed the token on the side queried (via the `assoc`)
  argument from the document.
  */
  get deleted() {
    return (this.delInfo & DEL_SIDE) > 0;
  }
  /**
  Tells you whether the token before the mapped position was deleted.
  */
  get deletedBefore() {
    return (this.delInfo & (DEL_BEFORE | DEL_ACROSS)) > 0;
  }
  /**
  True when the token after the mapped position was deleted.
  */
  get deletedAfter() {
    return (this.delInfo & (DEL_AFTER | DEL_ACROSS)) > 0;
  }
  /**
  Tells whether any of the steps mapped through deletes across the
  position (including both the token before and after the
  position).
  */
  get deletedAcross() {
    return (this.delInfo & DEL_ACROSS) > 0;
  }
};
var StepMap = class _StepMap {
  /**
  Create a position map. The modifications to the document are
  represented as an array of numbers, in which each group of three
  represents a modified chunk as `[start, oldSize, newSize]`.
  */
  constructor(ranges, inverted = false) {
    this.ranges = ranges;
    this.inverted = inverted;
    if (!ranges.length && _StepMap.empty)
      return _StepMap.empty;
  }
  /**
  @internal
  */
  recover(value) {
    let diff = 0, index = recoverIndex(value);
    if (!this.inverted)
      for (let i = 0; i < index; i++)
        diff += this.ranges[i * 3 + 2] - this.ranges[i * 3 + 1];
    return this.ranges[index * 3] + diff + recoverOffset(value);
  }
  mapResult(pos, assoc = 1) {
    return this._map(pos, assoc, false);
  }
  map(pos, assoc = 1) {
    return this._map(pos, assoc, true);
  }
  /**
  @internal
  */
  _map(pos, assoc, simple) {
    let diff = 0, oldIndex = this.inverted ? 2 : 1, newIndex = this.inverted ? 1 : 2;
    for (let i = 0; i < this.ranges.length; i += 3) {
      let start = this.ranges[i] - (this.inverted ? diff : 0);
      if (start > pos)
        break;
      let oldSize = this.ranges[i + oldIndex], newSize = this.ranges[i + newIndex], end = start + oldSize;
      if (pos <= end) {
        let side = !oldSize ? assoc : pos == start ? -1 : pos == end ? 1 : assoc;
        let result = start + diff + (side < 0 ? 0 : newSize);
        if (simple)
          return result;
        let recover = pos == (assoc < 0 ? start : end) ? null : makeRecover(i / 3, pos - start);
        let del = pos == start ? DEL_AFTER : pos == end ? DEL_BEFORE : DEL_ACROSS;
        if (assoc < 0 ? pos != start : pos != end)
          del |= DEL_SIDE;
        return new MapResult(result, del, recover);
      }
      diff += newSize - oldSize;
    }
    return simple ? pos + diff : new MapResult(pos + diff, 0, null);
  }
  /**
  @internal
  */
  touches(pos, recover) {
    let diff = 0, index = recoverIndex(recover);
    let oldIndex = this.inverted ? 2 : 1, newIndex = this.inverted ? 1 : 2;
    for (let i = 0; i < this.ranges.length; i += 3) {
      let start = this.ranges[i] - (this.inverted ? diff : 0);
      if (start > pos)
        break;
      let oldSize = this.ranges[i + oldIndex], end = start + oldSize;
      if (pos <= end && i == index * 3)
        return true;
      diff += this.ranges[i + newIndex] - oldSize;
    }
    return false;
  }
  /**
  Calls the given function on each of the changed ranges included in
  this map.
  */
  forEach(f) {
    let oldIndex = this.inverted ? 2 : 1, newIndex = this.inverted ? 1 : 2;
    for (let i = 0, diff = 0; i < this.ranges.length; i += 3) {
      let start = this.ranges[i], oldStart = start - (this.inverted ? diff : 0), newStart = start + (this.inverted ? 0 : diff);
      let oldSize = this.ranges[i + oldIndex], newSize = this.ranges[i + newIndex];
      f(oldStart, oldStart + oldSize, newStart, newStart + newSize);
      diff += newSize - oldSize;
    }
  }
  /**
  Create an inverted version of this map. The result can be used to
  map positions in the post-step document to the pre-step document.
  */
  invert() {
    return new _StepMap(this.ranges, !this.inverted);
  }
  /**
  @internal
  */
  toString() {
    return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
  }
  /**
  Create a map that moves all positions by offset `n` (which may be
  negative). This can be useful when applying steps meant for a
  sub-document to a larger document, or vice-versa.
  */
  static offset(n) {
    return n == 0 ? _StepMap.empty : new _StepMap(n < 0 ? [0, -n, 0] : [0, 0, n]);
  }
};
StepMap.empty = new StepMap([]);
var stepsByID = /* @__PURE__ */ Object.create(null);
var Step = class {
  /**
  Get the step map that represents the changes made by this step,
  and which can be used to transform between positions in the old
  and the new document.
  */
  getMap() {
    return StepMap.empty;
  }
  /**
  Try to merge this step with another one, to be applied directly
  after it. Returns the merged step when possible, null if the
  steps can't be merged.
  */
  merge(other) {
    return null;
  }
  /**
  Deserialize a step from its JSON representation. Will call
  through to the step class' own implementation of this method.
  */
  static fromJSON(schema, json) {
    if (!json || !json.stepType)
      throw new RangeError("Invalid input for Step.fromJSON");
    let type = stepsByID[json.stepType];
    if (!type)
      throw new RangeError(`No step type ${json.stepType} defined`);
    return type.fromJSON(schema, json);
  }
  /**
  To be able to serialize steps to JSON, each step needs a string
  ID to attach to its JSON representation. Use this method to
  register an ID for your step classes. Try to pick something
  that's unlikely to clash with steps from other modules.
  */
  static jsonID(id, stepClass) {
    if (id in stepsByID)
      throw new RangeError("Duplicate use of step JSON ID " + id);
    stepsByID[id] = stepClass;
    stepClass.prototype.jsonID = id;
    return stepClass;
  }
};
var StepResult = class _StepResult {
  /**
  @internal
  */
  constructor(doc, failed) {
    this.doc = doc;
    this.failed = failed;
  }
  /**
  Create a successful step result.
  */
  static ok(doc) {
    return new _StepResult(doc, null);
  }
  /**
  Create a failed step result.
  */
  static fail(message) {
    return new _StepResult(null, message);
  }
  /**
  Call [`Node.replace`](https://prosemirror.net/docs/ref/#model.Node.replace) with the given
  arguments. Create a successful result if it succeeds, and a
  failed one if it throws a `ReplaceError`.
  */
  static fromReplace(doc, from, to, slice) {
    try {
      return _StepResult.ok(doc.replace(from, to, slice));
    } catch (e) {
      if (e instanceof ReplaceError)
        return _StepResult.fail(e.message);
      throw e;
    }
  }
};
function mapFragment(fragment, f, parent) {
  let mapped = [];
  for (let i = 0; i < fragment.childCount; i++) {
    let child = fragment.child(i);
    if (child.content.size)
      child = child.copy(mapFragment(child.content, f, child));
    if (child.isInline)
      child = f(child, parent, i);
    mapped.push(child);
  }
  return Fragment.fromArray(mapped);
}
var AddMarkStep = class _AddMarkStep extends Step {
  /**
  Create a mark step.
  */
  constructor(from, to, mark) {
    super();
    this.from = from;
    this.to = to;
    this.mark = mark;
  }
  apply(doc) {
    let oldSlice = doc.slice(this.from, this.to), $from = doc.resolve(this.from);
    let parent = $from.node($from.sharedDepth(this.to));
    let slice = new Slice(mapFragment(oldSlice.content, (node, parent2) => {
      if (!node.isAtom || !parent2.type.allowsMarkType(this.mark.type))
        return node;
      return node.mark(this.mark.addToSet(node.marks));
    }, parent), oldSlice.openStart, oldSlice.openEnd);
    return StepResult.fromReplace(doc, this.from, this.to, slice);
  }
  invert() {
    return new RemoveMarkStep(this.from, this.to, this.mark);
  }
  map(mapping) {
    let from = mapping.mapResult(this.from, 1), to = mapping.mapResult(this.to, -1);
    if (from.deleted && to.deleted || from.pos >= to.pos)
      return null;
    return new _AddMarkStep(from.pos, to.pos, this.mark);
  }
  merge(other) {
    if (other instanceof _AddMarkStep && other.mark.eq(this.mark) && this.from <= other.to && this.to >= other.from)
      return new _AddMarkStep(Math.min(this.from, other.from), Math.max(this.to, other.to), this.mark);
    return null;
  }
  toJSON() {
    return {
      stepType: "addMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(schema, json) {
    if (typeof json.from != "number" || typeof json.to != "number")
      throw new RangeError("Invalid input for AddMarkStep.fromJSON");
    return new _AddMarkStep(json.from, json.to, schema.markFromJSON(json.mark));
  }
};
Step.jsonID("addMark", AddMarkStep);
var RemoveMarkStep = class _RemoveMarkStep extends Step {
  /**
  Create a mark-removing step.
  */
  constructor(from, to, mark) {
    super();
    this.from = from;
    this.to = to;
    this.mark = mark;
  }
  apply(doc) {
    let oldSlice = doc.slice(this.from, this.to);
    let slice = new Slice(mapFragment(oldSlice.content, (node) => {
      return node.mark(this.mark.removeFromSet(node.marks));
    }, doc), oldSlice.openStart, oldSlice.openEnd);
    return StepResult.fromReplace(doc, this.from, this.to, slice);
  }
  invert() {
    return new AddMarkStep(this.from, this.to, this.mark);
  }
  map(mapping) {
    let from = mapping.mapResult(this.from, 1), to = mapping.mapResult(this.to, -1);
    if (from.deleted && to.deleted || from.pos >= to.pos)
      return null;
    return new _RemoveMarkStep(from.pos, to.pos, this.mark);
  }
  merge(other) {
    if (other instanceof _RemoveMarkStep && other.mark.eq(this.mark) && this.from <= other.to && this.to >= other.from)
      return new _RemoveMarkStep(Math.min(this.from, other.from), Math.max(this.to, other.to), this.mark);
    return null;
  }
  toJSON() {
    return {
      stepType: "removeMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(schema, json) {
    if (typeof json.from != "number" || typeof json.to != "number")
      throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
    return new _RemoveMarkStep(json.from, json.to, schema.markFromJSON(json.mark));
  }
};
Step.jsonID("removeMark", RemoveMarkStep);
var AddNodeMarkStep = class _AddNodeMarkStep extends Step {
  /**
  Create a node mark step.
  */
  constructor(pos, mark) {
    super();
    this.pos = pos;
    this.mark = mark;
  }
  apply(doc) {
    let node = doc.nodeAt(this.pos);
    if (!node)
      return StepResult.fail("No node at mark step's position");
    let updated = node.type.create(node.attrs, null, this.mark.addToSet(node.marks));
    return StepResult.fromReplace(doc, this.pos, this.pos + 1, new Slice(Fragment.from(updated), 0, node.isLeaf ? 0 : 1));
  }
  invert(doc) {
    let node = doc.nodeAt(this.pos);
    if (node) {
      let newSet = this.mark.addToSet(node.marks);
      if (newSet.length == node.marks.length) {
        for (let i = 0; i < node.marks.length; i++)
          if (!node.marks[i].isInSet(newSet))
            return new _AddNodeMarkStep(this.pos, node.marks[i]);
        return new _AddNodeMarkStep(this.pos, this.mark);
      }
    }
    return new RemoveNodeMarkStep(this.pos, this.mark);
  }
  map(mapping) {
    let pos = mapping.mapResult(this.pos, 1);
    return pos.deletedAfter ? null : new _AddNodeMarkStep(pos.pos, this.mark);
  }
  toJSON() {
    return { stepType: "addNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(schema, json) {
    if (typeof json.pos != "number")
      throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
    return new _AddNodeMarkStep(json.pos, schema.markFromJSON(json.mark));
  }
};
Step.jsonID("addNodeMark", AddNodeMarkStep);
var RemoveNodeMarkStep = class _RemoveNodeMarkStep extends Step {
  /**
  Create a mark-removing step.
  */
  constructor(pos, mark) {
    super();
    this.pos = pos;
    this.mark = mark;
  }
  apply(doc) {
    let node = doc.nodeAt(this.pos);
    if (!node)
      return StepResult.fail("No node at mark step's position");
    let updated = node.type.create(node.attrs, null, this.mark.removeFromSet(node.marks));
    return StepResult.fromReplace(doc, this.pos, this.pos + 1, new Slice(Fragment.from(updated), 0, node.isLeaf ? 0 : 1));
  }
  invert(doc) {
    let node = doc.nodeAt(this.pos);
    if (!node || !this.mark.isInSet(node.marks))
      return this;
    return new AddNodeMarkStep(this.pos, this.mark);
  }
  map(mapping) {
    let pos = mapping.mapResult(this.pos, 1);
    return pos.deletedAfter ? null : new _RemoveNodeMarkStep(pos.pos, this.mark);
  }
  toJSON() {
    return { stepType: "removeNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(schema, json) {
    if (typeof json.pos != "number")
      throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
    return new _RemoveNodeMarkStep(json.pos, schema.markFromJSON(json.mark));
  }
};
Step.jsonID("removeNodeMark", RemoveNodeMarkStep);
var ReplaceStep = class _ReplaceStep extends Step {
  /**
  The given `slice` should fit the 'gap' between `from` and
  `to`—the depths must line up, and the surrounding nodes must be
  able to be joined with the open sides of the slice. When
  `structure` is true, the step will fail if the content between
  from and to is not just a sequence of closing and then opening
  tokens (this is to guard against rebased replace steps
  overwriting something they weren't supposed to).
  */
  constructor(from, to, slice, structure = false) {
    super();
    this.from = from;
    this.to = to;
    this.slice = slice;
    this.structure = structure;
  }
  apply(doc) {
    if (this.structure && contentBetween(doc, this.from, this.to))
      return StepResult.fail("Structure replace would overwrite content");
    return StepResult.fromReplace(doc, this.from, this.to, this.slice);
  }
  getMap() {
    return new StepMap([this.from, this.to - this.from, this.slice.size]);
  }
  invert(doc) {
    return new _ReplaceStep(this.from, this.from + this.slice.size, doc.slice(this.from, this.to));
  }
  map(mapping) {
    let from = mapping.mapResult(this.from, 1), to = mapping.mapResult(this.to, -1);
    if (from.deletedAcross && to.deletedAcross)
      return null;
    return new _ReplaceStep(from.pos, Math.max(from.pos, to.pos), this.slice, this.structure);
  }
  merge(other) {
    if (!(other instanceof _ReplaceStep) || other.structure || this.structure)
      return null;
    if (this.from + this.slice.size == other.from && !this.slice.openEnd && !other.slice.openStart) {
      let slice = this.slice.size + other.slice.size == 0 ? Slice.empty : new Slice(this.slice.content.append(other.slice.content), this.slice.openStart, other.slice.openEnd);
      return new _ReplaceStep(this.from, this.to + (other.to - other.from), slice, this.structure);
    } else if (other.to == this.from && !this.slice.openStart && !other.slice.openEnd) {
      let slice = this.slice.size + other.slice.size == 0 ? Slice.empty : new Slice(other.slice.content.append(this.slice.content), other.slice.openStart, this.slice.openEnd);
      return new _ReplaceStep(other.from, this.to, slice, this.structure);
    } else {
      return null;
    }
  }
  toJSON() {
    let json = { stepType: "replace", from: this.from, to: this.to };
    if (this.slice.size)
      json.slice = this.slice.toJSON();
    if (this.structure)
      json.structure = true;
    return json;
  }
  /**
  @internal
  */
  static fromJSON(schema, json) {
    if (typeof json.from != "number" || typeof json.to != "number")
      throw new RangeError("Invalid input for ReplaceStep.fromJSON");
    return new _ReplaceStep(json.from, json.to, Slice.fromJSON(schema, json.slice), !!json.structure);
  }
};
Step.jsonID("replace", ReplaceStep);
var ReplaceAroundStep = class _ReplaceAroundStep extends Step {
  /**
  Create a replace-around step with the given range and gap.
  `insert` should be the point in the slice into which the content
  of the gap should be moved. `structure` has the same meaning as
  it has in the [`ReplaceStep`](https://prosemirror.net/docs/ref/#transform.ReplaceStep) class.
  */
  constructor(from, to, gapFrom, gapTo, slice, insert, structure = false) {
    super();
    this.from = from;
    this.to = to;
    this.gapFrom = gapFrom;
    this.gapTo = gapTo;
    this.slice = slice;
    this.insert = insert;
    this.structure = structure;
  }
  apply(doc) {
    if (this.structure && (contentBetween(doc, this.from, this.gapFrom) || contentBetween(doc, this.gapTo, this.to)))
      return StepResult.fail("Structure gap-replace would overwrite content");
    let gap = doc.slice(this.gapFrom, this.gapTo);
    if (gap.openStart || gap.openEnd)
      return StepResult.fail("Gap is not a flat range");
    let inserted = this.slice.insertAt(this.insert, gap.content);
    if (!inserted)
      return StepResult.fail("Content does not fit in gap");
    return StepResult.fromReplace(doc, this.from, this.to, inserted);
  }
  getMap() {
    return new StepMap([
      this.from,
      this.gapFrom - this.from,
      this.insert,
      this.gapTo,
      this.to - this.gapTo,
      this.slice.size - this.insert
    ]);
  }
  invert(doc) {
    let gap = this.gapTo - this.gapFrom;
    return new _ReplaceAroundStep(this.from, this.from + this.slice.size + gap, this.from + this.insert, this.from + this.insert + gap, doc.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
  }
  map(mapping) {
    let from = mapping.mapResult(this.from, 1), to = mapping.mapResult(this.to, -1);
    let gapFrom = this.from == this.gapFrom ? from.pos : mapping.map(this.gapFrom, -1);
    let gapTo = this.to == this.gapTo ? to.pos : mapping.map(this.gapTo, 1);
    if (from.deletedAcross && to.deletedAcross || gapFrom < from.pos || gapTo > to.pos)
      return null;
    return new _ReplaceAroundStep(from.pos, to.pos, gapFrom, gapTo, this.slice, this.insert, this.structure);
  }
  toJSON() {
    let json = {
      stepType: "replaceAround",
      from: this.from,
      to: this.to,
      gapFrom: this.gapFrom,
      gapTo: this.gapTo,
      insert: this.insert
    };
    if (this.slice.size)
      json.slice = this.slice.toJSON();
    if (this.structure)
      json.structure = true;
    return json;
  }
  /**
  @internal
  */
  static fromJSON(schema, json) {
    if (typeof json.from != "number" || typeof json.to != "number" || typeof json.gapFrom != "number" || typeof json.gapTo != "number" || typeof json.insert != "number")
      throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
    return new _ReplaceAroundStep(json.from, json.to, json.gapFrom, json.gapTo, Slice.fromJSON(schema, json.slice), json.insert, !!json.structure);
  }
};
Step.jsonID("replaceAround", ReplaceAroundStep);
function contentBetween(doc, from, to) {
  let $from = doc.resolve(from), dist = to - from, depth = $from.depth;
  while (dist > 0 && depth > 0 && $from.indexAfter(depth) == $from.node(depth).childCount) {
    depth--;
    dist--;
  }
  if (dist > 0) {
    let next = $from.node(depth).maybeChild($from.indexAfter(depth));
    while (dist > 0) {
      if (!next || next.isLeaf)
        return true;
      next = next.firstChild;
      dist--;
    }
  }
  return false;
}
var AttrStep = class _AttrStep extends Step {
  /**
  Construct an attribute step.
  */
  constructor(pos, attr, value) {
    super();
    this.pos = pos;
    this.attr = attr;
    this.value = value;
  }
  apply(doc) {
    let node = doc.nodeAt(this.pos);
    if (!node)
      return StepResult.fail("No node at attribute step's position");
    let attrs = /* @__PURE__ */ Object.create(null);
    for (let name in node.attrs)
      attrs[name] = node.attrs[name];
    attrs[this.attr] = this.value;
    let updated = node.type.create(attrs, null, node.marks);
    return StepResult.fromReplace(doc, this.pos, this.pos + 1, new Slice(Fragment.from(updated), 0, node.isLeaf ? 0 : 1));
  }
  getMap() {
    return StepMap.empty;
  }
  invert(doc) {
    return new _AttrStep(this.pos, this.attr, doc.nodeAt(this.pos).attrs[this.attr]);
  }
  map(mapping) {
    let pos = mapping.mapResult(this.pos, 1);
    return pos.deletedAfter ? null : new _AttrStep(pos.pos, this.attr, this.value);
  }
  toJSON() {
    return { stepType: "attr", pos: this.pos, attr: this.attr, value: this.value };
  }
  static fromJSON(schema, json) {
    if (typeof json.pos != "number" || typeof json.attr != "string")
      throw new RangeError("Invalid input for AttrStep.fromJSON");
    return new _AttrStep(json.pos, json.attr, json.value);
  }
};
Step.jsonID("attr", AttrStep);
var DocAttrStep = class _DocAttrStep extends Step {
  /**
  Construct an attribute step.
  */
  constructor(attr, value) {
    super();
    this.attr = attr;
    this.value = value;
  }
  apply(doc) {
    let attrs = /* @__PURE__ */ Object.create(null);
    for (let name in doc.attrs)
      attrs[name] = doc.attrs[name];
    attrs[this.attr] = this.value;
    let updated = doc.type.create(attrs, doc.content, doc.marks);
    return StepResult.ok(updated);
  }
  getMap() {
    return StepMap.empty;
  }
  invert(doc) {
    return new _DocAttrStep(this.attr, doc.attrs[this.attr]);
  }
  map(mapping) {
    return this;
  }
  toJSON() {
    return { stepType: "docAttr", attr: this.attr, value: this.value };
  }
  static fromJSON(schema, json) {
    if (typeof json.attr != "string")
      throw new RangeError("Invalid input for DocAttrStep.fromJSON");
    return new _DocAttrStep(json.attr, json.value);
  }
};
Step.jsonID("docAttr", DocAttrStep);
var TransformError = class extends Error {
};
TransformError = function TransformError2(message) {
  let err = Error.call(this, message);
  err.__proto__ = TransformError2.prototype;
  return err;
};
TransformError.prototype = Object.create(Error.prototype);
TransformError.prototype.constructor = TransformError;
TransformError.prototype.name = "TransformError";

// node_modules/prosemirror-state/dist/index.js
var classesById = /* @__PURE__ */ Object.create(null);
var Selection = class {
  /**
  Initialize a selection with the head and anchor and ranges. If no
  ranges are given, constructs a single range across `$anchor` and
  `$head`.
  */
  constructor($anchor, $head, ranges) {
    this.$anchor = $anchor;
    this.$head = $head;
    this.ranges = ranges || [new SelectionRange($anchor.min($head), $anchor.max($head))];
  }
  /**
  The selection's anchor, as an unresolved position.
  */
  get anchor() {
    return this.$anchor.pos;
  }
  /**
  The selection's head.
  */
  get head() {
    return this.$head.pos;
  }
  /**
  The lower bound of the selection's main range.
  */
  get from() {
    return this.$from.pos;
  }
  /**
  The upper bound of the selection's main range.
  */
  get to() {
    return this.$to.pos;
  }
  /**
  The resolved lower  bound of the selection's main range.
  */
  get $from() {
    return this.ranges[0].$from;
  }
  /**
  The resolved upper bound of the selection's main range.
  */
  get $to() {
    return this.ranges[0].$to;
  }
  /**
  Indicates whether the selection contains any content.
  */
  get empty() {
    let ranges = this.ranges;
    for (let i = 0; i < ranges.length; i++)
      if (ranges[i].$from.pos != ranges[i].$to.pos)
        return false;
    return true;
  }
  /**
  Get the content of this selection as a slice.
  */
  content() {
    return this.$from.doc.slice(this.from, this.to, true);
  }
  /**
  Replace the selection with a slice or, if no slice is given,
  delete the selection. Will append to the given transaction.
  */
  replace(tr, content = Slice.empty) {
    let lastNode = content.content.lastChild, lastParent = null;
    for (let i = 0; i < content.openEnd; i++) {
      lastParent = lastNode;
      lastNode = lastNode.lastChild;
    }
    let mapFrom = tr.steps.length, ranges = this.ranges;
    for (let i = 0; i < ranges.length; i++) {
      let { $from, $to } = ranges[i], mapping = tr.mapping.slice(mapFrom);
      tr.replaceRange(mapping.map($from.pos), mapping.map($to.pos), i ? Slice.empty : content);
      if (i == 0)
        selectionToInsertionEnd(tr, mapFrom, (lastNode ? lastNode.isInline : lastParent && lastParent.isTextblock) ? -1 : 1);
    }
  }
  /**
  Replace the selection with the given node, appending the changes
  to the given transaction.
  */
  replaceWith(tr, node) {
    let mapFrom = tr.steps.length, ranges = this.ranges;
    for (let i = 0; i < ranges.length; i++) {
      let { $from, $to } = ranges[i], mapping = tr.mapping.slice(mapFrom);
      let from = mapping.map($from.pos), to = mapping.map($to.pos);
      if (i) {
        tr.deleteRange(from, to);
      } else {
        tr.replaceRangeWith(from, to, node);
        selectionToInsertionEnd(tr, mapFrom, node.isInline ? -1 : 1);
      }
    }
  }
  /**
  Find a valid cursor or leaf node selection starting at the given
  position and searching back if `dir` is negative, and forward if
  positive. When `textOnly` is true, only consider cursor
  selections. Will return null when no valid selection position is
  found.
  */
  static findFrom($pos, dir, textOnly = false) {
    let inner = $pos.parent.inlineContent ? new TextSelection($pos) : findSelectionIn($pos.node(0), $pos.parent, $pos.pos, $pos.index(), dir, textOnly);
    if (inner)
      return inner;
    for (let depth = $pos.depth - 1; depth >= 0; depth--) {
      let found2 = dir < 0 ? findSelectionIn($pos.node(0), $pos.node(depth), $pos.before(depth + 1), $pos.index(depth), dir, textOnly) : findSelectionIn($pos.node(0), $pos.node(depth), $pos.after(depth + 1), $pos.index(depth) + 1, dir, textOnly);
      if (found2)
        return found2;
    }
    return null;
  }
  /**
  Find a valid cursor or leaf node selection near the given
  position. Searches forward first by default, but if `bias` is
  negative, it will search backwards first.
  */
  static near($pos, bias = 1) {
    return this.findFrom($pos, bias) || this.findFrom($pos, -bias) || new AllSelection($pos.node(0));
  }
  /**
  Find the cursor or leaf node selection closest to the start of
  the given document. Will return an
  [`AllSelection`](https://prosemirror.net/docs/ref/#state.AllSelection) if no valid position
  exists.
  */
  static atStart(doc) {
    return findSelectionIn(doc, doc, 0, 0, 1) || new AllSelection(doc);
  }
  /**
  Find the cursor or leaf node selection closest to the end of the
  given document.
  */
  static atEnd(doc) {
    return findSelectionIn(doc, doc, doc.content.size, doc.childCount, -1) || new AllSelection(doc);
  }
  /**
  Deserialize the JSON representation of a selection. Must be
  implemented for custom classes (as a static class method).
  */
  static fromJSON(doc, json) {
    if (!json || !json.type)
      throw new RangeError("Invalid input for Selection.fromJSON");
    let cls = classesById[json.type];
    if (!cls)
      throw new RangeError(`No selection type ${json.type} defined`);
    return cls.fromJSON(doc, json);
  }
  /**
  To be able to deserialize selections from JSON, custom selection
  classes must register themselves with an ID string, so that they
  can be disambiguated. Try to pick something that's unlikely to
  clash with classes from other modules.
  */
  static jsonID(id, selectionClass) {
    if (id in classesById)
      throw new RangeError("Duplicate use of selection JSON ID " + id);
    classesById[id] = selectionClass;
    selectionClass.prototype.jsonID = id;
    return selectionClass;
  }
  /**
  Get a [bookmark](https://prosemirror.net/docs/ref/#state.SelectionBookmark) for this selection,
  which is a value that can be mapped without having access to a
  current document, and later resolved to a real selection for a
  given document again. (This is used mostly by the history to
  track and restore old selections.) The default implementation of
  this method just converts the selection to a text selection and
  returns the bookmark for that.
  */
  getBookmark() {
    return TextSelection.between(this.$anchor, this.$head).getBookmark();
  }
};
Selection.prototype.visible = true;
var SelectionRange = class {
  /**
  Create a range.
  */
  constructor($from, $to) {
    this.$from = $from;
    this.$to = $to;
  }
};
var warnedAboutTextSelection = false;
function checkTextSelection($pos) {
  if (!warnedAboutTextSelection && !$pos.parent.inlineContent) {
    warnedAboutTextSelection = true;
    console["warn"]("TextSelection endpoint not pointing into a node with inline content (" + $pos.parent.type.name + ")");
  }
}
var TextSelection = class _TextSelection extends Selection {
  /**
  Construct a text selection between the given points.
  */
  constructor($anchor, $head = $anchor) {
    checkTextSelection($anchor);
    checkTextSelection($head);
    super($anchor, $head);
  }
  /**
  Returns a resolved position if this is a cursor selection (an
  empty text selection), and null otherwise.
  */
  get $cursor() {
    return this.$anchor.pos == this.$head.pos ? this.$head : null;
  }
  map(doc, mapping) {
    let $head = doc.resolve(mapping.map(this.head));
    if (!$head.parent.inlineContent)
      return Selection.near($head);
    let $anchor = doc.resolve(mapping.map(this.anchor));
    return new _TextSelection($anchor.parent.inlineContent ? $anchor : $head, $head);
  }
  replace(tr, content = Slice.empty) {
    super.replace(tr, content);
    if (content == Slice.empty) {
      let marks = this.$from.marksAcross(this.$to);
      if (marks)
        tr.ensureMarks(marks);
    }
  }
  eq(other) {
    return other instanceof _TextSelection && other.anchor == this.anchor && other.head == this.head;
  }
  getBookmark() {
    return new TextBookmark(this.anchor, this.head);
  }
  toJSON() {
    return { type: "text", anchor: this.anchor, head: this.head };
  }
  /**
  @internal
  */
  static fromJSON(doc, json) {
    if (typeof json.anchor != "number" || typeof json.head != "number")
      throw new RangeError("Invalid input for TextSelection.fromJSON");
    return new _TextSelection(doc.resolve(json.anchor), doc.resolve(json.head));
  }
  /**
  Create a text selection from non-resolved positions.
  */
  static create(doc, anchor, head = anchor) {
    let $anchor = doc.resolve(anchor);
    return new this($anchor, head == anchor ? $anchor : doc.resolve(head));
  }
  /**
  Return a text selection that spans the given positions or, if
  they aren't text positions, find a text selection near them.
  `bias` determines whether the method searches forward (default)
  or backwards (negative number) first. Will fall back to calling
  [`Selection.near`](https://prosemirror.net/docs/ref/#state.Selection^near) when the document
  doesn't contain a valid text position.
  */
  static between($anchor, $head, bias) {
    let dPos = $anchor.pos - $head.pos;
    if (!bias || dPos)
      bias = dPos >= 0 ? 1 : -1;
    if (!$head.parent.inlineContent) {
      let found2 = Selection.findFrom($head, bias, true) || Selection.findFrom($head, -bias, true);
      if (found2)
        $head = found2.$head;
      else
        return Selection.near($head, bias);
    }
    if (!$anchor.parent.inlineContent) {
      if (dPos == 0) {
        $anchor = $head;
      } else {
        $anchor = (Selection.findFrom($anchor, -bias, true) || Selection.findFrom($anchor, bias, true)).$anchor;
        if ($anchor.pos < $head.pos != dPos < 0)
          $anchor = $head;
      }
    }
    return new _TextSelection($anchor, $head);
  }
};
Selection.jsonID("text", TextSelection);
var TextBookmark = class _TextBookmark {
  constructor(anchor, head) {
    this.anchor = anchor;
    this.head = head;
  }
  map(mapping) {
    return new _TextBookmark(mapping.map(this.anchor), mapping.map(this.head));
  }
  resolve(doc) {
    return TextSelection.between(doc.resolve(this.anchor), doc.resolve(this.head));
  }
};
var NodeSelection = class _NodeSelection extends Selection {
  /**
  Create a node selection. Does not verify the validity of its
  argument.
  */
  constructor($pos) {
    let node = $pos.nodeAfter;
    let $end = $pos.node(0).resolve($pos.pos + node.nodeSize);
    super($pos, $end);
    this.node = node;
  }
  map(doc, mapping) {
    let { deleted, pos } = mapping.mapResult(this.anchor);
    let $pos = doc.resolve(pos);
    if (deleted)
      return Selection.near($pos);
    return new _NodeSelection($pos);
  }
  content() {
    return new Slice(Fragment.from(this.node), 0, 0);
  }
  eq(other) {
    return other instanceof _NodeSelection && other.anchor == this.anchor;
  }
  toJSON() {
    return { type: "node", anchor: this.anchor };
  }
  getBookmark() {
    return new NodeBookmark(this.anchor);
  }
  /**
  @internal
  */
  static fromJSON(doc, json) {
    if (typeof json.anchor != "number")
      throw new RangeError("Invalid input for NodeSelection.fromJSON");
    return new _NodeSelection(doc.resolve(json.anchor));
  }
  /**
  Create a node selection from non-resolved positions.
  */
  static create(doc, from) {
    return new _NodeSelection(doc.resolve(from));
  }
  /**
  Determines whether the given node may be selected as a node
  selection.
  */
  static isSelectable(node) {
    return !node.isText && node.type.spec.selectable !== false;
  }
};
NodeSelection.prototype.visible = false;
Selection.jsonID("node", NodeSelection);
var NodeBookmark = class _NodeBookmark {
  constructor(anchor) {
    this.anchor = anchor;
  }
  map(mapping) {
    let { deleted, pos } = mapping.mapResult(this.anchor);
    return deleted ? new TextBookmark(pos, pos) : new _NodeBookmark(pos);
  }
  resolve(doc) {
    let $pos = doc.resolve(this.anchor), node = $pos.nodeAfter;
    if (node && NodeSelection.isSelectable(node))
      return new NodeSelection($pos);
    return Selection.near($pos);
  }
};
var AllSelection = class _AllSelection extends Selection {
  /**
  Create an all-selection over the given document.
  */
  constructor(doc) {
    super(doc.resolve(0), doc.resolve(doc.content.size));
  }
  replace(tr, content = Slice.empty) {
    if (content == Slice.empty) {
      tr.delete(0, tr.doc.content.size);
      let sel = Selection.atStart(tr.doc);
      if (!sel.eq(tr.selection))
        tr.setSelection(sel);
    } else {
      super.replace(tr, content);
    }
  }
  toJSON() {
    return { type: "all" };
  }
  /**
  @internal
  */
  static fromJSON(doc) {
    return new _AllSelection(doc);
  }
  map(doc) {
    return new _AllSelection(doc);
  }
  eq(other) {
    return other instanceof _AllSelection;
  }
  getBookmark() {
    return AllBookmark;
  }
};
Selection.jsonID("all", AllSelection);
var AllBookmark = {
  map() {
    return this;
  },
  resolve(doc) {
    return new AllSelection(doc);
  }
};
function findSelectionIn(doc, node, pos, index, dir, text = false) {
  if (node.inlineContent)
    return TextSelection.create(doc, pos);
  for (let i = index - (dir > 0 ? 0 : 1); dir > 0 ? i < node.childCount : i >= 0; i += dir) {
    let child = node.child(i);
    if (!child.isAtom) {
      let inner = findSelectionIn(doc, child, pos + dir, dir < 0 ? child.childCount : 0, dir, text);
      if (inner)
        return inner;
    } else if (!text && NodeSelection.isSelectable(child)) {
      return NodeSelection.create(doc, pos - (dir < 0 ? child.nodeSize : 0));
    }
    pos += child.nodeSize * dir;
  }
  return null;
}
function selectionToInsertionEnd(tr, startLen, bias) {
  let last = tr.steps.length - 1;
  if (last < startLen)
    return;
  let step = tr.steps[last];
  if (!(step instanceof ReplaceStep || step instanceof ReplaceAroundStep))
    return;
  let map = tr.mapping.maps[last], end;
  map.forEach((_from, _to, _newFrom, newTo) => {
    if (end == null)
      end = newTo;
  });
  tr.setSelection(Selection.near(tr.doc.resolve(end), bias));
}
function bind(f, self) {
  return !self || !f ? f : f.bind(self);
}
var FieldDesc = class {
  constructor(name, desc, self) {
    this.name = name;
    this.init = bind(desc.init, self);
    this.apply = bind(desc.apply, self);
  }
};
var baseFields = [
  new FieldDesc("doc", {
    init(config) {
      return config.doc || config.schema.topNodeType.createAndFill();
    },
    apply(tr) {
      return tr.doc;
    }
  }),
  new FieldDesc("selection", {
    init(config, instance) {
      return config.selection || Selection.atStart(instance.doc);
    },
    apply(tr) {
      return tr.selection;
    }
  }),
  new FieldDesc("storedMarks", {
    init(config) {
      return config.storedMarks || null;
    },
    apply(tr, _marks, _old, state) {
      return state.selection.$cursor ? tr.storedMarks : null;
    }
  }),
  new FieldDesc("scrollToSelection", {
    init() {
      return 0;
    },
    apply(tr, prev) {
      return tr.scrolledIntoView ? prev + 1 : prev;
    }
  })
];
function bindProps(obj, self, target) {
  for (let prop in obj) {
    let val = obj[prop];
    if (val instanceof Function)
      val = val.bind(self);
    else if (prop == "handleDOMEvents")
      val = bindProps(val, self, {});
    target[prop] = val;
  }
  return target;
}
var Plugin = class {
  /**
  Create a plugin.
  */
  constructor(spec) {
    this.spec = spec;
    this.props = {};
    if (spec.props)
      bindProps(spec.props, this, this.props);
    this.key = spec.key ? spec.key.key : createKey("plugin");
  }
  /**
  Extract the plugin's state field from an editor state.
  */
  getState(state) {
    return state[this.key];
  }
};
var keys = /* @__PURE__ */ Object.create(null);
function createKey(name) {
  if (name in keys)
    return name + "$" + ++keys[name];
  keys[name] = 0;
  return name + "$";
}
var PluginKey = class {
  /**
  Create a plugin key.
  */
  constructor(name = "key") {
    this.key = createKey(name);
  }
  /**
  Get the active plugin with this key, if any, from an editor
  state.
  */
  get(state) {
    return state.config.pluginsByKey[this.key];
  }
  /**
  Get the plugin's state from an editor state.
  */
  getState(state) {
    return state[this.key];
  }
};

// node_modules/@tiptap/extension-code-block/dist/index.js
var backtickInputRegex = /^```([a-z]+)?[\s\n]$/;
var tildeInputRegex = /^~~~([a-z]+)?[\s\n]$/;
var CodeBlock = import_core15.Node.create({
  name: "codeBlock",
  addOptions() {
    return {
      languageClassPrefix: "language-",
      exitOnTripleEnter: true,
      exitOnArrowDown: true,
      defaultLanguage: null,
      HTMLAttributes: {}
    };
  },
  content: "text*",
  marks: "",
  group: "block",
  code: true,
  defining: true,
  addAttributes() {
    return {
      language: {
        default: this.options.defaultLanguage,
        parseHTML: (element) => {
          var _a;
          const { languageClassPrefix } = this.options;
          const classNames = [...((_a = element.firstElementChild) == null ? void 0 : _a.classList) || []];
          const languages = classNames.filter((className) => className.startsWith(languageClassPrefix)).map((className) => className.replace(languageClassPrefix, ""));
          const language = languages[0];
          if (!language) {
            return null;
          }
          return language;
        },
        rendered: false
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "pre",
        preserveWhitespace: "full"
      }
    ];
  },
  renderHTML({ node, HTMLAttributes }) {
    return [
      "pre",
      (0, import_core15.mergeAttributes)(this.options.HTMLAttributes, HTMLAttributes),
      [
        "code",
        {
          class: node.attrs.language ? this.options.languageClassPrefix + node.attrs.language : null
        },
        0
      ]
    ];
  },
  addCommands() {
    return {
      setCodeBlock: (attributes) => ({ commands }) => {
        return commands.setNode(this.name, attributes);
      },
      toggleCodeBlock: (attributes) => ({ commands }) => {
        return commands.toggleNode(this.name, "paragraph", attributes);
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-c": () => this.editor.commands.toggleCodeBlock(),
      // remove code block when at start of document or code block is empty
      Backspace: () => {
        const { empty, $anchor } = this.editor.state.selection;
        const isAtStart = $anchor.pos === 1;
        if (!empty || $anchor.parent.type.name !== this.name) {
          return false;
        }
        if (isAtStart || !$anchor.parent.textContent.length) {
          return this.editor.commands.clearNodes();
        }
        return false;
      },
      // exit node on triple enter
      Enter: ({ editor }) => {
        if (!this.options.exitOnTripleEnter) {
          return false;
        }
        const { state } = editor;
        const { selection } = state;
        const { $from, empty } = selection;
        if (!empty || $from.parent.type !== this.type) {
          return false;
        }
        const isAtEnd = $from.parentOffset === $from.parent.nodeSize - 2;
        const endsWithDoubleNewline = $from.parent.textContent.endsWith("\n\n");
        if (!isAtEnd || !endsWithDoubleNewline) {
          return false;
        }
        return editor.chain().command(({ tr }) => {
          tr.delete($from.pos - 2, $from.pos);
          return true;
        }).exitCode().run();
      },
      // exit node on arrow down
      ArrowDown: ({ editor }) => {
        if (!this.options.exitOnArrowDown) {
          return false;
        }
        const { state } = editor;
        const { selection, doc } = state;
        const { $from, empty } = selection;
        if (!empty || $from.parent.type !== this.type) {
          return false;
        }
        const isAtEnd = $from.parentOffset === $from.parent.nodeSize - 2;
        if (!isAtEnd) {
          return false;
        }
        const after = $from.after();
        if (after === void 0) {
          return false;
        }
        const nodeAfter = doc.nodeAt(after);
        if (nodeAfter) {
          return editor.commands.command(({ tr }) => {
            tr.setSelection(Selection.near(doc.resolve(after)));
            return true;
          });
        }
        return editor.commands.exitCode();
      }
    };
  },
  addInputRules() {
    return [
      (0, import_core15.textblockTypeInputRule)({
        find: backtickInputRegex,
        type: this.type,
        getAttributes: (match) => ({
          language: match[1]
        })
      }),
      (0, import_core15.textblockTypeInputRule)({
        find: tildeInputRegex,
        type: this.type,
        getAttributes: (match) => ({
          language: match[1]
        })
      })
    ];
  },
  addProseMirrorPlugins() {
    return [
      // this plugin creates a code block for pasted content from VS Code
      // we can also detect the copied code language
      new Plugin({
        key: new PluginKey("codeBlockVSCodeHandler"),
        props: {
          handlePaste: (view, event) => {
            if (!event.clipboardData) {
              return false;
            }
            if (this.editor.isActive(this.type.name)) {
              return false;
            }
            const text = event.clipboardData.getData("text/plain");
            const vscode = event.clipboardData.getData("vscode-editor-data");
            const vscodeData = vscode ? JSON.parse(vscode) : void 0;
            const language = vscodeData == null ? void 0 : vscodeData.mode;
            if (!text || !language) {
              return false;
            }
            const { tr, schema } = view.state;
            const textNode = schema.text(text.replace(/\r\n?/g, "\n"));
            tr.replaceSelectionWith(this.type.create({ language }, textNode));
            if (tr.selection.$from.parent.type !== this.type) {
              tr.setSelection(TextSelection.near(tr.doc.resolve(Math.max(0, tr.selection.from - 2))));
            }
            tr.setMeta("paste", true);
            view.dispatch(tr);
            return true;
          }
        }
      })
    ];
  }
});

// src/components/tiptap-extensions/CustomCodeBlock.ts
var import_core16 = require("@tiptap/core");
var CustomCodeBlock = CodeBlock.extend({
  addAttributes() {
    var _a;
    return {
      ...(_a = this.parent) == null ? void 0 : _a.call(this),
      language: {
        default: null,
        parseHTML: (element) => {
          const classNames = element.getAttribute("class") || "";
          const languageMatch = classNames.match(/language-(\w+)/);
          return languageMatch ? languageMatch[1] : null;
        },
        renderHTML: (attributes) => {
          if (!attributes.language) {
            return {};
          }
          return {
            class: `language-${attributes.language}`
          };
        }
      }
    };
  },
  addCommands() {
    var _a;
    return {
      ...(_a = this.parent) == null ? void 0 : _a.call(this),
      setCodeBlockLanguage: (language) => ({ commands }) => {
        return commands.updateAttributes("codeBlock", { language });
      }
    };
  },
  addPasteRules() {
    return [
      {
        find: /^```(\w+)?\n([\s\S]+?)\n```$/g,
        type: this.type,
        getAttributes: (match) => ({
          language: match[1] || null
        }),
        getContent: (match) => match[2]
      },
      // Also handle single-line code blocks
      {
        find: /^```(\w+)?\s*([^\n]+)$/gm,
        type: this.type,
        getAttributes: (match) => ({
          language: match[1] || null
        }),
        getContent: (match) => match[2]
      }
    ];
  },
  addInputRules() {
    return [
      {
        find: /^```(\w+)?\s$/,
        type: this.type,
        getAttributes: (match) => ({
          language: match[1] || null
        })
      }
    ];
  },
  parseHTML() {
    return [
      {
        tag: "pre",
        preserveWhitespace: "full",
        getAttrs: (element) => {
          const codeElement = element.querySelector("code");
          if (codeElement) {
            const classNames = codeElement.getAttribute("class") || "";
            const languageMatch = classNames.match(/language-(\w+)/);
            if (languageMatch) {
              return { language: languageMatch[1] };
            }
          }
          return {};
        }
      }
    ];
  },
  renderHTML({ node, HTMLAttributes }) {
    const { class: languageClass, ...otherAttributes } = HTMLAttributes;
    return [
      "pre",
      (0, import_core16.mergeAttributes)(this.options.HTMLAttributes, otherAttributes),
      ["code", languageClass ? { class: languageClass } : {}, 0]
    ];
  }
});

// src/components/ui/CustomSelect.tsx
var import_react31 = __toESM(require("react"));
var import_react_dom = __toESM(require("react-dom"));
var import_CustomSelect = require("./CustomSelect-U6MJMVUK.css");

// src/lib/utils.ts
var import_clsx = require("clsx");
function cn(...inputs) {
  return (0, import_clsx.clsx)(...inputs);
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

// src/icons/ExpandIcon.tsx
var import_react30 = __toESM(require("react"));
var ExpandIcon = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ import_react30.default.createElement(
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
  /* @__PURE__ */ import_react30.default.createElement("path", { d: "m6 9 6 6 6-6" })
);
var ExpandIcon_default = ExpandIcon;

// src/components/ui/CustomSelect.tsx
var CustomSelect = ({ value, options, onChange, className, placeholder, label, title }) => {
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
      className: cn("richer-editor-selectWrapper", className),
      tabIndex: 0,
      onBlur: (e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false);
      },
      style: { display: "inline-block" }
    },
    label && /* @__PURE__ */ import_react31.default.createElement("div", { className: "richer-editor-label" }, label),
    /* @__PURE__ */ import_react31.default.createElement(
      "button",
      {
        ref: triggerRef,
        className: "richer-editor-trigger",
        "aria-haspopup": "listbox",
        "aria-expanded": open,
        onClick: () => setOpen((o) => !o),
        onKeyDown: handleKeyDown,
        type: "button",
        title: title || ""
      },
      /* @__PURE__ */ import_react31.default.createElement("span", { className: selectedOption ? void 0 : "richer-editor-placeholder" }, selectedOption ? selectedOption.label : placeholder || "Select..."),
      /* @__PURE__ */ import_react31.default.createElement("span", { className: "richer-editor-chevron", "aria-hidden": true }, /* @__PURE__ */ import_react31.default.createElement(ExpandIcon_default, { size: 18 }))
    ),
    open && import_react_dom.default.createPortal(
      /* @__PURE__ */ import_react31.default.createElement(
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
        options.map((opt, idx) => /* @__PURE__ */ import_react31.default.createElement(
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

// src/components/ui/CustomDropdown.tsx
var import_react32 = __toESM(require("react"));
var import_react_dom2 = __toESM(require("react-dom"));
var import_CustomDropdown = require("./CustomDropdown-OFQTNL5O.css");
var DEFAULT_WIDTH = 320;
var CustomDropdown = ({
  open,
  onOpenChange,
  trigger,
  children,
  className,
  align = "left",
  width = `${DEFAULT_WIDTH}px`
}) => {
  const dropdownRef = (0, import_react32.useRef)(null);
  const triggerRef = (0, import_react32.useRef)(null);
  const [position, setPosition] = (0, import_react32.useState)({ top: 0, left: 0 });
  (0, import_react32.useEffect)(() => {
    if (open && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      let dropdownWidth = DEFAULT_WIDTH;
      if (dropdownRef.current) {
        dropdownWidth = dropdownRef.current.offsetWidth || DEFAULT_WIDTH;
      } else if (width && typeof width === "string" && width.endsWith("px")) {
        dropdownWidth = parseInt(width);
      }
      let left = rect.left;
      if (left + dropdownWidth > window.innerWidth - 8) {
        left = Math.max(8, window.innerWidth - dropdownWidth - 8);
      }
      if (left < 8) {
        left = 8;
      }
      setPosition({
        top: rect.bottom + 4,
        left
      });
    }
  }, [open, width]);
  (0, import_react32.useEffect)(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && triggerRef.current && !triggerRef.current.contains(event.target)) {
        onOpenChange(false);
      }
    }
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onOpenChange(false);
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
  }, [open, onOpenChange]);
  return /* @__PURE__ */ import_react32.default.createElement(import_react32.default.Fragment, null, /* @__PURE__ */ import_react32.default.createElement("div", { className: "richer-editor-dropdown-container", ref: triggerRef }, import_react32.default.cloneElement(trigger, {
    onClick: (e) => {
      e.preventDefault();
      e.stopPropagation();
      onOpenChange(!open);
    }
  })), open && import_react_dom2.default.createPortal(
    /* @__PURE__ */ import_react32.default.createElement(
      "div",
      {
        ref: dropdownRef,
        className: cn(
          "richer-editor-dropdown",
          `richer-editor-dropdown-${align}`,
          className
        ),
        style: {
          position: "fixed",
          top: position.top,
          left: position.left,
          width,
          zIndex: 1e3
        }
      },
      /* @__PURE__ */ import_react32.default.createElement(
        "button",
        {
          className: "richer-editor-dropdown-closeBtn",
          "aria-label": "Close",
          onClick: () => onOpenChange(false),
          style: { position: "absolute", top: 8, right: 8 }
        },
        "\xD7"
      ),
      children
    ),
    document.body
  ));
};
var CustomDropdown_default = CustomDropdown;

// src/components/ui/CodeLanguageSelect.tsx
var import_react33 = __toESM(require("react"));
var commonLanguages = [
  { name: "Plain Text", value: "" },
  { name: "JavaScript", value: "javascript" },
  { name: "TypeScript", value: "typescript" },
  { name: "JSX", value: "jsx" },
  { name: "TSX", value: "tsx" },
  { name: "HTML", value: "html" },
  { name: "CSS", value: "css" },
  { name: "SCSS", value: "scss" },
  { name: "SASS", value: "sass" },
  { name: "JSON", value: "json" },
  { name: "Python", value: "python" },
  { name: "Java", value: "java" },
  { name: "C++", value: "cpp" },
  { name: "C#", value: "csharp" },
  { name: "PHP", value: "php" },
  { name: "Ruby", value: "ruby" },
  { name: "Go", value: "go" },
  { name: "Rust", value: "rust" },
  { name: "Swift", value: "swift" },
  { name: "Kotlin", value: "kotlin" },
  { name: "Scala", value: "scala" },
  { name: "R", value: "r" },
  { name: "SQL", value: "sql" },
  { name: "Markdown", value: "markdown" },
  { name: "YAML", value: "yaml" },
  { name: "XML", value: "xml" },
  { name: "Shell", value: "shell" },
  { name: "Bash", value: "bash" },
  { name: "PowerShell", value: "powershell" },
  { name: "Docker", value: "dockerfile" },
  { name: "Git", value: "git" },
  { name: "Diff", value: "diff" },
  { name: "GraphQL", value: "graphql" },
  { name: "Vue", value: "vue" },
  { name: "Svelte", value: "svelte" },
  { name: "Angular", value: "angular" },
  { name: "React", value: "react" },
  { name: "Next.js", value: "nextjs" },
  { name: "Tailwind CSS", value: "tailwindcss" },
  { name: "Prisma", value: "prisma" },
  { name: "MongoDB", value: "mongodb" },
  { name: "PostgreSQL", value: "postgresql" },
  { name: "MySQL", value: "mysql" },
  { name: "Redis", value: "redis" },
  { name: "Nginx", value: "nginx" },
  { name: "Apache", value: "apache" },
  { name: "Linux", value: "linux" },
  { name: "Windows", value: "windows" },
  { name: "macOS", value: "macos" }
];
var CodeLanguageSelect = ({
  editor,
  currentLanguage,
  onLanguageChange
}) => {
  const [dropdownOpen, setDropdownOpen] = (0, import_react33.useState)(false);
  const getLanguageDisplayName = (value) => {
    if (!value) return "Plain Text";
    const lang = commonLanguages.find((l) => l.value === value);
    return lang ? lang.name : value;
  };
  const handleLanguageSelect = (language) => {
    onLanguageChange(language);
    setDropdownOpen(false);
    editor.commands.focus();
  };
  return /* @__PURE__ */ import_react33.default.createElement(
    CustomDropdown_default,
    {
      open: dropdownOpen,
      onOpenChange: setDropdownOpen,
      trigger: /* @__PURE__ */ import_react33.default.createElement(
        "button",
        {
          className: "richer-editor-button richer-editor-textXs richer-editor-code-language-select",
          type: "button",
          "aria-label": "Select code language",
          title: "Select code language"
        },
        /* @__PURE__ */ import_react33.default.createElement("span", null, getLanguageDisplayName(currentLanguage)),
        /* @__PURE__ */ import_react33.default.createElement(
          "svg",
          {
            width: "12",
            height: "12",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            style: {
              marginLeft: "4px",
              transition: "transform 0.2s ease",
              transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)"
            }
          },
          /* @__PURE__ */ import_react33.default.createElement("polyline", { points: "6,9 12,15 18,9" })
        )
      ),
      width: "200px"
    },
    /* @__PURE__ */ import_react33.default.createElement("div", { className: "richer-editor-mb2 richer-editor-fontSemibold richer-editor-textBase", style: { color: "var(--richer-editor-primary)", borderBottom: "1px solid var(--richer-editor-border)", paddingBottom: "8px" } }, "Select Language"),
    /* @__PURE__ */ import_react33.default.createElement("div", { style: { maxHeight: "300px", overflowY: "auto" } }, commonLanguages.map((lang) => /* @__PURE__ */ import_react33.default.createElement(
      "button",
      {
        key: lang.value,
        onClick: () => handleLanguageSelect(lang.value),
        className: `richer-editor-button richer-editor-textSm richer-editor-wFull richer-editor-textLeft ${currentLanguage === lang.value ? "richer-editor-buttonActive" : ""}`,
        style: {
          justifyContent: "flex-start",
          padding: "8px 12px",
          marginBottom: "1px",
          fontSize: "13px",
          borderRadius: "4px",
          border: "none",
          background: currentLanguage === lang.value ? "var(--richer-editor-primary)" : "transparent",
          color: currentLanguage === lang.value ? "white" : "var(--richer-editor-text)",
          transition: "all 0.15s ease"
        },
        type: "button"
      },
      lang.name
    )))
  );
};
var CodeLanguageSelect_default = CodeLanguageSelect;

// src/components/RicherEditor.tsx
var import_RicherEditor = require("./RicherEditor-YHKS4JYK.css");

// src/icons/LineHeightIcon.tsx
var import_react34 = __toESM(require("react"));
var LineHeightIcon = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ import_react34.default.createElement(
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
  /* @__PURE__ */ import_react34.default.createElement("path", { d: "M12 8V2" }),
  /* @__PURE__ */ import_react34.default.createElement("path", { d: "M4 12H2" }),
  /* @__PURE__ */ import_react34.default.createElement("path", { d: "M10 12H8" }),
  /* @__PURE__ */ import_react34.default.createElement("path", { d: "M16 12h-2" }),
  /* @__PURE__ */ import_react34.default.createElement("path", { d: "M22 12h-2" }),
  /* @__PURE__ */ import_react34.default.createElement("path", { d: "m15 19-3 3-3-3" }),
  /* @__PURE__ */ import_react34.default.createElement("path", { d: "m15 5-3-3-3 3" })
);
var LineHeightIcon_default = LineHeightIcon;

// src/icons/DragIcon.tsx
var import_react35 = __toESM(require("react"));
var DragIcon = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ import_react35.default.createElement(
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
  /* @__PURE__ */ import_react35.default.createElement("circle", { cx: "12", cy: "9", r: "1" }),
  /* @__PURE__ */ import_react35.default.createElement("circle", { cx: "19", cy: "9", r: "1" }),
  /* @__PURE__ */ import_react35.default.createElement("circle", { cx: "5", cy: "9", r: "1" }),
  /* @__PURE__ */ import_react35.default.createElement("circle", { cx: "12", cy: "15", r: "1" }),
  /* @__PURE__ */ import_react35.default.createElement("circle", { cx: "19", cy: "15", r: "1" }),
  /* @__PURE__ */ import_react35.default.createElement("circle", { cx: "5", cy: "15", r: "1" })
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
  { level: 1, label: /* @__PURE__ */ import_react36.default.createElement(Heading1_default, { size: 18 }) },
  { level: 2, label: /* @__PURE__ */ import_react36.default.createElement(Heading2_default, { size: 18 }) },
  { level: 3, label: /* @__PURE__ */ import_react36.default.createElement(Heading3_default, { size: 18 }) },
  { level: 4, label: /* @__PURE__ */ import_react36.default.createElement(Heading4_default, { size: 18 }) },
  { level: 5, label: /* @__PURE__ */ import_react36.default.createElement(Heading5_default, { size: 18 }) },
  { level: 6, label: /* @__PURE__ */ import_react36.default.createElement(Heading6_default, { size: 18 }) }
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
  lineHeight: "Line Height",
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
  const [editorState, setEditorState] = (0, import_react36.useState)({
    isCodeBlockActive: false,
    codeBlockLanguage: null
  });
  import_react36.default.useEffect(() => {
    if (!editor) return;
    const updateState = () => {
      setEditorState({
        isCodeBlockActive: editor.isActive("codeBlock"),
        codeBlockLanguage: editor.getAttributes("codeBlock").language
      });
    };
    updateState();
    editor.on("selectionUpdate", updateState);
    editor.on("transaction", updateState);
    return () => {
      editor.off("selectionUpdate", updateState);
      editor.off("transaction", updateState);
    };
  }, [editor]);
  const [imageDropdownOpen, setImageDropdownOpen] = (0, import_react36.useState)(false);
  const [imageTab, setImageTab] = (0, import_react36.useState)("url");
  const [imageUrl, setImageUrl] = (0, import_react36.useState)("");
  const [imageWidth, setImageWidth] = (0, import_react36.useState)("");
  const [imageHeight, setImageHeight] = (0, import_react36.useState)("");
  const [uploading, setUploading] = (0, import_react36.useState)(false);
  const [uploadError, setUploadError] = (0, import_react36.useState)(null);
  const [uploadedImageUrl, setUploadedImageUrl] = (0, import_react36.useState)("");
  const [imageFile, setImageFile] = (0, import_react36.useState)(null);
  const [videoDropdownOpen, setVideoDropdownOpen] = (0, import_react36.useState)(false);
  const [videoUrl, setVideoUrl] = (0, import_react36.useState)("");
  const [videoWidth, setVideoWidth] = (0, import_react36.useState)("");
  const [videoHeight, setVideoHeight] = (0, import_react36.useState)("");
  const [linkDropdownOpen, setLinkDropdownOpen] = (0, import_react36.useState)(false);
  const [linkUrl, setLinkUrl] = (0, import_react36.useState)("");
  const [linkTarget, setLinkTarget] = (0, import_react36.useState)("_blank");
  const [textColorPopoverOpen, setTextColorPopoverOpen] = import_react36.default.useState(false);
  const textColorButtonRef = import_react36.default.useRef(null);
  const [bgColorPopoverOpen, setBgColorPopoverOpen] = import_react36.default.useState(false);
  const bgColorButtonRef = import_react36.default.useRef(null);
  const handleImageUrlInsert = (0, import_react36.useCallback)(() => {
    if (imageUrl && isSafeUrl(imageUrl)) {
      const attrs = { src: imageUrl };
      if (imageWidth) attrs.width = imageWidth;
      if (imageHeight) attrs.height = imageHeight;
      editor.chain().focus().setImage(attrs).run();
      setImageDropdownOpen(false);
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
      setImageDropdownOpen(false);
      setUploadedImageUrl("");
      setImageFile(null);
      setImageWidth("");
      setImageHeight("");
      setUploadError(null);
      setImageTab("url");
    }
  };
  const handleVideoUrlInsert = (0, import_react36.useCallback)(() => {
    if (videoUrl && isSafeUrl(videoUrl)) {
      const attrs = { src: videoUrl };
      if (videoWidth) attrs.width = videoWidth;
      if (videoHeight) attrs.height = videoHeight;
      editor.chain().focus().setYoutubeVideo(attrs).run();
      setVideoDropdownOpen(false);
      setVideoUrl("");
      setVideoWidth("");
      setVideoHeight("");
    } else if (videoUrl) {
      window.alert("Invalid or unsafe video URL.");
    }
  }, [editor, videoUrl, videoWidth, videoHeight]);
  const handleLinkInsert = (0, import_react36.useCallback)(() => {
    if (linkUrl && isSafeUrl(linkUrl)) {
      editor.chain().focus().setLink({ href: linkUrl, target: linkTarget }).run();
      setLinkDropdownOpen(false);
      setLinkUrl("");
      setLinkTarget("_blank");
    } else if (linkUrl) {
      window.alert("Invalid or unsafe link URL.");
    }
  }, [editor, linkUrl, linkTarget]);
  const handleLinkUnset = (0, import_react36.useCallback)(() => {
    editor.chain().focus().unsetLink().run();
    setLinkDropdownOpen(false);
    setLinkUrl("");
  }, [editor]);
  if (!editor) return null;
  const labels = { ...defaultI18n, ...i18n };
  return /* @__PURE__ */ import_react36.default.createElement(import_react36.default.Fragment, null, /* @__PURE__ */ import_react36.default.createElement("div", { className: "richer-editor-toolbar" }, !excludeToolbarButtons.includes("heading") && /* @__PURE__ */ import_react36.default.createElement(import_react36.default.Fragment, null, /* @__PURE__ */ import_react36.default.createElement(
    CustomSelect_default,
    {
      value: "__placeholder__",
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
  ), /* @__PURE__ */ import_react36.default.createElement("div", { className: "richer-editor-toolbar-divider" })), !excludeToolbarButtons.includes("fontSize") && /* @__PURE__ */ import_react36.default.createElement(
    CustomSelect_default,
    {
      value: "__placeholder__",
      options: (fontSizeOptions || fontSizes).map((f) => ({ value: f.value, label: f.name })),
      onChange: (val) => editor.chain().focus().setFontSize(val).run(),
      className: "richer-editor-select",
      placeholder: labels.fontSize,
      "aria-label": "Font Size"
    }
  ), !excludeToolbarButtons.includes("fontFamily") && /* @__PURE__ */ import_react36.default.createElement(import_react36.default.Fragment, null, /* @__PURE__ */ import_react36.default.createElement(
    CustomSelect_default,
    {
      value: "__placeholder__",
      options: (fontFamilyOptions || fontFamilies).map((f) => ({
        value: f.value,
        label: /* @__PURE__ */ import_react36.default.createElement("span", { style: { fontFamily: f.value } }, f.name)
      })),
      onChange: (val) => editor.chain().focus().setFontFamily(val).run(),
      className: "richer-editor-select",
      placeholder: labels.fontFamily,
      "aria-label": "Font Family"
    }
  ), /* @__PURE__ */ import_react36.default.createElement("div", { className: "richer-editor-toolbar-divider" })), !excludeToolbarButtons.includes("lineHeight") && /* @__PURE__ */ import_react36.default.createElement(
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
      placeholder: /* @__PURE__ */ import_react36.default.createElement(LineHeightIcon_default, { size: 16 }),
      "aria-label": labels.lineHeight,
      title: labels.lineHeight
    }
  ), !excludeToolbarButtons.includes("bold") && /* @__PURE__ */ import_react36.default.createElement("button", { onClick: () => editor.chain().focus().toggleBold().run(), className: `richer-editor-button ${editor.isActive("bold") ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": labels.bold, title: labels.bold }, /* @__PURE__ */ import_react36.default.createElement(BoldIcon_default, { size: 16 })), !excludeToolbarButtons.includes("italic") && /* @__PURE__ */ import_react36.default.createElement("button", { onClick: () => editor.chain().focus().toggleItalic().run(), className: `richer-editor-button ${editor.isActive("italic") ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": labels.italic, title: labels.italic }, /* @__PURE__ */ import_react36.default.createElement(ItalicIcon_default, { size: 16 })), !excludeToolbarButtons.includes("underline") && /* @__PURE__ */ import_react36.default.createElement("button", { onClick: () => editor.chain().focus().toggleUnderline().run(), className: `richer-editor-button ${editor.isActive("underline") ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": labels.underline, title: labels.underline }, /* @__PURE__ */ import_react36.default.createElement(UnderlineIcon_default, { size: 16 })), !excludeToolbarButtons.includes("strike") && /* @__PURE__ */ import_react36.default.createElement("button", { onClick: () => editor.chain().focus().toggleStrike().run(), className: `richer-editor-button ${editor.isActive("strike") ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": labels.strike, title: labels.strike }, /* @__PURE__ */ import_react36.default.createElement(StrikeIcon_default, { size: 16 })), !excludeToolbarButtons.includes("highlight") && /* @__PURE__ */ import_react36.default.createElement("button", { onClick: () => editor.chain().focus().toggleHighlight().run(), className: `richer-editor-button ${editor.isActive("highlight") ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": labels.highlight, title: labels.highlight }, /* @__PURE__ */ import_react36.default.createElement(Highlighter_default, { size: 16 })), !excludeToolbarButtons.includes("code") && /* @__PURE__ */ import_react36.default.createElement(import_react36.default.Fragment, null, /* @__PURE__ */ import_react36.default.createElement("button", { onClick: () => editor.chain().focus().toggleCodeBlock().run(), className: `richer-editor-button ${editorState.isCodeBlockActive ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": labels.code, title: labels.code }, /* @__PURE__ */ import_react36.default.createElement(CodeIcon_default, { size: 16 })), editorState.isCodeBlockActive && /* @__PURE__ */ import_react36.default.createElement(
    CodeLanguageSelect_default,
    {
      editor,
      currentLanguage: editorState.codeBlockLanguage,
      onLanguageChange: (language) => {
        editor.chain().focus().setCodeBlockLanguage(language).run();
      }
    }
  ), /* @__PURE__ */ import_react36.default.createElement("div", { className: "richer-editor-toolbar-divider" })), !excludeToolbarButtons.includes("bulletList") && /* @__PURE__ */ import_react36.default.createElement(import_react36.default.Fragment, null, /* @__PURE__ */ import_react36.default.createElement("button", { onClick: () => editor.chain().focus().toggleBulletList().run(), className: `richer-editor-button ${editor.isActive("bulletList") ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": labels.bulletList, title: labels.bulletList }, /* @__PURE__ */ import_react36.default.createElement(BulletListIcon_default, { size: 16 })), /* @__PURE__ */ import_react36.default.createElement(
    CustomSelect_default,
    {
      value: "__placeholder__",
      options: unorderedListStyles.map((opt) => ({ value: opt.value, label: /* @__PURE__ */ import_react36.default.createElement(import_react36.default.Fragment, null, opt.icon, " ", opt.name) })),
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
  )), !excludeToolbarButtons.includes("orderedList") && /* @__PURE__ */ import_react36.default.createElement(import_react36.default.Fragment, null, /* @__PURE__ */ import_react36.default.createElement("button", { onClick: () => editor.chain().focus().toggleOrderedList().run(), className: `richer-editor-button ${editor.isActive("orderedList") ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": labels.orderedList, title: labels.orderedList }, /* @__PURE__ */ import_react36.default.createElement(OrderedListIcon_default, { size: 16 })), /* @__PURE__ */ import_react36.default.createElement(
    CustomSelect_default,
    {
      value: "__placeholder__",
      options: orderedListStyles.map((opt) => ({ value: opt.value, label: /* @__PURE__ */ import_react36.default.createElement(import_react36.default.Fragment, null, opt.icon, " ", opt.name) })),
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
  )), !excludeToolbarButtons.includes("taskList") && /* @__PURE__ */ import_react36.default.createElement(import_react36.default.Fragment, null, /* @__PURE__ */ import_react36.default.createElement("button", { onClick: () => editor.chain().focus().toggleTaskList().run(), className: `richer-editor-button ${editor.isActive("taskList") ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": labels.taskList, title: labels.taskList }, /* @__PURE__ */ import_react36.default.createElement(TaskListIcon_default, { size: 16 })), /* @__PURE__ */ import_react36.default.createElement("div", { className: "richer-editor-toolbar-divider" })), !excludeToolbarButtons.includes("blockquote") && /* @__PURE__ */ import_react36.default.createElement("button", { onClick: () => editor.chain().focus().toggleBlockquote().run(), className: `richer-editor-button ${editor.isActive("blockquote") ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": labels.blockquote, title: labels.blockquote }, /* @__PURE__ */ import_react36.default.createElement(BlockquoteIcon_default, { size: 16 })), !excludeToolbarButtons.includes("hr") && /* @__PURE__ */ import_react36.default.createElement(import_react36.default.Fragment, null, /* @__PURE__ */ import_react36.default.createElement("button", { onClick: () => editor.chain().focus().setHorizontalRule().run(), className: "richer-editor-button", type: "button", "aria-label": labels.hr, title: labels.hr }, "HR"), /* @__PURE__ */ import_react36.default.createElement("div", { className: "richer-editor-toolbar-divider" })), !excludeToolbarButtons.includes("link") && /* @__PURE__ */ import_react36.default.createElement(
    CustomDropdown_default,
    {
      open: linkDropdownOpen,
      onOpenChange: (open) => {
        setLinkDropdownOpen(open);
        if (open) {
          setLinkUrl(editor.getAttributes("link").href || "");
          setLinkTarget(editor.getAttributes("link").target || "_blank");
        }
      },
      trigger: /* @__PURE__ */ import_react36.default.createElement(
        "button",
        {
          className: `richer-editor-button${editor.isActive("link") ? " richer-editor-buttonActive" : ""}`,
          type: "button",
          "aria-label": labels.link,
          title: labels.link
        },
        /* @__PURE__ */ import_react36.default.createElement(LinkIcon_default, { size: 16 })
      ),
      width: "280px"
    },
    /* @__PURE__ */ import_react36.default.createElement("div", { className: "richer-editor-mb2 richer-editor-fontSemibold richer-editor-textBase" }, labels.link),
    /* @__PURE__ */ import_react36.default.createElement(
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
    /* @__PURE__ */ import_react36.default.createElement(
      "select",
      {
        name: "target",
        value: linkTarget,
        onChange: (e) => setLinkTarget(e.target.value),
        className: "richer-editor-input",
        style: { marginBottom: 8 }
      },
      /* @__PURE__ */ import_react36.default.createElement("option", { value: "_blank" }, labels.newTab),
      /* @__PURE__ */ import_react36.default.createElement("option", { value: "_self" }, "Same Tab (_self)"),
      /* @__PURE__ */ import_react36.default.createElement("option", { value: "_parent" }, "Parent Frame (_parent)"),
      /* @__PURE__ */ import_react36.default.createElement("option", { value: "_top" }, "Top Frame (_top)")
    ),
    /* @__PURE__ */ import_react36.default.createElement("div", { className: "richer-editor-flexRow" }, /* @__PURE__ */ import_react36.default.createElement(
      "button",
      {
        className: "richer-editor-primaryBtn",
        onClick: handleLinkInsert,
        disabled: !linkUrl
      },
      labels.insert
    ), /* @__PURE__ */ import_react36.default.createElement(
      "button",
      {
        className: "richer-editor-secondaryBtn",
        onClick: handleLinkUnset,
        disabled: !editor.isActive("link")
      },
      labels.remove
    ))
  ), !excludeToolbarButtons.includes("image") && /* @__PURE__ */ import_react36.default.createElement(
    CustomDropdown_default,
    {
      open: imageDropdownOpen,
      onOpenChange: (open) => {
        setImageDropdownOpen(open);
        if (open && !imageUploadUrl) setImageTab("url");
      },
      trigger: /* @__PURE__ */ import_react36.default.createElement(
        "button",
        {
          className: "richer-editor-button",
          type: "button",
          title: labels.image
        },
        /* @__PURE__ */ import_react36.default.createElement(ImageIcon_default, { size: 16 })
      ),
      width: "320px"
    },
    /* @__PURE__ */ import_react36.default.createElement("div", { className: "richer-editor-mb2 richer-editor-fontSemibold richer-editor-textBase flex gap-4 border-b pb-2" }, /* @__PURE__ */ import_react36.default.createElement("button", { className: `richer-editor-button${imageTab === "url" ? " richer-editor-buttonActive" : ""}`, onClick: () => setImageTab("url") }, labels.url), imageUploadUrl && /* @__PURE__ */ import_react36.default.createElement("button", { className: `richer-editor-button${imageTab === "upload" ? " richer-editor-buttonActive" : ""}`, onClick: () => setImageTab("upload") }, labels.upload)),
    imageTab === "url" && /* @__PURE__ */ import_react36.default.createElement(import_react36.default.Fragment, null, /* @__PURE__ */ import_react36.default.createElement(
      "input",
      {
        type: "text",
        placeholder: labels.pasteImageUrl,
        value: imageUrl,
        onChange: (e) => setImageUrl(e.target.value),
        className: "richer-editor-input",
        autoFocus: true
      }
    ), /* @__PURE__ */ import_react36.default.createElement("div", { className: "richer-editor-flexRowMb2" }, /* @__PURE__ */ import_react36.default.createElement(
      "input",
      {
        type: "text",
        placeholder: labels.width,
        value: imageWidth,
        onChange: (e) => setImageWidth(e.target.value),
        className: "richer-editor-input"
      }
    ), /* @__PURE__ */ import_react36.default.createElement(
      "input",
      {
        type: "text",
        placeholder: labels.height,
        value: imageHeight,
        onChange: (e) => setImageHeight(e.target.value),
        className: "richer-editor-input"
      }
    )), /* @__PURE__ */ import_react36.default.createElement("div", { className: "richer-editor-textXs" }, "Leave blank for default size. Use px (e.g. 400) or % (e.g. 50%)."), /* @__PURE__ */ import_react36.default.createElement(
      "button",
      {
        className: "richer-editor-primaryBtn",
        onClick: handleImageUrlInsert,
        disabled: !imageUrl
      },
      labels.image
    )),
    imageTab === "upload" && imageUploadUrl && /* @__PURE__ */ import_react36.default.createElement(import_react36.default.Fragment, null, !uploadedImageUrl && /* @__PURE__ */ import_react36.default.createElement(import_react36.default.Fragment, null, /* @__PURE__ */ import_react36.default.createElement(
      "input",
      {
        type: "file",
        accept: "image/*",
        onChange: handleUploadInputChange,
        className: "richer-editor-mb2",
        disabled: uploading
      }
    ), uploading && /* @__PURE__ */ import_react36.default.createElement("div", { className: "richer-editor-textSm richer-editor-textBlue600 richer-editor-mb2" }, labels.uploading), uploadError && /* @__PURE__ */ import_react36.default.createElement("div", { className: "richer-editor-textSm richer-editor-textRed600 richer-editor-mb2" }, labels.uploadFailed)), uploadedImageUrl && /* @__PURE__ */ import_react36.default.createElement(import_react36.default.Fragment, null, /* @__PURE__ */ import_react36.default.createElement("div", { className: "richer-editor-mb2 richer-editor-flex richer-editor-flexCol richer-editor-itemsCenter" }, /* @__PURE__ */ import_react36.default.createElement("img", { src: uploadedImageUrl, alt: "Preview", className: "richer-editor-maxH40 richer-editor-maxWFull rounded border mb-2" })), /* @__PURE__ */ import_react36.default.createElement("div", { className: "richer-editor-flexRowMb2" }, /* @__PURE__ */ import_react36.default.createElement(
      "input",
      {
        type: "text",
        placeholder: labels.width,
        value: imageWidth,
        onChange: (e) => setImageWidth(e.target.value),
        className: "richer-editor-input"
      }
    ), /* @__PURE__ */ import_react36.default.createElement(
      "input",
      {
        type: "text",
        placeholder: labels.height,
        value: imageHeight,
        onChange: (e) => setImageHeight(e.target.value),
        className: "richer-editor-input"
      }
    )), /* @__PURE__ */ import_react36.default.createElement("div", { className: "richer-editor-flexRow" }, /* @__PURE__ */ import_react36.default.createElement(
      "button",
      {
        className: "richer-editor-primaryBtn",
        onClick: handleUploadedImageInsert
      },
      labels.add
    ), /* @__PURE__ */ import_react36.default.createElement(
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
  ), !excludeToolbarButtons.includes("video") && /* @__PURE__ */ import_react36.default.createElement(
    CustomDropdown_default,
    {
      open: videoDropdownOpen,
      onOpenChange: (open) => setVideoDropdownOpen(open),
      trigger: /* @__PURE__ */ import_react36.default.createElement(
        "button",
        {
          className: "richer-editor-button",
          type: "button",
          title: labels.video
        },
        /* @__PURE__ */ import_react36.default.createElement(VideoIcon_default, { size: 16 })
      ),
      width: "280px"
    },
    /* @__PURE__ */ import_react36.default.createElement("div", { className: "richer-editor-mb2 richer-editor-fontSemibold richer-editor-textBase" }, labels.video),
    /* @__PURE__ */ import_react36.default.createElement(
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
    /* @__PURE__ */ import_react36.default.createElement("div", { className: "richer-editor-flexRowMb2" }, /* @__PURE__ */ import_react36.default.createElement(
      "input",
      {
        type: "text",
        placeholder: labels.width,
        value: videoWidth,
        onChange: (e) => setVideoWidth(e.target.value),
        className: "richer-editor-input"
      }
    ), /* @__PURE__ */ import_react36.default.createElement(
      "input",
      {
        type: "text",
        placeholder: labels.height,
        value: videoHeight,
        onChange: (e) => setVideoHeight(e.target.value),
        className: "richer-editor-input"
      }
    )),
    /* @__PURE__ */ import_react36.default.createElement("div", { className: "richer-editor-textXs" }, "Leave blank for default size. Use px (e.g. 400) or % (e.g. 50%)."),
    /* @__PURE__ */ import_react36.default.createElement(
      "button",
      {
        className: "richer-editor-primaryBtn",
        onClick: handleVideoUrlInsert,
        disabled: !videoUrl
      },
      labels.video
    )
  ), !excludeToolbarButtons.includes("alignLeft") && /* @__PURE__ */ import_react36.default.createElement("button", { onClick: () => editor.chain().focus().setTextAlign("left").run(), className: `richer-editor-button ${editor.isActive({ textAlign: "left" }) ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": labels.alignLeft, title: labels.alignLeft }, /* @__PURE__ */ import_react36.default.createElement(AlignLeft_default, { size: 16 })), !excludeToolbarButtons.includes("alignCenter") && /* @__PURE__ */ import_react36.default.createElement("button", { onClick: () => editor.chain().focus().setTextAlign("center").run(), className: `richer-editor-button ${editor.isActive({ textAlign: "center" }) ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": labels.alignCenter, title: labels.alignCenter }, /* @__PURE__ */ import_react36.default.createElement(AlignCenter_default, { size: 16 })), !excludeToolbarButtons.includes("alignRight") && /* @__PURE__ */ import_react36.default.createElement("button", { onClick: () => editor.chain().focus().setTextAlign("right").run(), className: `richer-editor-button ${editor.isActive({ textAlign: "right" }) ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": labels.alignRight, title: labels.alignRight }, /* @__PURE__ */ import_react36.default.createElement(AlignRight_default, { size: 16 })), !excludeToolbarButtons.includes("alignJustify") && /* @__PURE__ */ import_react36.default.createElement("button", { onClick: () => editor.chain().focus().setTextAlign("justify").run(), className: `richer-editor-button ${editor.isActive({ textAlign: "justify" }) ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": labels.alignJustify, title: labels.alignJustify }, /* @__PURE__ */ import_react36.default.createElement(AlignJustify_default, { size: 16 })), !excludeToolbarButtons.includes("textColor") && /* @__PURE__ */ import_react36.default.createElement("div", { className: "richer-editor-colorpicker-wrapper" }, /* @__PURE__ */ import_react36.default.createElement("span", { style: { display: "flex", alignItems: "center" } }, /* @__PURE__ */ import_react36.default.createElement(TextColorIcon_default, { size: 16 })), /* @__PURE__ */ import_react36.default.createElement(
    CustomDropdown_default,
    {
      open: textColorPopoverOpen,
      onOpenChange: setTextColorPopoverOpen,
      trigger: /* @__PURE__ */ import_react36.default.createElement(
        "button",
        {
          ref: textColorButtonRef,
          onClick: () => setTextColorPopoverOpen((open) => !open),
          onMouseDown: (e) => e.preventDefault(),
          className: `richer-editor-button${editor.getAttributes("textStyle").color ? " richer-editor-buttonActive" : ""}`,
          type: "button",
          "aria-label": labels.textColor,
          title: labels.textColor,
          style: { display: "flex", alignItems: "center", padding: 0, border: "none", background: "none", boxShadow: "none" }
        },
        /* @__PURE__ */ import_react36.default.createElement("span", { style: {
          display: "inline-block",
          width: 18,
          height: 18,
          borderRadius: "50%",
          background: editor.getAttributes("textStyle").color || "#000",
          border: "1px solid #ccc"
        } })
      ),
      width: "200px"
    },
    /* @__PURE__ */ import_react36.default.createElement("div", { style: { minWidth: 200, padding: 16 } }, editor.getAttributes("textStyle").color && /* @__PURE__ */ import_react36.default.createElement(
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
    ), /* @__PURE__ */ import_react36.default.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 8, marginBottom: 12 } }, colorPalette.map((color) => /* @__PURE__ */ import_react36.default.createElement(
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
  ), /* @__PURE__ */ import_react36.default.createElement(
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
  )), !excludeToolbarButtons.includes("bgColor") && /* @__PURE__ */ import_react36.default.createElement("div", { className: "richer-editor-colorpicker-wrapper" }, /* @__PURE__ */ import_react36.default.createElement("span", { style: { display: "flex", alignItems: "center" } }, /* @__PURE__ */ import_react36.default.createElement(PaintBucket_default, { size: 16 })), /* @__PURE__ */ import_react36.default.createElement(
    CustomDropdown_default,
    {
      open: bgColorPopoverOpen,
      onOpenChange: setBgColorPopoverOpen,
      trigger: /* @__PURE__ */ import_react36.default.createElement(
        "button",
        {
          ref: bgColorButtonRef,
          onClick: () => setBgColorPopoverOpen((open) => !open),
          onMouseDown: (e) => e.preventDefault(),
          className: `richer-editor-button${editor.getAttributes("highlight").color ? " richer-editor-buttonActive" : ""}`,
          type: "button",
          "aria-label": labels.bgColor,
          title: labels.bgColor,
          style: { display: "flex", alignItems: "center", padding: 0, border: "none", background: "none", boxShadow: "none" }
        },
        /* @__PURE__ */ import_react36.default.createElement("span", { style: {
          display: "inline-block",
          width: 18,
          height: 18,
          borderRadius: "50%",
          background: editor.getAttributes("highlight").color || "#ffff00",
          border: "1px solid #ccc"
        } })
      ),
      width: "200px"
    },
    /* @__PURE__ */ import_react36.default.createElement("div", { style: { minWidth: 200, padding: 16 } }, editor.getAttributes("highlight").color && /* @__PURE__ */ import_react36.default.createElement(
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
    ), /* @__PURE__ */ import_react36.default.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 8, marginBottom: 12 } }, colorPalette.map((color) => /* @__PURE__ */ import_react36.default.createElement(
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
  ), /* @__PURE__ */ import_react36.default.createElement(
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
  )), !excludeToolbarButtons.includes("subscript") && /* @__PURE__ */ import_react36.default.createElement(
    "button",
    {
      onClick: () => editor.chain().focus().toggleSubscript().run(),
      className: `richer-editor-button ${editor.isActive("subscript") ? "richer-editor-buttonActive" : ""}`,
      type: "button",
      title: labels.subscript,
      "aria-label": labels.subscript
    },
    /* @__PURE__ */ import_react36.default.createElement(SubscriptIcon_default, { size: 16 })
  ), !excludeToolbarButtons.includes("superscript") && /* @__PURE__ */ import_react36.default.createElement(
    "button",
    {
      onClick: () => editor.chain().focus().toggleSuperscript().run(),
      className: `richer-editor-button ${editor.isActive("superscript") ? "richer-editor-buttonActive" : ""}`,
      type: "button",
      title: labels.superscript,
      "aria-label": labels.superscript
    },
    /* @__PURE__ */ import_react36.default.createElement(SuperscriptIcon_default, { size: 16 })
  ), customToolbarButtons && (typeof customToolbarButtons === "function" ? customToolbarButtons(editor) : customToolbarButtons), !excludeToolbarButtons.includes("undo") && /* @__PURE__ */ import_react36.default.createElement(import_react36.default.Fragment, null, /* @__PURE__ */ import_react36.default.createElement("div", { className: "richer-editor-toolbar-divider" }), /* @__PURE__ */ import_react36.default.createElement("button", { onClick: () => editor.chain().focus().undo().run(), className: "richer-editor-button", type: "button", "aria-label": labels.undo, title: labels.undo }, /* @__PURE__ */ import_react36.default.createElement(UndoIcon_default, { size: 16 }))), !excludeToolbarButtons.includes("redo") && /* @__PURE__ */ import_react36.default.createElement("button", { onClick: () => editor.chain().focus().redo().run(), className: "richer-editor-button", type: "button", "aria-label": labels.redo, title: labels.redo }, /* @__PURE__ */ import_react36.default.createElement(RedoIcon_default, { size: 16 }))), !excludeToolbarButtons.includes("dragHandle") && /* @__PURE__ */ import_react36.default.createElement(import_extension_drag_handle_react.default, { editor }, /* @__PURE__ */ import_react36.default.createElement(DragIcon_default, { size: 18, style: { marginTop: 3 } })));
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
var RicherEditor = (0, import_react36.forwardRef)(function RicherEditor2({
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
    import_starter_kit.default.configure({
      codeBlock: false
      // Disable default code block to use our custom one
    }),
    CustomCodeBlock,
    import_extension_link.default.configure({ openOnClick: true }),
    CustomBulletList,
    CustomOrderedList,
    import_extension_text_align.default.configure({ types: ["heading", "paragraph"] }),
    import_extension_image.default,
    import_extension_task_list.default,
    import_extension_task_item.default,
    import_extension_superscript.default,
    import_extension_subscript.default,
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
    import_extension_text_style.LineHeight,
    import_extension_font_family.default,
    import_extension_font_size.default,
    import_extension_highlight.default.configure({
      multicolor: true
    })
  ];
  const editor = (0, import_react37.useEditor)({
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
  import_react36.default.useEffect(() => {
    if (editor && content && editor.isEmpty) {
      const safeContent = getSafeContent(content);
      const currentContent = editor.getJSON();
      if (JSON.stringify(currentContent) !== JSON.stringify(safeContent)) {
        editor.commands.setContent(safeContent);
      }
    }
  }, [content, editor]);
  const save = (0, import_react36.useCallback)(() => {
    if (editor && onChange) {
      onChange({
        html: editor.getHTML(),
        json: editor.getJSON()
      });
    }
  }, [editor, onChange]);
  const handleBlur = (0, import_react36.useCallback)(() => {
    save();
  }, [save]);
  (0, import_react36.useImperativeHandle)(ref, () => ({
    save,
    editor,
    clear: () => editor == null ? void 0 : editor.commands.clearContent()
  }), [save, editor]);
  return /* @__PURE__ */ import_react36.default.createElement("div", { className: `richer-editor-roundedMdBorder` }, /* @__PURE__ */ import_react36.default.createElement(MenuBar, { editor, imageUploadUrl, excludeToolbarButtons, i18n, fontSizeOptions, fontFamilyOptions, customToolbarButtons }), /* @__PURE__ */ import_react36.default.createElement("div", { className: "richer-editor-overflowAuto", style: { maxHeight } }, /* @__PURE__ */ import_react36.default.createElement(import_react37.EditorContent, { editor, onBlur: handleBlur })));
});
var RicherEditor_default = RicherEditor;

// src/components/SmallRicherEditor.tsx
var import_react39 = __toESM(require("react"));
var import_react40 = require("@tiptap/react");
var import_starter_kit2 = __toESM(require("@tiptap/starter-kit"));
var import_extension_link2 = __toESM(require("@tiptap/extension-link"));
var import_extension_highlight2 = __toESM(require("@tiptap/extension-highlight"));
var import_extension_youtube2 = __toESM(require("@tiptap/extension-youtube"));
var import_extension_text_align2 = __toESM(require("@tiptap/extension-text-align"));
var import_extension_text_style2 = require("@tiptap/extension-text-style");
var import_extension_font_size2 = __toESM(require("@tiptap/extension-font-size"));
var import_extension_image2 = __toESM(require("@tiptap/extension-image"));
var import_RicherEditor2 = require("./RicherEditor-YHKS4JYK.css");

// src/icons/Heading.tsx
var import_react38 = __toESM(require("react"));
var Heading = ({ size = 24, color = "currentColor", className = "", ...props }) => /* @__PURE__ */ import_react38.default.createElement(
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
  /* @__PURE__ */ import_react38.default.createElement("path", { d: "M6 12h12" }),
  /* @__PURE__ */ import_react38.default.createElement("path", { d: "M6 20V4" }),
  /* @__PURE__ */ import_react38.default.createElement("path", { d: "M18 20V4" })
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
  { value: "left", label: /* @__PURE__ */ import_react39.default.createElement(AlignLeft_default, { size: 18 }), name: "Left" },
  { value: "center", label: /* @__PURE__ */ import_react39.default.createElement(AlignCenter_default, { size: 18 }), name: "Center" },
  { value: "right", label: /* @__PURE__ */ import_react39.default.createElement(AlignRight_default, { size: 18 }), name: "Right" },
  { value: "justify", label: /* @__PURE__ */ import_react39.default.createElement(AlignJustify_default, { size: 18 }), name: "Justify" }
];
var headingOptions2 = [
  { level: 1, label: /* @__PURE__ */ import_react39.default.createElement(Heading1_default, { size: 18 }) },
  { level: 2, label: /* @__PURE__ */ import_react39.default.createElement(Heading2_default, { size: 18 }) },
  { level: 3, label: /* @__PURE__ */ import_react39.default.createElement(Heading3_default, { size: 18 }) },
  { level: 4, label: /* @__PURE__ */ import_react39.default.createElement(Heading4_default, { size: 18 }) },
  { level: 5, label: /* @__PURE__ */ import_react39.default.createElement(Heading5_default, { size: 18 }) },
  { level: 6, label: /* @__PURE__ */ import_react39.default.createElement(Heading6_default, { size: 18 }) }
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
  insert: "Insert",
  remove: "Remove",
  add: "Add",
  cancel: "Cancel",
  fontSize: "Font Size",
  heading: "Heading",
  paragraph: "Paragraph",
  url: "URL",
  upload: "Upload",
  pasteImageUrl: "Paste image URL here...",
  pasteLinkUrl: "Paste link URL here...",
  pasteVideoUrl: "Paste YouTube video URL here...",
  width: "Width",
  height: "Height",
  uploading: "Uploading...",
  uploadFailed: "Upload failed",
  newTab: "New Tab (_blank)",
  sameTab: "Same Tab (_self)",
  parentFrame: "Parent Frame (_parent)",
  topFrame: "Top Frame (_top)"
};
var MenuBar2 = ({ editor, imageUploadUrl, excludeToolbarButtons = [], i18n = {}, fontSizeOptions, fontFamilyOptions, customToolbarButtons }) => {
  const [editorState, setEditorState] = (0, import_react39.useState)({
    isCodeBlockActive: false,
    codeBlockLanguage: null
  });
  import_react39.default.useEffect(() => {
    if (!editor) return;
    const updateState = () => {
      setEditorState({
        isCodeBlockActive: editor.isActive("codeBlock"),
        codeBlockLanguage: editor.getAttributes("codeBlock").language
      });
    };
    updateState();
    editor.on("selectionUpdate", updateState);
    editor.on("transaction", updateState);
    return () => {
      editor.off("selectionUpdate", updateState);
      editor.off("transaction", updateState);
    };
  }, [editor]);
  const [imageDropdownOpen, setImageDropdownOpen] = (0, import_react39.useState)(false);
  const [imageTab, setImageTab] = (0, import_react39.useState)("url");
  const [imageUrl, setImageUrl] = (0, import_react39.useState)("");
  const [imageWidth, setImageWidth] = (0, import_react39.useState)("");
  const [imageHeight, setImageHeight] = (0, import_react39.useState)("");
  const [uploading, setUploading] = (0, import_react39.useState)(false);
  const [uploadError, setUploadError] = (0, import_react39.useState)(null);
  const [uploadedImageUrl, setUploadedImageUrl] = (0, import_react39.useState)("");
  const [imageFile, setImageFile] = (0, import_react39.useState)(null);
  const [videoDropdownOpen, setVideoDropdownOpen] = (0, import_react39.useState)(false);
  const [videoUrl, setVideoUrl] = (0, import_react39.useState)("");
  const [videoWidth, setVideoWidth] = (0, import_react39.useState)("");
  const [videoHeight, setVideoHeight] = (0, import_react39.useState)("");
  const [linkDropdownOpen, setLinkDropdownOpen] = (0, import_react39.useState)(false);
  const [linkUrl, setLinkUrl] = (0, import_react39.useState)("");
  const [linkTarget, setLinkTarget] = (0, import_react39.useState)("_blank");
  const linkButtonRef = import_react39.default.useRef(null);
  const imageButtonRef = import_react39.default.useRef(null);
  const videoButtonRef = import_react39.default.useRef(null);
  const labels = { ...defaultI18n2, ...i18n };
  const handleImageUrlInsert = (0, import_react39.useCallback)(() => {
    if (imageUrl && isSafeUrl2(imageUrl)) {
      const attrs = { src: imageUrl };
      if (imageWidth) attrs.width = imageWidth;
      if (imageHeight) attrs.height = imageHeight;
      editor.chain().focus().setImage(attrs).run();
      setImageDropdownOpen(false);
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
      setImageDropdownOpen(false);
      setUploadedImageUrl("");
      setImageFile(null);
      setImageWidth("");
      setImageHeight("");
      setUploadError(null);
      setImageTab("url");
    }
  };
  const handleVideoUrlInsert = (0, import_react39.useCallback)(() => {
    if (videoUrl && isSafeUrl2(videoUrl)) {
      const attrs = { src: videoUrl };
      if (videoWidth) attrs.width = videoWidth;
      if (videoHeight) attrs.height = videoHeight;
      editor.chain().focus().setYoutubeVideo(attrs).run();
      setVideoDropdownOpen(false);
      setVideoUrl("");
      setVideoWidth("");
      setVideoHeight("");
    } else if (videoUrl) {
      window.alert("Invalid or unsafe video URL.");
    }
  }, [editor, videoUrl, videoWidth, videoHeight]);
  const handleLinkInsert = (0, import_react39.useCallback)(() => {
    if (linkUrl && isSafeUrl2(linkUrl)) {
      editor.chain().focus().setLink({ href: linkUrl, target: linkTarget }).run();
      setLinkDropdownOpen(false);
      setLinkUrl("");
      setLinkTarget("_blank");
    } else if (linkUrl) {
      window.alert("Invalid or unsafe link URL.");
    }
  }, [editor, linkUrl, linkTarget]);
  const handleLinkUnset = (0, import_react39.useCallback)(() => {
    editor.chain().focus().unsetLink().run();
    setLinkDropdownOpen(false);
    setLinkUrl("");
  }, [editor]);
  if (!editor) return null;
  return /* @__PURE__ */ import_react39.default.createElement(import_react39.default.Fragment, null, /* @__PURE__ */ import_react39.default.createElement("div", { className: "richer-editor-toolbar" }, !excludeToolbarButtons.includes("heading") && /* @__PURE__ */ import_react39.default.createElement(import_react39.default.Fragment, null, /* @__PURE__ */ import_react39.default.createElement(
    CustomSelect_default,
    {
      value: "__placeholder__",
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
      placeholder: /* @__PURE__ */ import_react39.default.createElement(Heading_default, { size: 16 }),
      "aria-label": "Heading Level"
    }
  ), /* @__PURE__ */ import_react39.default.createElement("div", { className: "richer-editor-toolbar-divider" })), !excludeToolbarButtons.includes("fontSize") && /* @__PURE__ */ import_react39.default.createElement(
    CustomSelect_default,
    {
      value: "__placeholder__",
      options: (fontSizeOptions || fontSizes2).map((f) => ({ value: f.value, label: f.name })),
      onChange: (val) => editor.chain().focus().setFontSize(val).run(),
      className: "richer-editor-select",
      placeholder: labels.fontSize,
      "aria-label": labels.fontSize || "Font Size"
    }
  ), !excludeToolbarButtons.includes("bold") && /* @__PURE__ */ import_react39.default.createElement("button", { onClick: () => editor.chain().focus().toggleBold().run(), className: `richer-editor-button${editor.isActive("bold") ? " richer-editor-buttonActive" : ""}`, type: "button", "aria-label": labels.bold, title: labels.bold }, /* @__PURE__ */ import_react39.default.createElement(BoldIcon_default, { size: 16 })), !excludeToolbarButtons.includes("italic") && /* @__PURE__ */ import_react39.default.createElement("button", { onClick: () => editor.chain().focus().toggleItalic().run(), className: `richer-editor-button ${editor.isActive("italic") ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": labels.italic, title: labels.italic }, /* @__PURE__ */ import_react39.default.createElement(ItalicIcon_default, { size: 16 })), !excludeToolbarButtons.includes("underline") && /* @__PURE__ */ import_react39.default.createElement("button", { onClick: () => editor.chain().focus().toggleUnderline().run(), className: `richer-editor-button${editor.isActive("underline") ? " richer-editor-buttonActive" : ""}`, type: "button", "aria-label": labels.underline, title: labels.underline }, /* @__PURE__ */ import_react39.default.createElement(UnderlineIcon_default, { size: 16 })), !excludeToolbarButtons.includes("strike") && /* @__PURE__ */ import_react39.default.createElement("button", { onClick: () => editor.chain().focus().toggleStrike().run(), className: `richer-editor-button ${editor.isActive("strike") ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": labels.strike, title: labels.strike }, /* @__PURE__ */ import_react39.default.createElement(StrikeIcon_default, { size: 16 })), !excludeToolbarButtons.includes("highlight") && /* @__PURE__ */ import_react39.default.createElement("button", { onClick: () => editor.chain().focus().toggleHighlight({ color: "#fff59d" }).run(), className: `richer-editor-button${editor.isActive("highlight") ? " richer-editor-buttonActive" : ""}`, type: "button", "aria-label": labels.highlight, title: labels.highlight }, /* @__PURE__ */ import_react39.default.createElement(Highlighter_default, { size: 16 })), !excludeToolbarButtons.includes("code") && /* @__PURE__ */ import_react39.default.createElement(import_react39.default.Fragment, null, /* @__PURE__ */ import_react39.default.createElement("button", { onClick: () => editor.chain().focus().toggleCodeBlock().run(), className: `richer-editor-button${editorState.isCodeBlockActive ? " richer-editor-buttonActive" : ""}`, type: "button", "aria-label": labels.code, title: labels.code }, /* @__PURE__ */ import_react39.default.createElement(CodeIcon_default, { size: 16 })), editorState.isCodeBlockActive && /* @__PURE__ */ import_react39.default.createElement(
    CodeLanguageSelect_default,
    {
      editor,
      currentLanguage: editorState.codeBlockLanguage,
      onLanguageChange: (language) => {
        editor.chain().focus().setCodeBlockLanguage(language).run();
      }
    }
  ), /* @__PURE__ */ import_react39.default.createElement("div", { className: "richer-editor-toolbar-divider" })), !excludeToolbarButtons.includes("bulletList") && /* @__PURE__ */ import_react39.default.createElement("button", { onClick: () => editor.chain().focus().toggleBulletList().run(), className: `richer-editor-button${editor.isActive("bulletList") ? " richer-editor-buttonActive" : ""}`, type: "button", "aria-label": labels.bulletList, title: labels.bulletList }, /* @__PURE__ */ import_react39.default.createElement(BulletListIcon_default, { size: 16 })), !excludeToolbarButtons.includes("orderedList") && /* @__PURE__ */ import_react39.default.createElement(import_react39.default.Fragment, null, /* @__PURE__ */ import_react39.default.createElement("button", { onClick: () => editor.chain().focus().toggleOrderedList().run(), className: `richer-editor-button${editor.isActive("orderedList") ? " richer-editor-buttonActive" : ""}`, type: "button", "aria-label": labels.orderedList, title: labels.orderedList }, /* @__PURE__ */ import_react39.default.createElement(OrderedListIcon_default, { size: 16 })), /* @__PURE__ */ import_react39.default.createElement("div", { className: "richer-editor-toolbar-divider" })), !excludeToolbarButtons.includes("blockquote") && /* @__PURE__ */ import_react39.default.createElement("button", { onClick: () => editor.chain().focus().toggleBlockquote().run(), className: `richer-editor-button ${editor.isActive("blockquote") ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": labels.blockquote, title: labels.blockquote }, /* @__PURE__ */ import_react39.default.createElement(BlockquoteIcon_default, { size: 16 })), !excludeToolbarButtons.includes("hr") && /* @__PURE__ */ import_react39.default.createElement(import_react39.default.Fragment, null, /* @__PURE__ */ import_react39.default.createElement("button", { onClick: () => editor.chain().focus().setHorizontalRule().run(), className: "richer-editor-button", type: "button", "aria-label": labels.hr, title: labels.hr }, "HR"), /* @__PURE__ */ import_react39.default.createElement("div", { className: "richer-editor-toolbar-divider" })), !excludeToolbarButtons.includes("link") && /* @__PURE__ */ import_react39.default.createElement(
    CustomDropdown_default,
    {
      open: linkDropdownOpen,
      onOpenChange: (open) => {
        setLinkDropdownOpen(open);
        if (open) {
          setLinkUrl(editor.getAttributes("link").href || "");
          setLinkTarget(editor.getAttributes("link").target || "_blank");
        }
      },
      trigger: /* @__PURE__ */ import_react39.default.createElement(
        "button",
        {
          className: `richer-editor-button${editor.isActive("link") ? " richer-editor-buttonActive" : ""}`,
          type: "button",
          "aria-label": labels.link,
          title: labels.link
        },
        /* @__PURE__ */ import_react39.default.createElement(LinkIcon_default, { size: 16 })
      ),
      width: "280px"
    },
    /* @__PURE__ */ import_react39.default.createElement("div", { className: "richer-editor-mb2 richer-editor-fontSemibold richer-editor-textBase" }, labels.link),
    /* @__PURE__ */ import_react39.default.createElement(
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
    /* @__PURE__ */ import_react39.default.createElement(
      "select",
      {
        name: "target",
        value: linkTarget,
        onChange: (e) => setLinkTarget(e.target.value),
        className: "richer-editor-input",
        style: { marginBottom: 8 }
      },
      /* @__PURE__ */ import_react39.default.createElement("option", { value: "_blank" }, labels.newTab),
      /* @__PURE__ */ import_react39.default.createElement("option", { value: "_self" }, labels.sameTab),
      /* @__PURE__ */ import_react39.default.createElement("option", { value: "_parent" }, labels.parentFrame),
      /* @__PURE__ */ import_react39.default.createElement("option", { value: "_top" }, labels.topFrame)
    ),
    /* @__PURE__ */ import_react39.default.createElement("div", { className: "richer-editor-flexRow" }, /* @__PURE__ */ import_react39.default.createElement(
      "button",
      {
        className: "richer-editor-primaryBtn",
        onClick: handleLinkInsert,
        disabled: !linkUrl
      },
      labels.insert
    ), /* @__PURE__ */ import_react39.default.createElement(
      "button",
      {
        className: "richer-editor-secondaryBtn",
        onClick: handleLinkUnset,
        disabled: !editor.isActive("link")
      },
      labels.remove
    ))
  ), !excludeToolbarButtons.includes("image") && /* @__PURE__ */ import_react39.default.createElement(
    CustomDropdown_default,
    {
      open: imageDropdownOpen,
      onOpenChange: (open) => {
        setImageDropdownOpen(open);
        if (open && !imageUploadUrl) setImageTab("url");
      },
      trigger: /* @__PURE__ */ import_react39.default.createElement(
        "button",
        {
          className: "richer-editor-button",
          type: "button",
          "aria-label": labels.image,
          title: labels.image
        },
        /* @__PURE__ */ import_react39.default.createElement(ImageIcon_default, { size: 16 })
      ),
      width: "320px"
    },
    /* @__PURE__ */ import_react39.default.createElement("div", { className: "richer-editor-mb2 richer-editor-fontSemibold richer-editor-textBase flex gap-4 border-b pb-2" }, /* @__PURE__ */ import_react39.default.createElement("button", { className: `richer-editor-button${imageTab === "url" ? " richer-editor-buttonActive" : ""}`, onClick: () => setImageTab("url") }, labels.url), imageUploadUrl && /* @__PURE__ */ import_react39.default.createElement("button", { className: `richer-editor-button${imageTab === "upload" ? " richer-editor-buttonActive" : ""}`, onClick: () => setImageTab("upload") }, labels.upload)),
    imageTab === "url" && /* @__PURE__ */ import_react39.default.createElement(import_react39.default.Fragment, null, /* @__PURE__ */ import_react39.default.createElement(
      "input",
      {
        type: "text",
        placeholder: labels.pasteImageUrl,
        value: imageUrl,
        onChange: (e) => setImageUrl(e.target.value),
        className: "richer-editor-input",
        autoFocus: true
      }
    ), /* @__PURE__ */ import_react39.default.createElement("div", { className: "richer-editor-flexRowMb2" }, /* @__PURE__ */ import_react39.default.createElement(
      "input",
      {
        type: "text",
        placeholder: labels.width,
        value: imageWidth,
        onChange: (e) => setImageWidth(e.target.value),
        className: "richer-editor-input"
      }
    ), /* @__PURE__ */ import_react39.default.createElement(
      "input",
      {
        type: "text",
        placeholder: labels.height,
        value: imageHeight,
        onChange: (e) => setImageHeight(e.target.value),
        className: "richer-editor-input"
      }
    )), /* @__PURE__ */ import_react39.default.createElement("div", { className: "richer-editor-textXs" }, "Leave blank for default size. Use px (e.g. 400) or % (e.g. 50%)."), /* @__PURE__ */ import_react39.default.createElement(
      "button",
      {
        className: "richer-editor-primaryBtn",
        onClick: handleImageUrlInsert,
        disabled: !imageUrl
      },
      labels.image
    )),
    imageTab === "upload" && imageUploadUrl && /* @__PURE__ */ import_react39.default.createElement(import_react39.default.Fragment, null, !uploadedImageUrl && /* @__PURE__ */ import_react39.default.createElement(import_react39.default.Fragment, null, /* @__PURE__ */ import_react39.default.createElement(
      "input",
      {
        type: "file",
        accept: "image/*",
        onChange: handleUploadInputChange,
        className: "richer-editor-mb2",
        disabled: uploading
      }
    ), uploading && /* @__PURE__ */ import_react39.default.createElement("div", { className: "richer-editor-textSm richer-editor-textBlue600 richer-editor-mb2" }, labels.uploading), uploadError && /* @__PURE__ */ import_react39.default.createElement("div", { className: "richer-editor-textSm richer-editor-textRed600 richer-editor-mb2" }, labels.uploadFailed)), uploadedImageUrl && /* @__PURE__ */ import_react39.default.createElement(import_react39.default.Fragment, null, /* @__PURE__ */ import_react39.default.createElement("div", { className: "richer-editor-mb2 flex flex-col items-center" }, /* @__PURE__ */ import_react39.default.createElement("img", { src: uploadedImageUrl, alt: "Preview", className: "richer-editor-maxH40 richer-editor-maxWFull rounded border mb-2" })), /* @__PURE__ */ import_react39.default.createElement("div", { className: "richer-editor-flexRowMb2" }, /* @__PURE__ */ import_react39.default.createElement(
      "input",
      {
        type: "text",
        placeholder: labels.width,
        value: imageWidth,
        onChange: (e) => setImageWidth(e.target.value),
        className: "richer-editor-input"
      }
    ), /* @__PURE__ */ import_react39.default.createElement(
      "input",
      {
        type: "text",
        placeholder: labels.height,
        value: imageHeight,
        onChange: (e) => setImageHeight(e.target.value),
        className: "richer-editor-input"
      }
    )), /* @__PURE__ */ import_react39.default.createElement("div", { className: "richer-editor-flexRow" }, /* @__PURE__ */ import_react39.default.createElement(
      "button",
      {
        className: "richer-editor-primaryBtn",
        onClick: handleUploadedImageInsert
      },
      labels.add
    ), /* @__PURE__ */ import_react39.default.createElement(
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
  ), !excludeToolbarButtons.includes("video") && /* @__PURE__ */ import_react39.default.createElement(
    CustomDropdown_default,
    {
      open: videoDropdownOpen,
      onOpenChange: (open) => setVideoDropdownOpen(open),
      trigger: /* @__PURE__ */ import_react39.default.createElement(
        "button",
        {
          className: "richer-editor-button",
          type: "button",
          "aria-label": labels.video,
          title: labels.video
        },
        /* @__PURE__ */ import_react39.default.createElement(VideoIcon_default, { size: 16 })
      ),
      width: "280px"
    },
    /* @__PURE__ */ import_react39.default.createElement("div", { className: "richer-editor-mb2 richer-editor-fontSemibold richer-editor-textBase" }, labels.video),
    /* @__PURE__ */ import_react39.default.createElement(
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
    /* @__PURE__ */ import_react39.default.createElement("div", { className: "richer-editor-flexRowMb2" }, /* @__PURE__ */ import_react39.default.createElement(
      "input",
      {
        type: "text",
        placeholder: labels.width,
        value: videoWidth,
        onChange: (e) => setVideoWidth(e.target.value),
        className: "richer-editor-input"
      }
    ), /* @__PURE__ */ import_react39.default.createElement(
      "input",
      {
        type: "text",
        placeholder: labels.height,
        value: videoHeight,
        onChange: (e) => setVideoHeight(e.target.value),
        className: "richer-editor-input"
      }
    )),
    /* @__PURE__ */ import_react39.default.createElement("div", { className: "richer-editor-textXs" }, "Leave blank for default size. Use px (e.g. 400) or % (e.g. 50%)."),
    /* @__PURE__ */ import_react39.default.createElement(
      "button",
      {
        className: "richer-editor-primaryBtn",
        onClick: handleVideoUrlInsert,
        disabled: !videoUrl
      },
      labels.video
    )
  ), !excludeToolbarButtons.includes("align") && /* @__PURE__ */ import_react39.default.createElement(
    CustomSelect_default,
    {
      value: "__placeholder__",
      options: alignmentOptions.map((opt) => ({ value: opt.value, label: /* @__PURE__ */ import_react39.default.createElement(import_react39.default.Fragment, null, opt.label, " ", opt.name) })),
      onChange: (val) => editor.chain().focus().setTextAlign(val).run(),
      className: "richer-editor-select",
      placeholder: /* @__PURE__ */ import_react39.default.createElement(AlignJustify_default, { size: 16 })
    }
  ), customToolbarButtons && (typeof customToolbarButtons === "function" ? customToolbarButtons(editor) : customToolbarButtons)));
};
var SmallRicherEditor = (0, import_react39.forwardRef)(function SmallRicherEditor2({
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
    import_starter_kit2.default.configure({
      codeBlock: false
      // Disable default code block to use our custom one
    }),
    CustomCodeBlock,
    import_extension_link2.default.configure({ openOnClick: true }),
    import_extension_highlight2.default.configure({ multicolor: false, HTMLAttributes: { style: "background-color: #fff59d" } }),
    import_extension_text_align2.default.configure({ types: ["paragraph"] }),
    import_extension_image2.default,
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
    import_extension_font_size2.default
  ];
  const editor = (0, import_react40.useEditor)({
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
  import_react39.default.useEffect(() => {
    if (editor && content && editor.isEmpty) {
      const safeContent = getSafeContent(content);
      const currentContent = editor.getJSON();
      if (JSON.stringify(currentContent) !== JSON.stringify(safeContent)) {
        editor.commands.setContent(safeContent);
      }
    }
  }, [content, editor]);
  const save = (0, import_react39.useCallback)(() => {
    if (editor && onChange) {
      onChange({
        html: editor.getHTML(),
        json: editor.getJSON()
      });
    }
  }, [editor, onChange]);
  const handleBlur = (0, import_react39.useCallback)(() => {
    save();
  }, [save]);
  (0, import_react39.useImperativeHandle)(ref, () => ({
    save,
    editor,
    clear: () => editor == null ? void 0 : editor.commands.clearContent()
  }), [save, editor]);
  return /* @__PURE__ */ import_react39.default.createElement("div", { className: `richer-editor-roundedMdBorder` }, /* @__PURE__ */ import_react39.default.createElement(MenuBar2, { editor, imageUploadUrl, excludeToolbarButtons, i18n, fontSizeOptions, fontFamilyOptions, customToolbarButtons }), /* @__PURE__ */ import_react39.default.createElement("div", { className: "richer-editor-overflowAuto", style: { maxHeight } }, /* @__PURE__ */ import_react39.default.createElement(import_react40.EditorContent, { editor, onBlur: handleBlur })));
});
var SmallRicherEditor_default = SmallRicherEditor;

// src/components/RicherContent.tsx
var import_react41 = __toESM(require("react"));
var RicherContent = ({ content, className = "" }) => {
  return /* @__PURE__ */ import_react41.default.createElement("div", { className }, /* @__PURE__ */ import_react41.default.createElement(
    "div",
    {
      className: "max-w-none",
      dangerouslySetInnerHTML: { __html: content }
    }
  ));
};
var RicherContent_default = RicherContent;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CustomBulletList,
  CustomCodeBlock,
  CustomOrderedList,
  RicherContent,
  RicherEditor,
  SmallRicherEditor
});
//# sourceMappingURL=index.js.map