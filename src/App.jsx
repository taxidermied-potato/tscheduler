import React, { Component } from "react"
import {
   ButtonGroup,
   Button,
   Container,
   Form,
   Card,
   Row
} from "react-bootstrap"
import OptionsTray from "./trays/OptionsTray/OptionsTrayDriver"
import CourseTray from "./trays/CourseTray/CourseTrayPresentational"
import ScheduleTray from "./trays/ScheduleTray/ScheduleTrayDriver"
import { Helmet } from "react-helmet"

class App extends Component {
   /** Sets up the initial UI state */
   constructor(props) {
      super(props)
      this.state = {
         valid: true,
         moreOptions: true,
         searchKey: "",
         courses: [],
         filteredCourses: [],
         selectedSections: [],
         filterString: "https://terpscheduler.herokuapp.com/https://api.umd.io/v0/courses/list"
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
      fetch(this.state.filterString)
         .then(res => res.json())
         .then(data => {
            this.setState({ courses: data })
         })
         .catch(console.log)
   }

   render() {
      return (
         <div className="screen">
            <Helmet>
               <meta charSet="utf-8" />
               <title>TerpScheduler</title>
               <link rel="canonical" href="http://altyin.com/tscheduler" />
            </Helmet>
            <Container className="p-0 float-left">
               <Row>
                  <Card
                     className="red shadow heading-card"
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
                  <OptionsTray open={this.state.moreOptions} filter={this.state.filterString}/>
               </Row>
               <div className="course-sched">
                  <CourseTray filteredCourses={this.state.filteredCourses} />
                  <ScheduleTray />
               </div>
            </Container>
         </div>
      )
   }
}

export default App
