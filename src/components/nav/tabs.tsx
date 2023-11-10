import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Styles from "../../styles/index/index.module.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faLaptopCode,
  faShoePrints,
  faSmile,
  faTools,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
library.add(fab, faUserCircle, faTools, faLaptopCode, faShoePrints, faSmile);

export default function Tabs() {
  const [currentPath, setCurrentPath] = useState("");
  const location = useLocation();

  const handleComplete = (url: string) => {
    setCurrentPath(location.pathname);
  };

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, []);

  useEffect(() => {
    handleComplete(location.pathname);
  }, [location]);

  return (
    <div className={`d-flex`}>
      <Link to="/profile">
        <div
          className={`${Styles.tab} ${
            currentPath === "/profile" ? Styles.open : ""
          }`}
        >
          <FontAwesomeIcon icon={faUserCircle} className={Styles.linkText} />
          Profile
        </div>
      </Link>

      <Link to="/skill-set">
        <div
          className={`${Styles.tab} ${
            currentPath === "/skill-set" ? Styles.open : ""
          }`}
        >
          <FontAwesomeIcon icon={faTools} className={Styles.linkText} />
          SkillSet
        </div>
      </Link>

      <Link to="/past-work">
        <div
          className={`${Styles.tab} ${
            currentPath === "/past-work" ? Styles.open : ""
          }`}
        >
          <FontAwesomeIcon icon={faLaptopCode} className={Styles.linkText} />
          PastWork
        </div>
      </Link>

      <Link to="/activities">
        <div
          className={`${Styles.tab} ${
            currentPath === "/activities" ? Styles.open : ""
          }`}
        >
          <FontAwesomeIcon icon={faShoePrints} className={Styles.linkText} />
          Activities
        </div>
      </Link>

      <Link to="/contact">
        <div
          className={`${Styles.tab} ${
            currentPath === "/contact" ? Styles.open : ""
          }`}
        >
          <FontAwesomeIcon icon={faSmile} className={Styles.linkText} />
          Contact
        </div>
      </Link>
    </div>
  );
}
