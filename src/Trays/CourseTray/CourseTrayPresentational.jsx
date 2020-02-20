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

    renderWelcome() {
        return (
            <div>
                <Card className="mb-3">
                    <Card.Header>
                        Welcome to TerpScheduler.
                </Card.Header>
                    <Card.Body>
                        This is a condensed web app that streamlines the course selection process by combining the functionality of Testudo,
                        review aggregators/GPA averages, and GUI based schedule previews.
                </Card.Body>
                </Card>
                <Card className="mb-3">
                    <Card.Body>
                        v 0.0.0
                        <br /><br />
                        <ul>
                            <li>
                                Schedule tray mocked up. Need to make underlying data structure less spaghetti before deploying.
                            </li>
                            <li>
                                Supports search via ID and name filters and parses courses and sections correctly.
                            </li>
                            <li>
                                Memory leak occurring less than 5% of the time. Huge success.
                            </li>
                        </ul>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        Working on
                        <br /><br />
                        <ul>
                            <li>
                                Rate my Professor + PlanetTerp data integration
                            </li>
                            <li>
                                Advanced filtering options will actually work.
                            </li>
                        </ul>
                    </Card.Body>
                </Card>
            </div>
        )
    }

    render() {
        return (
            <Card className="course-tray back shadow-right" style={{ width: "30%" }}>
                <Card.Body className="pl-0 pb-6">
                    {this.props.filteredCourses.length !== 0 ? this.props.filteredCourses.map(course => this.renderCourse(course)) : this.renderWelcome()}
                </Card.Body>
            </Card >
        )
    }
}

CourseTrayPresentational.propTypes = {
    filteredCourses: PropTypes.array.isRequired,
}

export default CourseTrayPresentational
