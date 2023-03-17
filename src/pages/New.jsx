import Form from "@/components/Form"

const New = () => {

    const formData = {
        title: '',
        description: '',
        image: ''
    }

    return(
        <div className="container">
            <Form formData={formData} />
        </div>
    )
}

export default New