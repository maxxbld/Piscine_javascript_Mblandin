// Rebecca's Secret Message 

/* 
  
Rebecca est amoureuse de David, elle a crée un programme spécialement pour lui avouer sa flamme lors de son prochain cours de programmation.
le programme à la comportement suivant : 

Le programme va saluer l'utilisateur 
Ensuite lui demander son prénom ?
Et si le prénom de l'utilisateur est David, le programme affiche :
"I really wanna stay at your house, and i hope this works out"
Si le prénom de l'utilisateur n'est pas David le programmie affiche : 
"Get away !"

====OUTPUT case David==== 

Welcome to my secret Diary !
What is your name ?> David
I really wanna stay at your house, and i hope this works out...


====OUTPUT case Other==== 
Welcome to my secret Diary !
What is your name ?> Juan
Get Away !


//Pensez à tester votre code sur index.js

  */
console.log("hello to my secret diary !")
let name= prompt("what's your name ?")

if (name==="David"){
  console.log("I really wanna stay at your house, and i hope this works out")
}else{
  console.log("get away !")
}