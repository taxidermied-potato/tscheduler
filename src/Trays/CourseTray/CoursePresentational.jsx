import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import { Card, Accordion } from "react-bootstrap"
import SectionCard from "./SectionPresentational"
import CourseStats from "./CourseStats"

class CoursePresentational extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            showSections: false,
            courseData: {
                course_id: null,
                semester: "202001",
                name: null,
                dept_id: null,
                department: null,
                credits: "3",
                description: null,
                grading_method: [],
                gen_ed: [],
                core: [],
                relationships: {
                    coreqs: null,
                    prereqs: null,
                    formerly: null,
                    restrictions: null,
                    additional_info: null,
                    also_offered_as: null,
                    credit_granted_for: null
                },
                sections: []
            },
        }
    }

    componentDidMount() {
        this._isMounted = true;
        fetch("https://terpscheduler.herokuapp.com/https://api.umd.io/v0/courses/" + this.props.course.course_id + "?semester=202001")
            .then(res => res.json())
            .then(data => {
                this._isMounted && this.setState({ courseData: data })
            })
            .catch(console.log)
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    renderSubtitle() {
        return "Credits: " + this.state.courseData.credits +
            (this.state.courseData.gen_ed.length !== 0 ? (" / " + this.state.courseData.gen_ed.join(', ')) : "")
            + (this.state.courseData.relationships.prereqs !== null ? "\nPrereqs: " + this.state.courseData.relationships.prereqs : "")
            + (this.state.courseData.relationships.coreqs !== null ? "\nCoreqs: " + this.state.courseData.relationships.coreqs : "")
    }

    renderSection(section) {
        return (
            <SectionCard section={section} key={section} />
        )
    }

    render() {
        return (
            <Accordion>
                <Card
                    key={this.props.course.course_id}
                    className="mb-2 front no-radius class-card"
                >
                    <Accordion.Toggle className="p-3 pl-4" as={Card.Header} variant="link" eventKey={this.props.course.course_id} onClick={() => this.setState({ showSections: !this.state.showSections })}>
                        <Card.Title className="course-header">
                            <div>
                                <b>{this.props.course.course_id}</b> - {this.props.course.name}
                            </div>
                            <CourseStats course_id={this.props.course.course_id} />
                        </Card.Title>
                        <Card.Subtitle className="mb-1 text-muted">
                            {this.renderSubtitle()}
                        </Card.Subtitle>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={this.props.course.course_id}>
                        <Card.Body className="p-3 pl-4">
                            <Card.Text> {this.state.courseData.description !== null ? this.state.courseData.description : "Contact " + (this.state.courseData.dept_id !== null ? this.state.courseData.dept_id + " " : "") + "department for details."} </Card.Text>
                            {this.state.showSections ? this.state.courseData.sections.map(section => this.renderSection(section)) : ""}
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        )
    }
}

CoursePresentational.propTypes = {
    course: PropTypes.object,
}

export default CoursePresentational
