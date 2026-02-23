1. Difference between DOM selectors

getElementById gets one element by its ID.
getElementsByClassName gets many elements by class, and querySelector/querySelectorAll use CSS selectors.


---

2. Create and insert a new element

Use createElement() to make a new element.
Then use appendChild() to add it to the page.


---

3. Event Bubbling

Event bubbling means the event goes from child to parent.
If you click a button, the parent can also receive the event.


---

4. Event Delegation

Event delegation means adding one event listener to a parent.
It helps control many child elements easily.


---

5. preventDefault() vs stopPropagation()

preventDefault() stops the default action.
stopPropagation() stops the event from going to the parent.