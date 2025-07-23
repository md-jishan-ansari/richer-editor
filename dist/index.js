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
var import_react32 = __toESM(require("react"));
var import_react33 = require("@tiptap/react");
var import_starter_kit = __toESM(require("@tiptap/starter-kit"));
var import_extension_link = __toESM(require("@tiptap/extension-link"));
var import_extension_text_align = __toESM(require("@tiptap/extension-text-align"));
var import_extension_task_list = __toESM(require("@tiptap/extension-task-list"));
var import_extension_task_item = __toESM(require("@tiptap/extension-task-item"));
var import_extension_superscript = __toESM(require("@tiptap/extension-superscript"));
var import_extension_subscript = __toESM(require("@tiptap/extension-subscript"));
var import_extension_image = __toESM(require("@tiptap/extension-image"));
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

// src/components/RicherEditor.tsx
var import_extension_text_style = require("@tiptap/extension-text-style");
var import_extension_font_family = __toESM(require("@tiptap/extension-font-family"));
var import_extension_font_size = __toESM(require("@tiptap/extension-font-size"));
var import_extension_color = __toESM(require("@tiptap/extension-color"));

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

// src/components/ui/CustomSelect.tsx
var import_react30 = __toESM(require("react"));
var import_react_dom = __toESM(require("react-dom"));
var import_CustomSelect = require("./CustomSelect-AGHTICJO.css");

// src/lib/utils.ts
var import_clsx = require("clsx");
function cn(...inputs) {
  return (0, import_clsx.clsx)(...inputs);
}

// src/components/ui/CustomSelect.tsx
var CustomSelect = ({ value, options, onChange, className, placeholder, label }) => {
  const [open, setOpen] = (0, import_react30.useState)(false);
  const [highlighted, setHighlighted] = (0, import_react30.useState)(-1);
  const triggerRef = (0, import_react30.useRef)(null);
  const listRef = (0, import_react30.useRef)(null);
  const [dropdownPos, setDropdownPos] = (0, import_react30.useState)({ top: 0, left: 0, width: 0 });
  (0, import_react30.useEffect)(() => {
    if (open && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setDropdownPos({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width
      });
    }
  }, [open]);
  (0, import_react30.useEffect)(() => {
    if (open && listRef.current && highlighted >= 0) {
      const el = listRef.current.children[highlighted];
      if (el) el.scrollIntoView({ block: "nearest" });
    }
  }, [open, highlighted]);
  (0, import_react30.useEffect)(() => {
    if (!open) setHighlighted(-1);
  }, [open]);
  (0, import_react30.useEffect)(() => {
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
  return /* @__PURE__ */ import_react30.default.createElement(
    "div",
    {
      className: cn("selectWrapper", className),
      tabIndex: 0,
      onBlur: (e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false);
      },
      style: { display: "inline-block" }
    },
    label && /* @__PURE__ */ import_react30.default.createElement("div", { className: "label" }, label),
    /* @__PURE__ */ import_react30.default.createElement(
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
      /* @__PURE__ */ import_react30.default.createElement("span", { className: selectedOption ? void 0 : "placeholder" }, selectedOption ? selectedOption.label : placeholder || "Select..."),
      /* @__PURE__ */ import_react30.default.createElement("span", { className: "chevron", "aria-hidden": true }, "\u25BC")
    ),
    open && import_react_dom.default.createPortal(
      /* @__PURE__ */ import_react30.default.createElement(
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
        options.map((opt, idx) => /* @__PURE__ */ import_react30.default.createElement(
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
var import_react31 = __toESM(require("react"));
var import_react_dom2 = __toESM(require("react-dom"));
var import_CustomPopover = require("./CustomPopover-WHNAJV7I.css");
var CustomPopover = ({ open, onOpenChange, anchorEl, children, className, closeButton, onEsc }) => {
  const popoverRef = (0, import_react31.useRef)(null);
  const [position, setPosition] = (0, import_react31.useState)({ top: 0, left: 0 });
  (0, import_react31.useEffect)(() => {
    if (open && anchorEl) {
      const rect = anchorEl.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY + 8,
        left: rect.left + window.scrollX
      });
    }
  }, [open, anchorEl]);
  (0, import_react31.useEffect)(() => {
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
    /* @__PURE__ */ import_react31.default.createElement(
      "div",
      {
        ref: popoverRef,
        className: cn("popover", className),
        style: { top: position.top, left: position.left, position: "absolute", zIndex: 1e3 },
        tabIndex: -1,
        role: "dialog"
      },
      closeButton && /* @__PURE__ */ import_react31.default.createElement(
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
var import_RicherEditor = require("./RicherEditor-FUKY63WW.css");
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
  { level: 1, label: /* @__PURE__ */ import_react32.default.createElement(Heading1_default, { size: 18 }) },
  { level: 2, label: /* @__PURE__ */ import_react32.default.createElement(Heading2_default, { size: 18 }) },
  { level: 3, label: /* @__PURE__ */ import_react32.default.createElement(Heading3_default, { size: 18 }) },
  { level: 4, label: /* @__PURE__ */ import_react32.default.createElement(Heading4_default, { size: 18 }) },
  { level: 5, label: /* @__PURE__ */ import_react32.default.createElement(Heading5_default, { size: 18 }) },
  { level: 6, label: /* @__PURE__ */ import_react32.default.createElement(Heading6_default, { size: 18 }) }
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
var MenuBar = ({ editor, imageUploadUrl, excludeToolbarButtons = [], i18n = {}, fontSizeOptions, fontFamilyOptions }) => {
  const [imagePopoverOpen, setImagePopoverOpen] = (0, import_react32.useState)(false);
  const [imageTab, setImageTab] = (0, import_react32.useState)("url");
  const [imageUrl, setImageUrl] = (0, import_react32.useState)("");
  const [imageWidth, setImageWidth] = (0, import_react32.useState)("");
  const [imageHeight, setImageHeight] = (0, import_react32.useState)("");
  const [uploading, setUploading] = (0, import_react32.useState)(false);
  const [uploadError, setUploadError] = (0, import_react32.useState)(null);
  const [uploadedImageUrl, setUploadedImageUrl] = (0, import_react32.useState)("");
  const [imageFile, setImageFile] = (0, import_react32.useState)(null);
  const [videoPopoverOpen, setVideoPopoverOpen] = (0, import_react32.useState)(false);
  const [videoUrl, setVideoUrl] = (0, import_react32.useState)("");
  const [videoWidth, setVideoWidth] = (0, import_react32.useState)("");
  const [videoHeight, setVideoHeight] = (0, import_react32.useState)("");
  const [linkPopoverOpen, setLinkPopoverOpen] = (0, import_react32.useState)(false);
  const [linkUrl, setLinkUrl] = (0, import_react32.useState)("");
  const [linkTarget, setLinkTarget] = (0, import_react32.useState)("_blank");
  const linkButtonRef = import_react32.default.useRef(null);
  const imageButtonRef = import_react32.default.useRef(null);
  const videoButtonRef = import_react32.default.useRef(null);
  const [textColorPopoverOpen, setTextColorPopoverOpen] = import_react32.default.useState(false);
  const textColorButtonRef = import_react32.default.useRef(null);
  const [bgColorPopoverOpen, setBgColorPopoverOpen] = import_react32.default.useState(false);
  const bgColorButtonRef = import_react32.default.useRef(null);
  const handleImageUrlInsert = (0, import_react32.useCallback)(() => {
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
  const handleVideoUrlInsert = (0, import_react32.useCallback)(() => {
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
  const handleLinkInsert = (0, import_react32.useCallback)(() => {
    if (linkUrl) {
      editor.chain().focus().setLink({ href: linkUrl, target: linkTarget }).run();
      setLinkPopoverOpen(false);
      setLinkUrl("");
      setLinkTarget("_blank");
    }
  }, [editor, linkUrl, linkTarget]);
  const handleLinkUnset = (0, import_react32.useCallback)(() => {
    editor.chain().focus().unsetLink().run();
    setLinkPopoverOpen(false);
    setLinkUrl("");
  }, [editor]);
  if (!editor) return null;
  const labels = { ...defaultI18n, ...i18n };
  return /* @__PURE__ */ import_react32.default.createElement("div", { className: "richer-editor-toolbar" }, /* @__PURE__ */ import_react32.default.createElement(
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
  ), /* @__PURE__ */ import_react32.default.createElement("div", { className: "toolbar-divider" }), /* @__PURE__ */ import_react32.default.createElement(
    CustomSelect_default,
    {
      value: editor.getAttributes("fontSize").fontSize || "",
      options: (fontSizeOptions || fontSizes).map((f) => ({ value: f.value, label: f.name })),
      onChange: (val) => editor.chain().focus().setFontSize(val).run(),
      className: "richer-editor-select",
      placeholder: "Font Size",
      "aria-label": "Font Size"
    }
  ), /* @__PURE__ */ import_react32.default.createElement(
    CustomSelect_default,
    {
      value: editor.getAttributes("fontFamily").fontFamily || "",
      options: (fontFamilyOptions || fontFamilies).map((f) => ({
        value: f.value,
        label: /* @__PURE__ */ import_react32.default.createElement("span", { style: { fontFamily: f.value } }, f.name)
      })),
      onChange: (val) => editor.chain().focus().setFontFamily(val).run(),
      className: "richer-editor-select",
      placeholder: "Font Family",
      "aria-label": "Font Family"
    }
  ), /* @__PURE__ */ import_react32.default.createElement("div", { className: "toolbar-divider" }), !excludeToolbarButtons.includes("bold") && /* @__PURE__ */ import_react32.default.createElement("button", { onClick: () => editor.chain().focus().toggleBold().run(), className: `richer-editor-button ${editor.isActive("bold") ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": labels.bold, title: labels.bold }, /* @__PURE__ */ import_react32.default.createElement(BoldIcon_default, { size: 16 })), !excludeToolbarButtons.includes("italic") && /* @__PURE__ */ import_react32.default.createElement("button", { onClick: () => editor.chain().focus().toggleItalic().run(), className: `richer-editor-button ${editor.isActive("italic") ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": labels.italic, title: labels.italic }, /* @__PURE__ */ import_react32.default.createElement(ItalicIcon_default, { size: 16 })), !excludeToolbarButtons.includes("underline") && /* @__PURE__ */ import_react32.default.createElement("button", { onClick: () => editor.chain().focus().toggleUnderline().run(), className: `richer-editor-button ${editor.isActive("underline") ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": labels.underline, title: labels.underline }, /* @__PURE__ */ import_react32.default.createElement(UnderlineIcon_default, { size: 16 })), !excludeToolbarButtons.includes("strike") && /* @__PURE__ */ import_react32.default.createElement("button", { onClick: () => editor.chain().focus().toggleStrike().run(), className: `richer-editor-button ${editor.isActive("strike") ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": labels.strike, title: labels.strike }, /* @__PURE__ */ import_react32.default.createElement(StrikeIcon_default, { size: 16 })), !excludeToolbarButtons.includes("highlight") && /* @__PURE__ */ import_react32.default.createElement("button", { onClick: () => editor.chain().focus().toggleHighlight().run(), className: `richer-editor-button ${editor.isActive("highlight") ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": labels.highlight, title: labels.highlight }, /* @__PURE__ */ import_react32.default.createElement(Highlighter_default, { size: 16 })), !excludeToolbarButtons.includes("code") && /* @__PURE__ */ import_react32.default.createElement("button", { onClick: () => editor.chain().focus().toggleCodeBlock().run(), className: `richer-editor-button ${editor.isActive("codeBlock") ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": labels.code, title: labels.code }, /* @__PURE__ */ import_react32.default.createElement(CodeIcon_default, { size: 16 })), /* @__PURE__ */ import_react32.default.createElement("div", { className: "toolbar-divider" }), !excludeToolbarButtons.includes("bulletList") && /* @__PURE__ */ import_react32.default.createElement(import_react32.default.Fragment, null, /* @__PURE__ */ import_react32.default.createElement("button", { onClick: () => editor.chain().focus().toggleBulletList().run(), className: `richer-editor-button ${editor.isActive("bulletList") ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": labels.bulletList, title: labels.bulletList }, /* @__PURE__ */ import_react32.default.createElement(BulletListIcon_default, { size: 16 })), /* @__PURE__ */ import_react32.default.createElement(
    CustomSelect_default,
    {
      value: editor.getAttributes("bulletList").listStyleType || "",
      options: unorderedListStyles.map((opt) => ({ value: opt.value, label: /* @__PURE__ */ import_react32.default.createElement(import_react32.default.Fragment, null, opt.icon, " ", opt.name) })),
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
  )), !excludeToolbarButtons.includes("orderedList") && /* @__PURE__ */ import_react32.default.createElement(import_react32.default.Fragment, null, /* @__PURE__ */ import_react32.default.createElement("button", { onClick: () => editor.chain().focus().toggleOrderedList().run(), className: `richer-editor-button ${editor.isActive("orderedList") ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": labels.orderedList, title: labels.orderedList }, /* @__PURE__ */ import_react32.default.createElement(OrderedListIcon_default, { size: 16 })), /* @__PURE__ */ import_react32.default.createElement(
    CustomSelect_default,
    {
      value: editor.getAttributes("orderedList").listStyleType || "",
      options: orderedListStyles.map((opt) => ({ value: opt.value, label: /* @__PURE__ */ import_react32.default.createElement(import_react32.default.Fragment, null, opt.icon, " ", opt.name) })),
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
  )), !excludeToolbarButtons.includes("taskList") && /* @__PURE__ */ import_react32.default.createElement("button", { onClick: () => editor.chain().focus().toggleTaskList().run(), className: `richer-editor-button ${editor.isActive("taskList") ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": labels.taskList, title: labels.taskList }, /* @__PURE__ */ import_react32.default.createElement(TaskListIcon_default, { size: 16 })), /* @__PURE__ */ import_react32.default.createElement("div", { className: "toolbar-divider" }), !excludeToolbarButtons.includes("blockquote") && /* @__PURE__ */ import_react32.default.createElement("button", { onClick: () => editor.chain().focus().toggleBlockquote().run(), className: `richer-editor-button ${editor.isActive("blockquote") ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": labels.blockquote, title: labels.blockquote }, /* @__PURE__ */ import_react32.default.createElement(BlockquoteIcon_default, { size: 16 })), !excludeToolbarButtons.includes("hr") && /* @__PURE__ */ import_react32.default.createElement("button", { onClick: () => editor.chain().focus().setHorizontalRule().run(), className: "richer-editor-button", type: "button", "aria-label": labels.hr, title: labels.hr }, "HR"), /* @__PURE__ */ import_react32.default.createElement("div", { className: "toolbar-divider" }), !excludeToolbarButtons.includes("link") && /* @__PURE__ */ import_react32.default.createElement(import_react32.default.Fragment, null, /* @__PURE__ */ import_react32.default.createElement(
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
    /* @__PURE__ */ import_react32.default.createElement(LinkIcon_default, { size: 16 })
  ), /* @__PURE__ */ import_react32.default.createElement(
    CustomPopover_default,
    {
      open: linkPopoverOpen,
      onOpenChange: setLinkPopoverOpen,
      anchorEl: linkButtonRef.current,
      closeButton: true,
      onEsc: () => setLinkPopoverOpen(false)
    },
    /* @__PURE__ */ import_react32.default.createElement("div", { className: "mb-2 font-semibold text-base" }, "Insert Link"),
    /* @__PURE__ */ import_react32.default.createElement(
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
    /* @__PURE__ */ import_react32.default.createElement(
      "select",
      {
        name: "target",
        value: linkTarget,
        onChange: (e) => setLinkTarget(e.target.value),
        className: "richer-editor-input",
        style: { marginBottom: 8 }
      },
      /* @__PURE__ */ import_react32.default.createElement("option", { value: "_blank" }, "New Tab (_blank)"),
      /* @__PURE__ */ import_react32.default.createElement("option", { value: "_self" }, "Same Tab (_self)"),
      /* @__PURE__ */ import_react32.default.createElement("option", { value: "_parent" }, "Parent Frame (_parent)"),
      /* @__PURE__ */ import_react32.default.createElement("option", { value: "_top" }, "Top Frame (_top)")
    ),
    /* @__PURE__ */ import_react32.default.createElement("div", { className: "richer-editor-flexRow" }, /* @__PURE__ */ import_react32.default.createElement(
      "button",
      {
        className: "richer-editor-primaryBtn",
        onClick: handleLinkInsert,
        disabled: !linkUrl
      },
      labels.insert
    ), /* @__PURE__ */ import_react32.default.createElement(
      "button",
      {
        className: "richer-editor-secondaryBtn",
        onClick: handleLinkUnset,
        disabled: !editor.isActive("link")
      },
      labels.remove
    ))
  )), !excludeToolbarButtons.includes("image") && /* @__PURE__ */ import_react32.default.createElement(import_react32.default.Fragment, null, /* @__PURE__ */ import_react32.default.createElement(
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
    /* @__PURE__ */ import_react32.default.createElement(ImageIcon_default, { size: 16 })
  ), /* @__PURE__ */ import_react32.default.createElement(
    CustomPopover_default,
    {
      open: imagePopoverOpen,
      onOpenChange: setImagePopoverOpen,
      anchorEl: imageButtonRef.current,
      closeButton: true,
      onEsc: () => setImagePopoverOpen(false)
    },
    /* @__PURE__ */ import_react32.default.createElement("div", { className: "mb-2 font-semibold text-base flex gap-4 border-b pb-2" }, /* @__PURE__ */ import_react32.default.createElement("button", { className: `richer-editor-button${imageTab === "url" ? " richer-editor-buttonActive" : ""}`, onClick: () => setImageTab("url") }, "URL"), imageUploadUrl && /* @__PURE__ */ import_react32.default.createElement("button", { className: `richer-editor-button${imageTab === "upload" ? " richer-editor-buttonActive" : ""}`, onClick: () => setImageTab("upload") }, "Upload")),
    imageTab === "url" && /* @__PURE__ */ import_react32.default.createElement(import_react32.default.Fragment, null, /* @__PURE__ */ import_react32.default.createElement(
      "input",
      {
        type: "text",
        placeholder: "Paste image URL here...",
        value: imageUrl,
        onChange: (e) => setImageUrl(e.target.value),
        className: "richer-editor-input",
        autoFocus: true
      }
    ), /* @__PURE__ */ import_react32.default.createElement("div", { className: "richer-editor-flexRowMb2" }, /* @__PURE__ */ import_react32.default.createElement(
      "input",
      {
        type: "text",
        placeholder: "Width (e.g. 400 or 50%)",
        value: imageWidth,
        onChange: (e) => setImageWidth(e.target.value),
        className: "richer-editor-input"
      }
    ), /* @__PURE__ */ import_react32.default.createElement(
      "input",
      {
        type: "text",
        placeholder: "Height (e.g. 300 or 50%)",
        value: imageHeight,
        onChange: (e) => setImageHeight(e.target.value),
        className: "richer-editor-input"
      }
    )), /* @__PURE__ */ import_react32.default.createElement("div", { className: "richer-editor-textXs" }, "Leave blank for default size. Use px (e.g. 400) or % (e.g. 50%)."), /* @__PURE__ */ import_react32.default.createElement(
      "button",
      {
        className: "richer-editor-primaryBtn",
        onClick: handleImageUrlInsert,
        disabled: !imageUrl
      },
      labels.image
    )),
    imageTab === "upload" && imageUploadUrl && /* @__PURE__ */ import_react32.default.createElement(import_react32.default.Fragment, null, !uploadedImageUrl && /* @__PURE__ */ import_react32.default.createElement(import_react32.default.Fragment, null, /* @__PURE__ */ import_react32.default.createElement(
      "input",
      {
        type: "file",
        accept: "image/*",
        onChange: handleUploadInputChange,
        className: "mb2",
        disabled: uploading
      }
    ), uploading && /* @__PURE__ */ import_react32.default.createElement("div", { className: "text-sm text-blue-600 mb-2" }, "Uploading..."), uploadError && /* @__PURE__ */ import_react32.default.createElement("div", { className: "text-sm text-red-600 mb-2" }, uploadError)), uploadedImageUrl && /* @__PURE__ */ import_react32.default.createElement(import_react32.default.Fragment, null, /* @__PURE__ */ import_react32.default.createElement("div", { className: "mb-2 flex flex-col items-center" }, /* @__PURE__ */ import_react32.default.createElement("img", { src: uploadedImageUrl, alt: "Preview", className: "max-h-40 max-w-full rounded border mb-2" })), /* @__PURE__ */ import_react32.default.createElement("div", { className: "richer-editor-flexRowMb2" }, /* @__PURE__ */ import_react32.default.createElement(
      "input",
      {
        type: "text",
        placeholder: "Width (e.g. 400 or 50%)",
        value: imageWidth,
        onChange: (e) => setImageWidth(e.target.value),
        className: "richer-editor-input"
      }
    ), /* @__PURE__ */ import_react32.default.createElement(
      "input",
      {
        type: "text",
        placeholder: "Height (e.g. 300 or 50%)",
        value: imageHeight,
        onChange: (e) => setImageHeight(e.target.value),
        className: "richer-editor-input"
      }
    )), /* @__PURE__ */ import_react32.default.createElement("div", { className: "richer-editor-flexRow" }, /* @__PURE__ */ import_react32.default.createElement(
      "button",
      {
        className: "richer-editor-primaryBtn",
        onClick: handleUploadedImageInsert
      },
      labels.add
    ), /* @__PURE__ */ import_react32.default.createElement(
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
  )), !excludeToolbarButtons.includes("video") && /* @__PURE__ */ import_react32.default.createElement(import_react32.default.Fragment, null, /* @__PURE__ */ import_react32.default.createElement(
    "button",
    {
      ref: videoButtonRef,
      onClick: () => setVideoPopoverOpen((open) => !open),
      className: "richer-editor-button",
      type: "button"
    },
    /* @__PURE__ */ import_react32.default.createElement(VideoIcon_default, { size: 16 })
  ), /* @__PURE__ */ import_react32.default.createElement(
    CustomPopover_default,
    {
      open: videoPopoverOpen,
      onOpenChange: setVideoPopoverOpen,
      anchorEl: videoButtonRef.current,
      closeButton: true,
      onEsc: () => setVideoPopoverOpen(false)
    },
    /* @__PURE__ */ import_react32.default.createElement("div", { className: "mb-2 font-semibold text-base" }, "Insert YouTube Video"),
    /* @__PURE__ */ import_react32.default.createElement(
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
    /* @__PURE__ */ import_react32.default.createElement("div", { className: "richer-editor-flexRowMb2" }, /* @__PURE__ */ import_react32.default.createElement(
      "input",
      {
        type: "text",
        placeholder: "Width (e.g. 400 or 50%)",
        value: videoWidth,
        onChange: (e) => setVideoWidth(e.target.value),
        className: "richer-editor-input"
      }
    ), /* @__PURE__ */ import_react32.default.createElement(
      "input",
      {
        type: "text",
        placeholder: "Height (e.g. 300 or 50%)",
        value: videoHeight,
        onChange: (e) => setVideoHeight(e.target.value),
        className: "richer-editor-input"
      }
    )),
    /* @__PURE__ */ import_react32.default.createElement("div", { className: "richer-editor-textXs" }, "Leave blank for default size. Use px (e.g. 400) or % (e.g. 50%)."),
    /* @__PURE__ */ import_react32.default.createElement(
      "button",
      {
        className: "richer-editor-primaryBtn",
        onClick: handleVideoUrlInsert,
        disabled: !videoUrl
      },
      labels.video
    )
  )), !excludeToolbarButtons.includes("alignLeft") && /* @__PURE__ */ import_react32.default.createElement("button", { onClick: () => editor.chain().focus().setTextAlign("left").run(), className: `richer-editor-button ${editor.isActive({ textAlign: "left" }) ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": labels.alignLeft, title: labels.alignLeft }, /* @__PURE__ */ import_react32.default.createElement(AlignLeft_default, { size: 16 })), !excludeToolbarButtons.includes("alignCenter") && /* @__PURE__ */ import_react32.default.createElement("button", { onClick: () => editor.chain().focus().setTextAlign("center").run(), className: `richer-editor-button ${editor.isActive({ textAlign: "center" }) ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": labels.alignCenter, title: labels.alignCenter }, /* @__PURE__ */ import_react32.default.createElement(AlignCenter_default, { size: 16 })), !excludeToolbarButtons.includes("alignRight") && /* @__PURE__ */ import_react32.default.createElement("button", { onClick: () => editor.chain().focus().setTextAlign("right").run(), className: `richer-editor-button ${editor.isActive({ textAlign: "right" }) ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": labels.alignRight, title: labels.alignRight }, /* @__PURE__ */ import_react32.default.createElement(AlignRight_default, { size: 16 })), !excludeToolbarButtons.includes("alignJustify") && /* @__PURE__ */ import_react32.default.createElement("button", { onClick: () => editor.chain().focus().setTextAlign("justify").run(), className: `richer-editor-button ${editor.isActive({ textAlign: "justify" }) ? "richer-editor-buttonActive" : ""}`, type: "button", "aria-label": labels.alignJustify, title: labels.alignJustify }, /* @__PURE__ */ import_react32.default.createElement(AlignJustify_default, { size: 16 })), !excludeToolbarButtons.includes("textColor") && /* @__PURE__ */ import_react32.default.createElement(import_react32.default.Fragment, null, /* @__PURE__ */ import_react32.default.createElement(
    "button",
    {
      ref: textColorButtonRef,
      onClick: () => setTextColorPopoverOpen((open) => !open),
      className: `richer-editor-button${editor.getAttributes("textStyle").color ? " richer-editor-buttonActive" : ""}`,
      type: "button",
      "aria-label": labels.textColor,
      title: labels.textColor,
      style: { position: "relative", display: "flex", alignItems: "center", gap: 4 }
    },
    /* @__PURE__ */ import_react32.default.createElement(TextColorIcon_default, { size: 16 }),
    /* @__PURE__ */ import_react32.default.createElement("span", { style: {
      display: "inline-block",
      width: 14,
      height: 14,
      borderRadius: "50%",
      background: editor.getAttributes("textStyle").color || "#000",
      border: "1px solid #ccc",
      marginLeft: 2
    } })
  ), /* @__PURE__ */ import_react32.default.createElement(
    CustomPopover_default,
    {
      open: textColorPopoverOpen,
      onOpenChange: setTextColorPopoverOpen,
      anchorEl: textColorButtonRef.current,
      closeButton: true,
      onEsc: () => setTextColorPopoverOpen(false)
    },
    /* @__PURE__ */ import_react32.default.createElement("div", { style: { minWidth: 200, padding: 16 } }, editor.getAttributes("textStyle").color && /* @__PURE__ */ import_react32.default.createElement(
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
      "Remove Color"
    ), /* @__PURE__ */ import_react32.default.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(8, 1fr)", gap: 8, marginBottom: 12 } }, colorPalette.map((color) => /* @__PURE__ */ import_react32.default.createElement(
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
    ))), /* @__PURE__ */ import_react32.default.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ import_react32.default.createElement(TextColorIcon_default, { size: 16 }), /* @__PURE__ */ import_react32.default.createElement(
      "input",
      {
        type: "color",
        value: editor.getAttributes("textStyle").color || "#000000",
        onChange: (e) => {
          editor.commands.focus();
          editor.commands.setColor(e.target.value);
          setTextColorPopoverOpen(false);
        },
        style: { width: 28, height: 28, border: "none", background: "none", cursor: "pointer", padding: 0 },
        className: "richer-editor-colorInput",
        "aria-label": "Custom text color picker"
      }
    )))
  )), !excludeToolbarButtons.includes("bgColor") && /* @__PURE__ */ import_react32.default.createElement(import_react32.default.Fragment, null, /* @__PURE__ */ import_react32.default.createElement(
    "button",
    {
      ref: bgColorButtonRef,
      onClick: () => setBgColorPopoverOpen((open) => !open),
      className: `richer-editor-button${editor.getAttributes("highlight").color ? " richer-editor-buttonActive" : ""}`,
      type: "button",
      "aria-label": labels.bgColor,
      title: labels.bgColor,
      style: { position: "relative", display: "flex", alignItems: "center", gap: 4 }
    },
    /* @__PURE__ */ import_react32.default.createElement(PaintBucket_default, { size: 16 }),
    /* @__PURE__ */ import_react32.default.createElement("span", { style: {
      display: "inline-block",
      width: 14,
      height: 14,
      borderRadius: "50%",
      background: editor.getAttributes("highlight").color || "#ffff00",
      border: "1px solid #ccc",
      marginLeft: 2
    } })
  ), /* @__PURE__ */ import_react32.default.createElement(
    CustomPopover_default,
    {
      open: bgColorPopoverOpen,
      onOpenChange: setBgColorPopoverOpen,
      anchorEl: bgColorButtonRef.current,
      closeButton: true,
      onEsc: () => setBgColorPopoverOpen(false)
    },
    /* @__PURE__ */ import_react32.default.createElement("div", { style: { minWidth: 200, padding: 16 } }, editor.getAttributes("highlight").color && /* @__PURE__ */ import_react32.default.createElement(
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
      "Remove Color"
    ), /* @__PURE__ */ import_react32.default.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(8, 1fr)", gap: 8, marginBottom: 12 } }, colorPalette.map((color) => /* @__PURE__ */ import_react32.default.createElement(
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
    ))), /* @__PURE__ */ import_react32.default.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ import_react32.default.createElement(PaintBucket_default, { size: 16 }), /* @__PURE__ */ import_react32.default.createElement(
      "input",
      {
        type: "color",
        value: editor.getAttributes("highlight").color || "#ffff00",
        onChange: (e) => {
          editor.commands.focus();
          editor.commands.setHighlight({ color: e.target.value });
          setBgColorPopoverOpen(false);
        },
        style: { width: 28, height: 28, border: "none", background: "none", cursor: "pointer", padding: 0 },
        className: "richer-editor-colorInput",
        "aria-label": "Custom background color picker"
      }
    )))
  )), !excludeToolbarButtons.includes("subscript") && /* @__PURE__ */ import_react32.default.createElement(
    "button",
    {
      onClick: () => editor.chain().focus().toggleSubscript().run(),
      className: `richer-editor-button ${editor.isActive("subscript") ? "richer-editor-buttonActive" : ""}`,
      type: "button",
      title: "Subscript",
      "aria-label": labels.subscript
    },
    /* @__PURE__ */ import_react32.default.createElement(SubscriptIcon_default, { size: 16 })
  ), !excludeToolbarButtons.includes("superscript") && /* @__PURE__ */ import_react32.default.createElement(
    "button",
    {
      onClick: () => editor.chain().focus().toggleSuperscript().run(),
      className: `richer-editor-button ${editor.isActive("superscript") ? "richer-editor-buttonActive" : ""}`,
      type: "button",
      title: "Superscript",
      "aria-label": labels.superscript
    },
    /* @__PURE__ */ import_react32.default.createElement(SuperscriptIcon_default, { size: 16 })
  ), /* @__PURE__ */ import_react32.default.createElement("div", { className: "richer-editor-ml2" }), !excludeToolbarButtons.includes("undo") && /* @__PURE__ */ import_react32.default.createElement("button", { onClick: () => editor.chain().focus().undo().run(), className: "richer-editor-button", type: "button", "aria-label": labels.undo, title: labels.undo }, /* @__PURE__ */ import_react32.default.createElement(UndoIcon_default, { size: 16 })), !excludeToolbarButtons.includes("redo") && /* @__PURE__ */ import_react32.default.createElement("button", { onClick: () => editor.chain().focus().redo().run(), className: "richer-editor-button", type: "button", "aria-label": labels.redo, title: labels.redo }, /* @__PURE__ */ import_react32.default.createElement(RedoIcon_default, { size: 16 })));
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
  i18n = {},
  fontSizeOptions,
  fontFamilyOptions
}) => {
  var _a;
  const safeContent = import_react32.default.useMemo(() => getSafeContent(content, outputFormat), [content, outputFormat]);
  const editor = (0, import_react33.useEditor)({
    extensions: [
      import_starter_kit.default,
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
        class: `richer-editor-textarea ${className || ""}`,
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
  import_react32.default.useEffect(() => {
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
  return /* @__PURE__ */ import_react32.default.createElement("div", { className: `richer-editor-roundedMdBorder` }, /* @__PURE__ */ import_react32.default.createElement(MenuBar, { editor, imageUploadUrl, excludeToolbarButtons, i18n, fontSizeOptions, fontFamilyOptions }), /* @__PURE__ */ import_react32.default.createElement("div", { className: "richer-editor-overflowAuto", style: { maxHeight } }, /* @__PURE__ */ import_react32.default.createElement(import_react33.EditorContent, { editor })));
};
var RicherEditor_default = RicherEditor;

// src/components/SmallRicherEditor.tsx
var import_react34 = __toESM(require("react"));
var import_react35 = require("@tiptap/react");
var import_starter_kit2 = __toESM(require("@tiptap/starter-kit"));
var import_extension_link2 = __toESM(require("@tiptap/extension-link"));
var import_extension_highlight2 = __toESM(require("@tiptap/extension-highlight"));
var import_extension_youtube2 = __toESM(require("@tiptap/extension-youtube"));
var import_extension_text_align2 = __toESM(require("@tiptap/extension-text-align"));
var import_extension_text_style2 = require("@tiptap/extension-text-style");
var import_extension_font_size2 = __toESM(require("@tiptap/extension-font-size"));
var import_extension_placeholder2 = __toESM(require("@tiptap/extension-placeholder"));
var import_extension_image2 = __toESM(require("@tiptap/extension-image"));
var import_RicherEditor2 = require("./RicherEditor-FUKY63WW.css");
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
var fontFamilies2 = [
  { name: "Sans-serif", value: "sans-serif" },
  { name: "Serif", value: "serif" },
  { name: "Monospace", value: "monospace" },
  { name: "Arial", value: "Arial, sans-serif" },
  { name: "Georgia", value: "Georgia, serif" },
  { name: "Inter", value: "Inter, sans-serif" }
];
var alignmentOptions = [
  { value: "left", label: /* @__PURE__ */ import_react34.default.createElement(AlignLeft_default, { size: 18 }), name: "Left" },
  { value: "center", label: /* @__PURE__ */ import_react34.default.createElement(AlignCenter_default, { size: 18 }), name: "Center" },
  { value: "right", label: /* @__PURE__ */ import_react34.default.createElement(AlignRight_default, { size: 18 }), name: "Right" },
  { value: "justify", label: /* @__PURE__ */ import_react34.default.createElement(AlignJustify_default, { size: 18 }), name: "Justify" }
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
var MenuBar2 = ({ editor, imageUploadUrl, excludeToolbarButtons = [], i18n = {}, fontSizeOptions, fontFamilyOptions }) => {
  const [imagePopoverOpen, setImagePopoverOpen] = (0, import_react34.useState)(false);
  const [imageTab, setImageTab] = (0, import_react34.useState)("url");
  const [imageUrl, setImageUrl] = (0, import_react34.useState)("");
  const [imageWidth, setImageWidth] = (0, import_react34.useState)("");
  const [imageHeight, setImageHeight] = (0, import_react34.useState)("");
  const [uploading, setUploading] = (0, import_react34.useState)(false);
  const [uploadError, setUploadError] = (0, import_react34.useState)(null);
  const [uploadedImageUrl, setUploadedImageUrl] = (0, import_react34.useState)("");
  const [imageFile, setImageFile] = (0, import_react34.useState)(null);
  const [videoPopoverOpen, setVideoPopoverOpen] = (0, import_react34.useState)(false);
  const [videoUrl, setVideoUrl] = (0, import_react34.useState)("");
  const [videoWidth, setVideoWidth] = (0, import_react34.useState)("");
  const [videoHeight, setVideoHeight] = (0, import_react34.useState)("");
  const [linkPopoverOpen, setLinkPopoverOpen] = (0, import_react34.useState)(false);
  const [linkUrl, setLinkUrl] = (0, import_react34.useState)("");
  const [linkTarget, setLinkTarget] = (0, import_react34.useState)("_blank");
  const linkButtonRef = import_react34.default.useRef(null);
  const imageButtonRef = import_react34.default.useRef(null);
  const videoButtonRef = import_react34.default.useRef(null);
  const labels = { ...defaultI18n2, ...i18n };
  const handleImageUrlInsert = (0, import_react34.useCallback)(() => {
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
  const handleVideoUrlInsert = (0, import_react34.useCallback)(() => {
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
  const handleLinkInsert = (0, import_react34.useCallback)(() => {
    if (linkUrl) {
      editor.chain().focus().setLink({ href: linkUrl, target: linkTarget }).run();
      setLinkPopoverOpen(false);
      setLinkUrl("");
      setLinkTarget("_blank");
    }
  }, [editor, linkUrl, linkTarget]);
  const handleLinkUnset = (0, import_react34.useCallback)(() => {
    editor.chain().focus().unsetLink().run();
    setLinkPopoverOpen(false);
    setLinkUrl("");
  }, [editor]);
  if (!editor) return null;
  return /* @__PURE__ */ import_react34.default.createElement(import_react34.default.Fragment, null, /* @__PURE__ */ import_react34.default.createElement("div", { className: "richer-editor-toolbar" }, !excludeToolbarButtons.includes("fontSize") && /* @__PURE__ */ import_react34.default.createElement(
    CustomSelect_default,
    {
      value: editor.getAttributes("fontSize").fontSize || "",
      options: (fontSizeOptions || fontSizes2).map((f) => ({ value: f.value, label: f.name })),
      onChange: (val) => editor.chain().focus().setFontSize(val).run(),
      className: "richer-editor-select",
      placeholder: labels.fontSize || "Font Size",
      "aria-label": labels.fontSize || "Font Size"
    }
  ), !excludeToolbarButtons.includes("fontFamily") && /* @__PURE__ */ import_react34.default.createElement(
    CustomSelect_default,
    {
      value: editor.getAttributes("fontFamily").fontFamily || "",
      options: (fontFamilyOptions || fontFamilies2).map((f) => ({ value: f.value, label: /* @__PURE__ */ import_react34.default.createElement("span", { style: { fontFamily: f.value } }, f.name) })),
      onChange: (val) => editor.chain().focus().setFontFamily(val).run(),
      className: "richer-editor-select",
      placeholder: "Font Family",
      "aria-label": "Font Family"
    }
  ), /* @__PURE__ */ import_react34.default.createElement("div", { className: "toolbar-divider" }), !excludeToolbarButtons.includes("bold") && /* @__PURE__ */ import_react34.default.createElement("button", { onClick: () => editor.chain().focus().toggleBold().run(), className: `richer-editor-button${editor.isActive("bold") ? " richer-editor-buttonActive" : ""}`, type: "button", "aria-label": labels.bold, title: labels.bold }, /* @__PURE__ */ import_react34.default.createElement(BoldIcon_default, { size: 16 })), !excludeToolbarButtons.includes("underline") && /* @__PURE__ */ import_react34.default.createElement("button", { onClick: () => editor.chain().focus().toggleUnderline().run(), className: `richer-editor-button${editor.isActive("underline") ? " richer-editor-buttonActive" : ""}`, type: "button", "aria-label": labels.underline, title: labels.underline }, /* @__PURE__ */ import_react34.default.createElement(UnderlineIcon_default, { size: 16 })), !excludeToolbarButtons.includes("highlight") && /* @__PURE__ */ import_react34.default.createElement("button", { onClick: () => editor.chain().focus().toggleHighlight({ color: "#fff59d" }).run(), className: `richer-editor-button${editor.isActive("highlight") ? " richer-editor-buttonActive" : ""}`, type: "button", "aria-label": labels.highlight, title: labels.highlight }, /* @__PURE__ */ import_react34.default.createElement(Highlighter_default, { size: 16 })), !excludeToolbarButtons.includes("code") && /* @__PURE__ */ import_react34.default.createElement("button", { onClick: () => editor.chain().focus().toggleCodeBlock().run(), className: `richer-editor-button${editor.isActive("codeBlock") ? " richer-editor-buttonActive" : ""}`, type: "button", "aria-label": labels.code, title: labels.code }, /* @__PURE__ */ import_react34.default.createElement(CodeIcon_default, { size: 16 })), /* @__PURE__ */ import_react34.default.createElement("div", { className: "toolbar-divider" }), !excludeToolbarButtons.includes("bulletList") && /* @__PURE__ */ import_react34.default.createElement("button", { onClick: () => editor.chain().focus().toggleBulletList().run(), className: `richer-editor-button${editor.isActive("bulletList") ? " richer-editor-buttonActive" : ""}`, type: "button", "aria-label": labels.bulletList, title: labels.bulletList }, /* @__PURE__ */ import_react34.default.createElement(BulletListIcon_default, { size: 16 })), !excludeToolbarButtons.includes("orderedList") && /* @__PURE__ */ import_react34.default.createElement("button", { onClick: () => editor.chain().focus().toggleOrderedList().run(), className: `richer-editor-button${editor.isActive("orderedList") ? " richer-editor-buttonActive" : ""}`, type: "button", "aria-label": labels.orderedList, title: labels.orderedList }, /* @__PURE__ */ import_react34.default.createElement(OrderedListIcon_default, { size: 16 })), /* @__PURE__ */ import_react34.default.createElement("div", { className: "toolbar-divider" }), !excludeToolbarButtons.includes("link") && /* @__PURE__ */ import_react34.default.createElement(import_react34.default.Fragment, null, /* @__PURE__ */ import_react34.default.createElement(
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
    /* @__PURE__ */ import_react34.default.createElement(LinkIcon_default, { size: 16 })
  ), /* @__PURE__ */ import_react34.default.createElement(
    CustomPopover_default,
    {
      open: linkPopoverOpen,
      onOpenChange: setLinkPopoverOpen,
      anchorEl: linkButtonRef.current,
      closeButton: true,
      onEsc: () => setLinkPopoverOpen(false)
    },
    /* @__PURE__ */ import_react34.default.createElement("div", { className: "mb-2 font-semibold text-base" }, labels.link),
    /* @__PURE__ */ import_react34.default.createElement(
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
    /* @__PURE__ */ import_react34.default.createElement(
      "select",
      {
        name: "target",
        value: linkTarget,
        onChange: (e) => setLinkTarget(e.target.value),
        className: "richer-editor-input",
        style: { marginBottom: 8 }
      },
      /* @__PURE__ */ import_react34.default.createElement("option", { value: "_blank" }, "New Tab (_blank)"),
      /* @__PURE__ */ import_react34.default.createElement("option", { value: "_self" }, "Same Tab (_self)"),
      /* @__PURE__ */ import_react34.default.createElement("option", { value: "_parent" }, "Parent Frame (_parent)"),
      /* @__PURE__ */ import_react34.default.createElement("option", { value: "_top" }, "Top Frame (_top)")
    ),
    /* @__PURE__ */ import_react34.default.createElement("div", { className: "richer-editor-flexRow" }, /* @__PURE__ */ import_react34.default.createElement(
      "button",
      {
        className: "richer-editor-primaryBtn",
        onClick: handleLinkInsert,
        disabled: !linkUrl
      },
      labels.insert
    ), /* @__PURE__ */ import_react34.default.createElement(
      "button",
      {
        className: "richer-editor-secondaryBtn",
        onClick: handleLinkUnset,
        disabled: !editor.isActive("link")
      },
      labels.remove
    ))
  )), !excludeToolbarButtons.includes("image") && /* @__PURE__ */ import_react34.default.createElement(import_react34.default.Fragment, null, /* @__PURE__ */ import_react34.default.createElement(
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
    /* @__PURE__ */ import_react34.default.createElement(ImageIcon_default, { size: 16 })
  ), /* @__PURE__ */ import_react34.default.createElement(
    CustomPopover_default,
    {
      open: imagePopoverOpen,
      onOpenChange: setImagePopoverOpen,
      anchorEl: imageButtonRef.current,
      closeButton: true,
      onEsc: () => setImagePopoverOpen(false)
    },
    /* @__PURE__ */ import_react34.default.createElement("div", { className: "mb-2 font-semibold text-base flex gap-4 border-b pb-2" }, /* @__PURE__ */ import_react34.default.createElement("button", { className: `richer-editor-button${imageTab === "url" ? " richer-editor-buttonActive" : ""}`, onClick: () => setImageTab("url") }, "URL"), imageUploadUrl && /* @__PURE__ */ import_react34.default.createElement("button", { className: `richer-editor-button${imageTab === "upload" ? " richer-editor-buttonActive" : ""}`, onClick: () => setImageTab("upload") }, "Upload")),
    imageTab === "url" && /* @__PURE__ */ import_react34.default.createElement(import_react34.default.Fragment, null, /* @__PURE__ */ import_react34.default.createElement(
      "input",
      {
        type: "text",
        placeholder: "Paste image URL here...",
        value: imageUrl,
        onChange: (e) => setImageUrl(e.target.value),
        className: "richer-editor-input",
        autoFocus: true
      }
    ), /* @__PURE__ */ import_react34.default.createElement("div", { className: "richer-editor-flexRowMb2" }, /* @__PURE__ */ import_react34.default.createElement(
      "input",
      {
        type: "text",
        placeholder: "Width (e.g. 400 or 50%)",
        value: imageWidth,
        onChange: (e) => setImageWidth(e.target.value),
        className: "richer-editor-input"
      }
    ), /* @__PURE__ */ import_react34.default.createElement(
      "input",
      {
        type: "text",
        placeholder: "Height (e.g. 300 or 50%)",
        value: imageHeight,
        onChange: (e) => setImageHeight(e.target.value),
        className: "richer-editor-input"
      }
    )), /* @__PURE__ */ import_react34.default.createElement("div", { className: "richer-editor-textXs" }, "Leave blank for default size. Use px (e.g. 400) or % (e.g. 50%)."), /* @__PURE__ */ import_react34.default.createElement(
      "button",
      {
        className: "richer-editor-primaryBtn",
        onClick: handleImageUrlInsert,
        disabled: !imageUrl
      },
      labels.image
    )),
    imageTab === "upload" && imageUploadUrl && /* @__PURE__ */ import_react34.default.createElement(import_react34.default.Fragment, null, !uploadedImageUrl && /* @__PURE__ */ import_react34.default.createElement(import_react34.default.Fragment, null, /* @__PURE__ */ import_react34.default.createElement(
      "input",
      {
        type: "file",
        accept: "image/*",
        onChange: handleUploadInputChange,
        className: "mb2",
        disabled: uploading
      }
    ), uploading && /* @__PURE__ */ import_react34.default.createElement("div", { className: "text-sm text-blue-600 mb-2" }, "Uploading..."), uploadError && /* @__PURE__ */ import_react34.default.createElement("div", { className: "text-sm text-red-600 mb-2" }, uploadError)), uploadedImageUrl && /* @__PURE__ */ import_react34.default.createElement(import_react34.default.Fragment, null, /* @__PURE__ */ import_react34.default.createElement("div", { className: "mb-2 flex flex-col items-center" }, /* @__PURE__ */ import_react34.default.createElement("img", { src: uploadedImageUrl, alt: "Preview", className: "max-h-40 max-w-full rounded border mb-2" })), /* @__PURE__ */ import_react34.default.createElement("div", { className: "richer-editor-flexRowMb2" }, /* @__PURE__ */ import_react34.default.createElement(
      "input",
      {
        type: "text",
        placeholder: "Width (e.g. 400 or 50%)",
        value: imageWidth,
        onChange: (e) => setImageWidth(e.target.value),
        className: "richer-editor-input"
      }
    ), /* @__PURE__ */ import_react34.default.createElement(
      "input",
      {
        type: "text",
        placeholder: "Height (e.g. 300 or 50%)",
        value: imageHeight,
        onChange: (e) => setImageHeight(e.target.value),
        className: "richer-editor-input"
      }
    )), /* @__PURE__ */ import_react34.default.createElement("div", { className: "richer-editor-flexRow" }, /* @__PURE__ */ import_react34.default.createElement(
      "button",
      {
        className: "richer-editor-primaryBtn",
        onClick: handleUploadedImageInsert
      },
      labels.add
    ), /* @__PURE__ */ import_react34.default.createElement(
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
  )), !excludeToolbarButtons.includes("video") && /* @__PURE__ */ import_react34.default.createElement(import_react34.default.Fragment, null, /* @__PURE__ */ import_react34.default.createElement(
    "button",
    {
      ref: videoButtonRef,
      onClick: () => setVideoPopoverOpen((open) => !open),
      className: "richer-editor-button",
      type: "button",
      "aria-label": labels.video,
      title: labels.video
    },
    /* @__PURE__ */ import_react34.default.createElement(VideoIcon_default, { size: 16 })
  ), /* @__PURE__ */ import_react34.default.createElement(
    CustomPopover_default,
    {
      open: videoPopoverOpen,
      onOpenChange: setVideoPopoverOpen,
      anchorEl: videoButtonRef.current,
      closeButton: true,
      onEsc: () => setVideoPopoverOpen(false)
    },
    /* @__PURE__ */ import_react34.default.createElement("div", { className: "mb-2 font-semibold text-base" }, labels.video),
    /* @__PURE__ */ import_react34.default.createElement(
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
    /* @__PURE__ */ import_react34.default.createElement("div", { className: "richer-editor-flexRowMb2" }, /* @__PURE__ */ import_react34.default.createElement(
      "input",
      {
        type: "text",
        placeholder: "Width (e.g. 400 or 50%)",
        value: videoWidth,
        onChange: (e) => setVideoWidth(e.target.value),
        className: "richer-editor-input"
      }
    ), /* @__PURE__ */ import_react34.default.createElement(
      "input",
      {
        type: "text",
        placeholder: "Height (e.g. 300 or 50%)",
        value: videoHeight,
        onChange: (e) => setVideoHeight(e.target.value),
        className: "richer-editor-input"
      }
    )),
    /* @__PURE__ */ import_react34.default.createElement("div", { className: "richer-editor-textXs" }, "Leave blank for default size. Use px (e.g. 400) or % (e.g. 50%)."),
    /* @__PURE__ */ import_react34.default.createElement(
      "button",
      {
        className: "richer-editor-primaryBtn",
        onClick: handleVideoUrlInsert,
        disabled: !videoUrl
      },
      labels.video
    )
  )), !excludeToolbarButtons.includes("align") && /* @__PURE__ */ import_react34.default.createElement(
    CustomSelect_default,
    {
      value: editor.getAttributes("textAlign") || "left",
      options: alignmentOptions.map((opt) => ({ value: opt.value, label: /* @__PURE__ */ import_react34.default.createElement(import_react34.default.Fragment, null, opt.label, " ", opt.name) })),
      onChange: (val) => editor.chain().focus().setTextAlign(val).run(),
      className: "richer-editor-select",
      placeholder: labels.align
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
  i18n = {},
  fontSizeOptions,
  fontFamilyOptions
}) => {
  var _a;
  const safeContent = import_react34.default.useMemo(() => getSafeContent2(content, outputFormat), [content, outputFormat]);
  const editor = (0, import_react35.useEditor)({
    extensions: [
      import_starter_kit2.default,
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
      import_extension_font_size2.default,
      import_extension_placeholder2.default.configure({
        placeholder: placeholder || "Write something..."
      })
    ],
    content: safeContent,
    editorProps: {
      ...editorProps,
      attributes: {
        class: `richer-editor-textarea ${className || ""}`,
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
  import_react34.default.useEffect(() => {
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
  return /* @__PURE__ */ import_react34.default.createElement("div", { className: `richer-editor-roundedMdBorder` }, /* @__PURE__ */ import_react34.default.createElement(MenuBar2, { editor, imageUploadUrl, excludeToolbarButtons, i18n, fontSizeOptions, fontFamilyOptions }), /* @__PURE__ */ import_react34.default.createElement("div", { className: "richer-editor-overflowAuto", style: { maxHeight } }, /* @__PURE__ */ import_react34.default.createElement(import_react35.EditorContent, { editor })));
};
var SmallRicherEditor_default = SmallRicherEditor;

// src/components/RicherContent.tsx
var import_react36 = __toESM(require("react"));
var RicherContent = ({ content, className = "" }) => {
  const [highlightedContent, setHighlightedContent] = import_react36.default.useState("");
  return /* @__PURE__ */ import_react36.default.createElement("div", { className }, /* @__PURE__ */ import_react36.default.createElement(
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
  CustomOrderedList,
  RicherContent,
  RicherEditor,
  SmallRicherEditor
});
//# sourceMappingURL=index.js.map