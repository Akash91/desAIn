import React from 'react';

const questionSet = [
  {
    name: '',
    type: 'checkbox',
    possibleValues: ['high' ]
  },
]


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
            QUality:
          </label>
          <input type="checkbox" value="lfskan" name="test"/>
          <input type="checkbox" value="fsd" name="test"/>
        </div>
        
        <div>
          <label>
            String here:
          </label>
          <input type="radio" value="some" name="test"/>
          <input type="radio" value="value" name="test"/>
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
        <div className="gallery">
        </div>
      </div>
    );
  }
}

export default Brief;
