import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import { Card, Collapse } from "react-bootstrap"
import OptionsTrayPresentational from "./OptionsTrayPresentational"

class OptionsTrayDriver extends PureComponent {
   render() {
      return (
         <Collapse in={this.props.open}>
            <div>
               <Card className="back shadow-right options-menu">
                  <Card.Body className="py-0 px-2">
                     <OptionsTrayPresentational />
                  </Card.Body>
               </Card>
            </div>
         </Collapse>
      )
   }
}

OptionsTrayDriver.propTypes = {
   open: PropTypes.bool.isRequired,
}

export default OptionsTrayDriver
