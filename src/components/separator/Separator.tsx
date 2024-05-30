import styles from './index.module.scss';

type SeparatorProps = {
	/** Тип блока */
	type: 'separator' | 'spacing';
};

export const Separator = ({ type = 'separator' }: SeparatorProps) => {
	return <div className={styles[`${type}`]}></div>;
};
