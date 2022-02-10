import React from "react";
import { render, screen } from "@testing-library/react";
import Render from "./Render";

describe("Rendering", () => {
  it("Shoud render all the elements correctly", () => {
    render(<Render />);
    // screen.debug();
    expect(screen.getByRole("heading")).toBeTruthy();
    expect(screen.getByRole("textbox")).toBeTruthy();
    expect(screen.getAllByRole("button")[0]).toBeTruthy();
    expect(screen.getAllByRole("button")[1]).toBeTruthy();
    expect(screen.getByText("Udemy")).toBeTruthy();
    expect(screen.queryByText("Udeeeeemy")).toBeNull();
    expect(screen.getByTestId("copyright")).toBeTruthy();
  });
});
