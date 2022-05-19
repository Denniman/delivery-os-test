import styled from 'styled-components';

export const Container = styled.div`
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
  font-family: Gilroy-ExtraBold;
`;

export const HeadingPrimary = styled(ShipHeader)`
  color: #303030;
`;

export const HeadingSecondary = styled.p`
  color: #81868c;
  font-weight: 400;
  font-size: 1.4rem;
  font-family: 'Inter';
`;

export const Amount = styled(HeadingSecondary)`
  color: #303030;
  font-weight: 600;
  font-size: 1.6rem;
`;

export const ShirtText = styled(HeadingSecondary)`
  color: #333333;
  font-weight: 400;
  position: relative;
  margin-left: 2.4rem;

  &::before {
    content: '';
    top: 40%;
    left: -10px;
    width: 0.5rem;
    aspect-ratio: 1;
    border-radius: 50%;
    position: absolute;
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
  color: #81868c;
  font-size: 1rem;
  font-weight: 500;
  align-items: center;
  padding: 0.4rem 1.5rem;
  border-radius: 1.5rem;
  justify-content: center;
  font-family: 'Gilroy-Light';
  border: 1.7px solid #e5e5e5;
`;

export const StatusText = styled(ShipHeader)`
  font-size: 1.4rem;

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
