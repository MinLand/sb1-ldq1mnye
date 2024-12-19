import { User, Hospital } from './index';

export interface GameConfig {
  duration: number;
  totalRounds: number;
  initialFunds: number;
  operationsPerWeek: {
    companyA: number;
    companyD: number;
  };
  operationCosts: {
    academicVisit: number;
    cityConference: number;
    thirdPartyConference: number;
    marketResearch: number;
  };
}

export interface MarketOperation {
  type: 'academicVisit' | 'cityConference' | 'thirdPartyConference' | 'marketResearch';
  hospitalId: string;
  doctorIds: string[];
  cost: number;
}

export interface GameContext {
  room: string;
  player: User;
  opponent: User | null;
  config: GameConfig;
  currentRound: number;
  remainingFunds: number;
  timeRemaining: number;
  hospitals: Hospital[];
  operations: MarketOperation[];
}