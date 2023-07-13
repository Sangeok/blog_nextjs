import Link from "next/link";

const Header:React.FC = () => {
    return (
        <div className="flex justify-between p-10 font-play shadow">
            <div>
                <Link href="/">Code</Link>
            </div>
            <div>
                <span className="px-5"><Link href="/post">Post</Link></span>
                <span className="px-5"><Link href="/about">About</Link></span>
            </div>
        </div>
    )
}

export default Header;