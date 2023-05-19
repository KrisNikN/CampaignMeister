import { StartProps } from 'sections';
import { joinFormProps } from './joinFormProps';

export const startSectionProps: StartProps = {
  desktopTitle:
    '<span >Start</span> optimising <span style="color: #FCD130;">now</span>',
  mobileTitle: 'Start optimising <span style="color: #FCD130;">now</span>',
  image: {
    src: '/imgs/lines.png',
    width: 88.47,
    height: 373.24,
  },
  joinFormProps: joinFormProps,
};
