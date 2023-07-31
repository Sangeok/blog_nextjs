import Posts from "@/components/Posts";

export default function Home({searchParams}:{
    searchParams: {
        [key:string]:string | string[] | undefined
    }
}) {
    // page의 값이 없으면 1
    const page = searchParams['page'] ?? '1';
    const perPage = searchParams['perPage'] ?? '5';
    
    // index
    const start:number = (Number(page)-1) * Number(perPage);
    const end:number = start + Number(perPage);
    
    return (
      <div className="py-10 flex justify-center">
        <Posts start={start} end={end}/>
      </div>
    )
}


