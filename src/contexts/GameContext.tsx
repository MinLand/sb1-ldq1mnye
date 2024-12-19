import React, { createContext, useContext, useReducer } from 'react';
import type { GameContext, GameConfig, MarketOperation } from '../types/game';
import type { User, Hospital } from '../types';
import { DEFAULT_GAME_CONFIG } from '../config/gameConfig';

interface GameState extends GameContext {}

type GameAction =
  | { type: 'START_GAME'; payload: { room: string; player: User; config?: GameConfig } }
  | { type: 'JOIN_OPPONENT'; payload: { opponent: User } }
  | { type: 'PERFORM_OPERATION'; payload: { operation: MarketOperation } }
  | { type: 'UPDATE_TIME'; payload: { timeRemaining: number } }
  | { type: 'END_ROUND' };

const initialHospitals: Hospital[] = [
  {
    id: 'hospital-a',
    name: 'Hospital A',
    doctors: 2,
    patients: 100,
    knowledge: { drugA: 30, drugD: 20, hormonesImmunosuppressants: 25 },
  },
  {
    id: 'hospital-b',
    name: 'Hospital B',
    doctors: 3,
    patients: 150,
    knowledge: { drugA: 40, drugD: 35, hormonesImmunosuppressants: 30 },
  },
  {
    id: 'hospital-c',
    name: 'Hospital C',
    doctors: 1,
    patients: 50,
    knowledge: { drugA: 25, drugD: 30, hormonesImmunosuppressants: 20 },
  },
  {
    id: 'hospital-d',
    name: 'Hospital D',
    doctors: 1,
    patients: 75,
    knowledge: { drugA: 35, drugD: 25, hormonesImmunosuppressants: 35 },
  },
  {
    id: 'hospital-e',
    name: 'Hospital E',
    doctors: 1,
    patients: 60,
    knowledge: { drugA: 20, drugD: 40, hormonesImmunosuppressants: 30 },
  },
  {
    id: 'hospital-f',
    name: 'Hospital F',
    doctors: 1,
    patients: 80,
    knowledge: { drugA: 30, drugD: 30, hormonesImmunosuppressants: 40 },
  },
];

const initialState: GameState = {
  room: '',
  player: null,
  opponent: null,
  config: DEFAULT_GAME_CONFIG,
  currentRound: 1,
  totalRounds: DEFAULT_GAME_CONFIG.totalRounds,
  remainingFunds: DEFAULT_GAME_CONFIG.initialFunds,
  timeRemaining: DEFAULT_GAME_CONFIG.duration,
  hospitals: initialHospitals,
  operations: [],
};

function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'START_GAME':
      return {
        ...state,
        room: action.payload.room,
        player: action.payload.player,
        config: action.payload.config || DEFAULT_GAME_CONFIG,
        remainingFunds: action.payload.config?.initialFunds || DEFAULT_GAME_CONFIG.initialFunds,
        currentRound: 1,
        timeRemaining: action.payload.config?.duration || DEFAULT_GAME_CONFIG.duration,
      };
    case 'JOIN_OPPONENT':
      return {
        ...state,
        opponent: action.payload.opponent,
      };
    case 'PERFORM_OPERATION':
      return {
        ...state,
        operations: [...state.operations, action.payload.operation],
        remainingFunds: state.remainingFunds - action.payload.operation.cost,
      };
    case 'UPDATE_TIME':
      return {
        ...state,
        timeRemaining: action.payload.timeRemaining,
      };
    case 'END_ROUND':
      return {
        ...state,
        currentRound: state.currentRound + 1,
        operations: [],
      };
    default:
      return state;
  }
}

const GameContext = createContext<{
  state: GameState;
  dispatch: React.Dispatch<GameAction>;
} | null>(null);

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
}