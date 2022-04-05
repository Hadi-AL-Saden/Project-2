let Name=document.getElementById("Name");
function GetDataFromLocalStorage(){
    let storageData=localStorage.getItem('formData');
    let parsData=JSON.parse(storageData);
    getName(parsData);

}
GetDataFromLocalStorage();


function getName(parsData){
    console.log(parsData[0].fname);
    parsData.map(function(i){

        Name.innerHTML=`${i.fname}`;
    })

}

