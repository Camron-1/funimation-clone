import react from 'react'
import React, { useState, useEffect } from "react"
import axios from './../axios';

interface RowProps {
    title: string;
    fetchUrl: string
}

interface MediaProps {
    poster_path: string;
    name: any;
    id: string;
}

const base_url = "https://image.tmdb.org/t/p/original/";

const Row: React.FC<RowProps> = ({ title, fetchUrl }) => {
    const [shows, setShows] = useState<any[]>([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setShows(request.data.results)
            console.log(request.data.results)
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    return (
        <div className="bg-purple-950 text-white text-xl">
            <div className="ml-6">
                <h1> {title}</h1>
                <div className="flex overflow-y-hidden overflow-x-scroll no-scrollbar pb-6" >
                    {shows.map(show => (
                        <img
                            key={show.id}
                            className="max-w-48 w-48 rounded-xl object-contain mr-5 transition-transform delay 420ms hover:scale-105"
                            src={`${base_url}/${show.poster_path}`} alt={show.name} />
                    ))}
                </div>
            </div >
        </div>
    );
};


export default Row;