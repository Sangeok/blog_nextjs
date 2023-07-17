export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold text-gray-800">404</h1>
            <p className="text-gray-600 mt-2">Oops! The page you're looking for doesn't exist.</p>
            <a href="/" className="mt-4 text-blue-500 hover:text-blue-700">Go back to the homepage</a>
        </div>
    )
}