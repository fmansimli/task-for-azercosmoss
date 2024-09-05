import { useParams } from "react-router-dom";
import useSWR from "swr";

const CountryDetail = () => {
  const { id: name } = useParams();
  const { data, isLoading, error } = useSWR(`/name/${name}`);

  if (isLoading) {
    return (
      <div className="flex h-screen container w-full justify-center items-center">
        <div className="text-3xl">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex container h-screen w-full justify-center items-center">
        <div className="text-3xl">Error while fetching the county list.</div>
      </div>
    );
  }

  return (
    <div className="container flex h-screen w-full justify-center items-center">
      <div>{JSON.stringify(data)}</div>
    </div>
  );
};

export default CountryDetail;
