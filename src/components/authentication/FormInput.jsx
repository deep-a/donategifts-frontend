import React from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const FormInput = React.forwardRef((props, ref) => (
  <Form.Group className={props.containerClass}>
    <Form.Control
      id={props.name}
      size="lg"
      type={props.type}
      name={props.name}
      ref={ref}
      placeholder={props.placeholder}
    />
    {props.errorMsg ? <p className="text-danger">{props.errorMsg.toString()}</p> : ''}
  </Form.Group>
));

FormInput.propTypes = {
  containerClass: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  errorMsg: PropTypes.string
};
