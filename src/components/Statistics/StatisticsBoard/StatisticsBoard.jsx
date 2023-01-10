import PropTypes from 'prop-types';
import css from "./StatisticsBoard.module.css";
import { StatisticsData } from "components/Statistics/StatisticsData/StatisticsData";

export const StatisticsBoard = ({ uploads }) => {
    return <ul className={css.stat_list}>
        {uploads.map(({ id, label, percentage }) => (
            <StatisticsData key={id}
                label={label}
                percentage={percentage}
            />
        )
        )}
    </ul>;
};