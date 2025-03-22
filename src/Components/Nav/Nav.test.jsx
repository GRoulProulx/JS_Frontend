import Nav from "./Nav";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, expect } from "vitest";
import {  MemoryRouter } from "react-router-dom";

describe("Nav", () => {
    it("should display a nav with 5 links", () => {
        const { container } = render(
            <MemoryRouter>
                <Nav />
            </MemoryRouter>
        );
        expect(screen.getByText("Accueil")).toBeInTheDocument();

        const liens = container.querySelectorAll("a");
        expect(liens.length).toBe(5);
    });

    it("should link to the right pages", async () => {
        const { container } = render(
            <MemoryRouter>
                <Nav />
            </MemoryRouter>
        );
        const addOst = screen.getByText("Ajouter une bande sonore");
        expect(addOst).toBeInTheDocument();
        expect(addOst).toHaveAttribute("href", "/add-soundtrack");

        const soundtracks = screen.getByText("Bande sonores");
        expect(soundtracks).toBeInTheDocument();
        expect(soundtracks).toHaveAttribute("href", "/soundtracks-list");
    });
});
