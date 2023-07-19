import Link from "next/link"

const PostPreview = (post:BlogPost) => {
    return (
        <div>
            <Link href={`/post/${post.id}`} className="font-bold text-xl hover:underline"><h2>{post.title}</h2></Link>
            <p>{post.subtitle}</p>
            <p>{post.date}</p>
        </div>
    )
}

export default PostPreview;