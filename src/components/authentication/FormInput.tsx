import React from 'react';
import { Form } from 'react-bootstrap';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

interface InputProps {
  placeholder: string;
  name: string;
  type: string;
  errorMsg?: string | FieldError | Merge<FieldError, FieldErrorsImpl<unknown>>;
  containerClass?: string;
}

export const FormInput = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <Form.Group className={props.containerClass}>
      <Form.Control size="lg" type={props.type} name={props.name} ref={ref} placeholder={props.placeholder} />
      {props.errorMsg ? <p className="text-danger">{props.errorMsg.toString()}</p> : ''}
    </Form.Group>
  );
});
