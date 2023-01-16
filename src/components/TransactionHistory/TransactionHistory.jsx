import PropTypes from 'prop-types';
import { Transaction } from './Transaction';
import { Table, TableHead, TableHeadCell } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => (
  <Table>
    <TableHead>
      <tr>
        <TableHeadCell>Type</TableHeadCell>
        <TableHeadCell>Amount</TableHeadCell>
        <TableHeadCell>Currency</TableHeadCell>
      </tr>
    </TableHead>
    <tbody>
      {items.map(item => (
        <Transaction
          key={item.id}
          amount={item.amount}
          currency={item.currency}
          type={item.type}
          transaction={item}
        />
      ))}
    </tbody>
  </Table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
