import * as TYPES from './Types';

const initialState = {
  temp:[],
  isGalleryLoading: false,
};

export default(state = initialState, action) => {
  switch (action.type) {
    case TYPES.FETCH_IMAGES_STARTED: {
      return state;
    }
    case TYPES.FETCH_IMAGES_SUCCESS: {
      const imgObjs = action.imgObjs;
      const newObj = {...state};
      if(state.list === undefined) {
        newObj.emptyList = true;
        newObj.list = imgObjs;
      } else {
        newObj.list = state.list.concat(imgObjs);
      }
      return newObj;
    }
    case TYPES.BEFORE_FETCH_START: {
      const newObj = {...state};
      newObj.isGalleryLoading = action.isGalleryLoading
      return newObj;
    }
    case TYPES.AFTER_FETCH_COMPLETE: {
      const newObj = {...state};
      newObj.isGalleryLoading = action.isGalleryLoading
      return newObj;
    }
    default:
      return state;
  }
};
