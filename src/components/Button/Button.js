import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const maxQuantityOnPage = 500;

class Button extends Component {
  render() {
    const { images, loadMore } = this.props;
    return (
      images.length > 0 &&
      images.length - 1 < maxQuantityOnPage && (
        <div className={styles['Button-container']}>
          <button type="button" onClick={loadMore} className={styles.Button}>
            Load more
          </button>
        </div>
      )
    );
  }
}

Button.propTypes = {
  images: PropTypes.array.isRequired,
};

export default Button;
