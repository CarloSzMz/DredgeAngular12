export interface IFish {
  fishData: FishDatum[];
}

export interface FishDatum {
  id: string;
  name: string;
  location: Location;
  type: Type;
  time: Time;
  aberrations: string;
  valuePerSlot: string;
  grid: string;
  rod: string;
  trawl: string;
  pot: string;
  images: Images;
}

export enum Location {
  DevilSSpine = "Devil's Spine",
  GaleCliffs = 'Gale Cliffs',
  OpenOcean = 'Open Ocean',
  StellarBasin = 'Stellar Basin',
  TheMarrows = 'The Marrows',
  ThePaleReach = 'The Pale Reach',
  TwistedStrand = 'Twisted Strand',
}

export enum Time {
  Any = 'Any',
  Day = 'Day',
  Night = 'Night',
}

export interface Type {
  name: string;
  image: string;
}

export interface Images {
  fishImage: string;
  inventoryImage: string;
}
