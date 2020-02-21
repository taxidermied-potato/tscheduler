import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import { Card, Button } from "react-bootstrap"
import { connect } from "react-redux"

const Adder = ({ add }) => (
    <div>
        <Button className="px-2 add-button"
            variant="danger"
            type="button"
            onClick={add}>
            add
        </Button>
    </div>
)

Adder.propTypes = {
    add: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return { add: () => dispatch({ type: `ADD_COURSE`, item: ownProps.course }) }
}

const ConnectedCounter = connect(null, mapDispatchToProps)(Adder)

class SectionPresentational extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            sectionData: {
                course: null,
                section_id: null,
                semester: null,
                number: null,
                seats: null,
                meetings: [],
                open_seats: null,
                waitlist: null,
                instructors: []
            },
        }
    }

    componentDidMount() {
        this._isMounted = true;
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        fetch(proxyurl + "https://api.umd.io/v0/courses/sections/" + this.props.section)
            .then(res => res.json())
            .then(data => {
                this._isMounted && this.setState({ sectionData: data })
            })
            .catch(console.log)
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    renderMeetings(meeting) {
        return (<span key={"" + meeting.days + meeting.building + meeting.room.toString() + meeting.start_time}>
            {meeting.days} {meeting.start_time} - {meeting.end_time} @ {meeting.building} {meeting.room.toString()} {meeting.classtype !== "" ? ": " + meeting.classtype : ""}
            <br />
        </span>)
    }

    render() {
        return (
            <Card className="mb-1 no-radius section-card">
                <Card.Header>
                    <p className="float-left">
                        {this.state.sectionData.number} - {this.state.sectionData.instructors.join(', ')}
                    </p>
                    <p className="float-right text-muted">
                        Seats (Total: {this.state.sectionData.seats}, Open: {this.state.sectionData.open_seats}, Waitlist: {this.state.sectionData.waitlist})
                    </p>
                    <br />
                    <p className="float-left text-muted">
                        {this.state.sectionData.meetings.map(meeting => this.renderMeetings(meeting))}
                    </p>
                    <div className="float-right">
                        <ConnectedCounter course={this.state.sectionData.section_id}/>
                    </div>
                </Card.Header>
            </Card>
        )
    }
}

SectionPresentational.propTypes = {
    section: PropTypes.string,
}

export default SectionPresentational
