import React from 'react';
import { Hospital } from '../../types';
import { Building2, Users, UserRound } from 'lucide-react';

interface HospitalListProps {
  hospitals: Hospital[];
  onSelect: (hospital: Hospital) => void;
}

export function HospitalList({ hospitals, onSelect }: HospitalListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {hospitals.map((hospital) => (
        <button
          key={hospital.name}
          onClick={() => onSelect(hospital)}
          className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
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
            <div className="text-sm">
              <span className="font-medium">Drug A Knowledge:</span>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 rounded-full h-2"
                  style={{ width: `${hospital.knowledge.drugA}%` }}
                />
              </div>
            </div>
            <div className="text-sm">
              <span className="font-medium">Drug D Knowledge:</span>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-500 rounded-full h-2"
                  style={{ width: `${hospital.knowledge.drugD}%` }}
                />
              </div>
            </div>
            <div className="text-sm">
              <span className="font-medium">H&I Knowledge:</span>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-purple-500 rounded-full h-2"
                  style={{ width: `${hospital.knowledge.hormonesImmunosuppressants}%` }}
                />
              </div>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}