import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import Styles from '../styles/index/index.module.scss';
declare var Typewriter: any;

export default function Contact() {
    useEffect(() => {
        document.title = 'Contact - My Portfolio';

        new Typewriter('#contact', {
            strings: document.getElementById('contact')?.innerText,
            autoStart: true,
            delay: 60,
        })        
    }, []);

    return (
        <div>
            <h1 id="contact" className={Styles.headerText}>Contact</h1>

            <div className={`row justify-content-center ${Styles.contact}`}>
                <div className="col-12 col-md-2">
                    <div className={Styles.bigIcon}>
                        <a href="https://twitter.com/TM_progapp" target="_blank">   
                            <FontAwesomeIcon icon={["fab", "twitter"]}/>
                            <div>Twitter</div>
                        </a>
                    </div>
                </div>
                <div className="col-12 col-md-2">
                    <div className={Styles.bigIcon}>
                        <a href="mailto:tansantktk@hotmail.co.jp" target="_blank">
                            <FontAwesomeIcon icon={["fas", "envelope"]}/>
                            <div>Mail</div>
                        </a>                        
                    </div>
                </div>
                <div className="col-12 col-md-2">
                    <div className={Styles.bigIcon}>
                        <a href="https://github.com/TansanMilMil" target="_blank">
                            <FontAwesomeIcon icon={["fab", "github"]}/>
                            <div>GitHub</div>
                        </a>
                    </div>                    
                </div>
            </div>

            <div className="text-center mt-5">お仕事関係のお問い合わせは、Twitterまたはメールにてどうぞ！</div>            
        </div>
    )
}
