import { render, screen } from "@testing-library/react";
import NewsDetails from "./NewsDetails";

describe("NewsDetails Component", () => {
  it("renders the section and source correctly", () => {
    render(<NewsDetails section="Technology" source="NY Times" />);

    expect(screen.getByText(/Article Information/i)).toBeInTheDocument();
    expect(screen.getByText(/Section/i)).toBeInTheDocument();
    expect(screen.getByText("Technology")).toBeInTheDocument();
    expect(screen.getByText(/Source/i)).toBeInTheDocument();
    expect(screen.getByText("NY Times")).toBeInTheDocument();
  });

  it("renders empty placeholders when no props are provided", () => {
    render(<NewsDetails />);

    expect(screen.getByText(/Article Information/i)).toBeInTheDocument();
    expect(screen.getByText(/Section/i)).toBeInTheDocument();
    expect(screen.getByText(/Source/i)).toBeInTheDocument();

    const paragraphs = screen.getAllByRole("paragraph");
    expect(paragraphs.length).toBe(2);
  });
});
