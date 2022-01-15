import React from 'react';
import { Blank } from './Blank';

import styles from './MadLib.module.css';

interface MadLibProps {
  text: string;
  title: string;
}

export const MadLib: React.FC<MadLibProps> = ({ text, title }) => {
  return <div className={styles.madlib}>
    <div className={styles.title}>
      {title}
      </div>
      <div>
      {
        text.split('\n').map(line => {
          return <div key={line}>
          {
            line.split('|').map((token, index) => {
              if (index % 2 === 0) {
                return token;
              }
              return <Blank key={token+index} label={token} />
            })
          }
          <br />
          </div>
        })
      }
    </div>
  </div>
}