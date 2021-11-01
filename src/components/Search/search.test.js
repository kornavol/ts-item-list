import React from "react";

import { render, screen, RenderResult } from "@testing-library/react";
import Search from "./index";

// let documentBody: RenderResult;

describe("Rendering Search component", () => {
  beforeEach(() => {});

  it("render initial state", () => {
    render(<Search />);
    expect(
      screen.getByPlaceholderText("Search by product name")
    ).toBeInTheDocument();
    expect(screen.getByDisplayValue("")).toBeInTheDocument();
  });

    it("render input with a specific value", () => {
      const value = "test";
      render(<Search value={value} />);
      expect(screen.getByDisplayValue(value)).toBeInTheDocument();
    });
});
