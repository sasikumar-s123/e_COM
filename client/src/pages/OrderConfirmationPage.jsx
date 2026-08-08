import React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { CheckCircle2, Package, Home, Gem } from 'lucide-react';

const OrderConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const order = location.state?.order;

  if (!order) {
    return (
      <div className="container" style={{ paddingTop: '5rem', textAlign: 'center' }}>
        <div className="panel" style={{ padding: '3rem', maxWidth: '500px', margin: '0 auto', borderColor: 'var(--border-color)' }}>
          <h2 style={{ color: 'var(--text-main)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>No Active Order Details</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            It looks like you arrived here directly without completing a checkout.
          </p>
          <Link to="/" className="btn-primary" style={{ fontWeight: '800' }}>
            Return to Zenith Homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container" style={{ paddingTop: '3rem', paddingBottom: '5rem', maxWidth: '760px' }}>
      
      <div className="panel" style={{ padding: '3rem 2.5rem', textAlign: 'center', position: 'relative', overflow: 'hidden', borderColor: 'var(--border-color)' }}>
        
        {/* Glow backdrop */}
        <div style={{
          position: 'absolute',
          top: '-50px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '240px',
          height: '240px',
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.25) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        {/* Success Icon */}
        <div style={{
          width: '85px',
          height: '85px',
          borderRadius: '50%',
          background: 'rgba(16, 185, 129, 0.18)',
          border: '2px solid rgba(16, 185, 129, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1.5rem auto',
          color: '#6ee7b7'
        }}>
          <CheckCircle2 size={46} />
        </div>

        <span className="badge badge-success" style={{ marginBottom: '1rem', background: 'rgba(16, 185, 129, 0.2)', color: '#6ee7b7' }}>ZENITH VAULT ORDER CONFIRMED</span>

        <h1 style={{ fontSize: '2.5rem', color: 'var(--text-main)', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>
          Thank You For Your Patronage
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '2rem' }}>
          Vault Order Reference: <strong style={{ color: 'var(--primary)' }}>#{order._id}</strong>
        </p>

        {/* Receipt Box */}
        <div className="card" style={{ padding: '1.85rem', textAlign: 'left', marginBottom: '2rem', borderColor: 'var(--border-color)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', marginBottom: '1rem' }}>
            <div>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block' }}>Delivery Recipient</span>
              <strong style={{ color: 'var(--text-main)', fontSize: '1.05rem', fontFamily: 'var(--font-heading)' }}>{order.name}</strong>
              <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-muted)' }}>{order.mobile}</span>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block' }}>Vault Payment Method</span>
              <span className="badge badge-primary">{order.paymentMethod}</span>
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.25rem' }}>Shipping Address</span>
            <p style={{ color: 'var(--text-main)', fontSize: '0.9rem', lineHeight: '1.4' }}>
              {order.address} (Pincode: {order.pincode})
            </p>
          </div>

          {/* Items Purchased */}
          <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: '800', display: 'block', marginBottom: '0.75rem', letterSpacing: '0.08em' }}>
              VAULT PIECES ACQUIRED
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {order.items?.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <img src={item.mainImg} alt={item.title} style={{ width: '44px', height: '44px', borderRadius: '8px', objectFit: 'cover' }} />
                    <div>
                      <span style={{ color: 'var(--text-main)', fontWeight: '600', display: 'block', fontFamily: 'var(--font-heading)' }}>{item.title}</span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Variant: {item.size || 'Standard'} | Qty: {item.quantity}</span>
                    </div>
                  </div>
                  <span style={{ color: 'var(--primary)', fontWeight: '800', fontFamily: 'var(--font-heading)' }}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem', marginTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ color: 'var(--text-main)', fontWeight: '700', fontFamily: 'var(--font-heading)' }}>Grand Vault Total</span>
            <span style={{ color: 'var(--primary)', fontSize: '1.4rem', fontWeight: '900', fontFamily: 'var(--font-heading)' }}>${order.totalAmount?.toFixed(2)}</span>
          </div>

        </div>

        {/* Action Controls */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button onClick={() => navigate('/profile')} className="btn-secondary" style={{ padding: '0.8rem 1.75rem' }}>
            <Package size={18} /> View Order Vault History
          </button>

          <Link to="/products" className="btn-primary" style={{ padding: '0.8rem 1.75rem', fontWeight: '800' }}>
            <Home size={18} color="var(--text-inverse)" /> Continue Shopping
          </Link>
        </div>

      </div>

    </div>
  );
};

export default OrderConfirmationPage;
