/**
 * useQuery is a custom hook that makes use of the useLocation and the URL  to parse the query parameters.
 *
 * @example
 *
 *     const query = useQuery();
 *     const date = query.get("date")
 */

import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default useQuery;
