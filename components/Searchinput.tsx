'use client'
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react';
import {formUrlQuery, removeKeysFromUrlQuery} from "@jsmastery/utils";


const Searchinput = () => {
        const pathname = usePathname();
        const router = useRouter();
        const searchParams = useSearchParams();
        const query = searchParams.get('topic') || '';

        const [searchQuery, setSearchQuery] = useState('');

        useEffect(() => {
    if (searchQuery) {
        const newUrl = formUrlQuery({
            params: searchParams.toString(),
            key: "topic",
            value: searchQuery,
        });
        router.push(newUrl, { scroll: false });
    } else {
        if(pathname === '/companions') {
            const newUrl = removeKeysFromUrlQuery({
                params: searchParams.toString(),
                keysToRemove: ["your_query_key"],
            });
            router.push(newUrl, { scroll: false });
        }  
    }

}, [searchQuery, router, searchParams, pathname]);

  return (
    <div className='relative border boder-black rounded-lg items-center flex gap-2 px-2 py-1 h-fit'>
        <Image src="/icons/search.svg" alt="search" 
                width={15}
                height={15}
        />

        <input placeholder="Search companions ..."
        className="outline-none"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}/>
 
    </div>
  )
}

export default Searchinput