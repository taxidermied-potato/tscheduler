import React, { Component } from "react"
import {
   ButtonGroup,
   Button,
   Container,
   Form,
   Card,
   Row,
   Col
} from "react-bootstrap"
import OptionsTray from "./Trays/OptionsTray/OptionsTrayDriver"
import CourseTray from "./Trays/CourseTray/CourseTrayPresentational"
import ScheduleTray from "./Trays/ScheduleTray/ScheduleTrayPresentational"

class App extends Component {
   /** Sets up the initial UI state */
   constructor(props) {
      super(props)
      this.state = {
         valid: true,
         moreOptions: true,
         searchKey: "",
         courses: [],
         filteredCourses: []
      }
   }

   /** Searches through all courses for keyword */
   filterCourses() {
      this.setState({
         filteredCourses: this.state.courses.filter(
            course =>
               course.name
                  .toLowerCase()
                  .includes(this.state.searchKey.toLowerCase()) ||
               course.course_id
                  .toLowerCase()
                  .includes(this.state.searchKey.toLowerCase())
         )
      })
   }

   componentDidMount() {
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      fetch(proxyurl + "https://api.umd.io/v0/courses/list")
         .then(res => res.json())
         .then(data => {
            this.setState({ courses: data })
         })
         .catch(console.log)
   }

   render() {
      return (
         <div className="screen">
            <Container className="vh-100 p-0 float-left">
               <Row>
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
                  <OptionsTray open={this.state.moreOptions} />
               </Row>
               <div className="course-sched">
                  <CourseTray filteredCourses={this.state.filteredCourses} />
                  {/* <ScheduleTray /> */}
               </div>
            </Container>
         </div>
      )
   }
}

export default App
