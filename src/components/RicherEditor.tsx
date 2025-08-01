
import React, { useCallback, useState, useImperativeHandle, forwardRef } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import Superscript from "@tiptap/extension-superscript";
import Subscript from "@tiptap/extension-subscript";
import Image from "@tiptap/extension-image";
import DragHandle from '@tiptap/extension-drag-handle-react'

import Youtube from '@tiptap/extension-youtube';
import Highlight from '@tiptap/extension-highlight';

import { TextStyle, LineHeight } from '@tiptap/extension-text-style';
import FontFamily from '@tiptap/extension-font-family';
import FontSize from '@tiptap/extension-font-size';
import Color from '@tiptap/extension-color';

import BoldIcon from '../icons/BoldIcon';
import ItalicIcon from '../icons/ItalicIcon';
import UnderlineIcon from '../icons/UnderlineIcon';
import StrikeIcon from '../icons/StrikeIcon';
import CodeIcon from '../icons/CodeIcon';
import BulletListIcon from '../icons/BulletListIcon';
import OrderedListIcon from '../icons/OrderedListIcon';
import TaskListIcon from '../icons/TaskListIcon';
import BlockquoteIcon from '../icons/BlockquoteIcon';
import LinkIcon from '../icons/LinkIcon';
import ImageIcon from '../icons/ImageIcon';
import UndoIcon from '../icons/UndoIcon';
import RedoIcon from '../icons/RedoIcon';
import AlignLeft from '../icons/AlignLeft';
import AlignCenter from '../icons/AlignCenter';
import AlignRight from '../icons/AlignRight';
import AlignJustify from '../icons/AlignJustify';
import Highlighter from '../icons/Highlighter';
import Heading1 from '../icons/Heading1';
import Heading2 from '../icons/Heading2';
import Heading3 from '../icons/Heading3';
import Heading4 from '../icons/Heading4';
import Heading5 from '../icons/Heading5';
import Heading6 from '../icons/Heading6';
import VideoIcon from '../icons/VideoIcon';
import SubscriptIcon from '../icons/SubscriptIcon';
import SuperscriptIcon from '../icons/SuperscriptIcon';
import PaintBucket from '../icons/PaintBucket';
import TextColorIcon from '../icons/TextColorIcon';


import { CustomBulletList } from './tiptap-extensions/CustomBulletList';
import { CustomOrderedList } from './tiptap-extensions/CustomOrderedList';
import { CustomCodeBlock } from './tiptap-extensions/CustomCodeBlock';
import CustomSelect from './ui/CustomSelect';
import CustomDropdown from './ui/CustomDropdown';
import CodeLanguageSelect from './ui/CodeLanguageSelect';

// Import CSS inside the component so it is bundled
import './RicherEditor.css';
import { getSafeContent } from "@/lib/utils";
import LineHeightIcon from "@/icons/LineHeightIcon";
import DragIcon from "@/icons/DragIcon";

function isSafeUrl(url: string): boolean {
  try {
    const parsed = new URL(url, window.location.origin);
    return (
      ["http:", "https:"].includes(parsed.protocol) ||
      (parsed.protocol === "data:" && url.startsWith("data:image/"))
    );
  } catch {
    return false;
  }
}

const fontSizes = [
  { name: '10px', value: '10px' },
  { name: '12px', value: '12px' },
  { name: '14px', value: '14px' },
  { name: '16px', value: '16px' },
  { name: '18px', value: '18px' },
  { name: '20px', value: '20px' },
  { name: '22px', value: '22px' },
  { name: '24px', value: '24px' },
  { name: '26px', value: '26px' },
  { name: '28px', value: '28px' },
  { name: '32px', value: '32px' },
  { name: '36px', value: '36px' },
  { name: '40px', value: '40px' },
  { name: '48px', value: '48px' },
  { name: '56px', value: '56px' },
  { name: '64px', value: '64px' },
];

const fontFamilies = [
  { name: 'Sans-serif', value: 'sans-serif' },
  { name: 'Serif', value: 'serif' },
  { name: 'Monospace', value: 'monospace' },
  { name: 'Arial', value: 'Arial, sans-serif' },
  { name: 'Helvetica', value: 'Helvetica, Arial, sans-serif' },
  { name: 'Times New Roman', value: 'Times New Roman, Times, serif' },
  { name: 'Georgia', value: 'Georgia, serif' },
  { name: 'Courier New', value: 'Courier New, Courier, monospace' },
  { name: 'Verdana', value: 'Verdana, Geneva, sans-serif' },
  { name: 'Trebuchet MS', value: 'Trebuchet MS, sans-serif' },
  { name: 'Palatino', value: 'Palatino, serif' },
  { name: 'Garamond', value: 'Garamond, serif' },
  { name: 'Comic Sans MS', value: 'Comic Sans MS, cursive, sans-serif' },
  { name: 'Impact', value: 'Impact, Charcoal, sans-serif' },
  { name: 'Lucida Console', value: 'Lucida Console, Monaco, monospace' },
  { name: 'Tahoma', value: 'Tahoma, Geneva, sans-serif' },
  { name: 'Optima', value: 'Optima, sans-serif' },
  { name: 'Futura', value: 'Futura, sans-serif' },
  { name: 'Franklin Gothic', value: 'Franklin Gothic Medium, Arial Narrow, Arial, sans-serif' },
  { name: 'Century Gothic', value: 'Century Gothic, sans-serif' },
];
const headingOptions = [
  { level: 1, label: <Heading1 size={18} /> },
  { level: 2, label: <Heading2 size={18} /> },
  { level: 3, label: <Heading3 size={18} /> },
  { level: 4, label: <Heading4 size={18} /> },
  { level: 5, label: <Heading5 size={18} /> },
  { level: 6, label: <Heading6 size={18} /> },
];
const lineHeights = [
  { name: 'Single', value: '1' },
  { name: '1.15', value: '1.15' },
  { name: '1.5', value: '1.5' },
  { name: 'Double', value: '2' },
  { name: '2.5', value: '2.5' },
  { name: '3', value: '3' },
];

const unorderedListStyles = [
  { name: 'Disc', value: 'disc', icon: '●', aria: 'Disc' },
  { name: 'Circle', value: 'circle', icon: '○', aria: 'Circle' },
  { name: 'Square', value: 'square', icon: '■', aria: 'Square' },
];
const orderedListStyles = [
  { name: 'Decimal', value: 'decimal', icon: '1.', aria: 'Decimal' },
  { name: 'Lower Alpha', value: 'lower-alpha', icon: 'a.', aria: 'Lower Alpha' },
  { name: 'Upper Alpha', value: 'upper-alpha', icon: 'A.', aria: 'Upper Alpha' },
  { name: 'Lower Roman', value: 'lower-roman', icon: 'i.', aria: 'Lower Roman' },
  { name: 'Upper Roman', value: 'upper-roman', icon: 'I.', aria: 'Upper Roman' },
];

// Update RicherEditorProps to accept only { json: object }
interface RicherEditorProps {
  content?: { json?: object | string, html?: string };
  onChange?: (value: { html: string; json: object | string }) => void;
  imageUploadUrl?: string;
  minHeight?: string;
  maxHeight?: string;
  editorProps?: any;
  className?: string;
  excludeToolbarButtons?: string[];
  i18n?: Record<string, string>;
  fontSizeOptions?: { name: string; value: string }[];
  fontFamilyOptions?: { name: string; value: string }[];
  extensions?: any[]; // Allow user to pass additional TipTap extensions
  customToolbarButtons?: React.ReactNode | ((editor: any) => React.ReactNode);
}

type ToolbarButtonKey =
  | 'heading'
  | 'fontSize'
  | 'fontFamily'
  | 'bold'
  | 'italic'
  | 'underline'
  | 'strike'
  | 'highlight'
  | 'code'
  | 'bulletList'
  | 'orderedList'
  | 'taskList'
  | 'blockquote'
  | 'hr'
  | 'table'
  | 'link'
  | 'image'
  | 'video'
  | 'alignLeft'
  | 'alignCenter'
  | 'alignRight'
  | 'alignJustify'
  | 'textColor'
  | 'bgColor'
  | 'subscript'
  | 'superscript'
  | 'undo'
  | 'redo';

// Add/expand defaultI18n with all needed keys
const defaultI18n = {
  heading: 'Heading',
  fontSize: 'Font Size',
  fontFamily: 'Font Family',
  lineHeight: 'Line Height',
  bold: 'Bold',
  italic: 'Italic',
  underline: 'Underline',
  strike: 'Strikethrough',
  highlight: 'Highlight',
  code: 'Code Block',
  bulletList: 'Bullet List',
  orderedList: 'Ordered List',
  taskList: 'Task List',
  blockquote: 'Blockquote',
  hr: 'Horizontal Rule',
  link: 'Insert/Edit Link',
  image: 'Insert Image',
  video: 'Insert YouTube Video',
  alignLeft: 'Align Left',
  alignCenter: 'Align Center',
  alignRight: 'Align Right',
  alignJustify: 'Align Justify',
  textColor: 'Text Color',
  bgColor: 'Background Color',
  subscript: 'Subscript',
  superscript: 'Superscript',
  undo: 'Undo',
  redo: 'Redo',
  insert: 'Insert',
  remove: 'Remove',
  add: 'Add',
  cancel: 'Cancel',
  paragraph: 'Paragraph',
  url: 'URL',
  upload: 'Upload',
  pasteImageUrl: 'Paste image URL here...',
  pasteLinkUrl: 'Paste link URL here...',
  pasteVideoUrl: 'Paste YouTube video URL here...',
  width: 'Width',
  height: 'Height',
  ulStyle: 'UL Style',
  olStyle: 'OL Style',
  removeColor: 'Remove Color',
  uploading: 'Uploading...',
  uploadFailed: 'Upload failed',
  newTab: 'New Tab (_blank)',
  sameTab: 'Same Tab (_self)',
  parentFrame: 'Parent Frame (_parent)',
  topFrame: 'Top Frame (_top)',
};

const MenuBar = ({ editor, imageUploadUrl, excludeToolbarButtons = [], i18n = {}, fontSizeOptions, fontFamilyOptions, customToolbarButtons }: {
  editor: any,
  imageUploadUrl?: string,
  excludeToolbarButtons?: string[],
  i18n?: Record<string, string>,
  fontSizeOptions?: { name: string; value: string }[],
  fontFamilyOptions?: { name: string; value: string }[],
  customToolbarButtons?: React.ReactNode | ((editor: any) => React.ReactNode)
}) => {
  // Add state to track editor changes in real-time
  const [editorState, setEditorState] = useState({
    isCodeBlockActive: false,
    codeBlockLanguage: null as string | null,
  });

  // Update state when editor changes
  React.useEffect(() => {
    if (!editor) return;

            const updateState = () => {
      setEditorState({
        isCodeBlockActive: editor.isActive("codeBlock"),
        codeBlockLanguage: editor.getAttributes('codeBlock').language,
      });
    };

    // Update state immediately
    updateState();

    // Listen for editor changes
    editor.on('selectionUpdate', updateState);
    editor.on('transaction', updateState);

    return () => {
      editor.off('selectionUpdate', updateState);
      editor.off('transaction', updateState);
    };
  }, [editor]);
  // Dropdown state for link, image, video
  const [imageDropdownOpen, setImageDropdownOpen] = useState(false);
  const [imageTab, setImageTab] = useState<'url' | 'upload'>('url');
  const [imageUrl, setImageUrl] = useState('');
  const [imageWidth, setImageWidth] = useState('');
  const [imageHeight, setImageHeight] = useState('');
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [videoDropdownOpen, setVideoDropdownOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [videoWidth, setVideoWidth] = useState('');
  const [videoHeight, setVideoHeight] = useState('');
  const [linkDropdownOpen, setLinkDropdownOpen] = useState(false);
  const [linkUrl, setLinkUrl] = useState('');
  const [linkTarget, setLinkTarget] = useState('_blank');

  // State and refs for color pickers
  const [textColorPopoverOpen, setTextColorPopoverOpen] = React.useState(false);
  const textColorButtonRef = React.useRef<HTMLButtonElement>(null);
  const [bgColorPopoverOpen, setBgColorPopoverOpen] = React.useState(false);
  const bgColorButtonRef = React.useRef<HTMLButtonElement>(null);

  // Helper for image by URL
  const handleImageUrlInsert = useCallback(() => {
    if (imageUrl && isSafeUrl(imageUrl)) {
      const attrs: any = { src: imageUrl };
      if (imageWidth) attrs.width = imageWidth;
      if (imageHeight) attrs.height = imageHeight;
      editor.chain().focus().setImage(attrs).run();
      setImageDropdownOpen(false);
      setImageUrl('');
      setImageWidth('');
      setImageHeight('');
    } else if (imageUrl) {
      window.alert('Invalid or unsafe image URL.');
    }
  }, [editor, imageUrl, imageWidth, imageHeight]);

  // Helper for image upload
  const handleImageUpload = async (file: File) => {
    setUploading(true);
    setUploadError(null);
    setUploadedImageUrl('');
    try {
      let url = '';
      if (imageUploadUrl) {
        const formData = new FormData();
        formData.append('file', file);
        const response = await fetch(imageUploadUrl, {
          method: 'POST',
          body: formData,
        });
        if (!response.ok) throw new Error('Upload failed');
        const data = await response.json();
        url = data.link || data.url || data.src || '';
      }
      if (!url) throw new Error('No image URL returned');
      setUploadedImageUrl(url);
    } catch (err: any) {
      setUploadError(err.message || 'Upload failed');
    } finally {
      setUploading(false);
    }
  };

  const handleUploadInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      handleImageUpload(file);
    }
  };

  const handleUploadedImageInsert = () => {
    if (uploadedImageUrl) {
      const attrs: any = { src: uploadedImageUrl };
      if (imageWidth) attrs.width = imageWidth;
      if (imageHeight) attrs.height = imageHeight;
      editor.chain().focus().setImage(attrs).run();
      setImageDropdownOpen(false);
      setUploadedImageUrl('');
      setImageFile(null);
      setImageWidth('');
      setImageHeight('');
      setUploadError(null);
      setImageTab('url');
    }
  };

  // Helper for video embedding (dropdown)
  const handleVideoUrlInsert = useCallback(() => {
    if (videoUrl && isSafeUrl(videoUrl)) {
      const attrs: any = { src: videoUrl };
      if (videoWidth) attrs.width = videoWidth;
      if (videoHeight) attrs.height = videoHeight;
      editor.chain().focus().setYoutubeVideo(attrs).run();
      setVideoDropdownOpen(false);
      setVideoUrl('');
      setVideoWidth('');
      setVideoHeight('');
    } else if (videoUrl) {
      window.alert('Invalid or unsafe video URL.');
    }
  }, [editor, videoUrl, videoWidth, videoHeight]);

  // Helper for link insertion (dropdown)
  const handleLinkInsert = useCallback(() => {
    if (linkUrl && isSafeUrl(linkUrl)) {
      editor.chain().focus().setLink({ href: linkUrl, target: linkTarget }).run();
      setLinkDropdownOpen(false);
      setLinkUrl('');
      setLinkTarget('_blank');
    } else if (linkUrl) {
      window.alert('Invalid or unsafe link URL.');
    }
  }, [editor, linkUrl, linkTarget]);
  const handleLinkUnset = useCallback(() => {
    editor.chain().focus().unsetLink().run();
    setLinkDropdownOpen(false);
    setLinkUrl('');
  }, [editor]);

  if (!editor) return null;

  const labels = { ...defaultI18n, ...i18n };

  return (
    <>
      <div className="richer-editor-toolbar">
        {/* Headings Dropdown */}
        {!excludeToolbarButtons.includes('heading') && (
          <>
            <CustomSelect
              value={'__placeholder__'}
              options={[
                { value: 'paragraph', label: labels.paragraph },
                ...headingOptions.map(opt => ({ value: opt.level.toString(), label: `H${opt.level}` }))
              ]}
              onChange={(val: string) => {
                if (val === 'paragraph') {
                  editor.chain().focus().setParagraph().run();
                } else {
                  editor.chain().focus().toggleHeading({ level: Number(val) }).run();
                }
              }}
              className="richer-editor-select"
              placeholder={labels.heading}
              aria-label="Heading Level"
            />
            <div className="richer-editor-toolbar-divider" />
          </>
        )}
        {/* Font Size Dropdown */}
        {!excludeToolbarButtons.includes('fontSize') && (
          <CustomSelect
            value={'__placeholder__'}
            options={(fontSizeOptions || fontSizes).map(f => ({ value: f.value, label: f.name }))}
            onChange={(val: string) => editor.chain().focus().setFontSize(val).run()}
            className="richer-editor-select"
            placeholder={labels.fontSize}
            aria-label="Font Size"
          />
        )}

        {/* Font Family Dropdown */}
        {!excludeToolbarButtons.includes('fontFamily') && (
          <>
            <CustomSelect
              value={'__placeholder__'}
              options={(fontFamilyOptions || fontFamilies).map(f => ({
                value: f.value,
                label: <span style={{ fontFamily: f.value }}>{f.name}</span>
              }))}
              onChange={(val: string) => editor.chain().focus().setFontFamily(val).run()}
              className="richer-editor-select"
              placeholder={labels.fontFamily}
              aria-label="Font Family"
            />
            <div className="richer-editor-toolbar-divider" />
          </>
        )}
        {/* Line Height Dropdown */}
        {!excludeToolbarButtons.includes('lineHeight') && (
          <CustomSelect
            value={'__placeholder__'}
            options={[
              ...lineHeights.map(lh => ({ value: lh.value, label: lh.name })),
              { value: '', label: 'Reset' },
            ]}
            onChange={(val: string) => {
              if (val === '') {
                editor.chain().focus().unsetLineHeight().run();
              } else {
                editor.chain().focus().setLineHeight(val).run();
              }
            }}
            className="richer-editor-select"
            placeholder={<LineHeightIcon size={16} />}
            aria-label={labels.lineHeight}
            title={labels.lineHeight}
          />
        )}
        {/* Font styles */}
        {!excludeToolbarButtons.includes('bold') && (
          <button onClick={() => editor.chain().focus().toggleBold().run()} className={`richer-editor-button ${editor.isActive("bold") ? "richer-editor-buttonActive" : ''}`} type="button" aria-label={labels.bold} title={labels.bold}><BoldIcon size={16} /></button>
        )}
        {!excludeToolbarButtons.includes('italic') && (
          <button onClick={() => editor.chain().focus().toggleItalic().run()} className={`richer-editor-button ${editor.isActive("italic") ? "richer-editor-buttonActive" : ''}`} type="button" aria-label={labels.italic} title={labels.italic}><ItalicIcon size={16} /></button>
        )}
        {!excludeToolbarButtons.includes('underline') && (
          <button onClick={() => editor.chain().focus().toggleUnderline().run()} className={`richer-editor-button ${editor.isActive("underline") ? "richer-editor-buttonActive" : ''}`} type="button" aria-label={labels.underline} title={labels.underline}><UnderlineIcon size={16} /></button>
        )}
        {!excludeToolbarButtons.includes('strike') && (
          <button onClick={() => editor.chain().focus().toggleStrike().run()} className={`richer-editor-button ${editor.isActive("strike") ? "richer-editor-buttonActive" : ''}`} type="button" aria-label={labels.strike} title={labels.strike}><StrikeIcon size={16} /></button>
        )}
        {!excludeToolbarButtons.includes('highlight') && (
          <button onClick={() => editor.chain().focus().toggleHighlight().run()} className={`richer-editor-button ${editor.isActive("highlight") ? "richer-editor-buttonActive" : ''}`} type="button" aria-label={labels.highlight} title={labels.highlight}><Highlighter size={16} /></button>
        )}
        {!excludeToolbarButtons.includes('code') && (
          <>
            <button onClick={() => {
              if (editor.isActive('codeBlock')) {
                editor.chain().focus().toggleCodeBlock().run();
              } else {
                // Create a code block with a space to ensure it's not empty
                editor.chain().focus().toggleCodeBlock().insertContent(' ').run();
              }
            }} className={`richer-editor-button ${editorState.isCodeBlockActive ? "richer-editor-buttonActive" : ''}`} type="button" aria-label={labels.code} title={labels.code}><CodeIcon size={16} /></button>
            {editorState.isCodeBlockActive && (
              <CodeLanguageSelect
                editor={editor}
                currentLanguage={editorState.codeBlockLanguage}
                                onLanguageChange={(language) => {
                  editor.chain().focus().setCodeBlockLanguage(language).run();
                }}
              />
            )}
            <div className="richer-editor-toolbar-divider" />
          </>
        )}
        {/* Lists */}
        {!excludeToolbarButtons.includes('bulletList') && (
          <>
            <button onClick={() => editor.chain().focus().toggleBulletList().run()} className={`richer-editor-button ${editor.isActive("bulletList") ? "richer-editor-buttonActive" : ''}`} type="button" aria-label={labels.bulletList} title={labels.bulletList}><BulletListIcon size={16} /></button>
            {/* Unordered List Style Dropdown */}
            <CustomSelect
              value={'__placeholder__'}
              options={unorderedListStyles.map(opt => ({ value: opt.value, label: <>{opt.icon} {opt.name}</> }))}
              onChange={(val: string) => {
                if (editor.isActive('bulletList')) {
                  editor.chain().focus().updateAttributes('bulletList', { listStyleType: val }).run();
                } else {
                  window.alert('Please place the cursor inside an unordered list to change its style.');
                }
              }}
              className="richer-editor-select"
              placeholder={labels.ulStyle}
              aria-label="Unordered List Style"
            />
          </>
        )}

        {!excludeToolbarButtons.includes('orderedList') && (
          <>
            <button onClick={() => editor.chain().focus().toggleOrderedList().run()} className={`richer-editor-button ${editor.isActive("orderedList") ? "richer-editor-buttonActive" : ''}`} type="button" aria-label={labels.orderedList} title={labels.orderedList}><OrderedListIcon size={16} /></button>
            {/* Ordered List Style Dropdown */}
            <CustomSelect
              value={'__placeholder__'}
              options={orderedListStyles.map(opt => ({ value: opt.value, label: <>{opt.icon} {opt.name}</> }))}
              onChange={(val: string) => {
                if (editor.isActive('orderedList')) {
                  editor.chain().focus().updateAttributes('orderedList', { listStyleType: val }).run();
                } else {
                  window.alert('Please place the cursor inside an ordered list to change its style.');
                }
              }}
              className="richer-editor-select"
              placeholder={labels.olStyle}
              aria-label="Ordered List Style"
            />
          </>
        )}

        {!excludeToolbarButtons.includes('taskList') && (
          <>
            <button onClick={() => editor.chain().focus().toggleTaskList().run()} className={`richer-editor-button ${editor.isActive("taskList") ? "richer-editor-buttonActive" : ''}`} type="button" aria-label={labels.taskList} title={labels.taskList}><TaskListIcon size={16} /></button>
            <div className="richer-editor-toolbar-divider" />
          </>
        )}
        {/* Blockquote, hr */}
        {!excludeToolbarButtons.includes('blockquote') && (
          <button onClick={() => editor.chain().focus().toggleBlockquote().run()} className={`richer-editor-button ${editor.isActive("blockquote") ? "richer-editor-buttonActive" : ''}`} type="button" aria-label={labels.blockquote} title={labels.blockquote}><BlockquoteIcon size={16} /></button>
        )}
        {!excludeToolbarButtons.includes('hr') && (
          <>
            <button onClick={() => editor.chain().focus().setHorizontalRule().run()} className="richer-editor-button" type="button" aria-label={labels.hr} title={labels.hr}>HR</button>
            <div className="richer-editor-toolbar-divider" />
          </>
        )}

        {/* Link Dropdown */}
        {!excludeToolbarButtons.includes('link') && (
          <CustomDropdown
            open={linkDropdownOpen}
            onOpenChange={(open) => {
              setLinkDropdownOpen(open);
              if (open) {
                setLinkUrl(editor.getAttributes('link').href || '');
                setLinkTarget(editor.getAttributes('link').target || '_blank');
              }
            }}
            trigger={
              <button
                className={`richer-editor-button${editor.isActive("link") ? ' richer-editor-buttonActive' : ''}`}
                type="button"
                aria-label={labels.link}
                title={labels.link}
              >
                <LinkIcon size={16} />
              </button>
            }
            width="280px"
          >
            <div className="richer-editor-mb2 richer-editor-fontSemibold richer-editor-textBase">
              {labels.link}
            </div>
            <input
              type="text"
              placeholder={labels.pasteLinkUrl}
              value={linkUrl}
              onChange={e => setLinkUrl(e.target.value)}
              className="richer-editor-input"
              autoFocus
            />
            <select
              name="target"
              value={linkTarget}
              onChange={e => setLinkTarget(e.target.value)}
              className="richer-editor-input"
              style={{ marginBottom: 8 }}
            >
              <option value="_blank">{labels.newTab}</option>
              <option value="_self">Same Tab (_self)</option>
              <option value="_parent">Parent Frame (_parent)</option>
              <option value="_top">Top Frame (_top)</option>
            </select>
            <div className="richer-editor-flexRow">
              <button
                className="richer-editor-primaryBtn"
                onClick={handleLinkInsert}
                disabled={!linkUrl}
              >
                {labels.insert}
              </button>
              <button
                className="richer-editor-secondaryBtn"
                onClick={handleLinkUnset}
                disabled={!editor.isActive('link')}
              >
                {labels.remove}
              </button>
            </div>
          </CustomDropdown>
        )}
        {/* Image Dropdown */}
        {!excludeToolbarButtons.includes('image') && (
          <CustomDropdown
            open={imageDropdownOpen}
            onOpenChange={(open) => {
              setImageDropdownOpen(open);
              if (open && !imageUploadUrl) setImageTab('url');
            }}
            trigger={
              <button
                className="richer-editor-button"
                type="button"
                title={labels.image}
              >
                <ImageIcon size={16} />
              </button>
            }
            width="320px"
          >
            <div className="richer-editor-mb2 richer-editor-fontSemibold richer-editor-textBase flex gap-4 border-b pb-2">
              <button className={`richer-editor-button${imageTab === 'url' ? ' richer-editor-buttonActive' : ''}`} onClick={() => setImageTab('url')}>{labels.url}</button>
              {imageUploadUrl && (
                <button className={`richer-editor-button${imageTab === 'upload' ? ' richer-editor-buttonActive' : ''}`} onClick={() => setImageTab('upload')}>{labels.upload}</button>
              )}
            </div>
            {imageTab === 'url' && (
              <>
                <input
                  type="text"
                  placeholder={labels.pasteImageUrl}
                  value={imageUrl}
                  onChange={e => setImageUrl(e.target.value)}
                  className="richer-editor-input"
                  autoFocus
                />
                <div className="richer-editor-flexRowMb2">
                  <input
                    type="text"
                    placeholder={labels.width}
                    value={imageWidth}
                    onChange={e => setImageWidth(e.target.value)}
                    className="richer-editor-input"
                  />
                  <input
                    type="text"
                    placeholder={labels.height}
                    value={imageHeight}
                    onChange={e => setImageHeight(e.target.value)}
                    className="richer-editor-input"
                  />
                </div>
                <div className="richer-editor-textXs">Leave blank for default size. Use px (e.g. 400) or % (e.g. 50%).</div>
                <button
                  className="richer-editor-primaryBtn"
                  onClick={handleImageUrlInsert}
                  disabled={!imageUrl}
                >
                  {labels.image}
                </button>
              </>
            )}
            {imageTab === 'upload' && imageUploadUrl && (
              <>
                {!uploadedImageUrl && (
                  <>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleUploadInputChange}
                      className="richer-editor-mb2"
                      disabled={uploading}
                    />
                    {uploading && <div className="richer-editor-textSm richer-editor-textBlue600 richer-editor-mb2">{labels.uploading}</div>}
                    {uploadError && <div className="richer-editor-textSm richer-editor-textRed600 richer-editor-mb2">{labels.uploadFailed}</div>}
                  </>
                )}
                {uploadedImageUrl && (
                  <>
                    <div className="richer-editor-mb2 richer-editor-flex richer-editor-flexCol richer-editor-itemsCenter">
                      <img src={uploadedImageUrl} alt="Preview" className="richer-editor-maxH40 richer-editor-maxWFull rounded border mb-2" />
                    </div>
                    <div className="richer-editor-flexRowMb2">
                      <input
                        type="text"
                        placeholder={labels.width}
                        value={imageWidth}
                        onChange={e => setImageWidth(e.target.value)}
                        className="richer-editor-input"
                      />
                      <input
                        type="text"
                        placeholder={labels.height}
                        value={imageHeight}
                        onChange={e => setImageHeight(e.target.value)}
                        className="richer-editor-input"
                      />
                    </div>
                    <div className="richer-editor-flexRow">
                      <button
                        className="richer-editor-primaryBtn"
                        onClick={handleUploadedImageInsert}
                      >
                        {labels.add}
                      </button>
                      <button
                        className="richer-editor-secondaryBtn"
                        onClick={() => {
                          setUploadedImageUrl('');
                          setImageFile(null);
                          setImageWidth('');
                          setImageHeight('');
                          setUploadError(null);
                        }}
                      >
                        {labels.cancel}
                      </button>
                    </div>
                  </>
                )}
              </>
            )}
          </CustomDropdown>
        )}
        {/* Video Dropdown */}
        {!excludeToolbarButtons.includes('video') && (
          <CustomDropdown
            open={videoDropdownOpen}
            onOpenChange={(open) => setVideoDropdownOpen(open)}
            trigger={
              <button
                className="richer-editor-button"
                type="button"
                title={labels.video}
              >
                <VideoIcon size={16} />
              </button>
            }
            width="280px"
          >
            <div className="richer-editor-mb2 richer-editor-fontSemibold richer-editor-textBase">
              {labels.video}
            </div>
            <input
              type="text"
              placeholder={labels.pasteVideoUrl}
              value={videoUrl}
              onChange={e => setVideoUrl(e.target.value)}
              className="richer-editor-input"
              autoFocus
            />
            <div className="richer-editor-flexRowMb2">
              <input
                type="text"
                placeholder={labels.width}
                value={videoWidth}
                onChange={e => setVideoWidth(e.target.value)}
                className="richer-editor-input"
              />
              <input
                type="text"
                placeholder={labels.height}
                value={videoHeight}
                onChange={e => setVideoHeight(e.target.value)}
                className="richer-editor-input"
              />
            </div>
            <div className="richer-editor-textXs">Leave blank for default size. Use px (e.g. 400) or % (e.g. 50%).</div>
            <button
              className="richer-editor-primaryBtn"
              onClick={handleVideoUrlInsert}
              disabled={!videoUrl}
            >
              {labels.video}
            </button>
          </CustomDropdown>
        )}
        {/* Alignment */}
        {!excludeToolbarButtons.includes('alignLeft') && (
          <button onClick={() => editor.chain().focus().setTextAlign("left").run()} className={`richer-editor-button ${editor.isActive({ textAlign: "left" }) ? "richer-editor-buttonActive" : ''}`} type="button" aria-label={labels.alignLeft} title={labels.alignLeft}><AlignLeft size={16} /></button>
        )}
        {!excludeToolbarButtons.includes('alignCenter') && (
          <button onClick={() => editor.chain().focus().setTextAlign("center").run()} className={`richer-editor-button ${editor.isActive({ textAlign: "center" }) ? "richer-editor-buttonActive" : ''}`} type="button" aria-label={labels.alignCenter} title={labels.alignCenter}><AlignCenter size={16} /></button>
        )}
        {!excludeToolbarButtons.includes('alignRight') && (
          <button onClick={() => editor.chain().focus().setTextAlign("right").run()} className={`richer-editor-button ${editor.isActive({ textAlign: "right" }) ? "richer-editor-buttonActive" : ''}`} type="button" aria-label={labels.alignRight} title={labels.alignRight}><AlignRight size={16} /></button>
        )}
        {!excludeToolbarButtons.includes('alignJustify') && (
          <button onClick={() => editor.chain().focus().setTextAlign("justify").run()} className={`richer-editor-button ${editor.isActive({ textAlign: "justify" }) ? "richer-editor-buttonActive" : ''}`} type="button" aria-label={labels.alignJustify} title={labels.alignJustify}><AlignJustify size={16} /></button>
        )}
        {/* Text Color Picker (Dropdown) */}
        {!excludeToolbarButtons.includes('textColor') && (
          <div  className="richer-editor-colorpicker-wrapper">
            {/* Icon (not clickable) */}
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <TextColorIcon size={16} />
            </span>
            {/* Color Swatch (opens palette dropdown) */}
            <CustomDropdown
              open={textColorPopoverOpen}
              onOpenChange={setTextColorPopoverOpen}
              trigger={
                <button
                  ref={textColorButtonRef}
                  onClick={() => setTextColorPopoverOpen(open => !open)}
                  onMouseDown={e => e.preventDefault()}
                  className={`richer-editor-button${editor.getAttributes('textStyle').color ? ' richer-editor-buttonActive' : ''}`}
                  type="button"
                  aria-label={labels.textColor}
                  title={labels.textColor}
                  style={{ display: 'flex', alignItems: 'center', padding: 0, border: 'none', background: 'none', boxShadow: 'none' }}
                >
                  <span style={{
                    display: 'inline-block',
                    width: 18,
                    height: 18,
                    borderRadius: '50%',
                    background: editor.getAttributes('textStyle').color || '#000',
                    border: '1px solid #ccc',
                  }} />
                </button>
              }
              width="200px"
            >
              <div style={{ minWidth: 200, padding: 16 }}>
                {editor.getAttributes('textStyle').color && (
                  <button
                    className="richer-editor-secondaryBtn mb-2 w-full"
                    onClick={() => {
                      editor.commands.focus();
                      editor.commands.unsetColor();
                      setTextColorPopoverOpen(false);
                    }}
                    style={{ marginBottom: 8, width: '100%' }}
                  >
                    {labels.removeColor}
                  </button>
                )}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 8, marginBottom: 12 }}>
                  {colorPalette.map((color: string) => (
                    <button
                      key={color}
                      type="button"
                      aria-label={`Select text color ${color}`}
                      onClick={() => {
                        editor.commands.focus();
                        editor.commands.setColor(color);
                        setTextColorPopoverOpen(false);
                      }}
                      style={{
                        background: color,
                        width: 22,
                        height: 22,
                        borderRadius: '50%',
                        border: (editor.getAttributes('textStyle').color === color) ? '2px solid #333' : '1px solid #ccc',
                        outline: 'none',
                        cursor: 'pointer',
                        boxSizing: 'border-box',
                      }}
                      tabIndex={0}
                    />
                  ))}
                </div>
              </div>
            </CustomDropdown>
            {/* Always visible color input */}
            <input
              type="color"
              value={editor.getAttributes('textStyle').color || '#000000'}
              onChange={e => {
                editor.commands.focus();
                editor.commands.setColor(e.target.value);
              }}
              style={{ width: 24, height: 24, border: 'none', background: 'none', cursor: 'pointer', padding: 0 }}
              className="richer-editor-colorInput"
              aria-label="Custom text color picker"
            />
          </div>
        )}
        {/* Background Color Picker (Dropdown) */}
        {!excludeToolbarButtons.includes('bgColor') && (
          <div className="richer-editor-colorpicker-wrapper" >
            {/* Icon (not clickable) */}
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <PaintBucket size={16} />
            </span>
            {/* Color Swatch (opens palette dropdown) */}
            <CustomDropdown
              open={bgColorPopoverOpen}
              onOpenChange={setBgColorPopoverOpen}
              trigger={
                <button
                  ref={bgColorButtonRef}
                  onClick={() => setBgColorPopoverOpen(open => !open)}
                  onMouseDown={e => e.preventDefault()}
                  className={`richer-editor-button${editor.getAttributes('highlight').color ? ' richer-editor-buttonActive' : ''}`}
                  type="button"
                  aria-label={labels.bgColor}
                  title={labels.bgColor}
                  style={{ display: 'flex', alignItems: 'center', padding: 0, border: 'none', background: 'none', boxShadow: 'none' }}
                >
                  <span style={{
                    display: 'inline-block',
                    width: 18,
                    height: 18,
                    borderRadius: '50%',
                    background: editor.getAttributes('highlight').color || '#ffff00',
                    border: '1px solid #ccc',
                  }} />
                </button>
              }
              width="200px"
            >
              <div style={{ minWidth: 200, padding: 16 }}>
                {editor.getAttributes('highlight').color && (
                  <button
                    className="richer-editor-secondaryBtn mb-2 w-full"
                    onClick={() => {
                      editor.commands.focus();
                      editor.commands.setHighlight({ color: null });
                      editor.commands.unsetHighlight();
                      setBgColorPopoverOpen(false);
                    }}
                    style={{ marginBottom: 8, width: '100%' }}
                  >
                    {labels.removeColor}
                  </button>
                )}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 8, marginBottom: 12 }}>
                  {colorPalette.map((color: string) => (
                    <button
                      key={color}
                      type="button"
                      aria-label={`Select background color ${color}`}
                      onClick={() => {
                        editor.commands.focus();
                        editor.commands.setHighlight({ color });
                        setBgColorPopoverOpen(false);
                      }}
                      style={{
                        background: color,
                        width: 22,
                        height: 22,
                        borderRadius: '50%',
                        border: (editor.getAttributes('highlight').color === color) ? '2px solid #333' : '1px solid #ccc',
                        outline: 'none',
                        cursor: 'pointer',
                        boxSizing: 'border-box',
                      }}
                      tabIndex={0}
                    />
                  ))}
                </div>
              </div>
            </CustomDropdown>
            {/* Always visible color input */}
            <input
              type="color"
              value={editor.getAttributes('highlight').color || '#ffff00'}
              onChange={e => {
                editor.commands.focus();
                editor.commands.setHighlight({ color: e.target.value });
              }}
              style={{ width: 24, height: 24, border: 'none', background: 'none', cursor: 'pointer', padding: 0 }}
              className="richer-editor-colorInput"
              aria-label="Custom background color picker"
            />
          </div>
        )}
        {/* Subscript/Superscript Buttons */}
        {!excludeToolbarButtons.includes('subscript') && (
          <button
            onClick={() => editor.chain().focus().toggleSubscript().run()}
            className={`richer-editor-button ${editor.isActive('subscript') ? 'richer-editor-buttonActive' : ''}`}
            type="button"
            title={labels.subscript}
            aria-label={labels.subscript}
          >
            <SubscriptIcon size={16} />
          </button>
        )}
        {!excludeToolbarButtons.includes('superscript') && (
          <button
            onClick={() => editor.chain().focus().toggleSuperscript().run()}
            className={`richer-editor-button ${editor.isActive('superscript') ? 'richer-editor-buttonActive' : ''}`}
            type="button"
            title={labels.superscript}
            aria-label={labels.superscript}
          >
            <SuperscriptIcon size={16} />
          </button>
        )}
        {/* Custom Toolbar Buttons (rendered at the end) */}
        {customToolbarButtons && (typeof customToolbarButtons === 'function' ? customToolbarButtons(editor) : customToolbarButtons)}

         {/* Undo/Redo */}
          {!excludeToolbarButtons.includes('undo') && (
            <>
              <div className="richer-editor-toolbar-divider" />
              <button onClick={() => editor.chain().focus().undo().run()} className="richer-editor-button" type="button" aria-label={labels.undo} title={labels.undo}><UndoIcon size={16} /></button>
            </>
          )}
          {!excludeToolbarButtons.includes('redo') && (
            <button onClick={() => editor.chain().focus().redo().run()} className="richer-editor-button" type="button" aria-label={labels.redo} title={labels.redo}><RedoIcon size={16} /></button>
          )}

      </div>
      {!excludeToolbarButtons.includes('dragHandle') && (
        <DragHandle editor={editor}>
          <DragIcon size={18} style={{marginTop: 3}} />
        </DragHandle>
      )}

    </>
  );
};


// Blog-friendly color palette (expanded)
const colorPalette: string[] = [
  '#000000', '#434343', '#666666', '#999999', '#b7b7b7', '#cccccc', '#e6e6e6', '#ffffff',
  '#ff0000', '#ff9900', '#ffff00', '#00ff00', '#00b050', '#00b0f0', '#0070c0', '#002060',
  '#7030a0', '#ff00ff', '#ffb6c1', '#f4cccc', '#fce5cd', '#fff2cc', '#d9ead3', '#d0e0e3',
  '#cfe2f3', '#c9daf8', '#b4a7d6', '#d9d2e9', '#ead1dc', '#f9cb9c', '#ffe599', '#b6d7a8',
  '#a2c4c9', '#a4c2f4', '#6fa8dc', '#8e7cc3', '#b4a7d6', '#d5a6bd', '#e06666', '#f6b26b',
];

const RicherEditor = forwardRef(function RicherEditor({
  content = {},
  onChange,
  imageUploadUrl,
  minHeight,
  maxHeight,
  editorProps = {},
  className = '',
  excludeToolbarButtons = [],
  i18n = {},
  fontSizeOptions,
  fontFamilyOptions,
  extensions = [], // default to empty array
  customToolbarButtons,
}: RicherEditorProps, ref) {
  // Use safe content conversion only for initial value
  const initialContent = getSafeContent(content);
  const defaultExtensions = [
    StarterKit.configure({
      codeBlock: false, // Disable default code block to use our custom one
    }),
    CustomCodeBlock,
    Link.configure({ openOnClick: true }),
    CustomBulletList,
    CustomOrderedList,
    TextAlign.configure({ types: ["heading", "paragraph"] }),
    Image,
    TaskList,
    TaskItem,
    Superscript,
    Subscript,
    Youtube.configure({
      controls: true,
      allowFullscreen: true,
      width: 640,
      height: 360,
      HTMLAttributes: {
        class: 'mx-auto my-4 rounded-lg shadow',
      },
    }),
    Color, // <-- Color must come before TextStyle
    TextStyle,
    LineHeight,
    FontFamily,
    FontSize,
    Highlight.configure({
      multicolor: true,
    }),
  ];
  const editor = useEditor({
    extensions: [
      ...defaultExtensions,
      ...extensions // Merge user-provided extensions
    ],
    content: initialContent,
    editorProps: {
      ...editorProps,
      attributes: {
        class: `richer-editor-textarea richer-editor-dragactive ${className || ''}`,
        style: `${minHeight ? `min-height:${minHeight};` : ''}${editorProps?.attributes?.style || ''}`,
        spellCheck: 'true',
        ...editorProps?.attributes,
      },
    },
    immediatelyRender: false,
  });

  // Add effect to update content if prop changes and editor is empty
  React.useEffect(() => {
    if (editor && content && editor.isEmpty) {
      const safeContent = getSafeContent(content);
      const currentContent = editor.getJSON();
      // Only update if the new content is different from current
      if (JSON.stringify(currentContent) !== JSON.stringify(safeContent)) {
        editor.commands.setContent(safeContent);
      }
    }
  }, [content, editor]);

  // Handler to call onChange with current content
  const save = useCallback(() => {
    if (editor && onChange) {
      onChange({
        html: editor.getHTML(),
        json: editor.getJSON(),
      });
    }
  }, [editor, onChange]);

  // Handler for blur event
  const handleBlur = useCallback(() => {
    save();
  }, [save]);

  // Expose save() and clear() via ref
  useImperativeHandle(ref, () => ({
    save,
    editor,
    clear: () => editor?.commands.clearContent(),
  }), [save, editor]);

  return (
      <div className={`richer-editor-roundedMdBorder`}>
        <MenuBar editor={editor} imageUploadUrl={imageUploadUrl} excludeToolbarButtons={excludeToolbarButtons} i18n={i18n} fontSizeOptions={fontSizeOptions} fontFamilyOptions={fontFamilyOptions} customToolbarButtons={customToolbarButtons} />
        <div className="richer-editor-overflowAuto" style={{maxHeight: maxHeight}}>
          <EditorContent editor={editor} onBlur={handleBlur} />
        </div>
        {/* Save button removed as per user request */}
      </div>
  );
});

export default RicherEditor;
