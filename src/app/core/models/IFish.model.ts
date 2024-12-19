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
  captureMethods: CaptureMethods;
  images: Images;
}

export interface CaptureMethods {
  rod: Pot;
  trawl: Pot;
  pot: Pot;
}

export enum Pot {
  No = 'no',
  Yes = 'yes',
}

export interface Images {
  fishImage: string;
  inventoryImage: string;
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
