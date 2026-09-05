// 角色資料庫
const characters = [
    {
        id: 1,
        name: "艾蕾娜",
        emoji: "⚔️",
        role: "劍士",
        description: "勇敢而堅定的劍士，懷揣著對正義的執著信念。",
        background: "出身於一個沒落的騎士家族，艾蕾娜從小就受到劍術訓練。她決心恢復家族的榮耀，並保護無辜的人民。",
        personality: ["勇敢", "堅決", "正義感強", "沉著冷靜"],
        abilities: ["劍術精湛", "戰鬥直覺", "領導能力", "不屈精神"],
        story: "在一場對抗黑暗勢力的戰役中，艾蕾娜失去了她最親近的人。這次經歷讓她更加堅定了要守護世界的決心。她現在是冒險隊伍中的中流砥柱。"
    },
    {
        id: 2,
        name: "莫里斯",
        emoji: "🧙‍♂️",
        role: "魔法師",
        description: "神祕而聰慧的魔法師，掌握著古老的魔法知識。",
        background: "莫里斯曾是大魔法學院的高材生，但他對禁忌魔法的研究使他遭到驅逐。現在他用魔法幫助有需要的人。",
        personality: ["神祕", "聰慧", "獨立", "富有好奇心"],
        abilities: ["火焰魔法", "冰凍術", "魔法轉移", "知識淵博"],
        story: "莫里斯一直在尋找一本古老的魔法書，傳說它包含了改變世界的力量。他的冒險之旅就是為了找到答案。"
    },
    {
        id: 3,
        name: "露娜",
        emoji: "🏹",
        role: "獵手",
        description: "敏捷而精準的獵手，與自然和諧共處。",
        background: "露娜在森林中長大，與野生動物為伴。她的狩獵技巧無人能及，箭術更是百步穿楊。",
        personality: ["敏捷", "獨立", "親近自然", "神祕"],
        abilities: ["箭術高超", "狩獵技能", "野外求生", "動物溝通"],
        story: "當森林受到污染時，露娜決定踏上冒險旅程，尋找污染的根源並阻止它。她的故事是關於保護家園的決心。"
    },
    {
        id: 4,
        name: "達克魯斯",
        emoji: "🛡️",
        role: "聖騎士",
        description: "信仰堅定的聖騎士，以光明之力對抗黑暗。",
        background: "達克魯斯出身於一個古老的聖騎士傳承，從小就接受神聖力量的訓練。他相信光明終將戰勝黑暗。",
        personality: ["信仰堅定", "無懼", "慈悲", "正直"],
        abilities: ["聖光術", "盔甲強化", "治癒力量", "邪惡感知"],
        story: "面對一股無法名狀的黑暗力量，達克魯斯聯合各地的冒險者組成聯盟。他的領導和信仰感染了每一個人。"
    },
    {
        id: 5,
        name: "琳達",
        emoji: "⚗️",
        role: "煉金術士",
        description: "天才般的煉金術士，精通藥劑學和材料變換。",
        background: "琳達是一位傳奇煉金術士的學徒，她的天賦讓師父吃驚。她現在獨立開業，製造各種神奇的藥劑。",
        personality: ["聰慧", "實驗精神", "細心", "樂觀"],
        abilities: ["藥劑製作", "材料轉換", "科學知識", "創新思維"],
        story: "琳達正在研發一種能夠治癒任何疾病的萬能藥。她的實驗需要來自各個遠方的稀有材料，這促使她加入了冒險隊伍。"
    },
    {
        id: 6,
        name: "凱恩",
        emoji: "🗡️",
        role: "浪人",
        description: "孤獨而神祕的浪人，背負著沉重的過去。",
        background: "凱恩曾經是邪惡組織的殺手，但他逃離了那個生活。現在他試圖贖罪，幫助那些需要他的人。",
        personality: ["冷靜", "孤獨", "忠誠", "贖罪"],
        abilities: ["近戰戰鬥", "隱匿能力", "快速反應", "策略思維"],
        story: "凱恩為了保護一個無辜的村莊而與過去的組織對抗。這個選擇改變了他的整個人生軌跡。"
    }
];

// 初始化頁面
document.addEventListener('DOMContentLoaded', function() {
    displayCharacters(characters);
    // 頁面加載時顯示歡迎彈出視窗
    openWelcomeModal();
});

// 顯示所有角色
function displayCharacters(charsToDisplay) {
    const charactersList = document.getElementById('charactersList');
    charactersList.innerHTML = '';

    if (charsToDisplay.length === 0) {
        charactersList.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #999;">未找到符合條件的角色</p>';
        return;
    }

    charsToDisplay.forEach(character => {
        const card = document.createElement('div');
        card.className = 'character-card';
        card.onclick = () => showCharacterDetail(character);
        card.innerHTML = `
            <div class="character-avatar">${character.emoji}</div>
            <h3>${character.name}</h3>
            <p>${character.description}</p>
            <span class="character-role">${character.role}</span>
        `;
        charactersList.appendChild(card);
    });
}

// 顯示角色詳情
function showCharacterDetail(character) {
    const listSection = document.querySelector('.characters-section');
    const detailPanel = document.getElementById('detailPanel');
    const characterDetail = document.getElementById('characterDetail');

    listSection.style.display = 'none';
    detailPanel.classList.remove('hidden');

    characterDetail.innerHTML = `
        <div class="detail-header">
            <div class="detail-avatar">${character.emoji}</div>
            <div class="detail-info">
                <h1>${character.name}</h1>
                <span class="role">${character.role}</span>
                <p>${character.description}</p>
            </div>
        </div>

        <div class="detail-sections">
            <div class="detail-section">
                <h3>📖 背景故事</h3>
                <p>${character.background}</p>
            </div>

            <div class="detail-section">
                <h3>💭 性格特點</h3>
                <div class="tags">
                    ${character.personality.map(trait => `<span class="tag">${trait}</span>`).join('')}
                </div>
            </div>

            <div class="detail-section">
                <h3>⚡ 能力</h3>
                <div class="tags">
                    ${character.abilities.map(ability => `<span class="tag">${ability}</span>`).join('')}
                </div>
            </div>

            <div class="detail-section">
                <h3>🎭 冒險故事</h3>
                <p>${character.story}</p>
            </div>
        </div>
    `;
}

// 關閉詳情面板
function closeDetailPanel() {
    const listSection = document.querySelector('.characters-section');
    const detailPanel = document.getElementById('detailPanel');
    
    listSection.style.display = 'block';
    detailPanel.classList.add('hidden');
}

// 顯示所有角色（按鈕）
function showAllCharacters() {
    closeDetailPanel();
    displayCharacters(characters);
    document.getElementById('searchInput').value = '';
}

// 搜尋角色
function searchCharacters() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filtered = characters.filter(character => 
        character.name.toLowerCase().includes(searchTerm) ||
        character.role.toLowerCase().includes(searchTerm) ||
        character.description.toLowerCase().includes(searchTerm)
    );
    displayCharacters(filtered);
}

// 開啟歡迎彈出視窗
function openWelcomeModal() {
    document.getElementById('welcomeModal').classList.remove('hidden');
}

// 關閉歡迎彈出視窗
function closeWelcomeModal() {
    document.getElementById('welcomeModal').classList.add('hidden');
}

// 開始探索按鈕
function exploreCharacters() {
    closeWelcomeModal();
    // 平滑滾動到角色列表
    document.querySelector('.characters-section').scrollIntoView({ behavior: 'smooth' });
}
