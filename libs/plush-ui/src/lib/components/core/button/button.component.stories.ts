import { Meta } from "@storybook/angular";
import { ButtonComponent } from "./button.component";

export default {
  title: "ButtonComponent",
  component: ButtonComponent,
} as Meta<ButtonComponent>;

export const Primary = {
  render: (args: ButtonComponent) => ({
    template: `
    <pui-button>Amazink!</pui-button>
    `,
    props: args,
  }),
  args: {},
};
