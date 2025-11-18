export const translations = {
  en: {
    // App Component
    heroTitle: 'Oasis',
    heroSubtitle: 'Oasis\nA tiny space to pause for one minute.\nA quiet breath in the middle of your day.',
    
    beginButton: 'Begin',
    tryAnotherButton: 'Try another',
    learnMoreLink: 'Learn more about the Kaze Mindfulness Dōjō',
    blessingText: 'May this pause stay with you a little longer.',
    
    footerText: '🌴 O A S I S\n\nYour tiny oasis for one-minute pauses. Find your calm amidst the waves of a busy life.\n\nOffered by KAZE ⛩️ The Way of the Wind ~ Mindfulness Dojo',
    
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
    heroSubtitle: 'Oasis\nUn tout petit espace pour faire une pause d\'une minute.\nUn souffle calme au milieu de votre journée.',
    
    beginButton: 'Commencer',
    tryAnotherButton: 'Essayer une autre',
    learnMoreLink: 'En savoir plus sur le Kaze Mindfulness Dōjō',
    blessingText: 'Que cette pause reste avec vous un peu plus longtemps.',

    footerText: '🌴 O A S I S\n\nVotre petite oasis pour des pauses d\'une minute. Trouvez votre calme au milieu des vagues d\'une vie bien remplie.\n\nOffert par KAZE ⛩️ The Way of the Wind ~ Mindfulness Dojo',

    setDuration: 'Durée :',
    
    practiceOfTheDay: {
      title: 'Pratique du Jour',
      button: 'Essayer cette pratique',
    },

    // Timer & Breathing Exercise
    backButton: 'Retour',
    complete: 'Terminé',
    timerCompleteMessage: 'Vous avez trouvé votre moment de calme.',
    breatheIn: 'Inspirez...',
    breatheOut: 'Expirez...',
    coherenceBenefit: 'Ce rythme respiratoire 4-4, connu sous le nom de cohérence cardiaque, est reconnu pour réduire le stress.',
    sixSecondBenefit: 'Cette respiration lente et rythmée en 6-6 active la réponse de "repos et digestion" du corps, aidant à réduire la fréquence cardiaque et le stress.',
    
    // Practice Detail
    startPracticeButton: 'Commencer la Pratique',

    // Generative Meditation Component
    genTitle: 'Créez Votre Propre Moment',
    genSubtitle: 'Sélectionnez un thème et laissez l\'IA créer une méditation guidée unique.',
    genSelectTheme: '1. Thème',
    genSelectDuration: '2. Durée',
    genDurationWarning: 'Les méditations plus longues prennent un peu plus de temps.',
    genSelectVoice: '3. Voix',
    genCraftButton: 'Créer Ma Méditation',
    genCraftingButton: 'Création...',
    genCraftingMessage: 'Préparation de votre méditation...',
    genError: 'Désolé, une erreur est survenue. Veuillez réessayer.',
    genNoAudioError: 'L\'audio n\'est pas disponible. Veuillez réessayer.',
    genMeditationTitle: 'Votre Méditation Personnelle',
    genAudioMessage: 'Préparation audio...',
    genPlay: 'Lancer',
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
      calmFemale: 'Calme (Féminine)',
      gentleMale: 'Doux (Masculin)',
      brightFemale: 'Claire (Féminine)',
      deepMale: 'Profond (Masculin)',
      warmMale: 'Chaleureux (Masculin)',
    },
    
    reflection: {
      title: 'Réflexion',
      intro: 'Partagez quelques pensées, et notre compagnon IA offrira une réponse douce.',
      prompt: (practiceTitle: string) => `Qu'avez-vous remarqué pendant "${practiceTitle}" ?`,
      placeholder: 'Décrivez votre expérience...',
      submitButton: 'Soumettre',
      skipButton: 'Passer',
      loading: 'Réflexion...',
      error: 'Désolé, l\'IA n\'est pas disponible.',
      doneButton: 'Terminé',
      aiResponsePrefix: 'Guide :',
      aiSystemInstruction: 'Vous êtes un compagnon de pleine conscience doux et sans jugement. Votre rôle est de recevoir la réflexion de l\'utilisateur après une courte pratique de pleine conscience. Validez son expérience avec une réponse courte, compatissante et encourageante. Ne donnez pas de conseils, ne posez pas de questions et n\'utilisez pas d\'émojis. Limitez votre réponse à une ou deux phrases. Votre ton doit être chaleureux, calme et encourageant.',
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
              explanation: 'Imaginez le souffle comme l\'océan rencontrant le rivage.\nLaissez le rythme être naturel et non forcé.\nLaissez chaque vague emporter un peu de tension.'
            }
          },
          { 
            id: 'six-second-breathing', 
            title: 'Six-second breathing (FR)', 
            icon: 'BreathIcon',
            description: 'A slow inhale, a slow exhale.\nLet the rhythm settle you and steady the nervous system.',
            details: {
              explanation: 'Use this slow rhythm to help the system calm and regulate.\nMatch your breath to the steady count.\nFeel how the body softens on the exhale.'
            }
          },
          { 
            title: 'Three slow breaths (FR)', 
            icon: 'ThreeBreathsIcon',
            description: 'Three quiet breaths to pause, reset, and return.',
            details: {
              explanation: 'Three breaths can change the tone of a moment.\nLet each breath widen the space inside.\nReturn gently to where you are.'
            }
          },
          { 
            title: 'Slow exhale to settle (FR)', 
            icon: 'SlowExhaleIcon',
            description: 'A long, soft out-breath.\nLet the system drop a gear.',
            details: {
              explanation: 'Lengthening the exhale settles the nervous system.\nRelax the jaw and let the breath fall away.\nNotice the shift toward ease.'
            }
          },
          { 
            title: 'One breath before responding (FR)', 
            icon: 'BreathIcon',
            description: 'A single breath creates space.\nA moment to choose your words with clarity.',
            details: {
              explanation: 'This breath interrupts automatic reactions.\nUse it to sense your tone, your intention.\nLet clarity shape your next move.'
            }
          },
          { 
            title: 'Cool breath on the lips (FR)', 
            icon: 'JawSoftIcon',
            description: 'Part the lips gently.\nFeel the next exhale cool them.\nLet the body settle.',
            details: {
              explanation: 'A soft mouth cools the breath and softens the body.\nLet the exhale drift out like mist.\nFeel the tension ease.'
            }
          },
          { 
            title: 'Find the space between breaths (FR)', 
            icon: 'StopIcon',
            description: 'At the end of the exhale, pause.\nJust a heartbeat.\nLet the quiet widen inside.',
            details: {
              explanation: 'The pause holds a small doorway into stillness.\nNo effort needed.\nJust rest there for a moment.'
            }
          },
        ]
      },
      {
        categoryTitle: 'Corps',
        categorySubtitle: 'Un retour en douceur à l\'endroit où vous êtes.',
        practices: [
           {
            title: 'Chemin clair',
            icon: 'BodyScanIcon',
            description: 'Ferme les yeux une respiration.\nImagine un petit chemin qui s’ouvre devant toi.\nÀ l’expiration, fais un pas en pensée.\nSente la terre sous tes pieds.',
            details: {
              explanation: 'La visualisation peut modifier votre état interne.\nVoyez le chemin clairement dans votre esprit.\nLaissez la stabilité du sol vous soutenir.'
            }
          },
          { 
            title: 'Release the shoulders (FR)', 
            icon: 'ShoulderReleaseIcon',
            description: 'Feel the weight slide down the arms.\nOne soft breath melts the tension.',
            details: {
              explanation: 'Tight shoulders shape the whole body.\nLet gravity help you soften.\nStay with the warmth as it spreads.'
            }
          },
          { 
            title: 'Come back into the body (FR)', 
            icon: 'BodyScanIcon',
            description: 'Feet on the ground, legs, belly.\nA simple way home.',
            details: {
              explanation: 'Feel the places where the body meets the earth.\nLet attention settle from the head into the body.\nCome home to this moment.'
            }
          },
          { 
            title: 'Reset your posture (FR)', 
            icon: 'PostureIcon',
            description: 'Lengthen the spine, soften the shoulders.\nA simple realignment.',
            details: {
              explanation: 'Small shifts change the whole structure.\nLet the spine rise and the shoulders drop.\nFeel how breath flows more freely.'
            }
          },
          { 
            title: 'Soften the jaw and face (FR)', 
            icon: 'JawSoftIcon',
            description: 'Unclench the jaw, relax the cheeks.\nLet the face remember ease.',
            details: {
              explanation: 'The face often holds hidden tension.\nLet it melt with one soft exhale.\nFeel the mind ease with it.'
            }
          },
          { 
            title: 'Soften the eyes (FR)', 
            icon: 'SoftenEyesIcon',
            description: 'Relax the gaze.\nShift from tunnel vision into wider seeing.',
            details: {
              explanation: 'A softer gaze brings a softer mind.\nLet the eyes rest in a wider field.\nNotice the whole room at once.'
            }
          },
          { 
            title: 'Warm the hands, warm the mind (FR)', 
            icon: 'SoothingTouchIcon',
            description: 'Rub the hands gently and rest them on heart or belly.\nWarmth finds its way inside.',
            details: {
              explanation: 'Warm hands soothe the nervous system.\nLet the heat spread beneath your palms.\nRest in the gentle comfort.'
            }
          },
          { 
            title: 'Five mindful steps (FR)', 
            icon: 'PostureIcon',
            description: 'Slow down a little.\nFeel each lift and place.\nArrive where you are.',
            details: {
              explanation: 'Walking becomes a practice through attention.\nLet each step mark a small arrival.\nMeet the ground beneath you.'
            }
          },
          { 
            title: 'The unclenching (FR)', 
            icon: 'ShoulderReleaseIcon',
            description: 'Notice one place inside that grips.\nLet it soften by five percent.\nThat’s enough.',
            details: {
              explanation: 'Softening even a little changes the whole system.\nChoose one tight place.\nLet it loosen without force.'
            }
          },
        ]
      },
      {
        categoryTitle: 'Sens',
        categorySubtitle: 'Une façon de rencontrer le monde tel qu\'il se présente.',
        practices: [
          { 
            title: 'Listen to the nearest sound (FR)', 
            icon: 'SoundIcon',
            description: 'Let the world come to you.\nNotice the closest sound, then the next.',
            details: {
              explanation: 'Sound opens the door to presence.\nLet your attention widen gently.\nFollow the shifts without effort.'
            }
          },
          { 
            title: 'Three layers of sound (FR)', 
            icon: 'SoundIcon',
            description: 'Hear the nearest sound.\nHear the sound farther away.\nHear the sound beneath it all.',
            details: {
              explanation: 'Move through sound in gentle layers.\nFeel how attention expands with each step.\nRest in the whole soundscape.'
            }
          },
          { 
            title: 'Fingertip grounding (FR)', 
            icon: 'SoothingTouchIcon',
            description: 'Touch thumb to each fingertip.\nFeel texture, warmth, pulse.\nA quiet circuit that steadies you.',
            details: {
              explanation: 'Touch brings you back into the moment.\nSense the warmth at each fingertip.\nLet the circuit settle the body.'
            }
          },
          { 
            title: 'Horizon glance (FR)', 
            icon: 'SoftenEyesIcon',
            description: 'Lift the gaze to something far away.\nLet the distance open the chest.',
            details: {
              explanation: 'A wider view shifts the nervous system.\nLet the chest lift with the gaze.\nFeel the breath deepen.'
            }
          },
          { 
            title: 'Ten quiet seconds (FR)', 
            icon: 'StopIcon',
            description: 'Close the eyes.\nTen seconds of stillness.\nJust being.',
            details: {
              explanation: 'A brief pause can reset the whole moment.\nClose the eyes without effort.\nRest in simple quiet.'
            }
          },
        ]
      },
      {
        categoryTitle: 'Cœur',
        categorySubtitle: 'Un contact discret avec ce qui compte.',
        practices: [
          {
            title: 'Main au cœur',
            icon: 'HeartIcon',
            description: 'Pose une main sur la poitrine.\nSens la chaleur qui monte sous ta paume.\nReste pour un souffle complet.\nLaisse la douceur venir.',
            details: {
              explanation: 'Le toucher physique peut être incroyablement apaisant.\nLa chaleur de la main signale la sécurité au corps.\nRencontrez-vous avec un moment de soin.'
            }
          },
          { 
            title: 'One thing you’re grateful for (FR)', 
            icon: 'GratitudeIcon',
            description: 'Rest with one quiet moment of gratitude.\nLet it touch you.',
            details: {
              explanation: 'Gratitude softens the heart.\nChoose something small, simple.\nFeel the warmth it brings.'
            }
          },
          { 
            title: 'Name what matters right now (FR)', 
            icon: 'HeartIcon',
            description: 'Notice the moment.\nChoose one simple word.\nCarry it softly.',
            details: {
              explanation: 'A single word can guide your next steps.\nLet it rise naturally.\nHold it lightly in the mind.'
            }
          },
          { 
            title: 'One slow sentence (FR)', 
            icon: 'HeartIcon',
            description: 'Say something simple to yourself.\nSlow it until it matches your breath.',
            details: {
              explanation: 'A slow sentence softens inner pressure.\nLet your words follow the breath.\nSpeak gently inside.'
            }
          },
        ]
      }
    ],

    genThemes: ['Acceptation', 'Esprit du Débutant', 'Compassion', 'Énergie', 'Concentration', 'Générosité', 'Gratitude', 'Lâcher-prise', 'Pleine Conscience', 'Non-jugement', 'Non-effort', 'Patience', 'Détente', 'Sommeil', 'Gestion du Stress', 'Confiance'],
    
    genPrompt: (durationInMinutes: number, wordCount: number, selectedTheme: string) => `Vous êtes un expert en pleine conscience. Rédigez un court script de méditation guidée apaisant de ${durationInMinutes} minute(s) sur le thème de '${selectedTheme}'. Le script doit être facile à suivre pour un débutant et compter environ ${wordCount} mots. N'utilisez pas de markdown ou de formatage spécial. Fournissez uniquement le texte du script.`,
  }
};