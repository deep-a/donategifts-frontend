import React from 'react';
import Link from 'next/link';
import { Button, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function InfoBlock({ heading, content, button, image }) {
  return (
    <div className="infoblock my-5">
      <div className="container text-center mw-70">
        <h2>{heading}</h2>
        <div className="row mt-5">
          <div className="col-md-6">
            <p className="text-start" dangerouslySetInnerHTML={{ __html: content }} />
            {button && (
              <Link href={button.link}>
                <Button className="btn btn-lg btn-primary">{button.text}</Button>
              </Link>
            )}
          </div>
          {image && (
            <div className="col-md-6">
              <Image alt={image.alt} src={image.link} loading="lazy" className="img-fluid" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

InfoBlock.propTypes = {
  heading: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  button: PropTypes.shape({
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }),
  image: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  })
};
