import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { clientSchema, INewClient } from "../interfaces/INewClient";
import { createNewClientService } from "../../../services/client/createNewClient/createNewClientService";

type Props = {
  onClose: () => void;
  fetchData: () => void;
};
export function useCreateClient({ onClose, fetchData }: Props) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<INewClient>({
    defaultValues: {
      name: "",
      companyValue: 0,
      salary: 0,
    },
    resolver: zodResolver(clientSchema),
  });

  async function onCreateNewClient(data: INewClient) {
    await createNewClientService({ clientData: data })
      .then(() => {
        fetchData();
        onClose();
        reset();
      })
      .catch((err) => {
        console.log("error", err);
      });
  }

  return {
    register,
    handleSubmit,
    isSubmitting,
    onCreateNewClient,
  };
}
