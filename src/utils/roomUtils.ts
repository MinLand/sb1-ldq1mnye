/**
 * Generates a random 6-digit room ID
 * @returns A string containing a 6-digit room ID
 */
export function generateRoomId(): string {
  return Math.random().toString().slice(2, 8);
}