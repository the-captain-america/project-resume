/// So what is the plan?

// First we need to have a 'store' for passing the current state of the skills generated.  So there needs to be a a collection which stores this data and has a Read method performed for the components that need it

// the next thing is that there needs to be a way to Create more objects to read back.  Where would this be handled?

// 1. User Signs in
// 2. User clicks 'get started'
// 3. User sees list of current and active skills (getSkillsAction)
// 4. User adds skill to skills list.  Presses button "add skill"
// 5. User sees modal with fields to add skill
// 6. User fills out fields and saves (saveSkillAction)
// 7. User presses edit on selected skill from the skills list
// 8. User sees slider in order to change the skill value
// 9. User can type into input field to update the skill type.
// 10. User presses delete on selected skill in skills list (removeSkillAction)
// 11. User no sees selelcted skill removed

// Addons
// Create an asynchronous callback for modal.  Once data has been saved, close the modal and trigger a snackbar component to load some text that says: 'Skills have been saved.'

// Bugs:
// Fix input button for avatar imagePreviewUrl

// WIP
// Add delete button to each item in the "curent skills" section
// Upon clicking "edit", open sidemenu and fill in each section with data from selected index
