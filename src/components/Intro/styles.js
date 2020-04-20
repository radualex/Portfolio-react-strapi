import styled from 'styled-components';

export const Wrapper = styled.section`
  margin-bottom: 4rem;
  background: #151617;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;

  @media screen and (max-width: 680px){
    background-image: none;
    background: #151617;
  }
`;

export const IntroWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  flex: 1;
  max-width: 960px;
  margin: 0 auto;
  text-align: center;
  height: 520px;
  display:flex;
  align-content: center;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 36pt;

    @media screen and (max-width: 680px) {
      font-size: 30pt;
    }
  }

  h4 {
    margin-bottom: 2.5rem;
    font-size: 32pt;
    font-weight: normal;
    line-height: 3rem;

    @media screen and (max-width: 680px) {
      font-size: 26pt;
    }
  }
`;

export const WrapperCenter = styled.div`
  margin: auto;
`;

export const Thumbnail = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
  }

  img {
    width: 100%;
  }
`;
