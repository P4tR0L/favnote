import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import logoIcon from 'assets/icons/logo.svg';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import twitterIcon from 'assets/icons/twitter.svg';

const StyledWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  padding: 25px 0;
  height: 100vh;
  width: 150px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : theme.note)};
`;

const StyledButtonsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const StyledLogo = styled(NavLink)`
  display: block;
  width: 67px;
  height: 67px;
  margin-bottom: 10vh;
  background-image: url(${logoIcon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 100%;
  border: none;
`;

const StyledLogout = styled(ButtonIcon)`
  margin-top: auto;
`;

const Sidebar = ({ pageType }) => (
  <StyledWrapper activeColor={pageType}>
    <StyledLogo as={NavLink} to="/" />
    <StyledButtonsList>
      <ButtonIcon as={NavLink} to="/notes" icon={penIcon} activeclass="active" />
      <ButtonIcon as={NavLink} to="/twitters" icon={twitterIcon} activeclass="active" />
      <ButtonIcon as={NavLink} to="/articles" icon={bulbIcon} activeclass="active" />
    </StyledButtonsList>
    <StyledLogout as={NavLink} to="/login" icon={logoutIcon} />
  </StyledWrapper>
);

export default Sidebar;
