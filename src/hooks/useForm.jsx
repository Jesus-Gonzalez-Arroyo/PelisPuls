import { useRouter } from "next/router"
import { useState } from "react"

export default function UseForm (forNewMovie, formData) {
    const router = useRouter()

    const [form, setform] = useState({
        title: formData.title,
        description: formData.description,
        image: formData.image
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
            router.push('/')
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
            router.push('/')
            await res.json()
        } catch (error) {
            console.log(error)
        }
    }

    return {form, setform, HandleChange, Handlesubmit, }
}