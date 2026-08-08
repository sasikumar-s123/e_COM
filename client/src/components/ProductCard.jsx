import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, Star, Zap, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { isAdmin } = useAuth();
  const navigate = useNavigate();

  const discountedPrice = (product.price - (product.price * (product.discount || 0) / 100)).toFixed(2);

  const handleShopNow = (e) => {
    e.stopPropagation();
    e.preventDefault();
    addToCart(product, product.sizes?.[0] || 'Standard', 1);
    navigate('/cart');
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    e.preventDefault();
    addToCart(product, product.sizes?.[0] || 'Standard', 1);
  };

  return (
    <div className="card animate-fade-in" style={{
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      position: 'relative',
      background: 'var(--bg-card)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-md)',
      border: '1px solid var(--border-color)',
      transition: 'var(--transition)'
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-hover)';
      e.currentTarget.style.borderColor = 'var(--primary-light)';
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'var(--shadow-md)';
      e.currentTarget.style.borderColor = 'var(--border-color)';
    }}
    >
      
      {/* Discount Pill */}
      {product.discount > 0 && (
        <div style={{
          position: 'absolute',
          top: '12px',
          left: '12px',
          zIndex: 2,
          background: 'var(--accent-rose)',
          color: 'var(--text-inverse)',
          fontWeight: '800',
          fontSize: '0.72rem',
          padding: '0.35rem 0.75rem',
          borderRadius: 'var(--radius-full)',
          boxShadow: 'var(--shadow-sm)',
          letterSpacing: '0.05em'
        }}>
          {product.discount}% OFF
        </div>
      )}

      {/* Gender/Category Pill */}
      <div style={{
        position: 'absolute',
        top: '12px',
        right: '12px',
        zIndex: 2,
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(8px)',
        border: '1px solid var(--border-color)',
        color: 'var(--text-main)',
        fontWeight: '700',
        fontSize: '0.68rem',
        padding: '0.35rem 0.75rem',
        borderRadius: 'var(--radius-full)'
      }}>
        {product.gender || 'Unisex'}
      </div>

      {/* Product Image Link */}
      <Link to={`/products/${product._id}`} style={{
        display: 'block',
        position: 'relative',
        width: '100%',
        paddingTop: '85%',
        overflow: 'hidden',
        background: 'var(--bg-hover)'
      }}>
        <img
          src={product.mainImg}
          alt={product.title}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.6s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        />
      </Link>

      {/* Card Content Body */}
      <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        
        {/* Category & Rating */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
          <span style={{ fontSize: '0.72rem', color: 'var(--secondary)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {product.category}
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--accent-amber)', fontSize: '0.8rem', fontWeight: '700' }}>
            <Star size={14} fill="var(--accent-amber)" color="var(--accent-amber)" />
            <span>{product.rating || 4.8}</span>
          </div>
        </div>

        {/* Title */}
        <Link to={`/products/${product._id}`} style={{
          fontSize: '1.1rem',
          fontWeight: '700',
          color: 'var(--text-main)',
          fontFamily: 'var(--font-heading)',
          marginBottom: '0.75rem',
          lineHeight: '1.3',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          transition: 'var(--transition)'
        }}
        onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary)'}
        onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-main)'}
        >
          {product.title}
        </Link>

        {/* Price Row */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '1.25rem', marginTop: 'auto' }}>
          <span style={{ fontSize: '1.3rem', fontWeight: '800', color: 'var(--text-main)' }}>
            ${discountedPrice}
          </span>
          {product.discount > 0 && (
            <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textDecoration: 'line-through' }}>
              ${product.price}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        {isAdmin ? (
          /* Admin View Controls */
          <button
            onClick={() => navigate('/admin')}
            className="btn-secondary"
            style={{
              width: '100%',
              fontSize: '0.85rem',
              padding: '0.7rem',
              color: 'var(--secondary)',
              borderColor: 'var(--secondary-light)',
              background: 'var(--secondary-light)',
              borderRadius: 'var(--radius-sm)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              fontWeight: '600'
            }}
          >
            <ShieldCheck size={16} /> Manage in Admin
          </button>
        ) : (
          /* Customer View Controls: Shop Now & Add to Cart */
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
            <button
              onClick={handleAddToCart}
              className="btn-secondary"
              style={{ fontSize: '0.85rem', padding: '0.65rem', width: '100%', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.35rem', fontWeight: '600' }}
              title="Add to Cart"
            >
              <ShoppingBag size={16} /> Add Cart
            </button>
            
            <button
              onClick={handleShopNow}
              className="btn-primary"
              style={{ fontSize: '0.85rem', padding: '0.65rem', width: '100%', fontWeight: '700', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.35rem' }}
              title="Immediate Shop Now Checkout"
            >
              <Zap size={16} /> Shop Now
            </button>
          </div>
        )}

      </div>

    </div>
  );
};

export default ProductCard;
