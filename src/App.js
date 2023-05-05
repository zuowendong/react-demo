// 类组件
class App extends React.Component {
	constructor() {
		super();
		this.state = {
			todoItems: [],
			filteredTodoItems: [],
			name: "TodoList",
		};
	}

	componentDidMount() {
		fetch("https://pokeapi.co/api/v2/pokemon")
			.then((res) => res.json())
			.then((json) => {
				json.results.map((result, index) => {
					result.id = index + 1;
				});
				this.setState(
					() => {
						return {
							todoItems: json.results,
							filteredTodoItems: json.results,
						};
					},
					() => {
						console.log(this.state);
					}
				);
			});
		// 异步队列，还是会先打印原本的state中的值
		// console.log(this.state);
	}

	onChangeHandler = (event) => {
		const comparedTodoItems = this.state.todoItems.filter((todo) => {
			return todo.name.includes(event.target.value);
		});
		this.setState(
			() => {
				return {
					filteredTodoItems: comparedTodoItems,
				};
			},
			() => {}
		);
	};

	render() {
		return (
			<>
				<h1>{this.state.name}</h1>
				<InputSearch onChangeHandler={this.onChangeHandler} />
				<Lists todoList={this.state.filteredTodoItems} />
			</>
		);
	}
}
