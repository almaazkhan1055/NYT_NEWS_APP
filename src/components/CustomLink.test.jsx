import { render, screen } from "@testing-library/react";
import CustomLink from "./CustomLink";
import { BrowserRouter } from "react-router-dom";

describe("Button Component", () => {
  it("applies the correct background color", () => {
    render(
      <BrowserRouter>
        <CustomLink text="Read More" bgColor="#ff0000" url="/news/1" />
      </BrowserRouter>
    );

    const button = screen.getByRole("link", { name: /read more/i });

    expect(button).toHaveStyle({ backgroundColor: "rgb(255, 0, 0)" });
  });
});
