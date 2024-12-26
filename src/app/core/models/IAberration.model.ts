export interface IAberration {
  aberrationData: AberrationDatum[];
}

export interface AberrationDatum {
  id: string;
  name: string;
  location: Location;
  type: Type;
  time: Time;
  AberrationOf: string;
  valuePerSlot: string;
  grid: string;
  captureMethods: CaptureMethods;
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

export interface CaptureMethods {
  rod: string;
  trawl: string;
  pot: string;
}

export interface Images {
  AberrationImage: string;
  inventoryImage: string;
}
