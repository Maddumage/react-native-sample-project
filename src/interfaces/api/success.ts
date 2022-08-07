import { ApiResponseBase } from './base';

export interface ApiSuccess extends ApiResponseBase {
	results: any;
}
