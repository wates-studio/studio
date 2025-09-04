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
    imageOn: '/hero1-on.png',
    imageOff: '/hero1-off.png',
  },
  {
    id: 'lounge',
    name: 'Lounge',
    imageOn: 'https://picsum.photos/1920/1280?random=1',
    imageOff: 'https://picsum.photos/1920/1280?random=2',
  },
  {
    id: 'bedroom',
    name: 'Bedroom',
    imageOn: 'https://picsum.photos/1920/1280?random=3',
    imageOff: 'https://picsum.photos/1920/1280?random=4',
  },
];