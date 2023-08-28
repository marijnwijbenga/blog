import { Meta, StoryObj } from '@storybook/angular';
import { CardComponent } from './card.component';

export default {
    title: 'Components/Common/Card',
    component: CardComponent,
} as Meta<CardComponent>;

type Story = StoryObj<CardComponent>;

export const Primary: Story = {
    render: (args: CardComponent) => ({
        props: args,
    }),
    args: {
        variant: 'primary',
    },
};
