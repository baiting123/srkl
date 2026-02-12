// 游戏配置
const wishes = [
    "岁岁平安", "岁岁无忧", "岁岁欢愉", "岁岁常安",
    "岁岁如意", "岁岁顺遂", "岁岁安康", "岁岁康宁",
    "岁岁安稳", "岁岁皆欢喜", "岁岁常喜乐", "岁岁无烦忧",
    "岁岁常顺意", "岁岁皆胜意", "岁岁皆安然", "岁岁多喜乐",
    "岁岁有笑颜", "岁岁皆顺心", "岁岁长相安"
];

// 生日主题图标
const birthdayEmojis = [
    "🎈", "🎁", "🎀", "🎊", "🧁", "🍰", "🎂", "🍭", 
    "🍬", "🎉", "🎵", "🎶", "⭐", "✨", "💫", "🌟",
    "🎸", "🎹", "🎤", "🎧"
];

// 音符频率映射（C调）
const noteFrequencies = {
    '1': 523,   // C (do)
    '2': 587,   // D (re)
    '3': 659,   // E (mi)
    '4': 698,   // F (fa)
    '5': 784,   // G (sol)
    '6': 880,   // A (la)
    '7': 988,   // B (si)
    '1.': 1047, // C' (高音do)
    '2.': 1175, // D' (高音re)
    '3.': 1319, // E' (高音mi)
    '4.': 1397, // F' (高音fa)
    '5.': 1568, // G' (高音sol)
    '6.': 1760, // A' (高音la)
    '7.': 1976, // B' (高音si)
    '5.': 392,  // G. (低音sol)
    '6.': 440,  // A. (低音la)
    '7.': 494   // B. (低音si)
};

// 生日快乐歌的音符和时间轴（相对时间，单位：秒）
const songs = {
    birthday: {
        name: '生日快乐',
        artist: '经典歌曲',
        notes: [
            { note: 392, time: 0 },      // G - 祝
            { note: 392, time: 0.5 },    // G - 你
            { note: 440, time: 0.8 },    // A - 生
            { note: 392, time: 1.4 },    // G - 日
            { note: 523, time: 2.0 },    // C - 快
            { note: 494, time: 2.6 },    // B - 乐
            
            { note: 392, time: 3.6 },    // G - 祝
            { note: 392, time: 4.1 },    // G - 你
            { note: 440, time: 4.4 },    // A - 生
            { note: 392, time: 5.0 },    // G - 日
            { note: 587, time: 5.6 },    // D - 快
            { note: 523, time: 6.2 },    // C - 乐
            
            { note: 392, time: 7.2 },    // G - 祝
            { note: 392, time: 7.7 },    // G - 你
            { note: 784, time: 8.0 },    // G' - 生
            { note: 659, time: 8.6 },    // E - 日
            { note: 523, time: 9.2 },    // C - 快
            { note: 494, time: 9.8 },    // B - 乐
            { note: 440, time: 10.4 },   // A
            
            { note: 698, time: 11.4 },   // F - 祝
            { note: 698, time: 11.9 },   // F - 你
            { note: 659, time: 12.2 },   // E - 生
            { note: 523, time: 12.8 },   // C - 日
            { note: 587, time: 13.4 },   // D - 快
            { note: 523, time: 14.0 }    // C - 乐
        ],
        notesHard: [
            { note: 392, time: 0, track: 0 },      // G - 祝 - 左
            { note: 392, time: 0.5, track: 0 },    // G - 你 - 左
            { note: 440, time: 0.8, track: 1 },    // A - 生 - 中
            { note: 392, time: 1.4, track: 0 },    // G - 日 - 左
            { note: 523, time: 2.0, track: 2 },    // C - 快 - 右
            { note: 494, time: 2.6, track: 1 },    // B - 乐 - 中
            
            { note: 392, time: 3.6, track: 0 },    // G - 祝 - 左
            { note: 392, time: 4.1, track: 0 },    // G - 你 - 左
            { note: 440, time: 4.4, track: 1 },    // A - 生 - 中
            { note: 392, time: 5.0, track: 0 },    // G - 日 - 左
            { note: 587, time: 5.6, track: 2 },    // D - 快 - 右
            { note: 523, time: 6.2, track: 2 },    // C - 乐 - 右
            
            { note: 392, time: 7.2, track: 0 },    // G - 祝 - 左
            { note: 392, time: 7.7, track: 0 },    // G - 你 - 左
            { note: 784, time: 8.0, track: 2 },    // G' - 生 - 右
            { note: 659, time: 8.6, track: 1 },    // E - 日 - 中
            { note: 523, time: 9.2, track: 2 },    // C - 快 - 右
            { note: 494, time: 9.8, track: 1 },    // B - 乐 - 中
            { note: 440, time: 10.4, track: 1 },   // A - 中
            
            { note: 698, time: 11.4, track: 0 },   // F - 祝 - 左
            { note: 698, time: 11.9, track: 0 },   // F - 你 - 左
            { note: 659, time: 12.2, track: 1 },   // E - 生 - 中
            { note: 523, time: 12.8, track: 2 },   // C - 日 - 右
            { note: 587, time: 13.4, track: 2 },   // D - 快 - 右
            { note: 523, time: 14.0, track: 2 }    // C - 乐 - 右
        ]
    },
    twinkle: {
        name: '小星星',
        artist: '经典儿歌',
        multiTrack: true, // 多轨道模式
        notes: [
            { note: 523, time: 0, track: 0 },      // 1 - 左
            { note: 523, time: 0.5, track: 0 },    // 1 - 左
            { note: 784, time: 1.0, track: 1 },    // 5 - 中
            { note: 784, time: 1.5, track: 1 },    // 5 - 中
            { note: 880, time: 2.0, track: 2 },    // 6 - 右
            { note: 880, time: 2.5, track: 2 },    // 6 - 右
            { note: 784, time: 3.0, track: 1 },    // 5 - 中
            
            { note: 698, time: 4.0, track: 0 },    // 4 - 左
            { note: 698, time: 4.5, track: 0 },    // 4 - 左
            { note: 659, time: 5.0, track: 1 },    // 3 - 中
            { note: 659, time: 5.5, track: 1 },    // 3 - 中
            { note: 587, time: 6.0, track: 2 },    // 2 - 右
            { note: 587, time: 6.5, track: 2 },    // 2 - 右
            { note: 523, time: 7.0, track: 0 },    // 1 - 左
            
            { note: 784, time: 8.0, track: 1 },    // 5 - 中
            { note: 784, time: 8.5, track: 1 },    // 5 - 中
            { note: 698, time: 9.0, track: 0 },    // 4 - 左
            { note: 698, time: 9.5, track: 0 },    // 4 - 左
            { note: 659, time: 10.0, track: 2 },   // 3 - 右
            { note: 659, time: 10.5, track: 2 },   // 3 - 右
            { note: 587, time: 11.0, track: 1 }    // 2 - 中
        ]
    }
};

let currentSong = 'birthday';
let birthdaySong = songs.birthday.notes;

// 游戏状态
let canvas, ctx;
let notes = [];
let keys = {};
let gameRunning = false;
let gamePaused = false;
let score = 0;
let combo = 0;
let maxCombo = 0;
let collectedWishes = [];
let gameStartTime = 0;
let judgeLineY = 0;
let currentNoteIndex = 0;
let missedCount = 0;
let hitCount = 0;
let perfectCount = 0;
let goodCount = 0;
let okCount = 0;
let difficulty = 'easy';
let comboMultiplier = 1;
let isFreeRhythm = false; // 是否为自由节奏模式
let freeRhythmNoteIndex = 0; // 自由节奏模式当前音符索引
let isMemoryMode = false; // 是否为记忆模式
let isMultiTrack = false; // 是否为多轨道模式
let memoryPhase = 'demo'; // 记忆模式阶段：demo(演示) / play(演奏)
let memoryNoteIndex = 0; // 记忆模式当前音符索引
let memoryErrors = 0; // 记忆模式错误次数
let memoryStars = []; // 记忆模式的星星按钮
let memorySequence = []; // 记忆模式的音符序列
let backgroundParticles = []; // 背景粒子

// 背景粒子类
class BackgroundParticle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = -20;
        this.size = 12 + Math.random() * 15;
        this.speed = 0.8 + Math.random() * 1.2;
        this.emoji = ['✨', '⭐'][Math.floor(Math.random() * 2)]; // 只用星星
        this.opacity = 0.2 + Math.random() * 0.3;
        this.swing = Math.random() * Math.PI * 2;
        this.swingSpeed = 0.015 + Math.random() * 0.02;
    }
    
    update() {
        this.y += this.speed;
        this.swing += this.swingSpeed;
        return this.y < canvas.height + 50;
    }
    
    draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.font = `${this.size}px Arial`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        const swingX = Math.sin(this.swing) * 15;
        ctx.fillText(this.emoji, this.x + swingX, this.y);
        ctx.restore();
    }
}

// 成就系统
let achievements = [];
let unlockedAchievements = [];

// 排行榜数据
let leaderboard = [];

// 加载排行榜
function loadLeaderboard() {
    const saved = localStorage.getItem('birthdayGameLeaderboard');
    if (saved) {
        leaderboard = JSON.parse(saved);
    } else {
        leaderboard = [];
    }
}

// 保存排行榜
function saveLeaderboard() {
    localStorage.setItem('birthdayGameLeaderboard', JSON.stringify(leaderboard));
}

// 添加到排行榜
function addToLeaderboard(score, accuracy, maxCombo) {
    const date = new Date().toLocaleDateString('zh-CN');
    const difficultyText = difficulty === 'hard' ? '困难' : '简单';
    leaderboard.push({ score, date, difficulty: difficultyText, accuracy, maxCombo });
    
    leaderboard.sort((a, b) => b.score - a.score);
    leaderboard = leaderboard.slice(0, 3);
    
    saveLeaderboard();
}

// 显示排行榜
function showLeaderboard() {
    const container = document.getElementById('leaderboardList');
    container.innerHTML = '';
    
    if (leaderboard.length === 0) {
        container.innerHTML = '<div class="no-records">暂无记录</div>';
        return;
    }
    
    leaderboard.forEach((record, index) => {
        const item = document.createElement('div');
        item.className = 'leaderboard-item';
        
        const rank = document.createElement('span');
        rank.className = 'rank';
        rank.textContent = `#${index + 1}`;
        
        const scoreSpan = document.createElement('span');
        scoreSpan.className = 'score-value';
        scoreSpan.textContent = record.score;
        
        const difficultySpan = document.createElement('span');
        difficultySpan.className = 'difficulty';
        difficultySpan.textContent = record.difficulty || '简单';
        difficultySpan.style.color = (record.difficulty === '困难') ? '#ff6b6b' : '#51cf66';
        
        const dateSpan = document.createElement('span');
        dateSpan.className = 'date';
        dateSpan.textContent = record.date;
        
        item.appendChild(rank);
        item.appendChild(scoreSpan);
        item.appendChild(difficultySpan);
        item.appendChild(dateSpan);
        
        container.appendChild(item);
    });
}

// 成就定义
function initAchievements() {
    achievements = [
        { id: 'first_perfect', name: '首次Perfect', desc: '第一次获得Perfect判定', icon: '⭐', unlocked: false },
        { id: 'combo_10', name: '连击新手', desc: '达成10连击', icon: '🔥', unlocked: false },
        { id: 'combo_20', name: '连击高手', desc: '达成20连击', icon: '💥', unlocked: false },
        { id: 'combo_27', name: '全连击', desc: '达成27连击（全部击中）', icon: '👑', unlocked: false },
        { id: 'accuracy_90', name: '精准打击', desc: '准确率达到90%', icon: '🎯', unlocked: false },
        { id: 'accuracy_100', name: '完美无瑕', desc: '准确率100%', icon: '💎', unlocked: false },
        { id: 'score_1000', name: '千分达成', desc: '单局得分超过1000', icon: '🏆', unlocked: false },
        { id: 'score_2000', name: '两千突破', desc: '单局得分超过2000', icon: '👏', unlocked: false },
        { id: 'hard_clear', name: '困难挑战', desc: '通关困难模式', icon: '🔥', unlocked: false }
    ];
    
    const saved = localStorage.getItem('birthdayGameAchievements');
    if (saved) {
        const savedAchievements = JSON.parse(saved);
        achievements.forEach(ach => {
            const savedAch = savedAchievements.find(s => s.id === ach.id);
            if (savedAch) ach.unlocked = savedAch.unlocked;
        });
    }
}

// 检查并解锁成就
function checkAchievements() {
    const totalNotes = birthdaySong.length;
    const accuracy = totalNotes > 0 ? Math.round((hitCount / totalNotes) * 100) : 0;
    
    const newUnlocked = [];
    
    if (perfectCount > 0 && !achievements.find(a => a.id === 'first_perfect').unlocked) {
        unlockAchievement('first_perfect');
        newUnlocked.push(achievements.find(a => a.id === 'first_perfect'));
    }
    
    if (maxCombo >= 10 && !achievements.find(a => a.id === 'combo_10').unlocked) {
        unlockAchievement('combo_10');
        newUnlocked.push(achievements.find(a => a.id === 'combo_10'));
    }
    
    if (maxCombo >= 20 && !achievements.find(a => a.id === 'combo_20').unlocked) {
        unlockAchievement('combo_20');
        newUnlocked.push(achievements.find(a => a.id === 'combo_20'));
    }
    
    if (maxCombo >= 27 && !achievements.find(a => a.id === 'combo_27').unlocked) {
        unlockAchievement('combo_27');
        newUnlocked.push(achievements.find(a => a.id === 'combo_27'));
    }
    
    if (accuracy >= 90 && !achievements.find(a => a.id === 'accuracy_90').unlocked) {
        unlockAchievement('accuracy_90');
        newUnlocked.push(achievements.find(a => a.id === 'accuracy_90'));
    }
    
    if (accuracy === 100 && !achievements.find(a => a.id === 'accuracy_100').unlocked) {
        unlockAchievement('accuracy_100');
        newUnlocked.push(achievements.find(a => a.id === 'accuracy_100'));
    }
    
    if (score >= 1000 && !achievements.find(a => a.id === 'score_1000').unlocked) {
        unlockAchievement('score_1000');
        newUnlocked.push(achievements.find(a => a.id === 'score_1000'));
    }
    
    if (score >= 2000 && !achievements.find(a => a.id === 'score_2000').unlocked) {
        unlockAchievement('score_2000');
        newUnlocked.push(achievements.find(a => a.id === 'score_2000'));
    }
    
    if (difficulty === 'hard' && !achievements.find(a => a.id === 'hard_clear').unlocked) {
        unlockAchievement('hard_clear');
        newUnlocked.push(achievements.find(a => a.id === 'hard_clear'));
    }
    
    return newUnlocked;
}

// 解锁成就
function unlockAchievement(id) {
    const ach = achievements.find(a => a.id === id);
    if (ach && !ach.unlocked) {
        ach.unlocked = true;
        localStorage.setItem('birthdayGameAchievements', JSON.stringify(achievements));
    }
}

// 显示成就
function showAchievements(newUnlocked) {
    const container = document.getElementById('achievementsContainer');
    container.innerHTML = '';
    
    if (newUnlocked.length === 0) return;
    
    const title = document.createElement('h3');
    title.className = 'achievements-title';
    title.textContent = '🎉 新成就解锁！';
    container.appendChild(title);
    
    newUnlocked.forEach((ach, index) => {
        setTimeout(() => {
            const achItem = document.createElement('div');
            achItem.className = 'achievement-item';
            achItem.innerHTML = `
                <span class="ach-icon">${ach.icon}</span>
                <div class="ach-info">
                    <div class="ach-name">${ach.name}</div>
                    <div class="ach-desc">${ach.desc}</div>
                </div>
            `;
            container.appendChild(achItem);
        }, index * 300);
    });
}

// 音效
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

function playNote(frequency) {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = frequency;
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
}

function playVictorySound() {
    const victoryNotes = [523, 587, 659, 784, 880];
    victoryNotes.forEach((freq, index) => {
        setTimeout(() => {
            playNote(freq);
        }, index * 200);
    });
}

// 记忆模式星星按钮类
class MemoryStar {
    constructor(note, index, x, y) {
        this.note = note;
        this.index = index;
        this.x = x;
        this.y = y;
        this.size = 60;
        this.glowing = false;
        this.glowTime = 0;
        this.color = this.getNoteColor(note);
    }
    
    getNoteColor(note) {
        const colors = {
            523: '#FF6B9D',  // 1 - 粉色
            587: '#FFA07A',  // 2 - 橙色
            659: '#FFD700',  // 3 - 金色
            698: '#98FB98',  // 4 - 浅绿
            784: '#87CEEB',  // 5 - 天蓝
            880: '#DDA0DD',  // 6 - 紫色
            988: '#FF69B4'   // 7 - 深粉
        };
        return colors[note] || '#FFFFFF';
    }
    
    draw(ctx) {
        ctx.save();
        
        // 发光效果
        if (this.glowing) {
            ctx.shadowColor = this.color;
            ctx.shadowBlur = 30;
            this.glowTime++;
            if (this.glowTime > 30) {
                this.glowing = false;
                this.glowTime = 0;
            }
        }
        
        // 绘制星星
        ctx.fillStyle = this.glowing ? this.color : 'rgba(255, 255, 255, 0.3)';
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 3;
        
        this.drawStar(ctx, this.x, this.y, 5, this.size / 2, this.size / 4);
        
        ctx.restore();
    }
    
    drawStar(ctx, cx, cy, spikes, outerRadius, innerRadius) {
        let rot = Math.PI / 2 * 3;
        let x = cx;
        let y = cy;
        const step = Math.PI / spikes;
        
        ctx.beginPath();
        ctx.moveTo(cx, cy - outerRadius);
        
        for (let i = 0; i < spikes; i++) {
            x = cx + Math.cos(rot) * outerRadius;
            y = cy + Math.sin(rot) * outerRadius;
            ctx.lineTo(x, y);
            rot += step;
            
            x = cx + Math.cos(rot) * innerRadius;
            y = cy + Math.sin(rot) * innerRadius;
            ctx.lineTo(x, y);
            rot += step;
        }
        
        ctx.lineTo(cx, cy - outerRadius);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }
    
    contains(x, y) {
        const dx = x - this.x;
        const dy = y - this.y;
        return Math.sqrt(dx * dx + dy * dy) < this.size / 2;
    }
    
    startGlow() {
        this.glowing = true;
        this.glowTime = 0;
    }
}

// 音符对象
class Note {
    constructor(noteData, index) {
        this.noteData = noteData;
        this.index = index;
        this.emoji = birthdayEmojis[Math.floor(Math.random() * birthdayEmojis.length)];
        this.width = 70;
        this.height = 70;
        
        // 多轨道模式：根据轨道设置X位置
        if (isMultiTrack && noteData.track !== undefined) {
            const trackWidth = canvas.width / 3;
            this.x = trackWidth * noteData.track + trackWidth / 2 - this.width / 2;
            this.track = noteData.track;
        } else {
            // 随机X位置（在画面宽度范围内，留出边距）
            const margin = 50;
            this.x = margin + Math.random() * (canvas.width - this.width - margin * 2);
            this.track = -1;
        }
        
        // 计算初始Y位置（从屏幕上方开始）
        const fallTime = difficulty === 'hard' ? 1.5 : 3; // 困难模式速度加倍
        const fallDistance = judgeLineY + 100;
        this.speed = fallDistance / (fallTime * 60); // 每帧移动距离
        this.y = -this.height - (noteData.time * 60 * this.speed);
        
        this.hit = false;
        this.missed = false;
        this.glowing = false;
        this.glowTime = 0;
    }
    
    update() {
        if (!this.hit) {
            this.y += this.speed;
            
            // 检查是否错过
            if (this.y > judgeLineY + 100 && !this.missed) {
                this.missed = true;
                combo = 0;
                missedCount++;
            }
        }
        
        // 发光效果
        if (this.glowing) {
            this.glowTime++;
            if (this.glowTime > 20) {
                return false; // 移除这个音符
            }
        }
        
        // 如果音符掉出屏幕底部，移除它
        if (this.y > canvas.height + 100) {
            return false;
        }
        
        return true;
    }
    
    draw() {
        if (this.hit && this.glowing) {
            // 发光爆裂效果
            ctx.save();
            const scale = 1 + (this.glowTime / 10);
            const alpha = 1 - (this.glowTime / 20);
            
            ctx.globalAlpha = alpha;
            ctx.shadowColor = '#ffd700';
            ctx.shadowBlur = 40;
            ctx.font = `${60 * scale}px Arial`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(this.emoji, this.x + this.width / 2, this.y + this.height / 2);
            ctx.restore();
        } else if (!this.hit) {
            // 正常显示
            ctx.save();
            
            // 接近判定线时发光
            const distance = Math.abs(this.y + this.height / 2 - judgeLineY);
            if (distance < 80) {
                const intensity = 1 - (distance / 80);
                ctx.shadowColor = '#ffd700';
                ctx.shadowBlur = 20 + (30 * intensity);
            }
            
            ctx.font = '60px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(this.emoji, this.x + this.width / 2, this.y + this.height / 2);
            ctx.restore();
        }
    }
    
    checkHit() {
        const distance = Math.abs(this.y + this.height / 2 - judgeLineY);
        
        if (distance < 30) {
            return 'perfect';
        } else if (distance < 60) {
            return 'good';
        } else if (distance < 100) {
            return 'ok';
        }
        return null;
    }
}

// 显示祝福语
function showWishMessage(wish) {
    const wishDisplay = document.getElementById('wishDisplay');
    wishDisplay.textContent = wish;
    wishDisplay.classList.add('show');
    
    setTimeout(() => {
        wishDisplay.classList.remove('show');
    }, 2000);
}

// 显示判定结果
function showJudgement(result, x, y) {
    const judgement = document.createElement('div');
    judgement.className = 'judgement';
    judgement.textContent = result.toUpperCase();
    judgement.style.position = 'fixed';
    judgement.style.left = x + 'px';
    judgement.style.top = y + 'px';
    judgement.style.fontSize = '30px';
    judgement.style.fontWeight = 'bold';
    judgement.style.color = result === 'perfect' ? '#ffd700' : result === 'good' ? '#00ff00' : '#ffffff';
    judgement.style.textShadow = '0 0 10px currentColor';
    judgement.style.pointerEvents = 'none';
    judgement.style.zIndex = '1000';
    judgement.style.animation = 'judgeFloat 1s ease-out';
    
    document.body.appendChild(judgement);
    
    setTimeout(() => judgement.remove(), 1000);
}

// 创建爆炸效果
function createExplosion(x, y, color = 'gold') {
    const particles = ['✨', '💥', '⭐', '💫', '🌟', '🎉', '🎊', '💖'];
    const particleCount = color === 'gold' ? 20 : 15;
    
    for (let i = 0; i < particleCount; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.textContent = particles[Math.floor(Math.random() * particles.length)];
            particle.style.position = 'fixed';
            particle.style.left = x + 'px';
            particle.style.top = y + 'px';
            particle.style.fontSize = (20 + Math.random() * 30) + 'px';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '999';
            
            // 颜色滤镜
            if (color === 'gold') {
                particle.style.filter = 'hue-rotate(0deg) brightness(1.2)';
            } else if (color === 'lime') {
                particle.style.filter = 'hue-rotate(90deg) brightness(1.2)';
            } else {
                particle.style.filter = 'hue-rotate(180deg)';
            }
            
            const angle = (Math.PI * 2 * i) / particleCount;
            const velocity = 3 + Math.random() * 3;
            const vx = Math.cos(angle) * velocity;
            const vy = Math.sin(angle) * velocity;
            
            let posX = x;
            let posY = y;
            let opacity = 1;
            let rotation = 0;
            
            const animate = () => {
                posX += vx;
                posY += vy;
                opacity -= 0.025;
                rotation += 15;
                
                particle.style.left = posX + 'px';
                particle.style.top = posY + 'px';
                particle.style.opacity = opacity;
                particle.style.transform = `rotate(${rotation}deg)`;
                
                if (opacity > 0) {
                    requestAnimationFrame(animate);
                } else {
                    particle.remove();
                }
            };
            
            document.body.appendChild(particle);
            animate();
        }, i * 8);
    }
}

// 绘制闪电特效
function drawLightning(x, y, distance) {
    ctx.save();
    
    // 根据距离计算透明度和强度
    const intensity = 1 - (distance / 80);
    const alpha = intensity * 0.8;
    
    // 闪电颜色（金色到白色渐变）
    const gradient = ctx.createLinearGradient(x, y - 40, x, y + 40);
    gradient.addColorStop(0, `rgba(255, 255, 100, ${alpha})`);
    gradient.addColorStop(0.5, `rgba(255, 215, 0, ${alpha * 1.5})`);
    gradient.addColorStop(1, `rgba(255, 255, 255, ${alpha})`);
    
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 3 * intensity;
    ctx.shadowColor = '#ffd700';
    ctx.shadowBlur = 15 * intensity;
    
    // 绘制闪电路径（锯齿状）
    ctx.beginPath();
    ctx.moveTo(x, y - 40);
    
    const segments = 6;
    const segmentHeight = 80 / segments;
    let currentX = x;
    let currentY = y - 40;
    
    for (let i = 0; i < segments; i++) {
        const offsetX = (Math.random() - 0.5) * 20 * intensity;
        currentX += offsetX;
        currentY += segmentHeight;
        ctx.lineTo(currentX, currentY);
    }
    
    ctx.stroke();
    
    // 绘制闪电分支
    if (intensity > 0.5) {
        ctx.lineWidth = 2 * intensity;
        ctx.beginPath();
        ctx.moveTo(x, y - 20);
        ctx.lineTo(x + 15 * intensity, y - 10);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(x, y + 10);
        ctx.lineTo(x - 15 * intensity, y + 20);
        ctx.stroke();
    }
    
    ctx.restore();
}

// 游戏循环
function gameLoop() {
    if (!gameRunning || gamePaused) return;
    
    // 清空画布
    ctx.fillStyle = 'rgba(26, 26, 46, 0.95)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // 绘制星星背景
    ctx.fillStyle = 'white';
    for (let i = 0; i < 50; i++) {
        const x = (i * 137.5) % canvas.width;
        const y = (i * 217.3) % canvas.height;
        ctx.fillRect(x, y, 2, 2);
    }
    
    // 更新和绘制背景粒子（减少数量）
    if (Math.random() < 0.03) {
        backgroundParticles.push(new BackgroundParticle());
    }
    for (let i = backgroundParticles.length - 1; i >= 0; i--) {
        if (!backgroundParticles[i].update()) {
            backgroundParticles.splice(i, 1);
        } else {
            backgroundParticles[i].draw();
        }
    }
    
    // 自由节奏模式
    if (isFreeRhythm) {
        // 绘制判定线
        ctx.save();
        ctx.strokeStyle = '#ffd700';
        ctx.lineWidth = 4;
        ctx.shadowColor = '#ffd700';
        ctx.shadowBlur = 20;
        ctx.beginPath();
        ctx.moveTo(0, judgeLineY);
        ctx.lineTo(canvas.width, judgeLineY);
        ctx.stroke();
        ctx.restore();
        
        // 显示当前音符提示
        if (freeRhythmNoteIndex < birthdaySong.length) {
            ctx.save();
            ctx.fillStyle = '#ffd700';
            ctx.font = '40px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('♪', canvas.width / 2, judgeLineY - 80);
            ctx.font = '20px Arial';
            ctx.fillText(`${freeRhythmNoteIndex + 1} / ${birthdaySong.length}`, canvas.width / 2, judgeLineY - 120);
            ctx.restore();
        }
        
        requestAnimationFrame(gameLoop);
        return;
    }
    
    // 记忆模式
    if (isMemoryMode) {
        // 绘制判定线
        ctx.save();
        ctx.strokeStyle = memoryPhase === 'demo' ? '#00ffff' : '#ffd700';
        ctx.lineWidth = 4;
        ctx.shadowColor = memoryPhase === 'demo' ? '#00ffff' : '#ffd700';
        ctx.shadowBlur = 20;
        ctx.beginPath();
        ctx.moveTo(0, judgeLineY);
        ctx.lineTo(canvas.width, judgeLineY);
        ctx.stroke();
        ctx.restore();
        
        // 绘制星星按钮
        memoryStars.forEach(star => star.draw(ctx));
        
        // 显示进度
        if (memoryPhase === 'play' && memoryNoteIndex < birthdaySong.length) {
            ctx.save();
            ctx.fillStyle = '#ffd700';
            ctx.font = '40px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('⭐', canvas.width / 2, 80);
            ctx.font = '20px Arial';
            ctx.fillText(`${memoryNoteIndex + 1} / ${birthdaySong.length}`, canvas.width / 2, 40);
            ctx.restore();
        } else if (memoryPhase === 'demo') {
            ctx.save();
            ctx.fillStyle = '#00ffff';
            ctx.font = '30px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('🎵 听旋律...', canvas.width / 2, 50);
            ctx.restore();
        }
        
        requestAnimationFrame(gameLoop);
        return;
    }
    
    // 普通节奏模式
    // 绘制判定线（根据连击数改变颜色）
    ctx.save();
    if (combo >= 20) {
        ctx.strokeStyle = '#ff00ff';
        ctx.shadowColor = '#ff00ff';
    } else if (combo >= 10) {
        ctx.strokeStyle = '#00ffff';
        ctx.shadowColor = '#00ffff';
    } else {
        ctx.strokeStyle = '#ffd700';
        ctx.shadowColor = '#ffd700';
    }
    ctx.lineWidth = 4;
    ctx.shadowBlur = 20 + (combo * 2);
    ctx.beginPath();
    ctx.moveTo(0, judgeLineY);
    ctx.lineTo(canvas.width, judgeLineY);
    ctx.stroke();
    ctx.restore();
    
    // 绘制闪电特效（当音符接近判定线时）
    for (let note of notes) {
        if (!note.hit && !note.missed) {
            const distance = Math.abs(note.y + note.height / 2 - judgeLineY);
            if (distance < 80) {
                drawLightning(note.x + note.width / 2, judgeLineY, distance);
            }
        }
    }
    
    // 多轨道模式：绘制轨道分隔线
    if (isMultiTrack) {
        ctx.save();
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.lineWidth = 2;
        const trackWidth = canvas.width / 3;
        for (let i = 1; i < 3; i++) {
            ctx.beginPath();
            ctx.moveTo(trackWidth * i, 0);
            ctx.lineTo(trackWidth * i, canvas.height);
            ctx.stroke();
        }
        ctx.restore();
    }
    
    // 绘制判定区域提示
    ctx.save();
    ctx.fillStyle = combo >= 10 ? 'rgba(255, 0, 255, 0.15)' : 'rgba(255, 215, 0, 0.1)';
    ctx.fillRect(0, judgeLineY - 50, canvas.width, 100);
    ctx.restore();
    
    // 更新和绘制音符
    for (let i = notes.length - 1; i >= 0; i--) {
        if (!notes[i].update()) {
            notes.splice(i, 1);
        } else {
            notes[i].draw();
        }
    }
    
    // 更新进度条
    updateProgressBar();
    
    // 检查是否通关或游戏结束
    if (notes.length === 0 && currentNoteIndex >= birthdaySong.length) {
        victory();
        return;
    }
    
    requestAnimationFrame(gameLoop);
}

// 更新进度条
function updateProgressBar() {
    const totalNotes = birthdaySong.length;
    const processedNotes = hitCount + missedCount;
    const progress = (processedNotes / totalNotes) * 100;
    
    const progressBar = document.getElementById('progressBar');
    if (progressBar) {
        progressBar.style.width = progress + '%';
    }
}

// 处理点击/按键
function handleHit(clickX, clickY) {
    if (!gameRunning || gamePaused) return;
    
    // 记忆模式
    if (isMemoryMode) {
        if (memoryPhase === 'demo') return; // 演示阶段不响应
        
        if (memoryNoteIndex >= birthdaySong.length) {
            victory();
            return;
        }
        
        // 检查点击的是哪个星星
        if (clickX === undefined || clickY === undefined) return;
        
        let clickedStar = null;
        for (let star of memoryStars) {
            if (star.contains(clickX, clickY)) {
                clickedStar = star;
                break;
            }
        }
        
        if (!clickedStar) return;
        
        const correctNote = birthdaySong[memoryNoteIndex].note;
        const isCorrect = clickedStar.note === correctNote;
        
        // 播放音符
        playNote(clickedStar.note);
        clickedStar.startGlow();
        
        const rect = canvas.getBoundingClientRect();
        const x = rect.left + clickedStar.x;
        const y = rect.top + clickedStar.y;
        
        if (isCorrect) {
            // 正确
            createExplosion(x, y, 'gold');
            showJudgement('perfect', x, y);
            
            score += 100;
            combo++;
            hitCount++;
            perfectCount++;
            
            if (combo > maxCombo) maxCombo = combo;
            
            const wishIndex = memoryNoteIndex % wishes.length;
            const wish = wishes[wishIndex];
            if (!collectedWishes.includes(wish)) collectedWishes.push(wish);
            showWishMessage(wish);
            
            memoryNoteIndex++;
        } else {
            // 错误
            createExplosion(x, y, 'red');
            showJudgement('miss', x, y);
            combo = 0;
            memoryErrors++;
            missedCount++;
        }
        
        updateGameUI();
        
        const progress = (memoryNoteIndex / birthdaySong.length) * 100;
        document.getElementById('progressBar').style.width = progress + '%';
        return;
    }
    
    // 自由节奏模式
    if (isFreeRhythm) {
        if (freeRhythmNoteIndex >= birthdaySong.length) {
            // 所有音符已演奏完
            victory();
            return;
        }
        
        const noteData = birthdaySong[freeRhythmNoteIndex];
        playNote(noteData.note);
        
        // 显示音符效果
        const rect = canvas.getBoundingClientRect();
        const x = rect.left + canvas.width / 2;
        const y = rect.top + judgeLineY;
        
        createExplosion(x, y, 'gold');
        showJudgement('perfect', x, y);
        
        // 更新分数
        score += 100;
        combo++;
        hitCount++;
        perfectCount++;
        
        if (combo > maxCombo) {
            maxCombo = combo;
        }
        
        // 显示祝福语
        const wishIndex = freeRhythmNoteIndex % wishes.length;
        const wish = wishes[wishIndex];
        if (!collectedWishes.includes(wish)) {
            collectedWishes.push(wish);
        }
        showWishMessage(wish);
        
        freeRhythmNoteIndex++;
        updateGameUI();
        
        // 更新进度
        const progress = (freeRhythmNoteIndex / birthdaySong.length) * 100;
        document.getElementById('progressBar').style.width = progress + '%';
        
        return;
    }
    
    // 普通节奏模式
    let closestNote = null;
    let minDistance = Infinity;
    
    for (let note of notes) {
        if (!note.hit && !note.missed) {
            const yDistance = Math.abs(note.y + note.height / 2 - judgeLineY);
            
            if (clickX !== undefined) {
                // 多轨道模式：检查点击的轨道是否匹配
                if (isMultiTrack && note.track !== undefined) {
                    const trackWidth = canvas.width / 3;
                    const clickedTrack = Math.floor(clickX / trackWidth);
                    if (clickedTrack !== note.track) continue;
                } else {
                    const xDistance = Math.abs(clickX - (note.x + note.width / 2));
                    if (xDistance > note.width) continue;
                }
            }
            
            if (yDistance < minDistance) {
                minDistance = yDistance;
                closestNote = note;
            }
        }
    }
    
    if (closestNote) {
        const result = closestNote.checkHit();
        
        if (result) {
            closestNote.hit = true;
            closestNote.glowing = true;
            hitCount++;
            
            playNote(closestNote.noteData.note);
            
            const rect = canvas.getBoundingClientRect();
            showJudgement(result, rect.left + closestNote.x + closestNote.width / 2, rect.top + closestNote.y);
            
            const explosionColor = result === 'perfect' ? 'gold' : result === 'good' ? 'lime' : 'white';
            createExplosion(rect.left + closestNote.x + closestNote.width / 2, rect.top + closestNote.y + closestNote.height / 2, explosionColor);
            
            if (result === 'perfect') {
                perfectCount++;
                combo++;
                comboMultiplier = 1 + Math.floor(combo / 10) * 0.5;
                score += Math.floor(100 * comboMultiplier);
            } else if (result === 'good') {
                goodCount++;
                combo++;
                comboMultiplier = 1 + Math.floor(combo / 10) * 0.5;
                score += Math.floor(50 * comboMultiplier);
            } else {
                okCount++;
                score += 20;
                combo = 0;
                comboMultiplier = 1;
            }
            
            if (combo > maxCombo) {
                maxCombo = combo;
            }
            
            const wishIndex = closestNote.index % wishes.length;
            const wish = wishes[wishIndex];
            if (!collectedWishes.includes(wish)) {
                collectedWishes.push(wish);
            }
            showWishMessage(wish);
            
            updateGameUI();
        }
    } else {
        showMiss();
    }
}

// 显示MISS提示
function showMiss() {
    const rect = canvas.getBoundingClientRect();
    const missText = document.createElement('div');
    missText.className = 'miss-text';
    missText.textContent = 'MISS';
    missText.style.position = 'fixed';
    missText.style.left = rect.left + canvas.width / 2 + 'px';
    missText.style.top = rect.top + judgeLineY + 'px';
    missText.style.fontSize = '40px';
    missText.style.fontWeight = 'bold';
    missText.style.color = '#ff0000';
    missText.style.textShadow = '0 0 10px #ff0000';
    missText.style.pointerEvents = 'none';
    missText.style.zIndex = '1000';
    missText.style.animation = 'missFloat 1s ease-out';
    missText.style.transform = 'translate(-50%, -50%)';
    
    document.body.appendChild(missText);
    setTimeout(() => missText.remove(), 1000);
}

// 更新游戏UI
function updateGameUI() {
    document.getElementById('scoreDisplay').textContent = score;
    document.getElementById('comboDisplay').textContent = combo;
    
    const totalNotes = birthdaySong.length;
    const processedNotes = hitCount + missedCount;
    const accuracy = processedNotes > 0 ? Math.round((hitCount / processedNotes) * 100) : 100;
    document.getElementById('accuracyDisplay').textContent = accuracy + '%';
}

// 选择歌曲
function selectSong(songId) {
    currentSong = songId;
    birthdaySong = songs[songId].notes;
    
    // 隐藏歌曲选择，显示难度选择
    document.getElementById('songSelection').style.display = 'none';
    document.getElementById('difficultySelection').style.display = 'block';
}

// 返回歌曲选择
function backToSongSelection() {
    document.getElementById('songSelection').style.display = 'block';
    document.getElementById('difficultySelection').style.display = 'none';
}

// 设置难度
function setDifficulty(level) {
    difficulty = level;
    document.getElementById('startScreen').classList.add('hidden');
    document.getElementById('gameScreen').classList.add('active');
    initGame();
}

// 初始化游戏
function initGame() {
    console.log('=== 开始游戏 ===');
    
    try {
        const startScreen = document.getElementById('startScreen');
        const gameScreen = document.getElementById('gameScreen');
        
        if (!startScreen || !gameScreen) {
            console.error('找不到界面元素');
            return;
        }
        
        startScreen.classList.add('hidden');
        gameScreen.classList.add('active');
        
        canvas = document.getElementById('gameCanvas');
        if (!canvas) {
            console.error('找不到画布元素');
            return;
        }
        
        ctx = canvas.getContext('2d');
        
        const container = canvas.parentElement;
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
        
        judgeLineY = canvas.height * 0.75;
        
        // 初始化游戏状态
        notes = [];
        score = 0;
        combo = 0;
        maxCombo = 0;
        missedCount = 0;
        hitCount = 0;
        perfectCount = 0;
        goodCount = 0;
        okCount = 0;
        collectedWishes = [];
        currentNoteIndex = 0;
        gameStartTime = Date.now();
        gamePaused = false;
        comboMultiplier = 1;
        freeRhythmNoteIndex = 0;
        memoryNoteIndex = 0;
        memoryErrors = 0;
        
        // 检查游戏模式
        const songData = songs[currentSong];
        isFreeRhythm = songData.freeRhythm || false;
        isMemoryMode = songData.memoryMode || false;
        isMultiTrack = songData.multiTrack || false;
        
        // 困难模式下，如果有 notesHard，使用多轨道模式
        if (difficulty === 'hard' && songData.notesHard) {
            birthdaySong = songData.notesHard;
            isMultiTrack = true;
        } else {
            birthdaySong = songData.notes;
        }
        
        if (isFreeRhythm) {
            // 自由节奏模式
            document.querySelector('.controls-hint').innerHTML = '<p>点击屏幕演奏音符</p><p>按照自己的节奏弹奏歌曲！</p>';
        } else if (isMemoryMode) {
            // 记忆模式
            memoryPhase = 'demo';
            memorySequence = birthdaySong;
            document.querySelector('.controls-hint').innerHTML = '<p>🎵 先听一遍旋律...</p><p>记住星星闪烁的顺序！</p>';
            
            // 创建星星按钮（六宫格排列：3列2行）
            memoryStars = [];
            const uniqueNotes = [...new Set(birthdaySong.map(n => n.note))];
            
            // 六宫格布局：3列2行
            const cols = 3;
            const rows = 2;
            const topPadding = 200; // 顶部留空间
            const sidePadding = 60; // 左右边距
            const gridWidth = canvas.width - sidePadding * 2;
            const verticalSpacing = 200; // 两行之间的垂直间距
            const cellWidth = gridWidth / (cols - 1);
            
            uniqueNotes.forEach((note, index) => {
                const col = index % cols;
                const row = Math.floor(index / cols);
                const x = sidePadding + col * cellWidth;
                const y = topPadding + row * verticalSpacing;
                memoryStars.push(new MemoryStar(note, index, x, y));
            });
            
            // 自动播放演示
            playMemoryDemo();
        } else {
            // 普通节奏模式
            birthdaySong.forEach((noteData, index) => {
                notes.push(new Note(noteData, index));
            });
            currentNoteIndex = birthdaySong.length;
        }
        
        updateGameUI();
        gameRunning = true;
        gameLoop();
        
    } catch (error) {
        console.error('启动游戏时出错:', error);
    }
}

// 播放记忆模式演示
function playMemoryDemo() {
    let index = 0;
    const interval = 600;
    
    function playNext() {
        if (index >= memorySequence.length) {
            setTimeout(() => {
                memoryPhase = 'play';
                document.querySelector('.controls-hint').innerHTML = '<p>🎹 现在轮到你了！</p><p>点击星星重现刚才的旋律</p>';
            }, 1000);
            return;
        }
        
        const noteData = memorySequence[index];
        playNote(noteData.note);
        
        // 找到对应的星星并让它发光
        const star = memoryStars.find(s => s.note === noteData.note);
        if (star) {
            star.startGlow();
        }
        
        index++;
        setTimeout(playNext, interval);
    }
    
    playNext();
}

// 暂停游戏
function pauseGame() {
    if (!gameRunning || gamePaused) return;
    gamePaused = true;
    document.getElementById('pauseScreen').classList.add('active');
}

// 恢复游戏
function resumeGame() {
    if (!gameRunning || !gamePaused) return;
    gamePaused = false;
    document.getElementById('pauseScreen').classList.remove('active');
    gameLoop();
}

// 退出游戏
function quitGame() {
    gameRunning = false;
    gamePaused = false;
    document.getElementById('pauseScreen').classList.remove('active');
    document.getElementById('gameScreen').classList.remove('active');
    document.getElementById('startScreen').classList.remove('hidden');
    
    // 重置到歌曲选择界面
    document.getElementById('songSelection').style.display = 'block';
    document.getElementById('difficultySelection').style.display = 'none';
}

// 通关/结束
function victory() {
    gameRunning = false;
    
    playVictorySound();
    
    const totalNotes = birthdaySong.length;
    const accuracy = totalNotes > 0 ? Math.round((hitCount / totalNotes) * 100) : 0;
    
    // 添加到排行榜
    addToLeaderboard(score, accuracy, maxCombo);
    
    // 检查成就
    const newUnlocked = checkAchievements();
    
    document.getElementById('victoryScreen').classList.add('active');
    document.getElementById('finalScore').textContent = score;
    document.getElementById('finalAccuracy').textContent = accuracy + '%';
    document.getElementById('maxCombo').textContent = maxCombo;
    
    // 更新标题根据表现
    const titleElement = document.querySelector('.victory-title');
    if (accuracy >= 90) {
        titleElement.textContent = '🎉 完美演奏！🎉';
    } else if (accuracy >= 70) {
        titleElement.textContent = '🎵 不错的表现！🎵';
    } else if (accuracy >= 50) {
        titleElement.textContent = '🎶 继续加油！🎶';
    } else {
        titleElement.textContent = '🎮 游戏结束 🎮';
    }
    
    // 显示成就
    showAchievements(newUnlocked);
    
    // 显示排行榜
    showLeaderboard();
    
    createVictoryCelebration();
}

// 分享结果
function shareResult() {
    const totalNotes = birthdaySong.length;
    const accuracy = totalNotes > 0 ? Math.round((hitCount / totalNotes) * 100) : 0;
    const difficultyText = difficulty === 'hard' ? '困难' : '简单';
    const songInfo = songs[currentSong];
    
    const shareText = `🎂 生日快乐音游 🎂
歌曲: ${songInfo.name} - ${songInfo.artist}
难度: ${difficultyText}
得分: ${score}
准确率: ${accuracy}%
最高连击: ${maxCombo}
Perfect: ${perfectCount} | Good: ${goodCount} | OK: ${okCount}

快来挑战吧！`;
    
    if (navigator.share) {
        navigator.share({
            title: '生日快乐音游成绩',
            text: shareText
        }).catch(err => console.log('分享失败', err));
    } else {
        // 复制到剪贴板
        navigator.clipboard.writeText(shareText).then(() => {
            alert('成绩已复制到剪贴板！');
        }).catch(() => {
            alert(shareText);
        });
    }
}

// 庆祝特效
function createVictoryCelebration() {
    const emojis = ['🎉', '✨', '🌟'];
    
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            confetti.style.position = 'fixed';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-50px';
            confetti.style.fontSize = (15 + Math.random() * 20) + 'px';
            confetti.style.zIndex = '10000';
            confetti.style.pointerEvents = 'none';
            confetti.style.opacity = '0.7';
            
            const duration = 2 + Math.random() * 1.5;
            confetti.style.animation = `fall ${duration}s ease-in`;
            
            document.body.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), duration * 1000);
        }, i * 80);
    }
}

// 重新开始
function restartGame() {
    document.getElementById('victoryScreen').classList.remove('active');
    document.getElementById('gameScreen').classList.remove('active');
    document.getElementById('startScreen').classList.remove('hidden');
    
    // 重置到歌曲选择界面
    document.getElementById('songSelection').style.display = 'block';
    document.getElementById('difficultySelection').style.display = 'none';
}

// 键盘和触摸事件
document.addEventListener('keydown', (e) => {
    if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        // 对于记忆模式，空格键不做任何操作（必须点击星星）
        if (!isMemoryMode) {
            handleHit();
        }
    } else if (e.key === 'Escape') {
        e.preventDefault();
        if (gamePaused) {
            resumeGame();
        } else {
            pauseGame();
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('gameCanvas');
    
    // 初始化成就系统
    initAchievements();
    
    if (canvas) {
        canvas.addEventListener('click', (e) => {
            const rect = canvas.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const clickY = e.clientY - rect.top;
            handleHit(clickX, clickY);
        });
        
        canvas.addEventListener('touchstart', (e) => {
            e.preventDefault();
            const rect = canvas.getBoundingClientRect();
            const touch = e.touches[0];
            const clickX = touch.clientX - rect.left;
            const clickY = touch.clientY - rect.top;
            handleHit(clickX, clickY);
        });
    }
});

// 窗口大小调整
window.addEventListener('resize', () => {
    if (canvas) {
        const container = canvas.parentElement;
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
        judgeLineY = canvas.height * 0.75;
    }
});

// 添加动画样式
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }
    
    @keyframes judgeFloat {
        0% {
            transform: translateY(0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translateY(-50px) scale(1.5);
            opacity: 0;
        }
    }
    
    @keyframes missFloat {
        0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
        }
        100% {
            transform: translate(-50%, -100px) scale(1.5);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// 页面加载时加载排行榜
window.addEventListener('load', () => {
    loadLeaderboard();
});
