import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import { useTranslation } from 'next-i18next';
import { prepareIconName } from '@common/utils/faIcons';

export default function PartnerModal(props) {
  const { onHide } = props;

  const { t } = useTranslation('signUp');

  return (
    <Modal {...props} onHide={onHide} backdrop="static" keyboard={false} size="lg" centered>
      <Modal.Dialog className="p-3">
        <Modal.Header>
          <Modal.Title className="center-elements w-100">
            <FontAwesomeIcon
              icon={prepareIconName(t('partnerModal.title.icon'))}
              className="flex-initial fill-current text-red-400 self-center"
              size="2x"
            />
            <span className="ms-3">{t('partnerModal.title.text')}</span>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="text-center">
            {t('partnerModal.body.heading', { returnObjects: true }).map((item) => (
              <h5 key={item.slice(0, 10)}>{item}</h5>
            ))}
          </div>

          {t('partnerModal.body.items', { returnObjects: true }).map((item, index) => (
            <div key={`${item.icon + index}`}>
              <FontAwesomeIcon icon={prepareIconName(item.icon)} size="lg" />
              <span className="ms-3">{item.text}</span>
            </div>
          ))}
        </Modal.Body>

        <Modal.Footer>
          <button type="button" className="btn-navy-orange-lg" onClick={onHide}>
            Acknowledged
          </button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
}

PartnerModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired
};
