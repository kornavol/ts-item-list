import React from "react";

import { render, screen } from "@testing-library/react";
import sampleRes from "../../../../__mockup__/sample-response.json";

import ItemsList from "./index";

describe("Rendering ItemsList component", () => {
  beforeEach(() => {
    let meta = { cursor: 0, limit: 4 };
    const items = sampleRes.data.data

  });

  it("render initial state", () => {
    let meta = { cursor: 0, limit: 4 };
    const items = sampleRes.data.data
    
    render(<ItemsList meta={meta} items={items} />);
    screen.debug;
  });
});


