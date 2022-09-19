import React from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  errorClass,
  formClass,
  formContainerClass,
  formGroupClass,
  formHeaderClass,
  OrClass,
  submitBtnClass,
  authBtnClass,
  registerResolver,
  radioClass,
  radioContainerClass,
  radioLabelContainer,
  registerSubmitBtnClick,
} from './AuthHelpers';
import { FormInput } from './FormInput';

interface IRegisterFormProps {
  modalDisplay: boolean;
  toggleModal: () => void;
}

export default function RegisterForm(props: IRegisterFormProps): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: registerResolver,
  });
  const router = useRouter();

  const onSubmit = async (data: { userRole: string; email: string; password: string }) => {
    const { userRole, email, password } = data;

    if (userRole === 'agency') {
      await router.push('/');
    }

    await registerSubmitBtnClick({ email, password });
  };

  return (
    <div className={formContainerClass}>
      <form onSubmit={handleSubmit(onSubmit)} className={formClass}>
        <div className={formHeaderClass}>
          <Link href="/signup">
            <button type="button" className={authBtnClass}>
              Sign Up
            </button>
          </Link>
          <div className={OrClass}>OR</div>
          <Link href="/login">
            <button type="button" className={authBtnClass}>
              Login
            </button>
          </Link>
        </div>

        <FormInput
          type="text"
          {...register('firstName')}
          placeholder="First name"
          errorMsg={String(errors.firstName?.message)}
        />

        <FormInput
          type="text"
          {...register('lastName')}
          placeholder="Last name"
          errorMsg={String(errors.lastName?.message)}
        />

        <FormInput
          type="text"
          {...register('email')}
          placeholder="Email/Username"
          errorMsg={String(errors.email?.message)}
        />

        <FormInput
          type="password"
          {...register('password')}
          placeholder="Password"
          errorMsg={String(errors.password?.message)}
        />

        <FormInput
          type="password"
          {...register('passwordConfirm')}
          placeholder="Confirm Password"
          errorMsg={String(errors.passwordConfirm?.message)}
        />

        <div className={formGroupClass}>
          <p className="text-2xl text-white">Signing up as:</p>
          <div className={radioContainerClass}>
            <input {...register('userRole')} type="radio" className={radioClass} value="donor" />
            <p className={radioLabelContainer}>Gift Sender</p>
          </div>
          <div className={radioContainerClass}>
            <input
              {...register('userRole')}
              type="radio"
              className={radioClass}
              value="agency"
              onClick={() => props.toggleModal()}
            />
            <p className={radioLabelContainer}>Foster Care Partner</p>
          </div>
          <p className={errorClass}>{String(errors.userRole?.message)}</p>
        </div>

        <input type="submit" className={submitBtnClass} value="Sign Up" />
      </form>
    </div>
  );
}
