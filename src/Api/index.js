export async function getMyTimers () {
  return [
    {
      id: 1,
      title: '🌟 华辩世界杯赛制',
      config: [
        { 
          title: '🕵️‍♀️ 正方一辩陈词',
          description: '正方一辩发言，时间为3分30秒，阐述正方观点和论证',
          timerConfig: [
            { totalSeconds: 210 },
          ]
        },
        { 
          title: '👨‍💼 反方四辩盘问',
          description: '反方四辩就正方一辩发言内容盘问，答辩方只能作答不能反问，盘问方有权随时打断回答方',
          timerConfig: [
            { id: 1, totalSeconds: 90, type: 'secondary' },
          ]
        },
        { 
          title: '🕵️‍♀️ 反方一辩陈词',
          description: '反方一辩发言，时间为3分30秒，阐述反方观点和论证',
          timerConfig: [
            { totalSeconds: 210, type: 'secondary' },
          ]
        },
        { 
          title: '👨‍💼 正方四辩盘问',
          description: '正方四辩就反方一辩发言内容盘问，答辩方只能作答不能反问，盘问方有权随时打断回答方',
          timerConfig: [
            { totalSeconds: 90 },
          ]
        },
        { 
          title: '🦸‍♂️ 正方二辩驳论',
          description: '正方二辩针对反方观点做出反驳，时间为2分钟',
          timerConfig: [
            { totalSeconds: 10 },
          ]
        },
        { 
          title: '🦸‍♂️ 反方二辩驳论',
          description: '反方二辩针对正方观点做出反驳，时间为2分钟',
          timerConfig: [
            { totalSeconds: 8, type: 'secondary' },
          ]
        },
        {
          title: '👥 正反二辩对辩',
          description: '正方二辩对辩反方二辩，时间各为1分30秒，双方不可打断对方未完成之发言，一方时间完毕后，另一方可继续发言至时间结束',
          timerConfig: [
            { totalSeconds: 8 },
            { totalSeconds: 8, type: 'secondary' },
          ]
        },
        { 
          title: '🧙 正方三辩盘问',
          description: '正方三辩质询除了反方三辩以外任意辩手，答辩方只能作答不能反问，盘问方有权随时打断回答方，时间为2分钟',
          timerConfig: [
            { totalSeconds: 120 },
          ]
        },
        { 
          title: '🧙 反方三辩盘问',
          description: '反方三辩质询除了正方三辩以外任意辩手，答辩方只能作答不能反问，盘问方有权随时打断回答方，时间为2分钟',
          timerConfig: [
            { totalSeconds: 120, type: 'secondary' },
          ]
        },
        { 
          title: '🧙 正方三辩总结',
          description: '正方三辩正对质询环节中的内容进行总结',
          timerConfig: [
            { totalSeconds: 120 },
          ]
        },
        { 
          title: '🧙 反方三辩总结',
          description: '反方三辩正对质询环节中的内容进行总结',
          timerConfig: [
            { totalSeconds: 120, type: 'secondary' },
          ]
        },
        {
          title: '👥 自由辩论',
          description: '时间各位4分钟，正反双方交替发言，一方用时结束后，另一方可继续发言至时间结束',
          timerConfig: [
            { totalSeconds: 240 },
            { totalSeconds: 240, type: 'secondary' },
          ]
        },
        { 
          title: '👨‍🎓 反方四辩总结陈词',
          description: '反方四辩发言，时间为3分30秒，总结反方观点和论证',
          timerConfig: [
            { totalSeconds: 210, type: 'secondary' },
          ]
        },
        { 
          title: '👨‍🎓 正方四辩总结陈词',
          description: '反方四辩发言，时间为3分30秒，总结反方观点和论证',
          timerConfig: [
            { totalSeconds: 210 },
          ]
        },
      ]
    },
    {
      id: 2,
      title: '🦾 徒手训练流程',
      config: [
        { 
          title: '🌱 拉伸 - 10分钟',
          description: '拉伸拉伸拉伸拉伸拉伸',
          timerConfig: [
            { totalSeconds: 600, component: 'card' },
          ]
        },
        { 
          title: '🦵 平板支撑 - 第一组3分钟',
          description: '平板支撑平板支撑平板支撑',
          timerConfig: [
            { totalSeconds: 180, component: 'card' },
          ]
        },
        { 
          title: '🧘‍♂️ 放松 - 1',
          description: '放松2分钟',
          timerConfig: [
            { totalSeconds: 120, component: 'card' },
          ]
        },
        { 
          title: '🦵 平板支撑 - 第二组3分钟',
          description: '平板支撑平板支撑平板支撑',
          timerConfig: [
            { totalSeconds: 180, component: 'card' },
          ]
        },
        { 
          title: '🧘‍♂️ 放松 - 2',
          description: '放松1分钟',
          timerConfig: [
            { totalSeconds: 60, component: 'card' },
          ]
        }
      ]
    }
  ]
} 