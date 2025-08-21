import axios from "axios";
import  { useRef , useState } from 'react';
export default function SOS() {
const [status, setStatus] = useState(""); 


const sendSOS = async () => {
  try {
    // Example SOS data
    const sosData = {
      message: "Emergency! Please help me.",
      userId: 12345,
      location: {
        lat: "27.7172",
        lng: "85.3240"
      }
    };

    // Send POST request to backend
const response = await axios.post("/api/send-sos", sosData);

    if (response.data.success) {
      setStatus("✅ SOS sent successfully!");
    } else {
      setStatus("⚠️ Failed to send SOS.");
    }
  } catch (error) {
    console.error("Error sending SOS:", error);
    setStatus("❌ Error sending SOS.");
  }
};

  
return(
    
<>
<div className="fixed bottom-9 right-8">
 
      <button
      className="fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-red-600
       text-white font-semibold shadow-2xl shadow-gray-400 transition transform hover:scale-125"

        
        onClick={sendSOS}
      >
        SOS 
      </button>
      <div style={{ marginTop: "20px", fontWeight: "bold" }}>{status}</div>

      </div>


   </>
 
);
}
