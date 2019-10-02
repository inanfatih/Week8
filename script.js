//object containing inputs and outputs arrays
let chatInputsOutputs = [
  {
    inputs: 'Hello',
    outputs: ['Hello', 'Hey', 'Greetings'],
  },
  {
    inputs: 'What is your favourite colour?',
    outputs: ['I am not sure.', 'White', 'Blue'],
  },
  {
    inputs: 'How are you?',
    outputs: ['Great!', 'Not bad', 'Good'],
  },
];

const randomNuberGenerator = () => Math.floor(Math.random() * 3);

console.log(chatInputsOutputs);

const answerRandom = item => {
  return item[0].outputs[randomNuberGenerator()];
};
const answerShortest = item => {
  return item[0].outputs.reduce((a, b) => (a.length < b.length ? a : b));
};
const answerLongest = item => {
  return item[0].outputs.reduce((a, b) => (a.length > b.length ? a : b));
};

// reply function
const reply = selectedAnswer => {
  let question = document.getElementById('input').value.toLowerCase();

  console.log(question);
  document.getElementById('output').value +=
    'You: ' + document.getElementById('input').value + '\n';
  const filteredObject = chatInputsOutputs.filter(
    item => question === item.inputs.toLowerCase(),
  );
  console.log('filteredobject', filteredObject);

  if (filteredObject.length === 1) {
    if (selectedAnswer === 1) {
      document.getElementById('output').value +=
        'Computer: ' + answerLongest(filteredObject) + '\n\n';
    } else if (selectedAnswer === 2) {
      document.getElementById('output').value +=
        'Computer: ' + answerShortest(filteredObject) + '\n\n';
    } else {
      document.getElementById('output').value +=
        'Computer: ' + answerRandom(filteredObject) + '\n\n';
    }
  } else {
    //when the input is not recognized
    document.getElementById('output').value +=
      "Computer: I don't understand that command. Please enter another. \n\n";
  }
};

// Event listener of submit button
document.getElementById('submit').addEventListener('click', function() {
  let option = 0;
  if (document.getElementById('longest').checked) {
    option = 1;
  } else if (document.getElementById('shortest').checked) {
    option = 2;
  }
  console.log('submit clicked');
  reply(option);
});
