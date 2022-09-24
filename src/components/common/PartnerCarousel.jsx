import React from 'react';
import { Carousel } from 'react-bootstrap';
import { useTranslation } from 'next-i18next';
import PropTypes from 'prop-types';

export default function PartnerCarousel({ images }) {
  const { t } = useTranslation('home');
  const carouselItems = [];

  const imageGroups = [[]];
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
        {_images.map((image, index) => (
          <img
            key={`${image + index}`}
            className="m-3"
            src={`/assets/img/partnerLogos/${image}`}
            width={200}
            alt={image.split('.')[0]}
          />
        ))}
      </Carousel.Item>
    );
  }

  return (
    <div className="text-center my-3">
      <h2 className="mb-4">{t('partnerHeading')}</h2>
      <Carousel controls={false} indicators={false}>
        {carouselItems.map((item) => item)}
      </Carousel>
    </div>
  );
}

PartnerCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};
