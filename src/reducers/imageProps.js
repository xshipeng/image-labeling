const imageProps = (state = {}, action) => {
    switch (action.type) {
        case "SET_IMAGE_PROPS":
            return {
                ...state,
                clientWidth: action.clientWidth,
                clientHeight: action.clientHeight,
                realWidth: action.realWidth,
                realHeight: action.realHeight,
            }

        case "SET_NEXT_IMAGE":
            return{
                ...state,
                imageId: action.imageId,
                imageUrl: action.imageUrl,
            }

        default:
            return state
    }
}

export default imageProps;