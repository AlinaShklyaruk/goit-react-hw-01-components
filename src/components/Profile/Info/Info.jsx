import PropTypes from 'prop-types';
import css from "./Info.module.css";

export const Info = ({ username, tag, location, avatar}) => {
    return <div className={css.description}>
        <img className={css.avatar} alt={`${username} avatar`} src={avatar} width="280"/>
        <p className={css.name}>{username}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
    </div>;
};

Info.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
};