import React from 'react';
import styled from 'styled-components';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import plusIcon from 'assets/icons/plus.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import ButtonIcon from './ButtonIcon';

export default {
  component: ButtonIcon,
  title: 'Atoms/ButtonIcon',
  decorators: [withKnobs, (story) => <YellowBackground>{story()}</YellowBackground>],
};

const YellowBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background-color: ${({ theme }) => theme.note};
`;

export const Bulb = () => {
  const label = 'Active';
  const defaultValue = false;
  const groupId = 'GROUP-ID1';

  const value = boolean(label, defaultValue, groupId);
  return <ButtonIcon active={value} icon={bulbIcon} />;
};
export const Logout = () => {
  const label = 'Active';
  const defaultValue = false;
  const groupId = 'GROUP-ID1';

  const value = boolean(label, defaultValue, groupId);
  return <ButtonIcon active={value} icon={logoutIcon} />;
};
export const Pen = () => {
  const label = 'Active';
  const defaultValue = false;
  const groupId = 'GROUP-ID1';

  const value = boolean(label, defaultValue, groupId);
  return <ButtonIcon active={value} icon={penIcon} />;
};
export const Plus = () => {
  const label = 'Active';
  const defaultValue = false;
  const groupId = 'GROUP-ID1';

  const value = boolean(label, defaultValue, groupId);
  return <ButtonIcon active={value} icon={plusIcon} />;
};
export const Twitter = () => {
  const label = 'Active';
  const defaultValue = false;
  const groupId = 'GROUP-ID1';

  const value = boolean(label, defaultValue, groupId);
  return <ButtonIcon active={value} icon={twitterIcon} />;
};
