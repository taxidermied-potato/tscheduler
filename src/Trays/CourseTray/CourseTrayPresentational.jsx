import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import { Card } from "react-bootstrap"
import CourseCard from "./CoursePresentational"

class CourseTrayPresentational extends PureComponent {
    /** Renders all found courses */
    renderCourse(course) {
        return (
            <CourseCard course={course} key={course.course_id} />
        )
    }

    render() {
        return (
            <Card className="course-tray back shadow-right" style={{ width: "30%" }}>
                <Card.Body className="pl-0 pb-6">
                    {this.props.filteredCourses.map(course => this.renderCourse(course))}
                </Card.Body>
            </Card >
        )
    }
}

CourseTrayPresentational.propTypes = {
    filteredCourses: PropTypes.array.isRequired,
}

export default CourseTrayPresentational
