function calculateVolume()
{
	var height = document.getElementById('height').value;
	var radius = document.getElementById('radius').value;
	var out = 3.14159 * parseFloat(radius*radius) * parseFloat(height);
	out = out.toFixed(4);
	document.getElementById('output').value = out;
}