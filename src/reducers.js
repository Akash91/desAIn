import * as TYPES from './Types';

const getSearchTerms = (formData) => {
  let searchTerms = [];
  searchTerms = searchTerms.concat(formData.questionName.emotionalBenefits.map((each) => {
    return each + ' ' + formData.questionName.aboutProduct;
  }));
  searchTerms = searchTerms.concat(formData.questionName.tangibleBenefits.map((each) => {
    return each + ' ' + formData.questionName.aboutProduct;
  }));
  for(let i=0;i<formData.questionName.groupType.length;i++) {
    for(let j=0;j<formData.questionName.ageGroup.length;j++) {
      searchTerms.push(formData.questionName.groupType[i]+' '+formData.questionName.ageGroup[j]);
    }
  }
  for(let i=0;i<formData.questionName.brandStand.length;i++) {
    searchTerms.push(formData.questionName.brandStand[i]+' imagery');
    searchTerms.push(formData.questionName.brandStand[i]+' packaging');
  }
  return searchTerms;
}

const initialState = {
  searchTermArray:[],
  isGalleryLoading: false,
  user: {},
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
        newObj.list = state.list.concat(
          imgObjs.filter((object) => !state.list.map((x) => x.id).includes(object.uniqueId)),
        );
        // newObj.list = state.list.concat(imgObjs);
      }
      newObj.loaded = true;
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
      console.log('from reducer: ',newObj.list.length, ' ; ');
      return newObj;
    }
    case TYPES.SET_FORM_DATA: {
      const newObj = {...state};
      newObj.formData = action.formData;
      newObj.searchTermArray = getSearchTerms(action.formData);
      return newObj;
    }
    default:
      return state;
  }
};
