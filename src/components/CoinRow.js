import React from 'react';

const CoinRow = ({ coin, index }) => {
	return (
		<tr>
			<td>
				<img src={coin.image} alt={coin.name} style={{width: '6%'}} className='img-fluid me-4'/>

				<span>
				{index}
				</span>
				
				</td>
			<td>{coin.name}</td>
			<td>{coin.current_price}</td>
			<td>{coin.price_change_percentage_24h}</td>
			<td>{coin.total_volume}</td>
		</tr>
	);
};

export default CoinRow;
