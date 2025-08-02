import { CircleArrowUp } from 'lucide-react';

const Arrow = () => {
  return (
    <div>
        <CircleArrowUp color='#eba9cb' size={45}
          onClick={() => {
                   const arrow = document.getElementById("welcome");
                   if (arrow) {
                   arrow.scrollIntoView({ behavior: "smooth" });
    }
  }}
        />
    </div>
  )
}

export default Arrow