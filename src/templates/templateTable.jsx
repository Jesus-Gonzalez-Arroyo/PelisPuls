import Link from 'next/link';
import Style from '../styles/index.module.scss'
import StyleTable from '../styles/Table.module.scss'
import { Button } from 'primereact/button';

const buttonActionInterface = (movie) => (
    <Link href={`/${movie._id}`} className={Style.btnInfoMovie}>Mas info...</Link>
)

const headerTemplate = (
    <div className={StyleTable.containerHeader}>
        <div>Peliculas disponibles</div>
        <div>
            <Link href={'/New'}>
                <Button>Agregar</Button>
            </Link>
        </div>
    </div>
)

const imagePrevTemplate = (movie) => {
    return (
        <div>
            <img style={{ width: '80px', height: '50px' }} src={`${movie.image}`} alt={`${movie.image}`} />
        </div>
    )
}

const imageUrlTemplate = (movie) => {
    return (
        <div style={{ overflowX: 'auto', width: '450px' }}>
            <p>{movie.image}</p>
        </div>
    )
}

const stateTemplate = (movie) => {
    return (
        <div className={`${movie.active === 'Active' ? StyleTable.stateGreen : StyleTable.stateRed}`}>
            <p>{movie.active}</p>
        </div>
    )
}

export { buttonActionInterface, headerTemplate, imagePrevTemplate, imageUrlTemplate, stateTemplate }