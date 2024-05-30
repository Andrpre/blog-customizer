import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Text } from 'components/text';
import { Separator } from 'components/separator';
import { Select } from 'components/select';
import { RadioGroup } from 'components/radio-group';
import {
	ArticleStateType,
	OptionType,
	defaultArticleState,
	fontFamilyOptions,
	fontSizeOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
} from 'src/constants/articleProps';

import styles from './ArticleParamsForm.module.scss';
import { useState } from 'react';
import clsx from 'clsx';

export const ArticleParamsForm = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [stateForm, setStateForm] =
		useState<ArticleStateType>(defaultArticleState);

	const toggleForm = () => {
		isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
	};

	const handleChange = (type: keyof ArticleStateType, value: OptionType) => {
		setStateForm((prev) => ({
			...prev,
			[type]: value,
		}));
		console.log(stateForm);
	};

	return (
		<>
			<ArrowButton onClick={toggleForm} isMenuOpen={isMenuOpen} />
			<aside className={clsx(styles.container, true && styles.container_open)}>
				<form className={styles.form}>
					<Text as='h2' size={31} weight={800} uppercase={true}>
						Задайте параметры
					</Text>
					<Separator type='spacing' />
					<Select
						selected={stateForm.fontFamilyOption}
						options={fontFamilyOptions}
						onChange={(option) => handleChange('fontFamilyOption', option)}
						title='Шрифт'></Select>
					<Separator type='spacing' />
					<RadioGroup
						name='size_button'
						selected={stateForm.fontSizeOption}
						options={fontSizeOptions}
						onChange={(option) => handleChange('fontSizeOption', option)}
						title='Размер шрифта'></RadioGroup>
					<Separator type='spacing' />
					<Select
						selected={stateForm.fontColor}
						options={fontColors}
						onChange={(option) => handleChange('fontColor', option)}
						title='Цвет шрифта'></Select>
					<Separator type='spacing' />
					<Separator type='separator' />
					<Separator type='spacing' />
					<Select
						selected={stateForm.backgroundColor}
						options={backgroundColors}
						onChange={(option) => handleChange('backgroundColor', option)}
						title='Цвет фона'></Select>
					<Separator type='spacing' />
					<Select
						selected={stateForm.contentWidth}
						options={contentWidthArr}
						onChange={(option) => handleChange('contentWidth', option)}
						title='Ширина контента'></Select>
					<Separator type='spacing' />
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
