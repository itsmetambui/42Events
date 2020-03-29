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
  startDate: string
  endDate: string
  [key: string]: string | string[] | number
}

export type RaceDataType = {
  total: number
  races: EventType[]
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

export const fetchRaces = async (key: string, query: any, cursor: number = 0): Promise<RaceDataType> => {
  const { sortType, sportType, eventTime, eventType, priceType } = query
  const response = await backend.get("/race-filters", {
    params: {
      skipCount: cursor,
      sort: sortType,
      sportType,
      dates: eventTime,
      eventType,
      price: priceType,
      limit: 20,
    },
  })
  return { total: response.totalData, races: response.data.map(mapEvents) }
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
  startDate: event.start_date,
  endDate: event.end_date,
})
