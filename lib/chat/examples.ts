export type StarterPrompt = {
  title: string;
  prompt: string;
};

export const starterPrompts: StarterPrompt[] = [
  {
    title: "PMF 卡住",
    prompt: "我的 AI 产品一直没有 PMF，应该砍还是继续？",
  },
  {
    title: "MVP 取舍",
    prompt: "我现在做 MVP，哪些功能该忍住不做？哪些必须做？",
  },
  {
    title: "流量焦虑",
    prompt: "增长卡住了，我分不清是流量问题、定位问题，还是产品价值不够。",
  },
  {
    title: "竞争和融资",
    prompt: "竞品融资很快，我被带乱了。怎么判断自己的节奏和战场？",
  },
];
