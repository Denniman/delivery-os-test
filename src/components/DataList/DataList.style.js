import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1.7rem 3.4rem;
  border-bottom: 2px solid #f5f5f5;
`;

export const ShipHeader = styled.p`
  color: #0747a6;
  font-weight: 600;
  font-size: 1.6rem;
  font-family: 'Gilroy';
`;

export const HeadingPrimary = styled(ShipHeader)`
  color: #303030;
`;

export const Amount = styled.p`
  color: #303030;
  font-family: Inter;
  font-size: 1.6rem;
  font-weight: 600;
`;

export const HeadingSecondary = styled.p`
  color: #81868c;
  font-size: 1.4rem;
  font-family: Inter;
  font-weight: 400;
`;

export const ShirtText = styled(HeadingSecondary)`
  color: #333333;
  position: relative;
  margin-left: 2.4rem;
  font-weight: 400;

  &::before {
    content: '';
    top: 40%;
    left: -10px;
    border-radius: 50%;
    position: absolute;
    width: 0.5rem;
    aspect-ratio: 1;
    background-color: #303030;
  }
`;

export const ListItem = styled.div`
  display: flex;
  gap: 1.7rem;
  align-items: flex-start;
  flex-direction: column;
  margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : 0)}rem;

  .list--item {
    &__container {
      display: flex;
      align-items: center;
    }
  }
`;

export const ImportWrapper = styled.div`
  display: flex;
  width: 7rem;
  font-size: 1rem;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  padding: 0.4rem 1.5rem;
  border-radius: 1.5rem;
  border: 2px solid #e5e5e5;
  font-family: 'Gilroy-Light';
`;

export const StatusText = styled.p`
  font-size: 1.4rem;
  font-family: 'Gilroy';
  font-weight: 700;

  color: ${({ status }) => {
    switch (status) {
      case 'Pending':
        return '#F7C244';
      case 'Ready':
        return '#5CC685';

      default:
        return '#81868C';
    }
  }};
`;
