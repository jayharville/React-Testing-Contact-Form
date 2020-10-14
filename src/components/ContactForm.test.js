import React from "react";
import ContactForm from './ContactForm';
import { render, fireEvent } from "@testing-library/react";
import 'mutationobserver-shim';

test("renders App without crashing", () => {
    render(<ContactForm />);
  });


test("inputs are rendered", () => {
    const { getByTestId } = render(<ContactForm />);
    getByTestId('nameOfYourChoice')
})