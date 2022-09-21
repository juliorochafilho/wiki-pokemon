import { styled } from "../../stitches.config";
import * as ToggleGroup from "@radix-ui/react-toggle-group";

// interface IOptions {
//     label?: String;
//     onClick?: VoidFunction;
//     active: Boolean

// }

export default function Toogle({ options, value, onValueChange }) {
  console.log("component", { options, value, onValueChange });
  return (
    <ToggleGroup.Root
      type="single"
      value={value}
      onValueChange={(newValue) => {
        onValueChange(newValue);
      }}
      orientation="horizontal"
    >
      {options.map((option) => (
        <ToggleGroup.Item value={option.value}>
          {option.children}
        </ToggleGroup.Item>
      ))}
    </ToggleGroup.Root>
  );
}
