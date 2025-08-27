import React from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs?: FAQItem[];
}

const defaultFAQs: FAQItem[] = [
  {
    question: "ما هي خدمات التنظيف التي تقدمونها في جدة؟",
    answer: "نقدم خدمات تنظيف شاملة تشمل تنظيف المنازل والشقق والفلل، تنظيف المكاتب والشركات، تنظيف السجاد والموكيت، تنظيف النوافذ والواجهات، خدمات التعقيم والتطهير، وتنظيف ما بعد البناء."
  },
  {
    question: "هل تستخدمون مواد تنظيف آمنة؟",
    answer: "نعم، نستخدم مواد تنظيف آمنة وصديقة للبيئة، معتمدة دولياً وآمنة للأطفال والحيوانات الأليفة. جميع مواد التنظيف التي نستخدمها حاصلة على شهادات الجودة والأمان."
  },
  {
    question: "كم تستغرق خدمة تنظيف المنزل؟",
    answer: "يعتمد الوقت على حجم المنزل ونوع الخدمة المطلوبة. عادة ما يستغرق تنظيف الشقة العادية من 2-4 ساعات، بينما تستغرق الفيلا من 4-8 ساعات. نقدم تقديراً دقيقاً للوقت عند المعاينة."
  },
  {
    question: "هل تقدمون ضماناً على خدماتكم؟",
    answer: "نعم، نقدم ضمان رضا العميل 100%. إذا لم تكن راضياً عن الخدمة، نعيد التنظيف مجاناً خلال 24 ساعة. كما نقدم ضمان جودة لمدة 48 ساعة على جميع خدماتنا."
  },
  {
    question: "ما هي أسعار خدمات التنظيف؟",
    answer: "أسعارنا تنافسية وتختلف حسب نوع الخدمة وحجم المكان. نقدم عروض أسعار مجانية بعد المعاينة. لدينا عروض خاصة للعملاء الجدد وخصومات للخدمات الدورية."
  },
  {
    question: "هل تعملون في جميع أحياء جدة؟",
    answer: "نعم، نخدم جميع أحياء جدة بما في ذلك شمال جدة وجنوبها وشرقها وغربها ووسط المدينة. نصل إليك في الوقت المحدد مع ضمان الخدمة السريعة والموثوقة."
  }
];

const FAQSchema: React.FC<FAQSchemaProps> = ({ faqs }) => {
  const faqData = faqs || defaultFAQs;
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script 
      type="application/ld+json" 
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} 
    />
  );
};

export default FAQSchema;
