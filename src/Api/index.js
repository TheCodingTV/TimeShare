export async function getMyTimers () {
  return [
    {
      id: 1,
      title: '🌟 辩论1',
      config: [
        { 
          title: '🕵️‍♀️ 一辩陈词 - 正方',
          description: '学生就业压力大有利于成才 - 正方发言4分钟，阐述本方观点',
          timerConfig: [
            { totalSeconds: 240 },
          ]
        },
        { 
          title: '👨‍💼 一辩陈词 - 反方',
          description: '学生就业压力大有利于成才 - 反方发言4分钟，阐述本方观点',
          timerConfig: [
            { id: 1, totalSeconds: 240, type: 'secondary' },
          ]
        },
        {
          title: '👥 对辩',
          description: '学生就业压力大有利于成才 - 正反双方对辩，交替发言',
          timerConfig: [
            { id: 1, totalSeconds: 120 },
            { id: 2, totalSeconds: 120, type: 'secondary' },
          ]
        }
      ]
    },
    {
      id: 2,
      title: '🎨 辩论2',
      config: [
        { 
          title: '🌱 一辩陈词 - 正方',
          description: '学生就业压力大有利于成才 - 正方发言4分钟，阐述本方观点',
          timerConfig: [
            { totalSeconds: 180, component: 'card' },
          ]
        },
        { 
          title: '🌾 一辩陈词 - 反方',
          description: '学生就业压力大有利于成才 - 反方发言4分钟，阐述本方观点',
          timerConfig: [
            { id: 1, totalSeconds: 180, type: 'secondary' },
          ]
        },
        {
          title: '🎋 对辩',
          description: '学生就业压力大有利于成才 - 正反双方对辩，交替发言',
          timerConfig: [
            { id: 1, totalSeconds: 60 },
            { id: 2, totalSeconds: 60, type: 'secondary' },
          ]
        }
      ]
    }
  ]
} 