import { useEffect, useState } from "react";
import Styles from "../../styles/index/index.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faChevronDown,
  faFolderOpen,
  faLaptopCode,
  faShoePrints,
  faSmile,
  faTools,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
library.add(
  fab,
  faChevronDown,
  faFolderOpen,
  faUserCircle,
  faTools,
  faLaptopCode,
  faShoePrints,
  faSmile,
);

export default function SideBar() {
  const [currentPath, setCurrentPath] = useState("");
  const location = useLocation();

  const handleComplete = (url: string) => {
    setCurrentPath(location.pathname);
    window.document.getElementById("main-component")?.scroll(0, 0);
  };

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, []);

  useEffect(() => {
    handleComplete(location.pathname);
  }, [location]);

  return (
    <div>
      <div className={Styles.explorer}>EXPLORER</div>
      <div>
        <div className={`${Styles.fontBold} ${Styles.item}`}>
          <div className="ps-2">
            <i className="fas fa-chevron-down pe-2" aria-hidden></i>MY-PORTFOLIO
          </div>
        </div>
        <div>
          <div className={Styles.item}>
            <div className="ps-3">
              <FontAwesomeIcon icon={faChevronDown} />
              <FontAwesomeIcon icon={faFolderOpen} />
              pages
            </div>
          </div>
          <div>
            <Link to="/profile">
              <div
                className={`${Styles.itemClickable} ${
                  currentPath === "/profile" ? Styles.open : ""
                }`}
              >
                <div className="ps-5">
                  <FontAwesomeIcon
                    icon={faUserCircle}
                    className={Styles.linkText}
                  />
                  Profile
                </div>
                <div className={Styles.itemLeftBorder}></div>
              </div>
            </Link>
            <Link to="/skill-set">
              <div
                className={`${Styles.itemClickable} ${
                  currentPath === "/skill-set" ? Styles.open : ""
                }`}
              >
                <div className="ps-5">
                  <FontAwesomeIcon icon={faTools} className={Styles.linkText} />
                  SkillSet
                </div>
                <div className={Styles.itemLeftBorder}></div>
              </div>
            </Link>
            <Link to="/past-work">
              <div
                className={`${Styles.itemClickable} ${
                  currentPath === "/past-work" ? Styles.open : ""
                }`}
              >
                <div className="ps-5">
                  <FontAwesomeIcon
                    icon={faLaptopCode}
                    className={Styles.linkText}
                  />
                  PastWork
                </div>
                <div className={Styles.itemLeftBorder}></div>
              </div>
            </Link>
            <Link to="/activities">
              <div
                className={`${Styles.itemClickable} ${
                  currentPath === "/activities" ? Styles.open : ""
                }`}
              >
                <div className="ps-5">
                  <FontAwesomeIcon
                    icon={faShoePrints}
                    className={Styles.linkText}
                  />
                  Activities
                </div>
                <div className={Styles.itemLeftBorder}></div>
              </div>
            </Link>
            <Link to="/contact">
              <div
                className={`${Styles.itemClickable} ${
                  currentPath === "/contact" ? Styles.open : ""
                }`}
              >
                <div className="ps-5">
                  <FontAwesomeIcon icon={faSmile} className={Styles.linkText} />
                  Contact
                </div>
                <div className={Styles.itemLeftBorder}></div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
