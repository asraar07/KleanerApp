import React from 'react';
import { Calendar, User, MessageSquare, Briefcase, Tag, Folder } from 'lucide-react'; 
import mockBlogData from '../data/mockBlogData'
import BlogPostCard from '../components/common/BlogPostCard'
import PageHeader from '../components/common/pageHeroSection';

const SidebarWidget = ({ title, children }) => (
  <div className="bg-white p-6 mb-8 rounded-lg shadow-md border border-gray-100">
    <h3 className="text-xl font-semibold border-b pb-3 mb-4 text-gray-800 uppercase tracking-wider">
      {title}
    </h3>
    {children}
  </div>
);


export default function Blog() {

  
  const [searchTerm, setSearchTerm] = React.useState('');

  return (


    <div className="min-h-screen bg-gray-50 font-sans  ">
       <PageHeader
        subtitle="All about our company"
        title="Latest News"
        description="Stay updated with the most recent developments and stories from our team."
        bgImage="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80"
      />
      {/* Header/Navigation Area */}

   
      {/* Main Content Area: Grid Layout */}
      <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 py-20 gap-10">

        {/* --- Main Blog Posts (Col 1-3 on large screens) --- */}
        <div className="lg:col-span-3">
          {mockBlogData.blogPosts.map(post => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>

        {/* --- Sidebar (Col 4 on large screens) --- */}
        <aside className="lg:col-span-1 space-y-8">

          {/* Search Widget */}
          <SidebarWidget title="Search...">
            <div className="flex">
              <input
                type="text"
                placeholder="Search..."
                className="w-full p-3 border border-gray-300 rounded-l-md focus:ring-blue-500 focus:border-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                className="bg-blue-600 text-white p-3 rounded-r-md hover:bg-blue-700 transition duration-300"
                aria-label="Search"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              </button>
            </div>
          </SidebarWidget>

          {/* Recent Posts Widget */}
          <SidebarWidget title="Recent Posts">
            <ul className="space-y-3">
              {mockBlogData.recentPosts.map((postTitle, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">&gt;</span>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300 leading-relaxed">
                    {postTitle}
                  </a>
                </li>
              ))}
            </ul>
          </SidebarWidget>

          {/* Recent Comments Widget (Mocked) */}
          <SidebarWidget title="Recent Comments">
            <p className="text-gray-500 italic">No comments found.</p>
          </SidebarWidget>

          {/* Archives Widget */}
          <SidebarWidget title="Archives">
            <ul className="space-y-3">
              {mockBlogData.archives.map((archive, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">&gt;</span>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300">
                    {archive}
                  </a>
                </li>
              ))}
            </ul>
          </SidebarWidget>

          {/* Categories Widget */}
          <SidebarWidget title="Categories">
            <ul className="space-y-3">
              {mockBlogData.categories.map((category, index) => (
                <li key={index} className="flex items-start">
                  <Folder size={16} className="text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </SidebarWidget>

          {/* Meta Widget (Mocked) */}
          <SidebarWidget title="Meta">
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 mt-1">&gt;</span>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300">
                  Log in
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 mt-1">&gt;</span>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300">
                  Entries feed
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 mt-1">&gt;</span>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300">
                  Comments feed
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 mt-1">&gt;</span>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300">
                  WordPress.org
                </a>
              </li>
            </ul>
          </SidebarWidget>

        </aside>
      </main>

      {/* Simple Footer */}
      <footer className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
        &copy; 2024 Cleaning Blog. All rights reserved. Powered by React and Tailwind CSS.
      </footer>
    </div>
  );
}
