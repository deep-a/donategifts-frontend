import React from 'react';
import PropTypes from 'prop-types';

export default function FormInput(props) {
  const { containerClass, type, name, registerFunc, placeholder, errorMsg, useMargin, usePadding } = props;
  return (
    <div className={`${containerClass} ${useMargin ? 'my-5' : ''} ${usePadding ? 'px-3' : ''} form-group`}>
      <input type={type} className="form-control form-control-lg" {...registerFunc(name)} placeholder={placeholder} />
      {errorMsg ? <p className="my-1">{errorMsg.toString()}</p> : ''}
    </div>
  );
}

FormInput.propTypes = {
  containerClass: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  registerFunc: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  errorMsg: PropTypes.string,
  useMargin: PropTypes.bool,
  usePadding: PropTypes.bool
};

FormInput.defaultProps = {
  useMargin: true,
  usePadding: true
};
