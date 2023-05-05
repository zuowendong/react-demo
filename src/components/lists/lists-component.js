class Lists extends React.Component {
	render() {
		console.log(this.props);
		const { todoList } = this.props;

		const imgCss = {
			border: "1px solid darkorange",
			borderRadius: "10px",
		};
		return (
			<ul className="ul-content">
				{todoList.map((todo) => (
					<div key={todo.url}>
						<li className="li-item">
							<span>{todo.name}</span>
						</li>
						<img
							src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${todo.id}.png`}
							style={imgCss}
						/>
					</div>
				))}
			</ul>
		);
	}
}
