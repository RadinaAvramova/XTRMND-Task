import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import App from "./App";

describe("<App component", () => {
  test("App mounts properly", () => {
    const wrapper = render(<App />);
    expect(wrapper).toBeTruthy();
  });
});
