## Coding TV Season 1 - TimeShare

TimeShare frontend repo, up and running

```
npm install
npm run dev
```

### 我们用到的东西
* ReactJS
* Vite for build

### 项目介绍
* [Bilibili](https://space.bilibili.com/588977169) B站视频主页
* [CodingTV](https://codingtv.notion.site/)  Notion文档，欢迎给我你的邮箱把你加进项目
* [什么是TimeShare](https://codingtv.notion.site/Episode-0-Plan-TimeShare-29989e0ac0f148139491ce93f6cea830)

--- 

【2020.02.25】- Challenge

现在我们有<TimeSingle />和<TimeMultiple />两个组件，我们他们都调用了<TimerController />这个基础组件，我想给计时器一个属性，属性名叫`repeatedable`，如果`repeatable=true`，计时器会多一个重置按钮，在多计时中，所有计时器应该同时重置。