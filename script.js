//object containing inputs and outputs arrays
let chatInputsOutputs = {
  inputs: ['Hello', 'How are you?', 'What is your favourite colour?'],
  outputs: [
    'Hi',
    'Great!',
    "I have so many favorites it's hard to choose one.",
  ],
};
console.log(chatInputsOutputs);
console.log(chatInputsOutputs.inputs);
console.log(chatInputsOutputs.outputs);

function reply() {
  let question = document.getElementById('input').value.toLowerCase();

  console.log(question);

  // statement to answer the question based on the index of the question.
  if (
    question.toLowerCase() &&
    chatInputsOutputs.inputs
      .map(v => v.toLowerCase())
      .includes(question.toLowerCase())
  ) {
    let indexOfQuestion = chatInputsOutputs.inputs
      .map(v => v.toLowerCase())
      .indexOf(question.toLowerCase());
    document.getElementById('output').value =
      chatInputsOutputs.outputs[indexOfQuestion];
  } else {
    //when the input is not recognized
    document.getElementById('output').value =
      "I don't understand that command. Please enter another.";
  }
}

document.getElementById('submit').addEventListener('click', function() {
  console.log('submit clicked');
  reply();
});
