import { ListClients } from "../../components/ListClients";
import { Loading } from "../../components/Loading";
import { useSelectedClients } from "./hooks/useSelectedClients";
import { ModalClearClients } from "./partials/ModalClearClients";
import style from "./SelectedClients.module.scss";

export function SelectedClients() {
  const {
    loadingSelectedClients,
    selectedClients,
    actions,
    handleClearClientsSelected,
    modalClearClientsOpened,
    setModalClearClientsOpened,
    getSelectedClients,
  } = useSelectedClients();

  return (
    <>
      <main className={style.pageContainer}>
        {loadingSelectedClients ? (
          <Loading color={"black"} />
        ) : (
          <>
            <ListClients clients={selectedClients} actions={actions} />

            <button
              onClick={handleClearClientsSelected}
              type="button"
              className={style.clearClientsButton}
            >
              Limpar clientes selecionados
            </button>
          </>
        )}
      </main>

      {modalClearClientsOpened && (
        <ModalClearClients
          fetchData={getSelectedClients}
          selectedClients={selectedClients}
          open={modalClearClientsOpened}
          handleClose={() => {
            setModalClearClientsOpened(false);
          }}
        />
      )}
    </>
  );
}
