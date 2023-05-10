import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// https://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&ServiceKey=LLVTF2N6QAMH91G45D24&query=%EB%82%B4%20%EC%95%84%EB%82%B4%20%EC%9D%B4%EC%95%BC%EA%B8%B0
function movieInfo() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const params = useParams();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [Params, setparams] = useState<string>();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setparams(params.movieNm);
  }, []);

  return <div>movieInfo {Params}</div>;
}

export default movieInfo;
