import Link from "next/link";
import IndicatorScroll from "./IndicatorScroll";

const Header:React.FC = () => {

    return (
        <nav 
            className="sticky top-0 backdrop-blur-md">
            <div className="flex justify-between p-10 font-play shadow">
                <div>
                    <Link href="/">SangEok</Link>
                </div>
                <div>
                    <span className="px-5"><Link href="/post">Post</Link></span>
                    <span className="px-5"><Link href="/about">About</Link></span>
                </div>
            </div>
            <IndicatorScroll />
            
        </nav>
    )
}

export default Header;