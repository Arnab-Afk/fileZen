import { useContext } from "react";
import { AppContext } from "../context/AppContext";





import { clsx } from 'clsx'

// eslint-disable-next-line react/prop-types
export function Container({ className, children }) {
  return (
    <div className={clsx(className, 'px-6 lg:px-8')}>
      <div className="mx-auto max-w-2xl lg:max-w-7xl">{children}</div>
    </div>
  )
}

function Collections() {
  const { collections } = useContext(AppContext);

  console.log('Collections:', collections);
  return (
    <div className="mt-16 bg-gradient-to-t from-gray-100 pb-14">
      <Container>
        <h2 className="text-2xl font-medium tracking-tight">Featured</h2>
        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {collections.map((collection , CollectionID) => (
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
      </Container>
    </div>
  )
}


export default Collections;