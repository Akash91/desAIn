import React from 'react';
import { fetchData, beforeFetchStart, afterFetchComplete } from '../actions';
import { listOfQueryUrls } from '../constants/urls';
import { connect } from 'react-redux';

class Gallery extends React.Component {

  componentDidMount(dispatch) {
    // const keywordObj = {
    //   sky,
    //   blue,
    //   fast,
    //   packaging,
    // }
    // const searchList = ["fresh natural packaging", "abstract fruit imagery", "packaging", "fresh juice", "fruit juice", "fruit packaging"];
    const searchList = ["Delicious Fruit Juice",
      "Organic Fruit Juice",
      "Sugar-free Fruit Juice", 
      "Healthy Fruit Juice",
      "Nutritional Fruit Juice",
      "Fresh Fruit Juice",
      "Natural Fruit Juice",
      
      "Refreshing Fruit Juice",
      "Revitalizing Fruit Juice",
      "Energizing Fruit Juice",
      "Feel Good Fruit Juice ",
      
      "Travellers Millennials",
      "Health-conscious Millennials",
      "Fun loving Millennials",
      "Educated Millennials",
      "Busy Millennials",
      
      "Modern Imagery",
      "Vibrant Imagery",
      "Bold Imagery",
      "Playful Imagery",
      "Economical Imagery",
      ];

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

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
