export interface IAberration {
  fishData: FishDatum[];
}

export interface FishDatum {
  id: string;
  name: string;
  location: Location;
  type: Type;
  time: Time;
  AberrationOf: string;
  valuePerSlot: string;
  image: string;
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
  name: Name;
  image: string;
}

export enum Name {
  Coastal = 'Coastal',
  Crab = 'Crab',
  Hadal = 'Hadal',
  Ice = 'Ice',
  Mangrove = 'Mangrove',
  Oceanic = 'Oceanic',
  Shallow = 'Shallow',
  Volcanic = 'Volcanic',
}
