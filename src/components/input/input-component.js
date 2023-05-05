class InputSearch extends React.Component {
	render() {
		const { onChangeHandler } = this.props;
		return <input type="search" onChange={onChangeHandler} />;
	}
}
