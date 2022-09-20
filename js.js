const genBuzz = (limit) => {
    for(let i = 1; i <= limit; i++) {
         let word = ''
         if (i % 3 == 0) word = 'gen';
        if (i % 5 == 0) word = 'buzz';

             console.log(word || i)
     }
 }
     genBuzz(15);




   // Random Exercise Generator

   const excerise = ['push-ups', 'sit-ups', 'bear crawls', '1 mile run', '60 second plank', 'burpees', 'jumping jacks', 'squats', 'weighted squats', 'inch worms'];
   function randomExercise() {
       for(let i = 0; i < excerise.length; i++){
       console.log(excerise[i]);
       }
   }
   
   randomExercise();



//price listing

let itemList = () => {
    
    switch(itemList) {
        case 'shoes':
            console.log('shoes ' + $50)
            break;
        
        case 'jeans':
            console.log('jeans ' + $25)
            break;

        case 'hat':
            console.log('hat ' + $12)
            break;

        case 'socks':
            console.log('socks ' + $2)
            break;

        default:
            console.log('Invalid Item')
            break;
    }
}
        itemList('shoes')

  


