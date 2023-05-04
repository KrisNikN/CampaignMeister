import * as S from './elements'
import type { HTMLFooterProps } from 'types'

export interface FooterProps extends HTMLFooterProps {}

export const Footer = ({ ...props }: FooterProps) => {
  return (
    <S.Footer {...props}>
      <S.ContainerFooter>
        <S.LogoQueteContainer>
          <S.LogoContainer>
            <S.Image
              src='/imgs/logo.png'
              width={220}
              height={28}
              alt='logo'
              layout='intrinsic'
            />
          </S.LogoContainer>
          <S.QueteContainer>
            Boost your campaign performance with over 25% by fixing your
            campaign data
          </S.QueteContainer>
        </S.LogoQueteContainer>
        <S.LegalNavContainer>
          <S.Block>
            <S.BlockTitle>Navigation</S.BlockTitle>
            <S.LinksContainer>
              <S.Link href='#'>The art of optimising</S.Link>
              <S.Link href='#'>Boost your campaigns</S.Link>
              <S.Link href='#'>Start optimising now</S.Link>
              <S.Link href='#'>CampaignMeisters building blocks</S.Link>
            </S.LinksContainer>
          </S.Block>
          <S.Block>
            <S.BlockTitle>Legal</S.BlockTitle>
            <S.LinksContainer>
              <S.Link href='#'>Privacy Policy</S.Link>
              <S.Link href='#'>Cookie Policy</S.Link>
              <S.Link href='#'>Terms & Conditions</S.Link>
            </S.LinksContainer>
          </S.Block>
        </S.LegalNavContainer>
      </S.ContainerFooter>
    </S.Footer>
  )
}
