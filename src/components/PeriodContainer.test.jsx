import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import PeriodContainer from "./PeriodContainer";

describe("PeriodContainer Component", () => {
  let mockSetPeriod;

  beforeEach(() => {
    mockSetPeriod = vi.fn();
    render(<PeriodContainer setPeriod={mockSetPeriod} />);
  });

  it("renders all period options", () => {
    expect(screen.getByText("1 day")).toBeInTheDocument();
    expect(screen.getByText("7 days")).toBeInTheDocument();
    expect(screen.getByText("30 days")).toBeInTheDocument();
  });

  it("calls setPeriod when an option is clicked", () => {
    fireEvent.click(screen.getByText("7 days"));
    expect(mockSetPeriod).toHaveBeenCalledWith(7);
  });
});
