import React from 'react';
import { fetchData } from '../actions';
import { listOfQueryUrls } from '../constants/urls';
import { connect } from 'react-redux';
import { debuggerStatement } from '@babel/types';

class Gallery extends React.Component {

  componentDidMount() {
    // const keywordObj = {
    //   sky,
    //   blue,
    //   fast,
    //   packaging,
    // }
    const searchList = ["sky", "blue", "fast", "sky packaging", "fast packaging", "blue packaging"];
    Object.keys(listOfQueryUrls).forEach(eachSource => {
      searchList.forEach(eachListItem => {
        const urlObj = {
          url: listOfQueryUrls[eachSource]+eachListItem,
          source: eachSource,
        }
        this.props.fetchImages(urlObj);
      });
    });
  }

  render() {
    const { list } = this.props;
    debugger;
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
      // isLoading: state.itemsIsLoading
      list: state.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      fetchImages: (url) => dispatch(fetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
