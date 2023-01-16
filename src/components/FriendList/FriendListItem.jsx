import PropTypes from 'prop-types';
import { Item, Status, Avatar, Name } from './FriendListItem.styled';

export const FriendListItem = ({ isOnline, avatar, name }) => (
  <Item>
    <Status variant={isOnline} />
    <Avatar src={avatar} alt="Friend avatar" />
    <Name>{name}</Name>
  </Item>
);

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
