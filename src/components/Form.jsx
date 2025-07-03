import Link from "next/link"
import UseForm from "@/hooks/useForm"
import Style from '../styles/Form.module.scss'
import { TreeSelect } from "primereact/treeselect"

const Form = ({ formData, forNewMovie = true }) => {

    const {form, HandleChange, Handlesubmit, optionsStateMovie, setStateMovie, stateMovie, optionsTypeMovies, setTypeMovie, typeMovie} = UseForm(forNewMovie, formData)

    return (
        <div className={Style.ContainerForm}>
            <form className={Style.Form} onSubmit={Handlesubmit}>
                <h1 className="my-3">{forNewMovie ? 'Agregar movie' : 'Actualizar Movie'}</h1>
                <input type="text"
                    className={Style.FormInput}
                    placeholder="Title"
                    autoComplete="off"
                    name="title"
                    value={form.title}
                    onChange={HandleChange}
                />
                <input type="text"
                    className={Style.FormInput}
                    placeholder="Description"
                    autoComplete="off"
                    name="description"
                    value={form.description}
                    onChange={HandleChange}
                />
                <input type="text"
                    className={Style.FormInput}
                    placeholder="Imagen"
                    name="image"
                    value={form.image}
                    onChange={HandleChange}
                />
                <div>
                    <TreeSelect value={typeMovie} onChange={(e) => setTypeMovie(e.value)} options={optionsTypeMovies} 
                    className="md:w-20rem w-full" style={{width: '100%', marginBottom: '5%'}} placeholder="Select Item"></TreeSelect>
                </div>
                <div>
                    <TreeSelect value={stateMovie} onChange={(e) => setStateMovie(e.value)} options={optionsStateMovie} 
                    className="md:w-20rem w-full" style={{width: '100%', marginBottom: '5%'}} placeholder="Select Item"></TreeSelect>
                </div>
                <div className={Style.Container_buttons}>
                    <button className={Style.Btn_submit} type="submit">
                        {forNewMovie ? 'Agregar' : 'Actualizar'}
                    </button>
                    <Link href="/" className={Style.btn_volver}>
                        Volver
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Form