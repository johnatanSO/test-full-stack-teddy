import { http } from "../../../providers/HttpClientProvider";

export function clearClientsService(clientsIds: string[]) {
  return http.post("/clients/clear", clientsIds);
}
