export type LayoutMode =
  | 'pink-portrait'
  | 'white-portrait'
  | 'scrapbook-collage'
  | 'height-comparison'
  | 'cinematic-film';

export interface PhotoData {
  url: string;
  name: string;
  size: number;
  uploadedAt: string;
}

export interface AppreciationCardItem {
  id: number;
  title: string;
  iconName: string;
  frontSnippet: string;
  message: string;
  accent: 'pink' | 'rose' | 'amber' | 'slate';
}

export interface AiArtItem {
  id: string;
  title: string;
  style: string;
  imageUrl: string;
  createdAt: string;
}
