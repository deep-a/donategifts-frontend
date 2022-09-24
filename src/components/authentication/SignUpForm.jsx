import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { Button, Container, Form } from 'react-bootstrap';
import { registerResolver } from '@common/helper/FormHelper';
import { FormInput } from '@components/authentication/FormInput';
import { registerSubmit } from '@common/authentication/AuthenticationApi';

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: registerResolver
  });

  const router = useRouter();

  const onSubmit = async (data) => {
    const { userRole, email, password } = data;

    if (userRole === 'agency') {
      await router.push('/profile/agency/agency-signup');
    }

    await registerSubmit({ email, password });
  };

  const toggleModal = () => console.log('implement modal toggle');

  return (
    <Container className="p-md-5">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          containerClass="my-5"
          type="text"
          {...register('firstName')}
          placeholder="First name"
          errorMsg={errors.firstName?.message}
        />

        <FormInput
          containerClass="my-5"
          type="text"
          {...register('lastName')}
          placeholder="Last name"
          errorMsg={errors.lastName?.message}
        />

        <FormInput
          containerClass="my-5"
          type="text"
          {...register('email')}
          placeholder="Email/Username"
          errorMsg={errors.email?.message}
        />

        <FormInput
          containerClass="my-5"
          type="password"
          {...register('password')}
          placeholder="Password"
          errorMsg={errors.password?.message}
        />

        <FormInput
          containerClass="my-5"
          type="password"
          {...register('passwordConfirm')}
          placeholder="Confirm Password"
          errorMsg={errors.passwordConfirm?.message}
        />

        <Form.Check
          type="switch"
          id="agency-switch"
          className="text-black my-5"
          label="Sign up as Agency?"
          onClick={toggleModal}
        />

        <Button variant="primary" size="lg" type="submit">
          Sign Up
        </Button>
      </Form>
    </Container>
  );
}
