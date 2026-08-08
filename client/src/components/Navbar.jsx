import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ShoppingBag, User, ShieldCheck, LogOut, LayoutDashboard, Hexagon } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { user, logout, isAdmin } = useAuth();
  const { totalItemsCount } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Top Announcement Marquee */}
      <div className="marquee-container">
        <div className="marquee-content">
          <span>✨ COMPLIMENTARY EXPRESS GLOBAL SHIPPING ON ORDERS OVER $150 &nbsp;•&nbsp; USE CODE: <strong>ZENITH2026</strong> FOR 15% OFF &nbsp;•&nbsp; MODERN COMMERCE &nbsp;•&nbsp; </span>
          <span>✨ COMPLIMENTARY EXPRESS GLOBAL SHIPPING ON ORDERS OVER $150 &nbsp;•&nbsp; USE CODE: <strong>ZENITH2026</strong> FOR 15% OFF &nbsp;•&nbsp; MODERN COMMERCE &nbsp;•&nbsp; </span>
        </div>
      </div>

      <header className="glass-nav">
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '76px' }}>
          
          {/* Brand Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', textDecoration: 'none' }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'var(--primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <Hexagon size={24} color="#ffffff" fill="var(--primary)" />
            </div>
            <div>
              <span style={{
                fontFamily: "var(--font-heading)",
                fontSize: '1.6rem',
                fontWeight: '900',
                letterSpacing: '-0.02em',
                color: 'var(--text-main)'
              }}>
                ZENITH
              </span>
              <span style={{ display: 'block', fontSize: '0.62rem', color: 'var(--text-muted)', letterSpacing: '0.15em', fontWeight: '700', textTransform: 'uppercase' }}>
                Modern Commerce
              </span>
            </div>
          </Link>

          {/* Center Nav Links */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <Link to="/" style={{
              color: isActive('/') ? 'var(--primary)' : 'var(--text-muted)',
              fontWeight: isActive('/') ? '700' : '500',
              fontSize: '0.95rem',
              transition: 'var(--transition)',
              borderBottom: isActive('/') ? '2px solid var(--primary)' : '2px solid transparent',
              paddingBottom: '0.2rem'
            }}>
              Home
            </Link>

            <Link to="/products" style={{
              color: isActive('/products') ? 'var(--primary)' : 'var(--text-muted)',
              fontWeight: isActive('/products') ? '700' : '500',
              fontSize: '0.95rem',
              transition: 'var(--transition)',
              borderBottom: isActive('/products') ? '2px solid var(--primary)' : '2px solid transparent',
              paddingBottom: '0.2rem'
            }}>
              Catalog
            </Link>

            {isAdmin && (
              <Link to="/admin" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: isActive('/admin') ? 'var(--primary)' : 'var(--text-main)',
                fontWeight: '600',
                fontSize: '0.9rem',
                background: 'var(--bg-hover)',
                padding: '0.4rem 0.85rem',
                borderRadius: 'var(--radius-full)',
                border: '1px solid var(--border-color)'
              }}>
                <LayoutDashboard size={16} />
                Admin
              </Link>
            )}
          </nav>

          {/* Right Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            
            {/* Cart Icon Badge */}
            <Link to="/cart" style={{
              position: 'relative',
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'var(--bg-main)',
              border: '1px solid var(--border-color)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-main)',
              transition: 'var(--transition)'
            }}>
              <ShoppingBag size={20} />
              {totalItemsCount > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '-6px',
                  right: '-6px',
                  background: 'var(--primary)',
                  color: 'var(--text-inverse)',
                  fontSize: '0.7rem',
                  fontWeight: '800',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: 'var(--shadow-sm)'
                }}>
                  {totalItemsCount}
                </span>
              )}
            </Link>

            {/* User Auth state */}
            {user ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Link to="/profile" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--bg-main)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-main)',
                  fontWeight: '600',
                  fontSize: '0.9rem'
                }}>
                  {isAdmin ? <ShieldCheck size={18} color="var(--secondary)" /> : <User size={18} color="var(--primary)" />}
                  <span>{user.name.split(' ')[0]}</span>
                </Link>

                <button onClick={() => { logout(); navigate('/'); }} style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'rgba(225, 29, 72, 0.1)',
                  border: '1px solid rgba(225, 29, 72, 0.2)',
                  color: 'var(--accent-rose)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'var(--transition)'
                }} title="Sign Out">
                  <LogOut size={18} />
                </button>
              </div>
            ) : (
              <Link to="/auth" className="glass-btn btn-primary" style={{ padding: '0.5rem 1.35rem', fontSize: '0.9rem' }}>
                Sign In
              </Link>
            )}

          </div>

        </div>
      </header>
    </>
  );
};

export default Navbar;
