
function colorParag()
{
	var even = document.querySelectorAll('#content > p:nth-child(even)');
	var odd = document.querySelectorAll('#content > p:nth-child(odd)');
	

	for (var i = 0; i < even.length; i++)
	{
	 	even[i].style.backgroundColor = 'green';
	}

	for (var j = 0; j < odd.length; j++)
	{
	 	odd[j].style.color = 'red';
	}
}

colorParag();

