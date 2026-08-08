import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Hexagon } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{
      marginTop: '4.5rem',
      background: 'var(--bg-card)',
      borderTop: '1px solid var(--border-color)',
      padding: '4rem 0 2rem 0'
    }}>
      <div className="container">
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '2.5rem',
          marginBottom: '3rem'
        }}>
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Hexagon size={20} color="#ffffff" fill="var(--primary)" />
              </div>
              <span style={{ fontSize: '1.4rem', fontWeight: '900', color: 'var(--text-main)', fontFamily: "var(--font-heading)", letterSpacing: '-0.02em' }}>ZENITH</span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.6' }}>
              Zenith Retail Inc. is your premier destination for modern lifestyle, tech, and curated design aesthetics.
            </p>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 style={{ color: 'var(--text-main)', marginBottom: '1.25rem', fontSize: '1rem', fontFamily: "var(--font-heading)" }}>Explore Collections</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><Link to="/products" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>All Collections</Link></li>
              <li><Link to="/products?category=Electronics" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Tech & Gadgets</Link></li>
              <li><Link to="/products?category=Fashion" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Apparel</Link></li>
              <li><Link to="/products?category=Footwear" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Footwear</Link></li>
            </ul>
          </div>

          {/* Architecture Highlights */}
          <div>
            <h4 style={{ color: 'var(--text-main)', marginBottom: '1.25rem', fontSize: '1rem', fontFamily: "var(--font-heading)" }}>Platform Architecture</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Backend: Node.js & Express</li>
              <li style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Frontend: React & Vite</li>
              <li style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Database: MongoDB</li>
              <li style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Auth: JWT & Bcrypt</li>
            </ul>
          </div>

          {/* Admin Fast Link */}
          <div>
            <h4 style={{ color: 'var(--text-main)', marginBottom: '1.25rem', fontSize: '1rem', fontFamily: "var(--font-heading)" }}>Admin Access</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1rem', lineHeight: '1.5' }}>
              Access the secure dashboard for catalog and order management.
            </p>
            <Link to="/auth" className="btn-secondary glass-btn" style={{ width: '100%', fontSize: '0.85rem', padding: '0.5rem' }}>
              Access Admin Suite
            </Link>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div style={{
          borderTop: '1px solid var(--border-color)',
          paddingTop: '1.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          color: 'var(--text-dim)',
          fontSize: '0.85rem'
        }}>
          <div>
            © 2026 Zenith Retail Inc. All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            Built with <Heart size={14} color="var(--primary)" fill="var(--primary)" /> by Zenith Engineering
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
