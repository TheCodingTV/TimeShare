import React from 'react';
import CardAddTimerSection from './index';

export default {
  title: 'General/CardAddTimerSection',
  component: CardAddTimerSection
};

const Template = (args) => <CardAddTimerSection {...args} />;

export const SingleTimerSection = Template.bind({})
SingleTimerSection.args = {
  title: '🕵️‍♀️ 正方一辩陈词',
  description: '正方一辩发言，时间为3分30秒，阐述正方观点和论证',
  onDelete: () => {},
  timerConfig: [{ totalSeconds: 210 }],

}

export const DoubleTimerSection = Template.bind({})
DoubleTimerSection.args = {
  title: '👥 正反二辩对辩',
  description: '正方二辩对辩反方二辩，时间各为1分30秒，双方不可打断对方未完成之发言，一方时间完毕后，另一方可继续发言至时间结束',
  onDelete: () => {},
  timerConfig: [
    { totalSeconds: 90 },
    { totalSeconds: 90 },
  ]
}