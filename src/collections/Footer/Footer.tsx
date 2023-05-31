import * as S from './elements';
import type { HTMLFooterProps } from 'types';
import { LinkProps } from 'next/link';
import { extractDimensionsFromUrl } from 'functions';

export interface FooterProps {
  image: {
    filename: string;
    alt: string;
  };
  quoteDestop: string;
  quoteMobile: string;

  columns: { title: string; links: (LinkProps & { text: string })[] }[];

  copyRightDesktop: string;
  copyRightMobile: string;
}

/*export interface FooterProps extends HTMLFooterProps {}*/

export const Footer = ({
  image,
  quoteDestop,
  quoteMobile,
  columns,
  copyRightDesktop,
  copyRightMobile,
  ...props
}: FooterProps & HTMLFooterProps) => {
  const { height, width } = extractDimensionsFromUrl(image.filename);
  return (
    <S.Footer {...props}>
      <S.ContainerFooter>
        <S.LogoQueteContainer>
          <S.LogoContainer>
            <S.Image
              src={image.filename}
              width={width}
              height={height}
              alt={image.alt}
              layout='intrinsic'
            />
          </S.LogoContainer>

          <S.QuoteContainer>{quoteDestop}</S.QuoteContainer>

          <S.MobileQueteContainer>{quoteMobile}</S.MobileQueteContainer>
        </S.LogoQueteContainer>
        <S.LegalNavContainer>
          {columns.map((column) => {
            return (
              <S.Block key={column.title}>
                <S.BlockTitle>{column.title}</S.BlockTitle>
                <S.LinksContainer>
                  {column.links.map(({ text, ...props }) => {
                    return (
                      <S.Link href={props.href.toString()} key={text}>
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
