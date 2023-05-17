import * as S from './elements';
import type { HTMLFooterProps } from 'types';

/*export interface FooterProps extends HTMLFooterProps {
  image: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  quoteDestop: string;
  quoteMobile: string;

  navigationLiksDesktop: {
    text: string;
    path: string;
  }[];

  navigationLiksMobile: {
    text: string;
    path: string;
  }[];

  legalLinks: {
    text: string;
    path: string;
  }[];

  copyRightDesktop: string;
  copyRightMobile: string;
}
*/
export interface FooterProps extends HTMLFooterProps {}

export const Footer = ({
  /*image,
  quoteDestop,
  quoteMobile,
  navigationLiksDesktop,
  navigationLiksMobile,
  legalLinks,
  copyRightDesktop,
  copyRightMobile,*/
  ...props
}: FooterProps) => {
  return (
    <S.Footer {...props}>
      <S.ContainerFooter>
        <S.LogoQueteContainer>
          <S.LogoContainer>
            <S.Image
              src={image.src}
              width={image.width}
              height={image.height}
              alt={image.alt}
              layout='intrinsic'
            />
          </S.LogoContainer>

          <S.QuoteContainer>{quoteDestop}</S.QuoteContainer>

          <S.MobileQueteContainer>{quoteMobile}</S.MobileQueteContainer>
        </S.LogoQueteContainer>
        <S.LegalNavContainer>
          <S.Block>
            <S.BlockTitle>Navigation</S.BlockTitle>
            <S.LinksContainerDesktop>
              {navigationLiksDesktop.map(({ text, path }) => {
                return (
                  <S.Link href={path} key={text}>
                    {text}
                  </S.Link>
                );
              })}
            </S.LinksContainerDesktop>
            <S.LinksContainerMobile>
              {navigationLiksMobile.map(({ text, path }) => {
                return (
                  <S.Link href={path} key={text}>
                    {text}
                  </S.Link>
                );
              })}
            </S.LinksContainerMobile>
          </S.Block>
          <S.Block>
            <S.BlockTitle>Legal</S.BlockTitle>
            <S.LinksContainer>
              {legalLinks.map(({ text, path }) => {
                return (
                  <S.Link href={path} key={text}>
                    {text}
                  </S.Link>
                );
              })}
            </S.LinksContainer>
          </S.Block>
        </S.LegalNavContainer>

        <S.CopyRightDestop
          dangerouslySetInnerHTML={{
            __html: copyRightDesktop,
          }}
        />

        <S.CopyRightMobile
          dangerouslySetInnerHTML={{
            __html: copyRightMobile,
          }}
        />
      </S.ContainerFooter>
    </S.Footer>
  );
};

/*<S.CopyRightDestop>
          © 2022, CampaignMeister is a product of
          <S.CopyLink href='/'> Human Data Associates</S.CopyLink>
        </S.CopyRightDestop>*/
