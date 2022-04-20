const isHasMajorVowelHarmony = (word) => {
  
  const hardVowels = ['a','ı','o','u'];
  const softVowels = ['e','i','ö','ü'];

  const newWord = word.toLocaleLowerCase("tr-tr");

  let isSoft = false;
  let isHard = false;

  for(const letter of newWord) {
    if(hardVowels.includes(letter)){
      isHard = true;
    }
    if(softVowels.includes(letter)){
      isSoft = true;
    }
  }

 return isSoft && isHard ? false : true;
};

export default isHasMajorVowelHarmony;


