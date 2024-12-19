import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatusItemProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
  color: string;
}

export function StatusItem({ icon: Icon, label, value, color }: StatusItemProps) {
  return (
    <div className="flex items-center gap-2">
      <Icon className={`h-5 w-5 ${color}`} />
      <div>
        <div className="text-sm text-gray-500">{label}</div>
        <div className="font-semibold">{value}</div>
      </div>
    </div>
  );
}