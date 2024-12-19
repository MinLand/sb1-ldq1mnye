import React from 'react';
import { Clock, Coins, ListOrdered } from 'lucide-react';
import { useGame } from '../../contexts/GameContext';

export function GameStatus() {
  const { state } = useGame();
  const { currentRound, totalRounds, remainingFunds, timeRemaining } = state;

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <div className="grid grid-cols-3 gap-4">
        <div className="flex items-center gap-2">
          <ListOrdered className="h-5 w-5 text-blue-500" />
          <div>
            <div className="text-sm text-gray-500">Round</div>
            <div className="font-semibold">{currentRound}/{totalRounds}</div>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Coins className="h-5 w-5 text-yellow-500" />
          <div>
            <div className="text-sm text-gray-500">Funds</div>
            <div className="font-semibold">{remainingFunds}</div>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-red-500" />
          <div>
            <div className="text-sm text-gray-500">Time</div>
            <div className="font-semibold">{Math.ceil(timeRemaining / 1000)}s</div>
          </div>
        </div>
      </div>
    </div>
  );
}