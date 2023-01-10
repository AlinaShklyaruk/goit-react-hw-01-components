import PropTypes from 'prop-types';
import css from "./StatisticsData.module.css";

export const StatisticsData = ({id, label,percentage}) => {
    return <li className={css.item}>
        <span className={css.label}>{label}</span>
        <span className={css.percentage}>{percentage}</span>
    </li>;
}