import React from 'react';
import { fetchData, beforeFetchStart, afterFetchComplete } from '../actions';
import { listOfQueryUrls } from '../constants/urls';
import { connect } from 'react-redux';

class Moodboard extends React.Component {

  componentDidMount(dispatch) {
    
    const { fetchImages, beforeFetchStart, afterFetchComplete} = this.props;
    const promiseUrlObj = [];
    Object.keys(listOfQueryUrls).forEach(eachSource => {
      searchList.forEach(eachListItem => {
        const urlObj = {
          url: listOfQueryUrls[eachSource]+eachListItem,
          source: eachSource,
        }
        promiseUrlObj.push(urlObj);
      });
    });
    beforeFetchStart(true);
    fetchImages(promiseUrlObj);
  }

  render() {
    const { list } = this.props;
    return (
      <div>
        <div className="gallery">
          {
            list && list.length > 0 ? 
              list.map(eachListItem => {
                return <img src={eachListItem.url}/>
              })
            : null
          }
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
      // items: state.items,
      // hasErrored: state.itemsHasErrored,
      isGalleryLoading: state.isGalleryLoading,
      list: state.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      fetchImages: (urls) => dispatch(fetchData(urls)),
      beforeFetchStart: (isGalleryLoading) => dispatch(beforeFetchStart(isGalleryLoading)),
      afterFetchComplete: (isGalleryLoading) => dispatch(afterFetchComplete(isGalleryLoading)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Moodboard);
