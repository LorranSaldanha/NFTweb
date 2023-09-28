import Image from 'next/image'

import styled from 'styled-components'

export const WrapperFooter = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6rem;
  padding: 3rem;
  border-top: solid ${(props) => props.theme.colors.Claro} 0.02rem;

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    padding: 6rem;
  }
`
export const ContentFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    justify-content: flex-start;
    align-items: flex-start;
    place-items: start;
  }
`
export const BlockFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  /* border: solid red 2px; */

  &:nth-child(-n + 4) {
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
      color: ${(props) => props.theme.colors.Claro};
      text-align: center;

      text-transform: capitalize;
      &::first-letter {
      }
    }
  }
`
export const SocialFields = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  -ms-flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  button {
    display: flex;
    flex-direction: row;
    -ms-flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    padding: 0.875rem;
    border-radius: 100%;
    background: ${(props) => props.theme.colors.Claro};

    h1,
    p {
      display: none;
    }

    svg {
      font-size: 2rem;
      color: ${(props) => props.theme.colors.Branco};
    }
  }
`
export const LogoFooter = styled(Image)`
  width: 16rem;
  height: auto;
  object-fit: contain;
`
