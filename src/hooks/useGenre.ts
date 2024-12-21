import apiClient from '../service/apiClient';
import { useQuery } from '@tanstack/react-query';
import { FetchResponse } from './useData';
import genres from "../data/genre";

export interface Genre {
  id: number;
  name: string;
  image_background: string
}

const useGenres = () => {

  return useQuery({
    queryKey: ["genres"],
    queryFn: () => apiClient
      .get<FetchResponse<Genre>>("/genres")
      .then(res => res.data),

    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { count: genres.length, results: genres }
  })
}

export default useGenres;