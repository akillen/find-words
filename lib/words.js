exports.search = (word, dictionary) => {
  let toSearch = '^' + word.replace(/\_/g, '[a-z]') + '$';
  
  console.log(`Searching for ${toSearch} from ${dictionary.length} total words.`);
  
  let results = dictionary.filter((e)=>{
    return e.match(new RegExp(toSearch, 'i'));
  });
  
  console.log(`Found ${results.length} results.`);
  
  return {
    words: results,
    pattern: word,
  };
};