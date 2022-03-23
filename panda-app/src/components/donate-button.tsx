import React, { MouseEventHandler } from "react";
import styled from "styled-components";

type Button = {
  link: string;
  class: string;
  rel?: string;
  target?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export type Props = {
  button: Button;
  text: string;
  space: "6px" | "12px" | "18px";
  color: string;
  border: string;
};

const DonateButton: React.FC<Props> = ({ button, text, space, color, border }) => {
  return (
    <a
      href={button.disabled ? "/#" : button.link}
      className={button.class}
      rel={button.rel}
      target={button.disabled ? undefined : button.target}
      style={{ backgroundColor: button.disabled ? "#808080" : color, padding: space, borderColor: border }}
      onClick={button.onClick}
    >
      {text}
    </a>
  );
};

export default DonateButton;
