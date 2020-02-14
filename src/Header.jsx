import React, { PureComponent } from "react"
import PropTypes from "prop-types"

class Header extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            valid: true,
            searchKey: "",
        }
    }
    render() {
        return (
            <Card
                className="red shadow heading-card ml-3"
                style={{ width: "18rem" }}
            >
                <Card.Body>
                    <Card.Title className="mb-2">TerpScheduler</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        for reactjs
               </Card.Subtitle>
                    <Form
                        className="mt-4 mb-0"
                        onSubmit={e => e.preventDefault()}
                    >
                        <Form.Group controlId="formSearch">
                            <Form.Control
                                type="text"
                                placeholder="Class title, ID, etc."
                                onChange={e =>
                                    this.setState({ searchKey: e.target.value })
                                }
                            />
                            <Form.Text className="text-muted">
                                {this.state.valid
                                    ? "Enter a keyword"
                                    : "Query too short"}
                            </Form.Text>
                        </Form.Group>
                        <ButtonGroup>
                            <Button
                                className="mx-auto px-2 header-button"
                                variant="danger"
                                type="submit"
                                onClick={() => {
                                    if (this.state.searchKey.length > 2) {
                                        this.filterCourses()
                                        this.setState({ valid: true })
                                    } else {
                                        this.setState({ valid: false })
                                    }
                                }}
                            >
                                quick search
                     </Button>
                            <Button
                                className="mx-auto px-2 header-button"
                                variant="danger"
                                type="button"
                                onClick={() =>
                                    this.setState({
                                        moreOptions: !this.state.moreOptions
                                    })
                                }
                            >
                                {this.state.moreOptions
                                    ? "hide options"
                                    : "show options"}
                            </Button>
                        </ButtonGroup>
                    </Form>
                </Card.Body>
            </Card>
        );
    }
}

Header.propTypes = {
    courses: PropType.array.isRequired,
    filteredCourses: PropType.array.isRequired,
}