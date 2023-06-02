export const Gradients = (color: string): string[] => {
  let colors = [];

  switch (color) {
    case 'red':
      colors = ['#F9DEDE', '#F9DEDE'];
      break;
    case 'lightBlue':
      colors = ['#cedfe8', '#b4e2fb'];
      break;
    case 'blue':
      colors = ['#7dacdb', '#5e92d5'];
      break;
    case 'lightGreen':
      colors = ['#9fe79b', '#a8e38a'];
      break;
    case 'orange':
      colors = ['#dcb441', '#c47a58'];
      break;
    case 'purple':
      colors = ['#ab95c4', '#9d8fb9'];
      break;
    default:
      colors = ['#F9DEDE', '#F9DEDE'];
      break;
  }

  return colors;
};
