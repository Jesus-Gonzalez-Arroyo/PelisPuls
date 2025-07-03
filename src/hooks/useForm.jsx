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
    const optionsTypeMovies = [
        {
            key: '0',
            label: 'Comedia'
        },
        {
            key: '1',
            label: 'Romance'
        },
        {
            key: '2',
            label: 'Terror'
        },
        {
            key: '3',
            label: 'Suspenso'
        },
        {
            key: '4',
            label: 'Documental'
        }
    ]
    const [stateMovie, setStateMovie] = useState(0)
    const [typeMovie, setTypeMovie] = useState(0)
    const [form, setform] = useState({
        title: formData.title,
        description: formData.description,
        image: formData.image,
        type: '',
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
        e.preventDefault()
        form.active = optionsStateMovie[stateMovie].label
        form.type = optionsTypeMovies[typeMovie].label

        console.log('form', form)
        forNewMovie ? postData(form) : putData(form)
        router.push('/pelis/page').then(() => {
            router.reload();
        })
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
            const data = await res.json()
            return await data
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
            const data = await res.json()
            return await data
        } catch (error) {
            console.log(error)
        }
    }

    return { form, setform, HandleChange, Handlesubmit, optionsStateMovie, stateMovie, setStateMovie, optionsTypeMovies, setTypeMovie, typeMovie }
}