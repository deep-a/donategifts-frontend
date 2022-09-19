import React from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import Modal from '../common/Modal';
import {
  formClass,
  formContainerClass,
  formHeaderClass,
  loginResolver,
  OrClass,
  submitBtnClass,
  authBtnClass,
  loginSubmitBtnClick,
} from './AuthHelpers';
import { FormInput } from './FormInput';

export default function LoginForm(): JSX.Element {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    resolver: loginResolver,
  });

  // eslint-disable-next-line unicorn/consistent-function-scoping
  const onSubmit = (data) => {
    console.log(data);
    loginSubmitBtnClick(data);
  };

  const testFunc = () => {
    return <p>Hello Mom</p>;
  };

  return (
    <div className={formContainerClass}>
      {/* Below line is for testing only */}
      <Modal isVisible body={testFunc} />
      <form onSubmit={handleSubmit(onSubmit)} className={formClass}>
        <div className={formHeaderClass}>
          <Link href="/login">
            <button type="button" className={authBtnClass}>
              Login
            </button>
          </Link>
          <div className={OrClass}>OR</div>
          <Link href="/signup">
            <button type="button" className={authBtnClass}>
              Sign Up
            </button>
          </Link>
        </div>

        <FormInput type="text" {...register('email')} placeholder="Email/Username" errorMsg={errors.email?.message} />

        <FormInput
          type="password"
          {...register('password')}
          placeholder="Password"
          errorMsg={errors.password?.message}
        />

        <input type="submit" className={submitBtnClass} value="Log In" />
      </form>
    </div>
  );
}
