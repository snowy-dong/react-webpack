require("style/index.scss");
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import APP from 'compontents/App'
const appEle = document.createElement('div');
appEle.className = 'appEle';
document.body.appendChild(appEle);
ReactDOM.render(<APP/>, appEle);