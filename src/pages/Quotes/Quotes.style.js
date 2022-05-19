import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
`;

export const FilterHeader = styled.div`
  width: 100%;
  display: flex;
  gap: 3.2rem;
  padding: 0 3.4rem;
  font-family: Inter;
  font-size: 1.4rem;
  align-items: center;
  border-bottom: 2px solid #e4e6ea;
`;

export const FilterButton = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  font-family: 'Inter';
  padding-bottom: 0.8rem;
  border-bottom-left-radius: 2.5px;
  border-bottom-right-radius: 2.5px;
  color: ${({ isActive }) => (isActive ? '#0746a6' : '#81868c')};
  border-bottom: ${({ isActive }) => (isActive ? '3px solid #0746a6' : null)};

  .filter {
    &__count {
      color: #737a91;
      display: flex;
      width: 2.7rem;
      height: 2.1rem;
      font-weight: 700;
      align-items: center;
      margin-left: 0.5rem;
      justify-content: center;
      border-radius: 0.8rem;
      background: rgba(233, 236, 241, 0.6);
    }
  }
`;

export const QuotesContent = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 3.2rem;
`;

export const PaginationWrapper = styled.div`
  gap: 1.5rem;
  display: flex;
  margin: 2rem 0;
  color: #81868c;
  font-family: Inter;
  font-weight: 400;
  align-items: center;
  font-size: 1.2rem;
  padding: 1.5rem 2rem;
  align-items: center;
  justify-content: flex-end;
  span {
    font-weight: 700;
  }
`;

export const PaginationNumberWrapper = styled.div`
  display: flex;
  gap: 2.45rem;
  align-items: center;
`;

export const PaginationInput = styled.input.attrs({
  type: 'number',
})`
  width: 6rem;
  max-height: 3.5rem;
  border-radius: 8px;
  padding: 1rem 1.5rem;
  border: 1px solid #eaedf3;
`;
