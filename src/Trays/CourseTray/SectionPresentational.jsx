import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import { Card } from "react-bootstrap"

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
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        fetch(proxyurl + "https://api.umd.io/v0/courses/sections/" + this.props.section)
            .then(res => res.json())
            .then(data => {
                this.setState({ sectionData: data })
                console.log(this.state.sectionData)
            })
            .catch(console.log)
    }

    renderMeetings(meeting) {
        return (<div key={meeting}>     
            {/* {meeting.days} */}
        </div>)
    }

    render() {
        return (
            <Card className="mb-1 front no-radius section-card">
                <Card.Header>
                    <p className="float-left">
                        {this.state.sectionData.number} - {this.state.sectionData.instructors.join(', ')}
                        <br />
                        {/* {this.state.sectionData.meetings.map(meeting => this.renderMeetings())} */}
                    </p>
                    <p className="float-right">
                        Seats (Total: {this.state.sectionData.seats}, Open: {this.state.sectionData.open_seats}, Waitlist: {this.state.sectionData.waitlist})
                    </p>
                </Card.Header>
            </Card>
        )
    }
}

SectionPresentational.propTypes = {
    section: PropTypes.string,
}

export default SectionPresentational
