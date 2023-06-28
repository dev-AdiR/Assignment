import { environment } from 'src/environments/environment.development';

export interface Compound {
  id: number;
  name: string;
  description: string;
  imageSource: string;
  imageAttribution: string;
  dateModified: Date;
}

export const baseUrl: string = environment.baseUrl;
