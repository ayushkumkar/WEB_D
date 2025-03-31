//filter 
//The .filter() method is used to create a new array containing only the elements that satisfy a given condition. It does not modify the original array.

let nums = [1,2,3,4,5,6,7,8,9,0]

const filtered_nums = nums.filter((num)=>{
    return num>4;
})

console.log(filtered_nums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let filtered_books = books.filter((bk)=>{
    return bk.edition >2004
  })

  console.log(filtered_books);
  
  