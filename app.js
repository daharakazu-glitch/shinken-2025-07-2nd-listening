// Data Store for all Listening Questions, Transcripts, and Explanations
const listeningData = {
    part1: {
        track: "track1",
        title: "Part 1 (対話文)",
        subtitle: "No.1〜No.4 二人の人物による会話",
        questions: [
            {
                id: "p1-q1",
                num: "No. 1",
                question: "What is most likely the woman's job?",
                questionJp: "女性の仕事は何である可能性が最も高いですか？",
                choices: [
                    "She is a schoolteacher. (彼女は学校の教師である。)",
                    "She is the park manager. (彼女は公園の管理者である。)",
                    "She rents drones to visitors. (彼女はドローンを訪問者に貸しだしている。)",
                    "She works at the fire department. (彼女は消防署で働いている。)"
                ],
                correctAnswer: 1, // index 1 (choices[1])
                transcript: `
                    <div class="dialogue-bubble"><span class="dialogue-speaker">Woman:</span> <span class="dialogue-text">Excuse me, sir. You can't fly drones in the park.</span></div>
                    <div class="dialogue-bubble"><span class="dialogue-speaker">Man:</span> <span class="dialogue-text">Really? I've flown my drone here since I was in elementary school.</span></div>
                    <div class="dialogue-bubble"><span class="dialogue-speaker">Woman:</span> <span class="dialogue-text">I understand. We just put up a sign today at the park entrance that says: "No Drones Allowed." Maybe you missed it. Drones can be dangerous. We must keep our visitors safe.</span></div>
                    <div class="dialogue-bubble"><span class="dialogue-speaker">Man:</span> <span class="dialogue-text">I understand. I'll take it home.</span></div>
                `,
                translation: `
                    <p><strong>女性：</strong>すみません。公園でドローンを飛ばすことはできません。</p>
                    <p><strong>男性：</strong>本当ですか？ 私は小学生の頃からここでドローンを飛ばしているのですが。</p>
                    <p><strong>女性：</strong>わかっています。「ドローン禁止」と記してある標識を，今日公園の入り口に掲げたところです。それを見落とされたのでしょう。ドローンは危険な場合があります。私たちは訪問者の安全を守らなくてはなりません。</p>
                    <p><strong>男性：</strong>わかりました。それは家に持って帰ります。</p>
                `,
                explanation: `
                    女性は最初の発言で「公園でドローンを飛ばすことはできません。」と言っており、２番目の発言で「私たちは訪問者の安全を守らなくてはなりません。」と述べています。よって，公園を管理する立場にあると考えられるので，<strong>２ (She is the park manager.)</strong> が正解です。
                `
            },
            {
                id: "p1-q2",
                num: "No. 2",
                question: "What are the father and daughter doing?",
                questionJp: "父親と娘は何をしていますか？",
                choices: [
                    "They are fixing the back of their home. (彼らは家の裏手を修理している。)",
                    "They are fixing the ladder. (彼らははしごを修理している。)",
                    "They are washing the outside walls. (彼らは外壁を洗っている。)",
                    "They are washing their windows. (彼らは窓を洗っている。)"
                ],
                correctAnswer: 3, // index 3
                transcript: `
                    <div class="dialogue-bubble"><span class="dialogue-speaker">Father:</span> <span class="dialogue-text">Don't put your head outside! It's dangerous!</span></div>
                    <div class="dialogue-bubble"><span class="dialogue-speaker">Daughter:</span> <span class="dialogue-text">But, Dad, that's the only way I can really clean the window.</span></div>
                    <div class="dialogue-bubble"><span class="dialogue-speaker">Father:</span> <span class="dialogue-text">No, it isn't. I'll get the ladder; you hold it steady for me, and I'll climb up the side of the house and wash the window safely.</span></div>
                    <div class="dialogue-bubble"><span class="dialogue-speaker">Daughter:</span> <span class="dialogue-text">I'll hold the ladder, but don't drop soapy water on me!</span></div>
                `,
                translation: `
                    <p><strong>父親：</strong>頭を外に出してはいけないよ！ 危ないよ！</p>
                    <p><strong>娘：</strong>でも，お父さん，それが窓をちゃんと掃除できる唯一の方法よ。</p>
                    <p><strong>父親：</strong>いや，違うよ。私がはしごを取ってくるよ。それを私のためにしっかり支えてくれたら，私が家の側面を登って窓を安全に洗うよ。</p>
                    <p><strong>娘：</strong>私がはしごを支えるけど，せっけん水を私の上に垂らさないでね！</p>
                `,
                explanation: `
                    娘は最初の発言で「それが窓をちゃんと掃除できる唯一の方法」と言っており，父親は２番目の発言で「窓を安全に洗う」と言っています。よって，<strong>４ (They are washing their windows.)</strong> が正解です。
                `
            },
            {
                id: "p1-q3",
                num: "No. 3",
                question: "Which picture most likely shows Sue later in the day after this conversation?",
                questionJp: "この会話のあと，その日のスーを示す可能性が最も高いイラストはどれですか？",
                choices: [
                    "イラスト 1 (友達とピザを食べている)",
                    "イラスト 2 (誕生日パーティーにいる)",
                    "イラスト 3 (家でソファーに座り、お腹をさすってくつろいでいる)",
                    "イラスト 4 (別の店へ買い物に出かけている)"
                ],
                correctAnswer: 2, // index 2 (choices[2] is illustration 3)
                image: "images/page_3.png", // points to page 3
                imageCropClass: "crop-no3", // custom styling hook
                transcript: `
                    <div class="dialogue-bubble"><span class="dialogue-speaker">Bill:</span> <span class="dialogue-text">Hi, Sue, we're all going out for pizza. We'd love you to join us.</span></div>
                    <div class="dialogue-bubble"><span class="dialogue-speaker">Sue:</span> <span class="dialogue-text">Hi, Bill, I just came home from a big birthday party for a coworker. I ate too much, so I just want to stay home and relax.</span></div>
                    <div class="dialogue-bubble"><span class="dialogue-speaker">Bill:</span> <span class="dialogue-text">Come on, just join us. You don't have to eat. It will be fun.</span></div>
                    <div class="dialogue-bubble"><span class="dialogue-speaker">Sue:</span> <span class="dialogue-text">Not today. Thanks anyway.</span></div>
                `,
                translation: `
                    <p><strong>ビル：</strong>やあ，スー，私たちはみんなピザを食べに行くところなんだ。きみも一緒に来てくれたらうれしいよ。</p>
                    <p><strong>スー：</strong>あら，ビル，私は仕事仲間の盛大な誕生日パーティーからちょうど帰宅したところなの。食べ過ぎちゃったから，ただ家にいてゆっくりしたいの。</p>
                    <p><strong>ビル：</strong>いいじゃない，とにかくおいでよ。食べなくてもいいから。楽しいよ。</p>
                    <p><strong>スー：</strong>今日はやめておくわ。でも，ありがとう。</p>
                `,
                explanation: `
                    スーは最初の発言で「食べ過ぎちゃったから，ただ家にいてゆっくりしたいの。」と言っており，ビルが２番目の発言で再度誘ったのに対しても，２番目の発言で「今日はやめておくわ。」と答えています。したがって，スーが家でくつろぎながらお腹をさすっているイラストの <strong>３</strong> が正解です。
                `
            },
            {
                id: "p1-q4",
                num: "No. 4",
                question: "What does the woman suggest about the man's workout routine?",
                questionJp: "女性は男性のトレーニングのやり方について何を提案（示唆）していますか？",
                choices: [
                    "He has to hire a personal trainer. (彼はパーソナルトレーナーを雇わなければならない。)",
                    "He needs to exercise more frequently. (彼はもっと頻繁に運動をする必要がある。)",
                    "He should find a different gym. (彼は別のジムを探すべきだ。)",
                    "He is pushing himself too hard. (彼は無理をしすぎている。)"
                ],
                correctAnswer: 1, // index 1
                transcript: `
                    <div class="dialogue-bubble"><span class="dialogue-speaker">Man:</span> <span class="dialogue-text">I've been coming here for months, but I'm not seeing much change.</span></div>
                    <div class="dialogue-bubble"><span class="dialogue-speaker">Woman:</span> <span class="dialogue-text">How often do you work out? If it's only occasionally, you won't see much in results.</span></div>
                    <div class="dialogue-bubble"><span class="dialogue-speaker">Man:</span> <span class="dialogue-text">I try to come twice a week, but sometimes I'm too busy.</span></div>
                    <div class="dialogue-bubble"><span class="dialogue-speaker">Woman:</span> <span class="dialogue-text">Well, consistency is key. Maybe we could be gym buddies? I'll get you into shape.</span></div>
                `,
                translation: `
                    <p><strong>男性：</strong>ここに何か月も通ってきていますが，あまり変化が見られないんですよね。</p>
                    <p><strong>女性：</strong>どのくらいの頻度で身体を鍛えていますか？ 時折だけなら，成果があまり見られないでしょうね。</p>
                    <p><strong>男性：</strong>週に２回来ようとしていますが，時々忙しすぎて。</p>
                    <p><strong>女性：</strong>そうですね，一貫性が秘訣ですよ。もしかすると私たちジム仲間になれるかも？ 私があなたを鍛えてあげますよ。</p>
                `,
                explanation: `
                    女性は最初の発言で運動の頻度を尋ねてから「時折だけなら，成果があまり見られないでしょうね。」と言っており，また最後に「一貫性が秘訣ですよ」と述べています。したがって、より頻度を高く継続して通うことを促しているため、<strong>２ (He needs to exercise more frequently.)</strong> が正解です。
                `
            }
        ]
    },
    part2: {
        track: "track2",
        title: "Part 2 (モノローグ)",
        subtitle: "Questions No.1〜No.3 鉛筆の歴史についてのスピーチ",
        questions: [
            {
                id: "p2-q1",
                num: "Question No. 1",
                question: "When was the modern pencil created?",
                questionJp: "現代の鉛筆はいつ作り出されましたか？",
                choices: [
                    "In ancient times. (古代に。)",
                    "In 1795. (1795年に。)",
                    "In 1858. (1858年に。)",
                    "In the 20th century. (20世紀に。)"
                ],
                correctAnswer: 1, // index 1
                transcript: `
                    <p>Did you ever wonder about the pencil you use? It has an interesting story. In ancient times, people wrote with different tools. For example, they used sharp stones or feathers dipped in ink.</p>
                    <p>The pencil we know today came much later. People found a special rock that could make marks. They used it to write and draw. At first, it was messy. So, they tried to make it easier to hold. Some pencils were even square shaped!</p>
                    <p><strong>In 1795, Nicholas Jacques Conté created the modern pencil by mixing several materials.</strong> This helped pencils write better. Another big change came in 1858, when Hymen Lipman added an eraser to the end of the pencil.</p>
                    <p>Now, we see pencils everywhere ― in schools, offices, and art rooms. It started as a simple writing tool. Now, artists love to use it, too. The pencil changed a lot to become what we use today, and we will certainly see new innovations in the future.</p>
                `,
                translation: `
                    <p>自分が使っている鉛筆について疑問に思ったことはありますか？ それには興味深い話があります。古代では，人々は様々な道具で書いていました。例えば，彼らは鋭利な石やインクに浸した羽根を使いました。</p>
                    <p>私たちが現在知っている鉛筆はずっとあとになって登場しました。人々は印をつけられる特別な石を見つけました。彼らは字を書いたり絵を描いたりするのにそれを使いました。最初は，それは手が汚れるものでした。そこで，彼らはそれを握りやすくしようとしました。正方形の形をした鉛筆までもありました！</p>
                    <p><strong>1795 年にニコラ・ジャック・コンテはいくつかの材料を混ぜ合わせて現代の鉛筆をつくり出しました。</strong> これによって鉛筆はより書きやすくなりました。もう１つの大きな変化は 1858 年に訪れ，その時ハイマン・リップマンが鉛筆の端に消しゴムを加えました。</p>
                    <p>現在，学校，オフィス，そして美術室など，あらゆるところで私たちは鉛筆を目にします。それは簡素な筆記用具として始まりました。今では，芸術家たちもそれを使うのが大好きです。鉛筆は，大きく変化して今日私たちが使っているものになりましたし，将来，私たちは疑いなく新たな革新を目にすることになるでしょう。</p>
                `,
                explanation: `
                    モノローグの第3段落の第1文で "In 1795, Nicholas Jacques Conté created the modern pencil..." (1795年に現代の鉛筆を作り出した) とはっきり述べられています。したがって、正解は <strong>２ (In 1795.)</strong> です。
                `
            },
            {
                id: "p2-q2",
                num: "Question No. 2",
                question: "What does the speaker suggest about the pencil's history?",
                questionJp: "話し手は鉛筆の歴史について何を示唆していますか？",
                choices: [
                    "The pencil has developed over many years. (鉛筆は長年にわたって進化（発展）してきた。)",
                    "The pencil has always been easy to hold. (鉛筆は常に握りやすかった。)",
                    "The pencil hasn't changed much over time. (時を経ても、鉛筆はあまり変化してこなかった。)",
                    "The pencil was invented very recently. (鉛筆はつい最近発明された。)"
                ],
                correctAnswer: 0, // index 0
                transcript: `
                    <p>(Same monologue as Question 1)</p>
                `,
                translation: `
                    <p>(モノローグの対訳はQuestion 1を参照)</p>
                `,
                explanation: `
                    鉛筆は、古代の石や羽ペンから始まり、印のつく鉱石（黒鉛）の発見、握りやすさの追求（四角い鉛筆など）、1795年のコンテによる混合技術、1858年の消しゴム取り付けなど、長い年月をかけて改良されてきました。したがって、正解は <strong>１ (The pencil has developed over many years.)</strong> です。<br>
                    ※「常に握りやすかった (常に messy だったとあり不適)」「あまり変わらなかった」「最近発明された」などはどれも内容と矛盾します。
                `
            },
            {
                id: "p2-q3",
                num: "Question No. 3",
                question: "Based on the passage, what might happen to pencils in the future?",
                questionJp: "本文によると、将来鉛筆にどのようなことが起こる可能性がありますか？",
                choices: [
                    "They could keep changing and improving. (それらは変化し、改善し続けるだろう。)",
                    "They might stop being used completely. (それらは完全に利用されなくなるかもしれない。)",
                    "They will likely become electronic devices. (それらは電子機器になりそうだ。)",
                    "They will probably stay exactly the same. (それらはおそらく全く同じままだろう。)"
                ],
                correctAnswer: 0, // index 0
                transcript: `
                    <p>(Same monologue as Question 1)</p>
                `,
                translation: `
                    <p>(モノローグの対訳はQuestion 1を参照)</p>
                `,
                explanation: `
                    モノローグの最終文で "...and we will certainly see new innovations in the future." (将来、私たちは疑いなく新たな革新を目にすることになるでしょう) と述べられています。これは「将来も変化や改良が加わっていく」ということを示唆しているため、<strong>１ (They could keep changing and improving.)</strong> が正解です。
                `
            }
        ]
    },
    part3: {
        track: "track3",
        title: "Part 3 (長めの対話文)",
        subtitle: "Questions No.1〜No.2 祖母からの調理道具の贈り物",
        questions: [
            {
                id: "p3-q1",
                num: "Question No. 1",
                question: "Why is the daughter uncomfortable?",
                questionJp: "なぜ娘は気がかり（気が進まない）なのですか？",
                choices: [
                    "She doesn't know her grandmother's recipes. (彼女は祖母のレシピを知らない。)",
                    "She doesn't know how to refuse her grandmother's gifts. (彼女は祖母の贈り物を断る方法がわからない。)",
                    "She wants her father to buy her new pots and pans. (彼女は父親に新しい深鍋や平鍋を買ってもらいたい。)",
                    "She wants to cook dinner for her grandparents. (彼女は祖父母に夕食を料理してあげたい。)"
                ],
                correctAnswer: 1, // index 1
                transcript: `
                    <div class="dialogue-bubble"><span class="dialogue-speaker">Daughter:</span> <span class="dialogue-text">Dad, I need your help.</span></div>
                    <div class="dialogue-bubble"><span class="dialogue-speaker">Father:</span> <span class="dialogue-text">What do you need?</span></div>
                    <div class="dialogue-bubble"><span class="dialogue-speaker">Daughter:</span> <span class="dialogue-text">Now that Grandma doesn't cook much anymore, I found out that she is giving me all her pots and pans.</span></div>
                    <div class="dialogue-bubble"><span class="dialogue-speaker">Father:</span> <span class="dialogue-text">I know. It was going to be a big surprise.</span></div>
                    <div class="dialogue-bubble"><span class="dialogue-speaker">Daughter:</span> <span class="dialogue-text">Grandpa already told me.</span></div>
                    <div class="dialogue-bubble"><span class="dialogue-speaker">Father:</span> <span class="dialogue-text">He can never keep a secret. So, what's the problem?</span></div>
                    <div class="dialogue-bubble"><span class="dialogue-speaker">Daughter:</span> <span class="dialogue-text">Her pots and pans are 40 years old. Cookware has changed a lot since she bought them.</span></div>
                    <div class="dialogue-bubble"><span class="dialogue-speaker">Father:</span> <span class="dialogue-text">That's true, but cooking hasn't changed.</span></div>
                    <div class="dialogue-bubble"><span class="dialogue-speaker">Daughter:</span> <span class="dialogue-text">That's not true! Cooking has changed a lot since then! All my pots and pans have non-stick surfaces and are made out of special metals. And all my appliances are computerized. I wouldn't even know how to use her pots and pans. I'm afraid I will disappoint her if I tell her in person. Could you talk to her for me?</span></div>
                    <div class="dialogue-bubble"><span class="dialogue-speaker">Father:</span> <span class="dialogue-text">Hmm ... I understand what you mean. But still, I don't want to see your grandma's sad face.</span></div>
                `,
                translation: `
                    <p><strong>娘：</strong>お父さん，助けてほしいの。</p>
                    <p><strong>父親：</strong>何が必要なんだい？</p>
                    <p><strong>娘：</strong>おばあちゃんはもうあまり料理をしないから，おばあちゃんの深鍋や平鍋をすべて私にくれようとしているのがわかったの。</p>
                    <p><strong>父親：</strong>知っているよ。それは大きなサプライズになるはずだったんだが。</p>
                    <p><strong>娘：</strong>おじいちゃんがもう私に言ったの。</p>
                    <p><strong>父親：</strong>おじいちゃんはいつも秘密を守れないな。それで，何が問題なんだい？</p>
                    <p><strong>娘：</strong>おばあちゃんの深鍋や平鍋は 40 年ものでしょ。調理道具はおばあちゃんが買った頃から大きく変わっているのよ。</p>
                    <p><strong>父親：</strong>それはそうだが，料理は変わってないよ。</p>
                    <p><strong>娘：</strong>そんなことないわ！ 料理もその頃から大きく変わっているのよ！ 私の深鍋や平鍋は全部焦げつかない表面だし，特別な金属からつくられているの。それに私の器具はすべてコンピュータ化されているわ。私はおばあちゃんの深鍋や平鍋の使い方すらわからないと思う。自分でおばあちゃんに伝えたら，がっかりさせてしまうのではないかと心配なの。私のためにおばあちゃんに話してくれない？</p>
                    <p><strong>父親：</strong>うーん，言いたいことはわかるよ。でも，やっぱりおばあちゃんの悲しい顔は見たくないな。</p>
                `,
                explanation: `
                    娘は40年前の古い調理道具を譲り受けることに難色を示しており、「自分で直接伝えると祖母をがっかりさせてしまうのではないかと心配」と言って父親に間に入ってほしいと頼んでいます。つまり、贈り物を角を立てずに断る（あるいは受け取らないと伝える）方法が分からずに困っている状態です。したがって、正解は <strong>２ (She doesn't know how to refuse her grandmother's gifts.)</strong> です。
                `
            },
            {
                id: "p3-q2",
                num: "Question No. 2",
                type: "written",
                question: "What good thing for the daughter about the old cookware, such as pots and pans, could you tell her?",
                questionJp: "古い調理道具について、娘にとってのどのような利点を伝えることができますか？ (英語で15語程度)",
                instruction: "指定された語（句）群から少なくとも1つ以上を使用して回答を作成してください。",
                keywords: ["cooking skills", "communication", "conversation", "family", "memory"],
                correctAnswer: null, // evaluates programmatically
                modelAnswers: [
                    "It can help improve her cooking skills without the aid of computers. (12 words)",
                    "It will remind you of good memories about your grandmother and her cooking. (13 words)",
                    "Using them could be a good chance to start a conversation with her family. (14 words)"
                ],
                transcript: `
                    <p>(Same dialogue as Question 1)</p>
                `,
                translation: `
                    <p>(対話文の対訳はQuestion 1を参照)</p>
                `,
                explanation: `
                    <strong>記述のポイント：</strong><br>
                    古い調理道具に対して後ろ向きである娘に対して、そのメリットとなることを語句群のワードを最低1つ用いて論理的に記述します。<br>
                    ・<strong>cooking skills</strong> を用いる場合：コンピュータ化された調理器具に頼らないことで、本質的な「料理の腕前」を向上させられるというメリット。<br>
                    ・<strong>memory</strong> (memories) を用いる場合：祖母や祖母の料理についての「温かい思い出」を思い出させてくれるという精神的なメリット。<br>
                    ・<strong>conversation</strong> や <strong>communication</strong> を用いる場合：古い道具を使うことで家族や祖母との会話・交流が生まれるというメリット。
                `
            }
        ]
    }
};

// Global variables for active states
let activeTab = "dashboard";
let currentTrack = null; // 'track1', 'track2', 'track3'
let currentAudio = null; // Audio element reference
let userAnswers = {}; // Store user selected options: { questionId: selectedIndex }
let recorderState = {
    mediaRecorder: null,
    audioChunks: [],
    isRecording: false,
    startTime: 0,
    timerInterval: null,
    recordings: [] // list of objects: { id, url, name, date }
};

// Load saved recordings from LocalStorage on start
function loadRecordings() {
    const saved = localStorage.getItem("shinken_recordings");
    if (saved) {
        // We can't save the Blob URLs themselves since they become invalid across page reloads.
        // But we store the metadata, and notify the user they are metadata placeholders, or we just init empty.
        // For demonstration and convenience, we'll maintain the list dynamically in-memory, but clear on reload
        // to prevent broken Blob URL pointers.
        recorderState.recordings = [];
    }
}

// Initialize Application Elements
function initApp() {
    loadRecordings();
    initUI();
    renderAllQuestions();
    setupAudioControllers();
    setupRecorder();
    updateDashboardStats();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp);
} else {
    initApp();
}

// Setup tab switches and modal views
function initUI() {
    // Tab Button Navigation
    const navButtons = document.querySelectorAll(".nav-btn");
    navButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const tabId = btn.getAttribute("data-tab");
            switchTab(tabId);
        });
    });

    // Mobile Sidebar Toggle
    const menuToggle = document.getElementById("menu-toggle");
    const sidebar = document.getElementById("sidebar");
    menuToggle.addEventListener("click", () => {
        sidebar.classList.toggle("active");
    });

    // Close sidebar on clicking main content in mobile view
    document.querySelector(".app-main").addEventListener("click", (e) => {
        if (window.innerWidth <= 1024 && !sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
            sidebar.classList.remove("active");
        }
    });

    // Reference PDF Modal Toggles
    const togglePdfBtn = document.getElementById("btn-toggle-reference-pdf");
    const pdfModal = document.getElementById("pdf-modal");
    const pdfModalClose = document.getElementById("pdf-modal-close");
    const modalTabBtns = document.querySelectorAll(".modal-tab-btn");
    const pdfModalImg = document.getElementById("pdf-modal-img");

    togglePdfBtn.addEventListener("click", () => {
        pdfModal.classList.remove("hide");
    });

    pdfModalClose.addEventListener("click", () => {
        pdfModal.classList.add("hide");
    });

    pdfModal.addEventListener("click", (e) => {
        if (e.target === pdfModal) {
            pdfModal.classList.add("hide");
        }
    });

    modalTabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            modalTabBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            const pageNum = btn.getAttribute("data-page");
            pdfModalImg.src = `images/page_${pageNum}.png`;
            pdfModalImg.alt = `問題用紙 Page ${pageNum}`;
        });
    });
}

// Switch main active view pane
function switchTab(tabId) {
    activeTab = tabId;
    
    // Update Sidebar Navigation state
    const navButtons = document.querySelectorAll(".nav-btn");
    navButtons.forEach(btn => {
        if (btn.getAttribute("data-tab") === tabId) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    // Update Content Pane display
    const panes = document.querySelectorAll(".tab-pane");
    panes.forEach(pane => {
        if (pane.id === `pane-${tabId}`) {
            pane.classList.add("active");
        } else {
            pane.classList.remove("active");
        }
    });

    // Update Page Header Title
    const titleMap = {
        dashboard: "ダッシュボード",
        part1: "Part 1 (対話文)",
        part2: "Part 2 (モノローグ)",
        part3: "Part 3 (対話・要約)",
        recorder: "シャドーイング録音スタジオ"
    };
    document.getElementById("page-title").textContent = titleMap[tabId] || "復習アプリ";

    // Manage Sticky Audio Player visibility
    const playerBar = document.getElementById("player-bar");
    if (tabId === "dashboard" || tabId === "recorder") {
        // Keep the player running if it is playing, but hide from dashboard/recorder to keep UI clean,
        // or keep visible if active. Let's make it visible whenever audio is active!
        if (!currentAudio || currentAudio.paused) {
            playerBar.classList.add("hide");
        }
    } else {
        // Show player bar and swap track automatically to match the current Part
        playerBar.classList.remove("hide");
        const targetTrack = listeningData[tabId].track;
        if (currentTrack !== targetTrack) {
            changeTrack(targetTrack);
        }
    }

    // Close mobile menu
    document.getElementById("sidebar").classList.remove("active");
}

// Dynamic rendering of questions
function renderAllQuestions() {
    renderPartQuestions("part1");
    renderPartQuestions("part2");
    renderPartQuestions("part3");
}

function renderPartQuestions(partKey) {
    const container = document.getElementById(`${partKey}-questions-container`);
    if (!container) return;
    
    container.innerHTML = "";
    const part = listeningData[partKey];

    part.questions.forEach((q, index) => {
        const qCard = document.createElement("div");
        qCard.className = "question-card";
        qCard.id = `card-${q.id}`;

        let mediaPlayBtnHtml = `
            <button class="btn btn-secondary btn-mini btn-play-shortcut" data-track="${part.track}">
                <i class="fa-solid fa-play"></i> 音声を聞く
            </button>
        `;

        let questionBodyHtml = "";

        if (q.type === "written") {
            // Text area and helper for Part 3 No.2
            questionBodyHtml = `
                <div class="q-text">
                    <strong>${q.num}:</strong> ${q.question}
                    <div style="font-size:13px; color:var(--text-muted); margin-top:4px;">${q.questionJp}</div>
                </div>
                
                <div class="keyword-pool">
                    <div class="keyword-pool-label">使用するキーワード（記述すると自動で点灯します）:</div>
                    <div class="keywords-list" id="keyword-list-${q.id}">
                        ${q.keywords.map(kw => `<span class="keyword-tag" id="tag-${q.id}-${kw.replace(/\s+/g, '-')}">${kw}</span>`).join("")}
                    </div>
                </div>

                <textarea class="text-answer-input" id="input-${q.id}" placeholder="Type your answer here in English... (about 15 words)"></textarea>
                
                <div class="input-feedback">
                    <span id="word-count-${q.id}">語数: 0 語</span>
                    <span id="keyword-status-${q.id}">キーワード: 0 / 1 使用済</span>
                </div>
            `;
        } else {
            // Options layout for multiple choice
            let imageHtml = "";
            if (q.image) {
                // If it is No. 3 (which relies on illustration page 3), show references
                imageHtml = `
                    <div class="q-image-box">
                        <img src="${q.image}" class="question-reference-img" alt="Illustration details">
                        <div style="font-size: 11px; color: #4b5563; text-align: center; margin-top: 6px; background-color: #f3f4f6; padding: 4px;">
                            ※上のイラスト（選択肢 1〜4）を見て答えてください。
                        </div>
                    </div>
                `;
            }

            questionBodyHtml = `
                <div class="q-text">
                    <strong>${q.num}:</strong> ${q.question}
                    <div style="font-size:13px; color:var(--text-muted); margin-top:4px;">${q.questionJp}</div>
                </div>
                
                ${imageHtml}
                
                <div class="choices-list">
                    ${q.choices.map((choice, cIdx) => `
                        <div class="choice-item" data-qid="${q.id}" data-idx="${cIdx}" id="choice-${q.id}-${cIdx}">
                            <div class="choice-marker">${cIdx + 1}</div>
                            <div class="choice-text">${choice}</div>
                        </div>
                    `).join("")}
                </div>
            `;
        }

        qCard.innerHTML = `
            <div class="q-header">
                <span class="q-number">${part.title} &mdash; ${q.num}</span>
                <div class="q-controls">
                    ${mediaPlayBtnHtml}
                </div>
            </div>
            
            ${questionBodyHtml}
            
            <div class="q-actions">
                <div class="toggles-group">
                    <button class="btn btn-secondary btn-mini btn-toggle-panel hide" data-target="script-${q.id}" id="btn-script-${q.id}">
                        <i class="fa-solid fa-file-lines"></i> 英語スクリプト
                    </button>
                    <button class="btn btn-secondary btn-mini btn-toggle-panel hide" data-target="translation-${q.id}" id="btn-trans-${q.id}">
                        <i class="fa-solid fa-language"></i> 日本語訳
                    </button>
                    <button class="btn btn-secondary btn-mini btn-toggle-panel hide" data-target="explanation-${q.id}" id="btn-exp-${q.id}">
                        <i class="fa-solid fa-circle-question"></i> 解説
                    </button>
                </div>
                
                <button class="btn btn-primary btn-check-answer" data-qid="${q.id}" data-part="${partKey}" id="btn-check-${q.id}">
                    <i class="fa-solid fa-circle-check"></i> 答え合わせ
                </button>
            </div>

            <!-- Reveal Panels -->
            <div class="reveal-panel hide" id="panel-script-${q.id}">
                <div class="panel-title"><i class="fa-solid fa-file-signature"></i> English Script</div>
                <div class="panel-content">${q.transcript}</div>
            </div>

            <div class="reveal-panel hide" id="panel-translation-${q.id}">
                <div class="panel-title"><i class="fa-solid fa-language"></i> 日本語訳</div>
                <div class="panel-content">${q.translation}</div>
            </div>

            <div class="reveal-panel hide" id="panel-explanation-${q.id}">
                <div class="panel-title"><i class="fa-solid fa-circle-info"></i> 解説・解答のポイント</div>
                <div class="panel-content">
                    <p><strong>正解: ${q.type === 'written' ? '記述式（自己評価）' : (q.correctAnswer + 1)}</strong></p>
                    <div class="explanation-section">${q.explanation}</div>
                    ${q.type === 'written' ? `
                        <div style="margin-top: 10px;">
                            <strong>【解答例】</strong>
                            <ul>
                                ${q.modelAnswers.map(ans => `<li style="margin-top:4px; font-size:13px; color:#a5b4fc;">${ans}</li>`).join("")}
                            </ul>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;

        container.appendChild(qCard);
    });

    // Add events for choice items click
    const choiceItems = container.querySelectorAll(".choice-item");
    choiceItems.forEach(item => {
        item.addEventListener("click", () => {
            const qid = item.getAttribute("data-qid");
            const idx = parseInt(item.getAttribute("data-idx"));
            
            // Do nothing if already checked
            const checkBtn = document.getElementById(`btn-check-${qid}`);
            if (checkBtn.disabled) return;

            // Remove selected class from other options in this question
            container.querySelectorAll(`.choice-item[data-qid="${qid}"]`).forEach(c => {
                c.classList.remove("selected");
            });

            // Mark selected
            item.classList.add("selected");
            userAnswers[qid] = idx;
        });
    });

    // Add events for written text change helper
    const textInputs = container.querySelectorAll(".text-answer-input");
    textInputs.forEach(input => {
        const qid = input.id.replace("input-", "");
        const qData = listeningData[partKey].questions.find(quest => quest.id === qid);
        
        input.addEventListener("input", () => {
            const text = input.value.trim();
            const words = text === "" ? [] : text.split(/\s+/);
            
            // Count words
            document.getElementById(`word-count-${qid}`).textContent = `語数: ${words.length} 語`;
            
            // Highlight used keywords
            let usedCount = 0;
            qData.keywords.forEach(kw => {
                const kwRegex = new RegExp(`\\b${kw}\\b`, "i");
                const tag = document.getElementById(`tag-${qid}-${kw.replace(/\s+/g, '-')}`);
                
                if (kwRegex.test(text)) {
                    tag.classList.add("used");
                    usedCount++;
                } else {
                    tag.classList.remove("used");
                }
            });

            // Update status text
            const statusLabel = document.getElementById(`keyword-status-${qid}`);
            statusLabel.textContent = `キーワード: ${usedCount} / ${qData.keywords.length} 使用済`;
            if (usedCount > 0) {
                statusLabel.style.color = "var(--secondary)";
            } else {
                statusLabel.style.color = "var(--text-muted)";
            }

            userAnswers[qid] = text;
        });
    });

    // Add events for toggle panels (Script, Translation, Explanation)
    const toggleBtns = container.querySelectorAll(".btn-toggle-panel");
    toggleBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const targetId = btn.getAttribute("data-target");
            const panel = document.getElementById(`panel-${targetId}`);
            panel.classList.toggle("hide");
            btn.classList.toggle("btn-primary");
            btn.classList.toggle("btn-secondary");
        });
    });

    // Add events for play audio shortcut button
    const playShortcuts = container.querySelectorAll(".btn-play-shortcut");
    playShortcuts.forEach(btn => {
        btn.addEventListener("click", () => {
            const track = btn.getAttribute("data-track");
            
            // Make sure player is open
            document.getElementById("player-bar").classList.remove("hide");
            
            if (currentTrack !== track) {
                changeTrack(track);
            }
            togglePlayAudio();
        });
    });

    // Add event for check answer button
    const checkBtns = container.querySelectorAll(".btn-check-answer");
    checkBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const qid = btn.getAttribute("data-qid");
            const part = btn.getAttribute("data-part");
            checkAnswer(qid, part);
        });
    });
}

// Grading & Reveal Review Panels
function checkAnswer(qid, partKey) {
    const qData = listeningData[partKey].questions.find(q => q.id === qid);
    const userAnswer = userAnswers[qid];

    if (userAnswer === undefined || userAnswer === "") {
        alert("解答を入力、または選択肢を選んでください。");
        return;
    }

    const checkBtn = document.getElementById(`btn-check-${qid}`);
    checkBtn.disabled = true;
    checkBtn.style.opacity = 0.5;

    // Show script, translation, and explanation toggle buttons
    document.getElementById(`btn-script-${qid}`).classList.remove("hide");
    document.getElementById(`btn-trans-${qid}`).classList.remove("hide");
    document.getElementById(`btn-exp-${qid}`).classList.remove("hide");

    // Automatically reveal explanation panel on check
    const expPanel = document.getElementById(`panel-explanation-${qid}`);
    expPanel.classList.remove("hide");
    document.getElementById(`btn-exp-${qid}`).classList.add("btn-primary");
    document.getElementById(`btn-exp-${qid}`).classList.remove("btn-secondary");

    // Style feedback based on answer correctness
    if (qData.type === "written") {
        // Text answer is descriptive - self assessment
        const inputField = document.getElementById(`input-${qid}`);
        inputField.disabled = true;
        inputField.style.borderColor = "var(--secondary)";
        
        // Mark as answered in user answers metadata
        userAnswers[qid + "_correct"] = true; // Count as correct since it's a self-assessed writing practice
    } else {
        const isCorrect = (userAnswer === qData.correctAnswer);
        userAnswers[qid + "_correct"] = isCorrect;

        // Color choices to show feedback
        qData.choices.forEach((_, cIdx) => {
            const item = document.getElementById(`choice-${qid}-${cIdx}`);
            if (cIdx === qData.correctAnswer) {
                item.classList.add("correct");
            } else if (cIdx === userAnswer && !isCorrect) {
                item.classList.add("incorrect");
            }
        });
    }

    updateDashboardStats();
}

// Setup Media playback controls
function setupAudioControllers() {
    const playBtn = document.getElementById("player-btn-play");
    const prevBtn = document.getElementById("player-btn-prev");
    const nextBtn = document.getElementById("player-btn-next");
    const slider = document.getElementById("player-slider");
    const speedSelect = document.getElementById("player-speed-select");
    const volumeBtn = document.getElementById("player-volume-btn");
    const volumeSlider = document.getElementById("player-volume-slider");
    const timeCurrent = document.getElementById("player-time-current");
    const timeTotal = document.getElementById("player-time-total");

    playBtn.addEventListener("click", togglePlayAudio);
    
    // Switch between tracks using next/prev buttons
    prevBtn.addEventListener("click", () => {
        if (currentTrack === "track3") changeTrack("track2");
        else if (currentTrack === "track2") changeTrack("track1");
    });
    
    nextBtn.addEventListener("click", () => {
        if (currentTrack === "track1") changeTrack("track2");
        else if (currentTrack === "track2") changeTrack("track3");
    });

    // Speed controller selector
    speedSelect.addEventListener("change", (e) => {
        const speed = parseFloat(e.target.value);
        if (currentAudio) {
            currentAudio.playbackRate = speed;
        }
        document.getElementById("stats-current-speed").textContent = `${speed.toFixed(1)}x`;
        updateDashboardStats();
    });

    // Volume controllers
    volumeSlider.addEventListener("input", (e) => {
        const vol = parseFloat(e.target.value);
        if (currentAudio) {
            currentAudio.volume = vol;
        }
        updateVolumeIcon(vol);
    });

    volumeBtn.addEventListener("click", () => {
        if (currentAudio) {
            if (currentAudio.volume > 0) {
                currentAudio.volume = 0;
                volumeSlider.value = 0;
            } else {
                currentAudio.volume = 0.8;
                volumeSlider.value = 0.8;
            }
            updateVolumeIcon(currentAudio.volume);
        }
    });

    // Seek Timeline updates
    slider.addEventListener("input", () => {
        if (currentAudio) {
            const time = (slider.value / 100) * currentAudio.duration;
            currentAudio.currentTime = time;
        }
    });
}

function updateVolumeIcon(vol) {
    const icon = document.querySelector("#player-volume-btn i");
    icon.className = "fa-solid";
    if (vol === 0) icon.classList.add("fa-volume-xmark");
    else if (vol < 0.4) icon.classList.add("fa-volume-low");
    else icon.classList.add("fa-volume-high");
}

// Change current track file references
function changeTrack(trackKey) {
    // Pause previous audio
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    currentTrack = trackKey;
    currentAudio = document.getElementById(`audio-${trackKey}`);
    
    // Set active values
    const playerBar = document.getElementById("player-bar");
    const titleEl = document.getElementById("player-track-title");
    const subtitleEl = document.getElementById("player-part-subtitle");
    const playBtn = document.getElementById("player-btn-play");
    const slider = document.getElementById("player-slider");

    // Dynamic titles
    const infoMap = {
        track1: { title: "トラック 1 (Part 1)", desc: "No.1〜No.4 二人の会話聞き取り" },
        track2: { title: "トラック 2 (Part 2)", desc: "Questions No.1〜No.3 モノローグ文" },
        track3: { title: "トラック 3 (Part 3)", desc: "Questions No.1〜No.2 調理道具の対話" }
    };

    titleEl.textContent = infoMap[trackKey].title;
    subtitleEl.textContent = infoMap[trackKey].desc;
    playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    slider.value = 0;

    // Apply speed settings to new audio
    const speed = parseFloat(document.getElementById("player-speed-select").value);
    currentAudio.playbackRate = speed;
    currentAudio.volume = parseFloat(document.getElementById("player-volume-slider").value);

    // Audio timeupdate event hooks
    currentAudio.ontimeupdate = () => {
        if (!currentAudio) return;
        const current = currentAudio.currentTime;
        const duration = currentAudio.duration || 0;
        
        // Progress percentage
        if (duration > 0) {
            slider.value = (current / duration) * 100;
        }

        document.getElementById("player-time-current").textContent = formatTime(current);
        document.getElementById("player-time-total").textContent = formatTime(duration);
    };

    currentAudio.onloadedmetadata = () => {
        document.getElementById("player-time-total").textContent = formatTime(currentAudio.duration);
    };

    currentAudio.onended = () => {
        playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        document.querySelector(".track-icon i").classList.remove("fa-spin-slow");
    };
}

// Play / Pause Toggle trigger
function togglePlayAudio() {
    if (!currentAudio) {
        // Default load track 1
        changeTrack("track1");
    }

    const playBtn = document.getElementById("player-btn-play");
    const discIcon = document.querySelector(".track-icon i");

    if (currentAudio.paused) {
        currentAudio.play()
            .then(() => {
                playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
                discIcon.classList.add("fa-spin-slow");
            })
            .catch(err => {
                console.error("Audio play failed:", err);
                alert("音声の再生に失敗しました。ローカルサーバー経由で開いているか確認してください。");
            });
    } else {
        currentAudio.pause();
        playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        discIcon.classList.remove("fa-spin-slow");
    }
}

// Convert seconds to MM:SS string
function formatTime(seconds) {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// Update Dashboard Counters and scores
function updateDashboardStats() {
    let totalQuestions = 0;
    let correctCount = 0;

    // Loop through questions database keys to verify status
    Object.keys(listeningData).forEach(partKey => {
        totalQuestions += listeningData[partKey].questions.length;
    });

    Object.keys(userAnswers).forEach(key => {
        if (key.endsWith("_correct") && userAnswers[key] === true) {
            correctCount++;
        }
    });

    const correctRate = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
    
    // Update elements
    document.getElementById("correct-rate-val").textContent = `${correctRate}%`;
    document.getElementById("stats-correct-ratio").textContent = `${correctCount} / ${totalQuestions}`;
    document.getElementById("stats-recordings-count").textContent = recorderState.recordings.length;
}

// Setup shadowing voice recorder using MediaRecorder API
function setupRecorder() {
    const startBtn = document.getElementById("record-btn-start");
    const stopBtn = document.getElementById("record-btn-stop");
    const timerLabel = document.getElementById("recording-timer");
    
    // Wave visualizer elements
    const canvas = document.getElementById("visualizer");
    const canvasCtx = canvas.getContext("2d");
    let audioCtx = null;
    let analyser = null;
    let dataArray = null;
    let source = null;
    let animationFrameId = null;

    startBtn.addEventListener("click", async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            
            // Setup recording chunks
            recorderState.audioChunks = [];
            recorderState.mediaRecorder = new MediaRecorder(stream);
            
            recorderState.mediaRecorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    recorderState.audioChunks.push(event.data);
                }
            };

            recorderState.mediaRecorder.onstop = () => {
                const audioBlob = new Blob(recorderState.audioChunks, { type: 'audio/webm' });
                const audioUrl = URL.createObjectURL(audioBlob);
                
                // Add to list
                const now = new Date();
                const timeString = `${now.getHours()}:${now.getMinutes() < 10 ? '0' : ''}${now.getMinutes()}`;
                const dateString = `${now.getMonth() + 1}/${now.getDate()} ${timeString}`;
                
                const recId = `rec_${Date.now()}`;
                const partLabel = currentTrack ? (currentTrack === 'track1' ? 'Part 1' : currentTrack === 'track2' ? 'Part 2' : 'Part 3') : 'フリー';
                
                recorderState.recordings.unshift({
                    id: recId,
                    url: audioUrl,
                    name: `録音練習 - ${partLabel} (${timeString})`,
                    date: dateString
                });

                renderRecordingsList();
                updateDashboardStats();
                
                // Stop all tracks on the stream to release microphone icon
                stream.getTracks().forEach(track => track.stop());

                // Stop Canvas visualization animation
                if (animationFrameId) {
                    cancelAnimationFrame(animationFrameId);
                }
                
                // Reset canvas display
                canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
                canvasCtx.fillStyle = '#050811';
                canvasCtx.fillRect(0, 0, canvas.width, canvas.height);
                canvasCtx.strokeStyle = '#1e293b';
                canvasCtx.beginPath();
                canvasCtx.moveTo(0, canvas.height / 2);
                canvasCtx.lineTo(canvas.width, canvas.height / 2);
                canvasCtx.stroke();
            };

            // Setup audio context visualizer
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            analyser = audioCtx.createAnalyser();
            source = audioCtx.createMediaStreamSource(stream);
            source.connect(analyser);
            
            analyser.fftSize = 256;
            const bufferLength = analyser.frequencyBinCount;
            dataArray = new Uint8Array(bufferLength);

            // Start visualizer animation
            drawVisualizer();

            // Start timer
            recorderState.startTime = Date.now();
            recorderState.timerInterval = setInterval(() => {
                const diff = Date.now() - recorderState.startTime;
                const totalSec = Math.floor(diff / 1000);
                const mm = Math.floor(totalSec / 60).toString().padStart(2, '0');
                const ss = (totalSec % 60).toString().padStart(2, '0');
                timerLabel.textContent = `${mm}:${ss}`;
            }, 1000);

            // Trigger actual record
            recorderState.mediaRecorder.start();
            recorderState.isRecording = true;

            // Update UI buttons
            startBtn.classList.add("hide");
            stopBtn.classList.remove("hide");
            timerLabel.style.color = "var(--incorrect)";

        } catch (err) {
            console.error("Microphone access failed:", err);
            alert("マイクへのアクセス権限がないか、マイクが見つかりません。マイクの設定を確認してください。");
        }
    });

    stopBtn.addEventListener("click", () => {
        if (recorderState.mediaRecorder && recorderState.isRecording) {
            recorderState.mediaRecorder.stop();
            recorderState.isRecording = false;

            // Clear timer
            clearInterval(recorderState.timerInterval);
            timerLabel.textContent = "00:00";

            // Update UI buttons
            startBtn.classList.remove("hide");
            stopBtn.classList.add("hide");
            timerLabel.style.color = "var(--text-muted)";
        }
    });

    // Draw visualizer frequency waveform bars
    function drawVisualizer() {
        if (!recorderState.isRecording) return;
        
        animationFrameId = requestAnimationFrame(drawVisualizer);
        analyser.getByteFrequencyData(dataArray);

        canvasCtx.fillStyle = '#050811';
        canvasCtx.fillRect(0, 0, canvas.width, canvas.height);

        const barWidth = (canvas.width / dataArray.length) * 2.5;
        let barHeight;
        let x = 0;

        for (let i = 0; i < dataArray.length; i++) {
            barHeight = dataArray[i] / 2;

            // Color gradient from Indigo to Teal
            const red = 99 + (i * 2);
            const green = 102 + (i * 1);
            const blue = 241 - (i * 2);
            canvasCtx.fillStyle = `rgb(${red},${green},${blue})`;

            canvasCtx.fillRect(x, canvas.height - barHeight, barWidth - 2, barHeight);
            x += barWidth;
        }
    }
}

// Render dynamic elements for recorded playlist
function renderRecordingsList() {
    const listContainer = document.getElementById("recordings-list");
    const emptyState = document.getElementById("playlist-empty-state");

    if (recorderState.recordings.length === 0) {
        listContainer.innerHTML = "";
        emptyState.classList.remove("hide");
        return;
    }

    emptyState.classList.add("hide");
    listContainer.innerHTML = "";

    recorderState.recordings.forEach(rec => {
        const item = document.createElement("div");
        item.className = "playlist-item";
        item.id = `item-${rec.id}`;

        item.innerHTML = `
            <div class="playlist-item-meta">
                <span class="playlist-item-title">${rec.name}</span>
                <span class="playlist-item-date">${rec.date}</span>
            </div>
            <div class="playlist-item-audio-row">
                <audio class="playlist-item-audio" controls src="${rec.url}"></audio>
                <button class="btn-delete-record" data-id="${rec.id}" title="この録音を削除">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        `;

        listContainer.appendChild(item);
    });

    // Delete item click listeners
    const deleteBtns = listContainer.querySelectorAll(".btn-delete-record");
    deleteBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const recId = btn.getAttribute("data-id");
            // Remove from array state
            recorderState.recordings = recorderState.recordings.filter(rec => rec.id !== recId);
            renderRecordingsList();
            updateDashboardStats();
        });
    });
}
