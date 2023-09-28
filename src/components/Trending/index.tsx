'use client'

import { AiFillFire } from 'react-icons/ai'
import { BsFillSendFill } from 'react-icons/bs'
import { FaEthereum } from 'react-icons/fa'

import { Button } from 'components/Ui/Button'
import { Headline } from 'components/Ui/Headline'
import DisplayText from 'components/Ui/Text'

import {
  BlockPrice,
  BlockSale,
  BlockStayUpTo,
  BlockTextTrending,
  ContentCardTrending,
  ContentSale,
  ContentStayUpTo,
  ContentTrending,
  FrameCardTrending,
  InputField,
  MainBlockCard,
  ProfileCard,
  WrapperCardsTrending,
  WrapperTrending
} from './styles'

import IMG_G05 from 'assets/img/IMG_G05.png'
import IMG_G06 from 'assets/img/IMG_G06.png'
import IMG_G07 from 'assets/img/IMG_G07.png'

export const Trending = () => {
  return (
    <WrapperTrending>
      <ContentTrending>
        <BlockTextTrending>
          <Headline
            title='hot trending nFTs '
            text='most loved NFTs of the time'
          />
          <Button text='view all' icon='' />
        </BlockTextTrending>
        <WrapperCardsTrending>
          {/* Card */}
          <ContentCardTrending>
            <FrameCardTrending src={IMG_G05} alt='Trending' priority={true} />
            <MainBlockCard>
              <ProfileCard src={IMG_G07} alt='Trending' priority={true} />
              <Headline title='monkey ape ' text='By @JSmith' />
            </MainBlockCard>
            <ContentSale>
              <BlockSale>
                <DisplayText text='on sale' />
                <AiFillFire />
              </BlockSale>
              <BlockPrice>
                <FaEthereum />
                <Headline title='4.89 ETH' text='($ 654,874.86)' />
              </BlockPrice>
            </ContentSale>
            <Button text='buy now' icon='' />
          </ContentCardTrending>
          {/* Card */}
          {/* Card */}
          <ContentCardTrending>
            <FrameCardTrending src={IMG_G06} alt='Trending' priority={true} />
            <MainBlockCard>
              <ProfileCard src={IMG_G07} alt='Trending' priority={true} />
              <Headline title='monkey ape ' text='By @JSmith' />
            </MainBlockCard>
            <ContentSale>
              <BlockSale>
                <DisplayText text='on sale' />
                <AiFillFire />
              </BlockSale>
              <BlockPrice>
                <FaEthereum />
                <Headline title='4.89 ETH' text='($ 654,874.86)' />
              </BlockPrice>
            </ContentSale>
            <Button text='buy now' icon='' />
          </ContentCardTrending>
          {/* Card */}
          {/* Card */}
          <ContentCardTrending>
            <FrameCardTrending src={IMG_G07} alt='Trending' priority={true} />
            <MainBlockCard>
              <ProfileCard src={IMG_G07} alt='Trending' priority={true} />
              <Headline title='monkey ape ' text='By @JSmith' />
            </MainBlockCard>
            <ContentSale>
              <BlockSale>
                <DisplayText text='on sale' />
                <AiFillFire />
              </BlockSale>
              <BlockPrice>
                <FaEthereum />
                <Headline title='4.89 ETH' text='($ 654,874.86)' />
              </BlockPrice>
            </ContentSale>
            <Button text='buy now' icon='' />
          </ContentCardTrending>
          {/* Card */}
          {/* Card */}
          <ContentCardTrending>
            <FrameCardTrending src={IMG_G06} alt='Trending' priority={true} />
            <MainBlockCard>
              <ProfileCard src={IMG_G07} alt='Trending' priority={true} />
              <Headline title='monkey ape ' text='By @JSmith' />
            </MainBlockCard>
            <ContentSale>
              <BlockSale>
                <DisplayText text='on sale' />
                <AiFillFire />
              </BlockSale>
              <BlockPrice>
                <FaEthereum />
                <Headline title='4.89 ETH' text='($ 654,874.86)' />
              </BlockPrice>
            </ContentSale>
            <Button text='buy now' icon='' />
          </ContentCardTrending>
          {/* Card */}
          {/* Card */}
          <ContentCardTrending>
            <FrameCardTrending src={IMG_G07} alt='Trending' priority={true} />
            <MainBlockCard>
              <ProfileCard src={IMG_G07} alt='Trending' priority={true} />
              <Headline title='monkey ape ' text='By @JSmith' />
            </MainBlockCard>
            <ContentSale>
              <BlockSale>
                <DisplayText text='on sale' />
                <AiFillFire />
              </BlockSale>
              <BlockPrice>
                <FaEthereum />
                <Headline title='4.89 ETH' text='($ 654,874.86)' />
              </BlockPrice>
            </ContentSale>
            <Button text='buy now' icon='' />
          </ContentCardTrending>
          {/* Card */}
          {/* Card */}
          <ContentCardTrending>
            <FrameCardTrending src={IMG_G06} alt='Trending' priority={true} />
            <MainBlockCard>
              <ProfileCard src={IMG_G07} alt='Trending' priority={true} />
              <Headline title='monkey ape ' text='By @JSmith' />
            </MainBlockCard>
            <ContentSale>
              <BlockSale>
                <DisplayText text='on sale' />
                <AiFillFire />
              </BlockSale>
              <BlockPrice>
                <FaEthereum />
                <Headline title='4.89 ETH' text='($ 654,874.86)' />
              </BlockPrice>
            </ContentSale>
            <Button text='buy now' icon='' />
          </ContentCardTrending>
          {/* Card */}
          {/* Card */}
          {/* <ContentCardTrending>
            <FrameCardTrending src={IMG_G05} alt='Trending' priority={true} />
            <MainBlockCard>
              <ProfileCard src={IMG_G07} alt='Trending' priority={true} />
              <Headline title='monkey ape ' text='By @JSmith' />
            </MainBlockCard>
            <ContentSale>
              <BlockSale>
                <DisplayText text='on sale' />
                <AiFillFire />
              </BlockSale>
              <BlockPrice>
                <FaEthereum />
                <Headline title='4.89 ETH' text='($ 654,874.86)' />
              </BlockPrice>
            </ContentSale>
            <Button text='buy now' icon='' />
          </ContentCardTrending> */}
          {/* Card */}
          {/* Card */}
          {/* <ContentCardTrending>
            <FrameCardTrending src={IMG_G07} alt='Trending' priority={true} />
            <MainBlockCard>
              <ProfileCard src={IMG_G07} alt='Trending' priority={true} />
              <Headline title='monkey ape ' text='By @JSmith' />
            </MainBlockCard>
            <ContentSale>
              <BlockSale>
                <DisplayText text='on sale' />
                <AiFillFire />
              </BlockSale>
              <BlockPrice>
                <FaEthereum />
                <Headline title='4.89 ETH' text='($ 654,874.86)' />
              </BlockPrice>
            </ContentSale>
            <Button text='buy now' icon='' />
          </ContentCardTrending> */}
          {/* Card */}
        </WrapperCardsTrending>
      </ContentTrending>
      <ContentStayUpTo>
        <Headline title='ready for next NFT drop?' text='' />
        <BlockStayUpTo>
          <InputField type='email' placeholder='Email@email.com' />
          <Button text='' icon={<BsFillSendFill />} />
        </BlockStayUpTo>
      </ContentStayUpTo>
    </WrapperTrending>
  )
}
