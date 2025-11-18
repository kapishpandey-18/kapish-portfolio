import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Projects from "../Projects";
import { projects } from "../../data/projects";

describe("Projects section", () => {
  it("renders the section heading and project cards from data", () => {
    render(<Projects />);

    expect(screen.getByRole("heading", { name: /selected projects/i })).toBeInTheDocument();

    projects.forEach((project) => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
    });
  });
});
