export default function formatCurrency(value: number) {
  return (value || 0).toLocaleString('pt-br', { 
    style: 'currency', 
    currency: 'BRL',
  })
}