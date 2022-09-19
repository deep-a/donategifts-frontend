import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useRouter } from 'next/router';
import InputMask from 'react-input-mask';
import {
  formClass,
  formContainerClass,
  submitBtnClass,
  registerAgencyResolver,
  errorClass,
  inputContainerClass,
  inputClass,
  agencyFormHeaderClass,
  cityStateZipContainerClass,
  cityGroupClass,
  stateGroupClass,
  zipcodeGroupClass,
  countryPhoneContainerClass,
  countryGroupClass,
  phoneGroupClass,
  formGroupClass,
  agencyBioInputClass,
} from './AuthHelpers';
import { FormInput } from './FormInput';

export default function AgencyRegisterForm(): JSX.Element {
  const {
    register,
    handleSubmit,
    control,

    formState: { errors },
  } = useForm({
    resolver: registerAgencyResolver,
  });
  const router = useRouter();

  const onSubmit = async () => {
    await router.push('/');
  };

  return (
    <div className={formContainerClass}>
      <form onSubmit={handleSubmit(onSubmit)} className={formClass}>
        <div className={agencyFormHeaderClass}>Last step: Register your Agency</div>

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

        <div className={cityStateZipContainerClass}>
          <FormInput
            type="text"
            {...register('city')}
            placeholder="City"
            errorMsg={String(errors.city?.message)}
            containerClass={cityGroupClass}
          />

          <FormInput
            type="text"
            {...register('state')}
            placeholder="State"
            errorMsg={String(errors.state?.message)}
            containerClass={stateGroupClass}
          />

          <FormInput
            type="text"
            {...register('zipcode')}
            placeholder="Zipcode"
            errorMsg={String(errors.zipcode?.message)}
            containerClass={zipcodeGroupClass}
          />
        </div>

        <div className={countryPhoneContainerClass}>
          <FormInput
            type="text"
            {...register('country')}
            placeholder="Country"
            errorMsg={String(errors.country?.message)}
            containerClass={countryGroupClass}
          />

          <div className={phoneGroupClass}>
            <div className={inputContainerClass}>
              <Controller
                control={control}
                name="agencyPhone"
                render={() => (
                  <InputMask mask="999-999-9999" maskPlaceholder="Phone Number: 123-456-7890" className={inputClass} />
                )}
              />
            </div>
            <p className={errorClass}>{String(errors.agencyPhone?.message)}</p>
          </div>
        </div>

        <div className={formGroupClass}>
          <div className={inputContainerClass}>
            <textarea {...register('agencyBio')} placeholder="Agency Description" className={agencyBioInputClass} />
          </div>
          <p className={errorClass}>{String(errors.agencyBio?.message)}</p>
        </div>

        <input type="submit" className={submitBtnClass} value="Sign Up" />
      </form>
    </div>
  );
}
