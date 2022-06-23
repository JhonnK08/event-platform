import { ReactElement } from "react";
import FooterLogo from "./FooterLogo";

function Footer(): ReactElement {
    return (
        <footer className="w-full px-6 ">
            <div className="py-5 flex items-center justify-between bg-gray-700 border-t border-gray-600">
                <FooterLogo />
                <span className="text-gray-300">
                    Rocketseat - Todos os direitos reservados
                </span>
                <span className="text-gray-300">Políticas de privacidade</span>
            </div>
        </footer>
    );
}

export default Footer;
