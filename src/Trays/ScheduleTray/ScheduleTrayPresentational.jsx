import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import { Card, Row, Col, Button } from "react-bootstrap"

class ScheduleTrayPresentational extends PureComponent {
    renderCalendar() {
        let days = ['M', 'Tu', 'W', 'Th', 'F']

        return (
            <Row>
                <Col xs={1}>
                    <div className="x-axis-div"> &nbsp; </div>
                    <div className="pb-2 pr-2 y-axis-div" >8AM</div>
                    <div className="pb-2 pr-2 y-axis-div" >9AM</div>
                    <div className="pb-2 pr-2 y-axis-div" >10AM</div>
                    <div className="pb-2 pr-2 y-axis-div" >11AM</div>
                    <div className="pb-2 pr-2 y-axis-div" >12PM</div>
                    <div className="pb-2 pr-2 y-axis-div" >1PM</div>
                    <div className="pb-2 pr-2 y-axis-div" >2PM</div>
                    <div className="pb-2 pr-2 y-axis-div" >3PM</div>
                    <div className="pb-2 pr-2 y-axis-div" >4PM</div>
                    <div className="pb-2 pr-2 y-axis-div" >5PM</div>
                    <div className="pb-2 pr-2 y-axis-div" >6PM</div>
                    <div className="pb-2 pr-2 y-axis-div" >7PM</div>
                    <div className="pb-2 pr-2 y-axis-div" >8PM</div>
                </Col>
                {days.map(day => this.renderDay(day))}
            </Row>
        )
    }

    renderDay(day) {
        let times = [];

        for (var i = 0; i < 13; i++) {
            times.push(<div className="section-div" key={day + i} />)
        }

        return (
            <Col key={day}>
                <div className="x-axis-div">
                    {day}
                </div>
                {times}
            </Col>
        )
    }

    renderClassOverlay() {
        let days = ['M', 'Tu', 'W', 'Th', 'F']

        return (
            <Card className="overlay">
                <Row>
                    <Col xs={1}>
                    </Col>
                    {days.map(day => this.renderClasses(day))}
                </Row>
            </Card>
        )
    }

    renderClasses(day) {
        return (
            <Col key={"col" + day}>
                {this.props.sched.filter(course => course.meetings[0].days.includes(day)).map(course => this.renderClass(day, course))}
                {this.discussionHelper(day)}
            </Col>
        )
    }

    discussionHelper(day) {
        const filtered = this.props.sched.filter(course => course.meetings[1] !== undefined && course.meetings[1].days.includes(day))
        if (filtered.length > 0) {
            return (
                filtered.map(course => this.renderDiscussion(day, course))
            )
        }
        else {
            return null
        }
    }

    renderClass(day, course) {
        const start = this.simplifyTime(course.meetings[0].start_time)
        const end = this.simplifyTime(course.meetings[0].end_time)

        const classStyle = {
            top: (36 + start * 43).toString() + "px",
            height: ((end - start) * 43).toString() + "px",
        }

        return (
            <Card
                className="overlay-course p-1"
                style={classStyle}
                key={course.section_id + day}
            >
                {course.section_id}
                <br />
                {course.meetings[0].building} {course.meetings[0].room}
            </Card>
        )
    }

    renderDiscussion(day, course) {
        const start = this.simplifyTime(course.meetings[1].start_time)
        const end = this.simplifyTime(course.meetings[1].end_time)

        const classStyle = {
            top: (36 + start * 43).toString() + "px",
            height: ((end - start) * 43).toString() + "px",
        }

        return (
            <Card
                className="overlay-course p-1"
                style={classStyle}
                key={course.section_id + day}
            >
                {course.section_id}
                <br />
                {course.meetings[1].building} {course.meetings[1].room} - Discussion
            </Card>
        )
    }

    simplifyTime(t) {
        let hour = parseFloat(t.substring(0, t.indexOf(':')))
        let minutes = parseFloat(t.substring(t.indexOf(':') + 1, t.length - 2))
        let s = hour + (minutes / 60)

        if(t.includes('am') || hour === 12) {
            s -= 8
        }
        else if(t.includes('pm')) {
            s += 4
        }     

        return s
    }

    renderClassQueue() {
        return (
            <Row className="class-queue">
                {this.props.sched.map((course) => this.renderQueuedCourse(course))}
            </Row>
        )
    }

    renderQueuedCourse(course) {
        return (
            <Card className="pl-2 p-1 mx-2 back queue-card" key={"queued" + course.section_id}>
                <Row>
                    {course.section_id}
                    <Button
                        className="ml-1 pb-1 px-2 cancel-button"
                        variant="light"
                        type="button"
                        onClick={() => this.props.removeCourse(course.section_id)}
                        >
                        x
                </Button>
                </Row>
            </Card>
        )
    }

    render() {
        return (
            <Card className="float-right ml-5 mb-2 schedule" style={{ width: "65%", maxHeight: '76vh' }}>
                <Card.Body>
                    <Card className="schedule">
                        {this.renderCalendar()}
                        {this.renderClassOverlay()}
                    </Card>
                    <Card className="mt-2">
                        <Card.Header className="py-2">
                            Queued Courses
                        </Card.Header>
                        <Card.Body>
                            <div className="queue-wrapper">
                                <Button
                                    className="mx-2 px-2 queue-button"
                                    variant="danger"    
                                    type="button"
                                    onClick={() => this.props.sched.length > 0 ? this.props.sched.map(course => this.props.removeCourse(course.section_id)) : null}>
                                    clear schedule
                                </Button>
                                <Button
                                    className="mx-2 px-2 queue-button"
                                    variant="danger"
                                    type="button">
                                    export schedule
                                </Button>
                                {this.renderClassQueue()}
                            </div>
                        </Card.Body>
                    </Card>
                </Card.Body>
            </Card>
        )
    }
}

ScheduleTrayPresentational.propTypes = {
    sched: PropTypes.array.isRequired,
    removeCourse: PropTypes.func.isRequired,
}

export default ScheduleTrayPresentational
