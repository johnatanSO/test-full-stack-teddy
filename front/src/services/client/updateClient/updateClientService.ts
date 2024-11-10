import { http } from "../../../providers/HttpClientProvider";
import { IUpdateClientDTO } from "../../../types/dtos/client/IUpdateClientDTO";

export function updateClientService(
  clientId: string,
  { name, companyValue, salary, selected }: IUpdateClientDTO
) {
  const body = {
    name,
    companyValue,
    salary,
    selected,
  };

  return http.put(`/clients/${clientId}`, {
    ...body,
  });
}
