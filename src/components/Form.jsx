import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/router"
import Style from '../styles/Form.module.scss'

const Form = ({formData, forNewMovie = true}) => {

    const router = useRouter()

    const [form, setform] = useState({
        title: formData.title,
        description: formData.description,
        image: formData.image
    })

    const HandleChange = e => {
        const {name, value} = e.target
        setform({
            ...form,
            [name]: value
        })
    }

    const Handlesubmit = e => {
        e.preventDefault()
        if(forNewMovie){
            postData(form)
        }else {
            putData(form)
        }
    }

    const putData = async (form) => {
        const { id } = router.query
        try {
            const res = await fetch(`/api/movie/${id}`, {
                method: 'PUT',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(form)
            })
            router.push('/')
            const data = await res.json()
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    const postData = async (form) => {
        console.log(form)
        try {
            const res = await fetch('/api/movie', {
                method: 'POST',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(form)
            })
            router.push('/')
            const data = await res.json()
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    return(
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