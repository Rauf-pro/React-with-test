import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Todo from "./index";

describe("Todo Tests", () => {
  let button, input;

  beforeEach(() => {
    render(<Todo />);
    button = screen.getByText("Add");
    input = screen.getByLabelText("Text");
  });

  test("as default three item", () => {
    const items = screen.getAllByText(/Item/i);

    expect(items.length).toEqual(3);
  });
  test("Must find Input and button in document", () => {
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();

  });
  test("When writing string in input and to click button adding item to list ", () => {
    //write input anything
    const name = "Rauf";
    userEvent.type(input, name);

    //click the button
     userEvent.click(button);

     //assertion
     expect(screen.getByText(name)).toBeInTheDocument();
  })
});
