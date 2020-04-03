import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import { Button, Container, Form, Card, Row, Col } from "react-bootstrap"
import ReactTooltip from "react-tooltip"

class OptionsTrayPresentational extends PureComponent {
   render() {
      return (
         <Card className="front no-radius options-card">
            <Card.Body className="px-0 pt-2 pb-3">
               <Container className="px-0">
                  <Form className="m-0" onSubmit={e => e.preventDefault()}>
                     <Form.Group className="mb-0" controlId="advancedSearch">
                        <Row className="mb-2">
                           <Col className="pr-2">
                              <Form.Control
                                 type="text"
                                 placeholder=""
                                 size="sm"
                                 onChange={null}
                              />
                              <Form.Text className="text-muted">
                                 <span> Course ID </span>
                              </Form.Text>
                           </Col>
                           <Form.Check className="pt-1"></Form.Check>
                           <Form.Text className="text-muted mr-1 pt-1">
                              <span> Open Sect. </span>
                           </Form.Text>
                           <Col className="px-2">
                              <Form.Control
                                 type="text"
                                 placeholder="Fall 2019"
                                 size="sm"
                                 onChange={null}
                              />
                              <Form.Text className="text-muted">
                                 <span> Term </span>
                              </Form.Text>
                           </Col>
                           <Col xs={2} className="px-2">
                              <Form.Control
                                 type="text"
                                 placeholder=""
                                 size="sm"
                                 onChange={null}
                              />
                              <Form.Text className="text-muted">
                                 <span> Credits </span>
                              </Form.Text>
                           </Col>
                           <Col xs={3} className="pl-2">
                              <Form.Control
                                 type="text"
                                 placeholder=""
                                 size="sm"
                                 onChange={null}
                              />
                              <Form.Text className="text-muted">
                                 <span> Gen-Eds </span>
                              </Form.Text>
                           </Col>
                        </Row>
                        <Row className="mb-2">
                           <Col xs={5} className="pr-2">
                              <Form.Control
                                 type="text"
                                 placeholder="Last name, First name"
                                 size="sm"
                                 onChange={null}
                              />
                              <Form.Text className="text-muted">
                                 <span> Professors </span>
                              </Form.Text>
                           </Col>
                           <Col xs={2} className="px-2">
                              <Form.Control
                                 type="text"
                                 placeholder=">2.0"
                                 size="sm"
                                 onChange={null}
                              />
                              <Form.Text className="text-muted">
                                 <span> GPA </span>
                              </Form.Text>
                           </Col>
                           <Col className="pl-2">
                              <Form.Control
                                 type="text"
                                 placeholder="In-Person | Online | Blended"
                                 size="sm"
                                 onChange={null}
                              />
                              <Form.Text className="text-muted">
                                 <span> Delivery </span>
                              </Form.Text>
                           </Col>
                        </Row>
                        <Row className="mb-0">
                           <Col className="pr-0">
                              <Form.Text className="text-muted">
                                 <span> Times: </span>
                              </Form.Text>
                           </Col>
                           <Form.Check></Form.Check>
                           <Form.Text className="text-muted mr-2">
                              <span> M </span>
                           </Form.Text>
                           <Form.Check></Form.Check>
                           <Form.Text className="text-muted mr-2">
                              <span> Tu </span>
                           </Form.Text>
                           <Form.Check></Form.Check>
                           <Form.Text className="text-muted mr-2">
                              <span> W </span>
                           </Form.Text>
                           <Form.Check></Form.Check>
                           <Form.Text className="text-muted mr-2">
                              <span> Th </span>
                           </Form.Text>
                           <Form.Check></Form.Check>
                           <Form.Text className="text-muted mr-3">
                              <span> F </span>
                           </Form.Text>
                           <Col className="pl-1 pr-1">
                              <Form.Control
                                 className="time-form"
                                 type="text"
                                 placeholder="8:00"
                                 size="sm"
                                 onChange={null}
                              />
                           </Col>
                           <Form.Text className="text-muted pt-1">
                              <span> - </span>
                           </Form.Text>
                           <Col className="pl-1 pr-1">
                              <Form.Control
                                 className="time-form"
                                 type="text"
                                 placeholder="20:00"
                                 size="sm"
                                 onChange={null}
                              />
                           </Col>
                           <Button
                              className="ml-1 mr-2 px-2 options-button"
                              variant="danger"
                              type="button"
                              onClick={null}
                           >
                              <span> search </span>
                           </Button>
                           <Col className="p-0 m-0">
                              <Form.Text
                                 data-tip="Relevant queries support boolean logic and inequalities. 
                                 Valid symbols include | for or, & for and, as well as ! for not (use spaces around symbols).
                                 Course times are on a 24 hour scale."
                                 className="text-danger pt-1 cursor"
                              >
                                 <span> Help </span>
                              </Form.Text>
                              <ReactTooltip
                                 className="tip"
                                 place="bottom"
                                 type="error"
                                 border={false}
                              />
                           </Col>
                        </Row>
                     </Form.Group>
                  </Form>
               </Container>
            </Card.Body>
         </Card>
      )
   }
}

OptionsTrayPresentational.propTypes = {
   filter: PropTypes.string.isRequired,
}

export default OptionsTrayPresentational
