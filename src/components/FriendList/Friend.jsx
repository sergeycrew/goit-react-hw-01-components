import PropTypes from "prop-types";
import {Item, Status, Avatar, Name} from './FriendList.styled'

const Friend = ({id, avatar, name, isOnline}) => (
    <Item key={id}>
        <Status style={isOnline ? {backgroundColor: "green"} : {backgroundColor: "red"}}/>
        <Avatar src={avatar}/>
        <Name>{name}</Name>
    </Item>
);

Friend.propTypes = {
avatar: PropTypes.string.isRequired,
name: PropTypes.string.isRequired,
isOnline: PropTypes.bool.isRequired,
id: PropTypes.number.isRequired
}

export default Friend

