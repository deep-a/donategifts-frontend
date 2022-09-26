import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useRouter } from 'next/router';
import InputMask from 'react-input-mask';
import { registerAgencyResolver } from '@common/helper/FormHelper';
import FormInput from './FormInput';

export default function AgencyRegisterForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    resolver: registerAgencyResolver
  });

  const router = useRouter();

  const onSubmit = async () => {
    await router.push('/');
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>Last step: Register your Agency</div>

        <FormInput
          type="text"
          name="agencyName"
          registerFunc={register}
          placeholder="Agency Name"
          errorMsg={errors.agencyName?.message}
        />

        <FormInput
          type="text"
          name="agencyWebsite"
          registerFunc={register}
          placeholder="Agency Website (if any)"
          errorMsg={errors.agencyWebsite?.message}
        />

        <FormInput
          type="text"
          name="address1"
          registerFunc={register}
          placeholder="Agency Address Line 1"
          errorMsg={errors.address1?.message}
        />

        <FormInput
          type="text"
          name="address2"
          registerFunc={register}
          placeholder="Address Line 2"
          errorMsg={errors.address2?.message}
        />

        <FormInput type="text" name="city" registerFunc={register} placeholder="City" errorMsg={errors.city?.message} />

        <FormInput
          type="text"
          name="state"
          registerFunc={register}
          placeholder="State"
          errorMsg={errors.state?.message}
        />

        <FormInput
          type="text"
          name="zipcode"
          registerFunc={register}
          placeholder="Zipcode"
          errorMsg={errors.zipcode?.message}
        />

        <div>
          <FormInput
            type="text"
            name="country"
            registerFunc={register}
            placeholder="Country"
            errorMsg={errors.country?.message}
          />

          <div>
            <div>
              <Controller
                control={control}
                name="agencyPhone"
                render={() => <InputMask mask="999-999-9999" maskPlaceholder="Phone Number: 123-456-7890" />}
              />
            </div>
            {errors.agencyPhone?.message}
          </div>
        </div>

        <div>
          <div>
            <textarea {...register('agencyBio')} placeholder="Agency Description" />
          </div>
          {errors.agencyBio?.message}
        </div>

        <button type="submit" className="btn-navy-white-lg">
          Sign Up
        </button>
      </form>
    </div>
  );
}
