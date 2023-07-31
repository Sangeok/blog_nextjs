'use client'
import { useEffect, useState } from "react";

export default function Indicator() {
    const [completion, setCompletion] = useState(0);

    useEffect(()=>{
        const updateScrollCompleltion = () => {
            const currentProgress = window.scrollY;
            const scrollHeight = document.body.scrollHeight - window.innerHeight;
            if(scrollHeight) {
                setCompletion(
                    Number((currentProgress / scrollHeight).toFixed(2)) * 100
                )
            }
        }

        window.addEventListener('scroll', updateScrollCompleltion);

        return () => {
            window.removeEventListener('scroll', updateScrollCompleltion);
        }

    },[])

    return (
        <div>
            <span
                style={{ transform: `translateX(${completion-100}%)`}}
                className="absolute bg-yellow-400 h-1 w-full bottom-0"
            />
        </div>
    )
}