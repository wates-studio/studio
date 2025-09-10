import placeholderImages from '@/lib/placeholder-images.json';

export interface Scene {
  id: string;
  name: string;
  imageOn: string;
  imageOff: string;
}

export const scenes: Scene[] = [
  {
    id: 'living-room',
    name: 'Living Room',
    imageOn: placeholderImages.hero_living_room_on.src,
    imageOff: placeholderImages.hero_living_room_off.src,
  },
  {
    id: 'lounge',
    name: 'Lounge',
    imageOn: placeholderImages.hero_lounge_on.src,
    imageOff: placeholderImages.hero_lounge_off.src,
  },
  {
    id: 'bedroom',
    name: 'Bedroom',
    imageOn: placeholderImages.hero_bedroom_on.src,
    imageOff: placeholderImages.hero_bedroom_off.src,
  },
];
