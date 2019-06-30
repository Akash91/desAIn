import React from 'react';
import { connect } from 'react-redux';
import { questionSet } from '../constants/brief';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Brief extends React.Component {
  

  render() {
    return (
      <div>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

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
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      // items: state.items,
      // hasErrored: state.itemsHasErrored,
      isGalleryLoading: state.isGalleryLoading,
      list: state.list,
  };
};

export default connect(mapStateToProps)(Brief);
