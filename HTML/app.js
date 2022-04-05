let Name=document.getElementById("Name")
function GetDataFromLocalStorage(){
    let storageData=localStorage.getItem('formData');
    let parsData=JSON.parse(storageData);
    getName(parsData);
}
getName(parsData);
function getName(parsData){
Name.innerHTML=`${parsData[0].fname}`
}