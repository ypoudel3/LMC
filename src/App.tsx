import './input.css';
import './App.css';
import React, { useRef } from 'react';
import Body from '../component/Body.tsx';
import Body2 from '../component/Body2.tsx';

function App() {
  const body2Ref = useRef<HTMLDivElement>(null);
  const scrollToBody2 = () => {
    body2Ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
return(
    <>

 <div>
      <Body scrollToBody2={scrollToBody2} />
      
      {/* Section to scroll to */}
      <div ref={body2Ref}>
        <Body2 />
      </div>
    </div>
   

</>
  );
}

export default App;