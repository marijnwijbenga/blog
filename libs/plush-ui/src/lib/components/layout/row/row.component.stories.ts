import { Meta } from '@storybook/angular';
import { RowComponent } from './row.component';

export default {
    title: 'Components/Layout/Row',
    component: RowComponent,
} as Meta<RowComponent>;

export const Primary = {
    render: (args: RowComponent) => ({
        props: args,
    }),
    args: {},
};
