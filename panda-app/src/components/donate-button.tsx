import React from 'react';

type Button = {
  link: string,
  class: string,
  rel?: string,
  target?: string,
}

interface Props {
  button: Button,
  text: string,
}

const DonateButton: React.FC<Props> = ({ button, text }) => {
  return (
    <a
      href={button.link}
      className={button.class}
      rel={button.rel}
      target={button.target}
    >
      {text}
    </a>
  )
};

export default DonateButton