import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLayoutEffect } from "react";
import Styles from "../styles/index/index.module.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Typewriter from "typewriter-effect";
library.add(fab, faGithub, faTwitter);

export default function Contact() {
  useLayoutEffect(() => {
    document.title = "Contact - My Portfolio";
  });

  return (
    <div>
      <h1 id="contact" className={Styles.headerText}>
        <Typewriter
          onInit={(typewriter) => {
            typewriter.changeDelay(60).typeString("Contact").start();
          }}
        />
      </h1>

      <div className={`row justify-content-center ${Styles.contact}`}>
        <div className="col-12 col-md-2">
          <div className={Styles.bigIcon}>
            <a
              href="https://twitter.com/TM_progapp"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FontAwesomeIcon icon={faTwitter} />
              <div>Twitter</div>
            </a>
          </div>
        </div>
        <div className="col-12 col-md-2">
          <div className={Styles.bigIcon}>
            <a
              href="mailto:tansantktk@hotmail.co.jp"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FontAwesomeIcon icon={faEnvelope} />
              <div>Mail</div>
            </a>
          </div>
        </div>
        <div className="col-12 col-md-2">
          <div className={Styles.bigIcon}>
            <a
              href="https://github.com/TansanMilMil"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FontAwesomeIcon icon={faGithub} />
              <div>GitHub</div>
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        お仕事関係のお問い合わせは、Twitterまたはメールにてどうぞ！
      </div>
    </div>
  );
}
