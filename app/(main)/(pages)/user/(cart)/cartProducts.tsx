import { Button } from "@/components/ui/button";
import { cartType } from "@/lib/utils";
import { useEffect, useState } from "react";
const image =
  "https://res.cloudinary.com/teepublic/image/private/s--2Sc3vyBD--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_470/c_crop,g_north_west,h_626,w_470,x_0,y_0/g_north_west,u_upload:v1462829020:production:blanks:h778z1f0n6g0xugjpxxm,x_-395,y_-325/b_rgb:eeeeee/c_limit,f_auto,h_630,q_auto:good:420,w_630/v1710240231/production/designs/58375714_0.jpg";


  export function CartProduct() {
    const [quantity, setQuantity] =useState<number>(1)
    const [price, setPrice] = useState<number>(499)
    useEffect(()=>{
        setPrice((pre)=> pre * quantity)
    },[quantity])
    return (
      <div className="flex items-center gap-4 bg-gray-100 px-4 py-3 dark:bg-gray-800">
        <img
          alt="Product Image"
          className="rounded-md"
          height={64}
          src={image}
          style={{
            aspectRatio: "64/64",
            objectFit: "cover",
          }}
          width={64}
        />
        <div className="flex-1">
          <h3 className="font-medium">Acme Circles T-Shirt</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Color: Black
          </p>
          <p className="font-semibold">${" "}{price}</p>
        </div>
        
        <div className="flex items-center gap-2">
          <Button
            size="icon"
            variant="outline"
            onClick={() => {
              setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
            }}>
            <MinusIcon className="h-4 w-4" />
            <span className="sr-only">Decrease quantity</span>
          </Button>
          <span className="text-base font-medium">{quantity}</span>
          <Button
            size="icon"
            variant="outline"
            onClick={() => {
              setQuantity((prevQuantity) => Math.min(prevQuantity + 1, 10));
            }}>
            <PlusIcon className="h-4 w-4" />
            <span className="sr-only">Increase quantity</span>
          </Button>
        </div>
      </div>
    );
  }

function MinusIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
    </svg>
  )
}


function PlusIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}

