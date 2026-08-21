import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { blogPosts } from '../data/mockData';
import { ArrowLeft, BookOpen, Share2 } from 'lucide-react';

export const Blog: React.FC = () => {
  const { params, navigateTo } = useNavigation();

  // Selected post
  const selectedPostId = params.blogPostId;
  const activePost = blogPosts.find(p => p.id === selectedPostId);

  // If a post is selected, show the beautiful full-screen article
  if (activePost) {
    return (
      <div style={{ animation: 'fadeIn 0.8s ease-out', backgroundColor: 'var(--color-ivory)', minHeight: '100vh' }}>
        
        {/* Article Hero */}
        <section style={{
          height: '60vh',
          background: `linear-gradient(to bottom, rgba(9, 15, 29, 0.2), rgba(9, 15, 29, 0.85)), url("${activePost.image}") no-repeat center center/cover`,
          display: 'flex',
          alignItems: 'flex-end',
          paddingBottom: '48px',
          color: '#fff'
        }}>
          <div className="container">
            <button 
              onClick={() => navigateTo('blog')}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-gold)', marginBottom: '16px' }}
            >
              <ArrowLeft size={12} /> Back to Magazine Index
            </button>
            <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.25em', color: 'var(--color-gold)', display: 'block', marginBottom: '8px' }}>
              {activePost.category} • {activePost.readTime}
            </span>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 4vw, 3rem)', lineHeight: 1.3, maxWidth: '850px' }}>
              {activePost.title}
            </h1>
          </div>
        </section>

        {/* Article Body */}
        <article className="container" style={{ paddingTop: '64px', paddingBottom: '96px', maxWidth: '800px' }}>
          
          {/* Author Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--color-border)', paddingBottom: '24px', marginBottom: '40px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img 
                src={activePost.authorImage} 
                alt={activePost.author} 
                style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }}
              />
              <div>
                <h5 style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.9rem' }}>{activePost.author}</h5>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Published: {activePost.date}</span>
              </div>
            </div>
            <button style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', opacity: 0.7 }} className="btn-text">
              <Share2 size={12} /> Share Article
            </button>
          </div>

          {/* Article Text Content */}
          <div className="article-body-text" style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.9, fontFamily: 'var(--font-body)' }}>
            <p style={{ fontSize: '1.25rem', fontFamily: 'var(--font-heading)', color: 'var(--color-forest-green)', marginBottom: '32px', lineHeight: 1.6, fontWeight: 500 }}>
              {activePost.excerpt}
            </p>
            <p style={{ marginBottom: '24px' }}>
              {activePost.content}
            </p>
            <p style={{ marginBottom: '24px' }}>
              Responsible travel, at its core, is a dialogue. It starts with open communication and mutual respect. Whether we are walking through the active local lanes of Dharavi in Mumbai, visiting school classrooms in Delhi Sanjay Colony, or exploring the rural craft cooperatives of Rajasthan, the philosophy remains the same: we travel to connect, learn, and support.
            </p>
            <blockquote style={{
              margin: '40px 0',
              padding: '24px 32px',
              borderLeft: '4px solid var(--color-gold)',
              backgroundColor: 'var(--color-beige)',
              fontFamily: 'var(--font-heading)',
              fontSize: '1.3rem',
              color: 'var(--color-forest-green)',
              lineHeight: 1.6
            }}>
              "Ethical travel is not about observing from a distance, but engaging with local communities as guests, partners, and equal neighbors."
            </blockquote>
            <p>
              When a traveler books a walk with us, they are directly investing in the community. 80% of our post-tax profits fund our sister NGO, Reality Gives, helping local youths access quality vocational training, language skills, and digital literacy. Book responsibly, challenge stereotypes, and travel with purpose.
            </p>
          </div>

        </article>

      </div>
    );
  }

  // Otherwise, show the magazine list index
  return (
    <div style={{ animation: 'fadeIn 1s ease-out', backgroundColor: 'var(--color-ivory)', minHeight: '100vh' }}>
      
      {/* Magazine Editorial Banner */}
      <section className="blog-index-hero" style={{
        paddingTop: '180px',
        paddingBottom: '80px',
        background: 'linear-gradient(to bottom, var(--color-midnight-blue), #142a20)',
        color: 'var(--color-ivory)',
        textAlign: 'center'
      }}>
        <div className="container">
          <span className="section-subtitle" style={{ color: 'var(--color-gold)' }}>Ethical Tourism Chronicles</span>
          <h1 style={{ 
            fontFamily: 'var(--font-heading)', 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
            color: 'var(--color-ivory)',
            marginBottom: '16px',
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}>
            Travel Magazine
          </h1>
          <p style={{ maxWidth: '650px', margin: '0 auto', fontSize: '0.95rem', opacity: 0.8, lineHeight: 1.6 }}>
            Immerse yourself in editorial guides, cultural philosophies, and bespoke diaries written by our veteran travel authors.
          </p>
        </div>
      </section>

      {/* Main Magazine Grid */}
      <section className="container" style={{ paddingTop: '64px', paddingBottom: '96px' }}>
        
        {/* Featured First Article (Editorial highlight) */}
        {blogPosts[0] && (
          <div 
            onClick={() => navigateTo('blog', { blogPostId: blogPosts[0].id })}
            className="featured-article-banner glass-panel"
            style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 1fr',
              gap: '40px',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              border: '1px solid var(--color-border)',
              backgroundColor: '#fff',
              cursor: 'pointer',
              marginBottom: '64px',
              padding: '24px'
            }}
          >
            <div style={{ height: '380px', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
              <img src={blogPosts[0].image} alt={blogPosts[0].title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '12px' }}>
              <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.25em', color: 'var(--color-gold)', display: 'block', marginBottom: '12px' }}>
                Featured Story • {blogPosts[0].category}
              </span>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '16px', color: 'var(--color-forest-green)', lineHeight: 1.3 }}>
                {blogPosts[0].title}
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '28px' }}>
                {blogPosts[0].excerpt}
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--color-border)', paddingTop: '20px' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Written by {blogPosts[0].author}</span>
                <span className="btn-text" style={{ fontSize: '0.7rem' }}>Read Article <BookOpen size={12} /></span>
              </div>
            </div>
          </div>
        )}

        {/* Category List grid */}
        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', marginBottom: '32px', borderBottom: '1px solid var(--color-border)', paddingBottom: '12px' }}>
          Latest Stories
        </h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
          {blogPosts.slice(1).map(post => (
            <div 
              key={post.id} 
              onClick={() => navigateTo('blog', { blogPostId: post.id })}
              style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
              className="blog-grid-card"
            >
              <div style={{ height: '240px', borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '20px' }}>
                <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }} className="blog-img" />
              </div>
              <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--color-gold)', display: 'block', marginBottom: '8px' }}>
                {post.category} • {post.readTime}
              </span>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '10px', lineHeight: 1.4, color: 'var(--color-forest-green)' }}>
                {post.title}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '16px', flex: 1 }}>
                {post.excerpt}
              </p>
              <span className="btn-text" style={{ fontSize: '0.7rem', alignSelf: 'flex-start' }}>Read Story →</span>
            </div>
          ))}
        </div>

      </section>

      <style>{`
        .featured-article-banner {
          transition: all 0.4s;
        }
        .featured-article-banner:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
          border-color: rgba(20, 42, 32, 0.15) !important;
        }

        @media (max-width: 768px) {
          .featured-article-banner {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .featured-article-banner > div:first-child {
            height: 240px !important;
          }
        }

        .blog-grid-card:hover .blog-img {
          transform: scale(1.03);
        }
        .blog-grid-card:hover h3 {
          color: var(--color-gold) !important;
        }
      `}</style>
    </div>
  );
};
