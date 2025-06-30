import './Blog.css';
import React, {useState} from 'react';
function Blog() {
  const [expandedPost, setExpandedPost] = useState(null);

  const blogData = [
    {
      id: 1,
      icon: 'fa fa-book',
      title: 'Must-Read Books for Students',
      short: 'Explore our top recommended books for students across all streams and ages.',
      full: 'From fiction to self-help, discover books that shape young minds and encourage lifelong learning. Titles include "Atomic Habits", "To Kill a Mockingbird", and more.'
    },
    {
      id: 2,
      icon: 'fa fa-lightbulb-o',
      title: 'Why Digital Libraries Are the Future',
      short: 'Learn how digital tools are revolutionizing reading and book management.',
      full: 'Digital libraries eliminate physical space limitations and give readers 24/7 access. Learn how libraries are going paperless with modern tech.'
    },
    {
      id: 3,
      icon: 'fa fa-line-chart',
      title: 'How Analytics Improve Library Efficiency',
      short: 'Discover how tracking borrowing trends can improve book collections and user satisfaction.',
      full: 'Analytics help librarians understand peak usage times, popular genres, and overdue patterns—leading to smarter resource allocation.'
    }
  ];

  return (
    <div className="blog-wrapper">
      <h1><i className="fa fa-newspaper-o"></i> Library Blog</h1>
      <p className="blog-intro">
        Stay updated with the latest in the world of books, education, and library technology.
      </p>

      <div className="blog-list">
        {blogData.map(post => (
          <div className="blog-post" key={post.id}>
            <h3><i className={post.icon}></i> {post.title}</h3>
            <p>{expandedPost === post.id ? post.full : post.short}</p>
            <span
              className="read-more"
              onClick={() => setExpandedPost(expandedPost === post.id ? null : post.id)}
            >
              {expandedPost === post.id ? 'Show less' : 'Read more'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;