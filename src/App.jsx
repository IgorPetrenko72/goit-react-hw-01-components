import Profile from './components/Profile';
import Statistics from 'components/Statistics';
import ItemList from 'components/ItemList';
import Section from 'components/Section';
import FriendList from 'components/FriendList';
import TransactionHistory from 'components/TransactionHistory ';
import user from './user.json';
import data from './data.json';
import friends from './friends.json';
import transactions from './transactions.json';

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
      <Statistics  title="Upload stats">
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

