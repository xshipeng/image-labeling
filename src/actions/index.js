export const addLabel = (id, shape, points) => {
  return {
    type: "ADD_LABEL",
    id,
    shape,
    points
  }
}

export const setImageProps = (clientHeight, clientWidth, realHeight, realWidth) => {
  return {
    type: "SET_IMAGE_PROPS",
    clientHeight,
    clientWidth,
    realHeight,
    realWidth
  }
}

export const setNextImage=(imageId,imageUrl)=>{
  return{
    type:"SET_NEXT_IMAGE",
    imageId,
    imageUrl,
  }
}

export const removeLabels=()=>{
  return{
    type:"DELETE_LABELS",
  }
}