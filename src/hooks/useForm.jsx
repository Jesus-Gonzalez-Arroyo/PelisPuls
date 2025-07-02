import { useRouter } from "next/router"
import { useState } from "react"

export default function UseForm(forNewMovie, formData) {
    const router = useRouter()
    const optionsStateMovie = [
        {
            key: '0',
            label: 'Active',
        },
        {
            key: '1',
            label: 'Desactive',
        },
    ]
    const [stateMovie, setStateMovie] = useState(0)
    const [form, setform] = useState({
        title: formData.title,
        description: formData.description,
        image: formData.image,
        active: ''
    })

    const HandleChange = e => {
        const { name, value } = e.target
        setform({
            ...form,
            [name]: value
        })
    }

    const Handlesubmit = e => {
        form.active = optionsStateMovie[stateMovie].label
        e.preventDefault()
        forNewMovie ? postData(form) : putData(form)
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
            router.push('/pelis/page')
            data = await res.json()
        } catch (error) {
            console.log(error)
        }
    }

    const postData = async (form) => {
        try {
            const res = await fetch('/api/movie', {
                method: 'POST',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(form)
            })
            router.push('/pelis/page')
            await res.json()
        } catch (error) {
            console.log(error)
        }
    }

    return { form, setform, HandleChange, Handlesubmit, optionsStateMovie, stateMovie, setStateMovie }
}