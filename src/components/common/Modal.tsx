import React from 'react';

export interface IModalProps {
  isVisible: boolean;
  body: () => JSX.Element;
}

const modalClass =
  'font-quick fixed flex bg-black bg-opacity-50 p-10 w-full h-full top-0 left-0 z-50 overflow-y-scroll';
const modalChildClass = 'h-5/6 bg-white rounded md:mx-20 mt-10';

export default function Modal(props: IModalProps): JSX.Element {
  const { isVisible, body: ModalBody } = props;

  return (
    <div className={isVisible ? modalClass : 'hidden'} tabIndex={-1} role="dialog" aria-hidden="true">
      <div className={modalChildClass}>
        <ModalBody />
      </div>
    </div>
  );
}
