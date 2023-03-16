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
        <div>
            <form onSubmit={Handlesubmit}>
                <input type="text" 
                className="form-control my-2" 
                placeholder="title"
                autoComplete="off"
                name="title"
                value={form.title}
                onChange={HandleChange}
                />
                <input type="text" 
                className="form-control my-2" 
                placeholder="description"
                autoComplete="off"
                name="description"
                value={form.description}
                onChange={HandleChange}
                />
                <input type="text" 
                className="form-control my-2" 
                placeholder="Imagen"
                name="image"
                value={form.image}
                onChange={HandleChange}
                />
                <button className="btn btn-primary w-50" type="submit">
                    {forNewMovie ? 'Agregar' : 'Actualizar'}
                </button>
                <Link href="/" className={Style.btn_volver}>
                    Volver
                </Link>
            </form>
        </div>
    )
}

export default Form