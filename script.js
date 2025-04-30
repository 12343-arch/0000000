document.addEventListener('DOMContentLoaded', function() {
    // Enhanced sound management
    const soundManager = {
        sounds: {
            click: new Howl({ src: ['data:audio/mp3;base64,SUQzAwAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tAwAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAAFOwCurq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6u//////////////////////////////////////////////////////////////////8AAAA8TEFNRTMuMTAwBEgAAAAAAAAAABUgJAMGQQABmgAABTsqz+2EAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//sQxAADwAABpAAAACAAADSAAAAETEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU='] }),
            success: new Howl({ src: ['data:audio/mp3;base64,SUQzAwAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tAwAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAAFOwCurq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6urq6u//////////////////////////////////////////////////////////////////8AAAA8TEFNRTMuMTAwBEgAAAAAAAAAABUgJAMGQQABmgAABTsqz+2EAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//sQxAADwAABpAAAACAAADSAAAAETEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU='] })
        },
        play: function(sound) {
            if (this.sounds[sound]) {
                this.sounds[sound].play();
            }
        }
    };

    // Initialize all section cards to be clickable
    const sectionCards = document.querySelectorAll('.section-card');
    sectionCards.forEach(card => {
        card.addEventListener('click', function() {
            soundManager.play('click');
            const sectionName = this.getAttribute('data-section');
            const sectionElement = document.getElementById(sectionName);
            showSection(sectionElement);
        });
    });

    // Initialize back to menu buttons
    const backButtons = document.querySelectorAll('.back-to-menu');
    backButtons.forEach(button => {
        button.addEventListener('click', function() {
            soundManager.play('click');
            showSection(document.getElementById('sections-menu'));
        });
    });

    // Initialize restart buttons
    const restartButtons = document.querySelectorAll('.restart-button');
    restartButtons.forEach(button => {
        button.addEventListener('click', function() {
            soundManager.play('click');
            const sectionId = this.closest('.page').id;
            resetSection(sectionId);
        });
    });

    // Initialize challenge buttons
    const challengeButtons = document.querySelectorAll('.start-challenge');
    challengeButtons.forEach(button => {
        button.addEventListener('click', function() {
            soundManager.play('click');
            const challengeId = this.closest('.challenge-card').getAttribute('data-challenge') + '-challenge';
            showSection(document.getElementById(challengeId));
            startChallenge(challengeId);
        });
    });

    // Initialize back to challenges buttons
    const backToChallengesButtons = document.querySelectorAll('.back-to-challenges');
    backToChallengesButtons.forEach(button => {
        button.addEventListener('click', function() {
            soundManager.play('click');
            showSection(document.getElementById('challenges'));
        });
    });

    // Initialize Easter egg buttons
    document.getElementById('raed-secret').addEventListener('click', function() {
        soundManager.play('click');
        showModal('سر رائد هو أنه... يحلم بأن يكون العريس الجاي! 👰‍♂️');
    });

    document.getElementById('next-groom').addEventListener('click', function() {
        soundManager.play('click');
        showModal('<img src="data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'300\' height=\'300\' viewBox=\'0 0 300 300\'%3E%3Crect width=\'300\' height=\'300\' fill=\'%23f0f0f0\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' font-size=\'24\' text-anchor=\'middle\' dominant-baseline=\'middle\'%3Eرائد بفستان العرس 👰‍♂️%3C/text%3E%3C/svg%3E" width="100%"><p>تم تسجيلك كعريس محتمل! رائد هيتصل بيك قريب 📞</p>');
    });

    document.getElementById('khaled-saying').addEventListener('click', function() {
        soundManager.play('click');
        showModal('<p>خالد دائماً يقول: "عندي باج في الكود ومش عارف حله!" 🐞</p>');
    });

    document.getElementById('khaled-love-secret').addEventListener('click', function() {
        soundManager.play('click');
        showModal('<div style="font-size:1.3rem;text-align:center"><strong>🕵️‍♂️ سر خالد!</strong><br>خالد كل ما يتكلم مع بنت، أول سؤال بيسأله: "بتحب البرمجة؟" ولو قالت اه، قلبه يدق أسرع! 😅<br><img src="https://scontent.fcai1-2.fna.fbcdn.net/v/t39.30808-1/462631130_548759631032905_2387529165169777688_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeGbvZD8dU5k44Qfz_XAi4dXLKNGQzCZaHAso0ZDMJlocDXgGUnKmHZq6_aum8X22I3ZCQS-VM4b9zYwllLuYB-B&_nc_ohc=b3-M-baL-yIQ7kNvwGghzGb&_nc_oc=AdmYH_s2jpfLf5_wRowEOQXdOJzDgZqz7Obz6Swg5nDw8oMr9zd-mzn4jN3FtRC9j_w&_nc_zt=24&_nc_ht=scontent.fcai1-2.fna&_nc_gid=X37Slbb-Y9sJG1T10K710g&oh=00_AfF3lIDs0p274epyBowdkvCm88Gmkoi7WxlKbc4qosgtMA&oe=6817FDE2" style="width:140px;border-radius:50%;margin:15px auto 0;display:block;"></div>');
    });

    document.getElementById('raed-love-secret').addEventListener('click', function() {
        soundManager.play('click');
        showModal(
            `<div style="font-size:1.3rem;text-align:center"><strong>🥰 سر رائد!</strong><br>
            كل ما يشوف عروسة، بيسأل أولاً: "سؤال مهم... هي بتعرف تعجن بيتزا؟" 🍕<br>
            ولو حد جاب سيرتها، يقول: "ياريت يا شباب ده أنا مستعد من بكرة!"<br>
            <img src="https://scontent.fcai1-2.fna.fbcdn.net/v/t39.30808-6/490697463_689758646822703_9210522810865935637_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=109&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeFa3b0Ekha21U_J-RLYwVDHP5BXpNHo3yA_kFek0ejfIJoiof4eA9BI4OTuYoNeeav2npz_DNTc0iHPxx1nopHz&_nc_ohc=dE2qCKVQYhwQ7kNvwH3Q-yE&_nc_oc=Adm0vWDnfiCOiwsj5E4oj89gV7rhxD1Cppd087WUonBktXGonttbiwCeEc_CJ0IiAms&_nc_zt=23&_nc_ht=scontent.fcai1-2.fna&_nc_gid=dxjp6GHJ9JXUzIPYEnS2ZQ&oh=00_AfH1GzykLteySxNd8WRy0vGP1A_Qhs8gWjO_danzYcOrGA&oe=6817D2F4" style="width:140px;border-radius:50%;margin:15px auto 0;display:block"></div>`
        );
    });

    document.getElementById('khaled-vs-raed-secret').addEventListener('click', function() {
        soundManager.play('click');
        showModal(
            `<div style="font-size:1.2rem;text-align:center">
                <strong>🔥 مواجهة حب البنات: خالد vs رائد</strong>
                <ul style="text-align:right">
                    <li>خالد: أي بنت من تكنولوجيا المعلومات تسحرني بنظرة! 💻</li>
                    <li>رائد: بمجرد ما البنت تقول "بحب الأكل"، قلبي يطير! 🍕</li>
                    <li>بس في الآخر الاتنين بيتكسفوا ومابيقولوش حاجة 🙊</li>
                </ul>
                <img src="https://scontent.fcai1-2.fna.fbcdn.net/v/t39.30808-1/462631130_548759631032905_2387529165169777688_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeGbvZD8dU5k44Qfz_XAi4dXLKNGQzCZaHAso0ZDMJlocDXgGUnKmHZq6_aum8X22I3ZCQS-VM4b9zYwllLuYB-B&_nc_ohc=b3-M-baL-yIQ7kNvwGghzGb&_nc_oc=AdmYH_s2jpfLf5_wRowEOQXdOJzDgZqz7Obz6Swg5nDw8oMr9zd-mzn4jN3FtRC9j_w&_nc_zt=24&_nc_ht=scontent.fcai1-2.fna&_nc_gid=X37Slbb-Y9sJG1T10K710g&oh=00_AfF3lIDs0p274epyBowdkvCm88Gmkoi7WxlKbc4qosgtMA&oe=6817FDE2" style="width:100px;border-radius:50%;margin:8px 10px 0 0;display:inline-block">
                <img src="https://scontent.fcai1-2.fna.fbcdn.net/v/t39.30808-6/490697463_689758646822703_9210522810865935637_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=109&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeFa3b0Ekha21U_J-RLYwVDHP5BXpNHo3yA_kFek0ejfIJoiof4eA9BI4OTuYoNeeav2npz_DNTc0iHPxx1nopHz&_nc_ohc=dE2qCKVQYhwQ7kNvwH3Q-yE&_nc_oc=Adm0vWDnfiCOiwsj5E4oj89gV7rhxD1Cppd087WUonBktXGonttbiwCeEc_CJ0IiAms&_nc_zt=23&_nc_ht=scontent.fcai1-2.fna&_nc_gid=dxjp6GHJ9JXUzIPYEnS2ZQ&oh=00_AfH1GzykLteySxNd8WRy0vGP1A_Qhs8gWjO_danzYcOrGA&oe=6817D2F4" style="width:100px;border-radius:50%;margin:8px 0 0 10px;display:inline-block">
            </div>`
        );
    });

    document.getElementById('wael-secret').addEventListener('click', function() {
        soundManager.play('click');
        showModal(
            `<div style="font-size:1.2rem;text-align:center">
            <strong>وايل سرا</strong>
            <br>
            أكتر بنت ممكن تكسب قلب وائل هي اللي تجيب له كوباية شاي بالنعناع من غير ما يطلب!<br>
            والبنات اللي بتسأل على أفلام أبيض وأسود هم الأقرب لقلبه! 🎬🍵<br>
            <img src="https://scontent.fcai1-2.fna.fbcdn.net/v/t39.30808-6/474461652_1555929278417761_7171604586751628989_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeHVyTkm4fe5dAxBDAVCOjeRr8UAKnXWs-qvxQAqddaz6jVCI2FXmOZH23YEirwwywx0Cnht9jvod8hgSD1GzESA&_nc_ohc=dOAxwspDeB8Q7kNvwE43iAl&_nc_oc=AdkjGwHSqgIXLmr9bRROlqZhpqBxem7FtnypiEUeB3ogLCJeY6fZTCLa-nkJU2ird_w&_nc_zt=23&_nc_ht=scontent.fcai1-2.fna&_nc_gid=1FQA_GGxUmU8RWZ-NSeRrw&oh=00_AfGQwJpcZwM5VOPR8EvCh4w7ME9IrObaENBARG3XohHNdA&oe=6817EF4D" style="width:120px;border-radius:50%;margin:13px auto 0;display:block"></div>`
        );
    });

    document.getElementById('bonus-future-wife').addEventListener('click', function() {
        soundManager.play('click');
        showModal(
            `<div style="font-size:1.2rem;text-align:center">
                <span style="font-size:2rem;">💞</span><br>
                بعد استطلاع سري بين البنات، <b>سهيلة</b> قالت: "أنا ممكن أفكر في رائد.. بس لما يبطل يسأل على البيتزا كل يوم!" 🍕😆<br>
                والبقية كلهم بيقولوا "ربنا يسعدك يا رائد.. ابعت الفرح إمتى?" 😂<br>
                <img src="https://scontent.fcai1-2.fna.fbcdn.net/v/t39.30808-6/490697463_689758646822703_9210522810865935637_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=109&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeFa3b0Ekha21U_J-RLYwVDHP5BXpNHo3yA_kFek0ejfIJoiof4eA9BI4OTuYoNeeav2npz_DNTc0iHPxx1nopHz&_nc_ohc=dE2qCKVQYhwQ7kNvwH3Q-yE&_nc_oc=Adm0vWDnfiCOiwsj5E4oj89gV7rhxD1Cppd087WUonBktXGonttbiwCeEc_CJ0IiAms&_nc_zt=23&_nc_ht=scontent.fcai1-2.fna&_nc_gid=dxjp6GHJ9JXUzIPYEnS2ZQ&oh=00_AfH1GzykLteySxNd8WRy0vGP1A_Qhs8gWjO_danzYcOrGA&oe=6817D2F4" style="width:120px;border-radius:50%;margin:14px auto 0;display:block">
            </div>`
        );
    });

    // Close modal functionality
    document.querySelector('.close-modal').addEventListener('click', function() {
        document.getElementById('secret-modal').classList.add('hidden');
    });

    // Helper function to show modal with content
    function showModal(content) {
        document.getElementById('modal-content').innerHTML = content;
        document.getElementById('secret-modal').classList.remove('hidden');
    }

    // Helper function to show a specific section
    function showSection(section) {
        // Hide all sections
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });

        // Show the selected section
        section.classList.add('active');
    }

    // Helper function to reset a section
    function resetSection(sectionId) {
        switch(sectionId) {
            case 'friendship-test':
                initFriendshipTest();
                break;
            case 'future-bride':
                initBrideTest();
                break;
            case 'who-said':
                initWhoSaid();
                break;
            case 'khaled-challenge':
            case 'raed-challenge':
            case 'wael-challenge':
                resetChallenge(sectionId);
                break;
        }
    }

    // Helper function to start a challenge
    function startChallenge(challengeId) {
        switch(challengeId) {
            case 'khaled-challenge':
                startKhaledChallenge();
                break;
            case 'raed-challenge':
                startRaedChallenge();
                break;
            case 'wael-challenge':
                startWaelChallenge();
                break;
        }
    }

    function initBrideTest() {
        const questions = [
            {
                question: "لو جالك شخص هيجيبلك قهوة، إيه اللي هتطلبه؟",
                options: [
                    "قهوة زي ما هو عامل، بلاش كلام 😴",
                    "قهوة أمريكي مظبوط مع شوية حليب 👌",
                    "نسكافيه بالكراميل وريحة معطرة 🍮",
                    "اللي هو يعرف يعملها صح، بس مش مرة 🤨"
                ],
                scores: { "جومانا": 3, "سهيلة": 2, "فرينا": 1, "رغدة": 4, "بسنت": 2, "حبيبية": 3, "رائد": 1 }
            },
            {
                question: "الخروجة المثالية ليك إيه؟",
                options: [
                    "كافيه هادي نتكلم ونضحك لساعات 🍵",
                    "مطعم حلو ونعمل سيلفي كتير 📸",
                    "رحلة برية أو بحرية مع الأصحاب 🏖️",
                    "نقعد في البيت ونتفرج على مسلسل كوميدي 🛋️"
                ],
                scores: { "جومانا": 2, "سهيلة": 3, "فرينا": 1, "رغدة": 4, "بسنت": 3, "حبيبية": 2, "رائد": 4 }
            },
            {
                question: "لو حد بيتقدملك للجواز، أول حاجة هتسأله عنها إيه؟",

                options: [
                    "بتعرف تطبخ ولا هنعتمد على الديليفري؟ 🍲",
                    "عندك شغل مستقر وهتعرف تعيشنا؟ 💼",
                    "بتحب أفلام الأكشن ولا الرومانسية؟ 🎬",
                    "قد إيه ممكن تتحمل مزاجي وهستيريا؟ 😂"
                ],
                scores: { "جومانا": 1, "سهيلة": 3, "فرينا": 4, "رغدة": 2, "بسنت": 1, "حبيبية": 4, "رائد": 2 }
            },
            {
                question: "الوجبة المفضلة ليك هي؟",
                options: [
                    "كشري مصري على أصوله 🍲",
                    "بيتزا وبس، بغض النظر عن التوابع 🍕",
                    "فول وطعمية من أحلى مكان 🥙",
                    "مهم الطعم والكمية، يلا يا مطعم! 🍽️"
                ],
                scores: { "جومانا": 3, "سهيلة": 2, "فرينا": 1, "رغدة": 4, "بسنت": 2, "حبيبية": 3, "رائد": 4 }
            },
            {
                question: "في يوم من الأيام، هتتجوزي من؟",
                options: [
                    "اللي يضحكني طول اليوم 🤣",
                    "اللي يقدر يفهمني من غير كلام 🤫",
                    "اللي معاه مصاري وهيوفر عليا 💰",
                    "اللي يكون صاحبي قبل ما يكون جوزي ❤️"
                ],
                scores: { "جومانا": 2, "سهيلة": 3, "فرينا": 1, "رغدة": 4, "بسنت": 2, "حبيبية": 4, "رائد": 3 }
            },
            {
                question: "لو حد زعلك، هتعملي إيه؟",
                options: [
                    "هسيبه يتكلم لوحده وأعمل إنه مفيش 😤",
                    "هتكلم معاه بصراحة وأوضح وجهة نظري 💁‍♀️",
                    "هاخد وقت أهدى وبعدين نتكلم 🧘‍♀️",
                    "هجيبله هدية صغيرة يصالحني 🎁"
                ],
                scores: { "جومانا": 1, "سهيلة": 3, "فرينا": 2, "رغدة": 4, "بسنت": 3, "حبيبية": 1, "رائد": 2 }
            }
        ];

        // Clear the container
        const container = document.getElementById('bride-questions');
        container.innerHTML = '';

        // Create the quiz
        createQuiz(container, questions, calculateBrideResult);

        // Hide result and show questions
        document.getElementById('bride-result').classList.add('hidden');
        container.classList.remove('hidden');
    }

    // Initialize the friendship test
    function initFriendshipTest() {
        const questions = [
            {
                question: "لما صاحبك يطلب منك طلب صعب، إيه اللي بتعمله؟",
                options: [
                    "بحاول أساعده مهما كان الطلب صعب",
                    "بعتذر بطريقة لطيفة لو مش هقدر",
                    "بفكر في مصلحتي الأول قبل ما أوافق"
                ],
                scores: { "خالد": 3, "رائد": 1, "وائل": 2 }
            },
            {
                question: "لما بتخرج مع صحابك، إيه المكان المفضل ليك؟",
                options: [
                    "كافيه هادي نقدر نتكلم فيه براحتنا",
                    "مطعم فيه أكل حلو وجو كويس",
                    "مكان فيه أنشطة وحركة زي البولينج أو البلاي ستيشن"
                ],
                scores: { "خالد": 2, "رائد": 3, "وائل": 1 }
            },
            {
                question: "لو صاحبك زعلان أو متضايق، بتتصرف إزاي؟",
                options: [
                    "بسمعه للآخر وأحاول أفهم هو محتاج إيه",
                    "بحاول أضحكه وأغير مزاجه",
                    "بجيب له هدية أو حاجة يحبها عشان أفرحه"
                ],
                scores: { "خالد": 2, "رائد": 3, "وائل": 1 }
            },
            {
                question: "أكتر حاجة بتقدرها في الصداقة إيه؟",
                options: [
                    "الصراحة والوضوح مهما كانت الظروف",
                    "المرح والفكاهة اللي بتخلي الحياة أحلى",
                    "الدعم والوقوف جنب بعض في المواقف الصعبة"
                ],
                scores: { "خالد": 3, "رائد": 2, "وائل": 1 }
            },
            {
                question: "لو فيه سر مهم بين أصحابك، إزاي بتتعامل معاه؟",
                options: [
                    "مستحيل أقوله لحد مهما حصل",
                    "ممكن أقوله لشخص واحد بس أثق فيه جدًا",
                    "بحتفظ بيه لنفسي، بس ممكن ألمح ليه في المقالب"
                ],
                scores: { "خالد": 1, "رائد": 3, "وائل": 2 }
            },
            {
                question: "لو صاحبك عمل حاجة مش مظبوطة، هتعمل إيه؟",
                options: [
                    "أواجهه على طول وأقوله رأيي بصراحة",
                    "أحاول أوصله الفكرة بطريقة غير مباشرة",
                    "أسيبه يكتشف غلطته بنفسه وأكون جنبه"
                ],
                scores: { "خالد": 3, "رائد": 2, "وائل": 1 }
            },
            {
                question: "أكتر حاجة بتحبها في الخروجات مع صحابك إيه؟",
                options: [
                    "المغامرات والتجارب الجديدة",
                    "الضحك والهزار طول الوقت",
                    "القعدة الهادية والكلام في المواضيع العميقة"
                ],
                scores: { "خالد": 1, "رائد": 3, "وائل": 2 }
            }
        ];

        // Clear the container
        const container = document.getElementById('friendship-questions');
        container.innerHTML = '';

        // Create the quiz
        createQuiz(container, questions, calculateFriendshipResult);

        // Hide result and show questions
        document.getElementById('friendship-result').classList.add('hidden');
        container.classList.remove('hidden');
    }

    // Initialize the Who Said game
    function initWhoSaid() {
        const quotes = [
            {
                quote: "انا مش عارف ادخل على الداتابيز ليه، مين غير الباسورد تاني؟",
                author: "خالد"
            },
            {
                quote: "شباب، أنا عايز أتجوز بجد.. حد عنده عروسة كويسة؟",
                author: "رائد"
            },
            {
                quote: "لو سمحت يا فندم، ممكن كوباية شاي بالنعناع؟",
                author: "وائل"
            },
            {
                quote: "ايه ده؟ في باج في الكود تاني؟ ده أنا لسة عامل run",
                author: "خالد"
            },
            {
                quote: "بكره هروح أشوف بدلة فرح جديدة",
                author: "رائد"
            }
        ];

        let currentQuestion = 0;
        let correctAnswers = 0;

        // Update the question
        function updateQuestion() {
            document.getElementById('who-said-question').textContent = quotes[currentQuestion].quote;
            document.getElementById('current-question').textContent = currentQuestion + 1;
            document.getElementById('total-questions').textContent = quotes.length;
            document.getElementById('who-said-feedback').classList.add('hidden');
        }

        // Check the answer
        function checkAnswer(selectedAuthor) {
            const correctAuthor = quotes[currentQuestion].author;
            const feedback = document.getElementById('who-said-feedback');

            if (selectedAuthor === correctAuthor) {
                feedback.textContent = "صحيح! 👍";
                feedback.classList.remove('incorrect');
                feedback.classList.add('correct');
                correctAnswers++;
                soundManager.play('success');
            } else {
                feedback.textContent = `خطأ! الإجابة الصحيحة هي: ${correctAuthor} 😅`;
                feedback.classList.remove('correct');
                feedback.classList.add('incorrect');
            }

            feedback.classList.remove('hidden');

            // Move to next question after delay
            setTimeout(() => {
                currentQuestion++;
                if (currentQuestion < quotes.length) {
                    updateQuestion();
                } else {
                    showFinalResult();
                }
            }, 2000);
        }

        // Show final result
        function showFinalResult() {
            document.getElementById('who-said-game').classList.add('hidden');
            document.getElementById('who-said-result').classList.remove('hidden');
            document.getElementById('correct-answers').textContent = correctAnswers;

            let feedback = "";
            if (correctAnswers === 5) {
                feedback = "ممتاز! أنت بتحفظ كلامهم أكتر منهم! 🏆";
            } else if (correctAnswers >= 3) {
                feedback = "جيد جدًا! أنت تعرفهم كويس 👍";
            } else {
                feedback = "تحتاج تقضي وقت أكتر معاهم عشان تعرفهم 😊";
            }

            document.getElementById('final-feedback').textContent = feedback;
        }

        // Set up event listeners for option buttons
        const optionButtons = document.querySelectorAll('.option-button');
        optionButtons.forEach(button => {
            button.addEventListener('click', function() {
                const selectedAuthor = this.getAttribute('data-person');
                checkAnswer(selectedAuthor);
            });
        });

        // Reset the game
        currentQuestion = 0;
        correctAnswers = 0;
        updateQuestion();

        document.getElementById('who-said-game').classList.remove('hidden');
        document.getElementById('who-said-result').classList.add('hidden');
    }

    // Photo Gallery Functionality
    const gallerySlider = document.querySelector('.gallery-slider');
    const totalSlides = document.querySelectorAll('.gallery-slide').length;
    let currentSlide = 0;

    // Create gallery dots
    const galleryDots = document.querySelector('.gallery-dots');
    galleryDots.innerHTML = '';
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.classList.add('gallery-dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            soundManager.play('click');
            goToSlide(i);
        });
        galleryDots.appendChild(dot);
    }

    // Gallery navigation
    document.getElementById('prev-photo').addEventListener('click', () => {
        soundManager.play('click');
        goToSlide(currentSlide - 1);
    });

    document.getElementById('next-photo').addEventListener('click', () => {
        soundManager.play('click');
        goToSlide(currentSlide + 1);
    });

    function goToSlide(slideIndex) {
        // Handle circular navigation
        if (slideIndex < 0) {
            slideIndex = totalSlides - 1;
        } else if (slideIndex >= totalSlides) {
            slideIndex = 0;
        }

        currentSlide = slideIndex;

        // Update slider position
        gallerySlider.style.transform = `translateX(${currentSlide * -25}%)`;

        // Update dots
        document.querySelectorAll('.gallery-dot').forEach((dot, index) => {
            if (index === currentSlide) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // Khaled's Challenge Functions
    function startKhaledChallenge() {
        let timer = 60;
        let timerInterval;
        const timerElement = document.getElementById('khaled-timer');

        // Reset challenge state
        document.querySelectorAll('.bug-option').forEach(option => {
            option.disabled = false;
        });

        document.getElementById('khaled-challenge-result').classList.add('hidden');

        // Start the timer
        timerElement.textContent = timer;
        timerInterval = setInterval(() => {
            timer--;
            timerElement.textContent = timer;

            if (timer <= 0) {
                clearInterval(timerInterval);
                endKhaledChallenge(false);
            }
        }, 1000);

        // Set up bug option event listeners
        document.querySelectorAll('.bug-option').forEach(option => {
            option.addEventListener('click', function() {
                clearInterval(timerInterval);
                const selectedBug = this.getAttribute('data-bug');
                endKhaledChallenge(selectedBug === 'both');
            });
        });
    }

    function endKhaledChallenge(isCorrect) {
        const resultElement = document.getElementById('khaled-challenge-result');
        const titleElement = document.getElementById('khaled-result-title');
        const messageElement = document.getElementById('khaled-result-message');

        if (isCorrect) {
            titleElement.textContent = "أحسنت! 🎉";
            messageElement.textContent = "لقد نجحت في اكتشاف الأخطاء البرمجية! خالد فخور بك!";
            soundManager.play('success');
        } else {
            titleElement.textContent = "للأسف! 😢";
            messageElement.textContent = "لم تستطع اكتشاف جميع الأخطاء. حاول مرة أخرى!";
        }

        resultElement.classList.remove('hidden');
    }

    // Raed's Challenge Functions
    function startRaedChallenge() {
        let timer = 60;
        let timerInterval;
        const timerElement = document.getElementById('raed-timer');
        let foundDifferences = 0;

        // Reset challenge state
        document.querySelectorAll('.difference-spot').forEach(spot => {
            spot.classList.remove('found');
        });

        document.getElementById('found-differences').textContent = "0";
        document.getElementById('raed-challenge-result').classList.add('hidden');

        // Start the timer
        timerElement.textContent = timer;
        timerInterval = setInterval(() => {
            timer--;
            timerElement.textContent = timer;

            if (timer <= 0) {
                clearInterval(timerInterval);
                endRaedChallenge(foundDifferences === 3);
            }
        }, 1000);

        // Set up difference spot event listeners
        document.querySelectorAll('.difference-spot').forEach(spot => {
            spot.addEventListener('click', function() {
                if (!this.classList.contains('found')) {
                    this.classList.add('found');
                    foundDifferences++;
                    document.getElementById('found-differences').textContent = foundDifferences;
                    soundManager.play('success');

                    if (foundDifferences === 3) {
                        clearInterval(timerInterval);
                        endRaedChallenge(true);
                    }
                }
            });
        });
    }

    function endRaedChallenge(isSuccess) {
        const resultElement = document.getElementById('raed-challenge-result');
        const titleElement = document.getElementById('raed-result-title');
        const messageElement = document.getElementById('raed-result-message');

        if (isSuccess) {
            titleElement.textContent = "أحسنت! 🎉";
            messageElement.textContent = "لقد نجحت في اكتشاف جميع الفروقات! رائد معجب بقدراتك!";
            soundManager.play('success');
        } else {
            titleElement.textContent = "انتهى الوقت! ⏰";
            messageElement.textContent = "لم تستطع اكتشاف جميع الفروقات في الوقت المحدد. حاول مرة أخرى!";
        }

        resultElement.classList.remove('hidden');
    }

    // Wael's Challenge Functions
    function startWaelChallenge() {
        let timer = 30;
        let timerInterval;
        const timerElement = document.getElementById('wael-timer');
        let score = 0;
        const gameArea = document.querySelector('.game-area');

        // Reset challenge state
        gameArea.innerHTML = '';
        document.getElementById('focus-score').textContent = "0";
        document.getElementById('wael-challenge-result').classList.add('hidden');

        // Start the timer
        timerElement.textContent = timer;
        timerInterval = setInterval(() => {
            timer--;
            timerElement.textContent = timer;

            if (timer <= 0) {
                clearInterval(timerInterval);
                clearInterval(circleInterval);
                endWaelChallenge(score);
            }
        }, 1000);

        // Generate circles every second
        const circleInterval = setInterval(() => {
            createRandomCircle();
        }, 1000);

        function createRandomCircle() {
            const circle = document.createElement('div');
            circle.classList.add('circle');

            // Randomly decide if it's a green or red circle
            const isGreen = Math.random() > 0.3;

            if (isGreen) {
                circle.classList.add('green-circle');
            } else {
                circle.classList.add('red-circle');
            }

            // Random position
            const left = Math.floor(Math.random() * 80) + 10; // 10% to 90%
            const top = Math.floor(Math.random() * 80) + 10; // 10% to 90%

            circle.style.left = `${left}%`;
            circle.style.top = `${top}%`;

            // Click event
            circle.addEventListener('click', function() {
                if (isGreen) {
                    score++;
                    document.getElementById('focus-score').textContent = score;
                    soundManager.play('success');
                } else {
                    score = Math.max(0, score - 1);
                    document.getElementById('focus-score').textContent = score;
                }

                // Remove the circle after clicking
                this.remove();
            });

            gameArea.appendChild(circle);

            // Remove the circle after 2 seconds if not clicked
            setTimeout(() => {
                if (circle.parentNode === gameArea) {
                    circle.remove();
                }
            }, 2000);
        }
    }

    function endWaelChallenge(score) {
        const resultElement = document.getElementById('wael-challenge-result');
        const titleElement = document.getElementById('wael-result-title');
        const messageElement = document.getElementById('wael-result-message');

        titleElement.textContent = "انتهت اللعبة! 🎮";

        if (score >= 10) {
            messageElement.textContent = `رائع! حصلت على ${score} نقطة. محمد وائل معجب بتركيزك العالي!`;
            soundManager.play('success');
        } else if (score >= 5) {
            messageElement.textContent = `جيد! حصلت على ${score} نقطة. تركيزك جيد!`;
        } else {
            messageElement.textContent = `حصلت على ${score} نقطة. يبدو أنك تحتاج لشرب شاي بالنعناع لتحسين تركيزك!`;
        }

        resultElement.classList.remove('hidden');
    }

    // Helper functions for challenge resets
    function resetChallenge(challengeId) {
        switch(challengeId) {
            case 'khaled-challenge':
                startKhaledChallenge();
                break;
            case 'raed-challenge':
                startRaedChallenge();
                break;
            case 'wael-challenge':
                startWaelChallenge();
                break;
        }
    }

    // Helper function to create quiz UI
    function createQuiz(container, questions, calculateResultFunction) {
        let currentQuestion = 0;
        const scores = { "خالد": 0, "رائد": 0, "وائل": 0, "جومانا": 0, "سهيلة": 0, "فرينا": 0, "رغدة": 0, "بسنت": 0, "حبيبية": 0, "رائد_عروسة": 0 };

        function showQuestion() {
            const questionData = questions[currentQuestion];

            // Create question element
            const questionElement = document.createElement('div');
            questionElement.classList.add('question');

            // Add question title
            const questionTitle = document.createElement('h3');
            questionTitle.textContent = questionData.question;
            questionElement.appendChild(questionTitle);

            // Add options
            const optionsContainer = document.createElement('div');
            optionsContainer.classList.add('options');

            questionData.options.forEach((option, index) => {
                const optionButton = document.createElement('button');
                optionButton.classList.add('option');
                optionButton.textContent = option;

                optionButton.addEventListener('click', () => {
                    soundManager.play('click');
                    // Update scores
                    for (const character in questionData.scores) {
                        if (index === 0) {
                            scores[character] += questionData.scores[character];
                        } else if (index === 1) {
                            scores[character] += (questionData.scores[character] > 2) ? questionData.scores[character] - 1 : questionData.scores[character] + 1;
                        } else if (index === 2) {
                            scores[character] += (questionData.scores[character] > 1) ? questionData.scores[character] - 2 : questionData.scores[character] + 2;
                        } else {
                            scores[character] += (questionData.scores[character] > 3) ? questionData.scores[character] - 3 : questionData.scores[character] + 3;
                        }
                    }

                    // Move to next question or show result
                    currentQuestion++;
                    if (currentQuestion < questions.length) {
                        container.innerHTML = '';
                        showQuestion();
                    } else {
                        calculateResultFunction(scores);
                    }
                });

                optionsContainer.appendChild(optionButton);
            });

            questionElement.appendChild(optionsContainer);
            container.appendChild(questionElement);
        }

        // Start showing questions
        showQuestion();
    }

    // Calculate friendship test result
    function calculateFriendshipResult(scores) {
        // Find the highest score
        let highestScore = 0;
        let winner = "";

        for (const character in scores) {
            if (character === "رائد_عروسة") continue; // Skip bride version of Raed

            if (scores[character] > highestScore) {
                highestScore = scores[character];
                winner = character;
            }
        }

        // Set the result
        let resultText = "";
        let imageSrc = "";

        switch(winner) {
            case "خالد":
                resultText = "أنت خالد! دائمًا تبحث عن الباجز وتحاول إصلاحها... حتى في حياتك الشخصية! 🐞";
                imageSrc = "https://scontent.fcai1-2.fna.fbcdn.net/v/t39.30808-1/462631130_548759631032905_2387529165169777688_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeGbvZD8dU5k44Qfz_XAi4dXLKNGQzCZaHAso0ZDMJlocDXgGUnKmHZq6_aum8X22I3ZCQS-VM4b9zYwllLuYB-B&_nc_ohc=b3-M-baL-yIQ7kNvwGghzGb&_nc_oc=AdmYH_s2jpfLf5_wRowEOQXdOJzDgZqz7Obz6Swg5nDw8oMr9zd-mzn4jN3FtRC9j_w&_nc_zt=24&_nc_ht=scontent.fcai1-2.fna&_nc_gid=X37Slbb-Y9sJG1T10K710g&oh=00_AfF3lIDs0p274epyBowdkvCm88Gmkoi7WxlKbc4qosgtMA&oe=6817FDE2";
                break;
            case "رائد":
                resultText = "أنت رائد! دائمًا تبحث عن عروسة... وربما ستجدها قريبًا! 👰‍♂️";
                imageSrc = "https://scontent.fcai1-2.fna.fbcdn.net/v/t39.30808-6/490697463_689758646822703_9210522810865935637_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=109&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeFa3b0Ekha21U_J-RLYwVDHP5BXpNHo3yA_kFek0ejfIJoiof4eA9BI4OTuYoNeeav2npz_DNTc0iHPxx1nopHz&_nc_ohc=dE2qCKVQYhwQ7kNvwH3Q-yE&_nc_oc=Adm0vWDnfiCOiwsj5E4oj89gV7rhxD1Cppd087WUonBktXGonttbiwCeEc_CJ0IiAms&_nc_zt=23&_nc_ht=scontent.fcai1-2.fna&_nc_gid=dxjp6GHJ9JXUzIPYEnS2ZQ&oh=00_AfH1GzykLteySxNd8WRy0vGP1A_Qhs8gWjO_danzYcOrGA&oe=6817D2F4";
                break;
            case "وائل":
                resultText = "أنت محمد وائل! هادئ ومتأمل ودائمًا ما تفضل شرب الشاي بالنعناع! 🍵";
                imageSrc = "https://scontent.fcai1-2.fna.fbcdn.net/v/t39.30808-6/474461652_1555929278417761_7171604586751628989_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeHVyTkm4fe5dAxBDAVCOjeRr8UAKnXWs-qvxQAqddaz6jVCI2FXmOZH23YEirwwywx0Cnht9jvod8hgSD1GzESA&_nc_ohc=dOAxwspDeB8Q7kNvwE43iAl&_nc_oc=AdkjGwHSqgIXLmr9bRROlqZhpqBxem7FtnypiEUeB3ogLCJeY6fZTCLa-nkJU2ird_w&_nc_zt=23&_nc_ht=scontent.fcai1-2.fna&_nc_gid=1FQA_GGxUmU8RWZ-NSeRrw&oh=00_AfGQwJpcZwM5VOPR8EvCh4w7ME9IrObaENBARG3XohHNdA&oe=6817EF4D";
                break;
        }

        document.getElementById('friendship-character-result').textContent = resultText;
        document.getElementById('friendship-character-img').src = imageSrc;
        document.getElementById('friendship-character-img').alt = winner;

        // Show result
        document.getElementById('friendship-questions').classList.add('hidden');
        document.getElementById('friendship-result').classList.remove('hidden');

        // Play success sound
        soundManager.play('success');
    }

    // Calculate bride test result
    function calculateBrideResult(scores) {
        // For this one, we'll add a bit of randomness to make it more fun
        const randomFactor = Math.floor(Math.random() * 5);

        // Add bride version of Raed to scores
        scores["رائد_عروسة"] = scores["رائد"] * 1.2; // Give it a slightly higher chance

        // Add random factor
        for (const character in scores) {
            scores[character] += Math.floor(Math.random() * 5);
        }

        // Find the highest score
        let highestScore = 0;
        let winner = "";

        for (const character in scores) {
            if (scores[character] > highestScore) {
                highestScore = scores[character];
                winner = character;
            }
        }

        // If it's Raed's bride version, use that
        if (winner === "رائد_عروسة") {
            winner = "رائد";
        }

        // Set the result
        let resultText = "";
        let imageSrc = "";

        switch(winner) {
            case "جومانا":
                resultText = "جومانا تبحث عن شخص مثلك تمامًا! رومانسي وذكي ومحب للحياة!";
                imageSrc = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23f8d7da'/%3E%3Ctext x='50%25' y='50%25' font-size='32' text-anchor='middle' dominant-baseline='middle'%3Eجومانا 💕%3C/text%3E%3C/svg%3E";
                break;
            case "سهيلة":
                resultText = "سهيلة تحب شخصيتك المرحة! وتقول إنها مستعدة للزواج غدًا!";
                imageSrc = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23d1ecf1'/%3E%3Ctext x='50%25' y='50%25' font-size='32' text-anchor='middle' dominant-baseline='middle'%3Eسهيلة 👑%3C/text%3E%3C/svg%3E";
                break;
            case "فرينا":
                resultText = "فرينا معجبة بذوقك وطريقة تفكيرك! تقول إنها وجدت توأم روحها!";
                imageSrc = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23d4edda'/%3E%3Ctext x='50%25' y='50%25' font-size='32' text-anchor='middle' dominant-baseline='middle'%3Eفرينا 🌸%3C/text%3E%3C/svg%3E";
                break;
            case "رغدة":
                resultText = "رغدة تريد أن تعرفك أكثر! تقول إنك شخص مميز ولديك قلب طيب!";
                imageSrc = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23fff3cd'/%3E%3Ctext x='50%25' y='50%25' font-size='32' text-anchor='middle' dominant-baseline='middle'%3Eرغدة 🌹%3C/text%3E%3C/svg%3E";
                break;
            case "بسنت":
                resultText = "بسنت تعتقد أنكما متوافقان جدًا! تقول إنها كانت تنتظرك منذ فترة طويلة!";
                imageSrc = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23e2e3e5'/%3E%3Ctext x='50%25' y='50%25' font-size='32' text-anchor='middle' dominant-baseline='middle'%3Eبسنت 🦋%3C/text%3E%3C/svg%3E";
                break;
            case "حبيبية":
                resultText = "حبيبية وقعت في حبك من أول نظرة! تقول إنها تريد التعرف عليك فورًا!";
                imageSrc = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23ffeeba'/%3E%3Ctext x='50%25' y='50%25' font-size='32' text-anchor='middle' dominant-baseline='middle'%3Eحبيبية ✨%3C/text%3E%3C/svg%3E";
                break;
            case "رائد":
                resultText = "مبروك! رائد هو عروستك المستقبلية! يقول إنه لا يستطيع الانتظار حتى الفرح! 👰‍♂️";
                imageSrc = "https://scontent.fcai1-2.fna.fbcdn.net/v/t39.30808-6/490697463_689758646822703_9210522810865935637_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=109&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeFa3b0Ekha21U_J-RLYwVDHP5BXpNHo3yA_kFek0ejfIJoiof4eA9BI4OTuYoNeeav2npz_DNTc0iHPxx1nopHz&_nc_ohc=dE2qCKVQYhwQ7kNvwH3Q-yE&_nc_oc=Adm0vWDnfiCOiwsj5E4oj89gV7rhxD1Cppd087WUonBktXGonttbiwCeEc_CJ0IiAms&_nc_zt=23&_nc_ht=scontent.fcai1-2.fna&_nc_gid=dxjp6GHJ9JXUzIPYEnS2ZQ&oh=00_AfH1GzykLteySxNd8WRy0vGP1A_Qhs8gWjO_danzYcOrGA&oe=6817D2F4";
                break;
        }

        document.getElementById('bride-name').textContent = winner;
        document.getElementById('bride-description').textContent = resultText;
        document.getElementById('bride-character-img').src = imageSrc;
        document.getElementById('bride-character-img').alt = winner;

        // Show result
        document.getElementById('bride-questions').classList.add('hidden');
        document.getElementById('bride-result').classList.remove('hidden');

        // Play success sound
        soundManager.play('success');
    }

    // Initialize all sections on load
    initFriendshipTest();
    initBrideTest();
    initWhoSaid();

    // By default, show the sections menu as starting page
    showSection(document.getElementById('sections-menu'));
});