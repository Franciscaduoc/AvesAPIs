export type interfaz = Aves[]

export interface Aves {
  uid: string
  name: Name
  images: Images
  _links: Links
  sort: number
}

export interface Name {
  spanish: string
  english: string
  latin: string
}

export interface Images {
  main: string
  full: string
  thumb: string
}

export interface Links {
  self: string
  parent: string
}