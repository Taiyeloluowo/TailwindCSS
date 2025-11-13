import React from "react";

const PricingTable = () => {
  const plans = [
    {
      name: "Basic",
      price: "₦5,000/month",
      features: [
        "Access to basic tools",
        "Email support",
        "Single user account",
        "Limited cloud storage",
      ],
      popular: false,
    },
    {
      name: "Pro",
      price: "₦15,000/month",
      features: [
        "All Basic features",
        "Priority email & chat support",
        "Up to 5 user accounts",
        "100GB cloud storage",
        "Access to premium tools",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "₦50,000/month",
      features: [
        "All Pro features",
        "Dedicated account manager",
        "Unlimited users",
        "1TB secure cloud storage",
        "Custom integrations",
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Choose Your Plan
        </h2>
        <p className="text-gray-600">
          Flexible pricing plans to fit your needs — whether you are just starting or scaling big.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-2xl shadow-lg border p-8 flex flex-col justify-between transition-transform duration-300 hover:scale-105
              ${plan.popular ? "bg-green-600 text-white border-green-700 scale-105" : "bg-white text-gray-800 border-gray-200"}
            `}
          >
            {plan.popular && (
              <span className="bg-yellow-400 text-green-900 px-3 py-1 rounded-full text-sm font-semibold self-center mb-4">
                Most Popular
              </span>
            )}

            <div>
              <h3
                className={`text-2xl font-bold mb-4 ${
                  plan.popular ? "text-white" : "text-green-700"
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`text-3xl font-extrabold mb-6 ${
                  plan.popular ? "text-white" : "text-gray-900"
                }`}
              >
                {plan.price}
              </p>

              <ul className="space-y-3 mb-8 text-sm">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center justify-center gap-2"
                  >
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              className={`mt-auto w-full py-3 rounded-lg font-semibold transition 
                ${
                  plan.popular
                    ? "bg-white text-green-700 hover:bg-gray-100"
                    : "bg-green-600 text-white hover:bg-green-700"
                }`}
            >
              {plan.popular ? "Get Pro Plan" : "Choose Plan"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingTable;