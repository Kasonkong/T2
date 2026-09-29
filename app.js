'use strict';
const catalog = [
  ['idea','外星人第一次喝珍珠奶茶。','想像你是外星導遊：用三句話向旅客解釋珍珠奶茶，不能說「茶」、「奶」或「珍珠」。','約 2 分鐘','一個人也能玩'],
  ['idea','給雲端一個離職的理由。','假如天上的雲今天決定辭職，它會寫什麼理由？幫它寫一封只有三行的離職信。','約 3 分鐘','一個人也能玩'],
  ['idea','你的冰箱藏著一個宇宙。','挑三樣冰箱裡的食物，分別任命它們為星球總統、宇宙海盜和秘密間諜，再編一段相遇的故事。','約 3 分鐘','一個人也能玩'],
  ['idea','發明一個完全沒用的超能力。','例如「能聽懂吐司的心聲」。替你的超能力取名，並想出它唯一派得上用場的時刻。','約 2 分鐘','一個人也能玩'],
  ['idea','替星期一重新命名。','如果一週七天都是不同的星球，星期一叫什麼？它的居民靠什麼維生？給它一段旅遊介紹。','約 3 分鐘','一個人也能玩'],
  ['idea','為月亮寫一則五星好評。','假裝你剛租住月亮一晚。寫一則五星住宿評價，附上你最滿意、也最荒謬的服務。','約 2 分鐘','一個人也能玩'],
  ['idea','一支鉛筆的反派起源。','這支鉛筆曾經想成為詩人，最後卻成了反派。用四句話解釋這個轉折。','約 3 分鐘','一個人也能玩'],
  ['idea','讓聲音有自己的顏色。','選一種聲音：雨聲、門鈴或笑聲。想像它的顏色、形狀和味道，替它取一個作品名。','約 2 分鐘','一個人也能玩'],
  ['idea','未來博物館需要你。','挑一件身邊的日用品，寫一張西元 3026 年的展覽說明牌。記得讓未來人誤解它的用途。','約 3 分鐘','一個人也能玩'],
  ['idea','把你的心情翻成天氣預報。','現在的心情是局部起司雨，還是間歇性流星？播報一段二十秒的「內心氣象」。','約 1 分鐘','一個人也能玩'],
  ['idea','宇宙需要一家新店。','開一間販售無形物品的店，例如失而復得的勇氣。想出三件商品、價格與一項退貨規則。','約 3 分鐘','一個人也能玩'],
  ['idea','寫一條來自未來的簡訊。','五十年後的你，只能傳回十二個字。你會說什麼？再想出一則讓現在的你笑出來的版本。','約 2 分鐘','一個人也能玩'],
  ['mission','把房間當成陌生星球。','找出三個你平常不會留意的小細節：一條紋路、一個倒影或一處影子。你是今天的第一位探險家。','約 3 分鐘','一個人也能玩'],
  ['mission','拍一張「不像它」的照片。','選一件日用品，換一個角度近拍，讓它看起來像另一種東西。不需要發布，只欣賞你的新發現。','約 3 分鐘','一個人也能玩'],
  ['mission','給今天配一段片尾字幕。','寫下今天出現的三位「角色」：可以是人，也可以是你的咖啡。每一位都配上一個電影職位。','約 2 分鐘','一個人也能玩'],
  ['mission','三十秒無聲冒險。','安靜聆聽三十秒，找出三種聲音。替它們組成的樂團取名，再想像誰是主唱。','約 1 分鐘','一個人也能玩'],
  ['mission','用另一隻手畫顆星。','用不常寫字的那隻手畫一顆星，別修正。替它命名，它可能是宇宙裡獨一無二的新星。','約 1 分鐘','一個人也能玩'],
  ['mission','尋找一個藏起來的笑臉。','看看身邊的插座、物件或圖案，找出一張看起來像臉的組合。替這位新朋友取名字。','約 2 分鐘','一個人也能玩'],
  ['mission','讓你的水杯獲得爵位。','替你的水杯設計完整頭銜，例如「第三任晨間清醒守護者」。用莊嚴的語氣讀給它聽。','約 1 分鐘','一個人也能玩'],
  ['mission','今天的幸運色，由你發現。','選一個顏色，在你所在的位置找三樣同色物品。把它們當作線索，編出一個迷你謎案。','約 3 分鐘','一個人也能玩'],
  ['mission','寫給五分鐘後的自己。','在紙上寫一個小鼓勵，折起來。五分鐘後打開，讓未來的你收到一次來自過去的支援。','約 1 分鐘','一個人也能玩'],
  ['mission','替窗外的世界換個標題。','看看窗外或眼前的場景，當作一幅畫。替它取一個會讓人忍不住多看一眼的標題。','約 2 分鐘','一個人也能玩'],
  ['mission','替一件物品做十秒廣告。','拿起一件普通物品，用十秒介紹它。你可以把橡皮擦說成「局部時光逆轉器」。','約 1 分鐘','一個人也能玩'],
  ['mission','畫一份不存在的早餐。','畫出一份外星早餐，不求好看。標出每樣食物的名字，以及吃完後會產生的有趣效果。','約 3 分鐘','一個人也能玩'],
  ['friends','一句一句，接出宇宙事故。','從「我們打開冰箱，裡面坐著一位太空人」開始。每人接一句，說三輪，看看故事飛到哪裡。','約 3 分鐘','2 人以上'],
  ['friends','三個詞，交換一個故事。','各自給對方三個毫不相關的詞，例如水母、電梯、星期五。用三十秒把它們編成一個故事。','約 3 分鐘','2 人以上'],
  ['friends','畫畫不能看紙挑戰。','各自選一件物品，不低頭看紙，畫它三十秒。交換作品猜一猜，猜錯也算宇宙認證的藝術。','約 2 分鐘','2 人以上'],
  ['friends','頒發一個不尋常的獎。','輪流替朋友頒一個友善又有趣的獎項，例如「最會拯救尷尬場面獎」。加上一句具體的頒獎理由。','約 3 分鐘','2 人以上'],
  ['friends','你是來自哪顆星的？','各自用三個特點描述自己的星球：天氣、食物和最奇怪的規則。猜猜哪個特點最像對方本人。','約 3 分鐘','2 人以上'],
  ['friends','替彼此的今天配音。','用紀錄片旁白的語氣，介紹對方正在做的一件小事。內容要友善，越日常越好笑。','約 2 分鐘','2 人以上'],
  ['friends','只能用問題聊天。','進行一分鐘對話，每一句都必須是問題。有人不小心說出陳述句，就宣布收到「地球訊號」。','約 1 分鐘','2 人以上'],
  ['friends','一起設計一款荒謬發明。','一個人提需求，另一個人給出奇怪解法。例如「找不到襪子」配「會開記者會的洗衣機」。交換一次。','約 3 分鐘','2 人以上'],
  ['friends','用表情演一部不存在的電影。','一人用三個表情、不能說話，演出一部自己發明的電影。另一人猜片名，再共同決定它的結局。','約 2 分鐘','2 人以上'],
  ['friends','猜猜我的外星職業。','各自想一個外星職業，例如「流星交通指揮員」。用三個動作演出來，讓朋友猜猜看。','約 3 分鐘','2 人以上'],
  ['friends','一場認真的荒謬辯論。','討論「雲朵應該放在冰箱上層還是下層」。各講三十秒，最後一起選出最有創意的理由。','約 2 分鐘','2 人以上'],
  ['friends','你的朋友是一款遊戲角色。','幫對方設計一個角色：名稱、一項技能和一句出場台詞。把對方的可愛特點變成技能。','約 3 分鐘','2 人以上']
].map((r,i)=>({id:i+1,category:r[0],title:r[1],description:r[2],time:r[3],people:r[4]}));
const labels={all:'交給宇宙',idea:'腦洞靈感',mission:'日常奇遇',friends:'好友挑戰'};
const el=id=>document.getElementById(id);
let selected='all',count=0,busy=false,completed=false,current=null;
const bags={};
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function chooseChannel(channel){if(!(channel in labels))throw new Error('未知頻道');if(busy)throw new Error('訊號接收中，請稍後');selected=channel;document.querySelectorAll('.channel').forEach(button=>{const active=button.dataset.channel===channel;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));});el('feedback').textContent=`已調頻至「${labels[channel]}」，準備接收。`;}
function nextSignal(channel){if(!bags[channel]?.length){bags[channel]=catalog.filter(item=>channel==='all'||item.category===channel).map(item=>item.id);for(let i=bags[channel].length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[bags[channel][i],bags[channel][j]]=[bags[channel][j],bags[channel][i]];}if(bags[channel].length>1&&bags[channel].at(-1)===current?.id){[bags[channel][0],bags[channel][bags[channel].length-1]]=[bags[channel].at(-1),bags[channel][0]];}}const nextId=bags[channel].pop();return catalog.find(item=>item.id===nextId);}
function setBusy(value){busy=value;el('draw-button').disabled=value;el('complete-button').disabled=value||completed;document.querySelectorAll('.channel').forEach(button=>button.disabled=value);el('result-area').setAttribute('aria-busy',String(value));}
async function drawSignal(channel=selected){if(!(channel in labels))throw new Error('未知頻道');if(busy)throw new Error('訊號接收中，請稍後');if(channel!==selected)chooseChannel(channel);setBusy(true);el('result-area').classList.remove('revealed','toast-glow');el('result-area').classList.add('scanning');el('draw-label').textContent='正在接收…';el('signal-status').textContent='DECODING SIGNAL';el('feedback').textContent='宇宙正在挑選你的下一個奇想。';await new Promise(resolve=>setTimeout(resolve,reducedMotion?60:850));current=nextSignal(channel);count++;completed=false;el('category-tag').textContent=labels[current.category];el('result-code').textContent=`SIGNAL / ${String(count).padStart(3,'0')}`;el('result-kicker').textContent='已解碼。這個奇想屬於你。';el('result-title').textContent=current.title;el('result-description').textContent=current.description;el('task-time').textContent=current.time;el('task-people').textContent=current.people;el('draw-count').textContent=String(count).padStart(2,'0');el('draw-label').textContent='再抽一個奇想';el('complete-button').innerHTML='任務完成 <span aria-hidden="true">✓</span>';el('complete-button').classList.remove('completed');el('signal-status').textContent='SIGNAL RECEIVED';el('feedback').textContent='試試這個奇想，或者繼續探索下一個。';el('result-area').classList.remove('scanning');el('result-area').classList.add('revealed');setBusy(false);return {...current,channel:labels[current.category],receivedCount:count};}
function completeTask(){if(busy)throw new Error('訊號接收中，請稍後');if(completed)throw new Error('這個任務已經完成');completed=true;el('complete-button').classList.add('completed');el('complete-button').innerHTML='已完成 <span aria-hidden="true">✓</span>';el('complete-button').disabled=true;el('result-area').classList.add('toast-glow');el('feedback').textContent='任務完成！你讓地球多了一點有趣。';el('signal-status').textContent='MISSION COMPLETE';if(!reducedMotion){const confetti=document.createElement('div');confetti.className='celebrate';confetti.setAttribute('aria-hidden','true');for(let i=0;i<28;i++){const particle=document.createElement('i');particle.className='particle';particle.style.setProperty('--x',`${Math.random()*100}%`);particle.style.setProperty('--color',['#9affde','#bda5ff','#eef7ff'][i%3]);particle.style.setProperty('--delay',`${Math.random()*.25}s`);particle.style.setProperty('--drift',`${Math.random()*160-80}px`);confetti.append(particle);}document.body.append(confetti);setTimeout(()=>confetti.remove(),2300);}return {completed:true,signalId:current?.id??0};}
document.querySelectorAll('.channel').forEach(button=>button.addEventListener('click',()=>chooseChannel(button.dataset.channel)));
el('draw-button').addEventListener('click',()=>drawSignal().catch(()=>{el('feedback').textContent='訊號暫時中斷，請再試一次。';el('result-area').classList.remove('scanning');el('draw-label').textContent='抽取奇想';el('signal-status').textContent='READY TO RECEIVE';setBusy(false);}));
el('complete-button').addEventListener('click',completeTask);
if(document.modelContext?.registerTool){const lifecycle=new AbortController();const register=tool=>{try{Promise.resolve(document.modelContext.registerTool(tool,{signal:lifecycle.signal})).catch(()=>{});}catch{}};register({name:'draw_oddity',title:'抽取奇想',description:'從指定頻道抽取一個趣味任務或點子，等待接收動畫結束，並更新頁面上的奇想。',inputSchema:{type:'object',properties:{channel:{type:'string',enum:['all','idea','mission','friends']}},additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:false},execute(input){if(!input||typeof input!=='object'||Array.isArray(input)||Object.keys(input).some(key=>key!=='channel')||('channel'in input&&typeof input.channel!=='string'))throw new Error('請提供有效的頻道參數');return drawSignal(input.channel??selected);}});register({name:'complete_oddity',title:'完成目前任務',description:'將目前顯示的奇想標記為完成，並在頁面顯示完成訊息。',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:false},execute(input){if(!input||typeof input!=='object'||Array.isArray(input)||Object.keys(input).length)throw new Error('此操作不接受參數');return completeTask();}});window.addEventListener('pagehide',()=>lifecycle.abort(),{once:true});}
