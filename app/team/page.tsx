import { Navigation } from "@/components/navigation";

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <section className="text-black py-20 overflow-hidden relative shadow-lg hover:shadow-xl transition-shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
            Our <span className="text-green-600">Team</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-md text-black">
            Meet the people driving sustainable mobility forward
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Content coming soon - Our dedicated team information will be displayed here.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}