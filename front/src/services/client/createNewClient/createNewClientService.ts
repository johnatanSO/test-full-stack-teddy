import { http } from "../../../providers/HttpClientProvider";
import { ICreateNewClientDTO } from "../../../types/dtos/client/ICreateNewClientDTO";

export function createNewClientService({clientData}: ICreateNewClientDTO) {
  const body = {
    ...clientData,
  }

  return http.post('/clients', body)
}