import React from 'react';
import * as _tiptap_core from '@tiptap/core';
import * as _tiptap_extension_list from '@tiptap/extension-list';

interface RicherEditorProps {
    content?: {
        json?: object | string;
        html?: string;
    };
    onChange?: (value: {
        html: string;
        json: object | string;
    }) => void;
    imageUploadUrl?: string;
    minHeight?: string;
    maxHeight?: string;
    editorProps?: any;
    className?: string;
    excludeToolbarButtons?: string[];
    i18n?: Record<string, string>;
    fontSizeOptions?: {
        name: string;
        value: string;
    }[];
    fontFamilyOptions?: {
        name: string;
        value: string;
    }[];
    extensions?: any[];
    customToolbarButtons?: React.ReactNode | ((editor: any) => React.ReactNode);
}
declare const RicherEditor: React.ForwardRefExoticComponent<RicherEditorProps & React.RefAttributes<unknown>>;

interface SmallRicherEditorProps {
    content?: {
        json?: object | string;
        html?: string;
    };
    onChange?: (value: {
        html: string;
        json: object | string;
    }) => void;
    imageUploadUrl?: string;
    minHeight?: string;
    maxHeight?: string;
    editorProps?: any;
    className?: string;
    excludeToolbarButtons?: string[];
    i18n?: Record<string, string>;
    fontSizeOptions?: {
        name: string;
        value: string;
    }[];
    fontFamilyOptions?: {
        name: string;
        value: string;
    }[];
    extensions?: any[];
    customToolbarButtons?: React.ReactNode | ((editor: any) => React.ReactNode);
}
declare const SmallRicherEditor: React.ForwardRefExoticComponent<SmallRicherEditorProps & React.RefAttributes<unknown>>;

type Props = {
    content: string;
    className?: string;
};
declare const RicherContent: ({ content, className }: Props) => React.JSX.Element;

declare const CustomBulletList: _tiptap_core.Node<_tiptap_extension_list.BulletListOptions, any>;

declare const CustomOrderedList: _tiptap_core.Node<_tiptap_extension_list.OrderedListOptions, any>;

export { CustomBulletList, CustomOrderedList, RicherContent, RicherEditor, SmallRicherEditor };
