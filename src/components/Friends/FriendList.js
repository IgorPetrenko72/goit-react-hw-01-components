import PropTypes from 'prop-types';
import FriendListItem from "./FriendListItem";
import css from './FriendList.module.css'

function FriendList({ friends }) {
    return (
        <ul className={css.friendList}>
            {friends.map(({ id, isOnline, avatar, name }) => (
                <li key={id}>
                    <FriendListItem
                    isOnline={isOnline}
                    avatar={avatar}
                    name={name}
                />
                </li>
               
            ))}       
        </ul>
    );
 }
FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        })
    )
    
};
export default FriendList;
