import css from "./Profile.module.css";
import { Info } from "components/Profile/Info/Info";
import { Interactions } from "components/Profile/Interactions/Interactions";


export const Profile = ({profileInfo}) => {
    return <section className={css.profile}>
        <Info
            username={profileInfo.username}
            tag={profileInfo.tag}
            location={profileInfo.location}
            avatar={profileInfo.avatar}
        />
        <Interactions
            followers={profileInfo.stats.followers}
            views={profileInfo.stats.views}
            likes={profileInfo.stats.likes}
        />
    </section>;
}