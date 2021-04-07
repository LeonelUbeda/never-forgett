import { Group } from '../../ts/interfaces/payments/group.interface';
import { CreateGroup, CREATE_GROUP } from './groups.types';

export const createPayment = (group: Group): CreateGroup => {
  return { type: CREATE_GROUP, payload: group };
};
