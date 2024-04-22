import { renderHook, waitFor } from "@testing-library/react";
import { useQueryCityListTest } from "./getCities";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

describe("GET /cities", () => {
  let wrapper: any;
  beforeAll(() => {
    const queryClient = new QueryClient();
    wrapper = ({ children }: any) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
  });

  test("When CountryId is provided", async () => {
    const { result } = renderHook(
      () => useQueryCityListTest({ countryId: 1 }),
      // ()=> useQuery({ queryKey: ['customHook'], queryFn: () => 'Hello' }),
      { wrapper }
    );
    await waitFor(
      () =>{
        console.log(result.current.data?.rows);
        return expect(result.current.isSuccess).toBe(true);
      },
      { timeout: 5000 }
    );
  });
  test("When CountryId is not provided", async () => {
    const { result } = renderHook(
      () => useQueryCityListTest({}),
      { wrapper }
    );
    await waitFor(
      () =>{
        return expect(result.current.isError).toBe(true);
      },
      { timeout: 5000 }
    );
    console.log(result.current.error);
  });
});
