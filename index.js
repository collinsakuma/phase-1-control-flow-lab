function scuberGreetingForFeet(val){
  if (val <= 400) {
    return 'This one is on me!';
  } else if (val > 400 && val <= 2000) {
    return 'That will be twenty bucks.';
  } else if (val > 2000 && val < 2500) {
    return 'I will gladly take your thirty bucks.';
  } else if (val > 2500) {
    return 'No can do.'
  }
}

function ternaryCheckCity(city){
  return city === "NYC" ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip){
  switch(tip) {
    case tip = 'generous':
      return 'Thank you so much.';
      break;
    case tip = 'not as generous':
      return 'Thank you.';
      break;
    case tip = 'thanks for everything':
      return 'Bye.';
      break;
  }
}

console.log(scuberGreetingForFeet(2400));
console.log(ternaryCheckCity('Cypress'));