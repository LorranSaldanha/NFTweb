import Image from 'next/image'

import styled from 'styled-components'

export const WrapperTrending = styled.section`
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
export const ContentTrending = styled.main`
  width: 100%;
  display: flex;
  /* border: solid red 3px; */

  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6rem;

  /* @media (min-width: ${(props) => props.theme.screenSize.LG}) {
  } */
`
export const BlockTextTrending = styled.div`
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
        font-size: 2.5rem;
        font-style: normal;
        font-weight: 600;
        line-height: 3.75rem;
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
        place-items: start;
      }
    }
  }

  button {
    width: auto;
    margin: 0 1rem;

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

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    flex-direction: row;
    -ms-flex-direction: row;
    justify-content: space-between;
    align-items: end;
  }
`
export const WrapperCardsTrending = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  -ms-flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 2.5rem;
  padding: 0 3rem;

  overflow-x: scroll;
  transition: transform 0.2s ease-in-out;
  scroll-snap-type: both mandatory;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  @media (min-width: ${(props) => props.theme.screenSize.LG}) {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 2rem;
    place-items: center;
    align-items: center;
    overflow-x: hidden;
    padding: 3rem;
  }
`
export const ContentCardTrending = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  scroll-snap-align: none;
  gap: 2rem;
  padding: 1.6rem;
  flex: 1;

  border-radius: 0.9375rem;
  background: linear-gradient(
    148deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  backdrop-filter: blur(1rem);

  button {
    width: 100%;
    max-width: 95%;
    margin: 0 auto;
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
`
export const MainBlockCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  -ms-flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;

  div {
    gap: 0.3rem;
    place-items: start;

    h1 {
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 600;
      line-height: 2.4rem;
      color: ${(props) => props.theme.colors.Branco};
      text-align: center;
      white-space: nowrap;

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
`
export const ProfileCard = styled(Image)`
  width: 6rem;
  height: 6rem;
  object-fit: contain;
  border-radius: 100%;
  padding: 0.3rem;
  border: solid 0.2rem ${(props) => props.theme.colors.RoxoClaro};
`
export const ContentSale = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  -ms-flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
`
export const BlockSale = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  -ms-flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;

  p {
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.4rem;
    color: ${(props) => props.theme.colors.Branco};
    text-align: center;
    white-space: nowrap;

    &::first-letter {
      text-transform: capitalize;
    }
  }

  svg {
    font-size: 1.6rem;
    color: ${(props) => props.theme.colors.Laranja};
  }
`
export const BlockPrice = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  -ms-flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;

  div {
    gap: 0.5rem;
    place-items: start;

    h1 {
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 600;
      line-height: 2.4rem;
      color: ${(props) => props.theme.colors.Branco};
      text-align: center;
      white-space: nowrap;

      &::first-letter {
        text-transform: capitalize;
      }
    }
    p {
      display: none; //OBS!
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 500;
      line-height: 2.4rem;
      color: ${(props) => props.theme.colors.Branco};
      text-align: center;
      white-space: nowrap;

      &::first-letter {
        text-transform: capitalize;
      }
    }
  }

  svg {
    font-size: 1.6rem;
    /* margin: 0 0.5rem; */
    color: ${(props) => props.theme.colors.Branco};
  }
`
export const FrameCardTrending = styled(Image)`
  width: 100%;
  height: auto;
  border-radius: 0.9375rem;
  object-fit: cover;

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    height: 20rem;
  }
`
export const ContentStayUpTo = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  gap: 2rem;
  padding: 6rem 0;

  div {
    h1 {
      font-size: 2.5rem;
      font-style: normal;
      font-weight: 600;
      line-height: 3.75rem;
      color: ${(props) => props.theme.colors.Branco};
      text-align: center;

      &::first-letter {
        text-transform: capitalize;
      }
    }

    p {
      display: none;
    }

    @media (min-width: ${(props) => props.theme.screenSize.MD}) {
      max-width: 38rem;
    }
  }
`
export const BlockStayUpTo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  -ms-flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
  border-radius: 0.9375rem;
  border: solid 0.02rem ${(props) => props.theme.colors.Branco};

  button {
    background: transparent;
    display: grid;
    place-items: center;

    svg {
      font-size: 2rem;
      margin-right: 1rem;
      color: ${(props) => props.theme.colors.Branco};
    }
  }
`
export const InputField = styled.input`
  width: 100%;
  padding: 1rem;
  background: transparent;
  border-radius: 0.9375rem;

  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.4rem;
  color: ${(props) => props.theme.colors.Branco};
  text-align: left;
  outline: none;
`
