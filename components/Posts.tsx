import { getAllPosts } from "@/lib/posts";
import PostPreview from "./PostPreview";
import PaginationControls from "./PaginationControls";

const Posts:React.FC<PageIndex> = ({start, end}) => {

    const postsMetadata:BlogPost[] = getAllPosts();
    
    // 지정된 size만큼 slice
    const currentPosts = postsMetadata.slice(start,end);

    return (
        <div className="flex">
            <div className="flex flex-col">
                {
                    currentPosts.map((post:BlogPost) => (
                        <div className="flex my-10">
                            {/* post에 포함된 내용을 전부 params로 넘김 */}
                            <PostPreview key={post.id} {...post}/>
                        </div>
                    ))
                }
                <PaginationControls totalPosts={postsMetadata.length}/>
                
            </div>
        </div>
    )
}

export default Posts;