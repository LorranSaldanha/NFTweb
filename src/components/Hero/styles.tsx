import Image from 'next/image'

import styled from 'styled-components'

export const WrapperHero = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  gap: 3rem;
  position: relative;
  /* border: solid red 3px; */

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    padding: 6rem;
  }
`
export const ContentHero = styled.main`
  width: 100%;
  display: flex;
  /* border: solid red 3px; */

  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6rem;

  @media (min-width: ${(props) => props.theme.screenSize.LG}) {
    flex-direction: row;
  }
`
export const BlockTextHero = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  /* border: solid red 3px; */

  &:first-child {
    div {
      h1 {
        font-size: 4rem;
        font-style: normal;
        font-weight: 600;
        line-height: 4.75rem;
        color: ${(props) => props.theme.colors.Branco};
        text-align: center;

        &::first-letter {
          text-transform: capitalize;
        }
      }

      p {
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 500;
        line-height: 2.4rem;
        color: ${(props) => props.theme.colors.Branco};
        text-align: center;

        &::first-letter {
          text-transform: capitalize;
        }
      }

      @media (min-width: ${(props) => props.theme.screenSize.MD}) {
        max-width: 60rem;
        margin: 0 auto;
      }
    }
  }

  @media (min-width: ${(props) => props.theme.screenSize.LG}) {
    &:first-child {
      justify-content: flex-start;
      align-items: flex-start;

      div:nth-child(1) {
        max-width: 40rem;
        place-items: start;

        h1,
        p {
          text-align: left;
        }
      }
    }
  }
`
export const ContentButtonsHero = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  button {
    p {
      font-size: 1.6rem;
      font-weight: 600;
      line-height: 2.4rem;
      color: ${(props) => props.theme.colors.Branco};
    }

    padding: 0.875rem 2rem;
    border-radius: 0.25rem;
    background: transparent;
    border: solid 0.2rem ${(props) => props.theme.colors.RosaClaro};
    position: relative;
    /* margin: 0 1rem; */

    &::first-letter {
      text-transform: capitalize;
    }

    transition: ease-in 0.03s;
    -webkit-transition: ease-in 0.03s;
    -moz-transition: ease-in 0.03s;
    -o-transition: ease-in 0.03s;

    &:active {
      transform: translateY(0.2rem);
      -webkit-transform: translateY(0.2rem);
      -moz-transform: translateY(0.2rem);
      -o-transform: translateY(0.2rem);
    }

    &:nth-child(1) {
      background: ${(props) => props.theme.colors.RosaClaro};
    }

    &::before,
    &::after {
      content: '';
      width: 1rem;
      height: 2.3rem;
      background: ${(props) => props.theme.colors.RosaClaro};
      border: solid 0.2rem ${(props) => props.theme.colors.RoxoClaro};

      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }

    &::before {
      left: -1rem;
    }

    &::after {
      right: -1rem;
    }
  }

  @media (min-width: ${(props) => props.theme.screenSize.LG}) {
    justify-content: flex-start;
    flex-direction: row;
    -ms-flex-direction: row;
    padding-left: 1rem;
  }
`
export const ContentFrameHero = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  -ms-flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2.5rem;
  padding: 0 3rem;

  /* border: solid white 3px; */

  overflow-x: scroll;
  transition: transform 0.2s ease-in-out;
  scroll-snap-type: both mandatory;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    width: 0;
  }

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    overflow: hidden;
    justify-content: center;
  }

  @media (min-width: ${(props) => props.theme.screenSize.LG}) {
    width: 100%;
    height: 36rem;
    position: relative;
  }
`
export const BlockFrameHero = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  padding: 1rem;
  scroll-snap-align: none;

  border-radius: 2.60419rem;
  border-top: 2.5px solid rgba(255, 255, 255, 0.4);
  border-bottom: 2.5px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 0.8rem 1.5rem 0 rgba(130, 130, 130, 0.159);

  background: linear-gradient(
    161deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 101.7%
  );
  backdrop-filter: blur(1.7rem);

  &:nth-child(-n + 3) {
    div {
      gap: 1rem;

      h1 {
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 600;
        line-height: 2.4rem;
        color: ${(props) => props.theme.colors.Branco};
        text-align: center;

        &::first-letter {
          text-transform: capitalize;
        }
      }

      p {
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 500;
        line-height: 2.4rem;
        color: ${(props) => props.theme.colors.Branco};
        text-align: center;

        &::first-letter {
          text-transform: capitalize;
        }
      }
    }
  }

  @media (min-width: ${(props) => props.theme.screenSize.LG}) {
    position: absolute;

    &:nth-child(1) {
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 5;
    }

    &:nth-child(2) {
      top: 50%;
      left: 25%;
      transform: translate(-50%, -50%);

      &:hover {
        z-index: 6;
      }
    }

    &:nth-child(3) {
      top: 50%;
      left: 75%;
      transform: translate(-50%, -50%);

      &:hover {
        z-index: 6;
      }
    }
  }
`
export const FrameHero = styled(Image)`
  width: 16rem;
  height: 16rem;
  object-fit: contain;

  /* @media (min-width: ${(props) => props.theme.screenSize.LG}) {
    width: 14rem;
    height: 14rem;
  } */
`
export const RowWave = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: contain;

  @media (min-width: ${(props) => props.theme.screenSize.LG}) {
    margin: -5rem 0;
  }
`
