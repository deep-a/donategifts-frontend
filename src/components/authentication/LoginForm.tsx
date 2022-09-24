import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form } from 'react-bootstrap';
import { FormInput } from './FormInput';
import { loginSubmit } from '@/common/authentication/AuthenticationApi';
import { loginResolver } from '@/common/helper/FormHelper';

export default function LoginForm(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: loginResolver
  });

  const onSubmit = async (data) => {
    await loginSubmit(data);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
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

        <Button type="submit">Log In</Button>
      </Form>
    </div>
  );
}
