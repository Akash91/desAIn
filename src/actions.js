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

const getUnsplashImg = (items) => {
  return items.results.map((eachItem) => {
    return {
      url: eachItem.urls['thumb'],
      source: 'UNSPLASH',
    }
  });
}

export function fetchData(urlObjs) {
  const headerObj = {};
  // if(urlObj.source === 'GRATISOGRAPHY') {
  //   headerObj['Authorization'] = 'Basic NmE4MGM1Yzg1NTRkOGFjNjU1ZmY6Y2MxODdjODliMWYwNjZhYmMwZWUyN2I4NDQwNGY1ZjNkOWJhMjU3NA==';
  //   headerObj['Origin'] = 'https://gratisography.com';
  // }
  // if(urlObj.source === 'UNSPLASH') {
    // headerObj['Access-Control-Allow-Origin'] = 'https://unsplash.com';
  // } 
  // else {
    headerObj['Access-Control-Allow-Origin'] = '*';
    headerObj['Access-Control-Allow-Credentials'] = 'true';
    headerObj['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS';
    // header("Access-Control-Allow-Origin: *");
    // header('Access-Control-Allow-Credentials: true');    
    // header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
  // }
  return (dispatch) => {
    dispatch(itemsIsLoading(true));
    Promise.all(urlObjs.map(urlObj => 
      fetch(urlObj.url, {
        method: "GET",
        contentType: 'application/json',
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
      .then((items) => {
        return dispatch(itemsFetchDataSuccess(items, urlObj.source))
      })
      .catch(() => dispatch(itemsHasErrored(true)))
    ))
    .then((fullList) => dispatch(afterFetchComplete(false)));
  };
}

export function itemsHasErrored(bool) {
  return {
      type: TYPES.FETCH_IMAGES_FAIL,
      hasErrored: bool
  };
}

export function beforeFetchStart(bool) {
  return {
      type: TYPES.BEFORE_FETCH_START,
      isGalleryLoading: bool
  };
}

export function afterFetchComplete(bool) {
  return {
      type: TYPES.AFTER_FETCH_COMPLETE,
      isGalleryLoading: bool
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
  console.log(items);
  if(source === 'RESHOT') {
    imgObjs = getReshotImg(items);
  }
  if(source === 'UNSPLASH') {
    imgObjs = getUnsplashImg(items);
  }
  return {
      type: TYPES.FETCH_IMAGES_SUCCESS,
      imgObjs
  };
}