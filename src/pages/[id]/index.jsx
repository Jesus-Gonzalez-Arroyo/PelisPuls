import ConectarBD from "@/lib/dbConect";
import Movie from "@/models/Movie";
import Link from "next/link";
import { Router, useRouter } from "next/router";

const MoviePage = ({success, error, movie}) => {

    const router = useRouter()

    if(!success) {
        return (
            <div className="container text-center my-5">
                <h1>{error}</h1>
                <Link href='/'>Volver</Link>
            </div>
        )
    }

    const DeleteData = async (id) => {
        try {
            await fetch(`/api/movie/${id}`, {
                method: 'DELETE'
            })
            router.push('/')
        } catch (error) {
            
        }
    }

    return(
        <div>
            <h1>Detalles de la pelicula</h1>
            <div className="card">
                <div className="card-body">
                    <div className="card-title">
                        <h5 className="text-uppercase">{movie.title}</h5>
                    </div>
                    <p className="fw-light">{movie.description}</p>
                    <Link href='/' className="btn btn-primary btn-sm">Volver</Link>
                    <button className="btn btn-danger btn-sm" onClick={()=>DeleteData(movie._id)}>Eliminar</button>
                    <Link href={`/${movie._id}/edit`} className="btn btn-warning btn-sm">Actualizar</Link>
                </div>
            </div>
        </div>
    ) 
}

export default MoviePage

export async function getServerSideProps({params}) {
    try {
        await ConectarBD();
        const movie = await Movie.findById(params.id).lean()
        movie._id = `${movie._id}`
        if(!movie){
            return {props : {success: false, error: "Pelicula no encontrada"}}
        }
        return {props: {success: true, movie}}
    } catch (error) {
        console.log(error)
        return {props : {success: false, error}}
    }
}