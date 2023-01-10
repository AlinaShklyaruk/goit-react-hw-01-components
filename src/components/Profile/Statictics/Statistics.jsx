import PropTypes from 'prop-types';
import css from "./Statistics.module.css";

export const Statistics = ({ followers, views, likes }) => {
    return <ul className={css.stats}>
        <li>
            <span className={css.label}>Followers</span>
            <span className={css.quantity}>{followers}</span>
        </li>
        <li>
            <span className={css.label}>Views</span>
            <span className={css.quantity}>{views}</span>
        </li>
        <li>
            <span className={css.label}>Likes</span>
            <span className={css.quantity}>{likes}</span>
        </li>
    </ul>;
};

Statistics.propTypes = {
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
};
