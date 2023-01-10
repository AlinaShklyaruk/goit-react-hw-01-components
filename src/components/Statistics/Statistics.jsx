import css from "./Statistics.module.css";
import data from "../../data.json";
import { StatisticsTitle } from "components/Statistics/StatisticsTitle/StatisticsTitle";
import { StatisticsData } from "components/Statistics/StatisticsData/StatisticsData";
import { StatisticsBoard } from "./StatisticsBoard/StatisticsBoard";

export const Statistics = () => {
    return <section className={css.statistics}>
        <StatisticsTitle text="Upload stats" />
        <StatisticsBoard uploads={data} />
    </section>
}