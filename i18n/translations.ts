export const translations = {
  en: {
    // App Component
    heroTitle: 'The Power of the Pause',
    heroSubtitle: 'Your tiny oasis for one-minute pauses. Find your calm amidst the waves of a busy life.',
    whyTitle: 'Why Is Everyone Talking About This?',
    needResetTitle: 'The Need for a Reset',
    needResetText: 'Digital overload is real. Constant notifications and endless scrolling leave our minds cluttered. Micro-meditations offer a quick, accessible way to hit the reset button, cutting through the noise without a huge time commitment.',
    busyLivesTitle: 'Designed for Busy Lives',
    busyLivesText: 'In a world that glorifies being busy, finding an hour for wellness can feel impossible. These tiny practices fit into the cracks of your day—while waiting for coffee, between meetings, or before sending an an email.',
    whatIsTitle: 'What Counts as a Micro-Meditation?',
    whatIsText: 'Simply put, it\'s any mindfulness practice that takes a minute or less. The goal isn\'t to empty your mind, but to gently guide your focus for a brief moment. It\'s about quality, not duration.',
    aboutTitle: 'About Oasis',
    aboutText: 'Oasis is a simple, ad-free space dedicated to short mindfulness practices. It’s an offering from Kaze Dōjō, a small mindfulness project based in the Adelaide Hills of South Australia. Our goal is to make moments of calm accessible to everyone, without subscriptions or distractions. This project is a labor of love, grounded in the belief that small pauses can make a big difference.',
    howItWorksTitle: 'How Can 60 Seconds Actually Work?',
    howItWorksText: 'Even a few deep breaths can signal to your brain that it\'s safe to relax. This activates the parasympathetic nervous system—your body\'s natural "rest and digest" mode. This simple switch helps lower stress hormones, reduce your heart rate, and improve your ability to focus. It’s a small action with a significant biological impact.',
    toolkitTitle: 'Your Reset Toolkit',
    toolkitSubtitle: 'Choose a practice that resonates with you and set your preferred duration.',
    setDuration: 'Set Duration:',
    continueJourneyTitle: 'Continue Your Journey',
    continueJourneyText: 'Explore your practice further with the Kaze Mindfulness Dōjō, a custom AI guide designed to support your journey with the gentle, reflective spirit of Oasis.',
    continueJourneyButton: 'Visit Kaze Dōjō on ChatGPT',
    footerText: 'Breathe in, breathe out. Your moment of calm is always available.',
    footerAuthor: 'Created by Pierre ‘Satch’ Geslin, mindfulness trainer and haiku poet in the Adelaide Hills of South Australia.',
    footerLink: 'Learn more…',
    whyItMattersText: 'Short practices can interrupt stress patterns and bring the mind back to centre. Used regularly, they change the tone of a day.',
    
    practiceOfTheDay: {
      title: 'Practice of the Day',
      button: 'Try This Practice',
    },

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
    practiceDetailHow: 'The Practice',
    startPracticeButton: 'Start Practice',
    
    // Generative Meditation Component
    genTitle: 'Create Your Own Moment',
    genSubtitle: 'Feeling something else? Select a theme and let our AI craft a unique, guided audio meditation just for you. Each one is a new experience.',
    genSelectTheme: '1. Select a Theme',
    genSelectDuration: '2. Select a Duration',
    genDurationWarning: 'Longer meditations take a little more time to craft. For a quicker experience, you might like to try the 1-minute option first!',
    genSelectVoice: '3. Choose a Voice',
    genCraftButton: 'Craft My Meditation',
    genCraftingButton: 'Crafting...',
    genCraftingMessage: 'Preparing your personal meditation and voice guidance. Thank you for your patience.',
    genError: 'Sorry, something went wrong while creating your meditation. Please try again.',
    genNoAudioError: 'The audio for this meditation is not available (Error: NO_AUDIO_DATA). Please try again with a different theme or voice.',
    genMeditationTitle: 'Your Personal Meditation',
    genAudioMessage: 'Preparing audio guidance...',
    genPlay: 'Play guided meditation',
    genPause: 'Pause guided meditation',
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
      title: 'Reflect on Your Practice',
      intro: 'Putting your experience into words helps solidify its benefits. This is a private space for you to acknowledge what you noticed. Share a few thoughts, and our AI companion will offer a gentle, supportive response to close your practice.',
      prompt: (practiceTitle: string) => `What did you notice during your "${practiceTitle}" practice?`,
      placeholder: 'Take a moment to describe your experience...',
      submitButton: 'Submit Reflection',
      skipButton: 'Skip for now',
      loading: 'Generating a thoughtful response...',
      error: 'Sorry, an AI companion is not available at the moment. Please try again later.',
      doneButton: 'Done',
      aiResponsePrefix: 'AI Companion:',
      aiSystemInstruction: 'You are a gentle, non-judgmental mindfulness companion. Your role is to receive the user\'s reflection after a short mindfulness practice. Validate their experience with a short, compassionate, and encouraging response. Do not give advice, ask questions, or use emojis. Keep your response to one or two sentences. Your tone should be warm, calm, and supportive.',
    },
    
    practiceCategories: [
      {
        categoryTitle: 'Breath',
        categorySubtitle: 'A simple rhythm to steady the moment.',
        practices: [
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
            title: 'One thing you’re grateful for', 
            icon: 'GratitudeIcon',
            description: 'Rest with one quiet moment of gratitude.\nLet it touch you.',
            details: {
              explanation: 'Gratitude softens the heart.\nChoose something small, simple.\nFeel the warmth it brings.'
            }
          },
          { 
            title: 'A hand on the heart', 
            icon: 'HeartIcon',
            description: 'A gentle touch to meet yourself with care.',
            details: {
              explanation: 'Warmth under the palm invites ease.\nFeel the breath meet your hand.\nStay with the kindness.'
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
    heroTitle: 'Le Pouvoir de la Pause',
    heroSubtitle: 'Votre petite oasis pour des pauses d\'une minute. Trouvez votre calme au milieu des vagues d\'une vie bien remplie.',
    whyTitle: 'Pourquoi Tout le Monde en Parle ?',
    needResetTitle: 'Le Besoin d\'une Remise à Zéro',
    needResetText: 'La surcharge numérique est réelle. Les notifications constantes et le défilement infini encombrent nos esprits. Les micro-méditations offrent un moyen rapide et accessible d\'appuyer sur le bouton de réinitialisation, pour percer le bruit sans un engagement de temps énorme.',
    busyLivesTitle: 'Conçu pour les Vies Actives',
    busyLivesText: 'Dans un monde qui glorifie l\'hyperactivité, trouver une heure pour le bien-être peut sembler impossible. Ces petites pratiques s\'intègrent dans les interstices de votre journée — en attendant votre café, entre les réunions, ou avant d\'envoyer un e-mail.',
    whatIsTitle: 'Qu\'est-ce qu\'une Micro-Méditation ?',
    whatIsText: 'En bref, c\'est toute pratique de pleine conscience qui prend une minute ou moins. Le but n\'est pas de vider votre esprit, mais de guider doucement votre attention pendant un bref instant. Il s\'agit de qualité, pas de durée.',
    aboutTitle: 'À propos d\'Oasis',
    aboutText: 'Oasis est un espace simple et sans publicité dédié aux courtes pratiques de pleine conscience. C\'est une offrande du Kaze Dōjō, un petit projet de pleine conscience basé dans les collines d\'Adélaïde en Australie-Méridionale. Notre objectif est de rendre les moments de calme accessibles à tous, sans abonnements ni distractions. Ce projet est un travail d\'amour, fondé sur la conviction que de petites pauses peuvent faire une grande différence.',
    howItWorksTitle: 'Comment 60 Secondes Peuvent-elles Vraiment Fonctionner ?',
    howItWorksText: 'Même quelques respirations profondes peuvent signaler à votre cerveau qu\'il peut se détendre en toute sécurité. Cela active le système nerveux parasympathique — le mode naturel de "repos et digestion" de votre corps. Ce simple changement aide à réduire les hormones du stress, à diminuer votre fréquence cardiaque et à améliorer votre capacité de concentration. C\'est une petite action avec un impact biologique significatif.',
    toolkitTitle: 'Votre Boîte à Outils de Réinitialisation',
    toolkitSubtitle: 'Choisissez une pratique qui résonne avec vous et définissez votre durée préférée.',
    setDuration: 'Durée :',
    continueJourneyTitle: 'Poursuivez Votre Voyage',
    continueJourneyText: 'Explorez davantage votre pratique avec le Kaze Mindfulness Dōjō, un guide IA personnalisé conçu pour soutenir votre parcours dans l\'esprit doux et réflexif d\'Oasis.',
    continueJourneyButton: 'Visiter le Kaze Dōjō sur ChatGPT',
    footerText: 'Inspirez, expirez. Votre moment de calme est toujours disponible.',
    footerAuthor: 'Créé par Pierre ‘Satch’ Geslin, formateur en pleine conscience et poète de haïku dans les Adelaide Hills en Australie-Méridionale.',
    footerLink: 'En savoir plus…',
    whyItMattersText: 'Les pratiques courtes peuvent interrompre les schémas de stress et ramener l\'esprit au centre. Utilisées régulièrement, elles changent le ton d\'une journée.',

    practiceOfTheDay: {
      title: 'Pratique du Jour',
      button: 'Essayer cette pratique',
    },

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
    practiceDetailHow: 'La Pratique',
    startPracticeButton: 'Commencer la Pratique',

    // Generative Meditation Component
    genTitle: 'Créez Votre Propre Moment',
    genSubtitle: 'Envie d\'autre chose ? Sélectionnez un thème et laissez notre IA créer une méditation audio guidée unique, juste pour vous. Chacune est une nouvelle expérience.',
    genSelectTheme: '1. Sélectionnez un Thème',
    genSelectDuration: '2. Sélectionnez une Durée',
    genDurationWarning: 'Les méditations plus longues prennent un peu plus de temps à créer. Pour une expérience plus rapide, vous pourriez essayer l\'option d\'1 minute d\'abord !',
    genSelectVoice: '3. Choisissez une Voix',
    genCraftButton: 'Créer Ma Méditation',
    genCraftingButton: 'Création...',
    genCraftingMessage: 'Préparation de votre méditation personnelle et du guidage vocal. Merci de votre patience.',
    genError: 'Désolé, une erreur est survenue lors de la création de votre méditation. Veuillez réessayer.',
    genNoAudioError: 'L\'audio pour cette méditation n\'est pas disponible (Erreur : NO_AUDIO_DATA). Veuillez réessayer avec un thème ou une voix différente.',
    genMeditationTitle: 'Votre Méditation Personnelle',
    genAudioMessage: 'Préparation du guidage audio...',
    genPlay: 'Lancer la méditation guidée',
    genPause: 'Mettre en pause la méditation guidée',
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
      title: 'Réfléchissez à votre pratique',
      intro: 'Mettre des mots sur votre expérience aide à en consolider les bienfaits. C\'est un espace privé pour vous, pour reconnaître ce que vous avez remarqué. Partagez quelques pensées, et notre compagnon IA offrira une réponse douce et encourageante pour conclure votre pratique.',
      prompt: (practiceTitle: string) => `Qu'avez-vous remarqué pendant votre pratique de "${practiceTitle}" ?`,
      placeholder: 'Prenez un moment pour décrire votre expérience...',
      submitButton: 'Soumettre la réflexion',
      skipButton: 'Passer pour l\'instant',
      loading: 'Génération d\'une réponse réfléchie...',
      error: 'Désolé, l\'assistant IA n\'est pas disponible pour le moment. Veuillez réessayer plus tard.',
      doneButton: 'Terminé',
      aiResponsePrefix: 'Compagnon IA :',
      aiSystemInstruction: 'Vous êtes un compagnon de pleine conscience doux et sans jugement. Votre rôle est de recevoir la réflexion de l\'utilisateur après une courte pratique de pleine conscience. Validez son expérience avec une réponse courte, compatissante et encourageante. Ne donnez pas de conseils, ne posez pas de questions et n\'utilisez pas d\'émojis. Limitez votre réponse à une ou deux phrases. Votre ton doit être chaleureux, calme et encourageant.',
    },
    
    practiceCategories: [
      {
        categoryTitle: 'Respiration',
        categorySubtitle: 'Un rythme simple pour stabiliser le moment.',
        practices: [
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
            title: 'One thing you’re grateful for (FR)', 
            icon: 'GratitudeIcon',
            description: 'Rest with one quiet moment of gratitude.\nLet it touch you.',
            details: {
              explanation: 'Gratitude softens the heart.\nChoose something small, simple.\nFeel the warmth it brings.'
            }
          },
          { 
            title: 'A hand on the heart (FR)', 
            icon: 'HeartIcon',
            description: 'A gentle touch to meet yourself with care.',
            details: {
              explanation: 'Warmth under the palm invites ease.\nFeel the breath meet your hand.\nStay with the kindness.'
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