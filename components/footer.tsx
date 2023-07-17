import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer:React.FC = () => {
    return (
        <div>
            <hr className="h-px"/>
            <div className="flex justify-center py-5">
                <span className="px-5"><a href="https://github.com/Sangeok"><FontAwesomeIcon icon={faGithub}/></a></span>
                <span className="px-5"><a href="https://www.instagram.com/sang.e0kkkk/"><FontAwesomeIcon icon={faInstagram}/></a></span>
            </div>
        </div>
    )
}

export default Footer;