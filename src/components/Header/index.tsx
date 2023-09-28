import { useState } from 'react'

import { Button } from 'components/Ui/Button'

import { IoWallet, RiCloseFill, RiMenu5Fill } from './Icons_Header'
import {
  BlockLinks,
  ContentButtons,
  ContentHeader,
  ContentLinks,
  ControlSidebar,
  DisplayLink,
  FrameProfile,
  LogoBranding,
  WrapperHeader
} from './styles'

import IMG_G07 from 'assets/img/IMG_G07.png'
import Logo from 'assets/svg/Logo.svg'

export const Header = () => {
  const [open, setOpen] = useState(false)
  const handleSideBar = () => {
    setOpen(!open)
  }
  return (
    <WrapperHeader>
      <ContentHeader>
        <LogoBranding src={Logo} alt='Logo' priority={true} />
        <ControlSidebar onClick={handleSideBar}>
          {open ? <RiCloseFill /> : <RiMenu5Fill />}
        </ControlSidebar>
        <ContentLinks open={open}>
          <BlockLinks>
            <DisplayLink href='#'>explorer</DisplayLink>
            <DisplayLink href='#'>trending nftS</DisplayLink>
            <DisplayLink href='#'>auctioned nfts</DisplayLink>
            <DisplayLink href='#'>influencers</DisplayLink>
          </BlockLinks>
          <ContentButtons>
            <Button text='connect wallet' icon={<IoWallet />} />
            <FrameProfile src={IMG_G07} alt='Profile' priority={true} />
          </ContentButtons>
        </ContentLinks>
      </ContentHeader>
    </WrapperHeader>
  )
}
