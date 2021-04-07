import { Payment } from '../../ts/interfaces/payments/payment.interface';

export const CREATE_PAYMENT = 'PAYMENTS/CREATE_PAYMENT';
export const UPDATE_PAYMENT = 'PAYMENTS/UPDATE_PAYMENT';
export const IS_LOADING = 'PAYMENTS/IS_LOADING';

export interface CreatePayment {
  type: typeof CREATE_PAYMENT;
  payload: Payment;
}

export interface UpdatePayment {
  type: typeof UPDATE_PAYMENT;
  payload: { id: number; payment: Payment };
}

export type PaymentActionsType = CreatePayment | UpdatePayment;
