'use client';
// File: frontend/src/components/tiptap/SmallTiptapEditor.tsx
import React, { useCallback, useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Bold from "@tiptap/extension-bold";
import Underline from "@tiptap/extension-underline";
import Highlight from '@tiptap/extension-highlight';
import CodeBlock from "@tiptap/extension-code-block";
import Youtube from '@tiptap/extension-youtube';
import TextAlign from "@tiptap/extension-text-align";
import { ListItem } from "@tiptap/extension-list-item";
import { BulletList } from "@tiptap/extension-bullet-list";
import { OrderedList } from "@tiptap/extension-ordered-list";
import { TextStyle } from '@tiptap/extension-text-style';
import FontSize from '@tiptap/extension-font-size';
import Placeholder from '@tiptap/extension-placeholder';
import CustomSelect from './ui/CustomSelect';
import CustomPopover from './ui/CustomPopover';
import BoldIcon from '../icons/BoldIcon';
import UnderlineIcon from '../icons/UnderlineIcon';
import Highlighter from '../icons/Highlighter';
import CodeIcon from '../icons/CodeIcon';
import BulletListIcon from '../icons/BulletListIcon';
import OrderedListIcon from '../icons/OrderedListIcon';
import LinkIcon from '../icons/LinkIcon';
import ImageIcon from '../icons/ImageIcon';
import VideoIcon from '../icons/VideoIcon';
import AlignLeft from '../icons/AlignLeft';
import AlignCenter from '../icons/AlignCenter';
import AlignRight from '../icons/AlignRight';
import AlignJustify from '../icons/AlignJustify';
import FontSizeIcon from '../icons/FontSizeIcon';
import './RicherEditor.css';

const fontSizes = [
  { name: '10px', value: '10px' },
  { name: '12px', value: '12px' },
  { name: '14px', value: '14px' },
  { name: '16px', value: '16px' },
];

const alignmentOptions = [
  { value: 'left', label: <AlignLeft size={18} />, name: 'Left' },
  { value: 'center', label: <AlignCenter size={18} />, name: 'Center' },
  { value: 'right', label: <AlignRight size={18} />, name: 'Right' },
  { value: 'justify', label: <AlignJustify size={18} />, name: 'Justify' },
];

// Update MenuBar to accept imageUploadUrl prop
const MenuBar = ({ editor, imageUploadUrl }: { editor: any, imageUploadUrl?: string }) => {
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
    if (!imageUploadUrl) return;
    setUploading(true);
    setUploadError(null);
    setUploadedImageUrl('');
    try {
      const formData = new FormData();
      formData.append('file', file);
      // If tiptap expects a specific field name, adjust here
      const response = await fetch(imageUploadUrl, {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) throw new Error('Upload failed');
      const data = await response.json();
      // Tiptap expects { link: 'url' } or similar; adjust as needed
      const url = data.link || data.url || data.src || '';
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

  return (
    <>
      <div className="richer-editor-toolbar global-toolbar">
        {/* Font Size Dropdown */}
        <CustomSelect
          value={editor.getAttributes('fontSize').fontSize || ''}
          options={fontSizes.map(f => ({ value: f.value, label: f.name }))}
          onChange={val => editor.chain().focus().setFontSize(val).run()}
          className="richer-editor-select"
          placeholder="Font Size"
          aria-label="Font Size"
        />
        <div className="toolbar-divider" />
        {/* Bold */}
        <button onClick={() => editor.chain().focus().toggleBold().run()} className={`richer-editor-button${editor.isActive("bold") ? ' richer-editor-buttonActive' : ''}`} type="button" aria-label="Bold" title="Bold (Ctrl+B)"><BoldIcon size={16} /></button>
        {/* Underline */}
        <button onClick={() => editor.chain().focus().toggleUnderline().run()} className={`richer-editor-button${editor.isActive("underline") ? ' richer-editor-buttonActive' : ''}`} type="button" aria-label="Underline" title="Underline (Ctrl+U)"><UnderlineIcon size={16} /></button>
        {/* Highlighter (single color) */}
        <button onClick={() => editor.chain().focus().toggleHighlight({ color: '#fff59d' }).run()} className={`richer-editor-button${editor.isActive("highlight") ? ' richer-editor-buttonActive' : ''}`} type="button" aria-label="Highlight" title="Highlight"><Highlighter size={16} /></button>
        {/* Code block */}
        <button onClick={() => editor.chain().focus().toggleCodeBlock().run()} className={`richer-editor-button${editor.isActive("codeBlock") ? ' richer-editor-buttonActive' : ''}`} type="button" aria-label="Code Block" title="Code Block"><CodeIcon size={16} /></button>
        <div className="toolbar-divider" />
        {/* Unordered List */}
        <button onClick={() => editor.chain().focus().toggleBulletList().run()} className={`richer-editor-button${editor.isActive("bulletList") ? ' richer-editor-buttonActive' : ''}`} type="button" aria-label="Bullet List" title="Bullet List"><BulletListIcon size={16} /></button>
        {/* Ordered List */}
        <button onClick={() => editor.chain().focus().toggleOrderedList().run()} className={`richer-editor-button${editor.isActive("orderedList") ? ' richer-editor-buttonActive' : ''}`} type="button" aria-label="Ordered List" title="Ordered List"><OrderedListIcon size={16} /></button>
        <div className="toolbar-divider" />
        {/* Link Popover */}
        <button
          ref={linkButtonRef}
          onClick={() => {
            setLinkPopoverOpen((open) => !open);
            setLinkUrl(editor.getAttributes('link').href || '');
          }}
          className={`richer-editor-button${editor.isActive("link") ? ' richer-editor-buttonActive' : ''}`}
          type="button"
          aria-label="Link"
          title="Insert/Edit Link"
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
              Insert
            </button>
            <button
              className="richer-editor-secondaryBtn"
              onClick={handleLinkUnset}
              disabled={!editor.isActive('link')}
            >
              Remove
            </button>
          </div>
        </CustomPopover>
        {/* Image Popover */}
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
                  Insert Image
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
                        Add
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
                        Cancel
                      </button>
                    </div>
                  </>
                )}
              </>
            )}
          </CustomPopover>
        </>
        {/* Video Popover */}
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
              Insert Video
            </button>
          </CustomPopover>
        </>
        {/* Alignment Dropdown */}
        <CustomSelect
          value={editor.getAttributes('textAlign') || 'left'}
          options={alignmentOptions.map(opt => ({ value: opt.value, label: <>{opt.label} {opt.name}</> }))}
          onChange={val => editor.chain().focus().setTextAlign(val).run()}
          className="richer-editor-select"
          placeholder="Align"
        />
      </div>
    </>
  );
};

// Update SmallTiptapEditor to accept imageUploadUrl prop
interface TiptapEditorProps {
  content?: string;
  onChange?: (html: string) => void;
  imageUploadUrl?: string;
  placeholderText?: string;
}

const SmallTiptapEditor  = ({ content = '', onChange, imageUploadUrl, placeholderText }: TiptapEditorProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({ openOnClick: true }),
      Image,
      Bold,
      Underline,
      Highlight.configure({ multicolor: false, HTMLAttributes: { style: 'background-color: #fff59d' } }),
      CodeBlock,
      BulletList,
      OrderedList,
      ListItem,
      TextAlign.configure({ types: ["paragraph"] }),
      Youtube.configure({
        controls: true,
        allowFullscreen: true,
        width: 640,
        height: 360,
        HTMLAttributes: {
          class: 'mx-auto my-4 rounded-lg shadow',
        },
      }),
      TextStyle,
      FontSize,
      Placeholder.configure({
        placeholder: placeholderText || 'Write something...'
      }),
    ],
    content,
    editorProps: {
      attributes: {
        class: "richer-editor-textarea prose dark:prose-invert prose-sm prose-p:mt-0 prose-p:mb-1 leading-6 prose-blockquote:bg-muted/50 prose-blockquote:p-2 prose-blockquote:px-6 prose-blockquote:border-border prose-blockquote:not-italic prose-blockquote:rounded-r-lg [&_blockquote>p]:after:content-none [&_blockquote>p]:before:content-none  prose-li:marker:text-muted-foreground w-full max-w-full      focus:outline-none min-h-[130px] p-2 bg-background rounded-b-md border border-gray-200 dark:border-gray-700",
      },
    },
    onUpdate({ editor }) {
      if (onChange) {
        onChange(editor.getHTML());
      }
    },
    immediatelyRender: false,
  });

  // If content prop changes, update the editor content
  React.useEffect(() => {
    if (editor && content !== undefined && editor.getHTML() !== content) {
      editor.commands.setContent(content);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content]);

  return (
      <div className="richer-editor-roundedMdBorder">
        <MenuBar editor={editor} imageUploadUrl={imageUploadUrl} />
        <div className="richer-editor-overflowAuto">
          <EditorContent editor={editor} />
        </div>
      </div>
  );
};

export default SmallTiptapEditor;