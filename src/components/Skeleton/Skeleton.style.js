import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: grid;
  align-items: center;
  padding: 1.7rem 3.4rem;
  border-bottom: 2px solid #f5f5f5;
  grid-template-columns: repeat(5, 3fr);
`;

const shine = keyframes`
  to {
    background-position-x: -200%;
  }
`;

export const Header = styled.div`
  width: 45%;
  height: 2.3rem;
  border-radius: 0.5rem;
  background-size: 200% 100%;
  animation: ${shine} 2s linear infinite;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
`;

export const Bottom = styled(Header)`
  width: 70%;
  height: 1.7rem;
`;

export const ListItem = styled.div`
  gap: 1.7rem;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;
