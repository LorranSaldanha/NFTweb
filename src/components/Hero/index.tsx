'use client'

import { Button } from 'components/Ui/Button'
import { Headline } from 'components/Ui/Headline'

import {
  BlockFrameHero,
  BlockTextHero,
  ContentButtonsHero,
  ContentFrameHero,
  ContentHero,
  FrameHero,
  RowWave,
  WrapperHero
} from './styles'

import IMG_G01 from 'assets/img/IMG_G01.png'
import IMG_G02 from 'assets/img/IMG_G02.png'
import IMG_G03 from 'assets/img/IMG_G03.png'
import IMG_G04 from 'assets/img/IMG_G04.png'

export const Hero = () => {
  return (
    <WrapperHero>
      <ContentHero>
        <BlockTextHero>
          <Headline
            title='explore, create and sell your nft’s on shihami'
            text='shihami is the World’s first and largest NFT/Avatar marketplace'
          />
          <ContentButtonsHero>
            <Button text='explore more' icon='' />
            <Button text='create' icon='' />
          </ContentButtonsHero>
        </BlockTextHero>
        {/*  */}
        <ContentFrameHero>
          <BlockFrameHero>
            <FrameHero src={IMG_G01} alt='Frame' priority={true} />
            <Headline title='bleeding ghost' text='$ 152,793.17' />
          </BlockFrameHero>
          <BlockFrameHero>
            <FrameHero src={IMG_G02} alt='Frame' priority={true} />
            <Headline title='bleeding ghost' text='$ 152,793.17' />
          </BlockFrameHero>
          <BlockFrameHero>
            <FrameHero src={IMG_G03} alt='Frame' priority={true} />
            <Headline title='bleeding ghost' text='$ 152,793.17' />
          </BlockFrameHero>
        </ContentFrameHero>
      </ContentHero>
      <RowWave src={IMG_G04} alt='Wave' priority={true} />
    </WrapperHero>
  )
}
