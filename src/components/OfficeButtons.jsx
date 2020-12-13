import React, { Component } from 'react'
import { Link } from "react-router-dom";

class OfficeButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <section className="flex justify-center mt-16 helvetica-neue-italic">
          <button className="focus:outline-none uppercase hover:font-bold" id="about-button"><Link to="/about">about us</Link></button>
          <button className="focus:outline-none uppercase ml-6 hover:font-bold" id="office-button"><Link to="/office">office</Link></button>
        </section>
      </div>
    );
  }
}

export default OfficeButtons;