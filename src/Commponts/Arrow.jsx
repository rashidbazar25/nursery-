import { CircleArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const Arrow = () => {
     const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const welcomeElement = document.getElementById('welcome');
      if (!welcomeElement) return;

      const welcomeBottom = welcomeElement.getBoundingClientRect().bottom;

      // إذا كان welcome لا يزال ظاهرًا، أخفِ السهم
      if (welcomeBottom > 0) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // تشغيل أول مرة عند تحميل الصفحة
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className={`arrow ${isHidden ? 'hidden' : ''}`}>
        <CircleArrowUp color='#eba9cb' size={45}
                        onClick={() => {
                   const welcome = document.getElementById("welcome");
                   if (welcome) {
                   welcome.scrollIntoView({ behavior: "smooth" });
    }
  }}
        />
    </div>
  )
}

export default Arrow