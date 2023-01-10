import css from "./Profile.module.css";
import { Info } from "components/Profile/Info/Info";
import { Statistics } from "./Statictics/Statistics";


export const Profile = ({profileInfo}) => {
    return <div className={css.profile}>
        <Info
            username={profileInfo.username}
            tag={profileInfo.tag}
            location={profileInfo.location}
            avatar={profileInfo.avatar}
        />
        <Statistics
            followers={profileInfo.stats.followers}
            views={profileInfo.stats.views}
            likes={profileInfo.stats.likes}
        />
    </div>;
}