import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ErrorPage from "./ErrorPage";

describe("ErrorPage test", () => {
  test("Should show title", () => {
    render(<ErrorPage />);
    expect(screen.getByText(/Error/i)).toBeDefined();
  });
});
