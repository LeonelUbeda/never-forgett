export interface BasicInvoice {
  paidAmount: number;
  paidAt: Date;
  billNumber?: string;
  note?: string;
}
