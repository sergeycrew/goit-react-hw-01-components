import Profile from 'components/Profile/Profile';
import StatisticList from 'components/Statistics/StatisticList';
import FriendList from 'components/FriendList/FriendList';
import TransactionList from 'components/Transactions/TransactionsList';
import {Container} from './App.styled'
import user from 'json/user.json';
import userData from 'json/data.json';
import friendList from 'json/friendList.json';
import transactions from 'json/transactions.json';

const App = () => {
    return (
        <Container>
        <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        />
        <StatisticList title="UPLOAD STATS" stats={userData} />
        <FriendList friends={friendList}/>
        <TransactionList items={transactions}/>
        </Container>
    );
};

export default App