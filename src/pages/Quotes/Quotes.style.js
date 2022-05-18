import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  flex: 1;
`;

export const FilterHeader = styled.div`
  width: 100%;
  display: flex;
  padding: 0 3.4rem;
  font-family: Inter;
  font-size: 1.4rem;
  align-items: center;
  border-bottom: 2px solid #e4e6ea;

  .tabs {
    color: #81868c;
  }

  .active-tabs {
    color: #0746a6;
    border-radius: 0.2rem;
    border-bottom: 3px solid #0746a6;
  }
`;

export const FilterButton = styled.button`
  border: none;
  width: 5rem;
  outline: none;
  display: flex;
  cursor: pointer;
  white-space: nowrap;
  align-items: center;
  font-family: 'Inter';
  padding-bottom: 0.8rem;
  background: transparent;
  margin-right: ${({ marginRight }) => (marginRight ? marginRight : 0)}rem;

  .filter {
    &__text {
      text-align: center;
      font-weight: 700;
      color: #737a91;
      padding: 5px;
      width: 2.6rem;
      margin-left: 0.5rem;
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

export const PaginationButton = styled.div`
  width: 6rem;
  max-height: 3.5rem;
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 8px;
  border: 1px solid #eaedf3;
  padding: 1rem 1.5rem;
  p {
    margin-right: 1rem;
  }

  .divider {
    display: flex;
    height: 3rem;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-left: 2px solid #eaedf3;
  }
`;
