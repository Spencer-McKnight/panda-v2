import { storiesOf } from "@storybook/react";
import DonateButton from "../components/donate-button";
import { boolean, radios, text, color } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

storiesOf("Button", module).add("Donate Button", () => (
  <DonateButton
    button={{
      link: text("Link", "https://www.google.com/"),
      class: text("Class", "btn btn-info"),
      disabled: boolean("Disabled", false),
      rel: radios(
        "Rel",
        { noOpen: "noopener", noRef: "noreferrer", both: "noopener noreferrer", none: "" },
        "noopener noreferrer"
      ),
      target: radios("Opens in New Page", { newPage: "_blank", samePage: "" }, "_blank"),
      onClick: action("Donate button pressed"),
    }}
    border={color("Border Color", "#34b4eb")}
    color={color("Button Color", "#3477eb")}
    space={radios("Padding", { small: "6px", med: "12px", large: "18px" }, "6px")}
    text={text("Text Content", "Test Button")}
  />
));
