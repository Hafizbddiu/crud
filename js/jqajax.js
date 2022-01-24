$(document).ready(function(){
//retrive data
function showdata(){
    output=" ";
    $.ajax({
        url:"retrive.php",
        method:"GET",
        dataType:"json",
        success:function(data){
            // console.log(data);
            if(data){
                x=data;
            }else{
                x='';
            }
            for(i=0;i<x.length;i++){
                output+="<tr><td>"+x[i].id+"</td><td>"+x[i].name+"</td><td>"+x[i].email+"</td><td>"+x[i].password+"</td><td><button class='btn btn-warning btn-sm btn-edit'>Edit</button> <button class='btn btn-danger btn-sm btn-del'data-sid=" + x[i].id+">Delete</button></td></tr>";
            }
            $("#tbody").html(output);
        }
    })

}
showdata();

//Ajax request for insert data
$("#btnAdd").click(function(e){
e.preventDefault();
console.log("save button clicked");
let name=$("#nameId").val();
let email=$("#emailId").val();
let password=$("#passwordId").val();
// console.log(name);
// console.log(email);
// console.log(password);
myData={name:name,email:email,password:password};
console.log(myData);

$.ajax({
    url:"insert.php",
    method:"POST",
    data:JSON.stringify(myData),
    success:function(data){
        // console.log(data);
        msg="<div class='alert alert-info mt-3'>" + data + "</div>";
        $("#msg").html(msg);
        $("#myForm")[0].reset();
        showdata();
    },
})

})

$("tbody").on("click",".btn-del",function(){
    console.log("delete button click")
    let id=$(this).attr("data-sid");
    // console.log(id);
    myData={sid: id};
    $.ajax({
        url:"delete.php",
        meyhod:"POST",
        data:JSON.stringify(myData),
        success:function(data){
            console.log(data);
        }
    })
})
})