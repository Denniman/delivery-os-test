import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  /* height: 8.86rem; */
  padding: 2rem 0;
`;

export const HeaderNav = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2.5rem;
  padding: 0 2rem;
  justify-content: space-between;
`;

export const Title = styled.p`
  color: #303030;
  font-size: 2.4rem;
  font-family: 'Gilroy';
`;

export const FilterWrapper = styled.div`
  display: flex;
  font-family: Inter;
  font-size: 1.4rem;
  gap: 3rem;
  width: 100%;
  align-items: center;
  border-bottom: 2px solid #e4e6ea;
  padding: 0 2rem;
`;

export const FilterButton = styled.button`
  outline: none;
  border: none;

  .filter {
    &__text {
    }
  }
`;
