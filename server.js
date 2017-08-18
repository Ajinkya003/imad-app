var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    Biography: {
         title: ' Biography | Ajinkya Mohod',
         heading: 'About Me',
         date: 'DOB: Jun 14, 1996.',
         content: ` <p>
                    I am Ajinkya Mohod, I belong from Nagpur city, Maharashtra State.
                <p>
                    I am pursuing my graduation Bachelor of Engineering(B.E) in Computer Engineering from Sinhgad Institute of Technology, Pune.
                    And I'm searching for an ideal platform to enhance my skills.
                </p>
                <p>
                    Coming on my strength, I am self-motivated, Hardworking & have ability to work with people of all types and background.
                </p>
                 <p>
                    I'm a good observer, quick learner and a good team member
                </p>
                <p>
                    Well coming on my weaknesses, I am Argumentative, Stick to my viewpoint and don't feel comfortable until I finish my work given within a stipulated time period.
                </p>
                <p>
                    Coming to my family background, my father is a Teacher and my mother is a house wife.
                </p>        
                <p>
                    We are two siblings including me, my younger brother Shubham.
                </p>
                <p>
                    I have a couple of hobbies, reading, exploring, travelling, listening to music and playing football.
                </p>`
    },
    Education: {
        title: 'Education | Ajinkya Mohod',
        heading: 'Education',
        date: '',
        content: `<p>
                  Bachelor of Engineering (B.E), Computer Science & Engineering (2014 - 2018)
                  Sinhgad Institute of Technology, Lonavala, Pune.
                  Percentage: 55.20%
                </p>
                <p>
                XII (Senior Secondary), Science
                Year of Completion: 2014
                STATE BOARD OF MAHARASHTRA. Board (Major Hemant Jakate
                College, Nagpur)
                Percentage: 66.00%
                </p>
                <p>
                X (Secondary)
                Year of Completion: 2012
                CBSE Board (Montfort School (CBSE), Nagpur)
                CGPA: 8.60/10
                </p>`
    },
};    
function createTemplate (data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
var htmlTemplate = `
    <html>
    
    <head>
        
        <title>
           ${title}
        </title>
        <meta name="viewport" content="width=device-width, inital-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
            <div>
                <a href="/">Home</a>
                <a href="/Education">Education</a>
            </div>
            <hr/>
            <h1>
                ${heading}
            </h1>
            <div>
                ${date};
            </div>
            <div>
                ${content};
            </div>
        </div>    
    </body>
    </html>
    `;
    return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articles', function(req, res) {
     res.send(createTemplate(articles[Biography]));
});

app.get('/:articles', function(req, res) {
     res.send(createTemplate(arrticles[Education]));
});

/*app.get('/Education', function(req, res) {
     res.sendFile(path.join(__dirname, 'ui', 'Education.html'));
});*/

app.get('/article-three', function(req, res) {
    res.send('Article-three will be applied here');
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
