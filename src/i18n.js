import { createI18n } from 'vue-i18n';

// Define your translations
const messages = {
  en: {
    message: {
      welcome: 'Welcome to Our Landing Page',
      description: 'Transform the way you do business with our cutting-edge solutions.',
      getStarted: 'Get Started',
      features: 'Features',
      testimonials: 'Testimonials',
      getStartedCTA: 'Get Started',
      footer: 'Your Company. All rights reserved.',
      aboutCompany: 'Prime Fusion',
      companyDescription: 'Our company was founded in 2024 to be at the forefront of innovation in website design and professional stores. We believe in combining attractive design with outstanding functionality, enabling our clients to excel in a rapidly evolving digital world. Our mission is to provide tailored digital solutions that meet customer needs and contribute to their business growth and online impact.',
      featuresHeader: 'Our Features',
      innovativeTechnology: 'Innovative Technology',
      technologyDescription: 'We stay ahead of the curve with the latest technologies to ensure advanced solutions.',
      featureOneTitle: 'Innovative Web Design Solutions',
      featureOneDescription: 'Providing innovative web design solutions that meet client needs and enhance user experience.',
      featureTwoTitle: 'Professional E-commerce Stores',
      featureTwoDescription: 'Creating professional e-commerce stores that help businesses enhance their digital presence and increase sales.',
      featureThreeTitle: 'Comprehensive Services',
      featureThreeDescription: 'Offering comprehensive services including UI design, UX experience, and full technical development.',
      featureFourTitle: 'Cutting-edge Technology',
      featureFourDescription: 'Keeping up with the latest design and development technologies to ensure advanced market-ready solutions.',
      featureFiveTitle: 'Customer Satisfaction',
      featureFiveDescription: 'Achieving customer satisfaction by providing excellent technical support and tailored services for each project.',
        ourmessage: 'Your Digital Success Starts Here',
        themessage: 'In a rapidly evolving digital world, we pave your way to success. We take your ideas and transform them into vibrant realities through professional websites and stores that reflect your identity and fulfill your ambitions. With every design we deliver, we place creativity and innovation at the heart of every project to ensure a unique user experience and an unforgettable digital footprint. Let us create a bright digital future for you.',
        facebook: 'Facebook',
        linkedin: 'LinkedIn',
        whatsapp: 'WhatsApp',
        contact_us: 'Contact Us Now'
    }
  },
  ar: {
    message: {
      welcome: 'مرحبًا بك في صفحتنا الرئيسية',
      description: 'تحول الطريقة التي تقوم بها بالأعمال مع حلولنا المتطورة.',
      getStarted: 'ابدأ الآن',
      features: 'الميزات',
      testimonials: 'الشهادات',
      getStartedCTA: 'ابدأ الآن',
      footer: 'شركتك. جميع الحقوق محفوظة.',
      aboutCompany: 'برايم فيوجن',
      companyDescription: 'تأسست شركتنا في عام 2024 لتكون في طليعة الابتكار في تصميم المواقع الإلكترونية والمتاجر الاحترافية. نحن نؤمن بأهمية الجمع بين التصميم الجذاب والوظائف المتميزة، مما يتيح لعملائنا التميز في عالم رقمي سريع التطور. مهمتنا هي توفير حلول رقمية مخصصة تلبي احتياجات العملاء، وتسهم في نمو أعمالهم وزيادة تأثيرهم عبر الإنترنت.',
      featuresHeader: 'ميزاتنا',
      innovativeTechnology: 'تقنية مبتكرة',
      technologyDescription: 'نواكب أحدث التقنيات لضمان تقديم حلول متقدمة.',
      featureOneTitle: 'حلول تصميم ويب مبتكرة',
      featureOneDescription: 'تقديم حلول تصميم ويب مبتكرة تلبي احتياجات العملاء وتعزز تجربة المستخدم.',
      featureTwoTitle: 'متاجر إلكترونية احترافية',
      featureTwoDescription: 'إنشاء متاجر إلكترونية احترافية تساعد الشركات في تعزيز وجودها الرقمي وزيادة مبيعاتها.',
      featureThreeTitle: 'خدمات شاملة',
      featureThreeDescription: 'تقديم خدمات شاملة تشمل تصميم واجهات المستخدم، تجربة المستخدم، والتطوير التقني المتكامل.',
      featureFourTitle: 'تكنولوجيا متطورة',
      featureFourDescription: 'مواكبة أحدث التقنيات في مجال التصميم والتطوير لضمان تقديم حلول متقدمة تواكب السوق.',
      featureFiveTitle: 'رضا العملاء',
      featureFiveDescription: 'تحقيق رضا العملاء من خلال توفير دعم فني ممتاز وخدمات مخصصة لكل مشروع.',
      ourmessage: 'طريق نجاحك الرقمي يبدأ هنا',
      themessage: 'في عالم رقمي لا يتوقف عن التطور، نصنع لك طريقًا نحو النجاح. نأخذ أفكارك ونحوّلها إلى واقع نابض بالحياة عبر مواقع إلكترونية ومتاجر احترافية تعكس هويتك وتلبي طموحاتك. مع كل تصميم نقدمه، نضع الإبداع والابتكار في قلب كل مشروع لضمان تجربة مستخدم فريدة وبصمة رقمية لا تُنسى. دعنا نصنع لك غدًا رقمياً متألقًا.',
      facebook: 'فيسبوك',
      linkedin: 'لينكدإن',
      whatsapp: 'واتساب',
      contact_us: 'تواصل معنا الآن'
    }
  }
};

// Create Vue I18n instance
const i18n = createI18n({
  locale: 'en', // default language
  messages,
});

export default i18n;
