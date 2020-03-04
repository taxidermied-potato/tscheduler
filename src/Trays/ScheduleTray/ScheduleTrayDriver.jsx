import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import ScheduleTrayPresentational from "./ScheduleTrayPresentational"
import { connect } from "react-redux"

class ScheduleTrayDriver extends PureComponent {
    render() {
        return (
            <ScheduleTrayPresentational sched={this.props.courses} removeCourse={this.props.removeCourse}/>
        )
    }
}

function mapStateToProps(state) {
    return { courses: state.courses }
}

function mapDispatchToProps (dispatch) {
    return { removeCourse: (id) => dispatch({ type: `REMOVE_COURSE`, item: id }) }
}

ScheduleTrayDriver.propTypes = {
    courses: PropTypes.array.isRequired,
    removeCourse: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleTrayDriver)