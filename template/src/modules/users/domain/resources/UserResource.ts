import { BaseRestResource } from '@snap-alex/domain-js';
import httpResource from '../../../core/httpResource';

export class UserResource extends BaseRestResource {}

const userResource = new UserResource(httpResource, 'user');
export default userResource;
