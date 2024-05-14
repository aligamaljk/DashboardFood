import ProductsCard from "../../Components/Admin/ProductsCard/ProductsCard"
import "./Vegetarians.scss"
const Vegetarians = () => {
  return (
    <>
       <div className="vegetarians">
            <h1>Vegetarians</h1>
            <div className="content">
                <ProductsCard/>
            </div>
       </div>
    </>
  )
}

export default Vegetarians