import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserInterfaceTemplate from 'templates/UserInterfaceTemplate';

const DetailsTemplate = () => (
  <UserInterfaceTemplate>
    <h1>Note</h1>
    <p>
      lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum
      dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum
      dolor lorem ipsum dolor lorem ipsum dolor.
    </p>
    <Link to="/">go back</Link>
  </UserInterfaceTemplate>
);

export default DetailsTemplate;
