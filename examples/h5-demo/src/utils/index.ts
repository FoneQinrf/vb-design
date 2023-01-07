import CryptoJS from 'crypto-js';

export function encodeBase64(str: string): any {
  return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(str));
}
export function decodeBase64(str: string): any {
  return CryptoJS.enc.Base64.parse(str).toString(CryptoJS.enc.Utf8);
}
