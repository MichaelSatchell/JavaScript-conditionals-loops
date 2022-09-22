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

  


//log and return function for days of the week.

        const classDay = (day) => {
        if (day === 'monday' || day === 'wednesday'|| day ==='thursday') {
            console.log('Today is ' + day + ' and we have class tonight');
        
        } else if (day === 'sunday' || day === 'tuesday'|| day ==='friday' || day === 'saturday') {
            console.log(`Today is ${day} no class`);

        } else {
            console.log('input a day of the week.')
        };
    };
    classDay('monday')
    classDay('sunday')
    classDay('hello')
    



// Objects
    const person = {
        _firstName: 'John',
        _lastName: 'Doe',
        get fullName() {
          if (this._firstName && this._lastName){
            return `${this._firstName} ${this._lastName}`;
          } else {
            return 'Missing a first name or a last name.';
          }
        }
      }
       
      // To call the getter method: 
      person.fullName; // 'John Doe'


      //codecademy getters and typeof example
      const robot = {
        _model: '1E78V2',
        _energyLevel: 100,
        get energyLevel(){
          if(typeof this._energyLevel === 'number') {
          return 'My current energy level is ' + this._energyLevel 
        }else{
          return 'System malfunction: cannot retrieve energy level' 
        }
      
        
      }
      };
      
      console.log(robot.energyLevel)
      
//NinjaBattle...choice your ninja
      const ninjaBattle = (ninja) => {
            
        if (ninja === 'Naruto' || ninja === 'Sasuke' || ninja === 'Kakashi' || ninja === 'Obito' || ninja === 'Madara') {
            console.log(`You have selected the Legendary Ninja ${ninja}`) ;
        } else if (ninja === 'Sakura'  || ninja === 'Sia' || ninja === 'Darui') {
            console.log(`You have selected ${ninja}`);
        } else {
            console.log('Invalid Ninja Name')
        }
      };
      console.log(ninjaBattle('Obito'))
      console.log(ninjaBattle('Sakura'))
      console.log(ninjaBattle('Micha'))
      