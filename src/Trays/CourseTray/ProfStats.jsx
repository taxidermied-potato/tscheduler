import React, { PureComponent } from 'react'
import PropTypes from "prop-types"
import { Card } from "react-bootstrap"

class ProfStats extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            rating: null
        }
    }

    /** Scraping courtesy of DickyT */
    findRating(data) {
        const reader = document.implementation.createHTMLDocument('reader');
        const fakeHtml = reader.createElement('html');
        fakeHtml.innerHTML = data;

        const avgRatingElem = fakeHtml.querySelectorAll('.row > .col-md-4 > h5')[1];
        if (avgRatingElem) {
            const matchRes = avgRatingElem.innerText.match(/Average rating: ([0-9]\.[0-9]{2})/);
            if (matchRes && matchRes[1]) {
                const avgRating = Number(matchRes[1]);
                if (!Number.isNaN(avgRating)) {
                    return avgRating
                }
            }
        }

        return null
    }

    componentDidMount() {
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    componentDidUpdate() {
        this._isMounted = true;
        const splitName = this.props.prof_name[0] !== undefined ? this.props.prof_name[0].split(' ') : []
        fetch("https://terpscheduler.herokuapp.com/https://planetterp.com/professor/" + splitName[splitName.length - 1])
            .then(res => res.text())
            .then(data => {
                if (data === "Professor not found.") {
                    fetch("https://terpscheduler.herokuapp.com/https://planetterp.com/professor/" + splitName[splitName.length - 1] + "_" + splitName[splitName.length - 2])
                        .then(res => res.text())
                        .then(data => {
                            this._isMounted && this.setState({ rating: this.findRating(data) })
                        })
                        .catch(console.log)
                }
                else {
                    this._isMounted && this.setState({ rating: this.findRating(data) })
                }
            })
            .catch(console.log)
    }

    render() {
        return (
            <div>
                {this.state.rating ?
                    <Card className="stat-card-rating px-1 ml-2 red">
                        {this.state.rating} ★
                    </Card> : null
                }
            </div>
        )
    }
}

ProfStats.propTypes = {
    prof_name: PropTypes.array,
}

export default ProfStats