let hour = 18; 
switch (true) {
  case (hour >= 5 && hour < 12):
    console.log('Good Morning');
    break;
  case (hour >= 12 && hour < 17):
    console.log('Good Afternoon');
    break;
  case (hour >= 17 && hour < 21):
    console.log('Good Evening');
    break;
  default:
    console.log('Good Night');
    break;
}

