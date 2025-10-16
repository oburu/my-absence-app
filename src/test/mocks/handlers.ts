import { http, HttpResponse } from "msw";
import { API_BASE_URL } from "../../constants";
import { mockResponse } from "./mockResponse";

export const handlers = [
  http.get(`${API_BASE_URL}absences`, () => {
    return HttpResponse.json(mockResponse);
  }),
  http.get(`${API_BASE_URL}conflict/1`, () => {
    return HttpResponse.json({
      conflicts: false,
    });
  }),
];
