import { http } from "../../../providers/HttpClientProvider";

export function clearClientsService(clientsIds: string[]) {
  return http.put("/clients/clear/", clientsIds);
}
