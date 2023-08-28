import { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { CardComponent } from '../../common/card/card.component';

export default {
    title: 'Components/Core/Button',
    component: ButtonComponent,
} as Meta<ButtonComponent>;

type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
    render: (args: ButtonComponent) => ({
        template: `
    <pui-button>Amazink!</pui-button>
    `,
        props: args,
    }),
    args: {},
};
