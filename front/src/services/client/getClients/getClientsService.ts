import { http } from "../../../providers/HttpClientProvider";
import { IGetClientsDTO } from "../../../types/dtos/client/IGetClientsDTO";

export function getClientsService({ pageLength, currentPage }: IGetClientsDTO) {
  return http.get("/clients", {
    params: {
      pageLength,
      currentPage,
    },
  });
}
