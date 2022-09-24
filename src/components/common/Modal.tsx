import React from 'react';

export interface IModalProps {
  body: () => JSX.Element;
}

export default function Modal(props: IModalProps): JSX.Element {
  const { body: ModalBody } = props;

  return (
    <div tabIndex={-1} role="dialog" aria-hidden="true">
      <div>
        <ModalBody />
      </div>
    </div>
  );
}
