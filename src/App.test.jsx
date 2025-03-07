import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe("App Component", () => {
  test("renders Home component on default route (/)", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    expect(
      screen.getByText(/NY Times Most Popular Articles/i)
    ).toBeInTheDocument();
  });

  test("renders SingleNewsPage component on /news/:id route", () => {
    render(
      <MemoryRouter initialEntries={["/news/123"]}>
        <App />
      </MemoryRouter>
    );
  });
});
