import React from 'react';
import { ReactComponent as Logo } from './../assests/icons/logo.svg';
import styled from 'styled-components';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderBrand>
        <Logo alt="EdenLogo" />
      </HeaderBrand>
      <HeaderText>Eden</HeaderText>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 3rem;
`;

const HeaderBrand = styled.div`
  color: var(--color-primary);
  fill: currentColor;
`;

const HeaderText = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-primary-text);
`;
