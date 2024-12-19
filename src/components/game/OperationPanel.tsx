import React from 'react';
import { Briefcase, Users, PresentationScreen, Search } from 'lucide-react';
import { useGame } from '../../contexts/GameContext';
import type { MarketOperation } from '../../types/game';

interface OperationPanelProps {
  onPerformOperation: (operation: MarketOperation) => void;
  selectedHospital: Hospital | null;
}

export function OperationPanel({ onPerformOperation, selectedHospital }: OperationPanelProps) {
  const { state } = useGame();
  const { config, remainingFunds } = state;

  const operations = [
    {
      type: 'academicVisit',
      icon: Briefcase,
      label: 'Professional Academic Visit',
      cost: config.operationCosts.academicVisit,
      description: 'One-on-one visit with a doctor',
    },
    {
      type: 'cityConference',
      icon: Users,
      label: 'City Conference',
      cost: config.operationCosts.cityConference,
      description: 'Organize a local conference',
    },
    {
      type: 'thirdPartyConference',
      icon: PresentationScreen,
      label: 'Third-party Conference',
      cost: config.operationCosts.thirdPartyConference,
      description: 'Sponsor a third-party conference',
    },
    {
      type: 'marketResearch',
      icon: Search,
      label: 'Market Research',
      cost: config.operationCosts.marketResearch,
      description: 'Conduct market research',
    },
  ];

  if (!selectedHospital) {
    return (
      <div className="bg-gray-50 rounded-lg p-6 text-center">
        <p className="text-gray-500">Select a hospital to view available operations</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {operations.map((op) => (
        <button
          key={op.type}
          onClick={() => onPerformOperation({
            type: op.type,
            hospitalId: selectedHospital.id,
            doctorIds: [],
            cost: op.cost,
          })}
          disabled={op.cost > remainingFunds}
          className={`
            p-4 rounded-lg text-left transition-all
            ${op.cost > remainingFunds
              ? 'bg-gray-100 cursor-not-allowed opacity-50'
              : 'bg-white hover:shadow-md'}
          `}
        >
          <div className="flex items-center gap-3 mb-2">
            <op.icon className="h-5 w-5 text-blue-500" />
            <h3 className="font-semibold">{op.label}</h3>
          </div>
          <p className="text-sm text-gray-600 mb-2">{op.description}</p>
          <div className="text-sm font-medium text-blue-600">
            Cost: {op.cost} units
          </div>
        </button>
      ))}
    </div>
  );
}