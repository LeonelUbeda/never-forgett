import { Payment } from '../../ts/interfaces/payments/payment.interface';
import { CreatePayment, CREATE_PAYMENT } from './payments.types';

export const createPayment = (payment: Payment): CreatePayment => {
  console.log(payment);
  return { type: CREATE_PAYMENT, payload: payment };
};
