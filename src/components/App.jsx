import { Profile } from "components/Profile/Profile";
import { Statistics } from "components/Statistics/Statistics";
import user from "../user.json";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile profileInfo={user} />
      <Statistics />
    </div>
  );
};