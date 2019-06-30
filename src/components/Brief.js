import React from 'react';

const questionSet = [
  {
    label: 'What is your product?',
    name: 'aboutProduct',
    type: 'text',
    possibleValues: ['high' ]
  },
  {
    label: 'What is your product?',
    name: 'aboutProduct',
    type: 'text',
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
        {/* <Form>
          {
            questionSet.map((eachSet) => {
              if(eachSet.type === '') {
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>eachSet.label</Form.Label>
                  <Form.Control type="text" placeholder="" name="" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
              }
            })
          }

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicChecbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form> */}
      </div>
    );
  }
}

export default Brief;
