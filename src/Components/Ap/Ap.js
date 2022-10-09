import React, {Component} from 'react';
import styles from './Ap.module.css';


class Ap extends Component {
    render() {
        return <div className={styles.container}>{this.props.children}</div>;
        }
    }

export default Ap;