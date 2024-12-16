import { useParams } from "react-router-dom";

const InfoPage = () => {
  const { id } = useParams();
  return <div>{id}</div>;
};

export default InfoPage;
