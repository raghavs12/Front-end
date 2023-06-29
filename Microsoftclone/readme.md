So this is a TailWind CSS project, I have made a Microsoft Clone Website which is responsive . <br><br>
Node module folder is zipped, download the folder and then unzip it first.<br><br>
You an preview the website on https://microsoftclone4.netlify.app/ or you can open index.html file and write npm start on terminal.<br><br>
First of all setup your tailwind css in your project using this ![Screenshot (49)](https://github.com/raghavs12/Front-end/assets/135123792/0f3cc3e9-4b25-439d-9801-4f98da6c6cc1)
Then for production , follow these steps:-<br><br>
1)In package.json, In Scripts , after start write "build" : "vite build".<br><br>
2)If there is an error regarding style.css then in index.html file, where we linked html file with css file, use href = "/style.css"><br><br>
3) In terminal write npm run build<br><br>
4) Now 'dist' folder is for production, use this folder & open it with live server.<br><br>
