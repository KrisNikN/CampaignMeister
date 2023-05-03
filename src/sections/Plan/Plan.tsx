import * as S from './elements'

export const Plan = ({ ...props }) => (
  <S.SectionContainer {...props}>
    <S.TitleContainer>
      You can achieve this in just
      <S.YellowStyling> three easy steps</S.YellowStyling>
    </S.TitleContainer>
    <S.RowContainer>
      <S.ElementContainer>
        <S.Element>
          <S.ImageContainer>
            <S.Image
              src='/imgs/PlanSection/Organise.png'
              width={193.38}
              height={197.26}
              alt='Image'
              layout='fixed'
            />
          </S.ImageContainer>
          <S.Block>
            <S.Number>1</S.Number>
            <S.BlockTitle>Organise</S.BlockTitle>
            <S.BoldParagraph>
              Set up all your campaigns in one tool replacing hundreds of Excel
              Sheets
            </S.BoldParagraph>
            <S.Paragraph>
              Create Smart Campaigns with clear goals, objectives and tactics
              across all brands, channels and agencies. Import all historic
              campaigns and learn about your performance drivers immediately.
            </S.Paragraph>
          </S.Block>
        </S.Element>
      </S.ElementContainer>
      <S.ElementContainer>
        <S.Element>
          <S.ImageContainer>
            <S.Image
              src='/imgs/PlanSection/Analyse.png'
              width={191}
              height={210}
              alt='Image'
              layout='fixed'
            />
          </S.ImageContainer>
          <S.Block>
            <S.Number>2</S.Number>
            <S.BlockTitle>Analyse</S.BlockTitle>
            <S.BoldParagraph>
              Use validated data to see performance in customisable dashboards
            </S.BoldParagraph>
            <S.Paragraph>
              We combine all relevant data sources and ensure data quality
              through automated tests. Be informed upront to any trend change
              through our automated anomaly detection.
            </S.Paragraph>
          </S.Block>
        </S.Element>
      </S.ElementContainer>
      <S.ElementContainer>
        <S.Element>
          <S.ImageContainer>
            <S.Image
              src='/imgs/PlanSection/Optimise.png'
              width={187}
              height={197}
              alt='Image'
              layout='fixed'
            />
          </S.ImageContainer>
          <S.Block>
            <S.Number>3</S.Number>
            <S.BlockTitle>Optimise</S.BlockTitle>
            <S.BoldParagraph>
              Improve your campaign performance with 25% through Smart Insights
            </S.BoldParagraph>
            <S.Paragraph>
              Our Smart Insights Engine will combine historic campaign
              performance, marketing mix modeling and validated learnings to
              give you a clear holistic understanding in marketing performance
              and incrementality.
            </S.Paragraph>
          </S.Block>
        </S.Element>
      </S.ElementContainer>
    </S.RowContainer>
  </S.SectionContainer>
)
