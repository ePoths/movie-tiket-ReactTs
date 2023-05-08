import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
