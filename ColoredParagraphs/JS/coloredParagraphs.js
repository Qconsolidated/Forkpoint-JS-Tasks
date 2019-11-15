var test = document.createElement('style');
test.innerHTML = '#content p:nth-child(2n) {' + 'background-color: green;' + '}'
					+ '#content p:nth-child(2n+1){ ' + 'color:red;' + '}';

var ref = document.querySelector('script');

ref.parentNode.insertBefore(test, ref);

/* Make this work instead
function colorParag()
{
	var even = 	document.querySelectorAll("#content div:nth-child(2n)");
	var odd = document.querySelectorAll("#content div:nth-child(odd)");
	var evenLength = even.length;
	var oddLength = odd.length;

	for (var i = 0; i < even.length; i++)
	{
	 	even[i].style.backgroundColor = "green";
	}

	for (var j = 0; j < odd.length; j++)
	{
	 	odd[j].style.color = "green";
	}
}

colorParag();
*/
