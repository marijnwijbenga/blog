import { Meta } from '@storybook/angular';
import { PageComponent } from './page.component';

export default {
    title: 'PageComponent',
    component: PageComponent,
} as Meta<PageComponent>;

export const Primary = {
    render: (args: PageComponent) => ({
        props: args,
    }),
    args: {},
};
