import { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import styles from './ImageGalleryItem.module.scss';

class ImageGalleryItem extends Component {
  idGen = () => shortid.generate();
  render() {
    const { images, openModal } = this.props;
    return images.map(image => (
      <li className={styles.ImageGalleryItem} key={this.idGen()}>
        <img
          src={image.webformatURL}
          alt={image.tags}
          className={styles['ImageGalleryItem-image']}
          id={image.id}
          onClick={openModal}
        />
      </li>
    ));
  }
}

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
  openModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
