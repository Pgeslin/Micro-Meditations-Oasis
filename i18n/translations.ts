
export const translations = {
  en: {
    // App Component
    heroTitle: 'The Power of the Pause',
    heroSubtitle: 'Discover micro-meditations—the art of finding peace and focus in under 60 seconds. Perfect for your busy, digitally-driven life.',
    whyTitle: 'Why Is Everyone Talking About This?',
    needResetTitle: 'The Need for a Reset',
    needResetText: 'Digital overload is real. Constant notifications and endless scrolling leave our minds cluttered. Micro-meditations offer a quick, accessible way to hit the reset button, cutting through the noise without a huge time commitment.',
    busyLivesTitle: 'Designed for Busy Lives',
    busyLivesText: 'In a world that glorifies being busy, finding an hour for wellness can feel impossible. These tiny practices fit into the cracks of your day—while waiting for coffee, between meetings, or before sending an email.',
    whatIsTitle: 'What Counts as a Micro-Meditation?',
    whatIsText: 'Simply put, it\'s any mindfulness practice that takes a minute or less. The goal isn\'t to empty your mind, but to gently guide your focus for a brief moment. It\'s about quality, not duration.',
    howItWorksTitle: 'How Can 60 Seconds Actually Work?',
    howItWorksText: 'Even a few deep breaths can signal to your brain that it\'s safe to relax. This activates the parasympathetic nervous system—your body\'s natural "rest and digest" mode. This simple switch helps lower stress hormones, reduce your heart rate, and improve your ability to focus. It’s a small action with a significant biological impact.',
    toolkitTitle: 'Your Reset Toolkit',
    toolkitSubtitle: 'Choose a practice that resonates with you and set your preferred duration.',
    setDuration: 'Set Duration:',
    continueJourneyTitle: 'Continue Your Journey',
    continueJourneyText: 'A bilingual (English/French) mindful AI companion grounded in the MBSR tradition. KAZE embodies mindfulness through dialogue, reflection, and poetic presence. Unlike other mindfulness tools, it doesn’t instruct — it listens, holds space, and co-practices awareness with you.',
    continueJourneyButton: 'Visit Kaze Mindfulness Dojo',
    footerText: 'Breathe in, breathe out. Your moment of calm is always available.',
    footerAuthor: 'Created by Pierre ‘Satch’ Geslin, mindfulness trainer and haiku poet in the Adelaide Hills of South Australia.',
    footerLink: 'Learn more…',
    
    // Timer & Breathing Exercise
    backButton: 'Back',
    complete: 'Complete',
    timerCompleteMessage: 'You\'ve found your moment of calm.',
    breathingCompleteMessage: 'Nicely done. Carry this calm with you.',
    breatheIn: 'Breathe In...',
    breatheOut: 'Breathe Out...',
    breathingInstruction: 'Follow the circle, inhaling as it grows and exhaling as it shrinks.',
    coherenceBenefit: 'This 4-4 breathing rhythm, known as cardiac coherence, is proven to reduce stress.',
    sixSecondBenefit: 'This slow, rhythmic 6-6 breathing activates the body\'s "rest and digest" response, helping to lower heart rate and reduce stress.',

    // Practice Detail
    practiceDetailWhat: 'What is it?',
    practiceDetailWhy: 'Why it helps',
    practiceDetailHow: 'How to practice',
    practiceDetailWhen: 'When to use it',
    practiceDetailWhere: 'Where to practice',
    startPracticeButton: 'Start Practice',

    // Reminder Component
    reminderTitle: 'Set a Mindful Reminder',
    reminderSubtitle: 'Let us gently nudge you to take a pause later in your day.',
    notificationsDenied: 'Notifications for this site are currently turned off. To use reminders, please enable them in your browser settings. You can often find this option by clicking the lock icon in the address bar.',
    reminderSetFor: 'A mindful reminder is set for',
    clearReminder: 'Clear Reminder',
    in15min: 'In 15 min',
    in1hour: 'In 1 hour',
    in4hours: 'In 4 hours',
    
    // Generative Meditation Component
    genTitle: 'Create Your Own Moment',
    genSubtitle: 'Feeling something else? Select a theme and let our AI craft a unique, guided meditation just for you.',
    genSelectTheme: '1. Select a Theme',
    genSelectDuration: '2. Select a Duration',
    genDurationWarning: 'Longer meditations take a little more time to craft. For a quicker experience, you might like to try the 1-minute option first!',
    genSelectVoice: '3. Choose a Voice',
    genCraftButton: 'Craft My Meditation',
    genCraftingButton: 'Crafting...',
    genCraftingMessage: 'Preparing your personal meditation and voice guidance. Thank you for your patience.',
    genError: 'Sorry, something went wrong while creating your meditation. Please try again.',
    genMeditationTitle: 'Your Personal Meditation',
    genAudioMessage: 'Preparing audio guidance...',
    genPlay: 'Play guided meditation',
    genPause: 'Pause guided meditation',

    durations: {
      d30s: '30s',
      d1m: '1 min',
      d2m: '2 min',
      d3m: '3 min',
    },
    voices: {
      calmFemale: 'Calm (Female)',
      gentleMale: 'Gentle (Male)',
      brightFemale: 'Bright (Female)',
      deepMale: 'Deep (Male)',
      warmMale: 'Warm (Male)',
    },
    notification: {
      title: 'Time for a Mindful Moment',
      body: 'Click here to take a short pause and reset your day.',
    },
    
    practices: [
        { 
          id: 'six-second-breathing', 
          title: 'Six-Second Breathing', 
          description: 'A slow inhale, a slow exhale.\nLet the rhythm settle you and steady the nervous system.',
          details: {
            what: 'A simple technique where you intentionally slow your breath to a rhythm of approximately six seconds for the inhale and six seconds for the exhale. It\'s a powerful way to consciously regulate your body\'s stress response.',
            why: 'This slow, deliberate breathing pattern activates the parasympathetic nervous system, our natural \'rest and digest\' mode. It helps lower heart rate, reduce blood pressure, and calm feelings of anxiety, bringing a sense of balance and focus.',
            how: '1. Find a comfortable position, sitting or standing.\n2. Gently inhale through your nose for a count of six.\n3. Without pausing, gently exhale through your nose or mouth for a count of six.\n4. Continue this smooth, even rhythm. Don\'t force it; find a pace that feels natural and calming for you.',
            when: 'Anytime you feel stress levels rising, before a difficult conversation, during a work break, or when you need to quickly center yourself before an important task.',
            where: 'Anywhere: at your desk, in a meeting (no one will notice), waiting in line, on public transport, or even while walking. It\'s completely silent and portable.'
          }
        },
        { 
          title: 'Release the shoulders', 
          description: 'Feel the weight slide down the arms.\nOne soft breath melts the tension in the traps.',
          details: {
            what: 'A quick physical action to consciously let go of the tension we commonly hold in our neck and shoulder area.',
            why: 'We unconsciously carry stress in our shoulders, leading to stiffness, headaches, and pain. Actively releasing them sends a powerful signal of safety to the nervous system, promoting immediate physical and mental relaxation.',
            how: '1. Sit or stand with a tall spine.\n2. On an inhale, lift your shoulders up towards your ears, scrunching them up tight.\n3. Hold for a moment, noticing the built-up tension.\n4. On an exhale, release them completely with a sigh, letting them drop down and away from your ears.\n5. Feel the new sense of space and release.',
            when: 'Especially useful when you notice your shoulders creeping up towards your ears, while working long hours at a computer, or during a stressful meeting.',
            where: 'Perfect for doing at your desk, in your car (while parked!), while cooking, or any time you feel that familiar neck and shoulder tightness.'
          }
        },
        { 
          title: 'Three slow breaths', 
          description: 'Three quiet breaths to pause, reset, and return.',
          details: {
            what: 'The simple act of pausing whatever you are doing to take three deliberate, unhurried breaths, giving them your full attention.',
            why: 'This practice powerfully interrupts the cycle of stress and automatic thoughts. By focusing on the physical sensation of your breath, you ground yourself firmly in the present moment, creating a pocket of calm and mental clarity.',
            how: '1. Pause what you are doing and find a comfortable posture.\n2. Take a slow, deep breath in through your nose, feeling your belly expand.\n3. Exhale slowly, perhaps through your mouth with a soft sigh, letting go of any obvious tension.\n4. Repeat this two more times, following the entire journey of each breath from beginning to end.',
            when: 'Use this as a circuit-breaker. Before reacting to a stressful email, when feeling overwhelmed by a to-do list, or as a mindful transition between different tasks.',
            where: 'This is a completely portable and invisible practice. You can do it with your eyes open or closed, in any location, from a noisy office to a quiet room.'
          }
        },
        { 
          title: 'Soften the jaw and face', 
          description: 'Unclench the jaw, relax the cheeks.\nLet the face remember ease.',
          details: {
            what: 'A focused instruction to consciously relax the small, often-tense muscles around your jaw, mouth, and forehead.',
            why: 'We often clench our jaw and furrow our brow without realizing it, especially when concentrating or stressed. Softening these muscles can release a surprising amount of stored tension, easing headaches and promoting a sense of calm that spreads through the body.',
            how: '1. Bring your awareness to your jaw. Intentionally unclench your teeth, letting a small space appear between your top and bottom rows.\n2. Let your tongue rest comfortably on the floor of your mouth.\n3. Allow your cheeks and lips to feel soft and heavy.\n4. Soften the space between your eyebrows and across your forehead.',
            when: 'During periods of intense focus, when you catch yourself grinding your teeth, or as you are settling down to sleep.',
            where: 'This is another practice you can do anytime, anywhere. It\'s particularly helpful during screen time or while reading.'
          }
        },
        { 
          title: 'Come back into the body', 
          description: 'Feel the feet on the ground, the legs, the belly.\nA simple way home.',
          details: {
            what: 'A grounding technique that shifts your attention from the busy world of your thoughts down into the physical sensations of your body.',
            why: 'When we\'re lost in thought, worry, or planning, we become disconnected from the present moment. This practice anchors you in the "here and now" through direct physical sensations, which can instantly reduce anxiety and overthinking.',
            how: '1. Feel the points of contact your body is making with the world—your feet on the floor, your body on a chair.\n2. Notice the solid, steady sensation of the ground beneath you.\n3. Expand your awareness to feel your legs, the weight of your arms, and the gentle rise and fall of your belly as you breathe.\n4. Simply rest in these physical sensations for a moment.',
            when: 'When you feel scattered, lost in thought, or disconnected. It\'s an excellent way to start a meeting or to re-center during a hectic day.',
            where: 'Effective anywhere, but especially powerful when you can feel your feet planted firmly on the ground, either sitting or standing.'
          }
        },
        { 
          title: 'Warm the hands, warm the mind', 
          description: 'Rub your hands gently and rest them on heart or belly.\nWarmth finds its way inside.',
          details: {
            what: 'A self-soothing gesture that uses physical warmth and gentle pressure to create a sense of comfort and safety.',
            why: 'The combination of warmth and gentle touch is deeply calming to our nervous system. It activates the release of oxytocin, a hormone associated with bonding and relaxation, helping to soothe anxiety and self-criticism.',
            how: '1. Briskly but gently rub the palms of your hands together until they feel warm.\n2. Place your warm hands somewhere comforting on your body, like over your heart, on your belly, or cupped over your face.\n3. Close your eyes if you wish, and take a few breaths, feeling the warmth spread into your body.',
            when: 'When you are feeling anxious, cold, lonely, or being hard on yourself. It is a gesture of self-compassion.',
            where: 'Best done in a place where you have a moment of privacy, like at your desk, in a quiet corner, or in a restroom.'
          }
        },
        { 
          title: 'Listen to the nearest sound', 
          description: 'Let the world come to you.\nNotice the closest sound, then the next.',
          details: {
            what: 'An auditory mindfulness practice where you gently shift your attention to the sounds happening around you, without judging or analyzing them.',
            why: 'This practice pulls you out of your internal narrative and into the richness of the present moment. It can reduce the feeling of being overwhelmed by your thoughts and helps cultivate a sense of open, receptive awareness.',
            how: '1. Pause and simply open your ears.\n2. Notice the closest sound to you. It might be the hum of a computer, your own breath, or the rustle of clothing.\n3. Without effort, let your awareness expand to sounds a little further away.\n4. Then, listen for the most distant sound you can detect.\n5. Simply receive these sounds without needing to name or judge them.',
            when: 'When your mind feels noisy or you are stuck in a loop of repetitive thoughts. It is also a wonderful way to tune into your environment.',
            where: 'Anywhere! This practice can transform a mundane environment (like an office or a commute) into a rich soundscape.'
          }
        },
        { 
          title: 'One breath before responding', 
          description: 'A single breath creates space.\nA moment to choose your words with clarity.',
          details: {
            what: 'The intentional practice of taking one full, conscious breath after someone speaks to you and before you reply.',
            why: 'This tiny pause prevents impulsive, reactive communication. It gives your brain a moment to move from the reactive emotional center to the more thoughtful prefrontal cortex, allowing you to respond with greater clarity, wisdom, and kindness.',
            how: '1. When someone finishes speaking or asks you a question, resist the urge to answer immediately.\n2. Take one smooth inhale.\n3. Take one smooth exhale.\n4. Formulate your response and then speak.',
            when: 'Crucial during difficult conversations, in meetings, when receiving feedback, or in any interaction where you want to be more intentional and less reactive.',
            where: 'In any conversation, whether in person, on the phone, or even before typing a reply to an email or message.'
          }
        },
        { 
          title: 'Slow exhale to settle', 
          description: 'A long, soft out-breath.\nLet the system drop a gear.',
          details: {
            what: 'Focusing on making your exhalation slightly longer than your inhalation. This is often called "physiological sighing."',
            why: 'A long exhale is one of the fastest ways to activate the parasympathetic (rest and digest) nervous system. It directly signals to your brain and body that it is safe to relax, helping to quickly down-regulate feelings of stress and anxiety.',
            how: '1. Take a normal, comfortable breath in through your nose.\n2. Exhale slowly and gently through your mouth, as if you were breathing through a straw, making the out-breath last longer than the in-breath.\n3. You don\'t need to force it. Just a gentle extension is enough.\n4. Repeat 2-3 times.',
            when: 'When you feel a sudden spike of anxiety, before public speaking, when you\'re trying to fall asleep, or anytime you need to calm your nerves quickly.',
            where: 'A subtle and effective technique that can be used anywhere, anytime, without anyone noticing.'
          }
        },
        { 
          title: 'Soften the eyes', 
          description: 'Relax the gaze.\nShift from tunnel vision into wider seeing.',
          details: {
            what: 'Consciously relaxing the muscles around your eyes and allowing your gaze to become unfocused and wide, taking in your peripheral vision.',
            why: 'When we are stressed or focused intensely (especially on screens), we tend to develop a narrow, sharp "tunnel vision." Softening the gaze counteracts this, signaling to the brain that there is no immediate threat, which promotes relaxation and a broader, more open perspective.',
            how: '1. Stare at a point in front of you for a moment.\n2. Now, intentionally relax the muscles around your eyes.\n3. Let your gaze go soft and unfocused, as if you are looking through the object rather than at it.\n4. Become aware of your peripheral vision—what you can see to the sides without turning your head.',
            when: 'During long periods of screen time to reduce eye strain, when feeling mentally "stuck" or narrow-minded, or during a stressful situation to help broaden your perspective.',
            where: 'Excellent to do at your desk, while on a walk, or looking out a window.'
          }
        },
        { 
          title: 'One thing you’re grateful for', 
          description: 'Rest with one quiet moment of gratitude.\nLet it touch you.',
          details: {
            what: 'A brief mental exercise to intentionally bring to mind one specific thing, person, or experience you feel genuinely grateful for.',
            why: 'Gratitude is a powerful antidote to our brain\'s natural "negativity bias." It actively shifts our focus to what is good in our lives, which is proven to boost mood, reduce stress, and increase feelings of well-being and connection.',
            how: '1. Pause and ask yourself: "What is one small thing I am grateful for right now?"\n2. It doesn\'t have to be big. It could be the cup of coffee in your hand, a kind word from a colleague, or the feeling of sunshine.\n3. Bring it to mind and let yourself feel the genuine appreciation for 10-20 seconds.',
            when: 'A wonderful way to start or end the day. Also powerful when you are feeling down, frustrated, or taking things for granted.',
            where: 'A purely mental exercise that can be done anywhere—in bed, at your desk, or while walking.'
          }
        },
        { 
          title: 'Reset your posture', 
          description: 'Lengthen the spine, soften the shoulders.\nA simple realignment.',
          details: {
            what: 'A conscious check-in and gentle adjustment of your physical posture to create a more upright, open, and balanced alignment.',
            why: 'Our posture affects our mood and energy levels (and vice-versa). Slouching can make us feel more tired and withdrawn. Sitting or standing tall can increase feelings of confidence and alertness. This reset also relieves physical strain.',
            how: '1. If sitting, feel your feet on the floor and your sit bones on the chair.\n2. Imagine a string gently pulling the crown of your head up towards the ceiling, lengthening your spine.\n3. Allow your shoulders to relax down and back, away from your ears.\n4. Let your chin be parallel to the floor. Take one deep breath in this new, aligned posture.',
            when: 'Multiple times throughout the day, especially if you work at a desk. Set a recurring alarm if it helps you remember.',
            where: 'Primarily at your desk, but you can also do it while standing in line, walking, or sitting in your car.'
          }
        },
        { 
          title: 'A hand on the heart', 
          description: 'A gentle touch to meet yourself with care.',
          details: {
            what: 'The simple, compassionate act of placing a hand over your heart or another comforting place on your body.',
            why: 'This is a form of supportive physical touch that is deeply soothing to the nervous system. It provides a tangible sense of self-compassion and care, especially during difficult moments, reminding you that you can be a source of your own comfort.',
            how: '1. Take one of your hands and gently place it over the center of your chest.\n2. Feel the gentle pressure and warmth from your hand.\n3. You can close your eyes if you like. Take a couple of slow, easy breaths.\n4. You might offer yourself a silent, kind phrase like "This is a moment of difficulty" or "May I be kind to myself."',
            when: 'When you feel hurt, sad, anxious, or are being self-critical. It\'s a way to offer yourself immediate comfort and kindness.',
            where: 'You can do this discreetly at a desk, but it is most comforting in a private space where you can fully connect with the gesture.'
          }
        },
        { 
          title: 'RAIN', 
          description: 'A soft four-step pause: recognise, allow, investigate, nurture.',
          details: {
            what: 'RAIN is an acronym for a four-step mindfulness practice to navigate difficult emotions: Recognize, Allow, Investigate, and Nurture.',
            why: 'Instead of suppressing or being overwhelmed by difficult feelings, RAIN provides a structured, compassionate way to be with them. It builds emotional resilience and helps you respond to your inner experience with wisdom and self-kindness.',
            how: '1. **R**ecognize what is happening (e.g., "Anxiety is here").\n2. **A**llow the experience to be there, just as it is, without trying to fix or change it.\n3. **I**nvestigate with curiosity and care. How does this feel in your body?\n4. **N**urture with self-compassion. Place a hand on your heart or offer yourself a kind word.',
            when: 'When you are caught in a strong or painful emotion like anger, fear, or sadness. It is a practice for turning towards difficulty rather than away from it.',
            where: 'Best practiced in a quiet space where you can sit with your experience without interruption for a minute.'
          }
        },
        { 
          title: 'STOP', 
          description: 'Stop, breathe, observe, and proceed with clarity.',
          details: {
            what: 'STOP is an acronym for a four-step practice to interrupt autopilot mode and bring mindful awareness to the present moment: Stop, Take a breath, Observe, and Proceed.',
            why: 'This practice acts as a "mindful speed bump" during a busy day. It breaks the cycle of reactive, mindless activity, giving you a chance to check in with yourself and make a more conscious choice about what you do next.',
            how: '1. **S**top: Whatever you are doing, just pause for a moment.\n2. **T**ake a breath: Follow the sensation of one full, conscious breath.\n3. **O**bserve: Notice your thoughts, feelings, and bodily sensations without judgment.\n4. **P**roceed: Having checked in, continue with your day with renewed awareness and intention.',
            when: 'Use this as a transition between tasks, when you feel you\'re rushing, or anytime you want to step out of autopilot and re-engage with the present.',
            where: 'Anywhere. It can be done in a few seconds at your desk, before getting out of your car, or before entering a meeting.'
          }
        },
    ],
    
    genThemes: ['Acceptance', 'Beginner\'s Mind', 'Compassion', 'Energy', 'Focus', 'Generosity', 'Gratitude', 'Letting Go', 'Mindfulness', 'Non-Judging', 'Non-striving', 'Patience', 'Relaxation', 'Sleep', 'Stress Relief', 'Trust'],
    
    genPrompt: (durationInMinutes: number, wordCount: number, selectedTheme: string) => `You are a mindfulness expert. Write a short, soothing, ${durationInMinutes}-minute guided meditation script focusing on the theme of '${selectedTheme}'. The script should be easy for a beginner to follow and be approximately ${wordCount} words. Do not use markdown or any special formatting. Just provide the script text.`,

  },
  fr: {
    // App Component
    heroTitle: 'Le Pouvoir de la Pause',
    heroSubtitle: 'Découvrez les micro-méditations — l\'art de trouver la paix et la concentration en moins de 60 secondes. Parfait pour votre vie active et numérique.',
    whyTitle: 'Pourquoi Tout le Monde en Parle ?',
    needResetTitle: 'Le Besoin d\'une Remise à Zéro',
    needResetText: 'La surcharge numérique est réelle. Les notifications constantes et le défilement infini encombrent nos esprits. Les micro-méditations offrent un moyen rapide et accessible d\'appuyer sur le bouton de réinitialisation, pour percer le bruit sans un engagement de temps énorme.',
    busyLivesTitle: 'Conçu pour les Vies Actives',
    busyLivesText: 'Dans un monde qui glorifie l\'hyperactivité, trouver une heure pour le bien-être peut sembler impossible. Ces petites pratiques s\'intègrent dans les interstices de votre journée — en attendant votre café, entre les réunions, ou avant d\'envoyer un e-mail.',
    whatIsTitle: 'Qu\'est-ce qu\'une Micro-Méditation ?',
    whatIsText: 'En bref, c\'est toute pratique de pleine conscience qui prend une minute ou moins. Le but n\'est pas de vider votre esprit, mais de guider doucement votre attention pendant un bref instant. Il s\'agit de qualité, pas de durée.',
    howItWorksTitle: 'Comment 60 Secondes Peuvent-elles Vraiment Fonctionner ?',
    howItWorksText: 'Même quelques respirations profondes peuvent signaler à votre cerveau qu\'il peut se détendre en toute sécurité. Cela active le système nerveux parasympathique — le mode naturel de "repos et digestion" de votre corps. Ce simple changement aide à réduire les hormones du stress, à diminuer votre fréquence cardiaque et à améliorer votre capacité de concentration. C\'est une petite action avec un impact biologique significatif.',
    toolkitTitle: 'Votre Boîte à Outils de Réinitialisation',
    toolkitSubtitle: 'Choisissez une pratique qui résonne avec vous et définissez votre durée préférée.',
    setDuration: 'Durée :',
    continueJourneyTitle: 'Poursuivez Votre Voyage',
    continueJourneyText: 'Un compagnon IA bilingue (anglais/français) et conscient, ancré dans la tradition MBSR. KAZE incarne la pleine conscience à travers le dialogue, la réflexion et une présence poétique. Contrairement à d\'autres outils de pleine conscience, il n\'instruit pas — il écoute, offre un espace et co-pratique la conscience avec vous.',
    continueJourneyButton: 'Visiter le Dojo de Pleine Conscience Kaze',
    footerText: 'Inspirez, expirez. Votre moment de calme est toujours disponible.',
    footerAuthor: 'Créé par Pierre ‘Satch’ Geslin, formateur en pleine conscience et poète de haïku dans les Adelaide Hills en Australie-Méridionale.',
    footerLink: 'En savoir plus…',

    // Timer & Breathing Exercise
    backButton: 'Retour',
    complete: 'Terminé',
    timerCompleteMessage: 'Vous avez trouvé votre moment de calme.',
    breathingCompleteMessage: 'Bien joué. Gardez ce calme avec vous.',
    breatheIn: 'Inspirez...',
    breatheOut: 'Expirez...',
    breathingInstruction: 'Suivez le cercle, en inspirant lorsqu\'il grandit et en expirant lorsqu\'il rétrécit.',
    coherenceBenefit: 'Ce rythme respiratoire 4-4, connu sous le nom de cohérence cardiaque, est reconnu pour réduire le stress.',
    sixSecondBenefit: 'Cette respiration lente et rythmée en 6-6 active la réponse de "repos et digestion" du corps, aidant à réduire la fréquence cardiaque et le stress.',
    
    // Practice Detail
    practiceDetailWhat: 'Qu\'est-ce que c\'est ?',
    practiceDetailWhy: 'Pourquoi ça aide',
    practiceDetailHow: 'Comment pratiquer',
    practiceDetailWhen: 'Quand l\'utiliser',
    practiceDetailWhere: 'Où pratiquer',
    startPracticeButton: 'Commencer la Pratique',

    // Reminder Component
    reminderTitle: 'Définir un Rappel de Pleine Conscience',
    reminderSubtitle: 'Laissez-nous vous encourager doucement à faire une pause plus tard dans votre journée.',
    notificationsDenied: 'Les notifications pour ce site sont actuellement désactivées. Pour utiliser les rappels, veuillez les activer dans les paramètres de votre navigateur. Vous pouvez souvent trouver cette option en cliquant sur l\'icône de cadenas dans la barre d\'adresse.',
    reminderSetFor: 'Un rappel de pleine conscience est défini pour',
    clearReminder: 'Effacer le Rappel',
    in15min: 'Dans 15 min',
    in1hour: 'Dans 1 heure',
    in4hours: 'Dans 4 heures',

    // Generative Meditation Component
    genTitle: 'Créez Votre Propre Moment',
    genSubtitle: 'Envie d\'autre chose ? Sélectionnez un thème et laissez notre IA créer une méditation guidée unique, juste pour vous.',
    genSelectTheme: '1. Sélectionnez un Thème',
    genSelectDuration: '2. Sélectionnez une Durée',
    genDurationWarning: 'Les méditations plus longues prennent un peu plus de temps à créer. Pour une expérience plus rapide, vous pourriez essayer l\'option d\'1 minute d\'abord !',
    genSelectVoice: '3. Choisissez une Voix',
    genCraftButton: 'Créer Ma Méditation',
    genCraftingButton: 'Création...',
    genCraftingMessage: 'Préparation de votre méditation personnelle et du guidage vocal. Merci de votre patience.',
    genError: 'Désolé, une erreur est survenue lors de la création de votre méditation. Veuillez réessayer.',
    genMeditationTitle: 'Votre Méditation Personnelle',
    genAudioMessage: 'Préparation du guidage audio...',
    genPlay: 'Lancer la méditation guidée',
    genPause: 'Mettre en pause la méditation guidée',
    
    durations: {
      d30s: '30s',
      d1m: '1 min',
      d2m: '2 min',
      d3m: '3 min',
    },
    voices: {
      calmFemale: 'Calme (Féminine)',
      gentleMale: 'Doux (Masculin)',
      brightFemale: 'Claire (Féminine)',
      deepMale: 'Profond (Masculin)',
      warmMale: 'Chaleureux (Masculin)',
    },
    notification: {
      title: 'C\'est l\'heure d\'un moment de pleine conscience',
      body: 'Cliquez ici pour faire une courte pause et réinitialiser votre journée.',
    },

    practices: [
      { 
        id: 'six-second-breathing', 
        title: 'Respiration de Six Secondes', 
        description: 'Une inspiration lente, une expiration lente.\nLaissez le rythme vous apaiser et stabiliser le système nerveux.',
        details: {
          what: 'Une technique simple où vous ralentissez intentionnellement votre respiration à un rythme d\'environ six secondes pour l\'inspiration et six secondes pour l\'expiration. C\'est un moyen puissant de réguler consciemment la réponse au stress de votre corps.',
          why: 'Ce rythme respiratoire lent et délibéré active le système nerveux parasympathique, notre mode naturel de "repos et digestion". Il aide à réduire la fréquence cardiaque, la pression artérielle et à calmer les sentiments d\'anxiété, apportant un sentiment d\'équilibre et de concentration.',
          how: '1. Trouvez une position confortable, assis ou debout.\n2. Inspirez doucement par le nez en comptant jusqu\'à six.\n3. Sans marquer de pause, expirez doucement par le nez ou la bouche en comptant jusqu\'à six.\n4. Continuez ce rythme doux et régulier. Ne forcez pas ; trouvez une cadence qui vous semble naturelle et apaisante.',
          when: 'Chaque fois que vous sentez le stress monter, avant une conversation difficile, pendant une pause au travail, ou lorsque vous avez besoin de vous recentrer rapidement avant une tâche importante.',
          where: 'N\'importe où : à votre bureau, en réunion (personne ne le remarquera), dans une file d\'attente, dans les transports en commun, ou même en marchant. C\'est totalement silencieux et portable.'
        }
      },
      { 
        title: 'Relâcher les épaules', 
        description: 'Sentez le poids glisser le long des bras.\nUn souffle doux fait fondre la tension dans les trapèzes.',
        details: {
          what: 'Une action physique rapide pour laisser consciemment partir la tension que nous accumulons couramment dans la région du cou et des épaules.',
          why: 'Nous portons inconsciemment le stress dans nos épaules, ce qui entraîne raideurs, maux de tête et douleurs. Les relâcher activement envoie un puissant signal de sécurité au système nerveux, favorisant une détente physique et mentale immédiate.',
          how: '1. Asseyez-vous ou tenez-vous droit.\n2. À l\'inspiration, levez les épaules vers vos oreilles, en les contractant fermement.\n3. Maintenez la position un instant, en remarquant la tension accumulée.\n4. À l\'expiration, relâchez-les complètement avec un soupir, en les laissant tomber loin de vos oreilles.\n5. Ressentez le nouvel espace et le relâchement.',
          when: 'Particulièrement utile lorsque vous remarquez que vos épaules remontent, lorsque vous travaillez de longues heures devant un ordinateur ou lors d\'une réunion stressante.',
          where: 'Parfait à faire à votre bureau, dans votre voiture (à l\'arrêt !), en cuisinant, ou chaque fois que vous sentez cette tension familière dans le cou et les épaules.'
        }
      },
      { 
        title: 'Trois respirations lentes', 
        description: 'Trois respirations calmes pour faire une pause, se réinitialiser et revenir.',
        details: {
          what: 'L\'acte simple de marquer une pause dans ce que vous faites pour prendre trois respirations délibérées et calmes, en leur accordant toute votre attention.',
          why: 'Cette pratique interrompt puissamment le cycle du stress et des pensées automatiques. En vous concentrant sur la sensation physique de votre souffle, vous vous ancrez fermement dans le moment présent, créant une bulle de calme et de clarté mentale.',
          how: '1. Arrêtez ce que vous faites et trouvez une posture confortable.\n2. Prenez une inspiration lente et profonde par le nez, en sentant votre ventre se gonfler.\n3. Expirez lentement, peut-être par la bouche avec un léger soupir, en laissant aller toute tension évidente.\n4. Répétez deux fois de plus, en suivant le parcours complet de chaque respiration du début à la fin.',
          when: 'Utilisez ceci comme un disjoncteur. Avant de réagir à un email stressant, lorsque vous vous sentez submergé par une liste de tâches, ou comme une transition consciente entre différentes activités.',
          where: 'C\'est une pratique totalement portable et invisible. Vous pouvez la faire les yeux ouverts ou fermés, dans n\'importe quel lieu, d\'un bureau bruyant à une pièce calme.'
        }
      },
      { 
        title: 'Détendre la mâchoire et le visage', 
        description: 'Desserrez la mâchoire, détendez les joues.\nLaissez le visage se souvenir de la facilité.',
        details: {
          what: 'Une instruction ciblée pour détendre consciemment les petits muscles, souvent tendus, autour de votre mâchoire, de votre bouche et de votre front.',
          why: 'Nous serrons souvent la mâchoire et fronçons les sourcils sans nous en rendre compte, surtout lorsque nous sommes concentrés ou stressés. Détendre ces muscles peut libérer une quantité surprenante de tension accumulée, soulageant les maux de tête et favorisant un sentiment de calme qui se propage dans tout le corps.',
          how: '1. Portez votre attention sur votre mâchoire. Desserrez intentionnellement vos dents, en laissant un petit espace apparaître entre les rangées supérieure et inférieure.\n2. Laissez votre langue reposer confortablement dans le bas de votre bouche.\n3. Permettez à vos joues et à vos lèvres de devenir douces et lourdes.\n4. Adoucissez l\'espace entre vos sourcils et sur votre front.',
          when: 'Pendant les périodes de concentration intense, lorsque vous vous surprenez à grincer des dents, ou lorsque vous vous installez pour dormir.',
          where: 'C\'est une autre pratique que vous pouvez faire n\'importe quand, n\'importe où. Elle est particulièrement utile pendant le temps d\'écran ou la lecture.'
        }
      },
      { 
        title: 'Revenir dans le corps', 
        description: 'Sentez les pieds sur le sol, les jambes, le ventre.\nUn simple chemin de retour à la maison.',
        details: {
          what: 'Une technique d\'ancrage qui déplace votre attention du monde agité de vos pensées vers les sensations physiques de votre corps.',
          why: 'Lorsque nous sommes perdus dans nos pensées, nos soucis ou notre planification, nous nous déconnectons du moment présent. Cette pratique vous ancre dans "l\'ici et maintenant" par des sensations physiques directes, ce qui peut réduire instantanément l\'anxiété et la rumination mentale.',
          how: '1. Sentez les points de contact de votre corps avec le monde : vos pieds sur le sol, votre corps sur une chaise.\n2. Remarquez la sensation solide et stable du sol sous vous.\n3. Élargissez votre conscience pour sentir vos jambes, le poids de vos bras, et le léger va-et-vient de votre ventre lorsque vous respirez.\n4. Reposez-vous simplement dans ces sensations physiques pendant un moment.',
          when: 'Lorsque vous vous sentez dispersé, perdu dans vos pensées ou déconnecté. C\'est un excellent moyen de commencer une réunion ou de vous recentrer pendant une journée trépidante.',
          where: 'Efficace n\'importe où, mais particulièrement puissant lorsque vous pouvez sentir vos pieds fermement plantés sur le sol, que vous soyez assis ou debout.'
        }
      },
      { 
        title: 'Réchauffer les mains, réchauffer l\'esprit', 
        description: 'Frottez doucement vos mains et posez-les sur le cœur ou le ventre.\nLa chaleur trouve son chemin à l\'intérieur.',
        details: {
          what: 'Un geste auto-apaisant qui utilise la chaleur physique et une légère pression pour créer un sentiment de confort et de sécurité.',
          why: 'La combinaison de la chaleur et du toucher doux est profondément calmante pour notre système nerveux. Elle active la libération d\'ocytocine, une hormone associée au lien social et à la relaxation, aidant à apaiser l\'anxiété et l\'autocritique.',
          how: '1. Frottez vivement mais doucement les paumes de vos mains l\'une contre l\'autre jusqu\'à ce qu\'elles soient chaudes.\n2. Placez vos mains chaudes sur un endroit réconfortant de votre corps, comme sur votre cœur, votre ventre, ou en coupe sur votre visage.\n3. Fermez les yeux si vous le souhaitez, et prenez quelques respirations, en sentant la chaleur se diffuser dans votre corps.',
          when: 'Lorsque vous vous sentez anxieux, que vous avez froid, que vous vous sentez seul, ou que vous êtes dur avec vous-même. C\'est un geste d\'auto-compassion.',
          where: 'Idéalement dans un endroit où vous avez un moment d\'intimité, comme à votre bureau, dans un coin tranquille ou aux toilettes.'
        }
      },
      { 
        title: 'Écouter le son le plus proche', 
        description: 'Laissez le monde venir à vous.\nRemarquez le son le plus proche, puis le suivant.',
        details: {
          what: 'Une pratique de pleine conscience auditive où vous déplacez doucement votre attention vers les sons qui vous entourent, sans les juger ni les analyser.',
          why: 'Cette pratique vous sort de votre narration interne pour vous plonger dans la richesse du moment présent. Elle peut réduire le sentiment d\'être submergé par vos pensées et aide à cultiver une conscience ouverte et réceptive.',
          how: '1. Faites une pause et ouvrez simplement vos oreilles.\n2. Remarquez le son le plus proche de vous. Cela pourrait être le bourdonnement d\'un ordinateur, votre propre souffle, ou le froissement de vos vêtements.\n3. Sans effort, laissez votre conscience s\'étendre aux sons un peu plus éloignés.\n4. Ensuite, écoutez le son le plus lointain que vous puissiez détecter.\n5. Recevez simplement ces sons sans avoir besoin de les nommer ou de les juger.',
          when: 'Quand votre esprit est bruyant ou que vous êtes coincé dans une boucle de pensées répétitives. C\'est aussi une merveilleuse façon de vous connecter à votre environnement.',
          where: 'N\'importe où ! Cette pratique peut transformer un environnement banal (comme un bureau ou un trajet) en un paysage sonore riche.'
        }
      },
      { 
        title: 'Une respiration avant de répondre', 
        description: 'Une seule respiration crée de l\'espace.\nUn moment pour choisir vos mots avec clarté.',
        details: {
          what: 'La pratique intentionnelle de prendre une respiration complète et consciente après que quelqu\'un vous a parlé et avant que vous ne répondiez.',
          why: 'Cette minuscule pause prévient la communication impulsive et réactive. Elle donne à votre cerveau un moment pour passer du centre émotionnel réactif au cortex préfrontal plus réfléchi, vous permettant de répondre avec plus de clarté, de sagesse et de bienveillance.',
          how: '1. Quand quelqu\'un a fini de parler ou vous pose une question, résistez à l\'envie de répondre immédiatement.\n2. Prenez une inspiration douce.\n3. Prenez une expiration douce.\n4. Formulez votre réponse puis parlez.',
          when: 'Crucial lors de conversations difficiles, en réunion, lors de la réception de commentaires, ou dans toute interaction où vous souhaitez être plus intentionnel et moins réactif.',
          where: 'Dans n\'importe quelle conversation, que ce soit en personne, au téléphone, ou même avant de taper une réponse à un email ou un message.'
        }
      },
      { 
        title: 'Expiration lente pour s\'apaiser', 
        description: 'Une expiration longue et douce.\nLaissez le système ralentir d\'un cran.',
        details: {
          what: 'Se concentrer sur le fait de rendre votre expiration légèrement plus longue que votre inspiration. Ceci est parfois appelé le "soupir physiologique".',
          why: 'Une longue expiration est l\'un des moyens les plus rapides d\'activer le système nerveux parasympathique (repos et digestion). Elle signale directement à votre cerveau et à votre corps qu\'il est sûr de se détendre, aidant à réguler rapidement les sentiments de stress et d\'anxiété.',
          how: '1. Prenez une inspiration normale et confortable par le nez.\n2. Expirez lentement et doucement par la bouche, comme si vous respiriez à travers une paille, en faisant durer l\'expiration plus longtemps que l\'inspiration.\n3. Pas besoin de forcer. Juste une légère extension suffit.\n4. Répétez 2-3 fois.',
          when: 'Lorsque vous ressentez une montée soudaine d\'anxiété, avant de parler en public, lorsque vous essayez de vous endormir, ou chaque fois que vous avez besoin de calmer vos nerfs rapidement.',
          where: 'Une technique subtile et efficace qui peut être utilisée n\'importe où, n\'importe quand, sans que personne ne s\'en aperçoive.'
        }
      },
      { 
        title: 'Adoucir le regard', 
        description: 'Détendez le regard.\nPassez de la vision en tunnel à une vision plus large.',
        details: {
          what: 'Détendre consciemment les muscles autour de vos yeux et permettre à votre regard de devenir défocalisé et large, en intégrant votre vision périphérique.',
          why: 'Lorsque nous sommes stressés ou très concentrés (surtout sur les écrans), nous avons tendance à développer une "vision en tunnel" étroite et nette. Adoucir le regard contrecarre cela, signalant au cerveau qu\'il n\'y a pas de menace immédiate, ce qui favorise la relaxation et une perspective plus large et ouverte.',
          how: '1. Fixez un point devant vous un instant.\n2. Maintenant, détendez intentionnellement les muscles autour de vos yeux.\n3. Laissez votre regard devenir doux et défocalisé, comme si vous regardiez à travers l\'objet plutôt que de le fixer.\n4. Prenez conscience de votre vision périphérique — ce que vous pouvez voir sur les côtés sans tourner la tête.',
          when: 'Pendant de longues périodes devant un écran pour réduire la fatigue oculaire, lorsque vous vous sentez mentalement "bloqué" ou avec un esprit étroit, ou lors d\'une situation stressante pour aider à élargir votre perspective.',
          where: 'Excellent à faire à votre bureau, lors d\'une promenade, ou en regardant par la fenêtre.'
        }
      },
      { 
        title: 'Une chose pour laquelle vous êtes reconnaissant(e)', 
        description: 'Reposez-vous avec un moment calme de gratitude.\nLaissez-le vous toucher.',
        details: {
          what: 'Un bref exercice mental pour se remémorer intentionnellement une chose, une personne ou une expérience spécifique pour laquelle vous ressentez une gratitude sincère.',
          why: 'La gratitude est un puissant antidote au "biais de négativité" naturel de notre cerveau. Elle déplace activement notre attention vers ce qui est bon dans nos vies, ce qui est prouvé pour améliorer l\'humeur, réduire le stress et augmenter les sentiments de bien-être et de connexion.',
          how: '1. Faites une pause et demandez-vous : "Quelle est une petite chose pour laquelle je suis reconnaissant(e) en ce moment ?"\n2. Ce n\'est pas forcément grand. Cela pourrait être la tasse de café dans votre main, un mot gentil d\'un collègue ou la sensation du soleil.\n3. Pensez-y et laissez-vous ressentir une véritable appréciation pendant 10-20 secondes.',
          when: 'Une merveilleuse façon de commencer ou de terminer la journée. Aussi puissant lorsque vous vous sentez déprimé, frustré ou que vous tenez les choses pour acquises.',
          where: 'Un exercice purement mental qui peut être fait n\'importe où — au lit, à votre bureau ou en marchant.'
        }
      },
      { 
        title: 'Réajuster votre posture', 
        description: 'Allongez la colonne vertébrale, détendez les épaules.\nUn simple réalignement.',
        details: {
          what: 'Une vérification consciente et un ajustement doux de votre posture physique pour créer un alignement plus droit, ouvert et équilibré.',
          why: 'Notre posture affecte notre humeur et nos niveaux d\'énergie (et vice-versa). Se voûter peut nous faire sentir plus fatigué et renfermé. S\'asseoir ou se tenir droit peut augmenter les sentiments de confiance et de vigilance. Ce réajustement soulage également la tension physique.',
          how: '1. Si vous êtes assis, sentez vos pieds sur le sol et vos ischions sur la chaise.\n2. Imaginez une ficelle tirant doucement le sommet de votre tête vers le plafond, allongeant votre colonne vertébrale.\n3. Laissez vos épaules se détendre vers le bas et l\'arrière, loin de vos oreilles.\n4. Laissez votre menton être parallèle au sol. Prenez une profonde respiration dans cette nouvelle posture alignée.',
          when: 'Plusieurs fois par jour, surtout si vous travaillez à un bureau. Réglez une alarme récurrente si cela vous aide à vous en souvenir.',
          where: 'Principalement à votre bureau, mais vous pouvez aussi le faire en faisant la queue, en marchant ou assis dans votre voiture.'
        }
      },
      { 
        title: 'Une main sur le cœur', 
        description: 'Un toucher doux pour vous accueillir avec bienveillance.',
        details: {
          what: 'L\'acte simple et compatissant de placer une main sur votre cœur ou un autre endroit réconfortant de votre corps.',
          why: 'C\'est une forme de contact physique de soutien qui est profondément apaisante pour le système nerveux. Elle procure un sentiment tangible d\'auto-compassion et de soin, surtout dans les moments difficiles, vous rappelant que vous pouvez être une source de votre propre réconfort.',
          how: '1. Prenez une de vos mains et placez-la doucement sur le centre de votre poitrine.\n2. Sentez la légère pression et la chaleur de votre main.\n3. Vous pouvez fermer les yeux si vous le souhaitez. Prenez quelques respirations lentes et faciles.\n4. Vous pourriez vous offrir une phrase silencieuse et bienveillante comme "Ceci est un moment difficile" ou "Puis-je être bienveillant(e) avec moi-même".',
          when: 'Lorsque vous vous sentez blessé, triste, anxieux ou que vous êtes autocritique. C\'est un moyen de vous offrir un réconfort et une gentillesse immédiats.',
          where: 'Vous pouvez le faire discrètement à un bureau, mais c\'est plus réconfortant dans un espace privé où vous pouvez vous connecter pleinement avec le geste.'
        }
      },
      { 
        title: 'RAIN', 
        description: 'Une pause douce en quatre étapes : reconnaître, accepter, investiguer, nourrir.',
        details: {
          what: 'RAIN est un acronyme pour une pratique de pleine conscience en quatre étapes pour naviguer les émotions difficiles : Reconnaître, Accepter, Investiguer et Nourrir (Nurture).',
          why: 'Au lieu de supprimer ou d\'être submergé par les sentiments difficiles, RAIN offre une manière structurée et compatissante d\'être avec eux. Cela renforce la résilience émotionnelle et vous aide à répondre à votre expérience intérieure avec sagesse et auto-bienveillance.',
          how: '1. **R**econnaître ce qui se passe (ex: "L\'anxiété est là").\n2. **A**ccepter l\'expérience telle qu\'elle est, sans essayer de la réparer ou de la changer.\n3. **I**nvestiguer avec curiosité et soin. Comment cela se ressent-il dans votre corps ?\n4. **N**ourrir avec auto-compassion. Placez une main sur votre cœur ou offrez-vous un mot gentil.',
          when: 'Lorsque vous êtes pris dans une émotion forte ou douloureuse comme la colère, la peur ou la tristesse. C\'est une pratique pour se tourner vers la difficulté plutôt que de s\'en détourner.',
          where: 'À pratiquer de préférence dans un espace calme où vous pouvez vous asseoir avec votre expérience sans interruption pendant une minute.'
        }
      },
      { 
        title: 'STOP', 
        description: 'S\'arrêter, respirer, observer, et continuer avec clarté.',
        details: {
          what: 'STOP est un acronyme pour une pratique en quatre étapes pour interrompre le mode pilote automatique et amener une conscience attentive au moment présent : S\'arrêter, Prendre une respiration, Observer et Procéder.',
          why: 'Cette pratique agit comme un "ralentisseur de pleine conscience" au cours d\'une journée chargée. Elle brise le cycle de l\'activité réactive et inconsidérée, vous donnant une chance de faire le point avec vous-même et de faire un choix plus conscient sur ce que vous faites ensuite.',
          how: '1. **S**\'arrêter : Quoi que vous fassiez, faites une pause un instant.\n2. **T**prendre une respiration : Suivez la sensation d\'une respiration complète et consciente.\n3. **O**bserver : Remarquez vos pensées, vos sentiments et vos sensations corporelles sans jugement.\n4. **P**rocéder : Après avoir fait le point, continuez votre journée avec une conscience et une intention renouvelées.',
          when: 'Utilisez ceci comme une transition entre les tâches, lorsque vous sentez que vous vous pressez, ou à tout moment où vous voulez sortir du pilote automatique et vous réengager avec le présent.',
          where: 'N\'importe où. Cela peut se faire en quelques secondes à votre bureau, avant de sortir de votre voiture ou avant d\'entrer en réunion.'
        }
      },
    ],

    genThemes: ['Acceptation', 'Esprit du Débutant', 'Compassion', 'Énergie', 'Concentration', 'Générosité', 'Gratitude', 'Lâcher-prise', 'Pleine Conscience', 'Non-jugement', 'Non-effort', 'Patience', 'Détente', 'Sommeil', 'Gestion du Stress', 'Confiance'],
    
    genPrompt: (durationInMinutes: number, wordCount: number, selectedTheme: string) => `Vous êtes un expert en pleine conscience. Rédigez un court script de méditation guidée apaisant de ${durationInMinutes} minute(s) sur le thème de '${selectedTheme}'. Le script doit être facile à suivre pour un débutant et compter environ ${wordCount} mots. N'utilisez pas de markdown ou de formatage spécial. Fournissez uniquement le texte du script.`,
  }
};
