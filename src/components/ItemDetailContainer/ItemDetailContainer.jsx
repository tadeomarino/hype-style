import { useState, useEffect } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import ItemDetail from '../ItemDetail/ItemDetail.jsx';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  
  const [item, setItem] = useState();
  
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    
    // Make sure that the id parameter is a string
    if (typeof id !== 'string') {
      console.error('Invalid id parameter:', id);
      return;
    }
  
    const itemRef = doc(db, 'items', id);
  
    getDoc(itemRef).then((docSnapshot) => {
      if (docSnapshot.exists()) {
        setItem({ id: docSnapshot.id, ...docSnapshot.data() });
      }
    });
  }, [id]);  

  console.log(id)

  return (
    <div className='container'>
      {item ? <ItemDetail item={item} /> : <p>Loading...</p>}
    </div>
  );
};

export default ItemDetailContainer;
