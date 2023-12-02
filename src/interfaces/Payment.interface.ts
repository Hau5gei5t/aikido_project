export default interface IPayments {
  id: number;
  studentID: number;
  paymentDate: string;
  title: string;
  sum: string | number;
  status:
    | "waiting for payment"
    | "expired"
    | "cancelled"
    | "processing"
    | "completed";
  description?: string;
}
