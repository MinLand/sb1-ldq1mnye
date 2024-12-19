export interface User {
  email: string;
  company?: 'A' | 'D';
}

export interface Room {
  id: string;
  players: User[];
}

export interface Hospital {
  id: string;
  name: string;
  doctors: number;
  patients: number;
  knowledge: {
    drugA: number;
    drugD: number;
    hormonesImmunosuppressants: number;
  };
}