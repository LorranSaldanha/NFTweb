'use client'

import { Button } from 'components/Ui/Button'
import DisplayText from 'components/Ui/Text'
import DisplayTitle from 'components/Ui/Title'

import { BsGoogle, BsFacebook, BsTwitter, BsYoutube } from './Icons'
import {
  BlockFooter,
  ContentFooter,
  LogoFooter,
  SocialFields,
  WrapperFooter
} from './styles'

import Logo from 'assets/svg/Logo.svg'

export const Footer = () => {
  return (
    <WrapperFooter>
      <ContentFooter>
        <BlockFooter>
          <LogoFooter src={Logo} alt='Logo Footer' priority={true} />
          <SocialFields>
            <Button text='' icon={<BsYoutube />} />
            <Button text='' icon={<BsGoogle />} />
            <Button text='' icon={<BsFacebook />} />
            <Button text='' icon={<BsTwitter />} />
          </SocialFields>
        </BlockFooter>
        <BlockFooter>
          <DisplayTitle title='about' />
          <DisplayText text='about NFT' />
          <DisplayText text='live auctions' />
          <DisplayText text='nft blog' />
          <DisplayText text='activity' />
        </BlockFooter>
        <BlockFooter>
          <DisplayTitle title='support' />
          <DisplayText text='help support' />
          <DisplayText text='term details' />
          <DisplayText text='author profile' />
          <DisplayText text='collection' />
        </BlockFooter>
      </ContentFooter>
    </WrapperFooter>
  )
}
