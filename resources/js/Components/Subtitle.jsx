// Subtitle.jsx
export default function Subtitle({ children, centered }) {
    return (
      <h2 className={centered ? 'text-3xl font-bold text-center mb-4' : 'text-3xl font-bold mb-4'}>{children}</h2>
    );
  }
  
