
function findMedian()
{
	var array = document.getElementById('input').value.split(",");

	var mid = Math.floor(array.length / 2);

	if (array.length % 2 !== 0) document.write("The median is at index " + mid);
	else document.write("The median is at index " + Math.floor((mid-1+mid) / 2));
}

//document.write("The median is the number at index " + findMedian() +".");

