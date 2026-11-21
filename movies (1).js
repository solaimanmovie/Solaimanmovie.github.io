// এই ফাইলে আপনার মুভির তালিকা। নতুন মুভি যোগ করতে একটি { ... }, ব্লক কপি করে নিচে বসান।
// poster: ছবির লিংক, অথবা GitHub-এ আপলোড করা ছবির নাম (যেমন "posters/ami.jpg")
// video: Google Drive শেয়ার লিংক বা সরাসরি .mp4 লিংক
// dl: আলাদা ডাউনলোড লিংক (ফাঁকা রাখলে video লিংক ব্যবহার হবে)
// trailer: অফিসিয়াল YouTube ট্রেলারের লিংক (সাইটেই প্লে হবে)
// where: বৈধ দেখার জায়গার তালিকা, যেমন [{name:"JioHotstar", url:"..."}]
// date: যোগ করার তারিখ (YYYY-MM-DD), নতুন আগে সাজাতে লাগে
const MOVIES = [
  {
    title: "Dhurandhar: The Revenge (ধুরন্ধর ২)",
    year: "2026",
    cat: "অ্যাকশন স্পাই থ্রিলার",
    poster: "",
    desc: "আদিত্য ধর পরিচালিত স্পাই থ্রিলার, রণবীর সিং অভিনীত। ২০২৬ সালের ১৯ মার্চ সিনেমা হলে মুক্তি পেয়েছে। প্রথম ছবির কাহিনির ধারাবাহিকতায় এক আন্ডারকভার এজেন্টের পরিণতি দেখানো হয়েছে। হিন্দি, তেলুগু, তামিল, কন্নড় ও মালয়ালম ভাষায় মুক্তি পেয়েছে।",
    trailer: "",
    where: [
      { name: "▶ অফিসিয়াল ট্রেলার (YouTube)", url: "https://www.youtube.com/results?search_query=Dhurandhar+The+Revenge+official+trailer+Jio+Studios" },
      { name: "JioHotstar-এ দেখুন", url: "https://www.jiohotstar.com" }
    ],
    video: "",
    dl: "",
    date: "2026-11-21"
  },
  {
    title: "নমুনা মুভি",
    year: "2024",
    cat: "ড্রামা",
    poster: "",
    desc: "এটি একটি নমুনা। এটি মুছে নিজের মুভি যোগ করুন।",
    video: "",
    dl: "",
    date: "2026-11-21"
  }
];
