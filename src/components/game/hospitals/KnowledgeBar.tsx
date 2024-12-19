import React from 'react';

interface KnowledgeBarProps {
  label: string;
  value: number;
  color: 'blue' | 'green' | 'purple';
}

export function KnowledgeBar({ label, value, color }: KnowledgeBarProps) {
  const colorClasses = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    purple: 'bg-purple-500',
  };

  return (
    <div className="text-sm">
      <span className="font-medium">{label}:</span>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`${colorClasses[color]} rounded-full h-2 transition-all duration-300`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}