import React, { Component } from "react";
import axios from "axios";

import SideBar from "../components/SideBar";

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: {
        firstName: "",
        lastName: ""
      }
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8000/teacher/AHnU7PuWMohJWEWZJbvd/settings")
      .then(res => {
        // console.log('*******************', Object.values(res.data)[0])
        this.setState({
          email: Object.values(res.data)[0][0],
          firstName: Object.values(res.data)[0][1],
          lastName: Object.values(res.data)[0][2]
        });
      })
      .catch(err => console.error("Settings AXIOS ERROR:", err));
  }

  render() {
    return (
      <div className="container">
        <div className="flex-container">
          <SideBar />
          <div className="block-container" id="setting">
            <h1 className="subheader">
              Testing that the Front End is Connecting to the Back End
            </h1>
            <p className="bodyText">
              This is immutable, for now it only directs to the settings of a
              specific teacher
            </p>
            <p className="bodyText">Email: {this.state.email}</p>
            <p className="bodyText">First Name: {this.state.firstName}</p>
            <p className="bodyText">Last Name: {this.state.lastName}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;
