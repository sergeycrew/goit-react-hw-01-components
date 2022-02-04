import PropTypes from 'prop-types';
import StatisticItem from './StatisticItem';
import {Section, Header, StatList} from './Statistics.styled';


const StatisticList = ({title, stats}) => {
    return (
<Section>
    {title && <Header>{title}</Header>}
<StatList>
    {stats.map (({id, label, percentage}) => (
        <StatisticItem
        id={id}
        label={label}
        percentage={percentage}
        />
    ))}
</StatList>
</Section>
    );
};

StatisticList.propTypes = {
title: PropTypes.string,
stats: PropTypes.arrayOf(
PropTypes.shape({
id: PropTypes.string,
label: PropTypes.string,
percentage: PropTypes.number,
}).isRequired
),
};

export default StatisticList

