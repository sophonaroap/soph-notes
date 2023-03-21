# Component File Structure

## Rules of Atoms
The atom is the most basic component, as generic as can be. Think buttons, inputs, or formatted title text:

- It should not compose other components/only uses native elements or framework-specific components similar to native elements
- Can have its own markup & styles
- Can maintain its own internal state
- Should not be tightly coupled to specific UI or Logic areas
- Should not access application (or higher level) state directly
- Should not have any non-ui/layout related side effects
- Should not implement any application-specific business logic

## Rules of Molecules
The molecule composes atoms to create a more complex component, with its own markup and styling added to the mix. Very similar to atoms but think something like reusable piece of a form with input, label, and error validation messaging, or a product card with title, subtitle, and image:

- It is made up of one or more Atoms
- Can have its own markup & styles
- Can maintain its own internal state
- Should not be tightly coupled to specific UI or Logic areas
- Should not access application (or higher level) state directly
- Should not have any non-ui/layout related side effects
- Should not implement any application-specific business logic

## Rules of Organisms
The organism is where the business logic of your application starts to come out. They might correspond to a specific feature or section of the app. They may also be generally applicable but tightly coupled with the application logic. Data fetching and reading/writing to application state should primarily happen here (or alternatively at the Page level). This could be like an entire form, or part of a shopping card, or a users profile:

- It is more complex, made up of multiple atoms and/or molecules and/or other organisms
- Can have its own markup & styles
- Can fetch application-specific data
- Can implement application-specific business logic
- Can be connected to application (or higher level) state
- Can be tightly coupled with a specific area (UI and/or Logic) of the app
- Can be organized into sub-folders by logical categorization (feature, page, etc...)

## Rules of Templates
A template is a way to ensure that the Pages of your app are consistent. They handle creating the layout, and make it easy to know where specific areas of content or functionality need to go. There are a number of ways to create templates. I prefer having a single component that takes other components a props, and slots those prop-children into layout-specific markup:

- It facilitates the layout of multiple organisms
- Can have its own markup & styles.
- Can accept & pass props as required.
- Should not access application (or higher level) state
- Should not have any non-ui/layout related side effects
- Should not implement any application-specific business logic

## - Rules of Pages
The pages are the last piece of the Atomic Design puzzle, and each one will implement a specific Template. I prefer very simple Page components, but they can be more complex if you prefer simple Routes (see next section). At the most basic, the page just implements a template, assigning the correct children to the correct template props:

- It implements a particular template
- Can fetch application-specific data
- Can implement application-specific business logic
- Can be connected to application (or higher level) state
- Should not have its own markup & styles