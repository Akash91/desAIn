import React from 'react';
import { connect } from 'react-redux';
import { questionSet } from '../constants/brief';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { setFormData } from '../actions';

class Brief extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      'form': {
        'questionName': {
        }
      },
    }
    this.pageRef = React.createRef();
  }
  handleChange(e, inpName, value) {
    const { form } = this.state;
    const { questionName } = form;
    if(e.target.type === "select-one") {
      form.questionName[inpName] = [e.target.value];
      this.setState(form);
    } else if(e.target.type === "checkbox"){
      const values = questionName[inpName];
      if(questionName[inpName] === undefined) {
        form.questionName[inpName] = [value];
        this.setState(form);
      } else {
        if(values.indexOf(value) === -1) {
          if(e.target.checked) {
            values.push(value);
          } else {
            values.splice(values.indexOf(value),1);
          }
        }
        form.questionName[inpName] = values;
        this.setState(form);
      }
    } else if(e.target.type === "radio"){
      debugger;
    }
  }

  handleClick(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.setFormData(this.state.form);
    this.props.moveTo('moodboard');
  }

  render() {
    return (
      <div ref={this.pageRef}>
        <Form>
          {
            questionSet.map(questionObj => {
              switch(questionObj.type) {
                case 'select': {
                  return(
                    <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Label>{questionObj.label}</Form.Label>
                      <Form.Control as="select" onChange={(e) => this.handleChange(e, questionObj.name)}>
                        {
                          questionObj.options.map(option => {
                            return(
                              <option value={option.value}>{option.label}</option>
                            );
                          })
                        }
                      </Form.Control>
                    </Form.Group>
                  )
                }
                case 'checkbox': {
                  return(
                    <div>
                      <Form.Label>{questionObj.label}</Form.Label>
                      {
                        questionObj.possibleValues.map(eachCheckbox => {
                          return <Form.Check 
                          type="checkbox"
                          label={eachCheckbox.label}
                          data-label={eachCheckbox.label}
                          onChange={(e) => this.handleChange(e, questionObj.name, eachCheckbox.value)}
                        />
                        })
                      }
                    </div>
                  );
                }
                case 'radio': {
                  return(
                    <div>
                      <Form.Label>{questionObj.label}</Form.Label>
                      {
                        questionObj.possibleValues.map(eachCheckbox => {
                          return <Form.Check 
                          type="radio"
                          label={eachCheckbox.label}
                          data-label={eachCheckbox.label}
                          name={eachCheckbox.radioName}
                          onChange={(e) => this.handleChange(e, questionObj.name, eachCheckbox.value)}
                        />
                        })
                      }
                    </div>
                  );
                }
              }
            })
          }
          <Button variant="primary" type="submit" onClick={this.handleClick.bind(this)}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      setFormData: (formData) => dispatch(setFormData(formData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Brief);
