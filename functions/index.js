const functions = require('firebase-functions');
const express = require('express');
const app1 = express();

app1.get('/myQuestions/:questionid', (req, res) => {
	console.log("TEST");
	res.status(200).send(`<!DOCTYPE html>
<html lang="zh">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>IT LOVE</title>
    <!-- LOADING STYLESHEETS -->
    <link href="../css/bootstrap.css" rel="stylesheet">
    <link href="../css/font-awesome.min.css" rel="stylesheet">
    <link href="../css/style.css" rel="stylesheet">
    <script src="https://www.gstatic.com/firebasejs/5.0.4/firebase.js"></script>
    <script>
    var config = {
        apiKey: "AIzaSyBZUz6V1Mkmwxpe781P8X6ZC7fPTUyiBIg",
        authDomain: "it-love1.firebaseapp.com",
        databaseURL: "https://it-love1.firebaseio.com",
        projectId: "it-love1",
        storageBucket: "it-love1.appspot.com",
        messagingSenderId: "782043275132"
    };
    firebase.initializeApp(config);
    </script>
</head>

<body>
    <div class="container-fluid featured-area-white-border">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <<div class="login-box border-right-1">
                        <a href="../个人信息.html">
                            <i class="fa fa-key"></i> 登陆</a>
                </div>
                <div class="login-box border-left-1 border-right-1">
                    <a href="../email-password.html">
                                <i class="fa fa-pencil"></i> 注册</a>
                </div>
                <div class="login-box border-right-1">
                    <a href="../系统消息.html">
                                    <i class="fa fa-bell"></i> 系统消息</a>
                </div>
            </div>
        </div>
    </div>
    </div>
    <!-- TOP NAVIGATION -->
    <div class="container-fluid">
        <div class="navigation">
            <div class="row">
                <ul class="topnav">
                    <li></li>
                    <li>
                        <a href="../index.html">
                                        <i class="fa fa-home"></i> 首页</a>
                    </li>
                    <li>
                        <a href="../提问.html">
                                            <i class="fa fa-book"></i> 提问</a>
                    </li>
                    <li>
                        <a href="../回答.html">
                                                <i class="fa fa-file-text-o"></i> 回答</a>
                    </li>
                    <li class="icon">
                        <a href="javascript:void(0);" onclick="myFunction()">&#9776;</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- END TOP NAVIGATION -->
    <!-- SEARCH FIELD AREA -->
    <div class="searchfield bg-hed-six">
        <div class="container" style="padding-top: 20px; padding-bottom: 20px;">
            <div class="row text-center margin-bottom-20">
                <h1 class="white"> IT LOVE</h1>
            </div>
            <br>
            <div class="row search-row">
                <input type="text" class="search" placeholder="搜索你感兴趣的内容" id="searchcontent">
                <button onclick="search()">搜索</button>
            </div>
        </div>
    </div>
    <!-- END SEARCH FIELD AREA -->
    <!-- MAIN SECTION -->
    <div class="container featured-area-default padding-30">
        <div class="row">
            <div class="col-md-8 padding-20">
                <div class="row">
                    <!-- BREADCRUMBS -->
                    <div class="breadcrumb-container">
                        <ol class="breadcrumb">
                            <li>
                                <a href="首页.html">
                                                            <i class="fa fa-home"></i>
                                                        </a>
                            </li>
                            <li>
                                <a href="回答.html">回答</a>
                            </li>
                            <li>
                                <a href="single-category.html">General</a>
                            </li>
                            <li class="active">How to change account password?</li>
                        </ol>
                    </div>
                    <!-- END BREADCRUMBS -->
                    <!-- ARTICLE  -->
                    <div id="displayQues"> HI</div>
                    <div id="solutions"></div>
                    <div class="panel panel-default">
                        <div class="article-heading margin-bottom-5">
                            <a href="#">
                                                        <i class="fa fa-pencil-square-o"></i> How to change account password?</a>
                        </div>
                        <div class="article-info">
                            <div class="art-date">
                                <a href="#">
                                                                <i class="fa fa-calendar-o"></i> 20 May, 2016 </a>
                            </div>
                            <div class="art-category">
                                <a href="#">
                                                                    <i class="fa fa-folder"></i> Account Settings </a>
                            </div>
                            <div class="art-comments">
                                <a href="#">
                                                                        <i class="fa fa-comments-o"></i> 4 解决方案 </a>
                            </div>
                        </div>
                        <div class="article-content">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet finibus dui. Fusce ac nulla nec ex ornare vehicula non nec mi. Cras eget nisi sem. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec viverra faucibus magna sed interdum. Phasellus ultrices sagittis molestie. Sed sit amet nisl id risus egestas semper. In porta, arcu eu dignissim vestibulum, sapien justo imperdiet enim, sed facilisis quam justo in neque. Aliquam fermentum arcu eget hendrerit efficitur.
                            </p>
                        </div>
                        <div class="article-content">
                        </div>
                        <hr class="style-three">
                        <div class="article-feedback">
                            <h2>
                                                                        <small>Was This Article Helpful?</small>
                                                                    </h2>
                            <button type="button" class="btn btn-success btn-o btn-wide">
                                <i class="fa fa-thumbs-o-up"></i> Yes</button>
                            <button type="button" class="btn btn-danger btn-o btn-wide">No
                                <i class="fa fa-thumbs-o-down"></i>
                            </button>
                        </div>
                    </div>
                    <!-- END ARTICLE -->
                    <!-- COMMENTS  -->
                    <div class="panel panel-default">
                        <div class="article-heading">
                            <i class="fa fa-comments-o"></i> 解决方案 (4)
                        </div>
                        <!-- FIRST LEVEL COMMENT 1 -->
                        <div class="article-content">
                            <div class="article-comment-top">
                                <div class="comments-user">
                                    <h4> 回答1 </h4>
                                    <img src="images/user.png" alt="gomac user">
                                    <div class="user-name">John Doe</div>
                                    <div class="comment-post-date">Posted On
                                        <span class="italics">20 May, 2016</span>
                                    </div>
                                </div>
                                <div class="comments-content">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in orci velit. Sed sodales diam in massa auctor iaculis. Nunc lacinia vitae nunc vel condimentum. Etiam dignissim pulvinar vulputate. Mauris vitae ex felis. Duis ante mi, faucibus nec sem at, venenatis pretium nibh. Nulla condimentum a risus eu fermentum. Proin dapibus odio ex, vel tempor diam volutpat a. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus fermentum facilisis pellentesque.
                                    </p>
                                    <div class="article-read-more">
                                        <button class="btn btn-default btn-sm">
                                            <i class="fa fa-reply"></i> Reply</button>
                                    </div>
                                </div>
                                <!-- SECOND LEVEL COMMENT -->
                                <div class="article-comment-second">
                                    <div class="comments-user">
                                        <img src="images/user.png" alt="gomac user">
                                        <div class="user-name">Quinn Demma</div>
                                        <div class="comment-post-date">Posted On
                                            <span class="italics">20 May, 2016</span>
                                        </div>
                                    </div>
                                    <div class="comments-content">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in orci velit. Sed sodales diam in massa auctor iaculis. Nunc lacinia vitae nunc vel condimentum. Etiam dignissim pulvinar vulputate. Mauris vitae ex felis. Duis ante mi, faucibus nec sem at, venenatis pretium nibh. Nulla condimentum a risus eu fermentum. Proin dapibus odio ex, vel tempor diam volutpat a. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus fermentum facilisis pellentesque.
                                        </p>
                                    </div>
                                </div>
                                <!-- END SECOND LEVEL COMMENT -->
                            </div>
                        </div>
                        <!-- END FIRST LEVEL COMMENT 1 -->
                    </div>
                    <!-- END COMMENTS -->
                </div>
                <div id="myChart"></div>
                <!-- <div id="piechart" class="text-center"></div> -->
                <div class="panel-transparent">
                    <div class="article-heading">
                        <i class="fa fa-comment-o"></i> 选择你觉得合适的解决方案
                    </div>
                    <form method="post" class="comment-form">
                        <div class="form-row align-items-center">
                            <div class="col-auto my-1" id="add-solutions">
                                <label class="mr-sm-2" for="inlineFormCustomSelect">Preference</label>
                                <select class="custom-select mr-sm-2" id="inlineFormCustomSelect" onchange="scheduleA.call(this,event,this.value)">
                                    <option selected>Choose...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div class="col-auto my-1">
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="form-check col-md-8 padding-20 add-button">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                    <label class="form-check-label" for="defaultCheck1">
                        从公共社区隐藏
                    </label>
                </div>
            </div>
            <!--                 <script type="text/javascript">
                google.charts.load('current', { 'packages': ['corechart'] });
                google.charts.setOnLoadCallback(drawChart);


                function drawChart() {
                    var data = google.visualization.arrayToDataTable([
                        ['回答', '投票总数'],
                        ['回答1', 8],
                        ['回答2', 2],
                        ['回答3', 9],

                    ]);


                    var options = { 'title': '回答意见记录', 'width': 400, 'height': 300 };

                    // Display the chart inside the <div> element with id="piechart"
                    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
                    chart.draw(data, options);
                }
                </script> -->
            <!-- <script type="text/javascript">
                var auth1 = firebase.auth();
                firebase.auth().onAuthStateChanged(function(user){
                    var email1 = ""+user.email;
                    var db = firebase.firestore();
                    var ref1 = db.collection("user").doc(email).collection("Questions").doc("${req.params.questionid}");



                });
            </script> -->
        </div>
        <!-- SIDEBAR STUFF -->
        <div class="col-md-4 padding-20">
            <div class="row margin-top-20">
                <div class="col-md-12">
                    <div class="fb-heading-small">
                        最火的问题
                    </div>
                    <hr class="style-three">
                    <div class="fat-content-small padding-left-10">
                        <ul>
                            <li>
                                <a href="#">
                                        <i class="fa fa-file-text-o"></i> How to change account password?</a>
                            </li>
                            <li>
                                <a href="#">
                                        <i class="fa fa-file-text-o"></i> How to edit order details?</a>
                            </li>
                            <li>
                                <a href="#">
                                        <i class="fa fa-file-text-o"></i> Add new user</a>
                            </li>
                            <li>
                                <a href="#">
                                        <i class="fa fa-file-text-o"></i> Change customer details</a>
                            </li>
                            <li>
                                <a href="#">
                                        <i class="fa fa-file-text-o"></i> Lookup existing customer in order form</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- END SIDEBAR STUFF -->
    </div>
    </div>
    <!-- END MAIN SECTION -->
    <!-- LOADING MAIN JAVASCRIPT -->
    <script src="../js/jquery-2.2.4.min.js"></script>
    <script src="../js/main.js"></script>
    <script src="../js/bootstrap.min.js"></script>
    <script src='https://cdn.rawgit.com/VPenkov/okayNav/master/app/js/jquery.okayNav.js'></script>
    <script type="text/javascript">
    var auth = firebase.auth();
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            //ref = db.collection("user").doc(email).collection("Questions").doc().collection("Images");
            var db = firebase.firestore();
            var email = "" + user.email;
            var ref = db.collection("user").doc(email).collection("Questions").doc("${req.params.questionid}").collection("Answers");
            var ref1 = db.collection("user").doc(email).collection("Questions").doc("${req.params.questionid}");

            ref1.get().then(function(doc) {
                var description1 = doc.data().Description;
                var link1 = doc.data().LinkToImage;
                console.log(link1);
                var public1 = doc.data().Public;
                console.log(public1);
                console.log(description1);
                var time1 = doc.data().Time;
                var child1 = document.createElement("div");
                child1.setAttribute('class', 'comments-user');
                var publicChild = document.createElement("div");
                publicChild.setAttribute('class', 'comment-post-date');
                var desChild1 = document.createElement("div");
                desChild1.setAttribute('class', 'comment-post-date');
                desChild1.innerHTML = "Description: " + description1;
                var dateChild1 = document.createElement("div");
                dateChild1.setAttribute('class', 'comment-post-date');
                dateChild1.innerHTML = "Posted on " + time1;

                var lineChild1 = document.createElement("hr");
                lineChild1.setAttribute('class', 'style-three');
                var father1 = document.createElement("div");
                father1.setAttribute('class', 'article-content');
                var son1 = document.createElement("div");
                son1.setAttribute('class', 'article-comment-top');
                var grandfather1 = document.getElementById("displayQues");
                child1.appendChild(publicChild);
                child1.appendChild(desChild1);
                child1.appendChild(dateChild1);


                ref1.collection("Images").get().then(function(querySnapshot) {
                    querySnapshot.forEach(function(doc) {
                        var link2 = doc.data().URL;
                        console.log(link2);
                        var imageChild = document.createElement("img");
                        imageChild.setAttribute('src', link2);
                        child1.appendChild(imageChild);
                    });
                });

                //imageChild.setAttribute('src','link1');
                son1.appendChild(child1);
                father1.appendChild(son1);
                father1.appendChild(lineChild1);
                grandfather1.appendChild(father1);



            });




            //         ref1.get().then(function(querySnapshot) {
            //         querySnapshot.forEach(function(doc) {

            //         console.log("test111");
            //         console.log( " ==> ", doc.data().Description);
            //         console.log( " link ==> ", doc.data().LinkToImage);
            //         var description = doc.data().Description;
            //         var public = doc.data().Public;
            //         var time = doc.data().Time;

            // var child = document.createElement("div");
            // child.setAttribute('class', 'comments-user');


            // var desChild = document.createElement("div");
            // dateChild.setAttribute('class', 'comment-post-date');
            // dateChild.innerHTML = "Description " + description;
            // var dateChild = document.createElement("div");
            // dateChild.setAttribute('class', 'comment-post-date');
            // dateChild.innerHTML = "Posted on " + time;
            // var contentChild = document.createElement("div");
            // contentChild.setAttribute('class', 'comments-content');
            // contentChild.innerHTML = content;
            // var lineChild = document.createElement("hr");
            // lineChild.setAttribute('class', 'style-three');
            // var father = document.createElement("div");
            // father.setAttribute('class', 'article-content');
            // var son = document.createElement("div");
            // son.setAttribute('class', 'article-comment-top');
            // var grandfather = document.getElementById("displayQues");
            // child.appendChild(nameChild);
            // child.appendChild(dateChild);
            // son.appendChild(child);
            // son.appendChild(contentChild);
            // son.appendChild(likeChild); 
            // father.appendChild(son);
            // father.appendChild(lineChild);
            // grandfather.appendChild(father);


            //     });

            // });
            ref.get().then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {

                    console.log("test111");
                    console.log(" ==> ", doc.data().Approved);
                    var approved = doc.data().Approved;
                    var author = doc.data().Author;
                    var content = doc.data().Content;
                    var likes = doc.data().Likes;
                    var time = doc.data().Time;

                    var child = document.createElement("div");
                    child.setAttribute('class', 'comments-user');


                    var nameChild = document.createElement("div");
                    nameChild.setAttribute('class', 'user-name');
                    nameChild.innerHTML = author;
                    var dateChild = document.createElement("div");
                    dateChild.setAttribute('class', 'comment-post-date');
                    dateChild.innerHTML = "Posted on " + time;
                    var contentChild = document.createElement("div");
                    contentChild.setAttribute('class', 'comments-content');
                    contentChild.innerHTML = content;
                    var likeChild = document.createElement("p");
                    likeChild.innerHTML = "Number of people chose this: " + likes;
                    var lineChild = document.createElement("hr");
                    lineChild.setAttribute('class', 'style-three');
                    var father = document.createElement("div");
                    father.setAttribute('class', 'article-content');
                    var son = document.createElement("div");
                    son.setAttribute('class', 'article-comment-top');
                    var grandfather = document.getElementById("solutions");
                    child.appendChild(nameChild);
                    child.appendChild(dateChild);
                    son.appendChild(child);
                    son.appendChild(contentChild);
                    son.appendChild(likeChild);
                    father.appendChild(son);
                    father.appendChild(lineChild);
                    grandfather.appendChild(father);


                });

            });


        } else {}
    });
    </script>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
    var data;
    var chart;

    // Load the Visualization API and the piechart package.
    google.charts.load('current', { 'packages': ['corechart'] });

    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(drawChart);

    // Callback that creates and populates a data table,
    // instantiates the pie chart, passes in the data and
    // draws it.
    function drawChart() {
        // Create our data table.
        data = new google.visualization.DataTable();
        data.addColumn('string', 'Solutions');
        data.addColumn('number', 'Likes');
        var auth = firebase.auth();
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {

                var db = firebase.firestore();
                var email = "" + user.email;
                //var ref = db.collection("user").doc(email).collection("Questions").doc("${req.params.questionid}").collection("Answers");
                var ref2 = db.collection("user").doc(email).collection("Questions").doc("${req.params.questionid}");
                ref2.get().then(function(doc) {
                    ref2.collection("Answers").get().then(function(querySnapshot) {
                        querySnapshot.forEach(function(doc) {
                            console.log(typeof(doc.data()["Name"]));
                            console.log(typeof(doc.data()["Likes"]));
                            data.addRow([doc.data()["Name"], doc.data()["Likes"]]);
                        });
                        var options = {
                            'title': 'How many likes each solution has?',
                            'width': 400,
                            'height': 300
                        };

                        // Instantiate and draw our chart, passing in some options.
                        chart = new google.visualization.BarChart(document.getElementById('myChart'));
                        google.visualization.events.addListener(chart, 'select', selectHandler);
                        chart.draw(data, options);
                    });
                });
            } else {}
        });

        //         ''+

        // data.addRows([          
        //   ['Mushrooms', 3],
        //   ['Onions', 1],
        //   ['Olives', 1],
        //   ['Zucchini', 1],
        //   ['Pepperoni', 2]
        // ]);

        // Set chart options

    }

    function selectHandler() {
        var selectedItem = chart.getSelection()[0];
        var value = data.getValue(selectedItem.row, 0);
        alert('The user selected ' + value);
    }
    </script>
    <script>
    function search() {
        var content = "" + document.getElementById("searchcontent").value;
        console.log(content);
        window.open('https://it-love1.firebaseapp.com/search/' + content, "_self");
    }
    </script>
</body>

</html>`

		);
});
exports.singleQues = functions.https.onRequest(app1);
// exports.bigben = functions.https.onRequest((req, res) => {
//   const hours = (new Date().getHours() % 12) + 1 // london is UTC + 1hr;
//   res.status(200).send(`<!doctype html>
//     <head>
//       <title>Time</title>
//     </head>
//     <body>
//       ${'BONG '.repeat(hours)}
//     </body>
//   </html>`);
// });
// const express = require('express');
// const app = express();
// const cors = require('cors');
// app.get('/', (req, res) => {
//   res.send(`Root page`);
// });

// app.get('/second', (req, res) => {
//   res.send(`Sub function`);
// });

// app.get('/hello/:name', (req, res) => {
//   res.send(`Hello ${req.params.name}`);
// });

// // We name this function "route", which you can see is 
// // still surfaced in the HTTP URLs below.
// exports.route = functions.https.onRequest(app);














const app = express();


app.get('/questions/:questionid', (req, res) => {
  console.log("TEST2");
  res.status(200).send(`<!DOCTYPE html>
<html lang="zh">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>IT LOVE</title>
    <!-- LOADING STYLESHEETS -->
    <link href="../css/bootstrap.css" rel="stylesheet">
    <link href="../css/font-awesome.min.css" rel="stylesheet">
    <link href="../css/style.css" rel="stylesheet">
    <script src="https://www.gstatic.com/firebasejs/5.0.3/firebase.js"></script>
    <script>
    var config = {
        apiKey: "AIzaSyBZUz6V1Mkmwxpe781P8X6ZC7fPTUyiBIg",
        authDomain: "it-love1.firebaseapp.com",
        databaseURL: "https://it-love1.firebaseio.com",
        projectId: "it-love1",
        storageBucket: "it-love1.appspot.com",
        messagingSenderId: "782043275132"
    };
    firebase.initializeApp(config);
    </script>
    <script>
    var db = firebase.firestore();
    var ref = db.collection("Questions").doc("${req.params.questionid}");
    ref.get().then(function(doc) {
        var dic = doc.data()
        if (doc.exists) {
            var author = dic["Author"];
            var desc = dic["Description"];
            var link = dic["LinkToImage"];
            var public = dic["Public"];
            var time = dic["Time"];
            var number = dic["NumberOfAnswers"];
            //set HTML
            var numberChild = document.getElementById("numberOfA");
            numberChild.innerHTML = number + " 备选方案";
            var descChild = document.getElementById("main-content");
            descChild.innerHTML = desc;
            var timeChild = document.getElementById("date");
            timeChild.innerHTML = time;
        } else {
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
    // add answers
    ref.collection("Answers").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc1) {
            var dic1 = doc1.data();
            var author1 = dic1["Author"];
            var content = dic1["Content"];
            var likes = dic1["Likes"];
            var approve = dic1["Approved"];
            var date = dic1["Time"];
            // write html
            var userChild = document.createElement("div");
            userChild.setAttribute('class', 'comments-user');
            var imageChild = document.createElement("img");
            imageChild.setAttribute('src', '../images/user.png');
            imageChild.setAttribute('alt', 'anonymous');
            var nameChild = document.createElement("div");
            nameChild.setAttribute('class', 'user-name');
            nameChild.innerHTML = author1;
            var dateChild = document.createElement("div");
            dateChild.setAttribute('class', 'comment-post-date');
            dateChild.innerHTML = "Posted on " + date;
            var contentChild = document.createElement("div");
            contentChild.setAttribute('class', 'comments-content');
            contentChild.innerHTML = content;
            var likeChild = document.createElement("p");
            likeChild.innerHTML = "Number of people chose this: " + likes;
            var lineChild = document.createElement("hr");
            lineChild.setAttribute('class', 'style-three');
            var father = document.createElement("div");
            father.setAttribute('class', 'article-content');
            var son = document.createElement("div");
            son.setAttribute('class', 'article-comment-top');
            var grandfather = document.getElementById("solutions");
            userChild.appendChild(imageChild);
            userChild.appendChild(nameChild);
            userChild.appendChild(dateChild);
            son.appendChild(userChild);
            son.appendChild(contentChild);
            son.appendChild(likeChild);
            son.onclick = function() {
                firebase.auth().onAuthStateChanged(function(user) {
                    if (user) {
                        var email = "" + user.email;
                        //current answer in question
                        var detailedRef = db.collection("Questions").doc("${req.params.questionid}").collection("Answers").doc(doc1.id);
                        //current answer in user
                        var otherRef = db.collection("user").doc(email).collection("Answers").doc(doc1.id);
                        otherRef.get().then(function(doc3) {
                            if (!doc3.exists) {
                                otherRef.set({
                                        type: "choose"
                                    }).then(function() {
                                        console.log("Document successfully written!");
                                    })
                                    .catch(function(error) {
                                        console.error("Error writing document: ", error);
                                    });
                                detailedRef.get().then(function(doc2) {
                                    var newLike = doc2.data()["Likes"] + 1;
                                    return detailedRef.update({
                                            Likes: newLike
                                        })
                                        .then(function() {
                                            console.log("Document successfully updated!");
                                        })
                                        .catch(function(error) {
                                            // The document probably doesn't exist.
                                            console.error("Error updating document: ", error);
                                        });
                                    likeChild.innerHTML = "Number of people chose this: " + newLike;
                                });
                            } else {
                                otherRef.delete().then(function() {
                                    console.log("Document successfully deleted!");
                                }).catch(function(error) {
                                    console.error("Error removing document: ", error);
                                });
                                detailedRef.get().then(function(doc2) {
                                    var newLike = doc2.data()["Likes"] - 1;
                                    console.log("test" + newLike);
                                    return detailedRef.update({
                                            Likes: newLike
                                        })
                                        .then(function() {
                                            console.log("Document successfully updated!");
                                        })
                                        .catch(function(error) {
                                            // The document probably doesn't exist.
                                            console.error("Error updating document: ", error);
                                        });
                                    console.log("test2" + newLike);
                                    likeChild.innerHTML = "Number of people chose this: " + doc2.data()["Likes"];
                                });
                            }
                        });
                        console.log("test3");
                        likeChild.innerHTML = "Number of people chose this: " + detailedRef.data()["Likes"];
                        // User is signed in.
                    } else {
                        // No user is signed in.
                        window.open('https://it-love1.firebaseapp.com/email-password.html');
                    }

                });
            }
            father.appendChild(son);
            father.appendChild(lineChild);
            grandfather.appendChild(father);

        });
    });
    //<hr class="style-three">
    //                 <!-- FIRST LEVEL COMMENT 1 -->
    // <div class="article-content">
    //     <div class="article-comment-top">
    //         <div class="comments-user">
    //             <img src="images/user.png" alt="gomac user">
    //             <div class="user-name">John Doe</div>
    //             <div class="comment-post-date">Posted On
    //                 <span class="italics">20 May, 2016</span>
    //             </div>
    //         </div>
    //         <div class="comments-content">
    //             <p>
    //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in orci velit. Sed sodales diam in massa auctor iaculis. Nunc
    //                 lacinia vitae nunc vel condimentum. Etiam dignissim pulvinar vulputate. Mauris vitae
    //                 ex felis. Duis ante mi, faucibus nec sem at, venenatis pretium nibh. Nulla condimentum
    //                 a risus eu fermentum. Proin dapibus odio ex, vel tempor diam volutpat a. Class aptent
    //                 taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus
    //                 fermentum facilisis pellentesque.
    //             </p>
    //             <div class="article-read-more">
    //                 <button class="btn btn-default btn-sm">
    //                     <i class="fa fa-reply"></i> Reply</button>
    //             </div>
    //         </div>
    //         <!-- END SECOND LEVEL COMMENT -->
    //     </div>
    // </div>
    // <!-- END FIRST LEVEL COMMENT 1 -->
    //         function vote(option){
    //             var detailedRef = ref.collection("Answers").doc(option);
    //             // var likesChild;
    //             // detailedRef.get().then(function(doc){
    //             //     var dic = doc.data();
    //             //     likesChild = dic["Likes"];
    //             //     console.log("test ");
    //             //     console.log(likesChild);
    //             // }
    //             // detailedRef.update({
    //             //     capital: true
    //             // })
    //             // .then(function() {
    //             //     console.log("Document successfully updated!");
    //             // })
    //             // .catch(function(error) {
    //             // // The document probably doesn't exist.
    //             // console.error("Error updating document: ", error);
    //             // });
    //             // }
    //     ref.runTransaction(function(transaction) {
    //     // This code may get re-run multiple times if there are conflicts.
    //     return transaction.get(detailedRef).then(function(detailedRef) {
    //         if (!detailedRef.exists) {
    //             throw "Document does not exist!";
    //         }
    //         var newLike = detailedRef.data()["Likes"] + 1;
    //         console.log(newLike);
    //         transaction.update(detailedRef, { Likes: newLike });
    //     });
    // }).then(function() {
    //     console.log("Transaction successfully committed!");
    // }).catch(function(error) {
    //     console.log("Transaction failed: ", error);
    // });
    // }
    </script>
</head>

<body>
    <div class="container-fluid featured-area-white-border">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="login-box border-right-1">
                        <a href="../个人信息.html">
                            <i class="fa fa-key"></i> 登陆</a>
                    </div>
                    <div class="login-box border-left-1 border-right-1">
                        <a href="../email-password.html">
                                <i class="fa fa-pencil"></i> 注册</a>
                    </div>
                    <div class="login-box border-right-1">
                        <a href="../系统消息.html">
                                    <i class="fa fa-bell"></i> 系统消息</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- TOP NAVIGATION -->
    <div class="container-fluid">
        <div class="navigation">
            <div class="row">
                <ul class="topnav">
                    <li></li>
                    <li>
                        <a href="../index.html">
                                        <i class="fa fa-home"></i> 首页</a>
                    </li>
                    <li>
                        <a href="../提问.html">
                                            <i class="fa fa-book"></i> 提问</a>
                    </li>
                    <li>
                        <a href="../回答.html">
                                                <i class="fa fa-file-text-o"></i> 回答</a>
                    </li>
                    <li class="icon">
                        <a href="javascript:void(0);" onclick="myFunction()">&#9776;</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- END TOP NAVIGATION -->
    <!-- SEARCH FIELD AREA -->
    <div class="searchfield bg-hed-six">
        <div class="container" style="padding-top: 20px; padding-bottom: 20px;">
            <div class="row text-center margin-bottom-20">
                <h1 class="white"> IT LOVE</h1>
            </div>
            <br>
            <div class="row search-row">
                <input type="text" class="search" placeholder="搜索你感兴趣的内容" id="searchcontent">
                <button onclick="search()">搜索</button>
            </div>
        </div>
    </div>
    <!-- END SEARCH FIELD AREA -->
    <!-- MAIN SECTION -->
    <div class="container featured-area-default padding-30">
        <div class="row">
            <div class="col-md-8 padding-20">
                <div class="row">
                    <!-- BREADCRUMBS -->
                    <div class="breadcrumb-container">
                        <ol class="breadcrumb">
                            <li>
                                <a href="../index.html">
                                                            <i class="fa fa-home"></i>
                                                        </a>
                            </li>
                            <li>
                                <a href="../回答.html">回答</a>
                            </li>
                        </ol>
                    </div>
                    <!-- END BREADCRUMBS -->
                    <!-- ARTICLE  -->
                    <div class="panel panel-default">
                        <!--                         <div class="article-heading margin-bottom-5">
                                <a href="#">
                                <i class="fa fa-pencil-square-o"></i> How to change account password?</a>
                            </div> -->
                        <div class="article-info">
                            <div class="art-date">
                                <i class="fa fa-calendar-o"></i>
                                <div id="date"> </div>
                            </div>
                            <div class="art-comments">
                                <i class="fa fa-comments-o"></i>
                                <div id="numberOfA"></div>
                            </div>
                        </div>
                        <div class="article-content" id="main-content">
                        </div>
                        <div class="article-content">
                        </div>
                    </div>
                    <!-- END ARTICLE -->
                    <!-- COMMENTS  -->
                    <div class="panel panel-default">
                        <div class="article-heading">
                            <i class="fa fa-comments-o"></i>
                            <div id="numberOfA"></div>
                        </div>
                        <div id="solutions">
                        </div>
                        <!-- Previous Rate Part -->
                        <!--                             <div class="panel-transparent">
                                <div class="article-heading">
                                    <i class="fa fa-comment-o"></i> 留下你的意见
                                </div>
                                <form method="post" class="comment-form" >
                                    <div class="form-row align-items-center">
                                        <div class="col-auto my-1" id="add-solutions">
                                            <label class="mr-sm-2" for="inlineFormCustomSelect">Preference</label>
                                            <select class="custom-select mr-sm-2" id="inlineFormCustomSelect" onchange="scheduleA.call(this,event,this.value)">
                                                <option selected>Choose...</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                                <option value="4">Other</option>
                                            </select>
                                        </div>
                                        <div class="col-auto my-1">
                                            <button type="submit" class="btn btn-primary">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div> -->
                        <!-- END LEAVE A REPLY SECTION -->
                    </div>
                    <!-- END COMMENTS -->
                </div>
            </div>
            <!-- SIDEBAR STUFF -->
            <div class="col-md-4 padding-20">
                <div class="row margin-top-20">
                    <div class="col-md-12">
                        <div class="fb-heading-small">
                            最火的问题
                        </div>
                        <hr class="style-three">
                        <div class="fat-content-small padding-left-10">
                            <ul>
                                <li>
                                    <a href="#">
                                        <i class="fa fa-file-text-o"></i> How to change account password?</a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fa fa-file-text-o"></i> How to edit order details?</a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fa fa-file-text-o"></i> Add new user</a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fa fa-file-text-o"></i> Change customer details</a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fa fa-file-text-o"></i> Lookup existing customer in order form</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- END SIDEBAR STUFF -->
        </div>
    </div>
    <!-- END MAIN SECTION -->
    <!-- LOADING MAIN JAVASCRIPT -->
    <script src="../js/jquery-2.2.4.min.js"></script>
    <script src="../js/main.js"></script>
    <script src="../js/bootstrap.min.js"></script>
    <script src='https://cdn.rawgit.com/VPenkov/okayNav/master/app/js/jquery.okayNav.js'></script>
    <script>
    function search() {
        var content = "" + document.getElementById("searchcontent").value;
        console.log(content);
        window.open('https://it-love1.firebaseapp.com/search/' + content, "_self");
    }
    </script>
</body>

</html>`);
});
exports.single = functions.https.onRequest(app);



const app2 = express();
app2.get('/search/:searchcontent', (req, res) => {
    console.log("TEST");
    res.status(200).send(`<!DOCTYPE html>
<html lang="zh">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>IT LOVE回答</title>
    <!-- LOADING STYLESHEETS -->
    <link href="../css/bootstrap.css" rel="stylesheet">
    <link href="../css/font-awesome.min.css" rel="stylesheet">
    <link href="../css/style.css" rel="stylesheet">
    <script src="https://www.gstatic.com/firebasejs/5.0.3/firebase.js"></script>
    <script>
    var config = {
        apiKey: "AIzaSyBZUz6V1Mkmwxpe781P8X6ZC7fPTUyiBIg",
        authDomain: "it-love1.firebaseapp.com",
        databaseURL: "https://it-love1.firebaseio.com",
        projectId: "it-love1",
        storageBucket: "it-love1.appspot.com",
        messagingSenderId: "782043275132"
    };
    firebase.initializeApp(config);
    </script>
    <script>
    function check(des, string) {
        var index = 0;
        var changingstring;
        for (var i = 0; i < string.length; i++) {
            for (var k = 0; k <= i; k++) {
                changingstring = string.substring(k, k + string.length - i);
                //if(des.includes(changingstring)) index ++;
                for (var j = 0; j <= des.length - changingstring.length; j++) {
                    if (des.substring(j, j + changingstring.length) == changingstring) index++;
                }
            }

        }
        return index;


    }

    var db = firebase.firestore();
    var ref = db.collection("Questions");
    ref.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {

            console.log("test" + doc.id);
            // doc.data() is never undefined for query doc snapshots

            //console.log(doc.id, " => ", doc.data());
            var dic = doc.data();

            var desc = dic["Description"];

            return ref.doc(doc.id).update({ index: check(desc, "${req.params.searchcontent}") });
        });
    });

    var newRef = ref.where("index", ">", 0).orderBy("index");
    newRef.get().then(function(querySnapshot3) {
        querySnapshot3.forEach(function(doc) {
            var dic = doc.data();
            //console.log(author["Author"]);
            var author = dic["Author"];
            var desc = dic["Description"];
            var link = dic["LinkToImage"];
            var public = dic["Public"];
            var time = dic["Time"];


            var ahref = document.createElement("a");
            ahref.setAttribute('href', 'https://it-love1.firebaseapp.com/questions/' + doc.id);
            var father = document.createElement("div");
            father.setAttribute('class', 'panel panel-default');
            var authorChild = document.createElement("p");
            authorChild.innerHTML = author;
            var descChild = document.createElement("div");
            descChild.innerHTML = desc;
            descChild.setAttribute('class', 'article-content');
            var timeChild = document.createElement("div");
            timeChild.innerHTML = time;
            timeChild.setAttribute('class', 'art-date');
            father.appendChild(authorChild);
            father.appendChild(descChild);
            father.appendChild(timeChild);
            ahref.appendChild(father);

            var grandfather = document.getElementById("allQ");
            grandfather.appendChild(ahref);
        });
    });

    //if(dic["Description"].includes("${req.params.searchcontent}")){

    //add html

    //} 

    // <div class="panel panel-default">
    //                         <div class="article-heading-abb">
    //                             <a href="单个回答.html">
    //                                 <i class="fa fa-pencil-square-o"></i> How to change account password?</a>
    //                         </div>
    //                         <div class="article-info">
    //                             <div class="art-date">
    //                                 <a href="#">
    //                                     <i class="fa fa-calendar-o"></i> 20 May, 2016 </a>
    //                             </div>
    //                             <div class="art-category">
    //                                 <a href="#">
    //                                     <i class="fa fa-folder"></i> Account Settings </a>
    //                             </div>
    //                             <div class="art-comments">
    //                                 <a href="#">
    //                                     <i class="fa fa-comments-o"></i> 4 Comments </a>
    //                             </div>
    //                         </div>
    //                         <div class="article-content">
    //                             <p class="block-with-text">
    //                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet finibus dui. Fusce ac nulla nec ex ornare vehicula
    //                                 non nec mi. Cras eget nisi sem. Cum sociis natoque penatibus et magnis dis parturient montes,
    //                                 nascetur ridiculus mus. Donec viverra faucibus magna sed interdum. Phasellus ultrices sagittis
    //                                 molestie. Sed sit amet nisl id risus egestas semper. In porta, arcu eu dignissim vestibulum,
    //                                 sapien justo imperdiet enim, sed facilisis quam justo in neque. Aliquam fermentum arcu eget
    //                                 hendrerit efficitur.
    //                             </p>
    //                         </div>
    //                         <div class="article-read-more">
    //                             <a href="单个回答.html" class="btn btn-default btn-wide">Read more...</a>
    //                         </div>
    //                     </div>

    //add answers
    // var answers = dic["Answers"].get().then(function(querySnapshot1){
    //     querySnapshot1.forEach(function(doc1){
    //         var dic1 = doc1.data();
    //         var author1 = dic1["Author"];
    //         var content = dic1["Content"];
    //         var likes = dic1["Likes"];
    //         var approve = dic1["Approved"];
    //     });
    // });
    </script>
</head>

<body>
    <div class="container-fluid featured-area-white-border">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="login-box border-right-1">
                        <a href="个人信息.html">
                            <i class="fa fa-key"></i> 登陆</a>
                    </div>
                    <div class="login-box border-left-1 border-right-1">
                        <a href="email-password.html">
                            <i class="fa fa-pencil"></i> 注册</a>
                    </div>
                    <div class="login-box border-right-1">
                        <a href="系统消息.html">
                            <i class="fa fa-bell"></i> 系统消息</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- TOP NAVIGATION -->
    <div class="container-fluid">
        <div class="navigation">
            <div class="row">
                <ul class="topnav">
                    <li></li>
                    <li>
                        <a href="index.html">
                            <i class="fa fa-home"></i> 首页</a>
                    </li>
                    <li>
                        <a href="提问.html">
                            <i class="fa fa-book"></i> 提问</a>
                    </li>
                    <li>
                        <a href="回答.html">
                            <i class="fa fa-file-text-o"></i> 回答</a>
                    </li>
                    <li class="icon">
                        <a href="javascript:void(0);" onclick="myFunction()">&#9776;</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- END TOP NAVIGATION -->
    <!-- SEARCH FIELD AREA -->
    <div class="searchfield bg-hed-six">
        <div class="container" style="padding-top: 20px; padding-bottom: 20px;">
            <div class="row text-center margin-bottom-20">
                <h1 class="white"> IT LOVE</h1>
            </div>
            <br>
            <div class="row search-row">
                <input type="text" class="search" placeholder="搜索你感兴趣的内容" id="searchcontent">
                <button onclick="search()">搜索</button>
            </div>
        </div>
    </div>
    <!-- END SEARCH FIELD AREA -->
    <!-- MAIN SECTION -->
    <div class="container featured-area-default padding-30">
        <div class="row">
            <!-- ARTICLE OVERVIEW SECTION -->
            <div class="col-md-8 padding-20">
                <div class="row">
                    <!-- BREADCRUMBS -->
                    <div class="breadcrumb-container">
                        <ol class="breadcrumb">
                            <li>
                                <a href="index.html">
                                    <i class="fa fa-home"></i>
                                </a>
                            </li>
                            <li class="active"> 所有问题</li>
                        </ol>
                        <div class="sort">
                            <a href=# class="btn btn-default btn-wide"> 升序</a>
                            <a href=# class="btn btn-default btn-wide"> 降序</a>
                        </div>
                    </div>
                    <!-- END BREADCRUMBS -->
                    <!-- ARTICLES -->
                    <div id="allQ">
                        <div class="fb-heading">
                            所有问题
                        </div>
                        <hr class="style-three">
                        <div class="panel panel-default">
                            <div class="article-heading-abb">
                                <a href="单个回答.html">
                                <i class="fa fa-pencil-square-o"></i> How to change account password?</a>
                            </div>
                            <div class="article-info">
                                <div class="art-date">
                                    <a href="#">
                                    <i class="fa fa-calendar-o"></i> 20 May, 2016 </a>
                                </div>
                                <div class="art-category">
                                    <a href="#">
                                    <i class="fa fa-folder"></i> Account Settings </a>
                                </div>
                                <div class="art-comments">
                                    <a href="#">
                                    <i class="fa fa-comments-o"></i> 4 Comments </a>
                                </div>
                            </div>
                            <div class="article-content">
                                <p class="block-with-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet finibus dui. Fusce ac nulla nec ex ornare vehicula non nec mi. Cras eget nisi sem. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec viverra faucibus magna sed interdum. Phasellus ultrices sagittis molestie. Sed sit amet nisl id risus egestas semper. In porta, arcu eu dignissim vestibulum, sapien justo imperdiet enim, sed facilisis quam justo in neque. Aliquam fermentum arcu eget hendrerit efficitur.
                                </p>
                            </div>
                            <div class="article-read-more">
                                <a href="单个回答.html" class="btn btn-default btn-wide">Read more...</a>
                            </div>
                        </div>
                    </div>
                    <!-- PAGINATION -->
                    <nav class="text-center">
                        <ul class="pagination">
                            <li class="disabled">
                                <a href="#" aria-label="Previous">
                                    <span aria-hidden="true">
                                        <i class="fa fa-arrow-circle-left"></i> 上一页</span>
                                </a>
                            </li>
                            <li class="active">
                                <a href="#">1
                                    <span class="sr-only">(current)</span>
                                </a>
                            </li>
                            <li class="enabled">
                                <a href="#">2
                                    <span class="sr-only">(current)</span>
                                </a>
                            </li>
                            <li class="enabled">
                                <a href="#">3
                                    <span class="sr-only">(current)</span>
                                </a>
                            </li>
                            <li class="enabled">
                                <a href="#" aria-label="Previous">
                                    <span aria-hidden="true">下一页
                                        <i class="fa fa-arrow-circle-right"></i>
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <!-- END PAGINATION -->
                </div>
            </div>
            <!-- END ARTICLES OVERVIEW SECTION-->
            <!-- SIDEBAR STUFF -->
            <div class="col-md-4 padding-20">
                <div class="row margin-top-20">
                    <div class="col-md-12">
                        <div class="fb-heading-small">
                            最火的问题
                        </div>
                        <hr class="style-three">
                        <div class="fat-content-small padding-left-10">
                            <ul>
                                <li>
                                    <a href="#">
                                        <i class="fa fa-file-text-o"></i> How to change account password?</a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fa fa-file-text-o"></i> How to edit order details?</a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fa fa-file-text-o"></i> Add new user</a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fa fa-file-text-o"></i> Change customer details</a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i class="fa fa-file-text-o"></i> Lookup existing customer in order form</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- END SIDEBAR STUFF -->
        </div>
    </div>
    <!-- END MAIN SECTION -->
    <!-- LOADING MAIN JAVASCRIPT -->
    <script src="../js/jquery-2.2.4.min.js"></script>
    <script src="../js/main.js"></script>
    <script src="../js/bootstrap.min.js"></script>
    <script src='https://cdn.rawgit.com/VPenkov/okayNav/master/app/js/jquery.okayNav.js'></script>
    <script>
    function search() {
        var content = "" + document.getElementById("searchcontent").value;
        console.log(content);
        window.open('https://it-love1.firebaseapp.com/search/' + content, "_self");
    }
    </script>
</body>

</html>`);});
exports.search = functions.https.onRequest(app2);