import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingBagIcon } from "lucide-react";
import { CartProduct } from "./cartProducts";

export function SheetDemo() {
  return (
    <Sheet >
      <SheetTrigger asChild>
        <Button className="ml-auto mx-2" size="icon" variant="ghost">
          <ShoppingBagIcon className="w-6 h-6" />
          <span className="sr-only">View cart</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
          <SheetDescription>
            You can make changes in this cart it will reflect on main
          </SheetDescription>
        </SheetHeader>
        <CartProduct  />
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Order Now</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
