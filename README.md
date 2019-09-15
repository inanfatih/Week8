
3. console.log() your variable to confirm that you have assigned the values correctly. If done correctly, you output should look similar to:
```js
{ input: 'input1', output: 'output1' }
```

4. Below your variable declaration, create a function called ‘reply’.
5. In the ‘reply’ function, declare a variable called ‘question’ and assign to it the **value**of the HTML `<input>` element. 
  - HINT: use the id assigned to the `<input>` element to get access to the element.
6. Use a conditional statement to check if the value you stored in the 'question' variable matches the 'input' defined in the object you first created.
     1. If it does, assign the corresponding output to the **value** of the <textarea> element. 
         - HINT: use the id assigned to the `<textarea>` element to get access to the element.
     2. if it does not, assign the string "I don't understand that command. Please enter another." to the **value** of the `<textarea>` element.
  - HINT: use the id assigned to the `<textarea>` element to get access to the element.
7. Below your 'reply' function, attach a 'click' event listener to the `<button>` element defined in the HTML file. 
  - HINT: use the id assigned to the `<button>` element to get access to the element.
    Alternatively, you can modify the HTML to add a `<form>` element around the `<input>` and `<button>` and attach an event listener the form's `submit` event. This will allow you to use the enter key to enter input as well.
8. Save your JavaScript code. You now have a functional simple chatbot. Try it out by opening the 'index.html' file in your browser. REMEMBER to include your JavaScript code in the ‘index.html’ file either internally or externally.

### SUBMISSION

Before submitting your assignment, remember to organize your code according to the best practices for structuring code files. This means:

*   HTML, CSS, and JS code should be in separate files
*   All files should be organized into their respective folders
*   [Read this article for more info](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/Dealing_with_files)

### EVALUATION

When evaluating this assignment, we will be looking for:

*   Proper code formatting
*   Correct structuring of code files
*   Descriptive comments within code
*   Functionality of the chatbot (if it’s working or not)

### BONUS

Try out different ‘input’ and ‘output’ statements with the chatbot. 
HINT: you will need these in part 2.

Add your own CSS and/or restructure the HTML to your liking. Make your chatbot unique!
