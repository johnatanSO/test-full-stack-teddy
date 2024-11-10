import { http } from "../../../providers/HttpClientProvider";

export function deleteClientService(clientId: string ) {
  return http.delete('/clients/' + clientId)
}