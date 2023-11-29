import { Suspense } from 'react';
import styles from "./styles.module.css";

const Loading = () => {
    return (<div className={styles.container}>
        <Suspense>
            <label>Loading...</label>
        </Suspense>
    </div>)
}

export default Loading;