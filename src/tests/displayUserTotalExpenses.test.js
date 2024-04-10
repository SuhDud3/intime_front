import React from "react";
import { render, screen } from "@testing-library/react";
import DisplayUserTotalExpenses from "../views/components/displayUserTotalExpenses";

test("renders DisplayUserTotalExpenses component", () => {
  render(<DisplayUserTotalExpenses />);
  const linkElement = screen.getByText(/Votre total de dépenses/i);
    expect(linkElement).toBeInTheDocument();
});

test("renders variable userHourlyWage", () => {
    render(<DisplayUserTotalExpenses userHourlyWage={10} />);
    const linkElement = screen.getByText(/10 heures/i);
    expect(linkElement).toBeInTheDocument();
});
