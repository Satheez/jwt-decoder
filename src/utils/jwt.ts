import { jwtDecode } from 'jwt-decode';

export interface JwtHeader {
  alg: string;
  typ: string;
  [key: string]: any;
}

export interface JwtPayload {
  iss?: string;
  sub?: string;
  aud?: string | string[];
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  [key: string]: any;
}

export interface DecodedJwt {
  header: JwtHeader;
  payload: JwtPayload;
  signature: string;
  isValid: boolean;
  isExpired: boolean;
  error?: string;
}

export function decodeJwt(token: string): DecodedJwt {
  try {
    // Remove any whitespace
    const cleanToken = token.trim();
    
    // Basic JWT format validation
    const parts = cleanToken.split('.');
    if (parts.length !== 3) {
      throw new Error('Invalid JWT format. Expected 3 parts separated by dots.');
    }

    // Decode header and payload
    const header = jwtDecode(cleanToken, { header: true }) as JwtHeader;
    const payload = jwtDecode(cleanToken) as JwtPayload;
    const signature = parts[2];

    // Check if token is expired
    const now = Math.floor(Date.now() / 1000);
    const isExpired = payload.exp ? payload.exp < now : false;

    return {
      header,
      payload,
      signature,
      isValid: true,
      isExpired,
    };
  } catch (error) {
    return {
      header: {} as JwtHeader,
      payload: {} as JwtPayload,
      signature: '',
      isValid: false,
      isExpired: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
}

export function formatTimestamp(timestamp: number): string {
  return new Date(timestamp * 1000).toLocaleString();
}

export function copyToClipboard(text: string): Promise<void> {
  return navigator.clipboard.writeText(text);
}