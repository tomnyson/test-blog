const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const { urlencoded } = require('body-parser');

const app=express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())