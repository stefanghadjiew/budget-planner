import * as crypto from 'crypto';

interface TokenKeys {
  accessTokenKey: string;
  refreshTokenKey: string;
}

export function generateKeys(): TokenKeys {
  const accessTokenKey = crypto.randomBytes(64).toString('hex');
  const refreshTokenKey = crypto.randomBytes(64).toString('hex');
  return { accessTokenKey, refreshTokenKey };
}

export const test = function () {};
