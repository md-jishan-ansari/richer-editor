import React from 'react';
import * as _tiptap_core from '@tiptap/core';
import * as _tiptap_extension_list from '@tiptap/extension-list';

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
}
declare const RicherEditor: ({ content, onChange, imageUploadUrl, minHeight, maxHeight, editorProps, outputFormat, readOnly, placeholder, className, excludeToolbarButtons, style, i18n, }: RicherEditorProps) => React.JSX.Element;

interface SmallRicherEditorProps {
    content?: string | object;
    onChange?: (value: string | object) => void;
    imageUploadUrl?: string;
    placeholder?: string;
    minHeight?: string;
    maxHeight?: string;
    editorProps?: any;
    outputFormat?: 'html' | 'json';
    readOnly?: boolean;
    className?: string;
    style?: React.CSSProperties;
    excludeToolbarButtons?: string[];
    i18n?: Record<string, string>;
}
declare const SmallRicherEditor: ({ content, onChange, imageUploadUrl, placeholder, minHeight, maxHeight, editorProps, outputFormat, readOnly, className, style, excludeToolbarButtons, i18n, }: SmallRicherEditorProps) => React.JSX.Element;

declare const RicherContent: ({ content, className }: {
    content: string;
    className?: string;
}) => React.JSX.Element;

declare const CustomBulletList: _tiptap_core.Node<_tiptap_extension_list.BulletListOptions, any>;

declare const CustomOrderedList: _tiptap_core.Node<_tiptap_extension_list.OrderedListOptions, any>;

export { CustomBulletList, CustomOrderedList, RicherContent, RicherEditor, SmallRicherEditor };
