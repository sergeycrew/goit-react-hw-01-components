import PropTypes from 'prop-types';
import {StatItem, Label, Percentage} from './Statistics.styled';

const StatisticItem = ({id, label, percentage}) => (
    <StatItem key={id}>
    <Label>{label}</Label>
    <Percentage>{percentage}%</Percentage>
</StatItem>
);

StatisticItem.propTypes = {
id: PropTypes.string,
label: PropTypes.string,
percentage: PropTypes.number,
}

export default StatisticItem;