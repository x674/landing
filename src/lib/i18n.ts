import { APP_CONFIG } from "./constants";

export type Lang = "en" | "th";

const format = (str: string) => {
  return str
    .replace(/\[\[FULL_NAME\]\]/g, APP_CONFIG.placeholders.fullName)
    .replace(/\[\[COUNTRY_OF_RESIDENCE\]\]/g, APP_CONFIG.placeholders.country)
    .replace(/\[\[TAX_STATUS\]\]/g, APP_CONFIG.placeholders.taxStatus)
    .replace(/\[\[PUBLIC_CONTACT_EMAIL\]\]/g, APP_CONFIG.placeholders.supportEmail)
    .replace(/\[\[BUSINESS_CONTACT_ADDRESS_OPTIONAL\]\]/g, APP_CONFIG.placeholders.address)
    .replace(/\[\[LAST_UPDATED_DATE\]\]/g, APP_CONFIG.placeholders.lastUpdated)
    .replace(/\[\[REFUND_REVIEW_TIME\]\]/g, APP_CONFIG.placeholders.refundReviewTime);
};

export const DICTIONARY = {
  en: {
    nav: {
      home: "Home",
      features: "Features",
      howItWorks: "How it Works",
      contact: "Contact",
      openApp: "Open App",
    },
    hero: {
      headline: "Find Real Connections in the Digital Age",
      subheadline:
        "Experience a premium, safe, and transparent dating platform designed for genuine relationships.",
      ctaPwa: "Open Web App",
      ctaApk: "Download APK",
      ctaPlay: "Google Play",
      ctaIos: "App Store",
      comingSoon: "Coming Soon",
    },
    features: {
      title: "Why Choose Jai?",
      cards: [
        {
          title: "Verified Profiles",
          desc: "Strict identity checks to ensure you're talking to real people.",
        },
        {
          title: "Privacy First",
          desc: "Granular controls over who sees your data and when.",
        },
        {
          title: "Smart Matching",
          desc: "Algorithms that prioritize compatibility over endless swiping.",
        },
        {
          title: "Safe Space",
          desc: "Proactive moderation and easy reporting tools.",
        },
      ],
    },
    howItWorks: {
      title: "How It Works",
      steps: [
        { title: "Create Profile", desc: "Sign up in seconds and verify your identity." },
        {
          title: "Discover",
          desc: "Browse curated matches based on your preferences.",
        },
        {
          title: "Connect",
          desc: "Start chatting securely and plan your date.",
        },
      ],
    },
    contact: {
      title: "Contact Us",
      subtitle: "We're here to help.",
      teaserTitle: "Need help from the team?",
      teaserSubtitle:
        "Reach support, billing, privacy, and safety contacts in one place.",
      teaserCta: "Go to Contact Form",
      form: {
        name: "Full Name",
        email: "Email Address",
        topic: "Topic",
        message: "Message",
        country: "Country (Optional)",
        topics: {
          general: "General Inquiry",
          support: "Technical Support",
          billing: "Billing & Refunds",
          privacy: "Privacy & Data",
          report: "Report Abuse",
        },
        submit: "Send Message",
        sending: "Sending...",
        success: "Message sent successfully!",
        error: "Failed to send. Please try again.",
        sensitiveDataWarning:
          "Note: Do not include sensitive personal data (e.g. passwords, financial info) in your message.",
      },
      consent: {
        privacy:
          "I have read the Privacy Policy and consent to the processing of my personal data for handling this request.",
        marketing: "I agree to receive product updates and marketing emails.",
        age: "I confirm I am at least 18 years old.",
      },
    },
    cookie: {
      message:
        "We use cookies to improve your experience. Some are essential, others help us improve analytics and marketing.",
      acceptAll: "Accept All",
      reject: "Reject Non-Essential",
      customize: "Customize",
      saved: "Preferences saved",
      settingsTitle: "Cookie Settings",
      necessary: "Necessary",
      analytics: "Analytics",
      marketing: "Marketing",
      savePreferences: "Save Preferences",
    },
    ageGate: {
      title: "Age Verification",
      message: "You must be 18 years or older to access Jai Dating.",
      confirm: "I am 18+",
      deny: "Exit",
    },
    legal: {
      back: "Back",
      disclaimer:
        "This legal content is a template and should be reviewed by qualified legal counsel before production use.",
      operator: format(
        "Service Operator: [[FULL_NAME]], a self-employed individual service provider (independent natural person), operating under applicable tax and professional income rules in [[COUNTRY_OF_RESIDENCE]]."
      ),
      lastUpdated: format("Last Updated: [[LAST_UPDATED_DATE]]"),
      titles: {
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        cookies: "Cookie Policy",
        data: "Data Processing Notice",
        subscription: "Subscription Terms",
        refund: "Refund Policy",
        community: "Community Guidelines",
        acceptable: "Acceptable Use Policy",
      },
      content: {
        refund: format(
          "Subscriptions auto-renew until canceled. Digital goods are generally non-refundable once consumed. Review time: [[REFUND_REVIEW_TIME]]."
        ),
        general:
          "This is a placeholder for the full legal text. In production, complete text should be reviewed for GDPR, PDPA, and applicable US/state privacy requirements.",
      },
    },
    footer: {
      rights: "All rights reserved.",
      changeCookies: "Change cookie settings",
      eighteenPlus: "18+ Only. Please date responsibly.",
    },
  },
  th: {
    nav: {
      home: "หน้าหลัก",
      features: "ฟีเจอร์",
      howItWorks: "วิธีการใช้งาน",
      contact: "ติดต่อเรา",
      openApp: "เปิดแอป",
    },
    hero: {
      headline: "ค้นหาความสัมพันธ์ที่แท้จริงในยุคดิจิทัล",
      subheadline:
        "สัมผัสประสบการณ์เดทระดับพรีเมียม ปลอดภัย และโปร่งใส ออกแบบมาเพื่อความสัมพันธ์ที่จริงใจ",
      ctaPwa: "เปิดเว็บแอป",
      ctaApk: "ดาวน์โหลด APK",
      ctaPlay: "Google Play",
      ctaIos: "App Store",
      comingSoon: "เร็วๆ นี้",
    },
    features: {
      title: "ทำไมต้องเลือก Jai?",
      cards: [
        {
          title: "โปรไฟล์ที่ยืนยันตัวตน",
          desc: "ตรวจสอบตัวตนอย่างเข้มงวดเพื่อให้แน่ใจว่าคุณคุยกับคนจริง",
        },
        {
          title: "ความเป็นส่วนตัวต้องมาก่อน",
          desc: "ควบคุมได้ละเอียดว่าใครจะเห็นข้อมูลของคุณบ้าง",
        },
        {
          title: "การจับคู่ที่ชาญฉลาด",
          desc: "อัลกอริทึมที่เน้นความเข้ากันได้มากกว่าการปัดไปมา",
        },
        {
          title: "พื้นที่ปลอดภัย",
          desc: "ระบบตรวจสอบเชิงรุกและเครื่องมือรายงานที่ใช้งานง่าย",
        },
      ],
    },
    howItWorks: {
      title: "วิธีการใช้งาน",
      steps: [
        {
          title: "สร้างโปรไฟล์",
          desc: "ลงทะเบียนในไม่กี่วินาทีและยืนยันตัวตนของคุณ",
        },
        {
          title: "ค้นพบ",
          desc: "เรียกดูคู่แมตช์ที่คัดสรรมาตามความชอบของคุณ",
        },
        {
          title: "เชื่อมต่อ",
          desc: "เริ่มแชทอย่างปลอดภัยและวางแผนเดทของคุณ",
        },
      ],
    },
    contact: {
      title: "ติดต่อเรา",
      subtitle: "เราพร้อมช่วยเหลือคุณ",
      teaserTitle: "ต้องการความช่วยเหลือจากทีมงาน?",
      teaserSubtitle: "ติดต่อฝ่ายซัพพอร์ต บิลลิง ความเป็นส่วนตัว และความปลอดภัยได้ในหน้าเดียว",
      teaserCta: "ไปที่แบบฟอร์มติดต่อ",
      form: {
        name: "ชื่อ-นามสกุล",
        email: "อีเมล",
        topic: "หัวข้อ",
        message: "ข้อความ",
        country: "ประเทศ (ระบุหรือไม่ก็ได้)",
        topics: {
          general: "สอบถามทั่วไป",
          support: "ฝ่ายบริการเทคนิค",
          billing: "การชำระเงินและการคืนเงิน",
          privacy: "ความเป็นส่วนตัวและข้อมูล",
          report: "รายงานการละเมิด",
        },
        submit: "ส่งข้อความ",
        sending: "กำลังส่ง...",
        success: "ส่งข้อความเรียบร้อยแล้ว!",
        error: "ส่งไม่สำเร็จ โปรดลองใหม่อีกครั้ง",
        sensitiveDataWarning:
          "หมายเหตุ: โปรดอย่าระบุข้อมูลส่วนบุคคลที่ละเอียดอ่อน (เช่น รหัสผ่าน ข้อมูลทางการเงิน) ในข้อความของคุณ",
      },
      consent: {
        privacy:
          "ฉันได้อ่านนโยบายความเป็นส่วนตัวและยินยอมให้ประมวลผลข้อมูลส่วนบุคคลของฉันเพื่อจัดการคำขอนี้",
        marketing: "ฉันยินยอมรับข่าวสารผลิตภัณฑ์และอีเมลการตลาด",
        age: "ฉันยืนยันว่าฉันมีอายุอย่างน้อย 18 ปี",
      },
    },
    cookie: {
      message:
        "เราใช้คุกกี้เพื่อปรับปรุงประสบการณ์ของคุณ บางส่วนจำเป็น และบางส่วนใช้เพื่อวิเคราะห์และการตลาด",
      acceptAll: "ยอมรับทั้งหมด",
      reject: "ปฏิเสธที่ไม่จำเป็น",
      customize: "ปรับแต่ง",
      saved: "บันทึกการตั้งค่าแล้ว",
      settingsTitle: "การตั้งค่าคุกกี้",
      necessary: "คุกกี้ที่จำเป็น",
      analytics: "คุกกี้วิเคราะห์",
      marketing: "คุกกี้การตลาด",
      savePreferences: "บันทึกการตั้งค่า",
    },
    ageGate: {
      title: "ยืนยันอายุ",
      message: "คุณต้องมีอายุ 18 ปีขึ้นไปเพื่อเข้าใช้งาน Jai Dating",
      confirm: "ฉันอายุ 18+",
      deny: "ออก",
    },
    legal: {
      back: "ย้อนกลับ",
      disclaimer:
        "เนื้อหาทางกฎหมายนี้เป็นแบบร่างและควรได้รับการตรวจสอบโดยที่ปรึกษากฎหมายที่มีคุณสมบัติก่อนนำไปใช้งานจริง",
      operator: format(
        "ผู้ให้บริการ: [[FULL_NAME]] ผู้ให้บริการบุคคลธรรมดา (ประกอบอาชีพอิสระ) ดำเนินการภายใต้กฎหมายภาษีและรายได้วิชาชีพที่เกี่ยวข้องใน [[COUNTRY_OF_RESIDENCE]]"
      ),
      lastUpdated: format("ปรับปรุงล่าสุด: [[LAST_UPDATED_DATE]]"),
      titles: {
        privacy: "นโยบายความเป็นส่วนตัว",
        terms: "เงื่อนไขการให้บริการ",
        cookies: "นโยบายคุกกี้",
        data: "ประกาศการประมวลผลข้อมูล",
        subscription: "เงื่อนไขการสมัครสมาชิก",
        refund: "นโยบายการคืนเงิน",
        community: "แนวทางปฏิบัติของชุมชน",
        acceptable: "นโยบายการใช้งานที่ยอมรับได้",
      },
      content: {
        refund: format(
          "การสมัครสมาชิกจะต่ออายุอัตโนมัติจนกว่าจะยกเลิก สินค้าดิจิทัลโดยทั่วไปไม่สามารถขอคืนเงินได้เมื่อถูกใช้ไปแล้ว ระยะเวลาตรวจสอบ: [[REFUND_REVIEW_TIME]]"
        ),
        general:
          "นี่คือพื้นที่สำหรับข้อความทางกฎหมายฉบับเต็ม ในการใช้งานจริงควรให้ผู้เชี่ยวชาญกฎหมายตรวจสอบให้สอดคล้องกับ GDPR, PDPA และข้อกำหนดท้องถิ่น",
      },
    },
    footer: {
      rights: "สงวนลิขสิทธิ์",
      changeCookies: "เปลี่ยนการตั้งค่าคุกกี้",
      eighteenPlus: "สำหรับผู้ที่มีอายุ 18 ปีขึ้นไป โปรดเดทอย่างมีความรับผิดชอบ",
    },
  },
};

export type Translation = typeof DICTIONARY.en;
export const getTranslation = (lang: Lang) => DICTIONARY[lang];
