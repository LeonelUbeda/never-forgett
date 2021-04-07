import { Group } from '../../ts/interfaces/payments/group.interface';

export const CREATE_GROUP = 'PAYMENTS/CREATE_GROUP';
export const UPDATE_GROUP = 'PAYMENTS/UPDATE_GROUP';
export const IS_LOADING = 'PAYMENTS/IS_LOADING';

export interface CreateGroup {
  type: typeof CREATE_GROUP;
  payload: Group;
}

export interface UpdateGroup {
  type: typeof UPDATE_GROUP;
  payload: { id: number; payment: Group };
}

export type GroupActionsType = CreateGroup | UpdateGroup;
