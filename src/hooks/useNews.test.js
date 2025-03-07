import { renderHook, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import useNews from "./useNews";

global.fetch = vi.fn();

describe("useNews Hook", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should start with loading state", async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ results: [] }),
    });

    const { result } = renderHook(() => useNews(7));

    expect(result.current.loading).toBe(true);
  });

  it("should fetch and return news data", async () => {
    const mockNewsData = {
      results: [
        { title: "Test News 1", url: "https://example.com/1" },
        { title: "Test News 2", url: "https://example.com/2" },
      ],
    };

    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockNewsData),
    });

    const { result } = renderHook(() => useNews(7));

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.error).toBe(null);
    expect(result.current.news).toEqual(mockNewsData.results);
  });

  it("should handle API errors", async () => {
    fetch.mockRejectedValueOnce(new Error("Failed to fetch"));

    const { result } = renderHook(() => useNews(7));

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.error).toBe("Failed to fetch");
    expect(result.current.news).toEqual([]);
  });

  it("should update when period changes", async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: () =>
        Promise.resolve({
          results: [{ title: "Initial News", url: "https://example.com" }],
        }),
    });

    const { result, rerender } = renderHook(({ period }) => useNews(period), {
      initialProps: { period: 7 },
    });

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.news).toHaveLength(1);
    expect(result.current.news[0].title).toBe("Initial News");

    fetch.mockResolvedValueOnce({
      ok: true,
      json: () =>
        Promise.resolve({
          results: [{ title: "Updated News", url: "https://example.com" }],
        }),
    });

    rerender({ period: 30 });

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.news).toHaveLength(1);
    expect(result.current.news[0].title).toBe("Updated News");
  });
});
