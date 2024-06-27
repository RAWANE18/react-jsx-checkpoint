import product from "./Product";

export default function Image() {
  return (
    <>
    <img src={product.image}  style={{width:"585px", height:"260px" , borderTopLeftRadius:"5px" ,
  borderTopRightRadius:"5px"}} />
    </>
  )
}
