import React from "react";
import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
// ↑ je comprend pas pourquoi je suis obliger de l'importer ici
import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./NavBar";

test("affichage de la NavBar", () => {
  render(<NavBar />, { wrapper: BrowserRouter });

  expect(screen.getByAltText(/Logo-AITP/i)).toBeInTheDocument();
  expect(screen.getByText(/Store/i)).toBeInTheDocument();
  expect(screen.getByText(/About/i)).toBeInTheDocument();
});

// test("Verification du changement de page lors d'un clique sur un lien", async () => {
//   render(<NavBar />, { wrapper: BrowserRouter });

//   await userEvent.click(screen.getByAltText(/Logo-AITP/i));
//   expect(screen.getByText(/AITP Project/i)).toBeInTheDocument();
// });
// je peut pas je vienq de penser il faut render les composants
// autre que NavBar pour faire ce test
