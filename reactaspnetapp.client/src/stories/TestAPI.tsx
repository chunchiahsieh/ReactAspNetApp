import { useQuery } from "@tanstack/react-query";
import {API} from "controllers/API";

interface TestAPIProps {
}

export function TestAPI ({}: TestAPIProps) {
  const {isPending, error, data} = useQuery({queryKey: ["SmCountry"], queryFn: API.smCountryList});

  return (
    <div>
      <h1>{JSON.stringify(data)}</h1>
      <h2>{JSON.stringify(isPending)}</h2>
      <h3>{JSON.stringify(error)}</h3>
    </div>
  );
};
