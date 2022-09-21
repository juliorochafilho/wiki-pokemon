import * as ToolbarPrimitive from "@radix-ui/react-toolbar";
import { styled } from "../../stitches.config";
import { violet, blackA, mauve } from "@radix-ui/colors";


const StyledToolbar = styled(ToolbarPrimitive.Root, {
  margin: 20,
  display: "flex",
  padding: 10,
  width: "75%",
  minWidth: "max-content",
  borderRadius: 6,
  backgroundColor: "$secondary",
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
});

const itemStyles = {
  all: "unset",
  flex: "0 0 auto",
  color: "$primary",
  height: 25,
  padding: "0 5px",
  borderRadius: 4,
  display: "inline-flex",
  fontSize: 13,
  lineHeight: 1,
  alignItems: "center",
  justifyContent: "center",
  "&:hover": { backgroundColor: violet.violet3, color: violet.violet11 },
  "&:focus": { position: "relative", boxShadow: `0 0 0 2px ${violet.violet7}` },
};

const StyledButton = styled(
  ToolbarPrimitive.Button,
  {
    ...itemStyles,
    paddingLeft: 10,
    paddingRight: 10,
    color: "white",
    backgroundColor: violet.violet9,
  },
  { "&:hover": { color: "white", backgroundColor: violet.violet10 } }
);

const StyledLink = styled(
  ToolbarPrimitive.Link,
  {
    ...itemStyles,
    backgroundColor: "transparent",
    color: "$primary",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
  },
  { "&:hover": { backgroundColor: "transparent", cursor: "pointer" } }
);

const StyledSeparator = styled(ToolbarPrimitive.Separator, {
  width: 1,
  backgroundColor: mauve.mauve6,
  margin: "0 10px",
});

const StyledToggleGroup = styled(ToolbarPrimitive.ToggleGroup, {
  display: "inline-flex",
  borderRadius: 4,
});

const StyledToggleItem = styled(ToolbarPrimitive.ToggleItem, {
  ...itemStyles,
  boxShadow: 0,
  backgroundColor: "$secondary",
  marginLeft: 2,
  "&:first-child": { marginLeft: 0 },
  "&[data-state=on]": {
    backgroundColor: violet.violet5,
    color: violet.violet11,
  },
});

export const Toolbar = StyledToolbar;
export const ToolbarButton = StyledButton;
export const ToolbarSeparator = StyledSeparator;
export const ToolbarLink = StyledLink;
export const ToolbarToggleGroup = StyledToggleGroup;
export const ToolbarToggleItem = StyledToggleItem;
