import ConectarBD from "@/lib/dbConect";
import Movie from "@/models/Movie";
import Link from "next/link";
import { useRouter } from "next/router";
import Style from '../../styles/ViewMovie.module.scss'

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
        <div className={Style.Container_grid}>
            <div className={Style.CardMovie}>
                <h1>Detalles de la pelicula</h1>
                <div className={Style.CardBody}>
                    <div className={Style.ImgMovie}>
                        <img src={`${movie.image}`}/>
                    </div>
                    <h5 className={Style.TitleMovie}>{movie.title}</h5>
                    <p className={Style.DescriptionMovie}>{movie.description}</p>
                    <div className={Style.CardAcciones}>
                        <Link href='/' className={Style.Btn_accion}>Volver</Link>
                        <button className={Style.Btn_accion} onClick={()=>DeleteData(movie._id)}>Eliminar</button>
                        <Link href={`/${movie._id}/edit`} className={Style.Btn_accion}>Actualizar</Link>
                    </div>
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