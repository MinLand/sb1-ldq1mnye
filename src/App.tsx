import React, { useState } from 'react';
import { LoginForm } from './components/LoginForm';
import { RoomSelection } from './components/RoomSelection';
import { GameInterface } from './components/game/GameInterface';
import { GameProvider } from './contexts/GameContext';
import type { User } from './types';
import { generateRoomId } from './utils/roomUtils';

export function App() {
  const [user, setUser] = useState<User | null>(null);
  const [gameStarted, setGameStarted] = useState(false);

  const handleLogin = (email: string, password: string) => {
    // TODO: Implement actual authentication
    setUser({ email });
  };

  const handleCreateRoom = () => {
    const roomId = generateRoomId();
    console.log('Created room:', roomId);
    setGameStarted(true);
  };

  const handleJoinRoom = (roomId: string) => {
    console.log('Joining room:', roomId);
    setGameStarted(true);
  };

  if (gameStarted) {
    return (
      <GameProvider>
        <GameInterface />
      </GameProvider>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {!user ? (
          <LoginForm onLogin={handleLogin} />
        ) : (
          <div className="bg-white shadow-xl rounded-lg p-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Welcome, {user.email}</h2>
              <p className="text-gray-600 mt-2">Choose an option to start playing</p>
            </div>
            <RoomSelection onCreateRoom={handleCreateRoom} onJoinRoom={handleJoinRoom} />
          </div>
        )}
      </div>
    </div>
  );
}