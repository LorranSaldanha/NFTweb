import Image from 'next/image'

import styled from 'styled-components'

export const WrapperCollection = styled.section`
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
export const ContentCollection = styled.main`
  width: 100%;
  display: flex;
  /* border: solid red 3px; */

  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6rem;

  @media (min-width: ${(props) => props.theme.screenSize.LG}) {
    /* flex-direction: row; */
  }
`
export const BlockTextCollection = styled.div`
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
        margin: 0 auto;
      }
    }
  }
`
export const ContentFrameCollection = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
`
export const ContentFramesCollection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  -ms-flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 3rem;

  overflow-x: scroll;
  transition: transform 0.2s ease-in-out;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    gap: 2rem;
    place-items: center;
    align-items: center;
    overflow-x: hidden;
  }
`
export const FrameCollection = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 0.94rem;
  scroll-snap-align: start;
  transition: transform 0.5s ease-in-out;
`
