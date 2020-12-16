//Overview of Lodash JavaScript Library
//https://lodash.com/

//--------------------------------------------
//Times function
 <script>
    //Times
    randNumber = () => {
      return Math.round(Math.random() * 100);
    }

    const sampleNumbers = _.times(5, randNumber)
    console.log(sampleNumbers);
  </script>
  
//--------------------------------------------
<script>
  //filter
    const players = [
      { name: 'Bregman, A',  battingAverage: 0.284 },
      { name: 'Altuve, J',   battingAverage: 0.346 },
      { name: 'Springer, G', battingAverage: 0.283 },
      { name: 'Gurriel, Y',  battingAverage: 0.299 },
      { name: 'Gonzalez, M', battingAverage: 0.303 }
    ]

    const over300 = _.filter(players, player => {
      return player.battingAverage < 0.300;
    });

    console.log(over300);
<script>
    //List of 5 player objects
    //filter is a function approach to filtering data that returns a new set of values. Each time the condition is met it keeps track of it and then contiunues on to find the next one that matches until it's done. And stores it all in the variable