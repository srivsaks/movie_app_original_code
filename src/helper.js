export default function calculateWinner(content) {
  const winnerArray = [
    ["0", "1", "2"],
    ["3", "4", "5"],
    ["6", "7", "8"],
    ["0", "3", "6"],
    ["1", "4", "7"],
    ["2", "5", "8"],
    ["0", "4", "8"],
    ["2", "4", "6"],
  ];

  for (let i = 0; i < 7; i++) {
    if (
      content[winnerArray[i][0]] === content[winnerArray[i][1]] &&
      content[winnerArray[i][1]] === content[winnerArray[i][2]] &&
      content[winnerArray[i][0]] !== 0
    ) {
      return true;
    }
  }
  console.log("heyyy")
  return false;
}
