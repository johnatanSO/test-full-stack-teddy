import { http } from "../../../providers/HttpClientProvider";

export function getSelectedClientsService() {
  return http.get('/selected')
}