import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceKissWinkHeart } from "@fortawesome/free-solid-svg-icons";

function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://hollarkiddies-backend.onrender.com/api/products", {
        withCredentials: true,
      })
      .then((response) => {
        // Sort products by created_at in descending order to display the latest products first
        const sortedProducts = response.data.sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );
        setProducts(sortedProducts);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  // Get current products for pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Make it scroll to the top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Calculate total pages
  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <div>
      {/* Banner */}
      <div className="w-full relative">
        <img
          alt="cart"
          width="0"
          height="0"
          decoding="async"
          data-nimg="1"
          className="min-h-[124px] md:min-h-0 h-auto w-full md:object-cover"
          src="https://trackdudi-uploads.s3.eu-west-3.amazonaws.com/uploads/store-banners/1707226682887-03.jpg"
        />
        <div className="absolute top-0 w-full flex justify-center items-center h-full">
          <h3 className="font-fjalla text-base md:text-[3.125rem] font-semibold text-center text-[#FFF] max-w-7xl leading-6 md:leading-[56px]">
            Welcome To HollartKiddies
            <FontAwesomeIcon
              icon={faFaceKissWinkHeart}
              className="text-white-500 text-2xl"
            />
          </h3>
        </div>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto p-4">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <TailSpin height="50" width="50" color="#4fa94d" />
          </div>
        ) : (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentProducts.map((product) => (
                <div
                  key={product.product_id}
                  className="bg-white shadow-md rounded-lg overflow-hidden"
                  onClick={() => handleProductClick(product.product_id)}
                >
                  {/* Product Image */}
                  {product.images && product.images.length > 0 ? (
                    <img
                      src={product.images[0].secure_url}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                  ) : (
                    <div className="w-full h-48 flex items-center justify-center bg-gray-200">
                      <span>No Image Available</span>
                    </div>
                  )}

                  <div className="p-4">
                    {/* Product Name */}
                    <h2 className="text-xl font-semibold text-gray-800">
                      {product.name}
                    </h2>
                    {/* Product Price */}
                    <div className="mt-4">
                      <span className="text-lg font-bold text-green-500">
                        ₦{product.price}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center mt-8">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-4 py-2 mx-1 text-white rounded ${
                  currentPage === 1
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600"
                }`}
              >
                Previous
              </button>

              {/* Display page numbers */}
              <div className="flex items-center space-x-2">
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => paginate(index + 1)}
                    className={`px-4 py-2 text-white rounded ${
                      currentPage === index + 1
                        ? "bg-blue-500 cursor-not-allowed"
                        : "bg-blue-500 hover:bg-blue-600"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>

              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={indexOfLastProduct >= products.length}
                className={`px-4 py-2 mx-1 text-white rounded ${
                  indexOfLastProduct >= products.length
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600"
                }`}
              >
                Next
              </button>
            </div>

            {/* Pagination info */}
            <div className="text-center mt-4 text-gray-500">
              Page {currentPage} of {totalPages}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Product;
