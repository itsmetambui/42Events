import backend from "../config/axios"

export const fetchRoot = async () => {
  const response = await backend.get("/race-events")
  return response.data
}

export const fetchRaces = async (
  query: { [key: string]: string } | null | undefined,
) => {
  const params = query ? { ...query } : {}
  const response = await backend.get("/race-filters", {
    params,
  })
  return response.data
}
