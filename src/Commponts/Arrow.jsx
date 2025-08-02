import { CircleArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const Arrow = () => {
     const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navElement = document.getElementById('welcome');
      if (!navElement) return;

      const navBottom = navElement.getBoundingClientRect().bottom;

      // إذا كان nav لا يزال ظاهرًا، أخفِ السهم
      if (navBottom > 0) {
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