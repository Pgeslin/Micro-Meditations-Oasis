
export const translations = {
  en: {
    // App Component
    heroTitle: 'Oasis',
    heroSubtitle: 'A tiny space to pause for one minute.\nA quiet breath in the middle of your day.',
    
    beginButton: 'Begin',
    tryAnotherButton: 'Discover Another Moment',
    learnMoreLink: 'Learn more about the Kaze Mindfulness Dōjō',
    blessingText: 'May this pause stay with you a little longer.',
    
    continueJourneyTitle: 'Continue Your Journey',
    continueJourneyText: 'Deepen your practice and find further guidance at the Kaze Mindfulness Dōjō.',
    continueJourneyButton: 'Visit the Dōjō',

    footer: {
        mission: '🌴  O A S I S\n\nYour tiny oasis for one-minute pauses. Find your calm amidst the waves of a busy life.',
        offering: 'Offered by KAZE ⛩️ The Way of the Wind ~ Mindfulness Dojo',
        credit: 'Designed by Pierre Geslin, mindfulness teacher and haiku poet in the Adelaide Hills of South Australia.',
        readMore: 'Read more on Substack'
    },
    
    setDuration: 'Duration:',
    
    practiceOfTheDay: {
      title: 'Practice of the Day',
      button: 'Start Practice',
    },

    // Timer & Breathing Exercise
    backButton: 'Back',
    complete: 'Complete',
    timerCompleteMessage: 'You\'ve found your moment of calm.',
    breatheIn: 'Breathe In...',
    breatheOut: 'Breathe Out...',
    coherenceBenefit: 'This 4-4 breathing rhythm, known as cardiac coherence, is proven to reduce stress.',
    sixSecondBenefit: 'This slow, rhythmic 6-6 breathing activates the body\'s "rest and digest" response, helping to lower heart rate and reduce stress.',

    // Practice Detail
    startPracticeButton: 'Start Practice',
    
    // Generative Meditation Component
    genTitle: 'Create Your Own Moment',
    genSubtitle: 'Select a theme and let AI craft a unique, guided audio meditation just for you.',
    genSelectTheme: '1. Theme',
    genSelectDuration: '2. Duration',
    genDurationWarning: 'Longer meditations take a little more time to craft.',
    genSelectVoice: '3. Voice',
    genCraftButton: 'Craft My Meditation',
    genCraftingButton: 'Crafting...',
    genCraftingMessage: 'Preparing your personal meditation and voice guidance...',
    genError: 'Sorry, something went wrong while creating your meditation. Please try again.',
    genNoAudioError: 'The audio for this meditation is not available. Please try again with a different theme or voice.',
    genMeditationTitle: 'Your Personal Meditation',
    genAudioMessage: 'Preparing audio guidance...',
    genPlay: 'Play',
    genPause: 'Pause',
    genPlayLabel: 'Listen',
    genPauseLabel: 'Pause',
    genCreateAnother: 'Create Another',

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
    
    reflection: {
      title: 'Reflect',
      intro: 'Share a few thoughts, and our AI companion will offer a gentle response.',
      prompt: (practiceTitle: string) => `What did you notice during "${practiceTitle}"?`,
      placeholder: 'Describe your experience...',
      submitButton: 'Submit',
      skipButton: 'Skip',
      loading: 'Thinking...',
      error: 'Sorry, AI is unavailable.',
      doneButton: 'Done',
      aiResponsePrefix: 'Guide:',
      aiSystemInstruction: 'You are a gentle, non-judgmental mindfulness companion. Your role is to receive the user\'s reflection after a short mindfulness practice. Validate their experience with a short, compassionate, and encouraging response. Do not give advice, ask questions, or use emojis. Keep your response to one or two sentences. Your tone should be warm, calm, and supportive.',
    },
    
    practiceCategories: [
      {
        categoryTitle: 'Breath',
        categorySubtitle: 'A simple rhythm to steady the moment.',
        practices: [
          {
            title: 'Shoreline breath',
            icon: 'BreathIcon',
            description: 'Sit or stand as you are.\nLet your breath come and go like a small tide.\nCount three waves.\nNotice what settles.',
            details: {
              explanation: 'Imagine the breath as the ocean meeting the shore.\nAllow the rhythm to be natural and unforced.\nLet each wave wash away a little tension.'
            }
          },
          { 
            id: 'six-second-breathing', 
            title: 'Six-second breathing', 
            icon: 'BreathIcon',
            description: 'A slow inhale, a slow exhale.\nLet the rhythm settle you and steady the nervous system.',
            details: {
              explanation: 'Use this slow rhythm to help the system calm and regulate.\nMatch your breath to the steady count.\nFeel how the body softens on the exhale.'
            }
          },
          { 
            title: 'Three slow breaths', 
            icon: 'ThreeBreathsIcon',
            description: 'Three quiet breaths to pause, reset, and return.',
            details: {
              explanation: 'Three breaths can change the tone of a moment.\nLet each breath widen the space inside.\nReturn gently to where you are.'
            }
          },
          { 
            title: 'Slow exhale to settle', 
            icon: 'SlowExhaleIcon',
            description: 'A long, soft out-breath.\nLet the system drop a gear.',
            details: {
              explanation: 'Lengthening the exhale settles the nervous system.\nRelax the jaw and let the breath fall away.\nNotice the shift toward ease.'
            }
          },
          { 
            title: 'One breath before responding', 
            icon: 'BreathIcon',
            description: 'A single breath creates space.\nA moment to choose your words with clarity.',
            details: {
              explanation: 'This breath interrupts automatic reactions.\nUse it to sense your tone, your intention.\nLet clarity shape your next move.'
            }
          },
          { 
            title: 'Cool breath on the lips', 
            icon: 'JawSoftIcon',
            description: 'Part the lips gently.\nFeel the next exhale cool them.\nLet the body settle.',
            details: {
              explanation: 'A soft mouth cools the breath and softens the body.\nLet the exhale drift out like mist.\nFeel the tension ease.'
            }
          },
          { 
            title: 'Find the space between breaths', 
            icon: 'StopIcon',
            description: 'At the end of the exhale, pause.\nJust a heartbeat.\nLet the quiet widen inside.',
            details: {
              explanation: 'The pause holds a small doorway into stillness.\nNo effort needed.\nJust rest there for a moment.'
            }
          },
        ]
      },
      {
        categoryTitle: 'Body',
        categorySubtitle: 'A gentle return to the place you stand.',
        practices: [
           {
            title: 'Clearing the path',
            icon: 'BodyScanIcon',
            description: 'Close your eyes for one slow breath.\nImagine a small path opening in front of you.\nOn the exhale, step onto it in your mind.\nFeel the ground steady beneath you.',
            details: {
              explanation: 'Visualization can shift your internal state.\nSee the path clearly in your mind\'s eye.\nLet the stability of the ground support you.'
            }
          },
          { 
            title: 'Release the shoulders', 
            icon: 'ShoulderReleaseIcon',
            description: 'Feel the weight slide down the arms.\nOne soft breath melts the tension.',
            details: {
              explanation: 'Tight shoulders shape the whole body.\nLet gravity help you soften.\nStay with the warmth as it spreads.'
            }
          },
          { 
            title: 'Come back into the body', 
            icon: 'BodyScanIcon',
            description: 'Feet on the ground, legs, belly.\nA simple way home.',
            details: {
              explanation: 'Feel the places where the body meets the earth.\nLet attention settle from the head into the body.\nCome home to this moment.'
            }
          },
          { 
            title: 'Reset your posture', 
            icon: 'PostureIcon',
            description: 'Lengthen the spine, soften the shoulders.\nA simple realignment.',
            details: {
              explanation: 'Small shifts change the whole structure.\nLet the spine rise and the shoulders drop.\nFeel how breath flows more freely.'
            }
          },
          { 
            title: 'Soften the jaw and face', 
            icon: 'JawSoftIcon',
            description: 'Unclench the jaw, relax the cheeks.\nLet the face remember ease.',
            details: {
              explanation: 'The face often holds hidden tension.\nLet it melt with one soft exhale.\nFeel the mind ease with it.'
            }
          },
          { 
            title: 'Soften the eyes', 
            icon: 'SoftenEyesIcon',
            description: 'Relax the gaze.\nShift from tunnel vision into wider seeing.',
            details: {
              explanation: 'A softer gaze brings a softer mind.\nLet the eyes rest in a wider field.\nNotice the whole room at once.'
            }
          },
          { 
            title: 'Warm the hands, warm the mind', 
            icon: 'SoothingTouchIcon',
            description: 'Rub the hands gently and rest them on heart or belly.\nWarmth finds its way inside.',
            details: {
              explanation: 'Warm hands soothe the nervous system.\nLet the heat spread beneath your palms.\nRest in the gentle comfort.'
            }
          },
          { 
            title: 'Five mindful steps', 
            icon: 'PostureIcon',
            description: 'Slow down a little.\nFeel each lift and place.\nArrive where you are.',
            details: {
              explanation: 'Walking becomes a practice through attention.\nLet each step mark a small arrival.\nMeet the ground beneath you.'
            }
          },
          { 
            title: 'The unclenching', 
            icon: 'ShoulderReleaseIcon',
            description: 'Notice one place inside that grips.\nLet it soften by five percent.\nThat’s enough.',
            details: {
              explanation: 'Softening even a little changes the whole system.\nChoose one tight place.\nLet it loosen without force.'
            }
          },
        ]
      },
      {
        categoryTitle: 'Senses',
        categorySubtitle: 'A way to meet the world as it arrives.',
        practices: [
          { 
            title: 'The S.T.O.P. Practice', 
            icon: 'StopIcon',
            description: 'Stop. Take a Breath. Observe. Proceed.\nA mini-break for clarity.',
            details: {
              explanation: 'S - Stop what you are doing.\nT - Take a few deep breaths.\nO - Observe your thoughts, feelings, and body.\nP - Proceed with kindness.'
            }
          },
          { 
            title: 'Listen to the nearest sound', 
            icon: 'SoundIcon',
            description: 'Let the world come to you.\nNotice the closest sound, then the next.',
            details: {
              explanation: 'Sound opens the door to presence.\nLet your attention widen gently.\nFollow the shifts without effort.'
            }
          },
          { 
            title: 'Three layers of sound', 
            icon: 'SoundIcon',
            description: 'Hear the nearest sound.\nHear the sound farther away.\nHear the sound beneath it all.',
            details: {
              explanation: 'Move through sound in gentle layers.\nFeel how attention expands with each step.\nRest in the whole soundscape.'
            }
          },
          { 
            title: 'Fingertip grounding', 
            icon: 'SoothingTouchIcon',
            description: 'Touch thumb to each fingertip.\nFeel texture, warmth, pulse.\nA quiet circuit that steadies you.',
            details: {
              explanation: 'Touch brings you back into the moment.\nSense the warmth at each fingertip.\nLet the circuit settle the body.'
            }
          },
          { 
            title: 'Horizon glance', 
            icon: 'SoftenEyesIcon',
            description: 'Lift the gaze to something far away.\nLet the distance open the chest.',
            details: {
              explanation: 'A wider view shifts the nervous system.\nLet the chest lift with the gaze.\nFeel the breath deepen.'
            }
          },
          { 
            title: 'Ten quiet seconds', 
            icon: 'StopIcon',
            description: 'Close the eyes.\nTen seconds of stillness.\nJust being.',
            details: {
              explanation: 'A brief pause can reset the whole moment.\nClose the eyes without effort.\nRest in simple quiet.'
            }
          },
        ]
      },
      {
        categoryTitle: 'Heart',
        categorySubtitle: 'A quiet touch toward what matters.',
        practices: [
          { 
            title: 'The R.A.I.N. Practice', 
            icon: 'RainIcon',
            description: 'Recognize. Allow. Investigate. Nurture.\nA path through difficult emotion.',
            details: {
              explanation: 'R - Recognize what is happening.\nA - Allow the experience to be there, just as it is.\nI - Investigate with kindness.\nN - Nurture with self-compassion.'
            }
          },
          {
            title: 'Hand on heart',
            icon: 'HeartIcon',
            description: 'Place a hand on your chest.\nFeel warmth rising beneath your palm.\nStay for one full inhale and exhale.\nLet kindness meet you there.',
            details: {
              explanation: 'Physical touch can be incredibly soothing.\nThe warmth of the hand signals safety to the body.\nMeet yourself with a moment of care.'
            }
          },
          { 
            title: 'One thing you’re grateful for', 
            icon: 'GratitudeIcon',
            description: 'Rest with one quiet moment of gratitude.\nLet it touch you.',
            details: {
              explanation: 'Gratitude softens the heart.\nChoose something small, simple.\nFeel the warmth it brings.'
            }
          },
          { 
            title: 'Name what matters right now', 
            icon: 'HeartIcon',
            description: 'Notice the moment.\nChoose one simple word.\nCarry it softly.',
            details: {
              explanation: 'A single word can guide your next steps.\nLet it rise naturally.\nHold it lightly in the mind.'
            }
          },
          { 
            title: 'One slow sentence', 
            icon: 'HeartIcon',
            description: 'Say something simple to yourself.\nSlow it until it matches your breath.',
            details: {
              explanation: 'A slow sentence softens inner pressure.\nLet your words follow the breath.\nSpeak gently inside.'
            }
          },
        ]
      }
    ],
    
    genThemes: ['Acceptance', 'Beginner\'s Mind', 'Compassion', 'Energy', 'Focus', 'Generosity', 'Gratitude', 'Letting Go', 'Mindfulness', 'Non-Judging', 'Non-striving', 'Patience', 'Relaxation', 'Sleep', 'Stress Relief', 'Trust'],
    
    genPrompt: (durationInMinutes: number, wordCount: number, selectedTheme: string) => `You are a mindfulness expert. Write a short, soothing, ${durationInMinutes}-minute guided meditation script focusing on the theme of '${selectedTheme}'. The script should be easy for a beginner to follow and be approximately ${wordCount} words. Do not use markdown or any special formatting. Just provide the script text.`,

  },
  fr: {
    // App Component
    heroTitle: 'Oasis',
    heroSubtitle: 'Un petit espace pour faire une pause d\'une minute.\nUn souffle calme au milieu de votre journée.',
    
    beginButton: 'Commencer',
    tryAnotherButton: 'Découvrir un autre moment',
    learnMoreLink: 'En savoir plus sur le Kaze Mindfulness Dōjō',
    blessingText: 'Que cette pause reste avec vous un peu plus longtemps.',

    continueJourneyTitle: 'Continuez votre voyage',
    continueJourneyText: 'Approfondissez votre pratique et trouvez plus de conseils au Kaze Mindfulness Dōjō.',
    continueJourneyButton: 'Visiter le Dōjō',

    footer: {
        mission: '🌴  O A S I S\n\nVotre petite oasis pour des pauses d\'une minute. Trouvez votre calme au milieu des vagues d\'une vie bien remplie.',
        offering: 'Offert par KAZE ⛩️ La Voie du Vent ~ Mindfulness Dojo',
        credit: 'Conçu par Pierre Geslin, enseignant de pleine conscience et poète de haïku dans les collines d\'Adélaïde, Australie du Sud.',
        readMore: 'En savoir plus sur Substack'
    },

    setDuration: 'Durée:',
    
    practiceOfTheDay: {
      title: 'Pratique du jour',
      button: 'Commencer la pratique',
    },

    // Timer & Breathing Exercise
    backButton: 'Retour',
    complete: 'Terminé',
    timerCompleteMessage: 'Vous avez trouvé votre moment de calme.',
    breatheIn: 'Inspirez...',
    breatheOut: 'Expirez...',
    coherenceBenefit: 'Ce rythme de respiration 4-4, connu sous le nom de cohérence cardiaque, est prouvé pour réduire le stress.',
    sixSecondBenefit: 'Cette respiration lente et rythmique en 6-6 active la réponse "repos et digestion" du corps, aidant à ralentir le rythme cardiaque et réduire le stress.',

    // Practice Detail
    startPracticeButton: 'Commencer la pratique',

    // Generative Meditation Component
    genTitle: 'Créez votre propre moment',
    genSubtitle: 'Choisissez un thème et laissez l\'IA créer une méditation audio guidée unique juste pour vous.',
    genSelectTheme: '1. Thème',
    genSelectDuration: '2. Durée',
    genDurationWarning: 'Les méditations plus longues prennent un peu plus de temps à créer.',
    genSelectVoice: '3. Voix',
    genCraftButton: 'Créer ma méditation',
    genCraftingButton: 'Création en cours...',
    genCraftingMessage: 'Préparation de votre méditation personnelle et de la voix...',
    genError: 'Désolé, une erreur s\'est produite lors de la création de votre méditation. Veuillez réessayer.',
    genNoAudioError: 'L\'audio pour cette méditation n\'est pas disponible. Veuillez réessayer avec un thème ou une voix différents.',
    genMeditationTitle: 'Votre méditation personnelle',
    genAudioMessage: 'Préparation du guidage audio...',
    genPlay: 'Lecture',
    genPause: 'Pause',
    genPlayLabel: 'Écouter',
    genPauseLabel: 'Pause',
    genCreateAnother: 'Créer une autre',

    durations: {
      d30s: '30s',
      d1m: '1 min',
      d2m: '2 min',
      d3m: '3 min',
    },
    voices: {
      calmFemale: 'Calme (Femme)',
      gentleMale: 'Doux (Homme)',
      brightFemale: 'Lumineuse (Femme)',
      deepMale: 'Profond (Homme)',
      warmMale: 'Chaleureux (Homme)',
    },

    reflection: {
      title: 'Réflexion',
      intro: 'Partagez quelques pensées, et notre compagnon IA offrira une réponse douce.',
      prompt: (practiceTitle: string) => `Qu'avez-vous remarqué pendant "${practiceTitle}" ?`,
      placeholder: 'Décrivez votre expérience...',
      submitButton: 'Envoyer',
      skipButton: 'Passer',
      loading: 'Réflexion...',
      error: 'Désolé, l\'IA est indisponible.',
      doneButton: 'Terminé',
      aiResponsePrefix: 'Guide :',
      aiSystemInstruction: 'Vous êtes un compagnon de pleine conscience doux et sans jugement. Votre rôle est de recevoir la réflexion de l\'utilisateur après une courte pratique de pleine conscience. Validez leur expérience avec une réponse courte, compatissante et encourageante. Ne donnez pas de conseils, ne posez pas de questions et n\'utilisez pas d\'emojis. Gardez votre réponse à une ou deux phrases. Votre ton doit être chaleureux, calme et solidaire.',
    },

    practiceCategories: [
      {
        categoryTitle: 'Respiration',
        categorySubtitle: 'Un rythme simple pour stabiliser le moment.',
        practices: [
          {
            title: 'Souffle rivage',
            icon: 'BreathIcon',
            description: 'Assieds-toi ou reste debout.\nLaisse ton souffle aller et venir comme une petite vague.\nCompte trois vagues.\nObserve ce qui revient au calme.',
            details: {
              explanation: 'Imagine le souffle comme l\'océan rencontrant le rivage.\nLaisse le rythme être naturel et non forcé.\nLaisse chaque vague emporter un peu de tension.'
            }
          },
          { 
            id: 'six-second-breathing', 
            title: 'Respiration de six secondes', 
            icon: 'BreathIcon',
            description: 'Une inspiration lente, une expiration lente.\nLaisse le rythme t\'apaiser et stabiliser le système nerveux.',
            details: {
              explanation: 'Utilise ce rythme lent pour aider le système à se calmer et se réguler.\nAccorde ton souffle au compte régulier.\nSens comment le corps s\'adoucit à l\'expiration.'
            }
          },
          { 
            title: 'Trois souffles lents', 
            icon: 'ThreeBreathsIcon',
            description: 'Trois souffles calmes pour faire une pause, réinitialiser et revenir.',
            details: {
              explanation: 'Trois souffles peuvent changer la tonalité d\'un moment.\nLaisse chaque souffle élargir l\'espace intérieur.\nReviens doucement là où tu es.'
            }
          },
          { 
            title: 'Expiration lente pour s\'apaiser', 
            icon: 'SlowExhaleIcon',
            description: 'Une longue expiration douce.\nLaisse le système ralentir.',
            details: {
              explanation: 'Allonger l\'expiration apaise le système nerveux.\nDétends la mâchoire et laisse le souffle retomber.\nRemarque le passage vers l\'aisance.'
            }
          },
          { 
            title: 'Un souffle avant de répondre', 
            icon: 'BreathIcon',
            description: 'Un seul souffle crée de l\'espace.\nUn moment pour choisir tes mots avec clarté.',
            details: {
              explanation: 'Ce souffle interrompt les réactions automatiques.\nUtilise-le pour sentir ton ton, ton intention.\nLaisse la clarté façonner ton prochain mouvement.'
            }
          },
          { 
            title: 'Souffle frais sur les lèvres', 
            icon: 'JawSoftIcon',
            description: 'Entrouvre doucement les lèvres.\nSens la prochaine expiration les rafraîchir.\nLaisse le corps se poser.',
            details: {
              explanation: 'Une bouche douce rafraîchit le souffle et adoucit le corps.\nLaisse l\'expiration s\'échapper comme une brume.\nSens la tension s\'apaiser.'
            }
          },
          { 
            title: 'Trouver l\'espace entre les souffles', 
            icon: 'StopIcon',
            description: 'À la fin de l\'expiration, fais une pause.\nJuste un battement de cœur.\nLaisse le calme s\'élargir à l\'intérieur.',
            details: {
              explanation: 'La pause contient une petite porte vers l\'immobilité.\nAucun effort nécessaire.\nRepose-toi là un instant.'
            }
          },
        ]
      },
      {
        categoryTitle: 'Corps',
        categorySubtitle: 'Un retour doux à l\'endroit où tu te trouves.',
        practices: [
           {
            title: 'Chemin clair',
            icon: 'BodyScanIcon',
            description: 'Ferme les yeux une respiration.\nImagine un petit chemin qui s’ouvre devant toi.\nÀ l’expiration, fais un pas en pensée.\nSente la terre sous tes pieds.',
            details: {
              explanation: 'La visualisation peut changer ton état interne.\nVisualise le chemin clairement dans ton esprit.\nLaisse la stabilité du sol te soutenir.'
            }
          },
          { 
            title: 'Relâcher les épaules', 
            icon: 'ShoulderReleaseIcon',
            description: 'Sens le poids glisser le long des bras.\nUn souffle doux fait fondre la tension.',
            details: {
              explanation: 'Des épaules tendues façonnent tout le corps.\nLaisse la gravité t\'aider à t\'adoucir.\nReste avec la chaleur qui se propage.'
            }
          },
          { 
            title: 'Revenir dans le corps', 
            icon: 'BodyScanIcon',
            description: 'Pieds sur terre, jambes, ventre.\nUn chemin simple vers la maison.',
            details: {
              explanation: 'Sens les endroits où le corps rencontre la terre.\nLaisse l\'attention descendre de la tête vers le corps.\nReviens à ce moment.'
            }
          },
          { 
            title: 'Réinitialiser la posture', 
            icon: 'PostureIcon',
            description: 'Allonge la colonne vertébrale, adoucis les épaules.\nUn réalignement simple.',
            details: {
              explanation: 'De petits changements modifient toute la structure.\nLaisse la colonne s\'élever et les épaules tomber.\nSens comment le souffle circule plus librement.'
            }
          },
          { 
            title: 'Adoucir la mâchoire et le visage', 
            icon: 'JawSoftIcon',
            description: 'Desserre la mâchoire, détends les joues.\nLaisse le visage se souvenir de l\'aisance.',
            details: {
              explanation: 'Le visage retient souvent des tensions cachées.\nLaisse-les fondre avec une douce expiration.\nSens l\'esprit s\'apaiser avec lui.'
            }
          },
          { 
            title: 'Adoucir le regard', 
            icon: 'SoftenEyesIcon',
            description: 'Détends le regard.\nPasse d\'une vision en tunnel à une vision plus large.',
            details: {
              explanation: 'Un regard plus doux amène un esprit plus doux.\nLaisse les yeux se reposer dans un champ plus large.\nRemarque toute la pièce à la fois.'
            }
          },
          { 
            title: 'Mains chaudes, esprit calme', 
            icon: 'SoothingTouchIcon',
            description: 'Frotte doucement les mains et pose-les sur le cœur ou le ventre.\nLa chaleur trouve son chemin à l\'intérieur.',
            details: {
              explanation: 'Des mains chaudes apaisent le système nerveux.\nLaisse la chaleur se propager sous tes paumes.\nRepose-toi dans ce doux confort.'
            }
          },
          { 
            title: 'Cinq pas en conscience', 
            icon: 'PostureIcon',
            description: 'Ralentis un peu.\nSens chaque levée et chaque pose.\nArrive là où tu es.',
            details: {
              explanation: 'Marcher devient une pratique grâce à l\'attention.\nLaisse chaque pas marquer une petite arrivée.\nRencontre le sol sous tes pieds.'
            }
          },
          { 
            title: 'Le relâchement', 
            icon: 'ShoulderReleaseIcon',
            description: 'Remarque un endroit à l\'intérieur qui se crispe.\nLaisse-le s\'adoucir de cinq pour cent.\nC\'est assez.',
            details: {
              explanation: 'S\'adoucir même un peu change tout le système.\nChoisis un endroit tendu.\nLaisse-le se desserrer sans forcer.'
            }
          },
        ]
      },
      {
        categoryTitle: 'Sens',
        categorySubtitle: 'Une façon de rencontrer le monde tel qu\'il arrive.',
        practices: [
          { 
            title: 'La pratique S.T.O.P.', 
            icon: 'StopIcon',
            description: 'Stop. Temps de respiration. Observer. Procéder.\nUne mini-pause pour la clarté.',
            details: {
              explanation: 'S - Stop : arrêtez ce que vous faites.\nT - Temps de respiration : prenez quelques respirations profondes.\nO - Observer vos pensées, sentiments et votre corps.\nP - Procéder avec bienveillance.'
            }
          },
          { 
            title: 'Écouter le son le plus proche', 
            icon: 'SoundIcon',
            description: 'Laisse le monde venir à toi.\nRemarque le son le plus proche, puis le suivant.',
            details: {
              explanation: 'Le son ouvre la porte à la présence.\nLaisse ton attention s\'élargir doucement.\nSuis les changements sans effort.'
            }
          },
          { 
            title: 'Trois couches de sons', 
            icon: 'SoundIcon',
            description: 'Entends le son le plus proche.\nEntends le son plus loin.\nEntends le son en dessous de tout.',
            details: {
              explanation: 'Déplace-toi à travers le son par couches douces.\nSens comment l\'attention s\'étend à chaque étape.\nRepose-toi dans tout le paysage sonore.'
            }
          },
          { 
            title: 'Ancrage du bout des doigts', 
            icon: 'SoothingTouchIcon',
            description: 'Touche le pouce avec chaque bout de doigt.\nSens la texture, la chaleur, le pouls.\nUn circuit calme qui te stabilise.',
            details: {
              explanation: 'Le toucher te ramène dans le moment.\nSens la chaleur à chaque bout de doigt.\nLaisse le circuit apaiser le corps.'
            }
          },
          { 
            title: 'Regard vers l\'horizon', 
            icon: 'SoftenEyesIcon',
            description: 'Lève le regard vers quelque chose au loin.\nLaisse la distance ouvrir la poitrine.',
            details: {
              explanation: 'Une vue plus large change le système nerveux.\nLaisse la poitrine se soulever avec le regard.\nSens le souffle s\'approfondir.'
            }
          },
          { 
            title: 'Dix secondes de silence', 
            icon: 'StopIcon',
            description: 'Ferme les yeux.\nDix secondes d\'immobilité.\nJuste être.',
            details: {
              explanation: 'Une brève pause peut réinitialiser tout le moment.\nFerme les yeux sans effort.\nRepose-toi dans le calme simple.'
            }
          },
        ]
      },
      {
        categoryTitle: 'Cœur',
        categorySubtitle: 'Un contact doux vers ce qui compte.',
        practices: [
          { 
            title: 'La pratique R.A.I.N.', 
            icon: 'RainIcon',
            description: 'Reconnaître. Accepter. Investiguer. Nourrir.\nUn chemin à travers les émotions difficiles.',
            details: {
              explanation: 'R - Reconnaître ce qui se passe.\nA - Accepter (Allow) que l\'expérience soit là.\nI - Investiguer avec bienveillance.\nN - Nourrir avec auto-compassion.'
            }
          },
          {
            title: 'Main au cœur',
            icon: 'HeartIcon',
            description: 'Pose une main sur la poitrine.\nSens la chaleur qui monte sous ta paume.\nReste pour un souffle complet.\nLaisse la douceur venir.',
            details: {
              explanation: 'Le toucher physique peut être incroyablement apaisant.\nLa chaleur de la main signale la sécurité au corps.\nRencontre-toi avec un moment de soin.'
            }
          },
          { 
            title: 'Une chose pour laquelle vous êtes reconnaissant', 
            icon: 'GratitudeIcon',
            description: 'Repose-toi avec un moment calme de gratitude.\nLaisse-le te toucher.',
            details: {
              explanation: 'La gratitude adoucit le cœur.\nChoisis quelque chose de petit, simple.\nSens la chaleur que cela apporte.'
            }
          },
          { 
            title: 'Nommer ce qui compte maintenant', 
            icon: 'HeartIcon',
            description: 'Remarque le moment.\nChoisis un mot simple.\nPorte-le doucement.',
            details: {
              explanation: 'Un seul mot peut guider tes prochains pas.\nLaisse-le monter naturellement.\nTiens-le légèrement dans l\'esprit.'
            }
          },
          { 
            title: 'Une phrase lente', 
            icon: 'HeartIcon',
            description: 'Dis-toi quelque chose de simple.\nRalentis-le jusqu\'à ce qu\'il corresponde à ton souffle.',
            details: {
              explanation: 'Une phrase lente adoucit la pression intérieure.\nLaisse tes mots suivre le souffle.\nParle doucement à l\'intérieur.'
            }
          },
        ]
      }
    ],

    genThemes: ['Acceptation', 'Esprit du débutant', 'Compassion', 'Énergie', 'Concentration', 'Générosité', 'Gratitude', 'Lâcher prise', 'Pleine conscience', 'Non-jugement', 'Non-effort', 'Patience', 'Relaxation', 'Sommeil', 'Soulagement du stress', 'Confiance'],
    
    genPrompt: (durationInMinutes: number, wordCount: number, selectedTheme: string) => `Vous êtes un expert en pleine conscience. Écrivez un script de méditation guidée court et apaisant de ${durationInMinutes} minute(s) sur le thème de '${selectedTheme}'. Le script doit être facile à suivre pour un débutant et contenir environ ${wordCount} mots. N'utilisez pas de markdown ou de formatage spécial. Fournissez simplement le texte du script.`,
  }
};
