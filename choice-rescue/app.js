'use strict';
(() => {
  const presets = { food: ['日式拉麵', '港式茶餐廳', '越南河粉', '壽司', '咖喱飯', '雲吞麵'], break: ['出去走一圈', '泡杯好茶', '聽一首歌', '伸個懶腰', '看看窗外', '喝杯水'], weekend: ['逛一間書店', '找間新咖啡店', '去公園散步', '在家看電影', '試做一道菜', '整理小角落'] };
  const colors = ['#ffbd59', '#7bbbd0', '#f38a73', '#bcc5ee', '#e8cd76', '#8bc9b0', '#e9a8c6', '#93b1e5', '#d6b884', '#99d6d9', '#d6b7ec', '#bbcf80'];
  let options = [...presets.food], rotation = 0, busy = false;
  const canvas = document.querySelector('#wheel'), ctx = canvas.getContext('2d');
  const list = document.querySelector('#options'), spinButton = document.querySelector('#spin');
  const error = document.querySelector('#error'), result = document.querySelector('#result');
  function draw(angle = rotation) {
    const size = canvas.width, center = size / 2, radius = center - 2, step = Math.PI * 2 / options.length;
    ctx.clearRect(0, 0, size, size);
    options.forEach((label, i) => {
      const a = angle + i * step - Math.PI / 2;
      ctx.beginPath(); ctx.moveTo(center, center); ctx.arc(center, center, radius, a, a + step); ctx.closePath();
      ctx.fillStyle = colors[i]; ctx.fill(); ctx.strokeStyle = '#ffffff75'; ctx.lineWidth = 3; ctx.stroke();
      ctx.save(); ctx.translate(center, center); ctx.rotate(a + step / 2);
      ctx.fillStyle = '#172d57'; ctx.font = `800 ${options.length > 8 ? 28 : 33}px "Microsoft JhengHei", sans-serif`;
      ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
      const chars = Array.from(label); ctx.fillText(chars.length > 8 ? chars.slice(0, 7).join('') + '…' : label, radius - 40, 0, radius - 155); ctx.restore();
    });
    canvas.setAttribute('aria-label', `轉盤：${options.join('、')}。每個選項機率相同。`);
  }
  function clearResult() {
    result.textContent = '你的下一個小驚喜，就在這一轉。';
    document.querySelector('#result-label').textContent = 'A LITTLE SURPRISE';
    document.querySelector('#result-detail').textContent = '準備好就按下橙色按鈕。';
    document.querySelector('#result-box').classList.remove('winner');
    document.querySelector('#wheel-note').textContent = '不用想太久，小決定交給轉盤。';
  }
  function render() {
    list.replaceChildren();
    options.forEach((value, i) => {
      const row = document.createElement('li'); row.className = 'option-row';
      const swatch = document.createElement('span'); swatch.className = 'swatch'; swatch.style.background = colors[i]; swatch.setAttribute('aria-hidden', 'true');
      const input = document.createElement('input'); input.value = value; input.maxLength = 24; input.setAttribute('aria-label', `選項 ${i + 1}`);
      input.addEventListener('change', () => {
        const value = input.value.trim();
        if (!value || options.some((x, j) => j !== i && x === value)) { input.value = options[i]; error.textContent = !value ? '選項不能留白。' : '這個選項已經在轉盤裡了。'; return; }
        options[i] = value; error.textContent = ''; clearResult(); draw();
      });
      const remove = document.createElement('button'); remove.type = 'button'; remove.className = 'remove'; remove.textContent = '×'; remove.setAttribute('aria-label', `刪除選項 ${i + 1}`);
      remove.addEventListener('click', () => {
        if (options.length <= 2) { error.textContent = '保留至少兩個選項，才有選擇的樂趣。'; return; }
        options.splice(i, 1); error.textContent = ''; clearResult(); render();
        list.children[Math.min(i, options.length - 1)].querySelector('button').focus();
      });
      row.append(swatch, input, remove); list.append(row);
    });
    document.querySelector('#count').textContent = `${options.length} / 12`; draw();
  }
  function addOption(value) {
    if (busy) throw new Error('轉盤正在轉動，請稍候。');
    if (typeof value !== 'string' || !value.trim()) throw new Error('先輸入一個選項吧。');
    value = value.trim();
    if (value.length > 24) throw new Error('每個選項最多 24 字。');
    if (options.length >= 12) throw new Error('最多放入 12 個選項。');
    if (options.includes(value)) throw new Error('這個選項已經在轉盤裡了。');
    options.push(value); clearResult(); render(); error.textContent = '';
    return { options: [...options] };
  }
  document.querySelector('#add-form').addEventListener('submit', event => {
    event.preventDefault(); const input = document.querySelector('#new-option');
    try { addOption(input.value); input.value = ''; input.focus(); list.lastElementChild.scrollIntoView({ block: 'nearest' }); } catch (e) { error.textContent = e.message; }
  });
  document.querySelectorAll('[data-preset]').forEach(button => button.addEventListener('click', () => {
    if (busy) return; options = [...presets[button.dataset.preset]]; rotation = 0; error.textContent = ''; clearResult(); render();
  }));
  function randomIndex(n) {
    const buffer = new Uint32Array(1), limit = Math.floor(4294967296 / n) * n;
    do { crypto.getRandomValues(buffer); } while (buffer[0] >= limit);
    return buffer[0] % n;
  }
  function spin() {
    if (busy) return Promise.reject(new Error('轉盤正在轉動，請稍候。'));
    busy = true; error.textContent = '';
    document.querySelectorAll('button,input').forEach(el => el.disabled = true);
    document.querySelector('.wheel-panel').setAttribute('aria-busy', 'true');
    spinButton.textContent = '讓偶然想一想…'; result.textContent = '答案正在路上…';
    const winner = randomIndex(options.length), full = Math.PI * 2, step = full / options.length;
    const target = (full - (winner + .5) * step) % full;
    const start = rotation, end = start + 5 * full + (target - start % full + full) % full;
    const duration = matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 3200;
    return new Promise(resolve => {
      const began = performance.now();
      function frame(now) {
        const progress = duration === 0 ? 1 : Math.min(1, (now - began) / duration);
        draw(start + (end - start) * (1 - Math.pow(1 - progress, 4)));
        if (progress < 1) { requestAnimationFrame(frame); return; }
        rotation = end % full; busy = false;
        document.querySelectorAll('button,input').forEach(el => el.disabled = false);
        document.querySelector('.wheel-panel').removeAttribute('aria-busy');
        spinButton.textContent = '再轉一次！ ✳';
        document.querySelector('#result-label').textContent = 'THE UNIVERSE SAYS…';
        result.textContent = `就選「${options[winner]}」！`;
        document.querySelector('#result-detail').textContent = `從 ${options.length} 個選項中抽出。喜歡這個答案嗎？`;
        document.querySelector('#result-box').classList.add('winner');
        document.querySelector('#wheel-note').textContent = `這次就選 ${options[winner]}。`;
        resolve({ choice: options[winner], index: winner });
      }
      requestAnimationFrame(frame);
    });
  }
  spinButton.addEventListener('click', () => { void spin().catch(e => { error.textContent = e.message; }); });
  render();
  if (document.modelContext?.registerTool) {
    const lifecycle = new AbortController();
    const definitions = [
      { name: 'read_choices', description: 'Read the current choices shown on the wheel.', inputSchema: { type: 'object', properties: {}, additionalProperties: false }, annotations: { readOnlyHint: true, untrustedContentHint: true }, execute: () => ({ options: [...options], spinning: busy }) },
      { name: 'add_choice', description: 'Add one choice to the visible wheel. Maximum 12 unique choices, each 1 to 24 characters.', inputSchema: { type: 'object', properties: { text: { type: 'string', minLength: 1, maxLength: 24 } }, required: ['text'], additionalProperties: false }, annotations: { readOnlyHint: false, untrustedContentHint: true }, execute: input => addOption(input?.text) },
      { name: 'spin_wheel', description: 'Spin the wheel, show a random winner, and return that winner after the animation completes.', inputSchema: { type: 'object', properties: {}, additionalProperties: false }, annotations: { readOnlyHint: false, untrustedContentHint: true }, execute: () => spin() }
    ];
    definitions.forEach(tool => { try { Promise.resolve(document.modelContext.registerTool(tool, { signal: lifecycle.signal })).catch(() => {}); } catch {} });
    addEventListener('pagehide', event => { if (!event.persisted) lifecycle.abort(); });
  }
})();
