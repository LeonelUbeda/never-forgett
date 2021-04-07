import React, { useState } from 'react';
import {
  Form,
  InputNumber,
  Button,
  Input,
  Select,
  Row,
  Col,
  DatePicker,
} from 'antd';
import PaymentType from '../../ts/enums/paymentTypes.enum';
import WeekDay from '../../ts/enums/weekDays.enum';
import { Payment } from '../../ts/interfaces/payments/payment.interface';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const { Option } = Select;

// const CustomInputNumber = () => (
//   <InputNumber
//     formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
//     parser={(value = '') => value.replace(/\$\s?|(,*)/g, '')}
//   />
// );

const AmountInputsManager = () => {
  const [amountChanges, setAmountChanges] = useState(false);
  return (
    <Row>
      <Col span={11}>
        <Form.Item
          name="amountChange"
          label="Amount change"
          initialValue={0}
          required
        >
          <Select
            onChange={(value: number) => setAmountChanges(Boolean(value))}
          >
            <Option value={1}>Yes</Option>
            <Option value={0}>No</Option>
          </Select>
        </Form.Item>
      </Col>
      <Col span={1} />
      {!amountChanges && (
        <Col span={12}>
          <Form.Item
            name="amountToPay"
            label="Amount to Pay"
            required
            rules={[{ required: true, message: 'Please input an amount!' }]}
          >
            {/* TODO: Reparar esto, hacerlo un custom input */}
            <InputNumber
              formatter={(value) =>
                `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              }
              parser={(value = '') => value.replace(/\$\s?|(,*)/g, '')}
            />
          </Form.Item>
        </Col>
      )}
    </Row>
  );
};

const MontlyPaymentForm = () => {
  return (
    <>
      <AmountInputsManager />
      <Form.Item label="Month day">
        <InputNumber min={1} max={31} required />
      </Form.Item>
    </>
  );
};

const WeeklyPaymentForm = () => {
  return (
    <>
      <AmountInputsManager />
      <Form.Item name="paymentDay" label="Week" required>
        <Select>
          <Option value={WeekDay.Monday}>Monday</Option>
          <Option value={WeekDay.Tuesday}>Tuesday</Option>
          <Option value={WeekDay.Wednesday}>Wednesday</Option>
          <Option value={WeekDay.Thursday}>Thursday</Option>
          <Option value={WeekDay.Friday}>Friday</Option>
          <Option value={WeekDay.Saturday}>Saturday</Option>
          <Option value={WeekDay.Sunday}>Sunday</Option>
        </Select>
      </Form.Item>
    </>
  );
};

const UniquePaymentForm = () => {
  return (
    <>
      <Form.Item name="paymentDay" label="Month day" required>
        <DatePicker />
      </Form.Item>
      <Form.Item
        name="amountToPay"
        label="Amount to Pay"
        rules={[{ required: true, message: 'Please enter a number' }]}
      >
        <InputNumber
          formatter={(value) =>
            `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
          }
          parser={(value = '') => value.replace(/\$\s?|(,*)/g, '')}
        />
      </Form.Item>
    </>
  );
};

interface Props {
  handleOnSuccess: (e: Payment) => void;
  handleOnFail?: () => void;
}

const CreatePayment = ({ handleOnSuccess }: Props) => {
  // const [form] = Form.useForm();
  const [paymentType, setPaymentType] = useState(PaymentType.Montly);
  const { groups } = useSelector((state: RootState) => state.groups);
  console.log('heeey', groups);
  const onFinish = (formData: any) => {
    console.log('finish');
    const payment: Payment = {
      ...formData,
      id: uuidv4(),
    };
    handleOnSuccess(payment);
  };

  const onFinishFailed = (e: any) => console.log('fail', e);
  return (
    <div>
      <Form
        size="large"
        name="createPayment"
        layout="vertical"
        initialValues={{ type: paymentType }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        requiredMark="optional"
      >
        <Form.Item
          name="name"
          label="Payment name"
          rules={[{ required: true, message: 'Please enter a name' }]}
        >
          <Input placeholder="For example: Spotify plan" />
        </Form.Item>
        <Form.Item name="custumerId" label="Customer Identifier">
          <Input placeholder="Identifier used to pay" />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input.TextArea placeholder="Description" />
        </Form.Item>
        <Select
          showSearch
          style={{ width: '50%' }}
          placeholder="Select a person"
          filterOption={(input, option) =>
            option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {groups.map((e) => (
            <Option value={e.id} key={e.id}>
              {e.name}
            </Option>
          ))}
        </Select>
        ,
        <Form.Item name="type" label="Frecuency" required>
          <Select onChange={(value: PaymentType) => setPaymentType(value)}>
            <Option value={PaymentType.Montly}>Montly</Option>
            <Option value={PaymentType.Weekly}>Weekly</Option>
            <Option value={PaymentType.Unique}>Unique</Option>
          </Select>
        </Form.Item>
        {paymentType === PaymentType.Montly && <MontlyPaymentForm />}
        {paymentType === PaymentType.Weekly && <WeeklyPaymentForm />}
        {paymentType === PaymentType.Unique && <UniquePaymentForm />}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreatePayment;
