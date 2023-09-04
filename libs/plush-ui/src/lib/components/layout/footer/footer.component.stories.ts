import { Meta } from '@storybook/angular';
import { FooterComponent } from './footer.component';

export default {
    title: 'Components/Layout/Footer',
    component: FooterComponent,
} as Meta<FooterComponent>;

export const Primary = {
    render: (args: FooterComponent) => ({
        props: args,
    }),
    args: {},
};
