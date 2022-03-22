import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 100%;
`;

export type Props = {
  imgSrc: string,
  altText: string,
}

const Hero: React.FC<Props> = ({ imgSrc, altText }) => (
  <div>
    <Image src={imgSrc} alt={altText} />
  </div>
);

export default Hero;
