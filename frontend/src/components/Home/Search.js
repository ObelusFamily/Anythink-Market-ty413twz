import agent from '../../agent';

const Search = props => {
	const onSearchChange = (e) => {
		props.onSearchFilter(
			e.target.value,
			(page) => agent.Items.byTitle(e.target.value, page),
			agent.Items.byTitle(e.title.value)
		);
	};

	return (
		<form>
			<input id="search-box" onChange={onSearchChange} type="search" placeholder="What is it that you truely desire?" style={{ width: "300px" }} />
		</form>)
};

export default Search;