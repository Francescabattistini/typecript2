export interface Article {
  id: number;
  title: string;
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string;
  updated_at: Date;
  featured: boolean;
  launches?: Launch[];
  events?: any[];
}

export interface Launch {
  launch_id: string;
  provider: string;
}
