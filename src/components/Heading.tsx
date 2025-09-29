import styles from './Heading.module.css'

type HeaderProps = {
    children: React.ReactNode
};

export function Heading({children}: HeaderProps) {
    return <h1 className={styles.heading}>{
        children
    }</h1>
}
