import Form from "@/components/Form"
import { useRouter } from "next/router"
import useSWR from 'swr'

const fetcher = url => (
    fetch(url)
        .then(res => res.json())
        .then(json => json.data)
)

const EditMovie = () => {

    const router = useRouter()
    const { id } = router.query

    const {data: movie} = useSWR(id ? `/api/movie/${id}` : null, fetcher)

    if(!movie) {
        return (
            <div className="container text-center">
                <h1>Loading...</h1>
            </div>
        )
    }

    const formData = {
        title: movie.title,
        description: movie.description,
        image: movie.image
    }

    return(
        <div className="container">
            <h1>Actualizar movie</h1>
            <Form forNewMovie={false} formData={formData}/>
        </div>
    )
}

export default EditMovie