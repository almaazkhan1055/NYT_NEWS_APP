import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";
import Home from "../pages/Home";
import useNews from "../hooks/useNews";

vi.mock("../hooks/useNews", () => ({
  default: vi.fn(),
}));

describe("Home Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("displays fetched articles", async () => {
    const mockNews = [
      { id: 1, title: "Test Article 1" },
      { id: 2, title: "Test Article 2" },
    ];

    useNews.mockReturnValue({ news: mockNews, loading: false, error: null });

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    screen.debug();

    await waitFor(() =>
      expect(
        screen.getByText(/showing 2 most popular articles from the past 1 day/i)
      ).toBeInTheDocument()
    );
  });
});
