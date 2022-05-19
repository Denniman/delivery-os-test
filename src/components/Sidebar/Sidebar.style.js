import styled from 'styled-components';

export const Container = styled.nav`
  width: 22.6rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f9fafc;
  border: 1px solid #e4e6ea;
  justify-content: space-between;

  .link {
    font-weight: 400;
    font-size: 1.4rem;
    font-family: 'Inter';
    &__path {
      gap: 1.6rem;
      display: flex;
      align-items: center;
      padding: 1.2vh 1.663rem;
    }

    &__active {
      width: 90%;
      color: #0746a6;
      background-color: #e9ecf1;
      border-radius: 0 1rem 1rem 0;
    }

    &__unselected {
      color: #78797a;
    }
  }
`;

export const Title = styled.p`
  color: #0746a6;
  font-weight: 700;
  font-size: 1.361rem;
  font-family: Gilroy-Light;
`;

export const LogoWrapper = styled.div`
  gap: 0.476rem;
  display: flex;
  align-items: center;
  padding: 2rem 1.663rem;
`;

export const LinkWrapper = styled.div`
  padding-bottom: 1rem;
`;

export const SecondNavWrapper = styled.div`
  padding-top: 1rem;
  margin-bottom: 1.4rem;
`;

export const Divider = styled.div`
  width: 100%;
  opacity: 0.1;
  border: 1px solid #81868c;
`;

export const BottomWrapper = styled.div`
  display: flex;
  color: #81868c;
  font-size: 1rem;
  padding: 2rem 3rem;
  align-items: center;
  background-color: #f2f4f7;

  .text--wrapper {
    gap: 0.4rem;
    display: flex;
    flex-direction: column;
  }

  .ml {
    margin-left: 1.5rem;
  }

  .bottom--header {
    color: #303030;
    font-weight: 500;
    font-size: 1.2rem;
    font-family: 'Inter';
  }
`;
