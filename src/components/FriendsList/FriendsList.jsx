import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import css from "./FriendsList.module.css";

export const FriendsList = ({ friends }) => {
  return <section className={css.friends}>
    <ul className={css.friend_list}>
    {friends.map(({ id, avatar, name, isOnline }) => {
      return (<FriendListItem
        key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline} />)
    }
    )}
  </ul>
</section>
};



FriendsList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }))
};
