import { Meta } from '@storybook/angular';
import { ColumnComponent } from './column.component';

export default {
    title: 'Components/Layout/Column',
    component: ColumnComponent,
} as Meta<ColumnComponent>;

export const Primary = {
    render: (args: ColumnComponent) => ({
        props: args,
    }),
    args: {},
};
