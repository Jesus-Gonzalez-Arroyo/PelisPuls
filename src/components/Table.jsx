import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import {headerTemplate, imagePrevTemplate, imageUrlTemplate, stateTemplate, buttonActionInterface} from '../templates/templateTable'

export default function Table({movies}) {
    return (
        <div>
            <DataTable value={movies} header={headerTemplate} paginator rows={10} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}
                paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                currentPageReportTemplate="{first} to {last} of {totalRecords}">
                <Column field="title" header="Name"></Column>
                <Column field="description" header="Descripcion"></Column>
                <Column header="Imagen" body={imageUrlTemplate}></Column>
                <Column header="Imagen previou" body={imagePrevTemplate}></Column>
                <Column header="Tipo" field='type'></Column>
                <Column header="Estado" body={stateTemplate}></Column>
                <Column header="Accion" body={buttonActionInterface}></Column>
            </DataTable>
        </div>
    )
}