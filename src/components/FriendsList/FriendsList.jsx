import PropTypes from 'prop-types';
import css from "./FriendsList.module.css";

export const FriendsList = ({ friends }) => {
  return <section className={css.friends}><ul className={css.friend_list}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <li className={css.item}
        key={id}>
        <span className={isOnline ? css.online : css.offline}></span>
        <img className={css.avatar} src={avatar} alt={`${name} avatar`} width="48" />
        <p className={css.name}>{name}</p>
      </li>
    ))}
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
