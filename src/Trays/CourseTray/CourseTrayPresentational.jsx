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
                        This is a condensed, single page web app that streamlines the course selection process by combining the functionality of Testudo,
                        review aggregators, course GPA averages, and GUI based schedule previews.
                        <br /><br />
                        Built with React, Redux, and Gatsby. Data pulled from umd.io and PlanetTerp, through a Heroku CORS proxy. 
                </Card.Body>
                </Card>
                <Card className="mb-3">
                    <Card.Body>
                        v 0.3.0
                        <br /><br />
                        <ul>
                            <li>
                                Average GPAs + professor ratings added. 
                            </li>
                            <li>
                                Certain professors are missing ratings due to sharing last names. Easy fix, coming soon.
                            </li>
                            <li>
                                API is currently updating for Fall 2020. Will address advanced filtering then.
                            </li>
                        </ul>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        Q & A
                        <br /><br />
                        <ul>
                            <li>
                                Why am I back here after a search? - Unfortunately, UMD offers neither underwater basket weaving nor afoijaofiwfeo.
                            </li>
                            <li>
                                Why doesn't x feature work? - I am lazy and have yet to implement it.
                            </li>
                            <li>
                                Why are the sections blank? - The API is an old man. Patience is key.
                            </li>
                            <li>
                                The tortoise is cute. - I think so too.
                            </li>
                        </ul>
                    </Card.Body>
                </Card>
            </div>
        )
    }

    render() {
        return (
            <Card className="course-tray back shadow-right" style={{ width: "30%", maxHeight: '76vh' }}>
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
