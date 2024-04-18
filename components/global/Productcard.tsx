import Link from "next/link";
interface Product {
    title:string
    price:string | number
    description: string
}
export default function (props:Product) {
  return (
    <div className="group overflow-hidden rounded-lg">
      <Link className="absolute inset-0 z-10" href="#">
        <span className="sr-only">{props.title}</span>
      </Link>
      <img
        alt={props.title}
        className="object-cover w-full h-60"
        height={300}
        src="/placeholder.svg"
        style={{
          aspectRatio: "400/300",
          objectFit: "cover",
        }}
        width={400}
      />
      <div className="bg-white p-4 dark:bg-gray-950">
        <h3 className="font-semibold text-lg md:text-xl">{props.title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
         {props.description}
        </p>
        <h4 className="font-semibold text-base md:text-lg">{props.price}</h4>
      </div>
    </div>
  );
}
