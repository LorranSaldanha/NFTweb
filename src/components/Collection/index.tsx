'use client'

import { Headline } from 'components/Ui/Headline'

import {
  BlockTextCollection,
  ContentCollection,
  ContentFrameCollection,
  ContentFramesCollection,
  FrameCollection,
  WrapperCollection
} from './styles'

import IMG_G05 from 'assets/img/IMG_G05.png'
import IMG_G06 from 'assets/img/IMG_G06.png'
import IMG_G07 from 'assets/img/IMG_G07.png'

export const Collection = () => {
  return (
    <WrapperCollection>
      <ContentCollection>
        <BlockTextCollection>
          <Headline
            title='our collection'
            text='explore our newly released NFT collection '
          />
        </BlockTextCollection>
        <ContentFrameCollection>
          <ContentFramesCollection>
            <FrameCollection src={IMG_G05} alt='collection' priority={true} />
            <FrameCollection src={IMG_G06} alt='collection' priority={true} />
            <FrameCollection src={IMG_G07} alt='collection' priority={true} />
            <FrameCollection src={IMG_G05} alt='collection' priority={true} />
            <FrameCollection src={IMG_G06} alt='collection' priority={true} />
            <FrameCollection src={IMG_G07} alt='collection' priority={true} />
            <FrameCollection src={IMG_G05} alt='collection' priority={true} />
            <FrameCollection src={IMG_G06} alt='collection' priority={true} />
          </ContentFramesCollection>
        </ContentFrameCollection>
      </ContentCollection>
    </WrapperCollection>
  )
}
