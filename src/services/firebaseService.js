import { db } from "../firebase";
import { collection, doc, getDoc, getDocs } from "@firebase/firestore";
export const fetchWidget = async (documentId) => {
    try {
      const docRef = doc(db, "widget", documentId);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        console.log("No such document!");
        return null;
      }
    } catch (error) {
      console.error("Error fetching widget:", error);
      throw error;
    }
  };
  
  export const fetchStatistics = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "statistics"));
      return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error("Error fetching statistics:", error);
      throw error;
    }
  };
  
  export const fetchTestimonial = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "Testimonial"));
      return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error("Error fetching testimonial:", error);
      throw error;
    }
  };