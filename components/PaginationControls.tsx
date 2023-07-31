'use client'

import { FC } from "react"
import { useRouter,useSearchParams } from 'next/navigation';

interface PaginationControlsProps {
    totalPosts : number,
}

const PaginationControls: FC<PaginationControlsProps> = (
    {
        totalPosts,

    }
) => {
    const router = useRouter();
    const searchParams = useSearchParams()

    const page = searchParams.get('page') ?? '1';
    const perPage = searchParams.get('perPage') ?? '5';

    let pages:number[] = [];
    let totalPages:number =  Math.ceil(totalPosts/Number(perPage));
    for(let i:number = 1; i<=totalPages; i++) {
        pages.push(i);
    }


    return (
        <div className="flex">
            <button onClick={()=>{
                router.push(`/?page=${Number(page)-1}&perPage=${perPage}`)
            }}>
            prev page
            </button>
            <div>
                {
                    pages.map((page, i)=>{
                        return (
                            <button key={i} onClick={()=>{
                                router.push(`/?page=${Number(page)}&perPage=${perPage}`)
                            }}>{page}</button>
                        )
                    })
                }
            </div>
            <button onClick={()=>{
                router.push(`/?page=${Number(page)+1}&perPage=${perPage}`)
            }}>
            next page
            </button>
        </div>
    )
}

export default PaginationControls;