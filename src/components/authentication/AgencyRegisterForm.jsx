import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useRouter } from 'next/router';
import InputMask from 'react-input-mask';
import { registerAgencyResolver } from '@common/helper/FormHelper';
import { FormInput } from './FormInput';

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
          {...register('agencyName')}
          placeholder="Agency Name"
          errorMsg={String(errors.agencyName?.message)}
        />

        <FormInput
          type="text"
          {...register('agencyWebsite')}
          placeholder="Agency Website (if any)"
          errorMsg={String(errors.agencyWebsite?.message)}
        />

        <FormInput
          type="text"
          {...register('address1')}
          placeholder="Agency Address Line 1"
          errorMsg={String(errors.address1?.message)}
        />

        <FormInput
          type="text"
          {...register('address2')}
          placeholder="Address Line 2"
          errorMsg={String(errors.address2?.message)}
        />

        <div>
          <FormInput type="text" {...register('city')} placeholder="City" errorMsg={String(errors.city?.message)} />

          <FormInput type="text" {...register('state')} placeholder="State" errorMsg={String(errors.state?.message)} />

          <FormInput
            type="text"
            {...register('zipcode')}
            placeholder="Zipcode"
            errorMsg={String(errors.zipcode?.message)}
          />
        </div>

        <div>
          <FormInput
            type="text"
            {...register('country')}
            placeholder="Country"
            errorMsg={String(errors.country?.message)}
          />

          <div>
            <div>
              <Controller
                control={control}
                name="agencyPhone"
                render={() => <InputMask mask="999-999-9999" maskPlaceholder="Phone Number: 123-456-7890" />}
              />
            </div>
            <p>{String(errors.agencyPhone?.message)}</p>
          </div>
        </div>

        <div>
          <div>
            <textarea {...register('agencyBio')} placeholder="Agency Description" />
          </div>
          <p>{String(errors.agencyBio?.message)}</p>
        </div>

        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
}
