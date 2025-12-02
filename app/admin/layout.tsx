import { ReactNode } from 'react';

export default function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-900">Evera Admin Panel</h1>
            <nav className="flex space-x-4">
              <a href="/admin" className="text-gray-600 hover:text-gray-900">Dashboard</a>
              <a href="/admin/jobs" className="text-gray-600 hover:text-gray-900">Jobs</a>
              <a href="/admin/testimonials" className="text-gray-600 hover:text-gray-900">Testimonials</a>
            </nav>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}