import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import App from "./App";
import Person from "../component/Person";

test("Load and displays starter data", async () => {
  render(<App />);
  const person = await waitFor(() => screen.findByTestId('person'));
  expect(person).toHaveTextContent();
}
);

test('Can change the name', async () => {
    render(<Person />);
    const inputNmae = screen.getByTestId('input-name');
    const inputAge = screen.getByTestId('input-age');
    const inputGender = screen.getByTestId('gender-input');

    fireEvent.change(inputNmae, { target: { value: 'shaima' } });
    fireEvent.change(inputAge, { target: { value: '25' } });
    fireEvent.change(inputGender, { target: { value: 'female' } });

    // expect().toHaveTextContent()

    

  })
