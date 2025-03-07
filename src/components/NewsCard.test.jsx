import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NewsCard from "./NewsCard";

describe("NewsCard Component", () => {
  const mockNews = {
    id: "123",
    title: "Breaking News: React Testing",
    abstract: "This is a short description of the news article.",
    byline: "By John Doe",
    published_date: "2024-03-07",
    media: [
      {
        "media-metadata": [
          {},
          {},
          { url: "https://example.com/news-image.jpg" },
        ],
        copyright: "News Agency",
      },
    ],
  };

  it("renders news title and abstract correctly", () => {
    render(
      <BrowserRouter>
        <NewsCard singleNews={mockNews} />
      </BrowserRouter>
    );

    expect(
      screen.getByText(/Breaking News: React Testing/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/This is a short description of the news article./i)
    ).toBeInTheDocument();
  });

  it("displays the correct image if available", () => {
    render(
      <BrowserRouter>
        <NewsCard singleNews={mockNews} />
      </BrowserRouter>
    );

    const image = screen.getByRole("img", { name: /News Agency/i });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "https://example.com/news-image.jpg");
  });

  it("shows 'No Image Available' when there is no image", () => {
    const mockNewsNoImage = { ...mockNews, media: [] };

    render(
      <BrowserRouter>
        <NewsCard singleNews={mockNewsNoImage} />
      </BrowserRouter>
    );

    expect(screen.getByText(/No Image Available/i)).toBeInTheDocument();
  });

  it("displays the correct byline and published date", () => {
    render(
      <BrowserRouter>
        <NewsCard singleNews={mockNews} />
      </BrowserRouter>
    );

    expect(screen.getByText(/By John Doe/i)).toBeInTheDocument();
    expect(screen.getByText(/2024-03-07/i)).toBeInTheDocument();
  });

  it("links to the correct news article", () => {
    render(
      <BrowserRouter>
        <NewsCard singleNews={mockNews} />
      </BrowserRouter>
    );

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/news/123");
  });
});
