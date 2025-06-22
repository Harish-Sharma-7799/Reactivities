export type Activity = {
  id: string
  title: string
  description: string
  category: string
  date: Date
  city: string
  venue: string
  isCancelled: boolean
  latitude: number
  longitude: number
}

export type LocationIqSuggestion = {
  place_id: string
  osm_id: string
  osm_type: string
  licence: string
  lat: string
  lon: string
  boundingbox: string[]
  class: string
  type: string
  display_name: string
  display_place: string
  display_address: string
  address: LocationIqAddress
}

export type LocationIqAddress = {
  name: string
  road?: string
  neighbourhood?: string
  suburb?: string
  city?: string
  town?: string
  village?: string
  county: string
  state: string
  postcode?: string
  country: string
  country_code: string
}