import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { clsx } from 'clsx';
import { useState } from "react";

const BookCard = ({ title, author, category, coverImage }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        backgroundColor: "#1e1e1e",
        borderRadius: "12px",
        overflow: "hidden",
        width: "320px",
        height: "400px",
        margin: "20px",
        position: "relative",
        transition: "all 0.3s ease-in-out",
        transform: isHovered ? "translateY(-10px)" : "translateY(0)",
        boxShadow: isHovered
          ? "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
          : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${coverImage || "/placeholder.svg"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "all 0.3s ease-in-out",
          filter: isHovered ? "brightness(30%)" : "brightness(50%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "20px",
          background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)",
          transition: "all 0.3s ease-in-out",
          transform: isHovered ? "translateY(0)" : "translateY(20px)",
          opacity: isHovered ? 1 : 0.8,
        }}
      >
        <h3
          style={{
            color: "#ffffff",
            fontSize: "1.5rem",
            marginBottom: "8px",
            transition: "all 0.3s ease-in-out",
            transform: isHovered ? "translateY(0)" : "translateY(20px)",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            color: "#cccccc",
            fontSize: "1rem",
            marginBottom: "12px",
            transition: "all 0.3s ease-in-out",
            transform: isHovered ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "0.05s",
          }}
        >
          {author}
        </p>
        <span
          style={{
            backgroundColor: "#333333",
            color: "#ffffff",
            padding: "4px 8px",
            borderRadius: "4px",
            fontSize: "0.8rem",
            transition: "all 0.3s ease-in-out",
            transform: isHovered ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "0.1s",
            display: "inline-block",
          }}
        >
          {category}
        </span>
      </div>
    </div>
  );
};

export function Container({ className, children }) {
  return (
    <div className={clsx(className, 'px-6 lg:px-8')}>
      <div className="mx-auto max-w-2xl lg:max-w-7xl">{children}</div>
    </div>
  );
}

function Hello() {
  const { collections } = useContext(AppContext);

  console.log('Collections:', collections);
  const books = [
    {
      title: "Science",
      category: "Science Fiction",
      coverImage: "https://i.pinimg.com/736x/03/2b/b4/032bb4387d0796e02d7e23ac92adea99.jpg",
    },
    {
      title: "Fiction",
      category: "Fiction",
      coverImage: "https://i.pinimg.com/736x/a1/d2/c2/a1d2c2debc103677d29b6e48590eaebb.jpg",
    },
    {
      title: "Non-Fiction",
      category: "Non-Fiction",
      coverImage: "https://i.pinimg.com/736x/0c/ae/e3/0caee315c0515203ebc340e0bae0ea1d.jpg",
    },
    {
      title: "Thriller",
      category: "Thriller",
      coverImage: "https://i.pinimg.com/736x/c5/e8/76/c5e876242e90d453122d2670f81d8be7.jpg",
    },
  ];

  return (
    <div className="mt-16 bg-gradient-to-t from-gray-100 pb-14 text-white rounded-b-[40px]">
      <Container>
        <h2 className="text-2xl font-medium tracking-tight">Featured</h2>
        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-4">
          {collections.map((collection, CollectionID) => (
            <div
              key={CollectionID}
              className="relative flex flex-col rounded-3xl bg-white p-2 shadow-md shadow-black/5 ring-1 ring-black/5"
            >
              {collection.CollectionImageURL && (
                <img
                  src={`${collection.CollectionImageURL}?w=1170&h=780`}
                  alt={collection.CollectionName}
                  className="w-full h-48 object-cover rounded-t-3xl"
                />
              )}
              <div className="flex flex-1 flex-col p-8">
                <div className="text-sm/5 text-gray-700">
                  {new Date(collection.CreationDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
                <div className="mt-2 text-base/7 font-medium">
                  <a href={`/collections/${collection.CollectionID}`}>
                    <span className="absolute inset-0" />
                    {collection.CollectionName}
                  </a>
                </div>
                <div className="mt-2 flex-1 text-sm/6 text-gray-500">
                  {collection.Description}
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-medium tracking-tight mt-16">Book Collection</h2>
        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {books.map((book, index) => (
            <BookCard key={index} {...book} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Hello;
