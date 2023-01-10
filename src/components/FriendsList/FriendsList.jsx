import css from "./FriendsList.module.css";

export const FriendsList = ({friends}) => {
  return <ul className={css.friend_list}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <li className={css.item}
        key={id}>
        <span className={`${css.status} ${css[isOnline]}`}></span>
  <img className={css.avatar} src={avatar} alt={`${name} avatar`} width="48" />
        <p className={css.name}>{name}</p>
</li>
    ))}
</ul>
}