import React from 'react';
import styled from 'styled-components';

import Table from './table'

const Divider = styled.hr`
  border-top: '2px solid #EBEBEB';
  margin: '20px 0';
`;

const Wrapper = styled.div`
  background: '#F4F4F4';
  padding: '50px';
`;

type Props = {
  loading: false,
  data: DonationEntry[]
} | {
  loading: false,
  error: string
}

const Content: React.FC<Props> = (props) => {
  return (
    <>
      <Wrapper>
        <h1>There are only 1,800 Giant Pandas remaining in the wild</h1>
        <p className="lead">
          Help us to save this beautiful animal by donating now.
        </p>
        <Table {...props} />
        <Divider />
      </Wrapper>
    </>
  )
};

export default Content;
