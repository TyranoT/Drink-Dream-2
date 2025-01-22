

export default function Header() {
    return (
        <header className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <div className="flex items-center justify-between w-full max-w-5xl">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                    <h1 className="text-3xl font-bold">Next.js Blog</h1>
                </div>
                <nav>
                    <ul className="flex items-center gap-8">
                        <li>
                            <a href="#" className="text-lg font-medium text-gray-600 hover:text-gray-900">Home</a>
                        </li>
                        <li>
                            <a href="#" className="text-lg font-medium text-gray-600 hover:text-gray-900">Blog</a>
                        </li>
                        <li>
                            <a href="#" className="text-lg font-medium text-gray-600 hover:text-gray-900">About</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}