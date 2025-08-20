
export interface Milestone {
  id: number;
  title: string;
  date: string;
  ageInDays: number;
  description: string;
  imageUrl: string;
}

export interface GalleryImage {
  id: number;
  url: string;
  alt: string;
}

export interface Gallery {
  id: number;
  month: string;
  title: string;
  images: GalleryImage[];
}

export interface Wish {
  id: number;
  name: string;
  relation: string;
  message: string;
  language: string;
}

export interface Video {
  id: number;
  title: string;
  relation: string;
  videoUrl: string;
  thumbnailUrl: string;
}
