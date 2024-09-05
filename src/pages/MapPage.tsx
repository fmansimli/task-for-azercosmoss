import { Link } from "react-router-dom";
import useSWR from "swr";
import AreasFilter from "../components/AreasFilter";
import { useState } from "react";

interface CountryProps {
  flags: {
    alt: string;
    png: string;
    svg: string;
  };
  name: {
    common: string;
    official: string;
  };
}

const MapPage = () => {
  const { data: countries, error, isLoading } = useSWR("/all?fields=name,flags");
  const [selectedArea, setSelectedArea] = useState("");

  if (isLoading) {
    <div className="flex h-screen w-full justify-center items-center">
      <div className="text-3xl">Loading...</div>
    </div>;
  }

  if (error) {
    <div className="flex h-screen w-full justify-center items-center">
      <div className="text-3xl">Error while fetching the county list.</div>
    </div>;
  }

  return (
    <div className="flex flex-col container h-screen w-full justify-center items-center">
      <div>
        <AreasFilter areas={[]} onChange={(value) => setSelectedArea(value)} />
      </div>
      <hr />
      <div>{selectedArea}</div>
      <div className="my-10">
        <ul>
          {(countries as CountryProps[])?.map((country, key) => (
            <li key={key}>
              <Link to={`/countries/${country.name.official}`}>{country.name.official}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MapPage;
