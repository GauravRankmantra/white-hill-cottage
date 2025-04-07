import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';

const BookNowModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  const [hasAnimatedIn, setHasAnimatedIn] = useState(false);

  const modalAnimation = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? 'translateY(0%)' : 'translateY(-100%)',
    config: { mass: 1, tension: 300, friction: 30 },
    onStart: () => {
      if (isOpen) {
        setHasAnimatedIn(true);
      }
    },
    onRest: () => {
      if (!isOpen) {
        setHasAnimatedIn(false);
      }
    },
  });

  const handleOverlayClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      // document.body.style.overflow = 'scroll'; // Prevent scrolling behind the modal
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto'; // Clean up on unmount
    };
  }, [isOpen]);

  if (!isOpen && !hasAnimatedIn) {
    return null;
  }

  return (
    <animated.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0)', // Semi-transparent overlay
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        pointerEvents: isOpen ? 'auto' : 'none',
        ...modalAnimation,
      }}
      onClick={handleOverlayClick}
    >
      <animated.div
        ref={modalRef}
        style={{
          background: 'linear-gradient(135deg, #6666ff 0%, #2edcff 100%)', // Cool gradient
          color: '#fff',
          padding: '30px',
          borderRadius: '10px',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
          maxWidth: '80%',
          maxHeight: '80%',
          overflowY: 'auto',
          ...modalAnimation, // Apply animation to the modal content as well for a smoother effect
        }}
      >
        <h2 className='text-2xl font-ralewayB'>Book Your Adventure Now!</h2>
        <p>Please fill out the form below to book your experience.</p>

        {/* Your booking form goes here */}
        <form>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
            <input type="text" id="name" name="name" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid white', color: '#ffff' }} />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
            <input type="email" id="email" name="email" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid white', color: '#333' }} />
          </div>
          {/* Add more form fields as needed */}
          <button
            type="submit"
            style={{
              background: '#fff',
              color: '#2575fc',
              padding: '12px 20px',
              borderRadius: '5px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
              transition: 'background-color 0.3s ease',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#f0f0f0')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#fff')}
          >
            Submit Booking
          </button>
        </form>

        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'transparent',
            color: '#fff',
            border: 'none',
            fontSize: '20px',
            cursor: 'pointer',
          }}
        >
          &times;
        </button>
      </animated.div>
    </animated.div>
  );
};

export default BookNowModal;