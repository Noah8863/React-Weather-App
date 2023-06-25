function NavBar() {
  return (
    <header className="bg-gray-800">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div>
          <h1 className="text-white font-bold text-xl">Weather Report</h1>
        </div>
        <div>
          <form className="flex items-center">
            <input
              type="search"
              className="bg-gray-700 text-white px-4 py-2 rounded-l-lg focus:outline-none"
              placeholder="Search"
            />
            <button
              type="submit"
              className="bg-gray-600 text-white px-4 py-2 rounded-r-lg"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}
export { NavBar };
