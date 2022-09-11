import { QueryClient } from 'react-query';

const defaultQueryClientOptions = {
  queries: {
    // onError: queryErrorHandler,
    // staleTime: 600000, // 10 minutes
    // cacheTime: 900000, // default cacheTime is 5 minutes; doesn't make sense for staleTime to exceed cacheTime
    refetchOnMount: true,
    refetchOnReconnect: true,
  },
  // mutations: {
  // 	onError: queryErrorHandler,
  // },
};

export const query_client = new QueryClient({
  defaultOptions: defaultQueryClientOptions,
});
