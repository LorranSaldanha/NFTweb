import Image from 'next/image'
import Link from 'next/link'

import styled from 'styled-components'

import { Sidebar } from './types'

export const WrapperHeader = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  -ms-flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1.6rem;
  /* border: solid red 2px; */
`
export const ContentHeader = styled.main`
  width: 100%;
  display: flex;
  flex-direction: row;
  -ms-flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1.6rem;
`
export const LogoBranding = styled(Image)`
  width: 150px;
  height: auto;
  display: inline-block;
  object-fit: contain;
`
export const ControlSidebar = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;

  svg {
    font-size: 2.9rem;
    color: ${(props) => props.theme.colors.RosaClaro};
  }

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    display: none;
  }
`
export const ContentLinks = styled.div<Sidebar>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: ${(props) => props.theme.colors.Verde};
  padding: 1.6rem;
  gap: 3rem;

  background: rgba(30, 30, 30, 0.948);
  backdrop-filter: blur(0.3rem);
  -webkit-backdrop-filter: blur(0.3rem);

  position: fixed;
  left: ${({ open }) => (open ? '0' : '-100%')};
  top: 0;
  transition: left 0.3s ease-in-out;
  -webkit-transition: left 0.3s ease-in-out;
  -moz-transition: left 0.3s ease-in-out;
  -o-transition: left 0.3s ease-in-out;
  z-index: 1;

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    position: static;
    flex-direction: row;
    -ms-flex-direction: row;
    align-items: center;
    background: none;
    min-height: auto;
    padding: 0;
    gap: 1.6rem;
  }
`
export const BlockLinks = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.6rem;

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    flex-direction: row;
    -ms-flex-direction: row;
    align-items: center;
  }
`
export const DisplayLink = styled(Link)`
  font-size: 1.6rem;
  font-weight: 500;
  font-style: normal;
  line-height: 2.4rem;
  text-transform: capitalize;
  text-decoration: none;
  cursor: pointer;
  color: ${(props) => props.theme.colors.Branco};

  &:nth-child(6) {
    text-transform: uppercase;
  }

  transition: ease-in 0.03s;
  &:active {
    transform: translateY(0.2rem);
  }

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    color: ${(props) => props.theme.colors.Preto};
  }
`
export const ContentButtons = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;

  button {
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 2.1rem;
    text-decoration: none;
    padding: 1rem 1.25rem;
    border-radius: 0.55rem;

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

    background: ${(props) => props.theme.colors.RosaClaro};
    color: ${(props) => props.theme.colors.Branco};

    svg {
      display: none;
    }
  }

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    flex-direction: row;
    -ms-flex-direction: row;

    button {
      display: grid;
      place-items: center;
      padding: 0.8rem;
      border-radius: 100%;

      p {
        display: none;
      }

      svg {
        display: block;
        font-size: 2.8rem;
      }
    }
  }
  @media (min-width: ${(props) => props.theme.screenSize.LG}) {
    button {
      white-space: nowrap;
      border-radius: 0.55rem;

      p {
        display: block;

        &::first-letter {
          text-transform: capitalize;
        }
      }

      svg {
        display: none;
      }
    }
  }
`
export const FrameProfile = styled(Image)`
  width: 4.4rem;
  height: auto;
  object-fit: contain;
  border-radius: 100%;
  padding: 0.1rem;
  border: solid 0.2rem ${(props) => props.theme.colors.RosaClaro};
`
