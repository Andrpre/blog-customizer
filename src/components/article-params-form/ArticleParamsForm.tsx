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
import { useOutsideClickClose } from '../select/hooks/useOutsideClickClose';

import styles from './ArticleParamsForm.module.scss';
import { FormEvent, useRef, useState } from 'react';
import clsx from 'clsx';

type ArticleParamsFormProps = {
	setStatePage: React.Dispatch<React.SetStateAction<ArticleStateType>>;
};

export const ArticleParamsForm = ({ setStatePage }: ArticleParamsFormProps) => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const [stateForm, setStateForm] =
		useState<ArticleStateType>(defaultArticleState);
	const rootRef = useRef<HTMLDivElement>(null);

	useOutsideClickClose({
		isOpen: isMenuOpen,
		rootRef,
		onChange: setIsMenuOpen,
	});

	const toggleForm = () => {
		isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
	};

	const handleChange = (type: keyof ArticleStateType, value: OptionType) => {
		setStateForm((prev) => ({
			...prev,
			[type]: value,
		}));
	};

	const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
		evt.preventDefault();
		setStatePage(stateForm);
	};

	const handleReset = (evt: FormEvent<HTMLFormElement>) => {
		evt.preventDefault();
		setStatePage(defaultArticleState);
		setStateForm(defaultArticleState);
	};

	return (
		<div ref={rootRef}>
			<ArrowButton onClick={toggleForm} isMenuOpen={isMenuOpen} />
			<aside
				className={clsx(styles.container, isMenuOpen && styles.container_open)}>
				<form
					className={styles.form}
					onSubmit={handleSubmit}
					onReset={handleReset}>
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
		</div>
	);
};
