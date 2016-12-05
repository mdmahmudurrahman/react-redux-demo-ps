import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import createCourse from "../../actions/courseActions";

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
  }
  
  titleOnChange(e) {
    const course = this.state.course;
    course.title = e.target.value;
    this.setState({course: course});
  }

  onClickSubmit() {
    this.props.createCourse(this.state.course);
  }

  courseRow(course, index) {
    return (<div key={index}>{course.title}</div>);
  }

  render() {
    return(
      <div> 
        <h3>Courses</h3>
        {this.props.courses.map(this.courseRow)}
        <h4>Add Course</h4>
        <form onSubmit={this.handleSubmit}>
          <input type="text" 
          value={this.state.course.title} 
          ref={input => {this.textInput1 = input; }}
          onChange={this.titleOnChange} />

          <input type="submit" 
            className="btn btn-info" 
            onClick={this.onClickSubmit} />
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

function mapDispatchToProps(dispatch) {
  return {
    createCourse: bindActionCreators(createCourse, dispatch)
  };
}

CoursesPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired,
  createCourse: PropTypes.func.isRequired
};


export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);