import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import { Card } from "react-bootstrap"

class CourseTrayPresentational extends PureComponent {
    /** Renders all found courses */
    renderCourse(course) {
        return (
            <Card
                key={course.course_id}
                className="mb-2 front no-radius class-card"
            >
                <Card.Body className="p-3 pl-4">
                    <Card.Title> {course.name} </Card.Title>
                    <Card.Subtitle className="mb-1 text-muted">
                        {course.course_id}
                    </Card.Subtitle>
                    <Card.Text> {course.description} </Card.Text>
                </Card.Body>
            </Card>
        )
    }

    render() {
        return (
            <Card className="back shadow-right" style={{ width: "22rem" }}>
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
