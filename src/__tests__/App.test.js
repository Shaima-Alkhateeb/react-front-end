import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import App from "../App";
import Person from "../component/Person";


// test("Load and displays starter data", async () => {
//   render(<App />);
//   const person = await waitFor(() => screen.findByTestId('person'));
//   expect(person).toHaveTextContent();
// }
// );

test('Can change the data', async () => {
    render(<Person />);
    const inputNmae = screen.getByTestId('input-name');
    const inputAge = screen.getByTestId('input-age');
    const inputGender = screen.getByTestId('input-gender');
    // const inputNewAge = screen.getByTestId('input-gender');

    fireEvent.change(inputNmae, { target: { value: 'shaima' } });
    fireEvent.change(inputAge, { target: { value: '55' } });
    fireEvent.change(inputGender, { target: { value: 'female' } });
    // fireEvent.change(inputGender, { target: { value: 'female' } });

    // expect().toHaveTextContent()

  })


  // add 5 with the age
  // test('age + 5 test', async () => {
  //   render(<Person />);
  //   const ageInput = screen.getByTestId("input-name");
  //   const submit = screen.getByTestId('submit');

  //   fireEvent.change(ageInput, { target: { value: '55' } });
  //   fireEvent.click(submit);

  //   const  waitFor = () => screen.getByTestId('new-age')
  //   const newAge = await waitFor();
  //   setTimeout(() => {
  //     expect(newAge).toHaveTextContent('New Age: 60');
  //   }, 2000);


    // expect(newAge).toHaveTextContent('60');
    // expect(newAge).toBeInTheDocument();



  // });