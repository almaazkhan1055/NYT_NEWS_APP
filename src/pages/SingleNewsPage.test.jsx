import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, it, vi, beforeEach } from "vitest";
import SingleNewsPage from "../pages/SingleNewsPage";
import useNews from "../hooks/useNews";

vi.mock("../hooks/useNews");

const renderWithRouter = (id) => {
  return render(
    <MemoryRouter initialEntries={[`/news/${id}`]}>
      <Routes>
        <Route path="/news/:id" element={<SingleNewsPage />} />
      </Routes>
    </MemoryRouter>
  );
};

describe("SingleNewsPage Component", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("displays a loading state when fetching news", () => {
    useNews.mockReturnValue({ news: [], loading: true, error: null });
    renderWithRouter("1");

    expect(screen.getByText("Loading article...")).toBeInTheDocument();
  });

  it("displays an error message if fetching fails", () => {
    useNews.mockReturnValue({
      news: [],
      loading: false,
      error: "Network Error",
    });
    renderWithRouter("1");

    expect(
      screen.getByText("Error loading article: Network Error")
    ).toBeInTheDocument();
  });

  it("displays 'Article not found' when no matching news exists", () => {
    useNews.mockReturnValue({ news: [], loading: false, error: null });
    renderWithRouter("999");

    expect(screen.getByText("Article not found.")).toBeInTheDocument();
  });

  it("renders the article details correctly", () => {
    useNews.mockReturnValue({
      news: [
        {
          id: "1",
          title: "Test Article",
          byline: "By Author",
          published_date: "2024-03-07",
          abstract: "This is a test article.",
          url: "https://example.com",
          media: [
            {
              "media-metadata": [
                {},
                {},
                { url: "https://example.com/image.jpg" },
              ],
            },
          ],
          des_facet: ["Topic 1", "Topic 2"],
          nytdsection: "Technology",
          source: "NY Times",
        },
      ],
      loading: false,
      error: null,
    });

    renderWithRouter("1");

    expect(screen.getByText("Test Article")).toBeInTheDocument();
    expect(screen.getByText("By Author")).toBeInTheDocument();
    expect(screen.getByText("Published: 2024-03-07")).toBeInTheDocument();
    expect(screen.getByText("This is a test article.")).toBeInTheDocument();
    expect(screen.getByText("Technology")).toBeInTheDocument();
    expect(screen.getByText("NY Times")).toBeInTheDocument();

    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", "https://example.com/image.jpg");

    expect(screen.getByText("Topic 1")).toBeInTheDocument();
    expect(screen.getByText("Topic 2")).toBeInTheDocument();
  });

  it("renders 'No Image Available' when no media exists", () => {
    useNews.mockReturnValue({
      news: [
        {
          id: "2",
          title: "No Image Article",
          byline: "By Author",
          published_date: "2024-03-07",
          abstract: "This is an article with no image.",
          url: "https://example.com",
          media: [],
          des_facet: [],
          nytdsection: "Health",
          source: "NY Times",
        },
      ],
      loading: false,
      error: null,
    });

    renderWithRouter("2");

    expect(screen.getByText("No Image Available")).toBeInTheDocument();
  });

  it("renders the 'Read Full Article' button with the correct link", () => {
    useNews.mockReturnValue({
      news: [
        {
          id: "3",
          title: "Button Test",
          byline: "By Author",
          published_date: "2024-03-07",
          abstract: "Test article for button.",
          url: "https://example.com",
          media: [],
          des_facet: [],
          nytdsection: "Business",
          source: "NY Times",
        },
      ],
      loading: false,
      error: null,
    });

    renderWithRouter("3");

    const button = screen.getByRole("link", {
      name: "Read Full Article on NY Times",
    });
    expect(button).toHaveAttribute("href", "https://example.com");
  });
});
