import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { decode } from 'blurhash';

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

/**
 * get data URL from blurhash
 * 
 * @param blurhash blurhash string
 * @param width width of image
 * @param height height of image
 * @returns data URL
 */
export const getDataURL = (blurhash: string, width: number, height: number) => {
  const pixels = decode(blurhash, width, height);
  const base64 = Buffer.from(
    pixels.reduce((acc, cur) => acc + String.fromCharCode(cur), ''),
    'base64',
  );

  return `data:image/png;base64,${base64}`;
};
