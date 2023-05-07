/* eslint-disable no-restricted-globals */
import * as React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
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
  companys: [{ companyCd: string; companyNm: string }];
}

const Container = styled.div`
  width: 100vh;
  margin: 0 auto;
`;
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
  display: inline-flex;
  &:hover {
    transform: translateY(-20px) translateX(-10px);
  }
`;

const MovieList = styled.div`
  height: 340px;
  width: 300px;
  color: black;
  margin: 50px 30px auto 30px;
  border-radius: 15px;
  background-color: white;
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

function movie() {
  const nowDate = new Date();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [movie, setMovie] = useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [loading, setLoading] = useState(true);
  const apiKey = "3d66a398e26415511e946e3cde1bb5a5";

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=${apiKey}&itemPerPage=50&openStartDt=${nowDate.getFullYear()}&movieNm=

        `
      )
    ).json();
    console.log(json);
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
        <>
          <Container>
            {movie.map((movie: infoMovieObjType) => (
              <MovieContainer>
                <MovieList>
                  <MovieEnName>{movie.movieNm}</MovieEnName>
                  <MovieConDividngLine />
                  <MovieDes>영어 제목 : {movie.movieNmEn}</MovieDes>
                  <MovieDes>장르 : {movie.genreAlt}</MovieDes>
                  <MovieDes>영화 유형 : {movie.typeNm}</MovieDes>
                  <MovieDes>제작 국가 : {movie.nationAlt}</MovieDes>
                  <MovieDes>
                    감독 :{" "}
                    {movie?.directors[0]?.peopleNm
                      ? movie.directors[0]?.peopleNm
                      : "undefind"}
                  </MovieDes>
                  <MovieDes>
                    제작사 : {""}
                    {movie.companys[0]?.companyNm
                      ? `${movie.companys[0]?.companyNm}  (등)`
                      : "undefind"}
                  </MovieDes>
                </MovieList>
              </MovieContainer>
            ))}
          </Container>
        </>
      )}
    </div>
  );
}

export default movie;
