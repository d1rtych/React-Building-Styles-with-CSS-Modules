import React from 'react';

import styles from './GridItem.module.css';
import Explorer from './Explorer';
import Badge from './Badge';

export const GridItem = ({ fact, updateClicked }) => {
  return (
    <div className={styles.card} onClick={() => updateClicked(fact.id)}>
      {fact.clicked ? <Explorer /> : <Badge />}
      <h2 className={styles.title}>{fact.title}</h2>
      <article className={styles.fact}>{fact.fact}</article>
    </div>
  );
}

export default GridItem;
