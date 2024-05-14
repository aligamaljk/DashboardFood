import { Card, Image } from "antd"
import "./ProductsCard.scss"

import img from "../../../assets/Frame.png"
const ProductsCard = () => {
  return (
    <>
        <Card hoverable className="card-product" cover  >
            <div className="img">
                <Image preview={false} src={img}/>
            </div>
            <div className="info">
                <h2 className="price">120$</h2>
                <div className="rating">4.5</div>
            </div>
            <h2 className="title">
                title
            </h2>
            <div className="footer">
                <span>4 pieces</span>
            </div>
        </Card>
    </>
  )
}

export default ProductsCard