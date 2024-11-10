import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from './EmptyItems.module.scss'
import { faSquareXmark } from '@fortawesome/free-solid-svg-icons'

type Props = {
  text: string
}

export function EmptyItems({text}: Props) {
  return (
    <section className={style.container}>
      <FontAwesomeIcon icon={faSquareXmark} className={style.icon} />
      {text || 'Nenhum item encontrado'}
    </section>
  )
}