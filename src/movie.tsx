import * as React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";

// https://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=3d66a398e26415511e946e3cde1bb5a5&itemPerPage=50

interface infoMovieObjType {
  id: number;
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

  directors: [{ peopleNm: string }];
  companys: { companyCd: string; companyNm: string };
}
const MovieMainTitle = styled.h1`
  font-size: 40px;
  text-align: center;
  margin-top: 15px;
`;

const DividingLine = styled.hr`
  opacity: 10;
  border-radius: 15px;
  height: 3px;
  background-color: white;
  border: none;
  margin-right: 10px;
  margin-left: 10px;
`;
const MovieConDividngLine = styled(DividingLine)`
  background-color: black;
`;
const MovieContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MovieList = styled.div`
  display: inline-block;
  height: 300px;
  width: 300px;
  background-color: white;
  border-radius: 15px;
  color: black;
  margin-top: 10px;
`;

const MovieName = styled.span`
  display: block;
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
  text-align: center;
`;

function movie() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [movie, setMovie] = useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [movieDirectiors, setMovieDirectiors] = useState();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [loading, setLoading] = useState(true);
  const apiKey = "3d66a398e26415511e946e3cde1bb5a5";
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=${apiKey}&itemPerPage=100&movieNm=스즈메의 문단속`
      )
    ).json();
    setMovie(json.movieListResult.movieList);
    setLoading(false);
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <MovieMainTitle>영화 선택</MovieMainTitle>
      <DividingLine />
      {loading ? (
        <div>Loading....</div>
      ) : (
        <div>
          {movie.map((movie: infoMovieObjType) => (
            <MovieContainer>
              <MovieList>
                <MovieName>{movie.movieNm}</MovieName>
                <MovieConDividngLine />
                <div>장르 : {movie.genreAlt}</div>
                <div>영화 유형 : {movie.typeNm}</div>
                <div>감독 : {movie.directors[0].peopleNm}</div>
              </MovieList>
            </MovieContainer>
          ))}
        </div>
      )}
    </div>
  );
}

export default movie;
