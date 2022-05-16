import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  BedSharp,
  AirplaneSharp,
  CarSportSharp,
  CarSharp,
} from "react-ionicons";

import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerList">
        <div className="headerListItem active">
          <BedSharp
            color={"#ffffff"}
            title={"Bed"}
            height="35px"
            width="35px"
          />
          <span>Stays</span>
        </div>
        <div className="headerListItem">
          <AirplaneSharp
            color={"#ffffff"}
            title={"flights"}
            height="35px"
            width="35px"
          />
          <span>Flights</span>
        </div>
        <div className="headerListItem">
          <CarSportSharp
            color={"#ffffff"}
            title={"Car"}
            height="35px"
            width="35px"
          />
          <span>Car rentals</span>
        </div>
        <div className="headerListItem">
          <BedSharp
            color={"#ffffff"}
            title={"Bed"}
            height="35px"
            width="35px"
          />
          <span>Astractions</span>
        </div>
        <div className="headerListItem">
          <CarSharp
            color={"#ffffff"}
            title={"airpod taxi"}
            height="35px"
            width="35px"
          />
          <span>Airport taxis</span>
        </div>
      </div>
      <h1 className="headerTitle">Alifetime of discounts ? It's Genious.</h1>
      <p className="headerDesc">
        Get rewarded for your travels - unlock of instant savings of 10% or more
        with a free Lamabooking account
      </p>
      <button className="header Btn"> Sign in / Register</button>
    </div>
  );
};

export default Header;
