import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faWhatsappSquare } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";

export default function Reviews() {
  const reviews = [
    {
      name: "Babatunde",
      date: "August 12, 2025",
      comment:
        "I love the quality of the products and the customer service is top-notch. I will definitely be buying from them again.",
    },
    {
      name: "Olakunle",
      date: "August 10, 2025",
      comment: "Really good materials they got",
    },
    {
      name: "Adeola Olaiya",
      date: "August 8, 2025",
      comment: "I love the fact that i got a discount on my first purchase",
    },
  ];

  return (
    <div className="font-clash bg-gray-100 py-10 px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h3 className="text-3xl font-extrabold text-gray-800">
            What Our Customers Say
          </h3>
          <p className="font-satoshi text-lg text-gray-600 mt-2">
            Real feedback from people who’ve worked with us.
          </p>
        </div>

        {/* Review Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <p className="text-gray-700 italic mb-4">"{review.comment}"</p>
              <div className="border-t pt-4">
                <h4 className="text-lg font-semibold text-gray-900">
                  {review.name}
                </h4>
                <p className="text-sm text-gray-500">{review.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
