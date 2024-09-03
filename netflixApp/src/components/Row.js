import { useEffect } from 'react'
import './Row.css'
import { getCategories } from '../api'
import { useState } from 'react'

export default function Row({ name, title, isLarge }) {
    const [filmes, setFilmes] = useState()
    let imageHost = 'https://image.tmdb.org/t/p/original/'

    let fetchData = async () => {

        let result = await getCategories(name)

        return result
    }

    useEffect(() => {

        let consulta = fetchData()

        consulta.then((data) => {
            setFilmes(data?.results)
        })


    }, [])

    return (
        <div className='row-container'>

            <h2 className='row-header'>{title}</h2>

            <div className='row-cards'>
                {filmes?.map((filme) => {

                    return (
                        <img
                            className={`movie-card ${isLarge && "movie-card-large"}`}
                            key={filme.id}
                            src={imageHost + (isLarge ? filme.backdrop_path : filme.poster_path)}
                            alt={filme.name} >
                        </img>
                    )
                })}
            </div>
        </div>
    )
}