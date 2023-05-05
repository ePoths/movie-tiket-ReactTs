import * as React from "react";
import { useEffect, useState } from "react";

// https://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=3d66a398e26415511e946e3cde1bb5a5&itemPerPage=50

interface infoMovieObjType {
  movieCd: string;
  movieNm: string;
  movieNmEn: string;
  prdtYear: string;
  openDt: string;
  typeNm: string;
  prdtStatNm: string;
  nationAlt: string;
  genreAlt: string;
  repNationNm: string;
  repGenreNm: string;
  directors: object;
  companys: object;
}

function movie() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [movie, setMovie] = useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [loading, setLoading] = useState(true);
  const apiKey = "3d66a398e26415511e946e3cde1bb5a5";
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=${apiKey}&itemPerPage=50`
      )
    ).json();
    console.log(json.movieListResult.movieList);
    setMovie(json.movieListResult.movieList);
    setLoading(false);
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading....</div>
      ) : (
        <div>
          {movie.map((movie: infoMovieObjType) => (
            <div key={movie.movieCd}>{movie.movieNm}</div>
          ))}
        </div>
      )}
    </div>
  );
}
export default movie;
