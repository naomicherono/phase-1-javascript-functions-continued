// code your solution here
// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  const mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };
  
  function wrapAdjective(symbol) {
    return function (adjective) {
      return `You are ${symbol}${adjective}${symbol}!`;
    };
  }
  console.log(saturdayFun());
  console.log(saturdayFun("bathe my dog")); 
  
  console.log(mondayWork());
  console.log(mondayWork("work from home"));
  
  const wrapWithStars = wrapAdjective('*');
  console.log(wrapWithStars("a hard worker"));