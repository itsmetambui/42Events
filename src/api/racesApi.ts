import backend from "../config/axios"

type FeaturedType = {
  id: string
  raceName: string
  bannerCard: string
}

export type EventType = FeaturedType & {
  medalViewImage: string
  racePeriod: string
  categories: string[]
  sportType: string
  raceRunners: number
  eventType: string
  racePrice: string
}

type RootDataType = {
  featured: FeaturedType[]
  startingSoon: EventType[]
  popular: EventType[]
  newRelease: EventType[]
  free: EventType[]
  past: EventType[]
}

export const fetchRoot = async (): Promise<RootDataType> => {
  const response = await backend.get("/race-events")
  const {
    data: { featured, startingSoon, popular, newRelease, free, past },
  } = response
  return {
    featured: featured ? featured.map(mapFeatured) : [],
    startingSoon: startingSoon ? startingSoon.map(mapEvents) : [],
    popular: popular ? popular.map(mapEvents) : [],
    newRelease: newRelease ? newRelease.map(mapEvents) : [],
    free: free ? free.map(mapEvents) : [],
    past: past ? past.map(mapEvents) : [],
  }
}

export const fetchRaces = async (
  query: { [key: string]: string } | null | undefined,
): Promise<EventType[]> => {
  const params = query ? { ...query } : {}
  const response = await backend.get("/race-filters", {
    params,
  })
  return response.data.map(mapEvents)
}

const mapFeatured = ({ _id, banner_card, race_name }: any): FeaturedType => ({
  id: _id,
  bannerCard: banner_card,
  raceName: race_name,
})

const mapEvents = (event: any): EventType => ({
  id: event._id,
  raceName: event.race_name,
  bannerCard: event.banner_card,
  medalViewImage: event.medalViewImage,
  racePeriod: event.racePeriod,
  categories: event.categories,
  sportType: event.sportType,
  raceRunners: event.raceRunners,
  eventType: event.eventType,
  racePrice: event.racePrice,
})
