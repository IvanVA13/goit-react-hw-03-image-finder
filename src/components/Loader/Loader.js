import Spinner from 'react-loader-spinner';
import styles from './Loader.module.scss';
import PropTypes from 'prop-types';

const Loader = props => {
  return (
    <Spinner
      className={styles.Spinner}
      type="BallTriangle"
      color="#00BFFF"
      height={80}
      width={80}
      visible={props.loaded}
    />
  );
};

Loader.propTypes = {
  loaded: PropTypes.bool.isRequired,
};

export default Loader;
