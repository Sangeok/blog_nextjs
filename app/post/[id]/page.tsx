import { getAllPosts } from "@/lib/posts";
import fs from "fs";
import matter from "gray-matter";
import Markdown from 'markdown-to-jsx';

const getPostContent = (id : string) => {
    const FilePath = 'posts';
    const file = `${FilePath}/${id}.md`;
    const content = fs.readFileSync(file,"utf8");
    const matterResult = matter(content);
    return matterResult;
}

// /post/[id] page는 동적으로 생성중이다. (dynamic routing이니까)
// 하지만 우리는 static page를 만듬으로써 runtime전에 해당 page들을 미리 만드는 blog를 만들 것이므로 static으로 바꿔야함.
export const generateStaticParams = async () => {
    const posts = getAllPosts();

    return posts.map(post=> {
        id : post.id;
    })
};

const Post = (props: any) => {
    // 현재 주소창에 있는 id위치에 있는 값을 가져옴.
    const id = props.params.id;

    // getPostContent로 반환된 값은 md파일 내용 그 자체임 하지만 object 형태로 되어있으므로 쓸 수 있음.
    const postData = getPostContent(id);
    
    return (
        <div className="py-10">
            <div className="font-bold ">{postData.data.title}</div>
            <h2>{postData.data.date}</h2>
            <article className="prose lg:prose-xl">
                <Markdown>{postData.content}</Markdown>
            </article>
        </div>
    )
}

export default Post;