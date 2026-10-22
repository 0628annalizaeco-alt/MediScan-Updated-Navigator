export type Avatar = { id: number; emoji: string; bg: string };

export const AVATARS: Avatar[] = [
  { id: 1, emoji: '👦', bg: '#DCEBFB' },
  { id: 2, emoji: '👧', bg: '#FCE1E4' },
  { id: 3, emoji: '👩', bg: '#FDEBD3' },
  { id: 4, emoji: '👨', bg: '#DBF0DF' },
  { id: 5, emoji: '👩‍🦱', bg: '#E9E1FB' },
  { id: 6, emoji: '👨‍🦱', bg: '#FFF4C7' },
  { id: 7, emoji: '👵', bg: '#E1F4F6' },
  { id: 8, emoji: '👴', bg: '#F3E3D3' },
  { id: 9, emoji: '🧕', bg: '#FCE1E4' },
  { id: 10, emoji: '🧔', bg: '#DCEBFB' },
  { id: 11, emoji: '👶', bg: '#FFF4C7' },
  { id: 12, emoji: '🧑', bg: '#DBF0DF' },
];

export const getAvatar = (id: number) => AVATARS.find((a) => a.id === id) ?? AVATARS[0];