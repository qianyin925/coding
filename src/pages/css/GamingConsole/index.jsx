// 参考: https://codepen.io/chrisota/pen/eYpyqYG
import React from 'react';
import scss from './index.module.scss';

export default () => (
  <div className={scss.body}>
    <div className={scss['gaming-console']}>
      <div className={scss.screen}/>

      <div className={scss['btns-a-b']}>
        <div className={scss.btn}>A</div>
        <div className={scss.btn}>B</div>
      </div>
      <div className={scss['cross-btn']}/>
      <div className={scss.audio}/>
      <div className={scss.screw}>
        <div className={scss['screw-item']}/>
        <div className={scss['screw-item']}/>
        <div className={scss['screw-item']}/>
      </div>
      <div className={scss.dandle}>
        <div className={scss['dandle-rifle']}/>
        <div className={scss['dandle-bar']}/>
      </div>
    </div>
  </div>
);
