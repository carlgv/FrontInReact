import React from 'react';

class Products extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			items: []
		};
	}

	componentDidMount() {
		fetch('/Products/GetAll')
			.then(res => res.json())
			.then(
				(result) => {
					this.setState({
						isLoaded: true,
						items: result.products
					});
				},
				(error) => {
					this.setState({
						isLoaded: true,
						error
					});
				}
			)
	}

	renderTableHeader() {
		return (
			<tr>
				<th scope="col">ID</th>
				<th scope="col">NOMBRE</th>
				<th class="number" scope="col">PRECIO/UNIDAD</th>
				<th class="number" scope="col">KILOS/UNIDAD</th>
				<th class="number" scope="col">FORMATO</th>
			</tr>
		)
	}

	renderTableData() {
		return this.state.items.map((product, index) => {
			const { productId, productName, unitPrice, unitType, weightPerUnit } = product
			return (
				<tr key={productId}>
					<th scope="row">{productId}</th>
					<td>{productName}</td>
					<td class="number">{unitPrice}</td>
					<td class="number">{weightPerUnit}</td>
					<td class="number">{unitType}</td>
				</tr>
			)
		})
	}

	render() {
		if (!this.state.isLoaded) { return null }
		//const classes = useStyles();
		return (
			<div className="customContainer">
				<h1></h1>
					<table id='products' className="table table-hover table-dark">
						<tbody>
							{this.renderTableHeader()}
							{this.renderTableData()}
						</tbody>
					</table>
			</div>
		)
	}
}
export default Products;