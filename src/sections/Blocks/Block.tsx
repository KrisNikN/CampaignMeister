import * as S from './elements'

export const Block = ({ ...props }) => {
  return (
    <S.SectionContainer {...props}>
      <S.TitleContainer>
        The <S.YellowStyling>Building Blocks </S.YellowStyling>of
        CampaignMeister
      </S.TitleContainer>
      <S.ColumnConteiner>
        <S.RowContainer>
          <S.BlockContainer>
            <S.ImageContainer>
              <S.Image
                src='/imgs/BlocksSection/Idea.png'
                width={80}
                height={80}
                alt='Image'
                layout='fixed'
              />
            </S.ImageContainer>

            <S.TextBlock>
              <S.BlockTitle>Smart Campaigns</S.BlockTitle>
              <S.Paragraph>
                Easily set up structured campaigns with clear goals and
                objectives. Ensure flawless measurement of all campaign tactics
                using our automated UTM tags.
              </S.Paragraph>
            </S.TextBlock>
          </S.BlockContainer>
          <S.BlockContainer>
            <S.ImageContainer>
              <S.Image
                src='/imgs/BlocksSection/Wi-Fi.png'
                width={80}
                height={80}
                alt='Image'
                layout='fixed'
              />
            </S.ImageContainer>

            <S.TextBlock>
              <S.BlockTitle>Full Funnel</S.BlockTitle>
              <S.Paragraph>
                Manage all your campaigns across all channels, brands and
                countries while spanning the full customer journey.
              </S.Paragraph>
            </S.TextBlock>
          </S.BlockContainer>
        </S.RowContainer>
        <S.RowContainer>
          <S.BlockContainer>
            <S.ImageContainer>
              <S.Image
                src='/imgs/BlocksSection/Golf.png'
                width={80}
                height={80}
                alt='Image'
                layout='fixed'
              />
            </S.ImageContainer>
            <S.TextBlock>
              <S.BlockTitle>Smart Insights</S.BlockTitle>
              <S.Paragraph>
                We create smart insights by combining campaign attribution,
                marketing mix modeling and validated experiments to improve your
                campaign optimisation with over 25%.
              </S.Paragraph>
            </S.TextBlock>
          </S.BlockContainer>
          <S.BlockContainer>
            <S.ImageContainer>
              <S.Image
                src='/imgs/BlocksSection/Police.png'
                width={80}
                height={80}
                alt='Image'
                layout='fixed'
              />
            </S.ImageContainer>
            <S.TextBlock>
              <S.BlockTitle> Campaign Governance</S.BlockTitle>
              <S.Paragraph>
                Ensure proper naming conventions across all campaigns, maintain
                clear definitions of dimensions and metrics and keep track of
                all changes: what, when and by whom.
              </S.Paragraph>
            </S.TextBlock>
          </S.BlockContainer>
        </S.RowContainer>
        <S.RowContainer>
          <S.BlockContainer>
            <S.ImageContainer>
              <S.Image
                src='/imgs/BlocksSection/DataBase.png'
                width={80}
                height={80}
                alt='Image'
                layout='fixed'
              />
            </S.ImageContainer>
            <S.TextBlock>
              <S.BlockTitle>Smart Data</S.BlockTitle>
              <S.Paragraph>
                We monitor all datasources on matters such as data freshness and
                schema changes. Our anomaly detection algorithms will warn you
                ahead of any unexpected trend change.
              </S.Paragraph>
            </S.TextBlock>
          </S.BlockContainer>
          <S.BlockContainer>
            <S.ImageContainer>
              <S.Image
                src='/imgs/BlocksSection/Deal.png'
                width={80}
                height={80}
                alt='Image'
                layout='fixed'
              />
            </S.ImageContainer>
            <S.TextBlock>
              <S.BlockTitle>Work Together</S.BlockTitle>
              <S.Paragraph>
                Collaborate with all your agencies across all campaigns, brands
                and countries. Create campaigns together, share files, chat in
                real time replacing hundreds Excel sheets.
              </S.Paragraph>
            </S.TextBlock>
          </S.BlockContainer>
        </S.RowContainer>
      </S.ColumnConteiner>
    </S.SectionContainer>
  )
}
