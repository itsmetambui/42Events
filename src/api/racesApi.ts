import backend from "../config/axios"

export const fetchRoot = async () => {
  const response = await backend.get("/race-events")
  const {
    data: { featured, startingSoon, popular, newRelease, free, past },
  } = response
  return {
    featured: featured ? featured.map(mapFeatured) : [],
    startingSoon: startingSoon ? startingSoon.map(mapOthers) : [],
    popular: popular ? popular.map(mapOthers) : [],
    newRelease: newRelease ? newRelease.map(mapOthers) : [],
    free: free ? free.map(mapOthers) : [],
    past: past ? past.map(mapOthers) : [],
  }
}

export const fetchRaces = async (
  query: { [key: string]: string } | null | undefined,
) => {
  const params = query ? { ...query } : {}
  const response = await backend.get("/race-filters", {
    params,
  })
  return response.data.map(mapOthers)
}

const mapFeatured = ({ _id, banner_card, race_name }: any) => ({
  id: _id,
  bannerCard: banner_card,
  raceName: race_name,
})

const mapOthers = (event: any) => ({
  id: event._id,
  raceName: event.race_name,
  bannerCard: event.banner_card,
  racePeriod: event.racePeriod,
  categories: event.categories,
  sportType: event.sportType,
  raceRunners: event.raceRunners,
  eventType: event.eventType,
  racePrice: event.racePrice,
})
