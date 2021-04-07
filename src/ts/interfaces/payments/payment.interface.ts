import PaymentType from '../../enums/paymentTypes.enum';
import { BasicInvoice } from './bill.interface';
import { Group } from './group.interface';

type weekDays = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export interface BasicPayment {
  id: string;
  name: string;
  group: Group;
  description?: string;
  custumerId?: string;
  amountToPay?: number;
}

export interface MontlyPayment extends BasicPayment {
  type: PaymentType.Montly;
  amountChange: boolean;
  invoiceDay: Date;
  bills?: BasicInvoice[];
}

export interface WeeklyPayment extends BasicPayment {
  type: PaymentType.Weekly;
  paymentDay: weekDays;
  bills?: BasicInvoice[];
}

export interface UniquePayment extends BasicPayment {
  type: PaymentType.Unique;
  paymentDate: Date;
  bill?: BasicInvoice;
}

export type Payment = MontlyPayment | WeeklyPayment | UniquePayment;
