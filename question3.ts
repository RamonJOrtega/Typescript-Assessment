// QUESTION 3: Asynchronous Event Debugging
// ----------------

// The following line of code works most of the time:

// js
ReactDOM.render(<Webmap/>, document.getElementById('app-container'));
//

// But, occasionally during browser startup it fails with an
// exception because 
document.getElementById('app-container')
// returns `null`.

// The following changes address the issue and work reliably.
// Explain why this code works, but the original code would sometimes fail.

// js
window.addEventListener('load', () => {
  ReactDOM.render(<Webmap/>, document.getElementById('app-container'));
})


// You may use https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event for reference
// about the 
Window: load 
//event