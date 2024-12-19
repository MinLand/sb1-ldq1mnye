import type { GameConfig } from '../types/game';

export const DEFAULT_GAME_CONFIG: GameConfig = {
  duration: 300000, // 5 minutes in milliseconds
  totalRounds: 10,
  initialFunds: 50000,
  operationsPerWeek: {
    companyA: 4,
    companyD: 3,
  },
  operationCosts: {
    academicVisit: 300,
    cityConference: 5000,
    thirdPartyConference: 10000,
    marketResearch: 1000,
  },
};