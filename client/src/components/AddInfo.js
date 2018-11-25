import React, { Component } from "react";
import axios from "axios";

class TextBoxes extends Component {
  state = {
    formData: {
      firstName: "",
      lastName: "",
      email: "",
      phone: ""
    }
  };

  handleInput = (event, name) => {
    const newFormData = {
      ...this.state.formData
    };
    newFormData[name] = event.target.value;

    this.setState({
      formData: newFormData
    });
  };

  submitForm = event => {
    event.preventDefault();

    const data = this.state;

    axios.post("/", data)
    .then(res => 
  
      { 
      console.log(res);
      console.log(res.data)
    }
    );
  };

  render() {
    console.log(this.state);
    return (
      <div className="container">
        <form onSubmit={this.submitForm}>
          <div className="row">
            <div className="col s6">
              <div className="row" />
              <div className="input-field col s6" />
              <i className="material-icons prefix" />
              <input
                id="icon_prefix"
                type="text"
                value={this.state.firstName}
                onChange={event => this.handleInput(event, "firstName")}
              />
              <label>First Name</label>
            </div>

            <div className="row">
              <div className="col s6">
                <div className="row" />
                <div className="input-field col s6" />
                <i className="material-icons prefix" />
                <input
                  id="icon_prefix"
                  type="text"
                  value={this.state.lastName}
                  onChange={event => this.handleInput(event, "lastName")}
                />
                <label>Last Name</label>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col s12">
              <div className="row" />
              <div className="input-field col s6" />
              <i className=""> </i>
              <input
                id="email"
                type="email"
                value={this.state.email}
                onChange={event => this.handleInput(event, "email")}
              />
              <label>Email</label>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <div className="row" />
              <div className="input-field col s6" />
              <i className="" />
              <input
                id="icon_telephone"
                type="tel"
                value={this.state.phone}
                onChange={event => this.handleInput(event, "phone")}
              />

              <label>Phone Number</label>
            </div>
          </div>

          <button className="form btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default TextBoxes;
