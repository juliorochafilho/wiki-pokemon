import React from "react";
import { styled } from "@stitches/react";
import {
  StrikethroughIcon,
  TextAlignLeftIcon,
  TextAlignCenterIcon,
  TextAlignRightIcon,
  FontBoldIcon,
  FontItalicIcon,
  MoonIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import {
  Toolbar,
  ToolbarButton,
  ToolbarSeparator,
  ToolbarLink,
  ToolbarToggleGroup,
  ToolbarToggleItem,
} from "./styles";

const ToolbarDemo = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Toolbar aria-label="Formatting options">
      <ToolbarToggleGroup
        type="single"
        defaultValue="light"
        aria-label="Theme"
        onValueChange={(newValue) => setTheme(newValue)}
      >
        <ToolbarToggleItem value="dark" aria-label="Dark Theme">
          <MoonIcon />
        </ToolbarToggleItem>
        <ToolbarToggleItem value="light" aria-label="Light theme">
          <SunIcon />
        </ToolbarToggleItem>
      </ToolbarToggleGroup>
      <ToolbarSeparator />
      <ToolbarLink
        href="https://pokeapi.co/"
        target="_blank"
        css={{ marginRight: 10 }}
      >
        Powered by pokeapi.co
      </ToolbarLink>
      <ToolbarButton css={{ marginLeft: "auto" }}>Share</ToolbarButton>
    </Toolbar>
  );
};

export default ToolbarDemo;
