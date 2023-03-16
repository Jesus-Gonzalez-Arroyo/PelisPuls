import ConectarBD from '../../../lib/dbConect'
import Movie from '@/models/Movie'

export default async function handler(req, res) {
  await ConectarBD()
  const { method, body } = req
  switch (method) {
    case "POST":
      try {
        const movie = new Movie(body)
        await movie.save()
        return res.status(201).json(movie)
      } catch (error) {
        return res.status(400).json({success: false, method})
      }
    default:
      return res.status(500).json({success: false, error: 'Error de servidor'})
  }
}
