
const chapters = [3, 4, 5, 6, 7, 10];

const routers = chapters.map((chapter)=>{
  const component = require('./chapter'+chapter+'/Chapter'+chapter).default
  return { key: 'chapter'+chapter, component };
})

export default routers;