import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import CreatePayment from '../../components/payments/CreatePaymentForm';
import useWindowSize from '../../hooks/useWindowSize';
import { useDispatch, useSelector } from 'react-redux';
import { Payment } from '../../ts/interfaces/payments/payment.interface';
import { createPayment } from '../../store/payments/payments.actions';
import { RootState } from '../../store/index';

const Payments = () => {
  const [showCreatePayment, setShowCreatePayment] = useState(false);
  const { isMobile } = useWindowSize();
  const dispatch = useDispatch();
  const { payments } = useSelector((state: RootState) => state.payments);
  function handleOnSuccess(e: Payment) {
    setShowCreatePayment(false);
    dispatch(createPayment(e));
  }

  return (
    <>
      <Button type="primary" onClick={() => setShowCreatePayment(true)}>
        Open
      </Button>
      <h1 className="text-red-600">Payments</h1>

      <div className="md:w-1/2">
        {/* <CreatePayment handleOnSuccess={handleOnSuccess} /> */}
        {payments.map((e) => (
          <h1 key={e.name} className="my-2">
            {e.name} | {e.id}
          </h1>
        ))}
      </div>

      <Drawer
        visible={showCreatePayment}
        onClose={() => setShowCreatePayment(false)}
        width={isMobile ? '90%' : '60%'}
      >
        {showCreatePayment && (
          <CreatePayment handleOnSuccess={handleOnSuccess} />
        )}
      </Drawer>
    </>
  );
};

export default Payments;
