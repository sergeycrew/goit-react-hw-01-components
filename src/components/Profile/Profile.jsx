import PropTypes from 'prop-types';
import {Card, Description, Avatar, Name, Tag, Location, Statistics, StatisticItem, Label, Quantity} from './Profile.styled';
import defaultImg from './default.png'

const Profile = ({username, tag, location, avatar = defaultImg, stats}) => {
    return (
<Card>
    <Description>
        <Avatar src={avatar}/>
        <Name>{username}</Name>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
    </Description>
    <Statistics>
        <StatisticItem>
            <Label>Followers</Label>
            <Quantity>{stats.followers}</Quantity>
        </StatisticItem>
        <StatisticItem>
            <Label>Views</Label>
            <Quantity>{stats.views}</Quantity>
        </StatisticItem>
        <StatisticItem>
            <Label>Likes</Label>
            <Quantity>{stats.likes}</Quantity>
        </StatisticItem>
    </Statistics>
</Card>
    );
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile