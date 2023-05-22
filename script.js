function getFormvalue() {
    //Write your code here
    let ele1 =document.getElementsByTagName("input")[0]
	let ele2 = document.getElementsByTagName("input")[1]

	alert(`Firstname: ${ele1.value} Lastname: ${ele2.value}`);
	
}
