'use strict'


console.log('hello')
var gProjects

_createProjects()
console.log(gProjects)

function _createProject(name, title, desc='',imgURL, labels ,publishedAt) {
    return {
        id: name.toLowerCase(),
        name,
        title,
        desc,
        imgURL,
        url: `https://nealadam1.github.io/${name}`,
        publishedAt: time_ago(publishedAt),
        labels
    }
}

function _createProjects(){
    gProjects=[
        _createProject('guess-me','Game-app showing use of jquary and bootstrap','Utilizing jquary and bootstrap to create a dynamic responsive mini guessing game. The game evolves the more you play.','img/portfolio/guess-me',['jquary','Bootstrap'], new Date(2022,11,5) ),
        _createProject('MineSweeper','Minesweeper Game','Homage to the original Minesweeper game with some twists utilizing vanilla js,html5,css3','img/portfolio/MineSweeper',['Js','Css3', 'Html5'], new Date(2022,10,25) ),
        _createProject('book-shop','Online Bookstore inventory manage','utilizing CRUD to build and render dynamic book list with filtering capabilities','img/portfolio/book-shop',['CRUD','MVC', 'JS'], new Date(2022,11,1) ),
        _createProject('login-page','Login page simulation with users from local DB','utilizing MVC to build and render userlist identifying logged admins','img/portfolio/login-page',['MVC', 'JS'], new Date(2022,11,2) )
    ]
}

function getProjects(){
    return gProjects
}