import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import { Card, Row, Col } from "react-bootstrap"

class ScheduleTrayPresentational extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            sched: [
                {
                    name: "Monday",
                    sections: 12,
                    times: []
                },
                {
                    name: "Tuesday",
                    sections: 12,
                    times: []
                },
                {
                    name: "Wednesday",
                    sections: 12,
                    times: []
                },
                {
                    name: "Thursday",
                    sections: 12,
                    times: []
                },
                {
                    name: "Friday",
                    sections: 12,
                    times: []
                }
            ],
        }
    }

    renderCalendar() {
        return (
            <Row>
                <Col xs={1}>
                    <div>-</div>
                    <div>8AM</div>
                    <div>9AM</div>
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
                <div>{day.name}</div>
                {times}
            </Col>
        )
    }

    renderTime(day, time) {
        return (
            <div key={day.name + time}>{time}</div>
        )
    }

    render() {
        return (
            <Card className="float-right ml-5 mb-5 schedule" style={{ width: "65%", height: '75vh' }}>
                <Card.Body>
                    <Card className="front">
                        {this.renderCalendar()}
                    </Card>
                </Card.Body>
            </Card>
        )
    }
}

ScheduleTrayPresentational.propTypes = {

}

export default ScheduleTrayPresentational
