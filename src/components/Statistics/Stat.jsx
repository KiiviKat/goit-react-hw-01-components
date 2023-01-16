import PropTypes from 'prop-types';
import { Item, Label, Percentage } from './Stat.styled';

export const Stat = ({ id, label, percentage }) => (
  <Item key={id}>
    <Label>{label}</Label>
    <Percentage>{percentage}%</Percentage>
  </Item>
);

Stat.propTypes = {
  stat: PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
