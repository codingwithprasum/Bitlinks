"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

const Shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setgenerated] = useState('')

    const generate = () =>{
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
        "url": url,
        "shorturl": shorturl
        });

        const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("/api/generate", requestOptions)
        .then(response => response.json())
        .then(result => {
            setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
            seturl("")
            setshorturl("")
            console.log(result)
            alert(result.message)
        })
        .catch(error => console.log('error', error));
    }

    return (
        <div className='mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4'>
            <h1 className='font-bold text-2xl'>Generate your short URLs</h1>
            <div className='flex flex-col gap-2'>
                <input type="text" value={url} placeholder='Enter your URL' className='px-4 py-2 focus:outline-purple-600 rounded-md' onChange={e =>{seturl(e.target.value)}} />
                <input type="text" value={shorturl} className='px-4 py-2 focus:outline-purple-600 rounded-md' placeholder='Enter your preferred short URL text' onChange={e =>{setshorturl(e.target.value)}} />
                <button onClick={generate} className='text-white bg-purple-500 rounded-lg shadow-lg p-3 py-1 my-3 font-bold'>Generate</button>
            </div>
            {generated && <> <span className='font-bold text-lg' >Your Link </span><code><Link target="_blank" href={generated}>{generated}</Link> 
                </code></>}
        </div>
    )
}

export default Shorten