'use client'

import { Headline } from 'components/Ui/Headline'
import DisplayText from 'components/Ui/Text'

import {
  BlockTextSupport,
  CardSupport,
  ContentCardsSupport,
  ContentSupport,
  ContentWorks,
  ContentWorksSteps,
  FrameCardSupport,
  FrameWorksSteps,
  WorksSteps,
  WorksStepsHead,
  WrapperSupport
} from './styles'

import SVG_G01 from 'assets/svg/SVG_G01.svg'
import SVG_G02 from 'assets/svg/SVG_G02.svg'
import SVG_G03 from 'assets/svg/SVG_G03.svg'
import SVG_G04 from 'assets/svg/SVG_G04.svg'
import SVG_G05 from 'assets/svg/SVG_G05.svg'
import SVG_G06 from 'assets/svg/SVG_G06.svg'
import SVG_G07 from 'assets/svg/SVG_G07.svg'
import SVG_G08 from 'assets/svg/SVG_G08.svg'
import SVG_G09 from 'assets/svg/SVG_G09.svg'

export const Support = () => {
  return (
    <WrapperSupport>
      <ContentSupport>
        <BlockTextSupport>
          <Headline
            title='wallets we support'
            text='trade with world’s most trusted and fastest wallets'
          />
        </BlockTextSupport>
        <ContentCardsSupport>
          <CardSupport>
            <FrameCardSupport src={SVG_G01} alt='Suport' priority={true} />
            <DisplayText text='metamask' />
          </CardSupport>
          <CardSupport>
            <FrameCardSupport src={SVG_G02} alt='Suport' priority={true} />
            <DisplayText text='binance' />
          </CardSupport>
          <CardSupport>
            <FrameCardSupport src={SVG_G03} alt='Suport' priority={true} />
            <DisplayText text='trust wallet' />
          </CardSupport>
          <CardSupport>
            <FrameCardSupport src={SVG_G04} alt='Suport' priority={true} />
            <DisplayText text='alpha' />
          </CardSupport>
          <CardSupport>
            <FrameCardSupport src={SVG_G05} alt='Suport' priority={true} />
            <DisplayText text='coinGecko' />
          </CardSupport>
        </ContentCardsSupport>
        <ContentWorks>
          <BlockTextSupport>
            <Headline title='how it works' text='' />
          </BlockTextSupport>
          <ContentWorksSteps>
            <WorksSteps>
              <WorksStepsHead>
                <FrameWorksSteps src={SVG_G06} alt='Suport' priority={true} />
              </WorksStepsHead>
              <DisplayText text='set up your wallet' />
            </WorksSteps>
            <WorksSteps>
              <WorksStepsHead>
                <FrameWorksSteps src={SVG_G07} alt='Suport' priority={true} />
              </WorksStepsHead>
              <DisplayText text='create collection' />
            </WorksSteps>
            <WorksSteps>
              <WorksStepsHead>
                <FrameWorksSteps src={SVG_G08} alt='Suport' priority={true} />
              </WorksStepsHead>
              <DisplayText text='add your NFTs' />
            </WorksSteps>
            <WorksSteps>
              <WorksStepsHead>
                <FrameWorksSteps src={SVG_G09} alt='Suport' priority={true} />
              </WorksStepsHead>
              <DisplayText text='list them for sale' />
            </WorksSteps>
          </ContentWorksSteps>
        </ContentWorks>
      </ContentSupport>
    </WrapperSupport>
  )
}
