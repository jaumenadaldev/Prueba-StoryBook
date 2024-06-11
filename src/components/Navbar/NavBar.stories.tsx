import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import  NavBar  from "./NavBar";

export default {
    title: "Components/NavBar",
    component: NavBar,
    argTypes:{
        backgroundColor: { control: 'color'},
        linkColor: { control: 'color'},
    },
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const Default = Template.bind({});
Default.args = {
    links: [
        { href: "#", title: "Home", active: true },
        { href: "#about", title: "About", active: false },
        { href: "#services", title: "Services", active: false },
        { href: "#contact", title: "Contact", active: false },
    ],
};

export const LightTheme = Template.bind({});
LightTheme.args = { 
    ...Default.args,
    backgroundColor: "white",
    linkColor: "black",
};

export const DarkTheme = Template.bind({});
DarkTheme.args = {
    ...Default.args,
    backgroundColor: "black",
    linkColor: "white",
};

export const CustomTheme = Template.bind({});
CustomTheme.args = {
    ...Default.args,
    backgroundColor: "purple",
    linkColor: "yellow",
};