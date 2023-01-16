import user from '../user.json';
import stats from '../data.json';
import friends from '../friends.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={stats} />
      <FriendList friends={friends} />
    </>
  );
};
