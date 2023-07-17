import fs from "fs";
import path from "path";
import matter from "gray-matter";

const FilePath = 'posts'
// posts Directory의 경로를 가져옴.
const postsDirectory = path.join(process.cwd(), FilePath);

export const getAllPosts = () => {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostData = fileNames.map((fileName)=> {
        // ".md"를 파일 이름으로부터 제거하여 id를 얻음.(.md만 제거한 파일 이름이 id가 됨.) => 이후 blogPost들에 대한 dynamic routing을 위함
        const id = fileName.replace(/\.md$/, '');
        
        // .md 파일을 string으로 읽음
        // 이에 위해 path.join을 통해 fullPath를 알아냄
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath,'utf8');

        // gray-matter를 이용하여 metadata를 파싱함.
        const matterReulst = matter(fileContents);

        const blogPost : BlogPost = {
            id,
            title : matterReulst.data.title,
            subtitle : matterReulst.data.subtitle,
            date : matterReulst.data.date,
        }

        return blogPost;
    })

    // 날짜순으로 sort해서 blogPost를 보여주도록 함.
    return allPostData.sort((a,b)=>a.date < b.date ? 1 : -1);

}