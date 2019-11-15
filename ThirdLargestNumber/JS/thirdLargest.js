function nthLargest()
{
	var x = 0,
		y = 0,
		z = 0,
		temp = 0,
		nth_largest = 3; 
		flag = false, 
		result = false; 
   
    var numbers = document.getElementById('input').value.split(",");

    if (numbers.length === 0)
    {
    	document.write("No numbers in the array.");	
    } 
    else if (numbers.length < 3)
    {
    	document.write("Not enough numbers in the array.");
    }
	while(x < numbers.length)
	{
		y = x + 1; 	
		if(y < numbers.length)
		{
			for(z = y; z < numbers.length; z++)
			{
				if(parseInt(numbers[x]) < parseInt(numbers[z]))
				{
					temp = numbers[z];
					numbers[z] = numbers[x];
					numbers[x] = temp;
					flag = true; 
				}
				else
				{
					continue;
				}	
			}					
		}
				
		if(flag)
		{
			flag = false;
		}
		else
		{
			x++; 
			if(x === nth_largest)
			{   
				result = true;
			}	
		}
		if(result)
		{
			break;
		}
	}
document.write("The third largest number: " + numbers[(nth_largest - 1)]);
}

