# **Lost in Translation**
## **Idea**
Build an online sign language translator as a Single Page Application using the React framework.
The application will have one main feature to act as a “translator” from regular text to sign 
language. The application must be able to translate English words and short sentences to 
American sign language. The images for the sign language will be provided.

See website here: https://lost-in-translation-ae1o.vercel.app

## **Set up the development environment**
Make sure you have the following tools available:
  - NPM/Node.js (LTS – Long Term Support version)
  - React CRA (create-react-app)
  - Visual Studio Code Text Editor/ IntelliJ
  - Browser Developer Tools for testing and debugging
  - Rest API: https://github.com/dewald-els/noroff-assignment-api

## **Requirements for the sign language translator**

## **1. Startup / Login Page**

<img src="/pictures/start_up_page.png">

The first thing a user should see is the “Login page” where: 
- the user must be able to enter their name 
- username can not be empty, a message should view

<img src="/pictures/start_up_page_empty_name.png">

- the username have to be saved to the Translation API 
- remember to first check if the user exists
- if user not exists create this user and store in the API 
- the app must display the main page
- users that are already logged in automatically be redirected 
to the Translation page 
- use the browsers’ local storage to manage the session

## **2. Translation Page**

<img src="/pictures/translation_page.png">

- a user may only view this page if they are currently logged into the app 
- redirect a user back to the login page if no active login session exists in the browser storage
- user types in the input box at the top of the page 

<img src="/pictures/translation_page_click_translate.PNG">

- user must click on the “translate” button to the right of the input 

<img src="/pictures/translation_page_click_translate_result.PNG">

- text can not be empty, a message should view

<img src="/pictures/translation_page_empty_word.png">

- box to trigger the translation
- translations must be stored using the API (See Required features for more information here: 

  https://github.com/dewald-els/noroff-assignment-api/blob/master/docs/lost-in-translation.md) 
- sign language characters must appear in the “translated” box
- check that it did not type special characters or numbers 
  
  (except space and will return one space)

## **3. Profile page**

<img src="/pictures/profile_page.PNG"> 

- the profile page must display the last 10 translations for the current user 
- display only the text of the translation 
- have also to be a button to clear the translations 
- this should “delete” in your API and no longer display on the profile page 
- add a message that user will lose history

<img src="/pictures/profile_page_click_history%20button.PNG">

Before translate "hello"

<img src="/pictures/profile_page_after_click_translate.PNG">

After translate "hello"

<img src="/pictures/profile_page_click_history%20button_result.PNG">

- the Logout button should clear all the storage and return to the start page
- add a message that user is sure that wants to leave

<img src="/pictures/logout_button_dialog.png">
