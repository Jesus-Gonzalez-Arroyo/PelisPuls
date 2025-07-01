import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import Link from 'next/link';
import Style from '../styles/index.module.scss'
import StyleTable from '../styles/Table.module.scss'

export default function Table({movies}) {

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
                <img style={{width: '80px', height: '50px'}} src={`${movie.image}`} alt={`${movie.image}`}/>
            </div>
        )
    }

    const imageUrlTemplate = (movie) => {
        return (
            <div style={{width: '500px', overflowX: 'auto'}}>
                <p>{movie.image}</p>
            </div>
        )
    }

    return (
        <div>
            <DataTable value={movies} header={headerTemplate} paginator rows={10} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}
                paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                currentPageReportTemplate="{first} to {last} of {totalRecords}">
                <Column field="title" header="Name"></Column>
                <Column field="description" header="Descripcion"></Column>
                <Column header="Imagen" body={imageUrlTemplate}></Column>
                <Column header="Imagen previou" body={imagePrevTemplate}></Column>
                <Column header="Accion" body={buttonActionInterface}></Column>
            </DataTable>
        </div>
    )
}