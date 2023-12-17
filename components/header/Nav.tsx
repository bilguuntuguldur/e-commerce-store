import getCategories from "@/actions/get-categories";
import Container from "@/components/ui/container"
import Link from "next/link";
import Menu from "@/components/header/Menu";
import NavbarActions from "./Navbar-actions";

export const revalidate = 0;

const Header = async () => {

    const categories = await getCategories();
    
    return (
       <div className="border-b">
            <Container>
                <div className="flex relative px-4 sm:px-6 lg:px-8 h-16 items-center">
                    <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
                        <p className="uppercase font-semibold text-xl">Beki</p>
                    </Link>
                    <Menu data={categories} />
                    <NavbarActions />
                </div>
            </Container>
       </div>
    )
}

export default Header;