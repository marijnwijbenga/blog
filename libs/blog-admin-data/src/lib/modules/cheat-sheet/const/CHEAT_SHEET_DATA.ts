import { CheatSheetDataInterface } from '../interfaces';
export const CHEAT_SHEET_DATA: CheatSheetDataInterface[] = [
    {
        title: 'Titles',
        items: ['# heading 1', '## heading 2', '### heading 3'],
    },
    {
        title: 'Markup',
        items: [
            '**bold text**',
            '## heading 2',
            '### heading 3',
            '* italicized text *',
            '> blockquote',
        ],
    },
    {
        title: 'Ordered list',
        items: ['1. First item', '1. Second item'],
    },
    {
        title: 'Unordered list',
        items: ['- First item', '- Second item'],
    },
    {
        title: '',
        items: [
            '`code snippet`',
            '[link title](https://www.url.com)',
            '![alt text](image.jpg)',
        ],
    },
];
