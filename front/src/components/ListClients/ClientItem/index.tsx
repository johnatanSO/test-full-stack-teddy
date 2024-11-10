import { IClient } from '../../../types/models/IClient'
import formatCurrency from '../../../utils/formatCurrency'
import style from './ClientItem.module.scss'
import { IActionCard } from '../../../types/models/IActionCard'

type Props = {
  clientData: IClient
  actions: IActionCard[]
}

export function ClientItem({ clientData, actions }: Props) {
  return (
    <div className={style.clientItemContainer}>
      <h3>{clientData?.name || '--'}</h3>

      <p>Salário: {formatCurrency(clientData?.salary) || '00'}</p>

      <p>Empresa: {formatCurrency(clientData?.companyValue)}</p>

      <div className={`${style.actionsContainer} ${actions.length === 1 ? style.singleAction : ''}`}>
        {actions.map((action) => {
          return (
            <button onClick={() => {
              action.onClickFunction(clientData)
            }} type="button" title={action.title}>
              <img src={action.svgPath} alt="" />
            </button>
          )
        })}
      </div>
    </div>
  )
}