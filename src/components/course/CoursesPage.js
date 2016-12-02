import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import courseActions from "../../actions/courseActions";

class CoursesPage extends Component {
  constructor(props, context) {
    super(props, context);
    
    this.state = {
      course: { title: "" }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.titleOnChange = this.titleOnChange.bind(this);
    this.onClickSubmit = this.onClickSubmit.bind(this);
    // console.log(this.state.course);
  }
  
  handleSubmit(event) {
    event.preventDefault();
    this.textInput.value = this.textInput1.value;
  }
  
  titleOnChange(e) {
    const course = this.state.course;
    course.title = e.target.value;
    this.setState({course: course});
  }

  onClickSubmit() {
    this.props.dispatch(courseActions(this.state.course));
  }

  render() {
    return(
      <div>
        <h3>Courses</h3>
        <h4>Add Course</h4>
        <form onSubmit={this.handleSubmit}>
          <input type="text" 
          value={this.state.course.title} 
          ref={input => {this.textInput1 = input; }}
          onChange={this.titleOnChange} />

          <input type="submit" 
            className="btn btn-info" 
            onClick={this.onClickSubmit} />

          <input type="text" value={this.state.course.title} readOnly />
          <input type="text" ref={input => {this.textInput = input; }} readOnly />
        </form>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  console.log(state);
  return {
    courses: state.courses
  };
}

// function mapDispatchToProps() {

// }


export default connect(mapStateToProps)(CoursesPage);