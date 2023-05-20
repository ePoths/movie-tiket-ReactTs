/* eslint-disable no-restricted-globals */
import * as React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  companys: [{ companyCd: string; companyNm: string }];
}

const Container = styled.div`
  width: 100vh;
  margin: 0 auto;
`;
const MovieMainTitle = styled.h1`
  font-size: 40px;
  margin-top: 40px;
  text-align: center;
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

const a = styled.div``;

const MovieContainer = styled.div`
  margin: 50px 30px 0 30px;
  display: inline-flex;
  &:hover {
    transform: translateY(-20px) translateX(-10px);
  }
`;

const MovieList = styled(Link)`
  height: 380px;
  width: 300px;
  color: black;
  border-radius: 15px;
  background-color: white;
  text-decoration: none;
`;

const MovieEnName = styled.span`
  display: block;
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
  text-align: center;
  margin: 10px auto;
`;

const MovieDes = styled.p`
  margin-left: 10px;
`;

const MovieSearch = styled.input`
  margin-bottom: 30px;
  height: 35px;
  border-radius: 15px;
  border: none;
  border: 1px solid #252527;
  text-align: center;
  &:focus {
    outline: none;
  }
`;

const MovieSearchContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SubMsg = styled.p`
  text-align: center;
  margin-bottom: 0;
  font-size: 18px;
`;
const Test = styled.div`
  width: 1080px;
  margin: 0 auto;
`;

function Movie() {
  const [search, setSearch] = useState("");
  const [movies, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiKey = process.env.REACT_APP_MovieTsx_File_Apikey;

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=${apiKey}&itemPerPage=100&movieNm=${search}
        `
      )
    ).json();
    setMovie(json.movieListResult.movieList);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const movieSearchOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    getMovies();
  };
  return (
    <div>
      <div>
        <MovieMainTitle>영화 리스트</MovieMainTitle>
        <MovieSearchContainer>
          <form onSubmit={movieSearchOnSubmit}>
            <MovieSearch
              value={search}
              placeholder="영화 검색"
              type="text"
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </MovieSearchContainer>
      </div>
      <DividingLine />
      {loading ? (
        <div>Loading....</div>
      ) : (
        <Container className="12">
          <Test>
            <SubMsg>영화를 선택해 주세요.</SubMsg>
            {movies.map((movie: infoMovieObjType) => (
              <MovieContainer>
                <MovieList to={`/movie/${movie.movieNm}`}>
                  <MovieEnName>
                    {movie?.movieNm ? movie?.movieNm : "undefined"}
                  </MovieEnName>
                  <MovieConDividngLine />
                  <MovieDes>
                    영어 제목 :{" "}
                    {movie.movieNmEn ? movie.movieNmEn : "undefined"}
                  </MovieDes>
                  <MovieDes>
                    장르 : {movie.genreAlt ? movie.genreAlt : "undefined"}
                  </MovieDes>
                  <MovieDes>
                    개봉 일 : {movie.openDt ? movie.openDt : "undefined"}
                  </MovieDes>
                  <MovieDes>
                    영화 유형 : {movie.typeNm ? movie.typeNm : "undefined"}
                  </MovieDes>
                  <MovieDes>
                    제작 국가 :{" "}
                    {movie.nationAlt ? movie.nationAlt : "undefined"}
                  </MovieDes>
                  <MovieDes>
                    감독 :{" "}
                    {movie?.directors[0]?.peopleNm
                      ? movie.directors[0]?.peopleNm
                      : "undefind"}
                  </MovieDes>
                  <MovieDes>
                    제작사 : {""}
                    {movie.companys[0]?.companyNm
                      ? `${movie.companys[0]?.companyNm}`
                      : "undefind"}
                  </MovieDes>
                </MovieList>
              </MovieContainer>
            ))}
          </Test>
        </Container>
      )}
    </div>
  );
}

export default Movie;
