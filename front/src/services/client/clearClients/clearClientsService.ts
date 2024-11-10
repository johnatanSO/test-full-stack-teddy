import { http } from "../../../providers/HttpClientProvider";

export function clearClientsService(clientsIds: string[]) {
  const body = {
    clientsIds
  }
  
  return http.put("/clients/clear-selection", body);
}
