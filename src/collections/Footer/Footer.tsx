import * as S from './elements';
import type { HTMLFooterProps } from 'types';
import { LinkProps } from 'next/link';
import { extractDimensionsFromUrl } from 'functions';
import { SbBlokData, storyblokEditable } from '@storyblok/react';

export interface FooterProps {
  blok: ISbFooter;
}

export interface ISbFooter extends SbBlokData {
  image: {
    filename: string;
    alt: string;
  };
  quoteDestop: string;
  quoteMobile: string;

  columns: {
    title: string;
    links: { text: string; href: LinkProps & { url: string } }[];
  }[];

  copyRightDesktop: string;
  copyRightMobile: string;
}

export const Footer = ({ blok, ...props }: FooterProps & HTMLFooterProps) => {
  const { height, width } = extractDimensionsFromUrl(blok.image.filename);
  return (
    <S.Footer {...props} {...storyblokEditable(blok)}>
      <S.ContainerFooter>
        <S.LogoQueteContainer>
          <S.LogoContainer>
            <S.Image
              src={blok.image.filename}
              width={width}
              height={height}
              alt={blok.image.alt}
              layout='intrinsic'
            />
          </S.LogoContainer>

          <S.QuoteContainer>{blok.quoteDestop}</S.QuoteContainer>
          <S.MobileQueteContainer>{blok.quoteMobile}</S.MobileQueteContainer>
        </S.LogoQueteContainer>
        <S.LegalNavContainer>
          {blok.columns.map((column) => {
            return (
              <S.Block key={column.title}>
                <S.BlockTitle>{column.title}</S.BlockTitle>
                <S.LinksContainer>
                  {column.links.map(({ text, ...props }) => {
                    return (
                      <S.Link href={props.href.url} key={text}>
                        {text}
                      </S.Link>
                    );
                  })}
                </S.LinksContainer>
              </S.Block>
            );
          })}
        </S.LegalNavContainer>

        <S.CopyRightDestop
          dangerouslySetInnerHTML={{
            __html: blok.copyRightDesktop,
          }}
        />

        <S.CopyRightMobile
          dangerouslySetInnerHTML={{
            __html: blok.copyRightMobile,
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
