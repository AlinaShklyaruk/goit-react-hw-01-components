import PropTypes from 'prop-types';
import css from "./TransactionHistory.module.css";

export const TransactionHistory = ({ items }) => {
    return <section className={css.table_section}>
        <table className={css.transaction_history}>
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>
        <tbody>{items.map(({ id, type, amount, currency }) => (
            <tr key={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
            </tr>
        )
        )}
        </tbody>
    </table>
    </section>
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }))
};