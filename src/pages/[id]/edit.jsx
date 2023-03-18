import Form from "@/components/Form"
import { useRouter } from "next/router"
import useSWR from 'swr'
import Style from '../../styles/Loading.module.scss'

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
            <div className={Style.ContainerSpinner}>
                <div className={Style.Spinner}></div>
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
            <Form forNewMovie={false} formData={formData}/>
        </div>
    )
}

export default EditMovie