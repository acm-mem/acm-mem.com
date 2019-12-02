import {BaseResponse} from './base.response';

export interface CalendarsResponse extends BaseResponse {
  events: any;
  success: boolean;
  total: number;
}
