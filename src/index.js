/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
      let numberHours;
      if (knowsProgramming) {
        numberHours = 800;
      } else {
        numberHours = 1300;
      }
      let weeks = Math.ceil(numberHours / config[focus]);
    return weeks;
  };
   
