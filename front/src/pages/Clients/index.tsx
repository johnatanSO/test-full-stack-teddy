import { ListClients } from "../../components/ListClients";
import { Loading } from "../../components/Loading";
import style from "./Clients.module.scss";
import { useClients } from "./hooks/useClients";
import { ModalCreateClient } from "./partials/ModalCreateClient";
import { ModalDeleteClient } from "./partials/ModalDeleteClient";

export function Clients() {
  const {
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
  } = useClients();

  return (
    <>
      <main className={style.pageContainer}>
        <div className={style.headerListContainer}>
          <span className={style.headerText}>
            <b>16</b> clientes encontrados:
          </span>

          <label
            style={{ marginLeft: "auto" }}
            htmlFor="pageLength"
            className={style.headerText}
          >
            Clientes por página:
          </label>
          <select
            id="pageLength"
            value={pageLength}
            onChange={(event) => {
              setPageLength(+event?.target.value);
            }}
          >
            <option value={16}>16</option>
            <option value={50}>50</option>
            <option value={75}>75</option>
          </select>
        </div>

        {loadingClients ? (
          <Loading color="#EC6724" />
        ) : (
          <>
            <ListClients clients={clients} actions={actions} />
            <button
              onClick={handleCreateClient}
              type="button"
              className={style.createClientButton}
            >
              Criar cliente
            </button>
          </>
        )}
      </main>

      {modalCreateClientOpened && (
        <ModalCreateClient
          clientDataToEdit={currentClientData}
          fetchData={getAllClients}
          open={modalCreateClientOpened}
          handleClose={() => {
            setCurrentClientData(null);
            setModalCreateClientOpened(false);
          }}
        />
      )}

      {modalDeleteClientOpened && currentClientData && (
        <ModalDeleteClient
          clientToDelete={currentClientData}
          fetchData={getAllClients}
          open={modalDeleteClientOpened}
          handleClose={() => {
            setCurrentClientData(null);
            setModalDeleteClientOpened(false);
          }}
        />
      )}
    </>
  );
}
