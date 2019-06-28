import * as TYPES from './Types';
import { listOfQueryUrls } from './constants/urls';

const getReshotImg = (items) => {
  return items.data.map((eachItem) => {
    return {
      url: eachItem.attributes['standard-url'],
      source: 'RESHOT',
    }
  });
}

export function fetchData(urlObj) {
  const headerObj = {};
  if(urlObj.source === 'GRATISOGRAPHY') {
    headerObj['Authorization'] = 'Basic NmE4MGM1Yzg1NTRkOGFjNjU1ZmY6Y2MxODdjODliMWYwNjZhYmMwZWUyN2I4NDQwNGY1ZjNkOWJhMjU3NA==';
    headerObj['Origin'] = 'https://gratisography.com';
  }
  if(urlObj.source === 'UNSPLASH') {
    // headerObj['Access-Control-Allow-Origin'] = 'https://unsplash.com';
  } 
  else {
    headerObj['Access-Control-Allow-Origin'] = '*';
  }
  return (dispatch) => {
    dispatch(itemsIsLoading(true));
    // console.log(headerObj,'a');
    fetch(urlObj.url, {
      method: "GET",
      headers: headerObj,
    })
    .then((response) => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        dispatch(itemsIsLoading(false));
        return response;
    })
    .then((response) => response.json())
    .then((items) => dispatch(itemsFetchDataSuccess(items, urlObj.source)))
    .catch(() => dispatch(itemsHasErrored(true)));
  };
}

export function itemsHasErrored(bool) {
  return {
      type: TYPES.FETCH_IMAGES_FAIL,
      hasErrored: bool
  };
}
export function itemsIsLoading(bool) {
  return {
      type: TYPES.FETCH_IMAGES_STARTED,
      isLoading: bool
  };
}
export function itemsFetchDataSuccess(items, source) {
  let imgObjs = [];
  if(source === 'RESHOT') {
    imgObjs = getReshotImg(items);
  }
  return {
      type: TYPES.FETCH_IMAGES_SUCCESS,
      imgObjs
  };
}