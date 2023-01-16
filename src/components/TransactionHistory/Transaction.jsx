import PropTypes from 'prop-types';
import { TableCell, TableRaw } from './Transaction.styled';

export const Transaction = ({ type, amount, currency }) => (
  <TableRaw>
    <TableCell>{type}</TableCell>
    <TableCell>{amount}</TableCell>
    <TableCell>{currency}</TableCell>
  </TableRaw>
);

Transaction.propTypes = {
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
