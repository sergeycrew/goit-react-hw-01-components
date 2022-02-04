import PropTypes from 'prop-types';
import Transaction from './Transaction';
import {Table, Line, TableHeader, TableBody, HeaderItem} from './Transactions.styled';

const TransactionList = ({items}) => (
<Table>
  <TableHeader>
    <Line>
      <HeaderItem>TYPE</HeaderItem>
      <HeaderItem>AMOUNT</HeaderItem>
      <HeaderItem>CURRENCY</HeaderItem>
    </Line>
  </TableHeader>
  <TableBody>
    {items.map(({id, type, amount, currency}) => (
        <Transaction 
        key={id}
        type={type}
        amount={amount}
        currency={currency}
        />
    ))}
  </TableBody>
</Table>
)

TransactionList.propTypes = {
items: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired
    })
),
};

export default TransactionList;