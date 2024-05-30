import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import {
	defaultArticleState,
	ArticleStateType,
} from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [statePage, setStatePage] =
		useState<ArticleStateType>(defaultArticleState);

	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': statePage.fontFamilyOption.value,
					'--font-size': statePage.fontSizeOption.value,
					'--font-color': statePage.fontColor.value,
					'--container-width': statePage.contentWidth.value,
					'--bg-color': statePage.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm setStatePage={setStatePage} />
			<Article />
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
