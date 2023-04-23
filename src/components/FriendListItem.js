import PropTypes from 'prop-types';
import css from './FriendList.module.css';

function FriendListItem({ isOnline, avatar, name}) {
    return (        
            <li className={css.item}
            >
            <span className={isOnline ? `${css.status} ${css.true}` :  `${css.status} ${css.false}`}></span>
            <img className={css.avatar}
                    src={avatar}
                    alt="User avatar"
                    width={80} />
            <p className={css.name}>{name}</p>
            </li>)     
 }

FriendListItem.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default FriendListItem;