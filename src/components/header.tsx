import logo from "../assets/logo.png"

export function Header() {
    return (
        <header className="bg-white py-2">
            <div className="flex justify-center items-center">
                <img
                    src={logo}
                    alt="Logo"
                    className="w-44 md:w-32 lg:w-48"
                />
            </div>
        </header>
    )
}