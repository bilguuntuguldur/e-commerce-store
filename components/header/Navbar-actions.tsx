"use client"

import { ShoppingBag } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/button"
import useCart from "@/hooks/use-cart";

const NavbarActions = () => {
    const [isMounted, setIsMounted] =useState(false); 

    useEffect (() => {
        setIsMounted(true);
    }, []);

    const router = useRouter();
    const cart = useCart();

    if (!isMounted) {
        return null;
    }

    return (
        <div className="flex ml-auto flex items-center gap-x-4">
            <Button onClick={() => router.push("/cart")}>
                <ShoppingBag 
                    size={20}
                    color="white"
                />
                <span className="ml-2 text-sm font-medium text-white">{cart.items.length}</span>
            </Button>
        </div>
    )
} 

export default NavbarActions;