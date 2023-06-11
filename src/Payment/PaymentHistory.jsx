import { useEffect, useState } from "react";

const PaymentHistory = () => {
  const [payments, setPayments] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/payments')
      .then((res) => res.json())
      .then((data) => {
        const sortedData = data.sort((a, b) => b.transactionId - a.transactionId);
        setPayments(sortedData);
        console.log(data.length);
      });
  }, []);

  return (
    <div className="w-full">
      <div className="p-5 flex justify-between gap-30 items-center">
        <div>
          <h2 className="font-bold text-orange-400">Payment History </h2>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>transactionId</th>
              <th>email</th>
              <th>price</th>
            </tr>
          </thead>
          <tbody>
            {payments?.map((payment) => (
              <tr key={payment._id}>
                <td>{payment.transactionId}</td>
                <td>{payment.email}</td>
                <td>{payment.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
