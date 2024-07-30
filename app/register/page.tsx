import { Metadata } from 'next';
import React from 'react'
import Form from './form';

export const metadata: Metadata = {
    title: "signup",
    description: "signup page",
  };

const Register = () => {
  return <Form />;
}

export default Register