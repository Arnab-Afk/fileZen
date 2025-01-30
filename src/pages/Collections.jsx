import { AppContext } from "../context/AppContext"
import { useContext } from "react"
const Collections = () => {
  const { collections } = useContext(AppContext)
  const collectionId = window.location.pathname.split('/').pop()
  console.log('Collection ID:', collectionId)
  console.log('Collections:', collections)
  return (
    
    <>
      Hello
    </>
  )
}

export default Collections