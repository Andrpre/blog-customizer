import { CSSProperties, useState } from 'react';

import { Article } from '../article/Article';
import { ArticleParamsForm } from '../article-params-form/ArticleParamsForm';
import {
	defaultArticleState,
	ArticleStateType,
} from '../../constants/articleProps';

import '../../styles/index.scss';
import styles from '../../styles/index.module.scss';

export const App = () => {
	const [statePage, setStatePage] =
		useState<ArticleStateType>(defaultArticleState);

	return (
		<div
			className={styles.main}
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