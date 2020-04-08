import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import LinkIcon from 'assets/icons/link.svg';


const StyledWrapper = styled.div`
  min-height: 380px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
  margin: 0 0 5px;
  padding: 17px 30px;
  position: relative;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'white')};

  :first-of-type {
    z-index: 9999;
  }

  ${({ flex }) => flex && css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
  `}
`;

const DateInfo = styled(Paragraph)`
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const StyledHeading = styled(Heading)`
  margin: 5px 0 0;
`;

const StyledAvatar = styled.img`
  position: absolute;
  top: 30px;
  right: 25px;
  width: 95px;
  height: 95px;
  border: 5px solid ${({ theme }) => theme.twitter};
  border-radius: 50%;
`;

const StyledLinkButton = styled.a`
  display: block;
  width: 47px;
  height: 47px;
  position: absolute;
  top: 50%;
  right: 25px;
  transform: translateY(-50%);
  border-radius: 50px;
  background: white;
  background-image: url(${LinkIcon});
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 50%;
`;

const Card = ({ cardType, title, created, twitterName, articleUrl, content }) => (
  <StyledWrapper>
    <InnerWrapper activeColor={cardType}>
      <StyledHeading>
        {title}
      </StyledHeading>
      <DateInfo>{created}</DateInfo>
      {cardType === 'twitter' && <StyledAvatar src={`https://avatars.io/twitter/${twitterName}`} />}
      {cardType === 'article' && <StyledLinkButton href={articleUrl} />}
    </InnerWrapper>
    <InnerWrapper flex>
      <Paragraph>
        {content}
      </Paragraph>
      <Button secondary>Remove</Button>
    </InnerWrapper>
  </StyledWrapper>
);

Card.propTypes = {
  cardType: PropTypes.oneOf(['note', 'twitter', 'article']),
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  twitterName: PropTypes.string,
  articleUrl: PropTypes.string,
  content: PropTypes.string.isRequired,
};

Card.defaultProps = {
  cardType: 'note',
  twitterName: null,
  articleUrl: null,
};

export default Card;
