import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function ItemList({ items }) {
    return (
        <ul className={css.statList}>
        {items.map(item => (
            <li
                className={css.item}
                key={item.id}
                style={{ backgroundColor: randomHexColor() }}>
                <span className={css.label}>{item.label}</span>
                <span className={css.percentage}>{ item.percentage }%</span>
            </li>))}
        </ul>
    );
 }

ItemList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    )
};

function randomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export default ItemList;
