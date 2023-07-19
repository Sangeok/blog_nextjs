import { getAllPosts } from "@/lib/posts";
import PostPreview from "./PostPreview";

export default function Posts() {
    const postsMetadata:BlogPost[] = getAllPosts();
    return (
        <div className="flex">
            <div className="flex flex-col">
            {
                postsMetadata.map(post => (
                    <div className="flex my-10">
                        {/* post에 포함된 내용을 전부 params로 넘김 */}
                        <PostPreview key={post.id} {...post}/>
                    </div>
                ))
            }
            </div>
        </div>
    )
}