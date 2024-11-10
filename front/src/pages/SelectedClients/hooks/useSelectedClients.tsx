import { useEffect, useState } from "react";
import { IClient } from "../../../types/models/IClient";
import { IActionCard } from "../../../types/models/IActionCard";
import { getSelectedClientsService } from "../../../services/client/getSelectedClients/getSelectedClientsService";
import { clearClientsService } from "../../../services/client/clearClients/clearClientsService";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

export function useSelectedClients() {
  const [selectedClients, setSelectedClients] = useState<IClient[]>([]);
  const [loadingSelectedClients, setLoadingSelectedClients] =
    useState<boolean>(true);
  const [modalClearClientsOpened, setModalClearClientsOpened] =
    useState<boolean>(false);

  const actions: IActionCard[] = [
    {
      onClickFunction: (clientData: IClient) => {
        handleRemoveClient(clientData);
      },
      svgPath: faMinus,
      title: "Remover cliente",
      customStyle: {
        color: "#ff2d2d",
      },
    },
  ];

  function getSelectedClients() {
    setLoadingSelectedClients(true);

    getSelectedClientsService()
      .then((res) => {
        setSelectedClients(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      })
      .finally(() => {
        setLoadingSelectedClients(false);
      });
  }

  function handleClearClientsSelected() {
    setModalClearClientsOpened(true);
  }

  function handleRemoveClient(clientData: IClient) {
    clearClientsService([clientData.id])
      .then(() => {
        getSelectedClients();
      })
      .catch((err) => {
        console.log("error", err);
      });
  }

  useEffect(() => {
    getSelectedClients();
  }, []);

  return {
    loadingSelectedClients,
    selectedClients,
    actions,
    handleClearClientsSelected,
    modalClearClientsOpened,
    setModalClearClientsOpened,
    getSelectedClients,
  };
}
