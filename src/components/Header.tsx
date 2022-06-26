import { List } from "phosphor-react";
import { Logo } from "./Logo";

function Header() {
    return (
        <header className="w-full py-5 lg:px-0 px-6 flex items-center lg:justify-center justify-between bg-gray-700 border-b border-gray-600">
            <Logo />
            <div className="lg:hidden flex items-center gap-x-2">
                <span className="text-gray-100 text-sm">Aulas</span>
                <List size={32} className="text-blue-500" />
            </div>
        </header>
    );
}

export default Header;
