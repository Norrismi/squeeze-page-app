import React, { Component } from "react";

class TextBoxes extends Component {

  submitForm = (event) => {
    event.prevent.default()
  }



  render() {
    return (
      <div className="container">
        <form onSubmit={this.submitForm}>
          <div className="row ">
            <form className="col s6">
              <div className="row" />
              <div className="input-field col s6" />
              <i className="material-icons prefix" />
              <input id="icon_prefix" type="text" className="validate" />
              <label>First Name</label>
            </form>

            <div className="row">
              <form className="col s6">
                <div className="row" />
                <div className="input-field col s6" />
                <i className="material-icons prefix" />
                <input id="icon_prefix" type="text" className="validate" />
                <label>Last Name</label>
              </form>
            </div>
          </div>

          <div className="row">
            <form className="col s12">
              <div className="row" />
              <div className="input-field col s6" />
              <i className=""> </i>
              <input id="email" type="email" className="validate" />
              <label>Email</label>
            </form>
          </div>
          <div className="row">
            <form className="col s12">
              <div className="row" />
              <div className="input-field col s6" />
              <i className="" />
              <input id="icon_telephone" type="tel" className="validate" />
              <label>Phone Number</label>
            </form>
          </div>
        </form>
      </div>
    );
  }
}

export default TextBoxes;
