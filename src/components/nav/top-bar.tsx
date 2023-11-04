import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import React, { useEffect, useState } from 'react';
import Styles from '../../styles/index/index.module.scss';
import { faBars, faLaptopCode, faShoePrints, faSmile, faTimes, faTools, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
library.add(fab, faTimes, faBars, faUserCircle, faTools, faLaptopCode, faShoePrints, faSmile)

export default function TopBar() {
    const [title, setTitle] = useState('');
    const [isOpenHumburgerMenu, setIsOpenHumburgerMenu] = useState(false);
    const [displayAnim, setDisplayAnim] = useState(false);
    const location = useLocation();

    const handleComplete = (url: string) => {
        setTitle(document.title);
        setIsOpenHumburgerMenu(false);
    };

    useEffect(() => {
        setTitle(document.title);
    }, []);

    useEffect(() => {
        handleComplete(location.pathname);
    }, [location]);

    const humburger = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, state: boolean) => {
        e.preventDefault();
        setIsOpenHumburgerMenu(state);
        setTimeout(() => {
            setDisplayAnim(state);    
        }, 10);
        
    };
    
    return (
        <div>
            <div className="text-center">{title}</div>
            {isOpenHumburgerMenu ? 
                <div className={Styles.humburgerMenu} onClick={e => humburger(e, false)}>
                    <div>
                        <FontAwesomeIcon icon={faTimes}/>
                    </div>
                </div>
                :
                <div className={Styles.humburgerMenu} onClick={e => humburger(e, true)}>
                    <div>
                        <FontAwesomeIcon icon={faBars}/>
                    </div>                    
                </div>
            }
            {isOpenHumburgerMenu && 
            <div className={`${Styles.humburgerMenuBody} ${displayAnim && Styles.displayAnim}`}>
                <Link to="/profile">
                    <div className={Styles.item}>
                        <FontAwesomeIcon icon={faUserCircle}/>
                        Profile
                    </div>                
                </Link>        
                <Link to="/skill-set">
                    <div className={Styles.item}>
                        <FontAwesomeIcon icon={faTools}/>
                        SkillSet
                    </div>
                </Link>
                <Link to="/past-work">
                    <div className={Styles.item}>
                        <FontAwesomeIcon icon={faLaptopCode}/>
                        PastWork
                    </div>
                </Link>
                <Link to="/activities">
                    <div className={Styles.item}>
                        <FontAwesomeIcon icon={faShoePrints}/>
                        Activities
                    </div>
                </Link>
                <Link to="/contact">
                    <div className={Styles.item}>
                        <FontAwesomeIcon icon={faSmile}/>
                        Contact
                    </div>
                </Link>
            </div>
            }

        </div>
    )
}

