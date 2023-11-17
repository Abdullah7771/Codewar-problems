function sortByLanguage(list) {
  const arr= list.sort((a, b) => {
        const prog1 = a.language.toUpperCase(); // ignore upper and lowercase
        const prog2 = b.language.toUpperCase(); // ignore upper and lowercase
        if (prog1 < prog2) {
          return -1;
        }
        if (prog1 > prog2) {
          return 1;
        }
        if(prog1==prog2){
            const nameA= a.firstName.toUpperCase()
            const nameB= b.firstName.toUpperCase()
            if (nameA < nameB) {
                return -1;
              }
              if (nameA > nameB) {
                return 1;
              }
        }
      
        // names must be equal
        return 0;
      });

    return arr
}
