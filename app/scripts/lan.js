
$(function () {
  const lanData = {
    navTitle1: {
      en: 'FEATURES',
      ch: '特点',
    },
    navTitle2: {
      en: 'ABOUT',
      ch: '关于',
    },
    navTitle3: {
      en: 'SHOWREEL',
      ch: '产品',
    },
    navTitle4: {
      en: 'SERVICES',
      ch: '服务',
    },
    navTitle5: {
      en: 'CLIENTS',
      ch: '客户',
    },
    navTitle6: {
      en: 'NEWS',
      ch: '新闻',
    },
    navTitle7: {
      en: 'CONTACT',
      ch: '联系我们',
    },
    chineseLan: {
      en: 'Chinese',
      ch: '中文',
    },
    englishLan: {
      en: '英语',
      ch: 'English',
    },
    yourEssence: {
      en: 'YOUR BUSINESS',
      ch: '你的精华',
    },
    yourCareer: {
      en: 'YOUR NOODLES',
      ch: '你的事业',
    },
    ofYourLife: {
      en: 'THE NEW CHOICE OF YOUR LIFE',
      ch: '开启人生新选择',
    },
    getStarted: {
      en: 'GET STARTED',
      ch: '开始',
    },
    contactNow: {
      en: 'CONTACT NOW',
      ch: '联系我们',
    },
    responsiveDesign: {
      en: 'Responsive Design',
      ch: '我们的愿景',
    },
    responsiveDesignText: {
      en: 'Essence Foods manufactures the highest quality food products while maintaining strict quality standards for our valued customers.',
      ch: '精粹食品制造最高质量的食品产品，同时保持严格的质量标准，为我们的宝贵客户。',
    },
    responsiveDesignText1: {
      en: 'Essence Foods manufactures the highest quality food products while maintaining strict quality standards for our valued customers.',
      ch: '精粹食品制造最高质量的食品产品，同时保持严格的质量标准，为我们的宝贵客户。',
    },
    responsiveDesignText2: {
      en: 'Essence Foods manufactures the highest quality food products while maintaining strict quality standards for our valued customers.',
      ch: '精粹食品制造最高质量的食品产品，同时保持严格的质量标准，为我们的宝贵客户。',
    },
    aboutUs: {
      en: 'ABOUT US',
      ch: '关于我们',
    },
    aboutUsContent1: {
      en: 'In 1973, we started a company with ten employees and a single production line in a production facilityon East Broadway in New York City’s Chinatown. Forty years later, our company’s products are enjoyed across the entire continental United States, and our operations have expanded to include plants in New York, Texas, and Tennessee.',
      ch: '1973年，我们在纽约唐人街的东百老汇大街(East Broadway)上创建了一家只有10名员工和一条生产线的公司。四十年后，我们公司的产品遍布美国大陆，我们的业务已经扩展到纽约、德克萨斯和田纳西的工厂。',
    },
    aboutUsContent2: {
      en: 'Essence Foods manufactures the highest quality food products while maintaining strict quality standards for our valued customers. Customer satisfaction is our number one goal! There is no substitute for quality. At Essence Foods, it\'s not just the quality of the company that matters but more importantly the quality of our people.',
      ch: '精华食品制造最高质量的食品产品，同时保持严格的质量标准，为我们的宝贵客户。客户满意是我们的第一目标!质量是无法替代的。在Essence Foods，重要的不仅仅是公司的质量，更重要的是我们员工的质量。',
    },
    ourServices: {
      en: 'OUR SERVICES',
      ch: '我们的服务',
    },
    ourServicesTitle1: {
      en: 'Responsive Web Design',
      ch: '响应网页设计',
    },
    ourServicesText1: {
      en: 'Are you looking to get a new website designed? We offer a full range of services for your business – from new start-ups to large multi-nationals.',
      ch: '你想要设计一个新的网站吗?我们为您的企业提供全方位的服务——从新兴企业到大型跨国公司。',
    },
    ourServicesTitle2: {
      en: 'Search Engine Optimisation',
      ch: '搜索引擎优化',
    },
    ourServicesText2: {
      en: 'Where is the first place you look when you want to find something on the Internet? If you are like the vast majority of users then you would use a search engine.',
      ch: '当你想在互联网上找到某样东西时，你首先会去哪里?如果你和大多数用户一样，你就会使用搜索引擎。',
    },
    ourServicesTitle3: {
      en: 'Responsive Web Design',
      ch: '社交媒体营销',
    },
    ourServicesText3: {
      en: 'Are you looking to get a new website designed? We offer a full range of services for your business – from new start-ups to large multi-nationals.',
      ch: '通过与现有客户和潜在客户的实时在线联系，公司可以传达关于其品牌、产品和服务的信息。',
    },
    ourServicesTitle4: {
      en: 'Search Engine Optimisation',
      ch: '移动应用开发',
    },
    ourServicesText4: {
      en: 'Where is the first place you look when you want to find something on the Internet? If you are like the vast majority of users then you would use a search engine.',
      ch: 'iPhone, iPad, Android应用程序-我们为客户提供额外的资源来推动他们的在线活动，目标新受众和增加市场渗透率。',
    },
    moreDetail: {
      en: 'More detail',
      ch: '查看更多',
    },
    moreDetail2: {
      en: 'More detail',
      ch: '查看更多',
    },
    moreDetail3: {
      en: 'More detail',
      ch: '查看更多',
    },
    moreDetail4: {
      en: 'More detail',
      ch: '查看更多',
    },
    hadBeenFeatured: {
      en: 'WE HAD BEEN FEATURED ON',
      ch: '合作公司',
    },
    navTitle7: {
      en: 'CONTACT',
      ch: '联系我们',
    },
    navTitle7: {
      en: 'CONTACT',
      ch: '联系我们',
    },
    navTitle7: {
      en: 'CONTACT',
      ch: '联系我们',
    },
    navTitle7: {
      en: 'CONTACT',
      ch: '联系我们',
    },
    navTitle7: {
      en: 'CONTACT',
      ch: '联系我们',
    },
    navTitle7: {
      en: 'CONTACT',
      ch: '联系我们',
    },
    navTitle7: {
      en: 'CONTACT',
      ch: '联系我们',
    },
    navTitle7: {
      en: 'CONTACT',
      ch: '联系我们',
    },
  }
  window.lanData = lanData
})

