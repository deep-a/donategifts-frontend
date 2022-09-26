import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const registerFormSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string().required('Email is required').email(),
  password: Yup.string().required('Password is required').min(8, 'Passwords must at least be 8 characters long'),
  passwordConfirm: Yup.string().test('password-match', 'Passwords do not match', function match(value) {
    return this.parent.password === value;
  }),
  isAgency: Yup.boolean()
});

const loginFormSchema = Yup.object().shape({
  email: Yup.string().required('Email is required').email(),
  password: Yup.string().required('Password is required')
});

const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
const zipRegex = /^\d{5}$/;

const AgencyRegisterFormSchema = Yup.object().shape({
  agencyName: Yup.string().required('Agency Name is Required'),
  agencyWebsite: Yup.string(),
  address1: Yup.string().required('Address Line 1 is Required'),
  address2: Yup.string(),
  city: Yup.string().required('City is Required'),
  state: Yup.string().required('State is Required'),
  zipcode: Yup.string().matches(zipRegex, 'Please enter a valid 5 digit zipcode').required('Zipcode is Required'),
  country: Yup.string().required('Country is Required'),
  agencyPhone: Yup.string()
    .matches(phoneRegex, 'Please enter a valid Phone Number')
    .required('Phone number is Required'),
  agencyBio: Yup.string().required('Agency Description is Required')
});

const contactFormSchema = object().shape({
  fullName: string().required('Name is Required'),
  email: string().required('Email is Required'),
  subject: string().required('Subject is Required'),
  message: string().required('Message is Required')
});

export const registerResolver = yupResolver(registerFormSchema);
export const loginResolver = yupResolver(loginFormSchema);
export const registerAgencyResolver = yupResolver(AgencyRegisterFormSchema);
export const contactResolver = yupResolver(contactFormSchema);
