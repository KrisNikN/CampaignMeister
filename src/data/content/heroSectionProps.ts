import { HeroProps } from 'sections';
import { joinFormProps } from './joinFormProps';

export const heroSectionProps: HeroProps = {
  title:
    '<span >The ugly truth: Your campaign data are a mess.</span> By fixing it, you can improve your campaign performance with over 25%.',
  subHeading: [
    'Optimising campaigns is hard, especially if you lack trustworthy data. Unfortunately this is the case for more than 65% of the companies.',

    'Boost your performance by fixing your data across all channels, brands and agencies.',
  ],
  image: {
    src: '/imgs/HeroImage.png',
    width: 740,
    height: 498.63,
  },
  joinFormProps: joinFormProps,
};
