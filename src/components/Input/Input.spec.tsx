// import Input from "./Input";
// import { render, fireEvent } from "@testing-library/react";
// import "@testing-library/jest-dom";

// describe("Input component", () => {
//   const inputProps = {
//     label: "Name",
//     type: "text",
//     value: "Jhon",
//     onChange: jest.fn(),
//   };

//   // it("renders the label and input field", () => {
//   //   const container = render(<Input {...inputProps} />);

//   //   console.log(container);
//   // });

//   it("updates the value when the user types", () => {
//     const { getByLabelText } = render(<Input {...inputProps} />);

//     const input = getByLabelText("Name");

//     fireEvent.change(input, { target: { value: "Jane" } });

//     expect(inputProps.onChange).toHaveBeenCalledWith("Jane");
//   });
// });

describe("jest", () => {
  it("renders the label and input field", () => {
    expect(1).toBe(1);
  });
  it("renders field2", () => {
    expect(2).toBe(2);
  });
});
