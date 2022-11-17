import {Profile} from './Profile/Profile'
import user from '../utils/user.json'

import {Statistics} from './Statistics/Statistics'
import data from '../utils/data.json'

import {FriendList} from './Friends/FriendList.jsx'
import friends from '../utils/friends.json'

import {TransactionHistory} from './Transactions/Transactions.jsx'
import transactions from '../utils/transactions.json'

export const App = () => {
  return (
    <div
      style={{
        
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
    
      <Profile
        key={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title={'Upload stats'} stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
