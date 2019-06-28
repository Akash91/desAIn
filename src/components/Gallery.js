import React from 'react';

class Gallery extends React.Component {

  componentDidMount() {
    ProjectApi.getCategories().then((res) => {
      this.setState({
        categories: res.data.categories,
      });
    }, (error) => {
      handleHttpError(error, {
        default: {
          message: 'Failed to load Categories',
        },
      });
    });
  }

  render() {
    // const {} = this.props;
    return (
      <div>
        <input type="text" />
        <div class="gallery">
        </div>
      </div>
    );
  }
}

export default Gallery;
