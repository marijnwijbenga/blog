import { Meta, StoryObj } from '@storybook/angular';
import { BarComponent } from './bar.component';

export default {
    title: 'Components/Layout/Bar',
    component: BarComponent,
} as Meta<BarComponent>;

type Story = StoryObj<BarComponent>;

export const Primary: Story = {
    render: (args: BarComponent) => ({
        props: args,
    }),
    args: {},
};
