import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/router"
import UseForm from "@/hooks/useForm"
import Style from '../styles/Form.module.scss'


const Form = ({ formData, forNewMovie = true }) => {

    const {form, HandleChange, Handlesubmit} = UseForm(forNewMovie, formData)

    return (
        <div className={Style.ContainerForm}>
            <form className={Style.Form} onSubmit={Handlesubmit}>
                <h1 className="my-3">{forNewMovie ? 'Agregar movie' : 'Actualizar Movie'}</h1>
                <input type="text"
                    className={Style.FormInput}
                    placeholder="title"
                    autoComplete="off"
                    name="title"
                    value={form.title}
                    onChange={HandleChange}
                />
                <input type="text"
                    className={Style.FormInput}
                    placeholder="description"
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