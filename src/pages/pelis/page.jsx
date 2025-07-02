import Table from "@/components/Table";
import Layout from "@/layouts/Layout";
import { useEffect, useState } from "react";

export default function TableMovies () {
    const [movies, setMovies] = useState([])

    useEffect(()=>{
        const getMovies = localStorage.getItem('movies')
        setMovies(JSON.parse(getMovies))
    }, [])

    return (
        <div>
            <Layout>
                <Table movies={[...movies].reverse()} />
            </Layout>  
        </div>
    )
}

