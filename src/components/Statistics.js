import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function Statistics({ title, children }) {
    return (
        <section>
            {title && <h2 className={css.title}>{title}</h2>}
            {children}
        </section>
    );
}

Statistics.protoTypes = {
    title: PropTypes.string,
};

export default Statistics;