import { connect } from "react-redux";
import ResizedImage from "../components/ResizedImage.js";
import { setImageProps } from "../actions";

const mapStateToProps = (state, ownProps) => {
  return {
    imageUrl: ownProps.imageUrl
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setImageProps: (imageUrl,clientHeight, clientWidth, realHeight, realWidth) => {
      dispatch(setImageProps(imageUrl,clientHeight, clientWidth, realHeight, realWidth));
    }
  }
}

const ImageContainer = connect(mapStateToProps, mapDispatchToProps)(ResizedImage);

export default ImageContainer;