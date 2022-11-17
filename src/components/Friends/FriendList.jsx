import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({friends}) => {
  return(
    <ul>
     {friends.map(({id, isOnline, avatar, name})=>(
      <FriendListItem key={id} isOnline={isOnline} avatar={avatar} name={name} />
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

