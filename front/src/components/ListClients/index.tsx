import { IActionCard } from '../../types/models/IActionCard'
import { IClient } from '../../types/models/IClient'
import { ClientItem } from './ClientItem'
import style from './ListClients.module.scss'

type Props = {
  clients: IClient[]
  actions: IActionCard[]
}

export function ListClients({ clients, actions }: Props) {
  return (
    <>
      <ul className={style.listContainer}>
        {clients.map((client) => {
          return (
            <ClientItem key={client.id} clientData={client} actions={actions} />
          )
        })}
      </ul>
    </>
  )
}