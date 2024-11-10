import { useEffect, useState } from "react";
import { IClient } from "../../../types/models/IClient";
import { IActionCard } from "../../../types/models/IActionCard";
import { getClientsService } from "../../../services/client/getClients/getClientsService";
import { updateClientService } from "../../../services/client/updateClient/updateClientService";
import { faPen, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

export function useClients() {
  const [pageLength, setPageLength] = useState<number>(16);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalClients, setTotalClients] = useState<number>(0)

  const [clients, setClients] = useState<IClient[]>([]);
  const [loadingClients, setLoadingClients] = useState<boolean>(true);
  const [modalCreateClientOpened, setModalCreateClientOpened] =
    useState<boolean>(false);
  const [currentClientData, setCurrentClientData] = useState<IClient | null>(
    null
  );
  const [modalDeleteClientOpened, setModalDeleteClientOpened] =
    useState<boolean>(false);

  const actions: IActionCard[] = [
    {
      onClickFunction: (clientData: IClient) => {
        toggleSelectClient(clientData);
      },
      svgPath: faPlus,
      title: "Selecionar cliente",
      customStyle: {
        color: "#009714",
      },
      type: "selectClient",
    },
    {
      onClickFunction: (clientData: IClient) => {
        handleEditClient(clientData);
      },
      svgPath: faPen,
      title: "Editar cliente",
      customStyle: {
        color: "#2d8fff",
      },
    },
    {
      onClickFunction: (clientData: IClient) => {
        handleDeleteClient(clientData);
      },
      svgPath: faTrash,
      title: "Excluir cliente",
      customStyle: {
        color: "#ff2d2d",
      },
    },
  ];

  function getAllClients() {
    setLoadingClients(true);

    getClientsService({ pageLength, currentPage })
      .then((res) => {
        setClients(res.data.items);
        setTotalClients(res.data.totalItems)
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoadingClients(false);
      });
  }

  function handleCreateClient() {
    setModalCreateClientOpened(true);
  }

  function toggleSelectClient(clientData: IClient) {
    updateClientService(clientData.id, {
      ...clientData,
      selected: !clientData.selected,
    })
      .then(() => {
        getAllClients();
      })
      .catch((err) => {
        console.log("error", err);
      });
  }

  function handleEditClient(clientData: IClient) {
    setModalCreateClientOpened(true);
    setCurrentClientData(clientData);
  }

  function handleDeleteClient(clientData: IClient) {
    setCurrentClientData(clientData);
    setModalDeleteClientOpened(true);
  }

  useEffect(() => {
    getAllClients();
  }, [pageLength, currentPage]);

  return {
    pageLength,
    setPageLength,
    clients,
    actions,
    loadingClients,
    handleCreateClient,
    modalCreateClientOpened,
    setModalCreateClientOpened,
    getAllClients,
    currentClientData,
    setCurrentClientData,
    modalDeleteClientOpened,
    setModalDeleteClientOpened,
    currentPage,
    setCurrentPage,
    totalClients,
  };
}
