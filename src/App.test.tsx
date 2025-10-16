import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { http, HttpResponse } from "msw";
import { describe, expect, test } from "vitest";
import App from "./App";
import { API_BASE_URL } from "./constants";
import { server } from "./test/mocks/node";

function renderWithClient(ui: React.ReactElement) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false },
    },
  });

  return render(
    <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
  );
}

describe("It renders the App", () => {
  test("Fetches the data correctly and parses the to date properly", async () => {
    renderWithClient(<App />);

    expect(screen.getByText("Employees Absences")).toBeInTheDocument();
    expect(screen.getByText("Loading Table ⌛...")).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("Rahaf Deckard")).toBeInTheDocument();
      expect(screen.getByText("No Conflicts")).toBeInTheDocument();
      expect(screen.getByText("05/06/2022")).toBeInTheDocument();
    });
  });

  test("Click on a name and show only its data", async () => {
    renderWithClient(<App />);

    await waitFor(() => {
      expect(screen.getByText("Enya Behm")).toBeInTheDocument();
    });

    act(() => {
      fireEvent.click(screen.getByText("Rahaf Deckard"));
    });

    await waitFor(() => {
      expect(screen.queryByText("Enya Behm")).not.toBeInTheDocument();
    });
  });

  test("Shows error message", async () => {
    server.use(
      http.get(`${API_BASE_URL}absences`, () => {
        return new HttpResponse(null, { status: 404 });
      })
    );

    renderWithClient(<App />);

    await waitFor(() => {
      expect(
        screen.getByText("Sorry there is an error with the connection ⚠️")
      ).toBeInTheDocument();
    });
  });
});
