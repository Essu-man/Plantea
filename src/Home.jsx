

const products = [
  {
    id: 1,
    name: "Zip Tote Basket",
    description: "White and black",
    price: "$140",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Zip Tote Basket in white and black color.",
  },
  {
    id: 2,
    name: "Zip High Wall Tote",
    description: "White and blue",
    price: "$150",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg",
    imageAlt: "Zip High Wall Tote in white and blue color.",
  },
  {
    id: 3,
    name: "Halfsize Tote",
    description: "Clay",
    price: "$210",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg",
    imageAlt: "Halfsize Tote in clay color.",
  },
  {
    id: 4,
    name: "High Wall Tote",
    description: "Black and orange",
    price: "$210",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg",
    imageAlt: "High Wall Tote in black and orange color.",
  },
];

export default function Home() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Customers also bought
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow overflow-hidden group"
            >
              {/* Product Image */}
              <div className="relative">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-64 object-cover group-hover:opacity-90"
                />
                <div className="absolute bottom-0 right-0 bg-gray-800 bg-opacity-75 text-white px-2 py-1 text-sm">
                  {product.price}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="text-sm text-gray-700 font-semibold">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500">{product.description}</p>
                <button className="mt-4 w-full bg-gray-100 text-gray-900 py-2 px-4 rounded-md hover:bg-gray-200">
                  Add to bag
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
