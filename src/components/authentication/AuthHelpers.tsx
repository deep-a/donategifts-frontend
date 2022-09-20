import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { IAuthResponse, loginUserWithFireBase, registerUserWithFireBase } from './AuthApi';

const registerFormSchema = object().shape({
  firstName: string().required('First Name is required'),
  lastName: string().required('Last Name is required'),
  email: string().required('Email is required').email(),
  password: string().required('Password is required').min(8, 'Passwords must at least be 8 characters long'),
  passwordConfirm: string().test('password-match', 'Passwords do not match', function match(value) {
    return this.parent.password === value;
  }),
  userRole: string().required('Please select a User Role').nullable()
});

const loginFormSchema = object().shape({
  email: string().required('Email is required').email(),
  password: string().required('Password is required')
});

const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
const zipRegex = /^\d{5}$/;

const AgencyRegisterFormSchema = object().shape({
  agencyName: string().required('Agency Name is Required'),
  agencyWebsite: string(),
  address1: string().required('Address Line 1 is Required'),
  address2: string(),
  city: string().required('City is Required'),
  state: string().required('State is Required'),
  zipcode: string().matches(zipRegex, 'Please enter a valid 5 digit zipcode').required('Zipcode is Required'),
  country: string().required('Country is Required'),
  agencyPhone: string().matches(phoneRegex, 'Please enter a valid Phone Number').required('Phone number is Required'),
  agencyBio: string().required('Agency Description is Required')
});

export const registerResolver = yupResolver(registerFormSchema);
export const loginResolver = yupResolver(loginFormSchema);
export const registerAgencyResolver = yupResolver(AgencyRegisterFormSchema);

// AuthForm Styles

export const formContainerClass = 'flex justify-center bg-authform font-quicksand';
export const formClass =
  'flex flex-col space-y-8 my-10 p-12 border rounded-2xl border-transparent bg-gradient-to-tr from-form-primary to-form-secondary md:w-9/12';
export const formHeaderClass = 'justify-center p-4 text-2xl mb-3 space-x-2 flex flex-col md:flex-row flex-wrap';
export const formGroupClass = 'flex flex-col space-y-5';
export const inputContainerClass = 'w-full';
export const inputClass =
  'w-full mb-1 bg-transparent ml-2 text-2xl text-white placeholder-white placeholder-opacity-50 focus:outline-none';
export const errorClass = 'text-sm ml-2 text-error font-semibold';
export const inputError = 'border rounded border-error p-2';
export const inputOk = 'border-b border-white';
export const submitBtnClass =
  'shadow w-2/4 py-4 font-bold self-center cursor-pointer rounded-md hover:bg-form-secondary hover:text-white duration-100 text-xl text-red-400';
export const authBtnClass =
  'font-crayoncrumble text-3xl hover:cursor-pointer border rounded-2xl border-transparent pt-3 px-8 pb-3 bg-signup text-red-400 hover:bg-signup-darker';
export const OrClass = 'font-crayoncool self-center text-white';
export const radioContainerClass = 'flex flex-row space-x-2 ml-2 text-xl';
export const radioClass = 'self-start self-center';
export const radioLabelContainer = 'text-white self-center';

// PartnerModal Styles

export const modalContainerClass = 'flex flex-col text-xl space-y-4';
export const modalTitleContainerClass = 'border-b border-gray-200 flex flex-row content-between mr-4 ml-4';
export const modalTitleClass = 'flex-1 text-2xl p-4';
export const modalCloseClass = 'flex-initial cursor-pointer self-center';
export const modalBodyClass = 'px-10 space-y-2';
export const blockRowClass = 'flex flex-col space-y-2';
export const blockColumnClass = 'flex flex-row space-x-2';
export const block = 'h-1/2 w-11/12';
export const bodyIconClass = 'fill-current text-red-400 mr-2';

// Agency/Partner Registration Form Styles

export const agencyFormHeaderClass = 'font-crayoncrumble text-3xl font-bold text-center text-white';
export const cityStateZipContainerClass = 'flex flex-col space-y-8 md:space-y-0 md:flex-row md:space-x-2';
export const cityGroupClass = `${formGroupClass} md:w-3/5`;
export const stateGroupClass = `${formGroupClass} md:w-1/5`;
export const zipcodeGroupClass = `${formGroupClass} md:w-1/5`;
export const countryPhoneContainerClass = 'flex flex-col space-y-8 md:space-y-0 md:flex-row md:space-x-2';
export const countryGroupClass = `${formGroupClass} md:w-1/2`;
export const phoneGroupClass = `${formGroupClass} md:w-1/2`;
export const agencyBioInputClass = `${inputClass} h-44`;

export const registerSubmitBtnClick = async (data: { email: string; password: string }): Promise<IAuthResponse> => {
  // regular user: firebase register (fetches token/error), call backend to store reg user if token
  // agency user: firebase register (fetches token/error), call backend to store agency user if token
  // return token/error
  let result = { token: '' };
  try {
    result = await registerUserWithFireBase(data);
  } catch (error) {
    alert(error);
  }
  return result;
};

export const loginSubmitBtnClick = async (data: { email: string; password: string }): Promise<IAuthResponse> => {
  // call firebase login (fetches token/error), get and return token/error
  let result = { token: '' };
  try {
    result = await loginUserWithFireBase(data);
  } catch (error) {
    alert(error);
  }
  return result;
};
