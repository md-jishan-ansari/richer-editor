'use client';
// File: src/components/Editor.tsx
import React, { useCallback, useState } from "react";
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
// Video extension (custom or from @tiptap/extension-video if available)
import Youtube from '@tiptap/extension-youtube';
import Highlight from '@tiptap/extension-highlight';
import Placeholder from '@tiptap/extension-placeholder';

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
import TableIcon from '../icons/TableIcon';
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

import { TextStyle } from '@tiptap/extension-text-style';
import FontFamily from '@tiptap/extension-font-family';
import FontSize from '@tiptap/extension-font-size';
import Color from '@tiptap/extension-color';
import { CustomBulletList } from './tiptap-extensions/CustomBulletList';
import { CustomOrderedList } from './tiptap-extensions/CustomOrderedList';
import CustomSelect from './ui/CustomSelect';
import CustomPopover from './ui/CustomPopover';
import './RicherEditor.css';


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

// Update TiptapEditor to accept props
interface RicherEditorProps {
  content?: string | object;
  onChange?: (value: string | object) => void;
  imageUploadUrl?: string;
  minHeight?: string;
  maxHeight?: string;
  editorProps?: any;
  outputFormat?: 'html' | 'json';
  readOnly?: boolean;
  placeholder?: string;
  className?: string;
  excludeToolbarButtons?: string[];
  style?: React.CSSProperties;
  i18n?: Record<string, string>;
  onImageUpload?: (file: File) => Promise<string>;
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

const defaultI18n = {
  heading: 'Heading',
  fontSize: 'Font Size',
  fontFamily: 'Font Family',
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
  table: 'Insert Table',
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
};

const MenuBar = ({ editor, imageUploadUrl, excludeToolbarButtons = [], i18n = {}, onImageUpload }: {
  editor: any,
  imageUploadUrl?: string,
  excludeToolbarButtons?: string[],
  i18n?: Record<string, string>,
  onImageUpload?: (file: File) => Promise<string>,
}) => {
  // Popover state for link, image, video
  const [imagePopoverOpen, setImagePopoverOpen] = useState(false);
  const [imageTab, setImageTab] = useState<'url' | 'upload'>('url');
  const [imageUrl, setImageUrl] = useState('');
  const [imageWidth, setImageWidth] = useState('');
  const [imageHeight, setImageHeight] = useState('');
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [videoPopoverOpen, setVideoPopoverOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [videoWidth, setVideoWidth] = useState('');
  const [videoHeight, setVideoHeight] = useState('');
  const [linkPopoverOpen, setLinkPopoverOpen] = useState(false);
  const [linkUrl, setLinkUrl] = useState('');

  const linkButtonRef = React.useRef<HTMLButtonElement>(null);
  const imageButtonRef = React.useRef<HTMLButtonElement>(null);
  const videoButtonRef = React.useRef<HTMLButtonElement>(null);

  // Helper for image by URL
  const handleImageUrlInsert = useCallback(() => {
    if (imageUrl) {
      const attrs: any = { src: imageUrl };
      if (imageWidth) attrs.width = imageWidth;
      if (imageHeight) attrs.height = imageHeight;
      editor.chain().focus().setImage(attrs).run();
      setImagePopoverOpen(false);
      setImageUrl('');
      setImageWidth('');
      setImageHeight('');
    }
  }, [editor, imageUrl, imageWidth, imageHeight]);

  // Helper for image upload
  const handleImageUpload = async (file: File) => {
    setUploading(true);
    setUploadError(null);
    setUploadedImageUrl('');
    try {
      let url = '';
      if (onImageUpload) {
        url = await onImageUpload(file);
      } else if (imageUploadUrl) {
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
      setImagePopoverOpen(false);
      setUploadedImageUrl('');
      setImageFile(null);
      setImageWidth('');
      setImageHeight('');
      setUploadError(null);
      setImageTab('url');
    }
  };

  // Helper for video embedding (popover)
  const handleVideoUrlInsert = useCallback(() => {
    if (videoUrl) {
      const attrs: any = { src: videoUrl };
      if (videoWidth) attrs.width = videoWidth;
      if (videoHeight) attrs.height = videoHeight;
      editor.chain().focus().setYoutubeVideo(attrs).run();
      setVideoPopoverOpen(false);
      setVideoUrl('');
      setVideoWidth('');
      setVideoHeight('');
    }
  }, [editor, videoUrl, videoWidth, videoHeight]);

  // Helper for link insertion (popover)
  const handleLinkInsert = useCallback(() => {
    if (linkUrl) {
      editor.chain().focus().setLink({ href: linkUrl }).run();
      setLinkPopoverOpen(false);
      setLinkUrl('');
    }
  }, [editor, linkUrl]);
  const handleLinkUnset = useCallback(() => {
    editor.chain().focus().unsetLink().run();
    setLinkPopoverOpen(false);
    setLinkUrl('');
  }, [editor]);

  if (!editor) return null;

  const t = { ...defaultI18n, ...i18n };

  return (
    <div className="richer-editor-toolbar global-toolbar">
      {/* Headings Dropdown */}
      <CustomSelect
        value={(() => {
          const activeHeading = headingOptions.find(opt => editor.isActive('heading', { level: opt.level }));
          return activeHeading ? activeHeading.level.toString() : '';
        })()}
        options={[
          { value: 'paragraph', label: 'Paragraph' },
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
        placeholder="Heading"
        aria-label="Heading Level"
      />
      <div className="toolbar-divider" />
      {/* Font Size Dropdown */}
      <CustomSelect
        value={editor.getAttributes('fontSize').fontSize || ''}
        options={fontSizes.map(f => ({ value: f.value, label: f.name }))}
        onChange={(val: string) => editor.chain().focus().setFontSize(val).run()}
        className="richer-editor-select"
        placeholder="Font Size"
        aria-label="Font Size"
      />
      {/* Font Family Dropdown */}
      <CustomSelect
        value={editor.getAttributes('fontFamily').fontFamily || ''}
        options={fontFamilies.map(f => ({
          value: f.value,
          label: <span style={{ fontFamily: f.value }}>{f.name}</span>
        }))}
        onChange={(val: string) => editor.chain().focus().setFontFamily(val).run()}
        className="richer-editor-select"
        placeholder="Font Family"
        aria-label="Font Family"
      />
      <div className="toolbar-divider" />
      {/* Font styles */}
      {!excludeToolbarButtons.includes('bold') && (
        <button onClick={() => editor.chain().focus().toggleBold().run()} className={`richer-editor-button ${editor.isActive("bold") ? "richer-editor-buttonActive" : ''}`} type="button" aria-label={t.bold} title={t.bold}><BoldIcon size={16} /></button>
      )}
      {!excludeToolbarButtons.includes('italic') && (
        <button onClick={() => editor.chain().focus().toggleItalic().run()} className={`richer-editor-button ${editor.isActive("italic") ? "richer-editor-buttonActive" : ''}`} type="button" aria-label={t.italic} title={t.italic}><ItalicIcon size={16} /></button>
      )}
      {!excludeToolbarButtons.includes('underline') && (
        <button onClick={() => editor.chain().focus().toggleUnderline().run()} className={`richer-editor-button ${editor.isActive("underline") ? "richer-editor-buttonActive" : ''}`} type="button" aria-label={t.underline} title={t.underline}><UnderlineIcon size={16} /></button>
      )}
      {!excludeToolbarButtons.includes('strike') && (
        <button onClick={() => editor.chain().focus().toggleStrike().run()} className={`richer-editor-button ${editor.isActive("strike") ? "richer-editor-buttonActive" : ''}`} type="button" aria-label={t.strike} title={t.strike}><StrikeIcon size={16} /></button>
      )}
      {!excludeToolbarButtons.includes('highlight') && (
        <button onClick={() => editor.chain().focus().toggleHighlight().run()} className={`richer-editor-button ${editor.isActive("highlight") ? "richer-editor-buttonActive" : ''}`} type="button" aria-label={t.highlight} title={t.highlight}><Highlighter size={16} /></button>
      )}
      {!excludeToolbarButtons.includes('code') && (
        <button onClick={() => editor.chain().focus().toggleCodeBlock().run()} className={`richer-editor-button ${editor.isActive("codeBlock") ? "richer-editor-buttonActive" : ''}`} type="button" aria-label={t.code} title={t.code}><CodeIcon size={16} /></button>
      )}
      <div className="toolbar-divider" />
      {/* Lists */}
      {!excludeToolbarButtons.includes('bulletList') && (
        <button onClick={() => editor.chain().focus().toggleBulletList().run()} className={`richer-editor-button ${editor.isActive("bulletList") ? "richer-editor-buttonActive" : ''}`} type="button" aria-label={t.bulletList} title={t.bulletList}><BulletListIcon size={16} /></button>
      )}
      {/* Unordered List Style Dropdown */}
      <CustomSelect
        value={editor.getAttributes('bulletList').listStyleType || ''}
        options={unorderedListStyles.map(opt => ({ value: opt.value, label: <>{opt.icon} {opt.name}</> }))}
        onChange={(val: string) => {
          if (editor.isActive('bulletList')) {
            editor.chain().focus().updateAttributes('bulletList', { listStyleType: val }).run();
          } else {
            window.alert('Please place the cursor inside an unordered list to change its style.');
          }
        }}
        className="richer-editor-select"
        placeholder="UL Style"
        aria-label="Unordered List Style"
      />
      {!excludeToolbarButtons.includes('orderedList') && (
        <button onClick={() => editor.chain().focus().toggleOrderedList().run()} className={`richer-editor-button ${editor.isActive("orderedList") ? "richer-editor-buttonActive" : ''}`} type="button" aria-label={t.orderedList} title={t.orderedList}><OrderedListIcon size={16} /></button>
      )}
      {/* Ordered List Style Dropdown */}
      <CustomSelect
        value={editor.getAttributes('orderedList').listStyleType || ''}
        options={orderedListStyles.map(opt => ({ value: opt.value, label: <>{opt.icon} {opt.name}</> }))}
        onChange={(val: string) => {
          if (editor.isActive('orderedList')) {
            editor.chain().focus().updateAttributes('orderedList', { listStyleType: val }).run();
          } else {
            window.alert('Please place the cursor inside an ordered list to change its style.');
          }
        }}
        className="richer-editor-select"
        placeholder="OL Style"
        aria-label="Ordered List Style"
      />
      {!excludeToolbarButtons.includes('taskList') && (
        <button onClick={() => editor.chain().focus().toggleTaskList().run()} className={`richer-editor-button ${editor.isActive("taskList") ? "richer-editor-buttonActive" : ''}`} type="button" aria-label={t.taskList} title={t.taskList}><TaskListIcon size={16} /></button>
      )}
      <div className="toolbar-divider" />
      {/* Blockquote, hr */}
      {!excludeToolbarButtons.includes('blockquote') && (
        <button onClick={() => editor.chain().focus().toggleBlockquote().run()} className={`richer-editor-button ${editor.isActive("blockquote") ? "richer-editor-buttonActive" : ''}`} type="button" aria-label={t.blockquote} title={t.blockquote}><BlockquoteIcon size={16} /></button>
      )}
      {!excludeToolbarButtons.includes('hr') && (
        <button onClick={() => editor.chain().focus().setHorizontalRule().run()} className="richer-editor-button" type="button" aria-label={t.hr} title={t.hr}>HR</button>
      )}
      <div className="toolbar-divider" />
      {/* Table */}
      {!excludeToolbarButtons.includes('table') && (
        <button onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()} className="richer-editor-button" type="button" aria-label={t.table} title={t.table}><TableIcon size={16} /></button>
      )}
      <div className="toolbar-divider" />
      {/* Link Popover */}
      {!excludeToolbarButtons.includes('link') && (
        <>
          <button
            ref={linkButtonRef}
            onClick={() => {
              setLinkPopoverOpen((open) => !open);
              setLinkUrl(editor.getAttributes('link').href || '');
            }}
            className={`richer-editor-button${editor.isActive("link") ? ' richer-editor-buttonActive' : ''}`}
            type="button"
            aria-label={t.link}
            title={t.link}
          >
            <LinkIcon size={16} />
          </button>
          <CustomPopover
            open={linkPopoverOpen}
            onOpenChange={setLinkPopoverOpen}
            anchorEl={linkButtonRef.current}
            closeButton
            onEsc={() => setLinkPopoverOpen(false)}
          >
            <div className="mb-2 font-semibold text-base">Insert Link</div>
            <input
              type="text"
              placeholder="Paste link URL here..."
              value={linkUrl}
              onChange={e => setLinkUrl(e.target.value)}
              className="richer-editor-input"
              autoFocus
            />
            <div className="richer-editor-flexRow">
              <button
                className="richer-editor-primaryBtn"
                onClick={handleLinkInsert}
                disabled={!linkUrl}
              >
                {t.insert}
              </button>
              <button
                className="richer-editor-secondaryBtn"
                onClick={handleLinkUnset}
                disabled={!editor.isActive('link')}
              >
                {t.remove}
              </button>
            </div>
          </CustomPopover>
        </>
      )}
      {/* Image Popover */}
      {!excludeToolbarButtons.includes('image') && (
        <>
          <button
            ref={imageButtonRef}
            onClick={() => {
              setImagePopoverOpen((open) => !open);
              if (!imageUploadUrl) setImageTab('url');
            }}
            className="richer-editor-button"
            type="button"
          >
            <ImageIcon size={16} />
          </button>
          <CustomPopover
            open={imagePopoverOpen}
            onOpenChange={setImagePopoverOpen}
            anchorEl={imageButtonRef.current}
            closeButton
            onEsc={() => setImagePopoverOpen(false)}
          >
            <div className="mb-2 font-semibold text-base flex gap-4 border-b pb-2">
              <button className={`richer-editor-button${imageTab === 'url' ? ' richer-editor-buttonActive' : ''}`} onClick={() => setImageTab('url')}>URL</button>
              {imageUploadUrl && (
                <button className={`richer-editor-button${imageTab === 'upload' ? ' richer-editor-buttonActive' : ''}`} onClick={() => setImageTab('upload')}>Upload</button>
              )}
            </div>
            {imageTab === 'url' && (
              <>
                <input
                  type="text"
                  placeholder="Paste image URL here..."
                  value={imageUrl}
                  onChange={e => setImageUrl(e.target.value)}
                  className="richer-editor-input"
                  autoFocus
                />
                <div className="richer-editor-flexRowMb2">
                  <input
                    type="text"
                    placeholder="Width (e.g. 400 or 50%)"
                    value={imageWidth}
                    onChange={e => setImageWidth(e.target.value)}
                    className="richer-editor-input"
                  />
                  <input
                    type="text"
                    placeholder="Height (e.g. 300 or 50%)"
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
                  {t.image}
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
                      className="mb2"
                      disabled={uploading}
                    />
                    {uploading && <div className="text-sm text-blue-600 mb-2">Uploading...</div>}
                    {uploadError && <div className="text-sm text-red-600 mb-2">{uploadError}</div>}
                  </>
                )}
                {uploadedImageUrl && (
                  <>
                    <div className="mb-2 flex flex-col items-center">
                      <img src={uploadedImageUrl} alt="Preview" className="max-h-40 max-w-full rounded border mb-2" />
                    </div>
                    <div className="richer-editor-flexRowMb2">
                      <input
                        type="text"
                        placeholder="Width (e.g. 400 or 50%)"
                        value={imageWidth}
                        onChange={e => setImageWidth(e.target.value)}
                        className="richer-editor-input"
                      />
                      <input
                        type="text"
                        placeholder="Height (e.g. 300 or 50%)"
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
                        {t.add}
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
                        {t.cancel}
                      </button>
                    </div>
                  </>
                )}
              </>
            )}
          </CustomPopover>
        </>
      )}
      {/* Video Popover */}
      {!excludeToolbarButtons.includes('video') && (
        <>
          <button
            ref={videoButtonRef}
            onClick={() => setVideoPopoverOpen((open) => !open)}
            className="richer-editor-button"
            type="button"
          >
            <VideoIcon size={16} />
          </button>
          <CustomPopover
            open={videoPopoverOpen}
            onOpenChange={setVideoPopoverOpen}
            anchorEl={videoButtonRef.current}
            closeButton
            onEsc={() => setVideoPopoverOpen(false)}
          >
            <div className="mb-2 font-semibold text-base">Insert YouTube Video</div>
            <input
              type="text"
              placeholder="Paste YouTube video URL here..."
              value={videoUrl}
              onChange={e => setVideoUrl(e.target.value)}
              className="richer-editor-input"
              autoFocus
            />
            <div className="richer-editor-flexRowMb2">
              <input
                type="text"
                placeholder="Width (e.g. 400 or 50%)"
                value={videoWidth}
                onChange={e => setVideoWidth(e.target.value)}
                className="richer-editor-input"
              />
              <input
                type="text"
                placeholder="Height (e.g. 300 or 50%)"
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
              {t.video}
            </button>
          </CustomPopover>
        </>
      )}
      {/* Alignment */}
      {!excludeToolbarButtons.includes('alignLeft') && (
        <button onClick={() => editor.chain().focus().setTextAlign("left").run()} className={`richer-editor-button ${editor.isActive({ textAlign: "left" }) ? "richer-editor-buttonActive" : ''}`} type="button" aria-label={t.alignLeft} title={t.alignLeft}><AlignLeft size={16} /></button>
      )}
      {!excludeToolbarButtons.includes('alignCenter') && (
        <button onClick={() => editor.chain().focus().setTextAlign("center").run()} className={`richer-editor-button ${editor.isActive({ textAlign: "center" }) ? "richer-editor-buttonActive" : ''}`} type="button" aria-label={t.alignCenter} title={t.alignCenter}><AlignCenter size={16} /></button>
      )}
      {!excludeToolbarButtons.includes('alignRight') && (
        <button onClick={() => editor.chain().focus().setTextAlign("right").run()} className={`richer-editor-button ${editor.isActive({ textAlign: "right" }) ? "richer-editor-buttonActive" : ''}`} type="button" aria-label={t.alignRight} title={t.alignRight}><AlignRight size={16} /></button>
      )}
      {!excludeToolbarButtons.includes('alignJustify') && (
        <button onClick={() => editor.chain().focus().setTextAlign("justify").run()} className={`richer-editor-button ${editor.isActive({ textAlign: "justify" }) ? "richer-editor-buttonActive" : ''}`} type="button" aria-label={t.alignJustify} title={t.alignJustify}><AlignJustify size={16} /></button>
      )}
      {/* Text Color Picker */}
      {!excludeToolbarButtons.includes('textColor') && (
        <div className="flex items-center gap-1 border border-gray-300 dark:border-gray-600 rounded px-1 py-0.5" style={{height: 28}} title={t.textColor} aria-label={t.textColor}>
          <TextColorIcon size={16} />
          <input
            type="color"
            value={editor.getAttributes('textStyle').color || '#000000'}
            onChange={e => {
              editor.commands.focus();
              editor.commands.setColor(e.target.value);
            }}
            style={{ width: 20, height: 20, border: 'none', background: 'none', cursor: 'pointer', padding: 0 }}
            className="richer-editor-colorInput"
          />
        </div>
      )}
      {/* Background Color Picker */}
      {!excludeToolbarButtons.includes('bgColor') && (
        <div className="flex items-center gap-1 border border-gray-300 dark:border-gray-600 rounded px-1 py-0.5" style={{height: 28}} title={t.bgColor} aria-label={t.bgColor}>
          <PaintBucket size={16} />
          <input
            type="color"
            value={editor.getAttributes('highlight').color || '#ffff00'}
            onChange={e => {
              editor.commands.focus();
              editor.commands.setHighlight({ color: e.target.value });
            }}
            style={{ width: 20, height: 20, border: 'none', background: 'none', cursor: 'pointer', padding: 0 }}
            className="richer-editor-colorInput"
          />
        </div>
      )}
      {/* Subscript/Superscript Buttons */}
      {!excludeToolbarButtons.includes('subscript') && (
        <button
          onClick={() => editor.chain().focus().toggleSubscript().run()}
          className={`richer-editor-button ${editor.isActive('subscript') ? 'richer-editor-buttonActive' : ''}`}
          type="button"
          title="Subscript"
          aria-label={t.subscript}
        >
          <SubscriptIcon size={16} />
        </button>
      )}
      {!excludeToolbarButtons.includes('superscript') && (
        <button
          onClick={() => editor.chain().focus().toggleSuperscript().run()}
          className={`richer-editor-button ${editor.isActive('superscript') ? 'richer-editor-buttonActive' : ''}`}
          type="button"
          title="Superscript"
          aria-label={t.superscript}
        >
          <SuperscriptIcon size={16} />
        </button>
      )}
       {/* Undo/Redo */}
       <div className="richer-editor-ml2"></div>
      {!excludeToolbarButtons.includes('undo') && (
        <button onClick={() => editor.chain().focus().undo().run()} className="richer-editor-button" type="button" aria-label={t.undo} title={t.undo}><UndoIcon size={16} /></button>
      )}
      {!excludeToolbarButtons.includes('redo') && (
        <button onClick={() => editor.chain().focus().redo().run()} className="richer-editor-button" type="button" aria-label={t.redo} title={t.redo}><RedoIcon size={16} /></button>
      )}
    </div>
  );
};

const RicherEditor = ({
  content = '',
  onChange,
  imageUploadUrl,
  minHeight,
  maxHeight,
  editorProps = {},
  outputFormat = 'html',
  readOnly = false,
  placeholder,
  className = '',
  excludeToolbarButtons = [],
  style = {},
  i18n = {},
  onImageUpload,
}: RicherEditorProps) => {
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
          class: 'mx-auto my-4 rounded-lg shadow',
        },
      }),
      Color, // <-- Color must come before TextStyle
      TextStyle,
      FontFamily,
      FontSize,
      Highlight.configure({
        multicolor: true,
      }),
      Placeholder.configure({
        placeholder: placeholder || 'Write something...'
      }),
    ],
    content,
    editorProps: {
      ...editorProps,
      attributes: {
        class: `richer-editor-textarea prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg sm:prose-base prose-p:mt-0 prose-p:mb-1 leading-6 prose-blockquote:bg-muted/50 prose-blockquote:p-2 prose-blockquote:px-6 prose-blockquote:border-border prose-blockquote:not-italic prose-blockquote:rounded-r-lg [&_blockquote>p]:after:content-none [&_blockquote>p]:before:content-none  prose-li:marker:text-muted-foreground w-full max-w-full ${className || ''}`,
        style: `${minHeight ? `min-height:${minHeight};` : ''}${editorProps?.attributes?.style || ''}`,
        spellCheck: 'true',
        readOnly: readOnly ? 'true' : undefined,
        placeholder: placeholder || undefined,
        ...editorProps?.attributes,
      },
    },
    onUpdate({ editor }) {
      if (onChange) {
        if (outputFormat === 'json') {
          onChange(editor.getJSON());
        } else {
          onChange(editor.getHTML());
        }
      }
    },
    editable: !readOnly,
    immediatelyRender: false,
  });

  // If content prop changes, update the editor content
  React.useEffect(() => {
    if (editor && content !== undefined) {
      const current = outputFormat === 'json' ? editor.getJSON() : editor.getHTML();
      if (current !== content) {
        editor.commands.setContent(content);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content]);

  return (
    <div className={`richer-editor-roundedMdBorder ${className || ''}`} style={style}>
      <MenuBar editor={editor} imageUploadUrl={imageUploadUrl} excludeToolbarButtons={excludeToolbarButtons} i18n={i18n} onImageUpload={onImageUpload} />
      <div className="richer-editor-overflowAuto" style={{maxHeight: maxHeight}}>
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default RicherEditor;
