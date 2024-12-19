import React from 'react';
import { LucideIcon } from 'lucide-react';

interface OperationButtonProps {
  icon: LucideIcon;
  label: string;
  description: string;
  cost: number;
  disabled: boolean;
  onClick: () => void;
}

export function OperationButton({ 
  icon: Icon,
  label,
  description,
  cost,
  disabled,
  onClick
}: OperationButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        p-4 rounded-lg text-left transition-all
        ${disabled
          ? 'bg-gray-100 cursor-not-allowed opacity-50'
          : 'bg-white hover:shadow-md'}
      `}
    >
      <div className="flex items-center gap-3 mb-2">
        <Icon className="h-5 w-5 text-blue-500" />
        <h3 className="font-semibold">{label}</h3>
      </div>
      <p className="text-sm text-gray-600 mb-2">{description}</p>
      <div className="text-sm font-medium text-blue-600">
        Cost: {cost} units
      </div>
    </button>
  );
}