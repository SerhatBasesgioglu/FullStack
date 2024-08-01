26/07/2024
This is a full stack application to learn/show off all required technologies for a fullstack developer, it will be mainly focused on backend technologies.

Backend

Backend will start as a monolith application in spring boot, later on some of the services will be turned into microservices. Monolith will be on a vm, microservices will be on containers.

Frontend will start as a spa application (react + tailwind + daisy ui), later on nextjs will be used. Typescript also will emerge in next stages.
Storage will introduce both sql and nosql data in different places.
System will be hosted on AWS. All of the concepts will be researched and their advantages/disadvantages/alternatives will be discussed.

TODO

1-Find a proper idea to implement most of the enterprise level technologies on a small scale. It requires:

More than 3-4 services (for implementing microservices)
Real time connection (for websockets)
High amount of data for both storage and processing (for learning query optimization and caching strategies)
Interesting idea with imporovability.

27/07/2024

While there is more than 1 idea for the first 3 matters, the last one is tricky. I can focus on a ecommerce application or a social media clone, however they dont peek my interest. I want to integrate a game into this system with online/coop elements. This will both open my path into game development and it will introduce new challenges like game server setup. In the long run I am planning to create the game in a game engine. However in the current stage I am planning to focus on backend development, so game will be designed as dummy project. It will run on browser and collect some data. My focus will be on handling that data, it will be statistics, chat logs etc. SO lets start.

First of all i will need to setup a game server with a pretty basic game. I am planning to go with .io games route, they are pretty basic in terms of gameplay and they are good for data collection. I will setup a system similar to lordz.io, playable character and commanding soldiers with a structure system.

I researched a bit about what to use. The browser game will be POC so i dont wanna learn a dedicated lib for it like phaser, i will use basic canvas rendering with reactjs. I will start with react and js, later on i am planning to turn them into nextjs and ts.

Before starting to write code I will make a general layout of the systems.

1- Create react project with vite. I dont know much about webpack and bundling, all i know vite has smaller bundle size than react and some predefined configs. I dont care about most of the differences between different configs so i will go with opiniated stuff.

2- Write the game render page. Self explainatory, create a page with canvas.

3- Crate a dummy player. Render a circle, try to move it on screen if possible.

4- Create the backend. I will use spring boot for all of the backend, i am planning to make the gameserver stuff microservice in the long run so its language may change depending on the performance requirements.

5- Setup the websocket on both frontend and backend.

01/08/2024
Websocket is working for sending and receiving message. However i chickened out on implementing the movement gui, i will send wasd to server, will get back the player position for now. There will be 2 websocket controllers, one for messages, other for movement.

From my understanding topic endpoints are being subscribed by the clients, any data over there will be sent to all of the subscribers. Currently i have only one user so there is not any need for implementing per user system.
