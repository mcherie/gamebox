//const dotenv = require('dotenv')
const ENV = process.env.ENV || "development";
const knexConfig = require("../../knexfile");
const knex = require("knex")(knexConfig[ENV]);


// module.exports = {

let generateQuestion = function (category)
  {
    knex.select('question')
      .from('wingit')
      .where('category', '=', category)
      .orderByRaw('random()')
      .limit(1)
      .then(rows => 
        console.log(rows[0].question)
      )

}

// }

generateQuestion('hand')