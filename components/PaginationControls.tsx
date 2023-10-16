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
            {
                (Number(page)> 1) && 
                <button className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white" onClick={()=>{
                    router.push(`/?page=${Number(page)-1}&perPage=${perPage}`)
                }}>
                    Previous
                </button>
            }
            <div className="flex flex-row">
                {
                    pages.map((pageNumber, i)=>{
                        return (
                            (Number(page) === pageNumber) ? 
                            <button className="relative block rounded bg-primary-100 px-3 py-1.5 text-sm font-medium text-primary-700 transition-all duration-300" key={i} onClick={()=>{
                                router.push(`/?page=${Number(pageNumber)}&perPage=${perPage}`)
                            }}>{pageNumber}</button>
                            :
                            <button className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white" key={i} onClick={()=>{
                                router.push(`/?page=${Number(pageNumber)}&perPage=${perPage}`)
                            }}>{pageNumber}</button>
                        )
                    })
                }
            </div>
            {
                (Number(page) < totalPages) && 
                <button className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white" onClick={()=>{
                    router.push(`/?page=${Number(page)+1}&perPage=${perPage}`)
                }}>
                    next page
                </button>
            }
        </div>
    )
}

export default PaginationControls;