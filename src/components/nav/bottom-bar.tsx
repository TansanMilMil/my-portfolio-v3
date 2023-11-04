import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AppVersion } from '../../constant/version';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCodeBranch, faExclamationTriangle, faSync, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
library.add(fab, faCodeBranch, faSync, faTimesCircle, faExclamationTriangle)

export default function BottomBar() {
    return (
        <div>
            <div className="row">
                <div className="col">
                    <div className="d-flex">
                        <div className="ps-3">
                            <a href="https://github.com/TansanMilMil/my-portfolio/tree/main" target="_blank">
                                <FontAwesomeIcon icon={faCodeBranch}/>
                                main
                            </a>
                        </div>
                        <div className="ps-4">
                            <FontAwesomeIcon icon={faSync}/>
                        </div>
                        <div className="ps-3">
                            <FontAwesomeIcon icon={faTimesCircle}/>0
                        </div>
                        <div className="ps-2">
                            <FontAwesomeIcon icon={faExclamationTriangle}/>0
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="d-flex justify-content-end">
                        <div className="me-4">UTF-8</div>
                        <div className="me-4">CRLF</div>
                        <div className="me-4">TypeScript React</div>
                        <div className="me-4">ver.{AppVersion}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

