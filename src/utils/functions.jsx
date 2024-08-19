function patnersDisplay(patners) {
    if (!patners) return null;
  
    // Split the string into words
    const words = patners.split(' ');
  
    // Determine how many words are present
    const numWords = words.length;
  
    // Based on the number of words, return the corresponding JSX
    switch (numWords) {
      case 1:
        return <span>{patners}</span>;
      case 2:
        return (
          <>
            <span>{words[0]}</span>
            <p>{words[1]}</p>
          </>
        );
      default:
        return (
          <>
            <span>{words[0]}</span>
            <p>{`${words.slice(1).join(' ')} ${words[numWords - 1]}`}</p>
          </>
        );
    }
  }
  export default patnersDisplay