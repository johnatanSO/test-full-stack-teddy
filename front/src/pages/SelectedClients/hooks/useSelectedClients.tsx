import { useEffect, useState } from "react";
import { IClient } from "../../../types/models/IClient";
import { IActionCard } from "../../../types/models/IActionCard";
import minusIconPath from "../../../assets/icons/minus-icon.svg";
import { getSelectedClientsService } from "../../../services/client/getSelectedClients/getSelectedClientsService";

export function useSelectedClients() {
  const [selectedClients, setSelectedClients] = useState<IClient[]>([]);
  const [loadingSelectedClients, setLoadingSelectedClients] =
    useState<boolean>(true);
  const [modalClearClientsOpened, setModalClearClientsOpened] =
    useState<boolean>(false);

  const actions: IActionCard[] = [
    {
      onClickFunction: () => {
        console.log("unselect");
      },
      svgPath: minusIconPath,
      title: "Remover cliente",
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
  };
}
