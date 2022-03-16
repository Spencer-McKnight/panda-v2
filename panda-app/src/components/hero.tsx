import React from 'react';
import styled from 'styled-components';
import heroImage from '../images/hero.jpg';

const Image = styled.img`
  width: 100%;
`;

type Props = {
  altText: string,
}

const Hero: React.FC<Props> = ({ altText }) => (
  <div>
    <Image src={heroImage} alt={altText} />
  </div>
);

export default Hero;
