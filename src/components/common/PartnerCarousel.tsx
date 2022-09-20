import { Carousel } from 'react-bootstrap';
import { useTranslation } from 'next-i18next';

export default function PartnerCarousel({ images }: { images: string[] }): JSX.Element {
  const { t } = useTranslation('home');
  const carouselItems: JSX.Element[] = [];

  const imageGroups: string[][] = [[]];
  let currentGroup = 0;

  // combine our images into groups so that we show multiple at once
  for (const [i, image] of images.entries()) {
    // if we are on the initial image or any other index that's not divided by 4 push it into a group
    if (i === 0 || i % 4 !== 0) {
      imageGroups[currentGroup].push(image);
    } else {
      // otherwise up the group counter and push a new array with the current image into it
      imageGroups[++currentGroup] = [image];
    }
  }

  for (const _images of imageGroups) {
    carouselItems.push(
      <Carousel.Item key={_images.join('').slice(0, 10)}>
        {_images.map((image, index) => {
          return (
            <img
              key={image + index}
              className={'m-3'}
              src={`/assets/img/partnerLogos/${image}`}
              width={200}
              alt={image.split('.')[0]}
            />
          );
        })}
      </Carousel.Item>
    );
  }

  return (
    <div className={'text-center my-3'}>
      <h2 className={'mb-4'}>{t('partnerHeading')}</h2>
      <Carousel controls={false} indicators={false}>
        {carouselItems.map((item) => item)}
      </Carousel>
    </div>
  );
}
