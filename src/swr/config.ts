import type { SWRConfiguration } from "swr";
import { fetcher } from "./fetcher";

export const defaultValues: SWRConfiguration = {
  fetcher: fetcher,
  revalidateOnMount: true,
  revalidateIfStale: true,
};
