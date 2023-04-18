import React from 'react';

const CoinRow = ({ coin, index }) => {
	return (
		<tr>
			<td>{index}</td>
			<td>{coin.name}</td>
		</tr>
	);
};

export default CoinRow;
