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
import { ABSENCE_PATH, API_BASE_URL, CONFLICTS_PATH } from "./constants";
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

describe("App", () => {
  test("Fetches the data correctly and parses the 'To' date properly", async () => {
    renderWithClient(<App />);

    expect(screen.getByText("Employees Absences")).toBeInTheDocument();
    expect(screen.getByText("Loading Table ⌛...")).toBeInTheDocument();

    await waitFor(async () => {
      const list = await screen.findAllByText("No Conflicts");
      expect(list.length).toBe(9);
      expect(screen.getByText("Rahaf Deckard")).toBeInTheDocument();
      expect(screen.getByText("Has Conflicts")).toBeInTheDocument();
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

  test("Shows error message when there's no data response for the table", async () => {
    server.use(
      http.get(`${API_BASE_URL}${ABSENCE_PATH}`, () => {
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

  test("Shows error message when there's no conflicts api response", async () => {
    renderWithClient(<App />);

    server.use(
      http.get(`${API_BASE_URL}${CONFLICTS_PATH}1`, () => {
        return new HttpResponse(null, { status: 404 });
      })
    );

    await waitFor(() => {
      expect(
        screen.getByText("Sorry there is an error with the connection ⚠️")
      ).toBeInTheDocument();
    });
  });

  test("Click on a name with a conflict", async () => {
    renderWithClient(<App />);

    const list = await screen.findAllByText("Jabez Nasser");
    const firstElement = list[0];

    act(() => {
      fireEvent.click(firstElement);
    });

    await waitFor(() => {
      expect(screen.getByText("No Conflicts")).toBeInTheDocument();
      expect(screen.getByText("Has Conflicts")).toBeInTheDocument();
      expect(screen.getByText("Filtering by")).toBeInTheDocument();
    });
  });
});
