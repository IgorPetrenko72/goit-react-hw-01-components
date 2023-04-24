import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

function TransactionHistory({ items }) {
    return (        
      <table className={css.transactionHistory}>
  <thead className={css.headersRow}>
    <tr className={css.values}>
      <th className={css.header}>Type</th>
      <th className={css.header}>Amount</th>
      <th className={css.header}>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map(({ id, type, amount, currency }) => (
    <tr key={id} className={css.values}>
      <td className={css.data}>{type}</td>
      <td className={css.data}>{amount}</td>
      <td className={css.data}>{currency}</td>
    </tr>))}
  </tbody>
</table>)     
 }

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.string.isRequired,  
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
})
  ),
}

export default TransactionHistory;