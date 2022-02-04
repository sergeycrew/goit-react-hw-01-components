import PropTypes from 'prop-types';
import Friend from './Friend';
import {List} from './FriendList.styled';

const FriendList = ({friends}) => {
    return (
        <List>
            {friends.map(({id, avatar, name, isOnline}) => (
            <Friend
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            id={id}
          />
            ))}  
        </List>
    );
};

FriendList.propTypes = {
friends: PropTypes.arrayOf(
  PropTypes.shape({
avatar: PropTypes.string.isRequired,
name: PropTypes.string.isRequired,
isOnline: PropTypes.bool.isRequired,
id: PropTypes.number.isRequired
  })
),
};

export default FriendList;