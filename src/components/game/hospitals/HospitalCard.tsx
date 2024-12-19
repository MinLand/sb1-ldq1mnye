import React from 'react';
import { Building2, Users, UserRound } from 'lucide-react';
import { Hospital } from '../../../types';
import { KnowledgeBar } from './KnowledgeBar';

interface HospitalCardProps {
  hospital: Hospital;
  onClick: () => void;
}

export function HospitalCard({ hospital, onClick }: HospitalCardProps) {
  return (
    <button
      onClick={onClick}
      className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full text-left"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <Building2 className="h-5 w-5" />
          {hospital.name}
        </h3>
        <div className="flex items-center gap-2 text-gray-600">
          <Users className="h-5 w-5" />
          <span>{hospital.doctors}</span>
        </div>
      </div>
      
      <div className="flex items-center gap-2 text-gray-600">
        <UserRound className="h-5 w-5" />
        <span>{hospital.patients} patients</span>
      </div>

      <div className="mt-4 space-y-2">
        <KnowledgeBar
          label="Drug A Knowledge"
          value={hospital.knowledge.drugA}
          color="blue"
        />
        <KnowledgeBar
          label="Drug D Knowledge"
          value={hospital.knowledge.drugD}
          color="green"
        />
        <KnowledgeBar
          label="H&I Knowledge"
          value={hospital.knowledge.hormonesImmunosuppressants}
          color="purple"
        />
      </div>
    </button>
  );
}