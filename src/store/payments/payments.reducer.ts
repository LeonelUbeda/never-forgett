import { Payment } from '../../ts/interfaces/payments/payment.interface';
import {
  CREATE_PAYMENT,
  PaymentActionsType,
  UPDATE_PAYMENT,
} from './payments.types';

interface PaymentState {
  payments: Payment[];
}

const initialState: PaymentState = {
  payments: [],
};

function reducer(
  state = initialState,
  action: PaymentActionsType
): PaymentState {
  switch (action.type) {
    case CREATE_PAYMENT:
      return { ...state, payments: [action.payload, ...state.payments] };
    case UPDATE_PAYMENT:
    default:
      return state;
  }
}

export default reducer;
