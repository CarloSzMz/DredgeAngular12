export interface IFish {
    fishData: FishDatum[];
  }
  
  export interface FishDatum {
    id: string;
    name: string;
    location: Location;
    type: string;
    time: Time;
    aberrations: string;
    valuePerSlot: string;
    grid: string;
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