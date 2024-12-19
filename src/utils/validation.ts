/**
 * Validates if a room ID is in the correct format
 * @param roomId The room ID to validate
 * @returns boolean indicating if the room ID is valid
 */
export function isValidRoomId(roomId: string): boolean {
  return /^\d{6}$/.test(roomId);
}

/**
 * Validates an email address
 * @param email The email address to validate
 * @returns boolean indicating if the email is valid
 */
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}