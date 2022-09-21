import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { styled } from "@stitches/react";
import { violet, mauve } from "@radix-ui/colors";

const contentStyles = {
  minWidth: 220,
  backgroundColor: "white",
  borderRadius: 6,
  overflow: "hidden",
  padding: 5,
  boxShadow:
    "0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)",
};

const itemStyles = {
  all: "unset",
  fontSize: 13,
  lineHeight: 1,
  color: violet.violet11,
  borderRadius: 3,
  display: "flex",
  alignItems: "center",
  height: 25,
  padding: "0 5px",
  position: "relative",
  paddingLeft: 25,
  userSelect: "none",

  "&[data-disabled]": {
    color: mauve.mauve8,
    pointerEvents: "none",
  },

  "&[data-highlighted]": {
    backgroundColor: violet.violet9,
    color: violet.violet1,
  },
};

const StyledContent = styled(ContextMenuPrimitive.Content, {
  ...contentStyles,
});
const StyledSubContent = styled(ContextMenuPrimitive.SubContent, {
  ...contentStyles,
});
const StyledItem = styled(ContextMenuPrimitive.Item, { ...itemStyles });
const StyledCheckboxItem = styled(ContextMenuPrimitive.CheckboxItem, {
  ...itemStyles,
});
const StyledRadioItem = styled(ContextMenuPrimitive.RadioItem, {
  ...itemStyles,
});
const StyledSubTrigger = styled(ContextMenuPrimitive.SubTrigger, {
  '&[data-state="open"]': {
    backgroundColor: violet.violet4,
    color: violet.violet11,
  },
  ...itemStyles,
});
const StyledLabel = styled(ContextMenuPrimitive.Label, {
  paddingLeft: 25,
  fontSize: 12,
  lineHeight: "25px",
  color: mauve.mauve11,
});

const StyledSeparator = styled(ContextMenuPrimitive.Separator, {
  height: 1,
  backgroundColor: violet.violet6,
  margin: 5,
});

const StyledItemIndicator = styled(ContextMenuPrimitive.ItemIndicator, {
  position: "absolute",
  left: 0,
  width: 25,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
});

function Content(props) {
  return (
    <ContextMenuPrimitive.Portal>
      <StyledContent {...props} />
    </ContextMenuPrimitive.Portal>
  );
}

function SubContent(props) {
  return (
    <ContextMenuPrimitive.Portal>
      <StyledSubContent {...props} />
    </ContextMenuPrimitive.Portal>
  );
}

export const Box = styled("div", {});

export const Instruction = styled("div", {
  border: `2px white dashed`,
  color: "white",
  borderRadius: 4,
  fontSize: 15,
  userSelect: "none",
  padding: "45px 0",
  width: 300,
  textAlign: "center",
});

export const RightSlot = styled("div", {
  marginLeft: "auto",
  paddingLeft: 20,
  color: mauve.mauve11,
  "[data-highlighted] > &": { color: "white" },
  "[data-disabled] &": { color: mauve.mauve8 },
});

export const ContextMenu = ContextMenuPrimitive.Root;
export const ContextMenuTrigger = ContextMenuPrimitive.Trigger;
export const ContextMenuContent = Content;
export const ContextMenuItem = StyledItem;
export const ContextMenuCheckboxItem = StyledCheckboxItem;
export const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;
export const ContextMenuRadioItem = StyledRadioItem;
export const ContextMenuItemIndicator = StyledItemIndicator;
export const ContextMenuLabel = StyledLabel;
export const ContextMenuSeparator = StyledSeparator;
export const ContextMenuSub = ContextMenuPrimitive.Sub;
export const ContextMenuSubTrigger = StyledSubTrigger;
export const ContextMenuSubContent = SubContent;
