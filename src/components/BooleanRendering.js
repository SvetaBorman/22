function BooleanRendering() {
	let text;
	const show = true;

	if (show) {
		text = <p>Тише, мыши, кот на крыше!</p>;
	} else {
		text = <p>А котята еще выше!</p>;
	}	

	return (
	<div>
		{text}
	</div>
	);
	
}

export default BooleanRendering;