import React from 'react';
import ReactDOM from 'react-dom';
import paypal from 'paypal-checkout';

const PayplaCheckoutButton = ({ order }) => {
  const paypalConf = {
    currency: 'MXN',
    env: 'sandbox',
    client: {
      sandbox: 'AbIoq_r-mjiJO5SlvJdfYokwyu4J3ebPrEzQQbdpxGrgVOlBatrYeWbX5v4jqICvxTy6IPO9Iw5zCJXC',
      production: '-- id --',
    },
    style: {
      size: 'medium',
      color: 'silver',
      shape: 'pill',
      label: 'pay',
      tagline: 'true',
    },
  };
  const PaypalButton = paypal.Button.driver('react', { React, ReactDOM });

  const payment = (data, actions) => {
    const payment = {
      transactions: [
        {
          amount: {
            total: order.total,
            currency: paypalConf.currency,
          },
          description: 'Compra en Louis Monstruon',
          custom: order.customer || '',
          item_list: {
            items: order.items,
          },
        },
      ],
      note_to_payer: 'contactanos para para devoluciones',
    };
    return actions.payment.create({ payment });
  };
  const onAuthorize = (data, actions) => {
    return actions.payment.execute()
      .then((response) => {
        console.log(response);
        alert(`Tu pago se proceso correctamente, con el ID ${response.id}`);
      })
      .catch((error) => {
        console.log(error);
        alert('Ocurrio un error con proceso de pago :(');
      });
  };
  const onError = (error) => {
    console.log(error);
    alert('No se pudo realizar el pago :(');
  };

  const onCancel = (data, actions) => {
    alert('Se cancelo proceso');
  };

  return (
    <PaypalButton
      env={paypalConf.env}
      client={paypalConf.client}
      payment={(data, actions) => payment(data, actions)}
      onAuthorize={(data, actions) => onAuthorize(data, actions)}
      onCancel={(data, actions) => onCancel(data, actions)}
      onError={(error) => onError(error)}
      style={paypalConf.style}
      commit
      locate="es_MX"
    />
  );
};

export default PayplaCheckoutButton;
