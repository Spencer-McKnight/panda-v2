import React from 'react';
import styled from 'styled-components';
import DonateButton from './donate-button';
import Logo from './logo';

const LogoContainer = styled.div`
  margin-bottom: 15px;

  @media (min-width: 768px) {
    margin: 0;
  }
`;

const NavBar = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Header = () => (
  <NavBar data-testid="header" className='navbar navbar-dark bg-dark'>
    <LogoContainer>
      <Logo text={"Panda Rescue ™"} />
    </LogoContainer>
    <DonateButton button={{ link: "https://www.givenow.com.au/", class: "btn btn-info", rel: "noopener noreferrer", target: "_blank" }} text="Donate Now!" />
  </NavBar>
);

export default Header;
