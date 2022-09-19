import React from 'react';
import PropTypes from 'prop-types';
import { formGroupClass, inputContainerClass, inputClass, errorClass, inputError, inputOk } from './AuthHelpers';

interface IInputProps {
  errorMsg: string;
  placeholder: string;
  name: string;
  type: string;
  containerClass?: string;
}

const FormInput = React.forwardRef<HTMLInputElement, IInputProps>((props, ref) => (
  <div className={props.containerClass}>
    <div className={`${inputContainerClass} ${props.errorMsg !== '' ? inputError : inputOk}`}>
      <input type={props.type} name={props.name} ref={ref} placeholder={props.placeholder} className={inputClass} />
    </div>
    {props.errorMsg !== '' && <p className={errorClass}>{props.errorMsg}</p>}
  </div>
));

FormInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  errorMsg: PropTypes.string,
  containerClass: PropTypes.string,
};

FormInput.defaultProps = {
  errorMsg: '',
  containerClass: formGroupClass,
};

export { FormInput };
