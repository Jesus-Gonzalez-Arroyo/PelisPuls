import Table from "@/components/Table";
import Layout from "@/layouts/Layout";
import ConectarBD from "@/lib/dbConect";
import Movie from "@/models/Movie";
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';

export default function TableMovies ({movies}) {
    return (
        <div>
            <Layout>
                <Table movies={[...movies].reverse()} />
            </Layout>  
        </div>
    )
}

export async function getServerSideProps() {
  try {
    await ConectarBD();
    const res = await Movie.find({})
    const movies = res.map((doc)=>{
      const movie = doc.toObject()
      movie._id = `${movie._id}`
      return movie
    })
    return {props: {movies}}
  } catch (error) {
    console.error(error);
    return {
      props: {
        error: error.message || 'Error inesperado',
      },
    };
  }
}
