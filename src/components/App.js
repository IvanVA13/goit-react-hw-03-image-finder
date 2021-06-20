import { Component } from 'react';
import api from './services/api';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import ImageGalleryItem from './ImageGalleryItem';
import Loader from './Loader';
import Modal from './Modal';
import Button from './Button';

class App extends Component {
  state = {
    images: [],
    searchReq: '',
    page: 1,
    loaded: false,
    modalIsOpen: false,
    targetImage: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchReq } = this.state;
    if (searchReq !== prevState.searchReq) {
      this.getImages();
    }
  }

  getImages = () => {
    this.setState({ loaded: true });
    api(this.state)
      .then(images =>
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        })),
      )
      .catch(error => console.log(error))
      .finally(() => {
        this.setState({ loaded: false });
        this.scrollWindow();
      });
  };

  scrollWindow = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  onSubmit = searchReq => {
    this.setState({ searchReq, images: [], page: 1 });
  };

  toggleModal = () => {
    this.setState(prevState => ({
      modalIsOpen: !prevState.modalIsOpen,
    }));
  };

  openModal = e => {
    const targetImage = this.state.images.find(
      image => image.id === Number(e.target.id),
    );
    this.setState({
      targetImage,
    });
    this.toggleModal();
  };

  render() {
    const { images, loaded, modalIsOpen, targetImage } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery>
          <Loader loaded={loaded} />
          <ImageGalleryItem images={images} openModal={this.openModal} />
        </ImageGallery>
        <Button images={images} loadMore={this.getImages} />
        {modalIsOpen && (
          <Modal closeModal={this.toggleModal}>
            <img src={targetImage.largeImageURL} alt={targetImage.tags} />
          </Modal>
        )}
      </>
    );
  }
}

export default App;
