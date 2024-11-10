import { useEffect, useState } from "react";
import { IClient } from "../../../types/models/IClient";
import { v4 as uuidv4 } from "uuid";
import { IActionCard } from "../../../types/models/IActionCard";
import plusIconPath from "../../../assets/icons/plus-icon.svg";
import penIconPath from "../../../assets/icons/pen-icon.svg";
import trashIconPath from "../../../assets/icons/trash-icon.svg";
import { getClientsService } from "../../../services/client/getClients/getClientsService";

export function useClients() {
  const [pageLength, setPageLength] = useState<number>(16);
  const [clients, setClients] = useState<IClient[]>([]);
  const [loadingClients, setLoadingClients] = useState<boolean>(true);
  const [modalCreateClientOpened, setModalCreateClientOpened] =
    useState<boolean>(false);

  const actions: IActionCard[] = [
    {
      onClickFunction: () => {
        console.log("Add client");
      },
      svgPath: plusIconPath,
      title: "Selecionar cliente",
    },
    {
      onClickFunction: () => {
        console.log("Edit client");
      },
      svgPath: penIconPath,
      title: "Selecionar cliente",
    },
    {
      onClickFunction: () => {
        console.log("Delete client");
      },
      svgPath: trashIconPath,
      title: "Selecionar cliente",
    },
  ];

  function getAllClients() {
    setLoadingClients(true);

    getClientsService()
      .then((res) => {
        setClients(res.data);
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

  useEffect(() => {
    getAllClients();
    setClients([
      {
        id: uuidv4(),
        companyValue: 1000,
        name: "Eduardo",
        salary: 1000,
      },
      {
        id: uuidv4(),
        companyValue: 1000,
        name: "Eduardo",
        salary: 1000,
      },
      {
        id: uuidv4(),
        companyValue: 1000,
        name: "Eduardo",
        salary: 1000,
      },
      {
        id: uuidv4(),
        companyValue: 1000,
        name: "Eduardo",
        salary: 1000,
      },
      {
        id: uuidv4(),
        companyValue: 1000,
        name: "Eduardo",
        salary: 1000,
      },
      {
        id: uuidv4(),
        companyValue: 1000,
        name: "Eduardo",
        salary: 1000,
      },
      {
        id: uuidv4(),
        companyValue: 1000,
        name: "Eduardo",
        salary: 1000,
      },
      {
        id: uuidv4(),
        companyValue: 1000,
        name: "Eduardo",
        salary: 1000,
      },
      {
        id: uuidv4(),
        companyValue: 1000,
        name: "Eduardo",
        salary: 1000,
      },
      {
        id: uuidv4(),
        companyValue: 1000,
        name: "Eduardo",
        salary: 1000,
      },
      {
        id: uuidv4(),
        companyValue: 1000,
        name: "Eduardo",
        salary: 1000,
      },
      {
        id: uuidv4(),
        companyValue: 1000,
        name: "Eduardo",
        salary: 1000,
      },
      {
        id: uuidv4(),
        companyValue: 1000,
        name: "Eduardo",
        salary: 1000,
      },
      {
        id: uuidv4(),
        companyValue: 1000,
        name: "Eduardo",
        salary: 1000,
      },
      {
        id: uuidv4(),
        companyValue: 1000,
        name: "Eduardo",
        salary: 1000,
      },
      {
        id: uuidv4(),
        companyValue: 1000,
        name: "Eduardo",
        salary: 1000,
      },
    ]);
  }, []);

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
  };
}
