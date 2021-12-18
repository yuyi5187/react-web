import PropTyes from "prop-types"
import {Link} from "react-router-dom"
import styles from "./Movie.module.css";

function Movie({id, year, coverImg, title, summary, genres}){
    return <div className={styles.movie}>
    <img src={coverImg} alt={title} className={styles.movie_img}/>
    <div>
    <h2 className={styles.movie_title}>
        <Link to={`/movie/${id}`}>{title}</Link>
    </h2>
    <h3 className={styles.movie_year}>{year}</h3>
    <p>{summary.length >235? `${summary.slice(0,235)}...`:summary}</p>
    <ul className={styles.movie_genres}>
      {genres.map((g) => (<li key={g}>{g}</li>))}
    </ul>
    </div>
  </div>
}

Movie.prototype = {
  id: PropTyes.number.isRequired,
  coverImg: PropTyes.string.isRequired,
  title: PropTyes.string.isRequired,
  summary: PropTyes.string.isRequired,
  genres: PropTyes.arrayOf(PropTyes.string).isRequired,
}
export default Movie;