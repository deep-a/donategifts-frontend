import React from 'react';
import { inputContainerClass, inputClass, errorClass, inputError, inputOk } from './AuthHelpers';

interface InputProps {
  errorMsg: string;
  placeholder: string;
  name: string;
  type: string;
  containerClass?: string;
}

const FormInput = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <div className={props.containerClass}>
    <div className={`${inputContainerClass} ${props.errorMsg !== '' ? inputError : inputOk}`}>
      <input type={props.type} name={props.name} ref={ref} placeholder={props.placeholder} className={inputClass} />
    </div>
    {props.errorMsg !== '' && <p className={errorClass}>{props.errorMsg}</p>}
  </div>
));

export { FormInput };
