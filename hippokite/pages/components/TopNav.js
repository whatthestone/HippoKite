import { useState, useEffect } from 'react';
import { Menu, Icon, Image } from 'semantic-ui-react';

import React from 'react';

const TopNav = () => {
	return (
		<menuwrapper>
			<Menu color={'light'} secondary inverted style={{ height: '5rem' }}>
				<Menu.Item
					href="/"
					position="right"
					style={{ color: '#373B53 !important' }}
				>
					Your Name
					<Image
						style={{ padding: '0.5rem' }}
						src={'https://semantic-ui.com/images/avatar/small/jenny.jpg'}
						circular
					/>
				</Menu.Item>
				<div
					style={{
						borderLeft: '1px solid #ececff',
					}}
				/>
				<Menu.Item href="/" style={{ color: '#373B53 !important' }}>
					<Icon name="bell" size="large" />
				</Menu.Item>
			</Menu>

			<style jsx>{`
				menuwrapper {
				}
				.menuItem {
					width: 5rem;
				}
			`}</style>
		</menuwrapper>
	);
};

export default TopNav;
