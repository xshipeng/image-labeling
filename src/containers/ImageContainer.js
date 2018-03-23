import { connect } from "react-redux";
import ResizedImage from "../components/ResizedImage.js";
import { setImageProps } from "../actions";

const mapStateToProps = (state) => {
  return {
    imageId: state.imageProps.imageId,
    imageUrl: state.imageProps.imageUrl
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setImageProps: (clientHeight, clientWidth, realHeight, realWidth) => {
      dispatch(setImageProps(clientHeight, clientWidth, realHeight, realWidth));
    }
  }
}

const ImageContainer = connect(mapStateToProps, mapDispatchToProps)(ResizedImage);

export default ImageContainer;