import { http, HttpResponse } from "msw";
import { ABSENCE_PATH, API_BASE_URL, CONFLICTS_PATH } from "../../constants";
import { mockResponse } from "./mockResponse";

export const createConflictHandlers = () =>
  mockResponse.map((item) =>
    http.get(`${API_BASE_URL}${CONFLICTS_PATH}${item.id}`, () =>
      HttpResponse.json({
        conflicts: item.id === 4,
      })
    )
  );

export const handlers = [
  http.get(`${API_BASE_URL}${ABSENCE_PATH}`, () => {
    return HttpResponse.json(mockResponse);
  }),
  ...createConflictHandlers(),
];
