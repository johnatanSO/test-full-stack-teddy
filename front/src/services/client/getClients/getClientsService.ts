import { http } from "../../../providers/HttpClientProvider";

export function getClientsService() {
  return http.get('/clients')
}