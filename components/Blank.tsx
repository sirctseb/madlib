import React from 'react';

import styles from './Blank.module.css';

interface BlankProps {
  label: string;
}

export const Blank: React.FC<BlankProps> = ({ label: text }) => {
  return <span className={styles.blank}>{ text }</span>
}