
import './input.css';
import './App.css';
import  { useRef } from 'react';
import Body from '../component/Body.tsx';
import Body2 from '../component/Body2.tsx';
import SOS from '../component/SOS.jsx';
import Footer from '../component/Footer.tsx';
function App() {
  


  const body2Ref = useRef<HTMLDivElement>(null);
  const scrollToBody2 = () => {
    body2Ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
return(
    
<>

      <Body scrollToBody2={scrollToBody2} />
      
      {/* Section to scroll to */}
      <div ref={body2Ref}>
        <Body2 />
      </div>
      <SOS />
    <Footer/>
    


   
   </>
 


  );
}

export default App;