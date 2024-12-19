import React, { useState, useEffect } from 'react';
import { useGame } from '../../contexts/GameContext';
import { GameStatus } from './status/GameStatus';
import { HospitalList } from './hospitals/HospitalList';
import { OperationPanel } from './operations/OperationPanel';
import type { Hospital } from '../../types';
import type { MarketOperation } from '../../types/game';

export function GameInterface() {
  const { state, dispatch } = useGame();
  const [selectedHospital, setSelectedHospital] = useState<Hospital | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch({ 
        type: 'UPDATE_TIME', 
        payload: { timeRemaining: Math.max(0, state.timeRemaining - 1000) }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [state.timeRemaining, dispatch]);

  const handleOperationPerform = (operation: MarketOperation) => {
    dispatch({ type: 'PERFORM_OPERATION', payload: { operation } });
    setSelectedHospital(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <GameStatus />
      
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold mb-4">Hospitals</h2>
          <HospitalList
            hospitals={state.hospitals}
            onSelect={setSelectedHospital}
          />
        </div>
        
        <div>
          <h2 className="text-xl font-bold mb-4">Operations</h2>
          <OperationPanel
            onPerformOperation={handleOperationPerform}
            selectedHospital={selectedHospital}
          />
        </div>
      </div>
    </div>
  );
}