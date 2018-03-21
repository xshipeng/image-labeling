export const addLabel = (id, shape, points) => {
  return {
    type: "ADD_LABEL",
    id: id,
    shape: shape,
    points: points
  }
}

export const setImageProps = (imageUrl, clientHeight, clientWidth, realHeight, realWidth) => {
  return {
    type: "SET_IMAGE_PROPS",
    imageUrl: imageUrl,
    clientHeight: clientHeight,
    clientWidth: clientWidth,
    realHeight: realHeight,
    realWidth: realWidth
  }
}