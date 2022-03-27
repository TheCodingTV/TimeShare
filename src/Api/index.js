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
            { id: 1, totalSeconds: 90, colorType: 2 },
          ]
        },
        { 
          title: '🕵️‍♀️ 反方一辩陈词',
          description: '反方一辩发言，时间为3分30秒，阐述反方观点和论证',
          timerConfig: [
            { totalSeconds: 210, colorType: 2 },
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
            { totalSeconds: 120 },
          ]
        },
        { 
          title: '🦸‍♂️ 反方二辩驳论',
          description: '反方二辩针对正方观点做出反驳，时间为2分钟',
          timerConfig: [
            { totalSeconds: 120, colorType: 2 },
          ]
        },
        {
          title: '👥 正反二辩对辩',
          description: '正方二辩对辩反方二辩，时间各为1分30秒，双方不可打断对方未完成之发言，一方时间完毕后，另一方可继续发言至时间结束',
          timerConfig: [
            { totalSeconds: 90 },
            { totalSeconds: 90, colorType: 2 },
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
            { totalSeconds: 120, colorType: 2 },
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
            { totalSeconds: 120, colorType: 2 },
          ]
        },
        {
          title: '👥 自由辩论',
          description: '时间各位4分钟，正反双方交替发言，一方用时结束后，另一方可继续发言至时间结束',
          timerConfig: [
            { totalSeconds: 240 },
            { totalSeconds: 240, colorType: 2 },
          ]
        },
        { 
          title: '👨‍🎓 反方四辩总结陈词',
          description: '反方四辩发言，时间为3分30秒，总结反方观点和论证',
          timerConfig: [
            { totalSeconds: 210, colorType: 2 },
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
      title: '👀 新版眼保健操',
      config: [
        {
          title: '第一节 揉天应穴',
          description: '以左右大拇指罗纹面接左右眉头下面的上眶角处。其他四指散开弯曲如弓状，支在前额上，按揉面不要大。',
          timerConfig: [
            { totalSeconds: 90, componentType: 'card' },
          ]
        },
        {
          title: '第二节 挤按睛明穴',
          description: '以左手或右手大拇指按鼻根部，先向下按、然后向上挤。',
          timerConfig: [
            { totalSeconds: 90, componentType: 'card', colorType: 2 },
          ]
        },
        {
          title: '第三节 揉四白穴',
          description: '先以左右食指与中指并拢，放在靠近鼻翼两侧，大拇指支撑在下腭骨凹陷处，然后放下中指，在面颊中央按揉。注意穴位不需移动，按揉面不要太大。',
          timerConfig: [
            { totalSeconds: 90, componentType: 'card' },
          ]
        },
        {
          title: '第四节 按太阳穴轮刮眼眶',
          description: '拳起四指，以左右大拇指罗纹面按住太阳穴，以左右食指第二节内侧面轮刮眼眶上下一圈，上侧从眉头开始，到眉梢为止，下面从内眼角起至外眼角止，先上后下，轮刮上下一圈。',
          timerConfig: [
            { totalSeconds: 90, componentType: 'card', colorType: 2 },
          ]
        }
      ]
    },
    {
      id: 3,
      title: '🦾 徒手训练流程',
      config: [
        { 
          title: '🌱 拉伸 - 10分钟',
          description: '拉伸拉伸拉伸拉伸拉伸',
          timerConfig: [
            { totalSeconds: 600, componentType: 'card' },
          ]
        },
        { 
          title: '🦵 平板支撑 - 第一组3分钟',
          description: '平板支撑平板支撑平板支撑',
          timerConfig: [
            { totalSeconds: 180, componentType: 'card' },
          ]
        },
        { 
          title: '🧘‍♂️ 放松 - 1',
          description: '放松2分钟',
          timerConfig: [
            { totalSeconds: 120, componentType: 'card' },
          ]
        },
        { 
          title: '🦵 平板支撑 - 第二组3分钟',
          description: '平板支撑平板支撑平板支撑',
          timerConfig: [
            { totalSeconds: 180, componentType: 'card' },
          ]
        },
        { 
          title: '🧘‍♂️ 放松 - 2',
          description: '放松1分钟',
          timerConfig: [
            { totalSeconds: 60, componentType: 'card' },
          ]
        }
      ]
    }
  ]
} 