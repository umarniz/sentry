import React from 'react';
import styled from '@emotion/styled';

import AppComponentCard from 'app/components/card';
import space from 'app/styles/space';
// import theme from 'app/utils/theme';

import CardAddNew from './cardAddNew';

type Prop = {
  column: 1 | 2 | 3; // Size of the card
  content?: React.ReactNode;
};

class Card extends React.Component<Prop> {
  render() {
    return <CardWrapper {...this.props}>{this.props.children || 'asd1'}</CardWrapper>;
  }
}

export default Card;
export const Grid = props => {
  return (
    <Container>
      <Card column={1} />
      <Card column={1} />
      <Card column={1} />
      <Card column={2} />
      <Card column={1} />
      <Card column={3} />
      <Card column={1} />
      <Card column={2} />
      {props.children}
      <CardAddNew />
    </Container>
  );
};

const Container = styled('div')`
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 1fr));
  grid-gap: ${space(3)};
`;

const CardWrapper = styled(AppComponentCard)`
  /* display: block;
  border: ${p => p.theme.borderRadius};
  border-radius: ${p => p.theme.borderRadius}; */
`;
