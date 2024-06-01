import React, { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage"; // Use ref and getDownloadURL
import { db, imgDb } from "../../../firebase"; // Import storage from firebase.js

import style from "./Messages.module.css";

function Messages() {
  const [documentData, setDocumentData] = useState([]);
  const [currentQuoteIndices, setCurrentQuoteIndices] = useState({});

  useEffect(() => {
    const fetchQuotesAndImages = async () => {
      try {
        const quotesCollection = collection(db, "quotes");
        const quotesSnapshot = await getDocs(quotesCollection);

        const dataPromises = quotesSnapshot.docs.map(async (doc) => {
          const data = doc.data();
          const imgRef = data.imgRef;

          // Fetch image URL from Storage
          let imgUrl = null;
          if (imgRef) {
            const imgStorageRef = ref(imgDb, `/messagePhoto/${imgRef}`);
            imgUrl = await getDownloadURL(imgStorageRef);
          }

          return {
            quotes: data.quotes || [],
            imgUrl: imgUrl,
          };
        });

        const fetchedData = await Promise.all(dataPromises);

        setDocumentData(fetchedData);

        // Initialize currentQuoteIndices for each document
        const initialIndices = {};
        fetchedData.forEach((_, index) => {
          initialIndices[index] = 0;
        });
        setCurrentQuoteIndices(initialIndices);

        // Start the interval AFTER data is fetched
        const intervalId = setInterval(() => {
          setCurrentQuoteIndices((prevIndices) => {
            const newIndices = { ...prevIndices };
            for (let docIndex in newIndices) {
              newIndices[docIndex] =
                (newIndices[docIndex] + 1) % fetchedData[docIndex].quotes.length;
            }
            return newIndices;
          });
        }, 10000); // 10 seconds

        return () => clearInterval(intervalId);
      } catch (error) {
        console.error("Error fetching quotes and images:", error);
      }
    };

    fetchQuotesAndImages(); // Call the function here
  }, []);

  return (
    <div className={style.Messages}>
      {documentData.map((data, docIndex) => (
        <div className={`${style.herMessage} ${style.content}`} key={docIndex}>
          {data.imgUrl && <img src={data.imgUrl} alt={`Message ${docIndex + 1}`} />}
          <div className={style.textContainer}>
            <p onClick={() => handleQuoteClick(docIndex)}>
              {data.quotes[currentQuoteIndices[docIndex]]}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Messages;
