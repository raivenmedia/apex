import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function FullScreenDemoTransition({ destination, isActive, onComplete }) {
  const navigate = useNavigate();
  const [phase, setPhase] = useState(0);
  const [isRevealing, setIsRevealing] = useState(false);

  useEffect(() => {
    if (!isActive) {
      setPhase(0);
      setIsRevealing(false);
      document.body.classList.remove('transition-active');
      return undefined;
    }

    document.body.classList.add('transition-active');

    const timerOne = window.setTimeout(() => setPhase(1), 800);
    const timerTwo = window.setTimeout(() => setPhase(2), 1800);
    const timerThree = window.setTimeout(() => setIsRevealing(true), 2400);
    const timerFour = window.setTimeout(() => {
      if (onComplete) {
        onComplete();
      }
      navigate(destination);
    }, 3000);

    return () => {
      window.clearTimeout(timerOne);
      window.clearTimeout(timerTwo);
      window.clearTimeout(timerThree);
      window.clearTimeout(timerFour);
    };
  }, [destination, isActive, navigate, onComplete]);

  if (!isActive) {
    return null;
  }

  return (
    <div
      className={`transition-screen ${phase >= 1 ? 'transition-covered' : ''} ${isRevealing ? 'transition-reveal' : ''}`}
      role="presentation"
    >
      <div className="transition-blur-layer" />
      <div className="transition-text-layer">
        <div className="transition-card glass">
          <p className={`transition-line ${phase >= 0 ? 'active' : ''}`}>
            Imagine Your Business Online
          </p>
          <p className={`transition-line ${phase >= 1 ? 'active' : ''}`}>
            Your digital future starts here.
          </p>
          <p className={`transition-line ${phase >= 2 ? 'active' : ''}`}>
            Explore what is possible.
          </p>
        </div>
      </div>
    </div>
  );
}

function TransitionLink({ to, children, className, ...props }) {
  const [active, setActive] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setActive(true);
  };

  return (
    <>
      <Link to={to} className={className} onClick={handleClick} {...props}>
        {children}
      </Link>
      <FullScreenDemoTransition destination={to} isActive={active} onComplete={() => setActive(false)} />
    </>
  );
}

export { FullScreenDemoTransition, TransitionLink };
export default FullScreenDemoTransition;
