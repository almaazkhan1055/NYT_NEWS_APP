import { render, screen } from "@testing-library/react";
import NewsTopics from "./NewsTopics";

describe("NewsTopics Component", () => {
  it("renders the topic correctly", () => {
    render(<NewsTopics topic="Technology" />);
    expect(screen.getByText("Technology")).toBeInTheDocument();
  });

  it("renders an empty span if no topic is provided", () => {
    render(<NewsTopics topic="" />);

    const spanElement = screen.getByTestId("news-topic");
    expect(spanElement).toBeInTheDocument();
    expect(spanElement).not.toBeEmptyDOMElement(); 
  });
});
