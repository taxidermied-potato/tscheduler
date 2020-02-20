import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import { Card, Row, Col, Button } from "react-bootstrap"
import { connect } from "react-redux"

const Counter = ({ count, increment }) => (
    <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
    </div>
)

Counter.propTypes = {
    count: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
}

const mapStateToProps = ({ count }) => {
    return { count }
}

const mapDispatchToProps = dispatch => {
    return { increment: () => dispatch({ type: `INCREMENT` }) }
}

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter)

class ScheduleTrayPresentational extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            sched: [
                {
                    name: "Monday",
                    sections: 13,
                    times: []
                },
                {
                    name: "Tuesday",
                    sections: 13,
                    times: []
                },
                {
                    name: "Wednesday",
                    sections: 13,
                    times: []
                },
                {
                    name: "Thursday",
                    sections: 13,
                    times: []
                },
                {
                    name: "Friday",
                    sections: 13,
                    times: []
                }
            ],
        }
    }

    renderCalendar() {

        return (
            <Row className="calendar-div">
                <Col xs={1}>
                    <div className="p-2 y-axis-div"> &nbsp; </div>
                    <div className="pt-2 pr-2 pb-3 y-axis-div" >8AM</div>
                    <div className="pt-2 pr-2 pb-3 y-axis-div" >9AM</div>
                    <div className="pt-2 pr-2 pb-3 y-axis-div" >10AM</div>
                    <div className="pt-2 pr-2 pb-3 y-axis-div" >11AM</div>
                    <div className="pt-2 pr-2 pb-3 y-axis-div" >12PM</div>
                    <div className="pt-2 pr-2 pb-3 y-axis-div" >1PM</div>
                    <div className="pt-2 pr-2 pb-3 y-axis-div" >2PM</div>
                    <div className="pt-2 pr-2 pb-3 y-axis-div" >3PM</div>
                    <div className="pt-2 pr-2 pb-3 y-axis-div" >4PM</div>
                    <div className="pt-2 pr-2 pb-3 y-axis-div" >5PM</div>
                    <div className="pt-2 pr-2 pb-3 y-axis-div" >6PM</div>
                    <div className="pt-2 pr-2 pb-3 y-axis-div" >7PM</div>
                    <div className="pt-2 pr-2 pb-3 y-axis-div" >8PM</div>
                </Col>
                {this.state.sched.map(day => this.renderDay(day))}
            </Row>
        )
    }

    renderDay(day) {
        let times = [];

        for (var i = 0; i < day.sections; i++) {
            times.push(this.renderTime(day, i))
        }

        return (
            <Col key={day.name}>
                <div className="p-2 x-axis-div">{day.name}</div>
                {times}
            </Col>
        )
    }

    renderTime(day, time) {
        return (
            <div className="pt-2 pl-2 pb-3 calendar-div" key={day.name + time}> &nbsp; </div>
        )
    }

    render() {
        return (
            <Card className="float-right ml-5 mb-5 schedule" style={{ width: "65%", height: '77vh' }}>
                <Card.Body>
                    <Card className="schedule">
                        {this.renderCalendar()}
                    </Card>
                    <Card className="mt-2">
                        <Card.Header>
                            Queued Courses
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Button
                                    className="mx-2 px-2 header-button"
                                    variant="danger"
                                    type="button">
                                    clear schedule
                                </Button>
                                <Button
                                    className="mx-2 px-2 header-button"
                                    variant="danger"
                                    type="button">
                                    export schedule
                                </Button>
                                <Card className="p-1 mx-2 back">
                                    <Row>
                                        CMSC999-101
                                        <Button
                                            className="ml-1 pb-1 p-0 cancel-button"
                                            variant="light"
                                            type="button">
                                            x
                                        </Button>
                                    </Row>
                                </Card>
                                <Card className="p-1 mx-2 back">
                                    <Row>
                                        CMSC999-101
                                        <Button
                                            className="ml-1 pb-1 p-0 cancel-button"
                                            variant="light"
                                            type="button">
                                            x
                                        </Button>
                                    </Row>
                                </Card>
                                <Card className="p-1 mx-2 back">
                                    <Row>
                                        CMSC999-101
                                        <Button
                                            className="ml-1 pb-1 p-0 cancel-button"
                                            variant="light"
                                            type="button">
                                            x
                                        </Button>
                                        {/* <ConnectedCounter /> */}
                                    </Row>
                                </Card>
                            </Row>
                        </Card.Body>
                    </Card>
                </Card.Body>
            </Card>
        )
    }
}

ScheduleTrayPresentational.propTypes = {

}

export default ScheduleTrayPresentational
