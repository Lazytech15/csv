const firebaseConfig = {
    apiKey: "AIzaSyDFWV4k9-XmABgNGmleyXLTcuEn41rMHK8",
    authDomain: "hackathon-26f12.firebaseapp.com",
    databaseURL: "https://hackathon-26f12-default-rtdb.firebaseio.com",
    projectId: "hackathon-26f12",
    storageBucket: "hackathon-26f12.appspot.com",
    messagingSenderId: "1071789540560",
    appId: "1:1071789540560:web:6227da20f3a3a3a9ab0ad5"
  };
//initialize
  firebase.initializeApp(firebaseConfig);
//reference
  var class_record =  firebase.database().ref('CLASS_RECORD')

  document.getElementById('show_grades').addEventListener("submit", uploadform);


  function uploadform(e){
    e.preventDefault();

    var stdid =  studentid;
    var stdname = studentname;
    var sc = subcode;
    var pm = prelim;
    var mt = midterm;
    var fn = finals;
    
    save_details(stdid,stdname,sc,pm,mt,fn);
    
  }

  const save_details = (stdid,stdname,sc,pm,mt,fn)=>{
    var grades = class_record.push();
    grades.set({
        STUDENT_ID : stdid,
        STUDENT_NAME : stdname,
        STUDENT_SUBCODE : sc,
        STUDENT_PRELIM : pm,
        STUDENT_MIDTERM : mt,
        STUDENT_FINALS : fn,
    });
  } ;

