import React from "react";

const BasicPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">My Project</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-xl font-semibold mb-4">Welcome!</h2>
        <p>This is a basic template page. Replace this content with your own.</p>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-600 py-4 mt-auto text-center">
        Crafted 💡 by MD Asim & Chayan Bez
      </footer>
    </div>
  );
};

export default BasicPage;
