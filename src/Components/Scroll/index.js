import styles from './styles.module.css'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const Scroll = () => {
    const scrollTop = function() {
        window.scrollTo(0, 0);
    };
    return (
        <div>
            <ArrowUpwardIcon onClick={scrollTop} className={styles.arrow}/>
        </div>
    )
}

export default Scroll