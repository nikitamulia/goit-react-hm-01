import PropTypes from 'prop-types';
import styles from './Friends.module.css'

export const FriendList = ({friends}) => {
  return(
    <ul className={styles.friendList}>
      {friends.map(({id, isOnline, avatar, name})=>(
        <li className={styles.item} key = {id}>
          <span className={isOnline ? styles.statusOnline : styles.statusOfline}>{isOnline}</span>
          <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
          <p className={styles.name}>{name}</p>
        </li>
      ))}
    </ul>
  )
}
FriendList.propTypes = {
  friends: PropTypes.shape({
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })
}

