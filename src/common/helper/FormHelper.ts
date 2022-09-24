import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

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
