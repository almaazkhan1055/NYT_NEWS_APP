import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NewsCardContainer from "./NewsCardContainer";

describe("NewsCardContainer Component", () => {
  const mockNews = [
    {
      id: "1",
      title: "Breaking News 1",
      abstract: "Summary of news 1.",
      byline: "By Reporter 1",
      published_date: "2024-03-07",
      media: [
        {
          "media-metadata": [{}, {}, { url: "https://example.com/image1.jpg" }],
          copyright: "News Agency 1",
        },
      ],
    },
    {
      id: "2",
      title: "Breaking News 2",
      abstract: "Summary of news 2.",
      byline: "By Reporter 2",
      published_date: "2024-03-06",
      media: [],
    },
  ];

  it("renders the correct number of news cards", () => {
    render(
      <BrowserRouter>
        <NewsCardContainer news={mockNews} />
      </BrowserRouter>
    );

    const newsCards = screen.getAllByRole("link");
    expect(newsCards.length).toBe(2);
  });

  it("displays the correct news titles", () => {
    render(
      <BrowserRouter>
        <NewsCardContainer news={mockNews} />
      </BrowserRouter>
    );

    expect(screen.getByText(/Breaking News 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Breaking News 2/i)).toBeInTheDocument();
  });

  it("shows the correct number of images", () => {
    render(
      <BrowserRouter>
        <NewsCardContainer news={mockNews} />
      </BrowserRouter>
    );

    const images = screen.getAllByRole("img");
    expect(images.length).toBe(1);
    expect(images[0]).toHaveAttribute("src", "https://example.com/image1.jpg");
  });

  it("displays 'No Image Available' for news without an image", () => {
    render(
      <BrowserRouter>
        <NewsCardContainer news={mockNews} />
      </BrowserRouter>
    );

    expect(screen.getByText(/No Image Available/i)).toBeInTheDocument();
  });
});
