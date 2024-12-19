import React from 'react';
import { Briefcase, Users, Presentation, Search } from 'lucide-react';
import { useGame } from '../../../contexts/GameContext';
import { OperationButton } from './OperationButton';
import type { Hospital } from '../../../types';
import type { MarketOperation } from '../../../types/game';

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
      icon: Presentation,
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
  ] as const;

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
        <OperationButton
          key={op.type}
          icon={op.icon}
          label={op.label}
          description={op.description}
          cost={op.cost}
          disabled={op.cost > remainingFunds}
          onClick={() => onPerformOperation({
            type: op.type,
            hospitalId: selectedHospital.id,
            doctorIds: [],
            cost: op.cost,
          })}
        />
      ))}
    </div>
  );
}