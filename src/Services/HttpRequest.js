const Get = async (url) => {
    debugger;
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle errors gracefully (e.g., display user-friendly message, retry logic)
      return null; // Or return a default value or handle errors differently
    }
  };
  