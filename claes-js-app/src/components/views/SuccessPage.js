import { Link } from "react-router-dom";

function SuccessPage() {
  return (
    <div>
      <h1>Order Successful!</h1>
      <p>Thank you for your order. Your items will be shipped soon.</p>
      <div>
        <Link to="/" className="text-blue-400 text-xl">
          Browse further
        </Link>
      </div>
      <div>
        <Link to="/contact" className="text-blue-400 text-xl">
          Contact us
        </Link>
      </div>
    </div>
  );
}

export default SuccessPage;
