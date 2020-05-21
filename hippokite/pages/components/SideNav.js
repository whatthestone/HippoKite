import { useState, useEffect } from 'react';
import { Menu, Icon } from 'semantic-ui-react';

import React from 'react';

const SideNav = () => {
	return (
		<menuwrapper style={{ height: '100vh' }}>
			<Menu
				color={'dark'}
				secondary
				inverted
				icon
				vertical
				style={{ width: '5rem !important', height: '100vh' }}
			>
				<Menu.Item>
					<img
						className="menuItem"
						src="https://react.semantic-ui.com/images/wireframe/image.png"
					/>
				</Menu.Item>
				<Menu.Item href="/">
					<Icon name="chart bar" size="large" />
				</Menu.Item>
				<Menu.Item href="/new">
					<Icon name="file outline" size="large" />
				</Menu.Item>
				<Menu.Item href="/library">
					<Icon name="folder outline" size="large" />
				</Menu.Item>
			</Menu>

			<style jsx>{`
				menuwrapper {
					float: left;
					padding-left: 5px;
					padding-right: 5px;
					width: 5rem;
					min-height: 1px;
					display: block;
					flex-direction: column;
				}
				.menuItem {
					width: 5rem;
				}
			`}</style>
		</menuwrapper>
	);
};

export default SideNav;
