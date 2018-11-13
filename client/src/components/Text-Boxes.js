import React from "react";

const TextBoxes = () => {
  return (
    <div className='container'>
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
            <i className=" "></i>
            <input id="icon_prefix" type="text" className="validate" />
            <label>Last Name</label>
          </form>
        </div>
      </div>

      <div className="row">
        <form className="col s12">
          <div className="row" />
          <div className="input-field col s6" />
          <i className="material-icons prefix fas fa-at"> </i>
          <input id="email" type="email" className="validate" />
          <label>Email</label>
        </form>
      </div>
      <div className="row">
        <form className="col s12">
          <div className="row" />
          <div className="input-field col s6" />
          <i className="material-icons prefix fas fa-mobile-alt"></i>
          <input id="icon_telephone" type="tel" className="validate" />
          <label>Phone Number</label>
        </form>
      </div>
    </div>
  );
};

export default TextBoxes;
