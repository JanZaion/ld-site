'use client';

import styled from 'styled-components';

const StyledDiv = styled.div`
  color: ${({ theme }) => theme.colors.button};
  font-size: 50px;
`;

const Home = () => {
  return (
    <>
      <StyledDiv>add stuff</StyledDiv>
      <p>this text should be blu</p>
      <p>and it appears that it is!</p>
    </>
  );
};

export default Home;
