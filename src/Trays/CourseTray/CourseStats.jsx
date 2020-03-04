import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import { Card } from "react-bootstrap"

class CourseStats extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            GPA: null
        }
    }

    /** Scraping courtesy of DickyT */
    findGPA(data) {
        const reader = document.implementation.createHTMLDocument('reader');
        const fakeHtml = reader.createElement('html');
        fakeHtml.innerHTML = data;

        const avgGPAElem = fakeHtml.querySelector('#course-grades > p.center-text');
          if (avgGPAElem) {
            const matchRes = avgGPAElem.innerText.match(/Average GPA: ([0-9]\.[0-9]{2})/);
            if (matchRes && matchRes[1]) {
              const avgGPA = Number(matchRes[1]);
              if (!Number.isNaN(avgGPA)) {
                return avgGPA
              }
            }
        }

        return null
    }

    componentDidMount() {
        fetch("https://terpscheduler.herokuapp.com/https://planetterp.com/course/" + this.props.course_id.toUpperCase())
            .then(res => res.text())
            .then(data => {
                this.setState({ GPA: this.findGPA(data) })
            })
            .catch(console.log)
    }

    render() {
        return (
            <Card className="stat-card ml-auto">
                GPA: {this.state.GPA ? this.state.GPA : "N/A"}
            </Card>
        )
    }
}

CourseStats.propTypes = {
    course_id: PropTypes.string,
}

export default CourseStats