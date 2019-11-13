import {BaseResponse} from './base.response';

export interface PicturesResponse extends BaseResponse {
  imageURLs: string[];
}
