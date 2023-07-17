import { getAllPosts } from "@/lib/posts";
import PostPreview from "./PostPreview";

export default function Posts() {
    // getAllPosts로 반환되는 것은 matter로 인해 파싱된 metadata임.
    const postsMetadata = getAllPosts();
    return (
        <div className="flex flex-col text-center ">
            {
                postsMetadata.map(post => (
                    <div>
                        {/* post에 포함된 내용을 전부 params로 넘김 */}
                        <PostPreview key={post.id} {...post}/>
                    </div>
                ))
            }
        </div>
    )
}