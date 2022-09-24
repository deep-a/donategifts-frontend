import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHandshake,
  faBan,
  faCheckSquare,
  faEnvelope,
  faExclamationTriangle
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';

interface IPartnerModalBody {
  toggleModal: () => void;
}

export default function PartnerModal(props: IPartnerModalBody): JSX.Element {
  return (
    <div>
      <div>
        <FontAwesomeIcon icon={faHandshake} className="flex-initial fill-current text-red-400 self-center" size="2x" />
        <div>Signing up as a Foster Care Partner?</div>
        <div role="button" tabIndex={0} onClick={() => props.toggleModal()} onKeyDown={() => props.toggleModal()}>
          Close
        </div>
      </div>

      <div>
        <h5>Before we proceed, let’s go over a few important things.</h5>
        <h5>Verification process is fast and easy!</h5>

        <div>
          <div>
            <div>
              <FontAwesomeIcon icon={faBan} size="lg" />
              No minor or non-certified caregiver can register as a foster care partner to create wish cards on their
              own, in order to prevent any potential misuse of our site.
            </div>

            <div>
              <FontAwesomeIcon icon={faCheckSquare} size="lg" />
              Once you are verified as a foster care partner, you can manage the account and create wish cards for the
              children under your care. You may not have immediate permission to create the wish cards until your
              account is reviewed and verified.
            </div>
          </div>

          <div>
            <div>
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
              If you are a foster care parent or an agency staff, please use your work email to sign up. We will send a
              verification link to your work email (email address that is associated with your organization).
            </div>

            <div>
              <FontAwesomeIcon icon={faExclamationTriangle} size="lg" />
              Currently, DonateGifts only accepts partnership with non-profit foster care organizations, licensed
              adoption/ family care agencies, and state-certified domestic foster homes. Please contact us if you have
              any questions.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
