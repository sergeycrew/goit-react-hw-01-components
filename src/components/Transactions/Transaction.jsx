import PropTypes from 'prop-types';
import {Line, LineItem} from './Transactions.styled';

const Transaction = ({id, type, amount, currency}) => (
<Line key={id}>
    <LineItem>{type}</LineItem>
    <LineItem>{amount}</LineItem>
    <LineItem>{currency}</LineItem>
</Line>
);

Transaction.propTypes = {
type: PropTypes.string.isRequired,
amount: PropTypes.string.isRequired,
currency: PropTypes.string.isRequired,
};

export default Transaction;