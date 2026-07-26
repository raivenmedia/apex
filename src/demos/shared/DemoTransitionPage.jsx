import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const demoRoutes = {
  'hotel-lodge': '/demos/hotel-lodge',
  restaurant: '/demos/restaurant',
  supermarket: '/demos/supermarket',
  salon: '/demos/salon',
  school: '/demos/school',
  clinic: '/demos/clinic',
};

function DemoTransitionPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  useEffect(() => {
    const targetRoute = demoRoutes[slug] || '/showcase';

    const timerOne = window.setTimeout(() => setStep(1), 1000);
    const timerTwo = window.setTimeout(() => setStep(2), 2000);
    const timerThree = window.setTimeout(() => navigate(targetRoute, { replace: true }), 3000);

    return () => {
      window.clearTimeout(timerOne);
      window.clearTimeout(timerTwo);
      window.clearTimeout(timerThree);
    };
  }, [navigate, slug]);

  return (
    <main className="transition-screen">
      <div className="transition-ambient" />
      <div className="transition-orb orb-a" />
      <div className="transition-orb orb-b" />
      <div className="transition-particles" aria-hidden="true">
        {Array.from({ length: 18 }).map((_, index) => (
          <span key={index} className={`particle particle-${index % 3}`} />
        ))}
      </div>
      <div className="transition-card glass">
        <p className={`transition-line ${step >= 0 ? 'active' : ''}`}>
          Imagine Your Business Online
        </p>
        <p className={`transition-line ${step >= 1 ? 'active' : ''}`}>
          Your vision can become a digital experience.
        </p>
        <p className={`transition-line ${step >= 2 ? 'active' : ''}`}>
          Explore what ApexCole Technology can create for your business.
        </p>
      </div>
    </main>
  );
}

export default DemoTransitionPage;
