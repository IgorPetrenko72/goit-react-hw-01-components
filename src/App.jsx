import Profile from './components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import ItemList from 'components/Statistics/ItemList';
import Section from 'components/Section/Section';
import FriendList from 'components/Friends/FriendList';
import TransactionHistory from 'components/Transaction/TransactionHistory ';
import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

export const App = () => {
  return (
    <div>
    <Section title={'1 - Профиль социальной сети'}>
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      /> 
    </Section>
      
    <Section title={'2- Секция статистики'}>
        <Statistics title="Upload stats">
        <ItemList items={data}/>
      </Statistics>  
    </Section>  
      
      <Section title={'3 - Список друзей'}>
        <FriendList friends={friends}/>     
      </Section>  

    <Section title={'4 - История транзакций'}>
        <TransactionHistory items={transactions} />
    </Section>    
     
    </div>
  );
};

