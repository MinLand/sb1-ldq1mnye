import React, { useState } from 'react';
import { Users, Plus, LogIn } from 'lucide-react';
import { isValidRoomId } from '../utils/validation';

interface RoomSelectionProps {
  onCreateRoom: () => void;
  onJoinRoom: (roomId: string) => void;
}

export function RoomSelection({ onCreateRoom, onJoinRoom }: RoomSelectionProps) {
  const [roomId, setRoomId] = useState('');
  const [roomIdError, setRoomIdError] = useState('');

  const handleJoinRoom = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isValidRoomId(roomId)) {
      setRoomIdError('Please enter a valid 6-digit room code');
      return;
    }
    
    setRoomIdError('');
    onJoinRoom(roomId);
  };

  return (
    <div className="w-full max-w-md space-y-6">
      <button
        onClick={onCreateRoom}
        className="w-full flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg transition-colors"
      >
        <Plus className="h-5 w-5" />
        <span>Create New Room</span>
      </button>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-gray-100 text-gray-500">Or</span>
        </div>
      </div>

      <form onSubmit={handleJoinRoom} className="space-y-4">
        <div>
          <label htmlFor="roomId" className="block text-sm font-medium text-gray-700">
            Room Code
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Users className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              id="roomId"
              className={`focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md ${
                roomIdError ? 'border-red-500' : ''
              }`}
              placeholder="Enter 6-digit room code"
              value={roomId}
              onChange={(e) => {
                setRoomId(e.target.value.slice(0, 6));
                setRoomIdError('');
              }}
              pattern="[0-9]{6}"
              maxLength={6}
              required
            />
          </div>
          {roomIdError && <p className="text-red-500 text-xs italic mt-1">{roomIdError}</p>}
        </div>
        <button
          type="submit"
          className="w-full flex items-center justify-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-colors"
          disabled={roomId.length !== 6}
        >
          <LogIn className="h-5 w-5" />
          <span>Join Room</span>
        </button>
      </form>
    </div>
  );
}