import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import { Carousel } from "./Carousel";

test("Affichage du carousel de react slick", () => {
  render(<Carousel />);
});
