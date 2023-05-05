const InputSearch = ({ onChangeHandler }) => {
	return <input type="search" onChange={onChangeHandler} />;
};

/*
class InputSearch extends React.Component {
	render() {
		const { onChangeHandler } = this.props;
		return <input type="search" onChange={onChangeHandler} />;
	}
}
*/
