const imageProps = (state = {}, action) => {
    switch (action.type) {
        case "SET_IMAGE_PROPS":
            return {
                imageUrl: action.imageUrl,
                clientWidth: action.clientWidth,
                clientHeight: action.clientHeight,
                realWidth: action.realWidth,
                realHeight: action.realHeight,
            }

        default:
            return state
    }
}

export default imageProps;