import { Menu, X} from "lucide-react";
import { useState , useEffect} from "react";
import Button from "./Button";
function Header() {

    const [ isMenuOpen , setIsOpen] = useState(false);
    const [isScrolled , setIsScrolled] = useState(false);

    useEffect(() =>{
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll" , handleScroll);
        return () => window.removeEventListener("scroll" , handleScroll);
    } , [])

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsOpen(false);   
    }

    const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
    ];

    return (
    <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
            isScrolled ? "bg-slate-950 backdrop-blur-lg border-b border-slate-800" 
            : "bg-transparent"}`}
    >
        <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">
                    <span className="text-green-400">AAYUSH</span>
                    <span className="text-white">PALIWAL</span>
                    <span className="text-green-400">.</span>
                </div>

                {/* {Desktop Menus} */}
                <nav className="hidden md:flex space-x-8">
                    {navItems.map((item , index) => {
                        return <button onClick={() => scrollToSection(item.href)} className=" text-gray-300 hover:text-green-400 transition-all duration-200 font-medium relative group" style={{animationDelay: `${index *  0.1}s`}} key={index} > 
                        {item.name}
                        <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
                        </button>;
                    })}
                </nav>

                {/* CV Button  */}
                <a href="/Aayush_paliwal_SDE.pdf" download="Aayush_Paliwal_SDE.pdf" className="hidden md:block">
                    <Button content={"Download CV Now"}></Button>
                </a>

                {/* Mobile Menu Button */}
                <button 
                className="text-white md:hidden" 
                onClick={() => setIsOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
           {isMenuOpen && (
                <nav 
                className="md:hidden mt-4 pb-4 border-t border-slate-800 pt-4 bg-slate-800 rounded-lg shadow-lg"
                >
                {/* nav items  */}
                {navItems.map((item , index) => {
                    return ( <button onClick={() => scrollToSection(item.href)} key={index} className="block w-full text-left py-3 px-4 text-gray-300    hover:text-green-400 hover:bg-slate-700 transition-all duration-300 rounded-lg"> {item.name}</button>
                    );
                })}

                <a href="/Aayush_paliwal_SDE.pdf" download="Aayush_paliwal_SDE.pdf">
                    <Button content="Download CV Now" />
                </a>

                </nav>
           )}
        </div>
    </header>
    );
}

export default Header;