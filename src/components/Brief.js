import React from 'react';

class Brief extends React.Component {

  componentDidMount() {
  }

  render() {
    // const {} = this.props;
    return (
      <div>
        <div>
          <label>
            String here:
          </label>
          <input type="text"/>
        </div>

        <div>
          <label>
            String here:
          </label>
          <input type="checkbox" value="test" name="test"/>
          <input type="checkbox" value="test" name="test"/>
        </div>
        
        <div>
          <label>
            String here:
          </label>
          <input type="radio" value="some" name="test"/>
          <input type="raiod" value="value" name="test"/>
        </div>

        <div>
          <label>
            String here:
          </label>
          <select>
            <option value="test">test</option>
            <option value="hello">hello</option>
            <option value="fail">fail</option>
            <option value="success">success</option>
          </select>
        </div>

        <input type="text" />
        <div class="gallery">
        </div>
      </div>
    );
  }
}

export default Brief;
