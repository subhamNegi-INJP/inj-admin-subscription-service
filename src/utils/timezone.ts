// Timezone utility functions for IST (Indian Standard Time)

/**
 * Get current date in IST timezone
 */
export const getISTDate = (): Date => {
  const now = new Date();
  // IST is UTC+5:30
  const istOffset = 5.5 * 60 * 60 * 1000; // 5 hours 30 minutes in milliseconds
  const utcOffset = now.getTimezoneOffset() * 60 * 1000;
  return new Date(now.getTime() + utcOffset + istOffset);
};

/**
 * Convert a date to IST
 */
export const toIST = (date: Date): Date => {
  const istOffset = 5.5 * 60 * 60 * 1000;
  const utcOffset = date.getTimezoneOffset() * 60 * 1000;
  return new Date(date.getTime() + utcOffset + istOffset);
};

/**
 * Format date as IST string
 */
export const formatIST = (date: Date): string => {
  return date.toLocaleString('en-IN', { 
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });
};

/**
 * Get token expiration date in IST
 */
export const getTokenExpirationIST = (expiresIn: string): Date => {
  const now = new Date();
  const match = expiresIn.match(/^(\d+)([smhd])$/);
  
  if (!match) {
    // Default to 1 hour
    return new Date(now.getTime() + 60 * 60 * 1000);
  }
  
  const value = parseInt(match[1], 10);
  const unit = match[2];
  
  let expirationMs: number;
  switch (unit) {
    case 's':
      expirationMs = value * 1000;
      break;
    case 'm':
      expirationMs = value * 60 * 1000;
      break;
    case 'h':
      expirationMs = value * 60 * 60 * 1000;
      break;
    case 'd':
      expirationMs = value * 24 * 60 * 60 * 1000;
      break;
    default:
      expirationMs = 60 * 60 * 1000;
  }
  
  return new Date(now.getTime() + expirationMs);
};
