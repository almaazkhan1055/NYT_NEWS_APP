import { render, screen } from "@testing-library/react";
import PeriodFilter from "../components/PeriodFilter";

describe("PeriodFilter Component", () => {
  it("displays 'day' or 'days' based on period value", () => {
    render(<PeriodFilter period={1} setPeriod={vi.fn()} />);
    expect(screen.getAllByText("1 day").length).toBeGreaterThan(0);

    render(<PeriodFilter period={5} setPeriod={vi.fn()} />);
    expect(screen.getAllByText("5 days").length).toBeGreaterThan(0);

    render(<PeriodFilter period={30} setPeriod={vi.fn()} />);
    expect(screen.getAllByText("30 days").length).toBeGreaterThan(0);
  });
});
