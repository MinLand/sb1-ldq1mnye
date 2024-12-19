import React from 'react';
import { Hospital } from '../../../types';
import { HospitalCard } from './HospitalCard';

interface HospitalListProps {
  hospitals: Hospital[];
  onSelect: (hospital: Hospital) => void;
}

export function HospitalList({ hospitals, onSelect }: HospitalListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {hospitals.map((hospital) => (
        <HospitalCard
          key={hospital.name}
          hospital={hospital}
          onClick={() => onSelect(hospital)}
        />
      ))}
    </div>
  );
}