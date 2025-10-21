import { useState } from 'react';

// Import mockup designs here as you create them
import { ExampleMockup } from './mockups/designs/ExampleMockup';
import { IntegrityProV1 } from './mockups/designs/IntegrityProV1';
// import { MockupV2 } from './mockups/designs/MockupV2'

interface Mockup {
  id: string;
  name: string;
  description: string;
  component: React.ComponentType;
}

function App() {
  const [selectedMockup, setSelectedMockup] = useState<string | null>(null);

  // Define available mockups here
  const mockups: Mockup[] = [
    {
      id: 'integritypro-v1',
      name: 'IntegrityPro Employee Center',
      description:
        'Official IntegrityPro portal design with shortcuts and announcements',
      component: IntegrityProV1,
    },
    {
      id: 'example',
      name: 'Example Portal Design',
      description:
        'Sample Employee Service Center portal with popular services and quick links',
      component: ExampleMockup,
    },
    // Add more mockups as they are created
    // { id: 'v2', name: 'Design Version 2', description: 'Second design iteration', component: MockupV2 },
  ];

  const currentMockup = mockups.find((m) => m.id === selectedMockup);
  const currentIndex = mockups.findIndex((m) => m.id === selectedMockup);

  const goToPrevious = () => {
    const previousIndex = currentIndex === 0 ? mockups.length - 1 : currentIndex - 1;
    setSelectedMockup(mockups[previousIndex].id);
  };

  const goToNext = () => {
    const nextIndex = currentIndex === mockups.length - 1 ? 0 : currentIndex + 1;
    setSelectedMockup(mockups[nextIndex].id);
  };

  const getPreviousIndex = () => currentIndex === 0 ? mockups.length - 1 : currentIndex - 1;
  const getNextIndex = () => currentIndex === mockups.length - 1 ? 0 : currentIndex + 1;

  // If a mockup is selected, render it with a back button
  if (currentMockup) {
    const MockupComponent = currentMockup.component;
    return (
      <div className="relative">
        <button
          onClick={() => setSelectedMockup(null)}
          className="group fixed top-4 left-4 z-50 bg-white p-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 flex items-center gap-2 text-gray-700 hover:text-gray-900 overflow-hidden"
        >
          <svg
            className="w-5 h-5 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span className="max-w-0 group-hover:max-w-xs transition-all duration-300 whitespace-nowrap overflow-hidden">
            Back to Selector
          </span>
        </button>

        {/* Previous Mockup Navigation */}
        <button
          onClick={goToPrevious}
          className="group fixed left-0 top-1/2 -translate-y-1/2 h-32 px-2 opacity-0 hover:opacity-100 transition-opacity duration-300 z-40"
          title={`Previous: ${mockups[getPreviousIndex()].name}`}
        >
          <div className="bg-white rounded-r-lg shadow-lg p-3 border border-l-0 border-gray-200">
            <svg
              className="w-6 h-6 text-teal-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </div>
        </button>

        {/* Next Mockup Navigation */}
        <button
          onClick={goToNext}
          className="group fixed right-0 top-1/2 -translate-y-1/2 h-32 px-2 opacity-0 hover:opacity-100 transition-opacity duration-300 z-40"
          title={`Next: ${mockups[getNextIndex()].name}`}
        >
          <div className="bg-white rounded-l-lg shadow-lg p-3 border border-r-0 border-gray-200">
            <svg
              className="w-6 h-6 text-teal-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </button>

        <MockupComponent />
      </div>
    );
  }

  // Mockup Selector Interface
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-2 tracking-tight drop-shadow-sm">
            <span className="bg-gradient-to-r from-teal-500 to-emerald-600 bg-clip-text text-transparent">
              DesignDeck
            </span>
          </h1>
          <p className="text-sm text-gray-500 mb-6 font-medium tracking-wide uppercase">
            {/* Your Design Comparison Tool */}
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select a mockup design to view. Click on any card to see the full
            responsive design.
          </p>
        </div>

        {/* Mockup Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockups.map((mockup) => (
            <button
              key={mockup.id}
              onClick={() => setSelectedMockup(mockup.id)}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-left group hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="bg-teal-50 rounded-lg p-3">
                  <svg
                    className="w-6 h-6 text-teal-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {mockup.name}
              </h3>
              <p className="text-gray-600 text-sm">{mockup.description}</p>
            </button>
          ))}

          {/* Add New Mockup Placeholder */}
          <div className="bg-white rounded-xl border-2 border-dashed border-gray-300 p-6 flex flex-col items-center justify-center text-center min-h-[200px] hover:border-gray-400 transition-colors">
            <svg
              className="w-12 h-12 text-gray-400 mb-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            <p className="text-gray-500 font-medium">
              More mockups coming soon
            </p>
            <p className="text-gray-400 text-sm mt-1">
              Designs will be added as you provide them
            </p>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">
            How to Use
          </h3>
          <ul className="space-y-2 text-blue-800 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-0.5">•</span>
              <span>Click any mockup card to view the full design</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-0.5">•</span>
              <span>
                Use the "Back to Selector" button to return to this page
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-0.5">•</span>
              <span>
                All designs are mobile-responsive - test different screen sizes
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
