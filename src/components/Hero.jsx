import { FaPlus } from "react-icons/fa";

const collections = [
  { name: "Fiction", books: 12, color: "bg-blue-600" },
  { name: "Non-Fiction", books: 8, color: "bg-green-600" },
  { name: "Science", books: 15, color: "bg-purple-600" },
  { name: "History", books: 10, color: "bg-yellow-600" },
  { name: "Biography", books: 6, color: "bg-pink-600" },
];

const Collections = () => {
  return (
    <div className="p-8 bg-[#0f172a] min-h-screen">
      <h2 className="text-white text-4xl font-bold mb-8">My Collections</h2>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 justify-center items-center">
        {collections.map((collection, index) => (
          <div
            key={index}
            className="bg-[#1e293b] p-6 rounded-xl shadow-lg w-[320px] h-[180px] flex flex-col justify-between transition transform hover:scale-105"
          >
            <div>
              <h3 className="text-white text-xl font-semibold">{collection.name}</h3>
              <p className="text-gray-400 mt-1">📖 {collection.books} books</p>
            </div>
            <button
              className={`text-white px-5 py-2 rounded-lg ${collection.color} hover:opacity-80`}
            >
              View all books &gt;
            </button>
          </div>
        ))}

        {/* Create New Collection Card */}
        <div className="bg-[#1e293b] p-6 rounded-xl shadow-lg w-[320px] h-[180px] flex flex-col items-center justify-center text-gray-400 hover:text-gray-200 cursor-pointer transition transform hover:scale-105">
          <FaPlus className="text-3xl mb-2" />
          <p className="text-lg">Create new collection</p>
        </div>
      </div>
    </div>
  );
};

export default Collections;
