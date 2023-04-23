import FriendListItem from "./FriendListItem";
import css from './FriendList.module.css'

function FriendList({ friends }) {
    return (
        <ul className={css.friendList}>
            {friends.map(({id, isOnline, avatar, name}) => (
                <FriendListItem
                    key={id}
                    isOnline={isOnline}
                    avatar={avatar}
                    name={name}
                />
            ))}       
        </ul>
    );
 }

export default FriendList;
