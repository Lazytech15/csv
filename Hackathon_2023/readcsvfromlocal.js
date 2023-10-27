var studentid=[];
var studentname=[];
var subcode=[];
var prelim=[];
var midterm=[];
var finals=[];

const uploadconfirm = document.getElementById('uploadcofirm').addEventListener('click', ( )=>{
    Papa.parse(document.getElementById('UploadFile').files[0],
    {
        download: true,
        header: true,
        skipEmptyLines: true,
        complete: function(results){
            //console.log(results);
            //var id = results.data[0].studentname;
            //console.log(id);

            for (i=0; i<results.data.length; i++){
                studentid.push(results.data[i].studentid);
                studentname.push(results.data[i].studentname);
                subcode.push(results.data[i].subcode);
                prelim.push(results.data[i].prelim);
                midterm.push(results.data[i].midterm);
                finals.push(results.data[i].finals);
            }
        }
    });
});