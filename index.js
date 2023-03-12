function writeCards(names) {
    const thankYouMessages = [];
    for (const name of names) {
      thankYouMessages.push(`Thank you, ${name}, for the wonderful surprise gift!`);
    }
    return thankYouMessages;
  }
  
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  
  const names = ["Guadalupe", "Ollie", "Aki"];
  const thankYouMessages = writeCards(names);
  console.log(thankYouMessages);
  
  countDown(5);