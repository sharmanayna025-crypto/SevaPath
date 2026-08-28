import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Mic,
  Volume2,
} from "lucide-react";
import "./App.css";

const languages = [
  "English",
  "Hindi",
  "Marathi",
  "Bengali",
  "Tamil",
  "Telugu",
  "Kannada",
  "Malayalam",
  "Gujarati",
  "Punjabi",
  "Urdu",
];

const translations = {
  English: {
    badge: "Government Services, Simplified",
    title1: "Find the right",
    title2: "government service.",
    subtitle:
      "Describe your situation in your own words. SevaPath helps you understand what service you need, what documents to prepare, and where to go next.",
    placeholder:
      "For example: My father's crops were damaged and he needs crop insurance support...",
    find: "Find My Path",
    finding: "Finding your path...",
    example: "Try an example:",
    results: "Your Recommended Path",
    understanding: "What we understood",
    services: "Recommended Services",
    checklist: "Documents Checklist",
    next: "What to do next",
    official: "Open Official Service",
    online: "Online",
    offline: "Offline / Assisted",
    why: "Why this service?",
    startAgain: "Start Again",
    listen: "Listen",
    recommended: "Recommended",
    about: "About SevaPath",
    private: "Your information stays private",
    footer:
      "Making government services easier to navigate.",
    note:
      "SevaPath provides guidance based on the information you provide. Always verify eligibility, documents and current requirements on the official government website.",
    fallbackUnderstanding:
      "You need help finding the correct government service for your situation.",
    fallbackDescription:
      "SevaPath needs a little more information to identify the most relevant government service.",
    fallbackWhy:
      "More information about your situation will help narrow down the correct service.",
    fallbackNext:
      "Describe your situation in a little more detail so SevaPath can guide you to the right service.",
    identity: "Identity proof",
    supporting: "Relevant supporting documents",
  },

  Hindi: {
    badge: "सरकारी सेवाएँ, आसान तरीके से",
    title1: "सही",
    title2: "सरकारी सेवा खोजें।",
    subtitle:
      "अपनी समस्या अपने शब्दों में बताएं। SevaPath आपको सही सेवा, आवश्यक दस्तावेज़ और अगले कदम समझने में मदद करता है।",
    placeholder:
      "उदाहरण: मेरे पिता की फसल खराब हो गई है और उन्हें फसल बीमा सहायता चाहिए...",
    find: "मेरी सेवा खोजें",
    finding: "सेवा खोजी जा रही है...",
    example: "एक उदाहरण आज़माएँ:",
    results: "आपके लिए सुझाया गया रास्ता",
    understanding: "हमने क्या समझा",
    services: "सुझाई गई सेवाएँ",
    checklist: "दस्तावेज़ सूची",
    next: "अगला कदम",
    official: "आधिकारिक सेवा खोलें",
    online: "ऑनलाइन",
    offline: "ऑफलाइन / सहायता",
    why: "यह सेवा क्यों?",
    startAgain: "फिर से शुरू करें",
    listen: "सुनें",
    recommended: "अनुशंसित",
    about: "SevaPath के बारे में",
    private: "आपकी जानकारी निजी रहती है",
    footer:
      "सरकारी सेवाओं को समझना और खोजना आसान बनाना।",
    note:
      "SevaPath आपके द्वारा दी गई जानकारी के आधार पर मार्गदर्शन देता है। पात्रता, दस्तावेज़ और वर्तमान आवश्यकताओं की पुष्टि हमेशा आधिकारिक सरकारी वेबसाइट पर करें।",
    fallbackUnderstanding:
      "आपको सही सरकारी सेवा खोजने में सहायता चाहिए।",
    fallbackDescription:
      "SevaPath को सबसे उपयुक्त सरकारी सेवा पहचानने के लिए थोड़ी और जानकारी चाहिए।",
    fallbackWhy:
      "आपकी स्थिति के बारे में अधिक जानकारी सही सेवा खोजने में मदद करेगी।",
    fallbackNext:
      "अपनी स्थिति के बारे में थोड़ी और जानकारी दें ताकि SevaPath आपको सही सेवा तक पहुंचा सके।",
    identity: "पहचान प्रमाण",
    supporting: "संबंधित सहायक दस्तावेज़",
  },

  Marathi: {
    badge: "सरकारी सेवा, सोप्या पद्धतीने",
    title1: "योग्य",
    title2: "सरकारी सेवा शोधा.",
    subtitle:
      "तुमची समस्या तुमच्या शब्दांत सांगा. SevaPath तुम्हाला योग्य सेवा, आवश्यक कागदपत्रे आणि पुढील पायरी समजण्यास मदत करते.",
    placeholder:
      "उदाहरण: माझ्या वडिलांच्या पिकाचे नुकसान झाले आहे आणि त्यांना पीक विमा मदत हवी आहे...",
    find: "माझा मार्ग शोधा",
    finding: "मार्ग शोधत आहे...",
    example: "एक उदाहरण वापरून पहा:",
    results: "तुमच्यासाठी सुचवलेला मार्ग",
    understanding: "आम्हाला काय समजले",
    services: "शिफारस केलेल्या सेवा",
    checklist: "कागदपत्रांची यादी",
    next: "पुढे काय करावे",
    official: "अधिकृत सेवा उघडा",
    online: "ऑनलाइन",
    offline: "ऑफलाइन / सहाय्य",
    why: "ही सेवा का?",
    startAgain: "पुन्हा सुरू करा",
    listen: "ऐका",
    recommended: "शिफारस केलेले",
    about: "SevaPath बद्दल",
    private: "तुमची माहिती सुरक्षित आणि खाजगी राहते",
    footer:
      "सरकारी सेवा समजून घेणे आणि शोधणे सोपे बनवणे.",
    note:
      "SevaPath तुम्ही दिलेल्या माहितीच्या आधारे मार्गदर्शन करते. पात्रता, कागदपत्रे आणि सध्याच्या आवश्यकतांची अधिकृत सरकारी वेबसाइटवर नेहमी खात्री करा.",
    fallbackUnderstanding:
      "तुम्हाला योग्य सरकारी सेवा शोधण्यासाठी मदत हवी आहे.",
    fallbackDescription:
      "योग्य सरकारी सेवा ओळखण्यासाठी SevaPath ला थोडी अधिक माहिती आवश्यक आहे.",
    fallbackWhy:
      "तुमच्या परिस्थितीबद्दल अधिक माहिती योग्य सेवा शोधण्यात मदत करेल.",
    fallbackNext:
      "तुमच्या परिस्थितीबद्दल थोडी अधिक माहिती द्या, जेणेकरून SevaPath तुम्हाला योग्य सेवेकडे मार्गदर्शन करू शकेल.",
    identity: "ओळखपत्र",
    supporting: "संबंधित कागदपत्रे",
  },

  Bengali: {
    badge: "সরকারি পরিষেবা, সহজভাবে",
    title1: "সঠিক",
    title2: "সরকারি পরিষেবা খুঁজুন।",
    subtitle:
      "আপনার সমস্যাটি নিজের ভাষায় জানান। SevaPath আপনাকে সঠিক পরিষেবা, প্রয়োজনীয় নথি এবং পরবর্তী পদক্ষেপ বুঝতে সাহায্য করে।",
    placeholder:
      "উদাহরণ: আমার বাবার ফসল নষ্ট হয়েছে এবং তাঁর ফসল বিমার সহায়তা প্রয়োজন...",
    find: "আমার পথ খুঁজুন",
    finding: "আপনার পথ খোঁজা হচ্ছে...",
    example: "একটি উদাহরণ চেষ্টা করুন:",
    results: "আপনার জন্য প্রস্তাবিত পথ",
    understanding: "আমরা যা বুঝেছি",
    services: "প্রস্তাবিত পরিষেবা",
    checklist: "নথির তালিকা",
    next: "পরবর্তী পদক্ষেপ",
    official: "অফিসিয়াল পরিষেবা খুলুন",
    online: "অনলাইন",
    offline: "অফলাইন / সহায়তা",
    why: "এই পরিষেবা কেন?",
    startAgain: "আবার শুরু করুন",
    listen: "শুনুন",
    recommended: "প্রস্তাবিত",
    about: "SevaPath সম্পর্কে",
    private: "আপনার তথ্য ব্যক্তিগত থাকে",
    footer:
      "সরকারি পরিষেবা বোঝা এবং খুঁজে পাওয়া সহজ করা।",
    note:
      "SevaPath আপনার দেওয়া তথ্যের ভিত্তিতে নির্দেশনা দেয়। যোগ্যতা, নথি এবং বর্তমান প্রয়োজনীয়তা সবসময় সরকারি ওয়েবসাইটে যাচাই করুন।",
    fallbackUnderstanding:
      "আপনার জন্য সঠিক সরকারি পরিষেবা খুঁজে পেতে সাহায্য প্রয়োজন।",
    fallbackDescription:
      "সঠিক সরকারি পরিষেবা শনাক্ত করতে SevaPath-এর আরও কিছু তথ্য প্রয়োজন।",
    fallbackWhy:
      "আপনার পরিস্থিতি সম্পর্কে আরও তথ্য সঠিক পরিষেবা খুঁজে পেতে সাহায্য করবে।",
    fallbackNext:
      "আপনার পরিস্থিতি সম্পর্কে আরও কিছু তথ্য দিন যাতে SevaPath আপনাকে সঠিক পরিষেবার দিকে নির্দেশ করতে পারে।",
    identity: "পরিচয়পত্র",
    supporting: "প্রাসঙ্গিক সহায়ক নথি",
  },

  Tamil: {
    badge: "அரசு சேவைகள், எளிமையாக",
    title1: "சரியான",
    title2: "அரசு சேவையைக் கண்டறியுங்கள்.",
    subtitle:
      "உங்கள் பிரச்சினையை உங்கள் சொந்த வார்த்தைகளில் கூறுங்கள். SevaPath உங்களுக்கு தேவையான சேவை, ஆவணங்கள் மற்றும் அடுத்த படியைப் புரிந்துகொள்ள உதவுகிறது.",
    placeholder:
      "உதாரணம்: என் தந்தையின் பயிர்கள் சேதமடைந்துள்ளன, அவருக்கு பயிர் காப்பீட்டு உதவி தேவை...",
    find: "என் பாதையைக் கண்டறியவும்",
    finding: "உங்கள் பாதை தேடப்படுகிறது...",
    example: "ஒரு உதாரணத்தை முயற்சிக்கவும்:",
    results: "உங்களுக்கான பரிந்துரைக்கப்பட்ட பாதை",
    understanding: "நாங்கள் புரிந்துகொண்டது",
    services: "பரிந்துரைக்கப்பட்ட சேவைகள்",
    checklist: "ஆவணப் பட்டியல்",
    next: "அடுத்து என்ன செய்ய வேண்டும்",
    official: "அதிகாரப்பூர்வ சேவையைத் திறக்கவும்",
    online: "ஆன்லைன்",
    offline: "ஆஃப்லைன் / உதவி",
    why: "இந்த சேவை ஏன்?",
    startAgain: "மீண்டும் தொடங்கவும்",
    listen: "கேட்கவும்",
    recommended: "பரிந்துரைக்கப்பட்டது",
    about: "SevaPath பற்றி",
    private: "உங்கள் தகவல் தனிப்பட்டதாக இருக்கும்",
    footer:
      "அரசு சேவைகளைப் புரிந்துகொண்டு கண்டறிவதை எளிதாக்குகிறது.",
    note:
      "SevaPath நீங்கள் வழங்கும் தகவலின் அடிப்படையில் வழிகாட்டுகிறது. தகுதி, ஆவணங்கள் மற்றும் தற்போதைய தேவைகளை அதிகாரப்பூர்வ அரசு இணையதளத்தில் எப்போதும் சரிபார்க்கவும்.",
    fallbackUnderstanding:
      "சரியான அரசு சேவையைக் கண்டறிய உங்களுக்கு உதவி தேவை.",
    fallbackDescription:
      "மிகவும் பொருத்தமான அரசு சேவையை அடையாளம் காண SevaPath-க்கு மேலும் சில தகவல்கள் தேவை.",
    fallbackWhy:
      "உங்கள் நிலைமை பற்றிய கூடுதல் தகவல் சரியான சேவையைக் கண்டறிய உதவும்.",
    fallbackNext:
      "உங்கள் நிலைமை பற்றி மேலும் சில தகவல்களை வழங்குங்கள்.",
    identity: "அடையாளச் சான்று",
    supporting: "தொடர்புடைய ஆவணங்கள்",
  },

  Telugu: {
    badge: "ప్రభుత్వ సేవలు, సులభంగా",
    title1: "సరైన",
    title2: "ప్రభుత్వ సేవను కనుగొనండి.",
    subtitle:
      "మీ సమస్యను మీ మాటల్లో వివరించండి. SevaPath మీకు అవసరమైన సేవ, పత్రాలు మరియు తదుపరి దశను అర్థం చేసుకోవడంలో సహాయపడుతుంది.",
    placeholder:
      "ఉదాహరణ: నా తండ్రి పంటలు దెబ్బతిన్నాయి మరియు ఆయనకు పంట బీమా సహాయం కావాలి...",
    find: "నా మార్గాన్ని కనుగొనండి",
    finding: "మీ మార్గాన్ని వెతుకుతోంది...",
    example: "ఒక ఉదాహరణ ప్రయత్నించండి:",
    results: "మీ కోసం సూచించిన మార్గం",
    understanding: "మేము అర్థం చేసుకున్నది",
    services: "సూచించిన సేవలు",
    checklist: "పత్రాల జాబితా",
    next: "తదుపరి దశ",
    official: "అధికారిక సేవను తెరవండి",
    online: "ఆన్‌లైన్",
    offline: "ఆఫ్‌లైన్ / సహాయం",
    why: "ఈ సేవ ఎందుకు?",
    startAgain: "మళ్లీ ప్రారంభించండి",
    listen: "వినండి",
    recommended: "సిఫార్సు చేయబడింది",
    about: "SevaPath గురించి",
    private: "మీ సమాచారం గోప్యంగా ఉంటుంది",
    footer:
      "ప్రభుత్వ సేవలను అర్థం చేసుకోవడం మరియు కనుగొనడం సులభం చేస్తుంది.",
    note:
      "SevaPath మీరు అందించిన సమాచారం ఆధారంగా మార్గదర్శనం చేస్తుంది. అర్హత, పత్రాలు మరియు ప్రస్తుత అవసరాలను అధికారిక ప్రభుత్వ వెబ్‌సైట్‌లో ఎల్లప్పుడూ ధృవీకరించండి.",
    fallbackUnderstanding:
      "సరైన ప్రభుత్వ సేవను కనుగొనడానికి మీకు సహాయం అవసరం.",
    fallbackDescription:
      "సరైన ప్రభుత్వ సేవను గుర్తించడానికి SevaPath‌కు మరింత సమాచారం అవసరం.",
    fallbackWhy:
      "మీ పరిస్థితి గురించి మరింత సమాచారం సరైన సేవను కనుగొనడంలో సహాయపడుతుంది.",
    fallbackNext:
      "మీ పరిస్థితి గురించి మరింత సమాచారం అందించండి.",
    identity: "గుర్తింపు రుజువు",
    supporting: "సంబంధిత పత్రాలు",
  },

  Kannada: {
    badge: "ಸರ್ಕಾರಿ ಸೇವೆಗಳು, ಸರಳವಾಗಿ",
    title1: "ಸರಿಯಾದ",
    title2: "ಸರ್ಕಾರಿ ಸೇವೆಯನ್ನು ಹುಡುಕಿ.",
    subtitle:
      "ನಿಮ್ಮ ಸಮಸ್ಯೆಯನ್ನು ನಿಮ್ಮದೇ ಮಾತುಗಳಲ್ಲಿ ವಿವರಿಸಿ. SevaPath ನಿಮಗೆ ಅಗತ್ಯವಿರುವ ಸೇವೆ, ದಾಖಲೆಗಳು ಮತ್ತು ಮುಂದಿನ ಹಂತವನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
    placeholder:
      "ಉದಾಹರಣೆ: ನನ್ನ ತಂದೆಯ ಬೆಳೆ ಹಾನಿಯಾಗಿದೆ ಮತ್ತು ಅವರಿಗೆ ಬೆಳೆ ವಿಮೆ ಸಹಾಯ ಬೇಕಾಗಿದೆ...",
    find: "ನನ್ನ ಮಾರ್ಗವನ್ನು ಹುಡುಕಿ",
    finding: "ನಿಮ್ಮ ಮಾರ್ಗವನ್ನು ಹುಡುಕಲಾಗುತ್ತಿದೆ...",
    example: "ಒಂದು ಉದಾಹರಣೆಯನ್ನು ಪ್ರಯತ್ನಿಸಿ:",
    results: "ನಿಮಗಾಗಿ ಶಿಫಾರಸು ಮಾಡಿದ ಮಾರ್ಗ",
    understanding: "ನಾವು ಅರ್ಥಮಾಡಿಕೊಂಡದ್ದು",
    services: "ಶಿಫಾರಸು ಮಾಡಿದ ಸೇವೆಗಳು",
    checklist: "ದಾಖಲೆಗಳ ಪಟ್ಟಿ",
    next: "ಮುಂದಿನ ಹಂತ",
    official: "ಅಧಿಕೃತ ಸೇವೆಯನ್ನು ತೆರೆಯಿರಿ",
    online: "ಆನ್‌ಲೈನ್",
    offline: "ಆಫ್‌ಲೈನ್ / ಸಹಾಯ",
    why: "ಈ ಸೇವೆ ಏಕೆ?",
    startAgain: "ಮತ್ತೆ ಪ್ರಾರಂಭಿಸಿ",
    listen: "ಆಲಿಸಿ",
    recommended: "ಶಿಫಾರಸು ಮಾಡಲಾಗಿದೆ",
    about: "SevaPath ಬಗ್ಗೆ",
    private: "ನಿಮ್ಮ ಮಾಹಿತಿ ಖಾಸಗಿಯಾಗಿರುತ್ತದೆ",
    footer:
      "ಸರ್ಕಾರಿ ಸೇವೆಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು ಮತ್ತು ಹುಡುಕುವುದು ಸುಲಭವಾಗಿಸುತ್ತದೆ.",
    note:
      "SevaPath ನೀವು ನೀಡಿದ ಮಾಹಿತಿಯ ಆಧಾರದ ಮೇಲೆ ಮಾರ್ಗದರ್ಶನ ನೀಡುತ್ತದೆ. ಅರ್ಹತೆ, ದಾಖಲೆಗಳು ಮತ್ತು ಪ್ರಸ್ತುತ ಅವಶ್ಯಕತೆಗಳನ್ನು ಅಧಿಕೃತ ಸರ್ಕಾರಿ ವೆಬ್‌ಸೈಟ್‌ನಲ್ಲಿ ಪರಿಶೀಲಿಸಿ.",
    fallbackUnderstanding:
      "ಸರಿಯಾದ ಸರ್ಕಾರಿ ಸೇವೆಯನ್ನು ಹುಡುಕಲು ನಿಮಗೆ ಸಹಾಯ ಬೇಕಾಗಿದೆ.",
    fallbackDescription:
      "ಅತ್ಯಂತ ಸೂಕ್ತವಾದ ಸರ್ಕಾರಿ ಸೇವೆಯನ್ನು ಗುರುತಿಸಲು SevaPath‌ಗೆ ಹೆಚ್ಚಿನ ಮಾಹಿತಿ ಅಗತ್ಯವಿದೆ.",
    fallbackWhy:
      "ನಿಮ್ಮ ಪರಿಸ್ಥಿತಿಯ ಬಗ್ಗೆ ಹೆಚ್ಚಿನ ಮಾಹಿತಿ ಸರಿಯಾದ ಸೇವೆಯನ್ನು ಹುಡುಕಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
    fallbackNext:
      "ನಿಮ್ಮ ಪರಿಸ್ಥಿತಿಯ ಬಗ್ಗೆ ಸ್ವಲ್ಪ ಹೆಚ್ಚಿನ ಮಾಹಿತಿಯನ್ನು ನೀಡಿ.",
    identity: "ಗುರುತಿನ ಪುರಾವೆ",
    supporting: "ಸಂಬಂಧಿತ ದಾಖಲೆಗಳು",
  },

  Malayalam: {
    badge: "സർക്കാർ സേവനങ്ങൾ, ലളിതമായി",
    title1: "ശരിയായ",
    title2: "സർക്കാർ സേവനം കണ്ടെത്തുക.",
    subtitle:
      "നിങ്ങളുടെ പ്രശ്നം നിങ്ങളുടെ സ്വന്തം വാക്കുകളിൽ വിവരിക്കുക. ആവശ്യമായ സേവനം, രേഖകൾ, അടുത്ത ഘട്ടം എന്നിവ മനസ്സിലാക്കാൻ SevaPath നിങ്ങളെ സഹായിക്കുന്നു.",
    placeholder:
      "ഉദാഹരണം: എന്റെ പിതാവിന്റെ വിളകൾ നശിച്ചു, അദ്ദേഹത്തിന് വിള ഇൻഷുറൻസ് സഹായം ആവശ്യമാണ്...",
    find: "എന്റെ വഴി കണ്ടെത്തുക",
    finding: "നിങ്ങളുടെ വഴി കണ്ടെത്തുന്നു...",
    example: "ഒരു ഉദാഹരണം പരീക്ഷിക്കുക:",
    results: "നിങ്ങൾക്കായി ശുപാർശ ചെയ്ത വഴി",
    understanding: "ഞങ്ങൾ മനസ്സിലാക്കിയത്",
    services: "ശുപാർശ ചെയ്ത സേവനങ്ങൾ",
    checklist: "രേഖകളുടെ പട്ടിക",
    next: "അടുത്ത ഘട്ടം",
    official: "ഔദ്യോഗിക സേവനം തുറക്കുക",
    online: "ഓൺലൈൻ",
    offline: "ഓഫ്‌ലൈൻ / സഹായം",
    why: "ഈ സേവനം എന്തുകൊണ്ട്?",
    startAgain: "വീണ്ടും ആരംഭിക്കുക",
    listen: "കേൾക്കുക",
    recommended: "ശുപാർശ ചെയ്യുന്നു",
    about: "SevaPath നെക്കുറിച്ച്",
    private: "നിങ്ങളുടെ വിവരങ്ങൾ സ്വകാര്യമായി തുടരും",
    footer:
      "സർക്കാർ സേവനങ്ങൾ മനസ്സിലാക്കാനും കണ്ടെത്താനും എളുപ്പമാക്കുന്നു.",
    note:
      "നിങ്ങൾ നൽകുന്ന വിവരങ്ങളുടെ അടിസ്ഥാനത്തിലാണ് SevaPath മാർഗനിർദ്ദേശം നൽകുന്നത്. യോഗ്യത, രേഖകൾ, നിലവിലെ ആവശ്യകതകൾ എന്നിവ ഔദ്യോഗിക സർക്കാർ വെബ്‌സൈറ്റിൽ പരിശോധിക്കുക.",
    fallbackUnderstanding:
      "ശരിയായ സർക്കാർ സേവനം കണ്ടെത്താൻ നിങ്ങൾക്ക് സഹായം ആവശ്യമാണ്.",
    fallbackDescription:
      "ഏറ്റവും അനുയോജ്യമായ സർക്കാർ സേവനം കണ്ടെത്താൻ SevaPath-ന് കൂടുതൽ വിവരങ്ങൾ ആവശ്യമാണ്.",
    fallbackWhy:
      "നിങ്ങളുടെ സാഹചര്യത്തെക്കുറിച്ചുള്ള കൂടുതൽ വിവരങ്ങൾ ശരിയായ സേവനം കണ്ടെത്താൻ സഹായിക്കും.",
    fallbackNext:
      "നിങ്ങളുടെ സാഹചര്യത്തെക്കുറിച്ച് കുറച്ച് കൂടുതൽ വിവരങ്ങൾ നൽകുക.",
    identity: "തിരിച്ചറിയൽ രേഖ",
    supporting: "ബന്ധപ്പെട്ട രേഖകൾ",
  },

  Gujarati: {
    badge: "સરકારી સેવાઓ, સરળ રીતે",
    title1: "યોગ્ય",
    title2: "સરકારી સેવા શોધો.",
    subtitle:
      "તમારી સમસ્યા તમારા પોતાના શબ્દોમાં જણાવો. SevaPath તમને યોગ્ય સેવા, જરૂરી દસ્તાવેજો અને આગળના પગલાં સમજવામાં મદદ કરે છે.",
    placeholder:
      "ઉદાહરણ: મારા પિતાના પાકને નુકસાન થયું છે અને તેમને પાક વીમાની મદદ જોઈએ છે...",
    find: "મારો માર્ગ શોધો",
    finding: "તમારો માર્ગ શોધી રહ્યા છીએ...",
    example: "એક ઉદાહરણ અજમાવો:",
    results: "તમારા માટે સૂચવાયેલ માર્ગ",
    understanding: "અમે શું સમજ્યા",
    services: "સૂચવેલી સેવાઓ",
    checklist: "દસ્તાવેજોની યાદી",
    next: "આગળ શું કરવું",
    official: "સત્તાવાર સેવા ખોલો",
    online: "ઓનલાઇન",
    offline: "ઓફલાઇન / સહાય",
    why: "આ સેવા શા માટે?",
    startAgain: "ફરીથી શરૂ કરો",
    listen: "સાંભળો",
    recommended: "ભલામણ કરેલ",
    about: "SevaPath વિશે",
    private: "તમારી માહિતી ખાનગી રહે છે",
    footer:
      "સરકારી સેવાઓને સમજવા અને શોધવાનું સરળ બનાવવું.",
    note:
      "SevaPath તમે આપેલી માહિતીના આધારે માર્ગદર્શન આપે છે. પાત્રતા, દસ્તાવેજો અને વર્તમાન જરૂરિયાતો સત્તાવાર સરકારી વેબસાઇટ પર હંમેશા તપાસો.",
    fallbackUnderstanding:
      "તમને યોગ્ય સરકારી સેવા શોધવામાં મદદની જરૂર છે.",
    fallbackDescription:
      "સૌથી યોગ્ય સરકારી સેવા ઓળખવા માટે SevaPath ને વધુ માહિતીની જરૂર છે.",
    fallbackWhy:
      "તમારી પરિસ્થિતિ વિશે વધુ માહિતી યોગ્ય સેવા શોધવામાં મદદ કરશે.",
    fallbackNext:
      "તમારી પરિસ્થિતિ વિશે થોડી વધુ માહિતી આપો.",
    identity: "ઓળખનો પુરાવો",
    supporting: "સંબંધિત દસ્તાવેજો",
  },

  Punjabi: {
    badge: "ਸਰਕਾਰੀ ਸੇਵਾਵਾਂ, ਆਸਾਨ ਤਰੀਕੇ ਨਾਲ",
    title1: "ਸਹੀ",
    title2: "ਸਰਕਾਰੀ ਸੇਵਾ ਲੱਭੋ।",
    subtitle:
      "ਆਪਣੀ ਸਮੱਸਿਆ ਆਪਣੇ ਸ਼ਬਦਾਂ ਵਿੱਚ ਦੱਸੋ। SevaPath ਤੁਹਾਨੂੰ ਸਹੀ ਸੇਵਾ, ਲੋੜੀਂਦੇ ਦਸਤਾਵੇਜ਼ ਅਤੇ ਅਗਲਾ ਕਦਮ ਸਮਝਣ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ।",
    placeholder:
      "ਉਦਾਹਰਨ: ਮੇਰੇ ਪਿਤਾ ਦੀ ਫਸਲ ਖਰਾਬ ਹੋ ਗਈ ਹੈ ਅਤੇ ਉਨ੍ਹਾਂ ਨੂੰ ਫਸਲ ਬੀਮਾ ਸਹਾਇਤਾ ਚਾਹੀਦੀ ਹੈ...",
    find: "ਮੇਰਾ ਰਸਤਾ ਲੱਭੋ",
    finding: "ਤੁਹਾਡਾ ਰਸਤਾ ਲੱਭਿਆ ਜਾ ਰਿਹਾ ਹੈ...",
    example: "ਇੱਕ ਉਦਾਹਰਨ ਅਜ਼ਮਾਓ:",
    results: "ਤੁਹਾਡੇ ਲਈ ਸੁਝਾਇਆ ਗਿਆ ਰਸਤਾ",
    understanding: "ਅਸੀਂ ਕੀ ਸਮਝਿਆ",
    services: "ਸੁਝਾਈਆਂ ਗਈਆਂ ਸੇਵਾਵਾਂ",
    checklist: "ਦਸਤਾਵੇਜ਼ਾਂ ਦੀ ਸੂਚੀ",
    next: "ਅਗਲਾ ਕਦਮ",
    official: "ਅਧਿਕਾਰਤ ਸੇਵਾ ਖੋਲ੍ਹੋ",
    online: "ਆਨਲਾਈਨ",
    offline: "ਆਫਲਾਈਨ / ਸਹਾਇਤਾ",
    why: "ਇਹ ਸੇਵਾ ਕਿਉਂ?",
    startAgain: "ਦੁਬਾਰਾ ਸ਼ੁਰੂ ਕਰੋ",
    listen: "ਸੁਣੋ",
    recommended: "ਸਿਫ਼ਾਰਸ਼ ਕੀਤੀ",
    about: "SevaPath ਬਾਰੇ",
    private: "ਤੁਹਾਡੀ ਜਾਣਕਾਰੀ ਨਿੱਜੀ ਰਹਿੰਦੀ ਹੈ",
    footer:
      "ਸਰਕਾਰੀ ਸੇਵਾਵਾਂ ਨੂੰ ਸਮਝਣਾ ਅਤੇ ਲੱਭਣਾ ਆਸਾਨ ਬਣਾਉਣਾ.",
    note:
      "SevaPath ਤੁਹਾਡੇ ਵੱਲੋਂ ਦਿੱਤੀ ਜਾਣਕਾਰੀ ਦੇ ਆਧਾਰ 'ਤੇ ਮਾਰਗਦਰਸ਼ਨ ਦਿੰਦਾ ਹੈ। ਯੋਗਤਾ, ਦਸਤਾਵੇਜ਼ ਅਤੇ ਮੌਜੂਦਾ ਲੋੜਾਂ ਦੀ ਹਮੇਸ਼ਾ ਸਰਕਾਰੀ ਵੈੱਬਸਾਈਟ 'ਤੇ ਪੁਸ਼ਟੀ ਕਰੋ।",
    fallbackUnderstanding:
      "ਤੁਹਾਨੂੰ ਸਹੀ ਸਰਕਾਰੀ ਸੇਵਾ ਲੱਭਣ ਵਿੱਚ ਮਦਦ ਦੀ ਲੋੜ ਹੈ।",
    fallbackDescription:
      "ਸਹੀ ਸਰਕਾਰੀ ਸੇਵਾ ਦੀ ਪਛਾਣ ਕਰਨ ਲਈ SevaPath ਨੂੰ ਹੋਰ ਜਾਣਕਾਰੀ ਦੀ ਲੋੜ ਹੈ।",
    fallbackWhy:
      "ਤੁਹਾਡੀ ਸਥਿਤੀ ਬਾਰੇ ਹੋਰ ਜਾਣਕਾਰੀ ਸਹੀ ਸੇਵਾ ਲੱਭਣ ਵਿੱਚ ਮਦਦ ਕਰੇਗੀ।",
    fallbackNext:
      "ਆਪਣੀ ਸਥਿਤੀ ਬਾਰੇ ਥੋੜ੍ਹੀ ਹੋਰ ਜਾਣਕਾਰੀ ਦਿਓ।",
    identity: "ਪਛਾਣ ਦਾ ਸਬੂਤ",
    supporting: "ਸੰਬੰਧਿਤ ਦਸਤਾਵੇਜ਼",
  },

  Urdu: {
    badge: "سرکاری خدمات، آسان طریقے سے",
    title1: "صحیح",
    title2: "سرکاری خدمت تلاش کریں۔",
    subtitle:
      "اپنی صورتحال اپنے الفاظ میں بیان کریں۔ SevaPath آپ کو صحیح خدمت، ضروری دستاویزات اور اگلے مرحلے کو سمجھنے میں مدد کرتا ہے۔",
    placeholder:
      "مثال: میرے والد کی فصل خراب ہو گئی ہے اور انہیں فصل بیمہ کی مدد چاہیے...",
    find: "میرا راستہ تلاش کریں",
    finding: "آپ کا راستہ تلاش کیا جا رہا ہے...",
    example: "ایک مثال آزمائیں:",
    results: "آپ کے لیے تجویز کردہ راستہ",
    understanding: "ہم نے کیا سمجھا",
    services: "تجویز کردہ خدمات",
    checklist: "دستاویزات کی فہرست",
    next: "اگلا مرحلہ",
    official: "سرکاری خدمت کھولیں",
    online: "آن لائن",
    offline: "آف لائن / مدد",
    why: "یہ خدمت کیوں؟",
    startAgain: "دوبارہ شروع کریں",
    listen: "سنیں",
    recommended: "تجویز کردہ",
    about: "SevaPath کے بارے میں",
    private: "آپ کی معلومات نجی رہتی ہیں",
    footer:
      "سرکاری خدمات کو سمجھنا اور تلاش کرنا آسان بنانا۔",
    note:
      "SevaPath آپ کی فراہم کردہ معلومات کی بنیاد پر رہنمائی کرتا ہے۔ اہلیت، دستاویزات اور موجودہ ضروریات کی ہمیشہ سرکاری ویب سائٹ پر تصدیق کریں۔",
    fallbackUnderstanding:
      "آپ کو صحیح سرکاری خدمت تلاش کرنے میں مدد کی ضرورت ہے۔",
    fallbackDescription:
      "صحیح سرکاری خدمت کی شناخت کے لیے SevaPath کو مزید معلومات درکار ہیں۔",
    fallbackWhy:
      "آپ کی صورتحال کے بارے میں مزید معلومات صحیح خدمت تلاش کرنے میں مدد کریں گی۔",
    fallbackNext:
      "اپنی صورتحال کے بارے میں کچھ مزید معلومات فراہم کریں۔",
    identity: "شناخت کا ثبوت",
    supporting: "متعلقہ دستاویزات",
  },
};

const examples = {
  English: [
    "My father's crops were damaged and he needs crop insurance support",
    "I want to apply for a new driving licence",
    "I need to update my Aadhaar address",
    "I want to apply for a government scholarship",
  ],

  Hindi: [
    "मेरे पिता की फसल खराब हो गई है और उन्हें फसल बीमा सहायता चाहिए",
    "मैं नया ड्राइविंग लाइसेंस बनवाना चाहता हूँ",
    "मुझे अपने आधार का पता अपडेट करना है",
    "मैं सरकारी छात्रवृत्ति के लिए आवेदन करना चाहता हूँ",
  ],

  Marathi: [
    "माझ्या वडिलांच्या पिकाचे नुकसान झाले आहे आणि त्यांना पीक विमा मदत हवी आहे",
    "मला नवीन ड्रायव्हिंग लायसन्ससाठी अर्ज करायचा आहे",
    "मला माझ्या आधारचा पत्ता अपडेट करायचा आहे",
    "मला सरकारी शिष्यवृत्तीसाठी अर्ज करायचा आहे",
  ],

  Bengali: [
    "আমার বাবার ফসল নষ্ট হয়েছে এবং তাঁর ফসল বিমার সহায়তা প্রয়োজন",
    "আমি নতুন ড্রাইভিং লাইসেন্সের জন্য আবেদন করতে চাই",
    "আমি আধারের ঠিকানা আপডেট করতে চাই",
    "আমি সরকারি বৃত্তির জন্য আবেদন করতে চাই",
  ],

  Tamil: [
    "என் தந்தையின் பயிர்கள் சேதமடைந்துள்ளன, அவருக்கு பயிர் காப்பீட்டு உதவி தேவை",
    "நான் புதிய ஓட்டுநர் உரிமத்திற்கு விண்ணப்பிக்க விரும்புகிறேன்",
    "என் ஆதார் முகவரியை புதுப்பிக்க வேண்டும்",
    "அரசு கல்வி உதவித்தொகைக்கு விண்ணப்பிக்க விரும்புகிறேன்",
  ],

  Telugu: [
    "నా తండ్రి పంటలు దెబ్బతిన్నాయి మరియు ఆయనకు పంట బీమా సహాయం కావాలి",
    "నేను కొత్త డ్రైవింగ్ లైసెన్స్ కోసం దరఖాస్తు చేయాలనుకుంటున్నాను",
    "నా ఆధార్ చిరునామాను అప్‌డేట్ చేయాలి",
    "ప్రభుత్వ స్కాలర్‌షిప్ కోసం దరఖాస్తు చేయాలనుకుంటున్నాను",
  ],

  Kannada: [
    "ನನ್ನ ತಂದೆಯ ಬೆಳೆ ಹಾನಿಯಾಗಿದೆ ಮತ್ತು ಅವರಿಗೆ ಬೆಳೆ ವಿಮೆ ಸಹಾಯ ಬೇಕಾಗಿದೆ",
    "ನಾನು ಹೊಸ ಚಾಲನಾ ಪರವಾನಗಿಗಾಗಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಲು ಬಯಸುತ್ತೇನೆ",
    "ನನ್ನ ಆಧಾರ್ ವಿಳಾಸವನ್ನು ನವೀಕರಿಸಬೇಕು",
    "ಸರ್ಕಾರಿ ವಿದ್ಯಾರ್ಥಿವೇತನಕ್ಕೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಲು ಬಯಸುತ್ತೇನೆ",
  ],

  Malayalam: [
    "എന്റെ പിതാവിന്റെ വിളകൾ നശിച്ചു, അദ്ദേഹത്തിന് വിള ഇൻഷുറൻസ് സഹായം ആവശ്യമാണ്",
    "എനിക്ക് പുതിയ ഡ്രൈവിംഗ് ലൈസൻസിന് അപേക്ഷിക്കണം",
    "എന്റെ ആധാർ വിലാസം അപ്ഡേറ്റ് ചെയ്യണം",
    "സർക്കാർ സ്കോളർഷിപ്പിന് അപേക്ഷിക്കണം",
  ],

  Gujarati: [
    "મારા પિતાના પાકને નુકસાન થયું છે અને તેમને પાક વીમાની મદદ જોઈએ છે",
    "મારે નવા ડ્રાઇવિંગ લાઇસન્સ માટે અરજી કરવી છે",
    "મારે મારા આધારનું સરનામું અપડેટ કરવું છે",
    "મારે સરકારી શિષ્યવૃત્તિ માટે અરજી કરવી છે",
  ],

  Punjabi: [
    "ਮੇਰੇ ਪਿਤਾ ਦੀ ਫਸਲ ਖਰਾਬ ਹੋ ਗਈ ਹੈ ਅਤੇ ਉਨ੍ਹਾਂ ਨੂੰ ਫਸਲ ਬੀਮਾ ਸਹਾਇਤਾ ਚਾਹੀਦੀ ਹੈ",
    "ਮੈਂ ਨਵੇਂ ਡਰਾਈਵਿੰਗ ਲਾਇਸੈਂਸ ਲਈ ਅਰਜ਼ੀ ਦੇਣਾ ਚਾਹੁੰਦਾ ਹਾਂ",
    "ਮੈਨੂੰ ਆਪਣਾ ਆਧਾਰ ਪਤਾ ਅਪਡੇਟ ਕਰਨਾ ਹੈ",
    "ਮੈਂ ਸਰਕਾਰੀ ਸਕਾਲਰਸ਼ਿਪ ਲਈ ਅਰਜ਼ੀ ਦੇਣਾ ਚਾਹੁੰਦਾ ਹਾਂ",
  ],

  Urdu: [
    "میرے والد کی فصل خراب ہو گئی ہے اور انہیں فصل بیمہ کی مدد چاہیے",
    "میں نئے ڈرائیونگ لائسنس کے لیے درخواست دینا چاہتا ہوں",
    "مجھے اپنے آدھار کا پتہ اپ ڈیٹ کرنا ہے",
    "میں سرکاری اسکالرشپ کے لیے درخواست دینا چاہتا ہوں",
  ],
};

function getLanguageCode(language) {
  const codes = {
    English: "en-IN",
    Hindi: "hi-IN",
    Marathi: "mr-IN",
    Bengali: "bn-IN",
    Tamil: "ta-IN",
    Telugu: "te-IN",
    Kannada: "kn-IN",
    Malayalam: "ml-IN",
    Gujarati: "gu-IN",
    Punjabi: "pa-IN",
    Urdu: "ur-IN",
  };

  return codes[language] || "en-IN";
}

function App() {
  const [request, setRequest] = useState("");
  const [language, setLanguage] = useState("English");
  const [showPath, setShowPath] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pathData, setPathData] = useState(null);
  const [listening, setListening] = useState(false);

  const t = translations[language] || translations.English;

  const currentExamples =
    examples[language] || examples.English;

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;

    setLanguage(newLanguage);

    /*
     * IMPORTANT:
     * We intentionally DO NOT modify pathData here.
     *
     * Service URLs belong to the backend service objects,
     * not to the selected language.
     */
  };

  const handleExample = (example) => {
    setRequest(example);
  };

  const handleVoice = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Voice input is not supported in this browser.");
      return;
    }

    if (listening) return;

    const Recognition =
      window.webkitSpeechRecognition;

    const recognition = new Recognition();

    recognition.lang = getLanguageCode(language);
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      setListening(true);
    };

    recognition.onresult = (event) => {
      const transcript =
        event.results[0][0].transcript;

      setRequest(transcript);
    };

    recognition.onerror = () => {
      setListening(false);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognition.start();
  };

  const speakText = (text) => {
    if (!("speechSynthesis" in window)) {
      alert(
        "Text-to-speech is not supported in this browser."
      );
      return;
    }

    window.speechSynthesis.cancel();

    const utterance =
      new SpeechSynthesisUtterance(text);

    utterance.lang = getLanguageCode(language);

    window.speechSynthesis.speak(utterance);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!request.trim()) return;

    setLoading(true);
    setShowPath(false);

    try {
      const response = await fetch(
        "https://savepath-backend.onrender.com/api/find-path",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            request: request.trim(),
            language,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(
          `Backend returned ${response.status}`
        );
      }

      const data = await response.json();

      /*
       * DEBUG:
       * This lets us verify exactly what backend
       * returned for every language.
       */
      console.log(
        "SevaPath backend response:",
        data
      );

      setPathData(data);
      setShowPath(true);

      setTimeout(() => {
        document
          .getElementById("results")
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      }, 100);
    } catch (error) {
      console.error(error);

      alert(
        "Unable to connect to SevaPath backend. Make sure the backend is running on port 3001."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleStartAgain = () => {
    setRequest("");
    setPathData(null);
    setShowPath(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /*
   * THIS FUNCTION IS THE IMPORTANT PART.
   *
   * It does NOT look at language.
   * It does NOT look at service name.
   * It does NOT guess a government URL.
   *
   * It simply uses service.url from the backend.
   */
  const getOfficialUrl = (service) => {
    if (!service) return null;

    if (
      typeof service.url === "string" &&
      service.url.trim().length > 0
    ) {
      return service.url.trim();
    }

    return null;
  };

  return (
    <div className="app">
      {/* HEADER */}

      <header className="topbar">
        <div className="brand">
          <div className="brand-mark">
            <ShieldCheck size={22} />
          </div>

          <div>
            <div className="brand-name">
              SevaPath
            </div>

            <div className="brand-subtitle">
              {t.footer}
            </div>
          </div>
        </div>

        <div className="language-wrapper">
          <select
            value={language}
            onChange={handleLanguageChange}
            className="language-select"
          >
            {languages.map((item) => (
              <option
                key={item}
                value={item}
              >
                {item}
              </option>
            ))}
          </select>
        </div>
      </header>

      {/* HERO */}

      {!showPath && (
        <main className="hero">
          <div className="hero-badge">
            <Sparkles size={15} />
            {t.badge}
          </div>

          <h1>
            {t.title1}
            <br />
            <span>{t.title2}</span>
          </h1>

          <p className="hero-subtitle">
            {t.subtitle}
          </p>

          <form
            className="search-box"
            onSubmit={handleSubmit}
          >
            <div className="input-wrapper">
              <textarea
                value={request}
                onChange={(event) =>
                  setRequest(event.target.value)
                }
                placeholder={t.placeholder}
                rows={5}
              />

              <div className="input-actions">
                <button
                  type="button"
                  className={`icon-button ${
                    listening ? "active" : ""
                  }`}
                  onClick={handleVoice}
                  aria-label={t.listen}
                >
                  <Mic size={19} />
                </button>
              </div>
            </div>

            <div className="form-bottom">
              <div className="privacy-note">
                <ShieldCheck size={15} />
                <span>{t.private}</span>
              </div>

              <button
                className="find-button"
                type="submit"
                disabled={
                  loading || !request.trim()
                }
              >
                {loading ? t.finding : t.find}

                {!loading && (
                  <ArrowRight size={17} />
                )}
              </button>
            </div>
          </form>

          <div className="examples">
            <span>{t.example}</span>

            <div className="example-list">
              {currentExamples.map(
                (example) => (
                  <button
                    key={example}
                    type="button"
                    onClick={() =>
                      handleExample(example)
                    }
                    className="example-button"
                  >
                    {example}
                  </button>
                )
              )}
            </div>
          </div>
        </main>
      )}

      {/* RESULTS */}

      {showPath && pathData && (
        <main
          className="results-page"
          id="results"
        >
          <div className="results-header">
            <div>
              <div className="hero-badge">
                <Sparkles size={15} />
                {t.results}
              </div>

              <h2>{t.results}</h2>
            </div>

            <button
              type="button"
              className="start-again-button"
              onClick={handleStartAgain}
            >
              {t.startAgain}
            </button>
          </div>

          {/* UNDERSTANDING */}

          <section className="understanding-card">
            <div className="understanding-icon">
              <MessageCircle size={20} />
            </div>

            <div className="understanding-content">
              <div className="section-label">
                {t.understanding}
              </div>

              <p>
                {pathData.understanding ||
                  t.fallbackUnderstanding}
              </p>

              <button
                type="button"
                className="speak-button"
                onClick={() =>
                  speakText(
                    pathData.understanding ||
                      t.fallbackUnderstanding
                  )
                }
              >
                <Volume2 size={16} />
                {t.listen}
              </button>
            </div>
          </section>

          <div className="results-grid">
            {/* SERVICES */}

            <section className="services-section">
              <div className="section-heading">
                <div>
                  <div className="section-kicker">
                    {t.services}
                  </div>

                  <h3>{t.services}</h3>
                </div>
              </div>

              <div className="service-list">
                {pathData.services?.map(
                  (service, index) => {
                    const serviceUrl =
                      getOfficialUrl(service);

                    return (
                      <div
                        className={`service-card ${
                          index === 0
                            ? "featured"
                            : ""
                        }`}
                        key={`${service.name}-${index}`}
                      >
                        <div className="service-number">
                          {String(
                            index + 1
                          ).padStart(2, "0")}
                        </div>

                        <div className="service-icon">
                          <FileText size={22} />
                        </div>

                        <div className="service-content">
                          <div className="service-top">
                            <div>
                              <div className="service-category">
                                {service.category}
                              </div>

                              <h4>
                                {service.name}
                              </h4>
                            </div>

                            {index === 0 && (
                              <span className="recommended-badge">
                                {t.recommended}
                              </span>
                            )}
                          </div>

                          <p className="service-description">
                            {service.description}
                          </p>

                          <div className="service-meta">
                            <div>
                              <MapPin size={14} />

                              <span>
                                {service.online
                                  ? t.online
                                  : t.offline}
                              </span>
                            </div>
                          </div>

                          <div className="service-why">
                            <strong>
                              {t.why}
                            </strong>

                            <span>
                              {service.why}
                            </span>
                          </div>

                          {serviceUrl && (
                            <a
                              className="service-arrow"
                              href={serviceUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${t.official}: ${service.name}`}
                            >
                              <ArrowRight
                                size={18}
                              />
                            </a>
                          )}
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </section>

            {/* SIDEBAR */}

            <aside className="path-sidebar">
              {/* CHECKLIST */}

              <div className="checklist-card">
                <div className="sidebar-label">
                  <CheckCircle2 size={16} />
                  {t.checklist}
                </div>

                <div className="checklist">
                  {pathData.checklist?.map(
                    (item, index) => (
                      <div
                        className="checklist-item"
                        key={`${item}-${index}`}
                      >
                        <CheckCircle2 size={17} />
                        <span>{item}</span>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* NEXT STEP */}

              <div className="next-step-card">
                <div className="sidebar-label">
                  <ArrowRight size={16} />
                  {t.next}
                </div>

                <p>
                  {pathData.nextStep ||
                    t.fallbackNext}
                </p>

                {getOfficialUrl(
                  pathData.services?.[0]
                ) && (
                  <a
                    className="official-button"
                    href={getOfficialUrl(
                      pathData.services?.[0]
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.official}
                    <ArrowRight size={16} />
                  </a>
                )}
              </div>

              {/* AI NOTE */}

              <div className="ai-note">
                <Sparkles size={17} />

                <div>
                  <strong>
                    {t.about}
                  </strong>

                  <p>{t.note}</p>
                </div>
              </div>
            </aside>
          </div>
        </main>
      )}

      {/* FOOTER */}

      <footer className="footer">
        <div>
          <strong>SevaPath</strong>
          <span>
            {" "}
            · {t.footer}
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;