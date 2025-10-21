import { useState } from 'react'
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  SearchBar,
  Badge,
  Header,
  Navbar,
  DocumentIcon,
  TicketIcon,
  CalendarIcon,
  BellIcon,
  UserIcon,
  QuestionIcon
} from '../components'

// Import mock data
import servicesData from '../data/services.json'
import announcementsData from '../data/announcements.json'
import quickLinksData from '../data/quickLinks.json'

export const ExampleMockup = () => {
  const [searchQuery, setSearchQuery] = useState('')

  // Get popular services
  const popularServices = servicesData.filter(s => s.popular).slice(0, 6)

  // Get latest announcement
  const latestAnnouncement = announcementsData[0]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header sticky>
        <Navbar>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
              ESC
            </div>
            <h1 className="text-xl font-bold text-gray-900">Employee Service Center</h1>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative">
              <BellIcon size={20} className="text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <UserIcon size={20} className="text-gray-600" />
              <span className="text-sm font-medium text-gray-700 hidden sm:inline">John Doe</span>
            </button>
          </div>
        </Navbar>
      </Header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, John!</h2>
          <p className="text-gray-600">How can we help you today?</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <SearchBar
            placeholder="Search for services, requests, or help articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onSearch={(value) => console.log('Searching for:', value)}
            containerClassName="max-w-2xl"
          />
        </div>

        {/* Announcement Banner */}
        {latestAnnouncement && (
          <div className="mb-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start gap-3">
            <BellIcon size={20} className="text-yellow-600 mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="font-semibold text-yellow-900 mb-1">{latestAnnouncement.title}</h3>
              <p className="text-sm text-yellow-800">{latestAnnouncement.message}</p>
            </div>
            <Badge variant="warning" size="sm">Important</Badge>
          </div>
        )}

        {/* Popular Services */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularServices.map((service) => (
              <Card key={service.id} hover className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    {service.category === 'Hardware' && <DocumentIcon size={24} className="text-blue-600" />}
                    {service.category === 'Software' && <DocumentIcon size={24} className="text-blue-600" />}
                    {service.category === 'Support' && <QuestionIcon size={24} className="text-blue-600" />}
                    {service.category === 'HR' && <CalendarIcon size={24} className="text-blue-600" />}
                    {service.category === 'Security' && <TicketIcon size={24} className="text-blue-600" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900 mb-1">{service.name}</h4>
                    <p className="text-sm text-gray-600 line-clamp-2">{service.description}</p>
                    <Badge variant="neutral" size="sm" className="mt-2">{service.category}</Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Links</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickLinksData.slice(0, 6).map((link) => (
              <button
                key={link.id}
                className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow text-center border border-gray-100"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <DocumentIcon size={24} className="text-gray-600" />
                </div>
                <p className="text-sm font-medium text-gray-900">{link.title}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Requests</h3>
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-gray-900">Your Tickets</h4>
                <Button variant="ghost" size="sm">View All</Button>
              </div>
            </CardHeader>
            <CardBody className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-medium text-gray-900">REQ0012345</span>
                    <Badge variant="info" size="sm">In Progress</Badge>
                  </div>
                  <p className="text-sm text-gray-600">New laptop request</p>
                </div>
                <span className="text-sm text-gray-500">Oct 18</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-medium text-gray-900">REQ0012346</span>
                    <Badge variant="success" size="sm">Approved</Badge>
                  </div>
                  <p className="text-sm text-gray-600">Software license renewal</p>
                </div>
                <span className="text-sm text-gray-500">Oct 17</span>
              </div>
              <div className="flex items-center justify-between py-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-medium text-gray-900">REQ0012348</span>
                    <Badge variant="success" size="sm">Completed</Badge>
                  </div>
                  <p className="text-sm text-gray-600">Password reset request</p>
                </div>
                <span className="text-sm text-gray-500">Oct 18</span>
              </div>
            </CardBody>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600">© 2025 Employee Service Center. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Help</a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Privacy</a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
