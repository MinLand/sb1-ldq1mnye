import React from 'react';
import { Clock, Coins, ListOrdered } from 'lucide-react';
import { useGame } from '../../../contexts/GameContext';
import { StatusItem } from './StatusItem';

export function GameStatus() {
  const { state } = useGame();
  const { currentRound, totalRounds, remainingFunds, timeRemaining } = state;

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <div className="grid grid-cols-3 gap-4">
        <StatusItem
          icon={ListOrdered}
          label="Round"
          value={`${currentRound}/${totalRounds}`}
          color="text-blue-500"
        />
        <StatusItem
          icon={Coins}
          label="Funds"
          value={remainingFunds}
          color="text-yellow-500"
        />
        <StatusItem
          icon={Clock}
          label="Time"
          value={`${Math.ceil(timeRemaining / 1000)}s`}
          color="text-red-500"
        />
      </div>
    </div>
  );
}