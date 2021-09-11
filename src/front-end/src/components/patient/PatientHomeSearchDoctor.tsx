import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import "../../App.css";
import { ReactComponent as SearchIcon } from "../../icons/search.svg";
import { ReactComponent as Calendar } from "../../icons/calendar.svg";
import { ReactComponent as Globe } from "../../icons/globe.svg";
import { ReactComponent as Specialization } from "../../icons/specialization.svg";
import { ReactComponent as Person } from "../../icons/person.svg";

class PatientHomeSearchDoctor extends React.Component<RouteComponentProps> {
  handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined = async (
    e
  ) => {
    //alert("Searching for the Doctor......");
    e.preventDefault();
    this.props.history.push("/doctors");
  };

  render() {
    return (
      <div className="find-a-doctor">
        Find a Doctor
        <form onSubmit={this.handleSubmit}>
          <label className="find-a-doctor-input-field">
            &nbsp;&nbsp;
            <Person />
            &nbsp;&nbsp;
            <input
              type="text"
              placeholder="Name"
              className="find-a-doctor-input"
            />
          </label>

          <label className="find-a-doctor-input-field">
            &nbsp;&nbsp;
            <Specialization />
            &nbsp;&nbsp;
            <select className="find-a-doctor-input">
              <option value="general-practitioner">General Practitioner</option>
              <option value="cardiologist">Cardiologist</option>
              <option value="Allergist">Allergist</option>
            </select>
          </label>

          <label className="find-a-doctor-input-field">
            &nbsp;&nbsp;
            <Globe />
            &nbsp;&nbsp;
            <select className="find-a-doctor-input">
              <option value="sinhala">සිංහල​​</option>
              <option value="tamil">தமிழ்</option>
              <option value="english">English</option>
            </select>
          </label>

          <label className="find-a-doctor-input-field">
            &nbsp;&nbsp;
            <Calendar />
            &nbsp;&nbsp;
            <input
              type="date"
              placeholder="Date"
              className="find-a-doctor-input"
            />
          </label>

          <button type="submit" className="find-a-doctor-button">
            <SearchIcon />
            &nbsp; Search
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(PatientHomeSearchDoctor);
