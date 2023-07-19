import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer:React.FC = () => {
    return (
        <div className="flex flex-col justify-center text-center">
            <hr className="h-px"/>
            <div className="flex justify-center py-5">
                <span className="px-5"><a href="https://github.com/Sangeok"><FontAwesomeIcon icon={faGithub}/></a></span>
                <span className="px-5"><a href="https://www.instagram.com/sang.e0kkkk/"><FontAwesomeIcon icon={faInstagram}/></a></span>
            </div>
            <div className="pb-5">
                <h1>© Copyright 2023 SangEok. All rights reserved.</h1>
            </div>
        </div>
    )
}

export default Footer;