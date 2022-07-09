import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Footer } from "./Footer";

test("Affichage du footer", () => {
  render(<Footer />);

  expect(screen.getByText(/AITP Project - NaLuxis 2022/i)).toBeInTheDocument();
});
