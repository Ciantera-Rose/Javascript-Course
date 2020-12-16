////Popular Lodash Functions: keyBy, reduce, and random

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Lodash Demo</title>
    <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.4/lodash.min.js"></script>
  </head>
  <body>
  </body>

  <script>
    // keyBy
    const roster = [
      { position: '3B', name: 'Bregman, A' },
      { position: '2B', name: 'Altuve, J' },
      { position: 'CF', name: 'Springer, G' },
      { position: '1B', name: 'Gurriel, Y' },
      { position: 'LF', name: 'Gonzalez, M' }
    ]
  </script>
</html>
//What if you want the values instead of the keys.
//Allows you to reach into a nested set of objects. And immedicately go and grab the nested elements

//-------------------------------------------
<script>
    // keyBy
    const roster = [
      { position: '3B', name: 'Bregman, A' },
      { position: '2B', name: 'Altuve, J' },
      { position: 'CF', name: 'Springer, G' },
      { position: '1B', name: 'Gurriel, Y' },
      { position: 'LF', name: 'Gonzalez, M' }
    ]

    const positions = _.keyBy(roster, 'position');
    const secondBase = positions['2B'];
    const thirdBase = positions['3B'];
    //console.log(roster); //Returns list
    //console.log(positions); //Returns object. Cloned 
    console.log(secondBase); 
  </script>
</html>
//--------------------------------------------
<script>
    // Reduce
   const sum = _.reduce([1, 2, 3], function(total, num) {
     return total + num;
}, 0);
console.log(sum); 
  </script>
  //Leverging reduce to iterate over the list and reduce the sum of the total

  //------------------------------------------
  // reduce
    <script>
     const homerunStats = [
      { name: 'Bregman, A',  hr: 19 },
      { name: 'Altuve, J',   hr: 24 },
      { name: 'Springer, G', hr: 34 },
      { name: 'Gurriel, Y',  hr: 18 },
      { name: 'Gonzalez, M', hr: 23 }
    ];

    const totalHomeruns = _.reduce(homerunStats, function(total, player) {
      return total + player.hr;
    }, 0);
    console.log(totalHomeruns); //118
   <script>
//---------------------------------------------------------
    <script>
    //Reduce
const links = [
      "https://google.com",
      "https://devcamp.com",
      "https://airbnb.com"
    ];

    const webLinks = _.reduce(links, function(content, link) {
      return `<a href='${link}'>${link}</a><br>`.concat(content);
    }, '');
    console.log(webLinks);
  </script>

  //---------------------------------------------
   <script>
    // random
    lodashRandNumber = () => {
      return _.random(1, 100);
    }

    const lodashSampleNumbers = _.times(5, lodashRandNumber);

    console.log(lodashSampleNumbers);
  </script>