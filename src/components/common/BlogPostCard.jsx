import { Calendar, User, MessageSquare, Briefcase, Tag, Folder } from 'lucide-react'; 
const BlogPostCard = ({ post }) => (
  <article className="mb-10 bg-white rounded-lg overflow-hidden shadow-md">
  
    <img
      src={post.imageUrl}
      alt={post.title}
      className="w-full h-80 object-cover"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = 'https://placehold.co/800x400/1e40af/ffffff?text=Image+Not+Found';
      }}
    />

    <div className="p-6">
      {/* Post Meta Data */}
      <div className="flex text-sm text-gray-500 mb-4 flex-wrap">
        <span className="flex items-center mr-4">
          <Calendar size={14} className="mr-1 text-blue-600" />
          {post.date}
        </span>
        <span className="flex items-center mr-4">
          <User size={14} className="mr-1 text-blue-600" />
          {post.author}
        </span>
        <span className="flex items-center mr-4">
          <Briefcase size={14} className="mr-1 text-blue-600" />
          {post.category}
        </span>
        <span className="flex items-center">
          <MessageSquare size={14} className="mr-1 text-blue-600" />
          {post.comments} Comments
        </span>
      </div>

      {/* Title and Excerpt */}
      <h2 className="text-3xl font-bold text-gray-800 mb-4 hover:text-blue-700 transition duration-300 cursor-pointer">
        {post.title}
      </h2>

      <p className="text-gray-600 mb-6 leading-relaxed">
        {post.excerpt}
      </p>

      {/* Read More Button (Styled as a link) */}
      <a href="#" className="text-blue-600 font-semibold hover:text-blue-800 transition duration-300 inline-block border-b border-blue-600 pb-1">
        Read More
      </a>
    </div>
  </article>
);
export default BlogPostCard