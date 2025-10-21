import { useState } from 'react';
import {
  // SearchBar,
  FolderIconIPC,
  LaptopIconIPC,
  CalendarIconIPC,
  LightbulbIconIPC,
  ToolsIconIPC,
  DocumentArrowIconIPC,
  ChevronDownIcon,
} from '../components';
import { ipcColors } from '../theme/colors';
import shortcutsData from '../data/ipc-shortcuts.json';
import announcementsData from '../data/ipc-announcements.json';
import logoBanner from '../assets/logo-banner.png';
import exampleUser from '../assets/example-user2.png';

export const IntegrityProV1 = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const iconMap = {
    folder: FolderIconIPC,
    laptop: LaptopIconIPC,
    calendar: CalendarIconIPC,
    lightbulb: LightbulbIconIPC,
    tools: ToolsIconIPC,
    document: DocumentArrowIconIPC,
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FBFDFC' }}>
      {/* Header */}
      <header className="" style={{ borderColor: ipcColors.lightestGray }}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img src={logoBanner} alt="IntegrityPro" className="h-8" />
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a
                href="#"
                className="text-sm font-medium hover:opacity-70 transition-opacity"
                style={{ color: ipcColors.primary }}
              >
                Home
              </a>
              <a
                href="#"
                className="text-sm font-medium hover:opacity-70 transition-opacity"
                style={{ color: ipcColors.textLight }}
              >
                Requests
              </a>
              <a
                href="#"
                className="text-sm font-medium hover:opacity-70 transition-opacity"
                style={{ color: ipcColors.textLight }}
              >
                Time Off
              </a>
              <a
                href="#"
                className="text-sm font-medium hover:opacity-70 transition-opacity"
                style={{ color: ipcColors.textLight }}
              >
                Knowledge
              </a>
            </nav>

            {/* User Profile */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 cursor-pointer hover:opacity-70 transition-opacity">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <img
                    src={exampleUser}
                    alt="Sofia Perez"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span
                  className="text-sm font-medium hidden sm:inline"
                  style={{ color: ipcColors.text }}
                >
                  Sofia Perez
                </span>
                <ChevronDownIcon size={16} className="text-gray-500" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          {/* <h1
            className="text-5xl font-bold mb-8"
            style={{ color: ipcColors.text }}
          >
            Employeee Center
          </h1> */}

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <svg
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  width={20}
                  height={20}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-shadow"
                  style={{
                    borderColor: ipcColors.mediumGray,
                    backgroundColor: 'white',
                  }}
                />
              </div>
              <button
                className="px-8 py-3 rounded-lg text-white font-medium hover:opacity-90 transition-opacity"
                style={{ backgroundColor: ipcColors.primary }}
              >
                <svg
                  width={20}
                  height={20}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <h2
            className="text-3xl font-semibold"
            style={{ color: ipcColors.text }}
          >
            How can we assist you today?
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Shortcuts Section */}
          <div className="lg:col-span-2">
            <h3
              className="text-2xl font-bold mb-6"
              style={{ color: ipcColors.text }}
            >
              Shortcuts
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {shortcutsData.map((shortcut) => {
                const IconComponent =
                  iconMap[shortcut.icon as keyof typeof iconMap];
                return (
                  <button
                    key={shortcut.id}
                    className="bg-white rounded-lg p-6 text-left hover:shadow-lg transition-shadow border"
                    style={{ borderColor: ipcColors.lightestGray }}
                  >
                    <div className="mb-4">
                      <IconComponent size={32} color={ipcColors.primary} />
                    </div>
                    <h4
                      className="text-lg font-semibold mb-2"
                      style={{ color: ipcColors.text }}
                    >
                      {shortcut.title}
                    </h4>
                    <p
                      className="text-sm"
                      style={{ color: ipcColors.textLight }}
                    >
                      {shortcut.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Announcements Section */}
          <div className="lg:col-span-1">
            <h3
              className="text-2xl font-bold mb-6"
              style={{ color: ipcColors.text }}
            >
              Announcements
            </h3>
            <div className="space-y-4">
              {announcementsData.map((announcement) => {
                const IconComponent =
                  iconMap[announcement.icon as keyof typeof iconMap];
                return (
                  <button
                    key={announcement.id}
                    className="w-full bg-white rounded-lg p-6 text-left hover:shadow-lg transition-shadow border flex items-start gap-4"
                    style={{ borderColor: ipcColors.lightestGray }}
                  >
                    <div className="flex-shrink-0">
                      <IconComponent size={32} color={ipcColors.primary} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4
                        className="text-lg font-semibold mb-2"
                        style={{ color: ipcColors.text }}
                      >
                        {announcement.title}
                      </h4>
                      <p
                        className="text-sm"
                        style={{ color: ipcColors.textLight }}
                      >
                        {announcement.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
