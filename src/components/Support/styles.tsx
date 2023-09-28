import Image from 'next/image'

import styled from 'styled-components'

export const WrapperSupport = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  gap: 2rem;

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    padding: 6rem;
  }
`
export const ContentSupport = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6rem;
  /* border: solid red 3px; */
`
export const BlockTextSupport = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  -ms-flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;

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
    }
  }
`
export const ContentCardsSupport = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  gap: 3rem;
  place-items: center;
  align-items: center;

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: ${(props) => props.theme.screenSize.LG}) {
    grid-template-columns: repeat(5, 1fr);
  }
`
export const CardSupport = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  place-items: center;
  flex-shrink: 0;
  gap: 2rem;

  border-radius: 0.9375rem;
  background: linear-gradient(
    148deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  backdrop-filter: blur(1rem);
  padding: 1rem;

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
`
export const FrameCardSupport = styled(Image)`
  width: 100%;
  max-width: 10rem;
  height: auto;
  margin: 0 auto;
  border-radius: 100%;
  border: solid 2rem ${(props) => props.theme.colors.RoxoClaro};
`
export const ContentWorks = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  gap: 3rem;
`
export const ContentWorksSteps = styled.div`
  width: 100% auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  gap: 3rem;
  place-items: center;
  align-items: start;

  @media (min-width: ${(props) => props.theme.screenSize.MD}) {
    grid-template-columns: repeat(4, 1fr);
  }
`
export const WorksSteps = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  gap: 2rem;

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
`
export const WorksStepsHead = styled.div`
  width: auto;
  display: grid;
  place-items: center;
  position: relative;

  border-radius: 100%;
  border: solid 0.2rem ${(props) => props.theme.colors.RosaClaro};

  background: linear-gradient(
    148deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  backdrop-filter: blur(1rem);
  padding: 2.3rem;
`
export const FrameWorksSteps = styled(Image)`
  width: 3rem;
  height: 3rem;
  object-fit: contain;
`
