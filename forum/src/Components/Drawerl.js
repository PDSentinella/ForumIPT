import React, { useState } from 'react'
import SubForum from './SubForum'
const channels = [
  {
  notification:2,
  name:"redes",
  img:"https://www.bing.com/images/search?view=detailV2&ccid=weIYzA29&id=AFEB33B3A80542FE0A2CD3B14D24348B11797813&thid=OIP.weIYzA29SH3BQDknDoRSegHaQC&mediaurl=https%3a%2f%2fwallpapercave.com%2fwp%2fwp5861206.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.c1e218cc0dbd487dc14039270e84527a%3frik%3dE3h5EYs0JE2x0w%26pid%3dImgRaw%26r%3d0&exph=2436&expw=1125&q=cute+profile+pics+aesthetic&simid=608008047903007329&FORM=IRPRST&ck=9A41C5F3026E9FFE72BDD71758B4D1AB&selectedIndex=39&ajaxhist=0&ajaxserp=0",
  },
  {
    notification:0,
    name:"Interface Web",
    img:"https://www.bing.com/images/search?view=detailV2&ccid=weIYzA29&id=AFEB33B3A80542FE0A2CD3B14D24348B11797813&thid=OIP.weIYzA29SH3BQDknDoRSegHaQC&mediaurl=https%3a%2f%2fwallpapercave.com%2fwp%2fwp5861206.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.c1e218cc0dbd487dc14039270e84527a%3frik%3dE3h5EYs0JE2x0w%26pid%3dImgRaw%26r%3d0&exph=2436&expw=1125&q=cute+profile+pics+aesthetic&simid=608008047903007329&FORM=IRPRST&ck=9A41C5F3026E9FFE72BDD71758B4D1AB&selectedIndex=39&ajaxhist=0&ajaxserp=0",
  },
  {
    notification:3,
    name:"Base De Dados",
    img:"https://www.bing.com/images/search?view=detailV2&ccid=weIYzA29&id=AFEB33B3A80542FE0A2CD3B14D24348B11797813&thid=OIP.weIYzA29SH3BQDknDoRSegHaQC&mediaurl=https%3a%2f%2fwallpapercave.com%2fwp%2fwp5861206.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.c1e218cc0dbd487dc14039270e84527a%3frik%3dE3h5EYs0JE2x0w%26pid%3dImgRaw%26r%3d0&exph=2436&expw=1125&q=cute+profile+pics+aesthetic&simid=608008047903007329&FORM=IRPRST&ck=9A41C5F3026E9FFE72BDD71758B4D1AB&selectedIndex=39&ajaxhist=0&ajaxserp=0"
  },
  ,
  {
    notification:2,
    name:"Estrutura De Dados",
    img:"https://www.bing.com/images/search?view=detailV2&ccid=weIYzA29&id=AFEB33B3A80542FE0A2CD3B14D24348B11797813&thid=OIP.weIYzA29SH3BQDknDoRSegHaQC&mediaurl=https%3a%2f%2fwallpapercave.com%2fwp%2fwp5861206.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.c1e218cc0dbd487dc14039270e84527a%3frik%3dE3h5EYs0JE2x0w%26pid%3dImgRaw%26r%3d0&exph=2436&expw=1125&q=cute+profile+pics+aesthetic&simid=608008047903007329&FORM=IRPRST&ck=9A41C5F3026E9FFE72BDD71758B4D1AB&selectedIndex=39&ajaxhist=0&ajaxserp=0"
  }
  ,
  {
    notification:3,
    name:"AC",
    img:"https://www.bing.com/images/search?view=detailV2&ccid=weIYzA29&id=AFEB33B3A80542FE0A2CD3B14D24348B11797813&thid=OIP.weIYzA29SH3BQDknDoRSegHaQC&mediaurl=https%3a%2f%2fwallpapercave.com%2fwp%2fwp5861206.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.c1e218cc0dbd487dc14039270e84527a%3frik%3dE3h5EYs0JE2x0w%26pid%3dImgRaw%26r%3d0&exph=2436&expw=1125&q=cute+profile+pics+aesthetic&simid=608008047903007329&FORM=IRPRST&ck=9A41C5F3026E9FFE72BDD71758B4D1AB&selectedIndex=39&ajaxhist=0&ajaxserp=0"
  }
]

