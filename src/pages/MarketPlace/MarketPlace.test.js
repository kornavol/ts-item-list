import React from "react";

import { render, screen } from "@testing-library/react";

import MarketPlace from "./index";
import sampleJson from "../../__mockup__/sample-response.json";

// describe("Rendering MarketPlace page", () => {
//   /* not rerender screnn afret async*/
//   it("render Load more button", async () => {
//     render(<MarketPlace />);
//     expect(screen.queryByText(/Load more/i)).toBeNull();
//     screen.debug;
//     expect(await screen.findByText(/Load more/i)).toBeInTheDocument();
//     screen.debug;
//   });
// });

// describe('snapshot tests', () => {
//   it('renders correctly', () => {
//     const tree = renderer
//       .create(ItemlList)
//       .toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });
