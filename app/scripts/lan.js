
$(function() {
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
      en: '中文',
      ch: '中文',
    },
    englishLan: {
      en: 'English',
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
    ourAgency: {
      en: 'SOME FUN FACTS ABOUT OUR AGENCY',
      ch: '关于我们公司的一些用户反馈',
    },
    projectsCompleted: {
      en: 'Projects completed',
      ch: '项目完成',
    },
    positiveFeedback: {
      en: 'Positive feedback',
      ch: '好评的反馈',
    },
    pizzasOrdered: {
      en: 'Pizzas ordered',
      ch: '产品下单量',
    },
    lastNews: {
      en: 'LAST NEWS',
      ch: '最新报道',
    },
    lastNewsBoxtitle1: {
      en: 'Markup: Image Alignment',
      ch: '标记:图像对齐',
    },
    lastNewsContent1: {
      en: 'Proin ut quam eros. Donec sed lobortis diam. Nulla nec odio\n' +
      '              lacus. Quisque.Proin ut quam eros. Donec sed lobortis diam. Nulla nec odio lacus. Quisque\n' +
      '            ',
      ch: 'Proin ut quam eros. Donec sed lobortis diam. Nulla nec odio\n' +
      '              lacus. Quisque.Proin ut quam eros. Donec sed lobortis diam. Nulla nec odio lacus. Quisque\n' +
      '            ',
    },
    lastNewsContinue1: {
      en: 'READ ON ',
      ch: '继续阅读',
    },
    lastNewsBoxtitle2: {
      en: 'Markup: Image Alignment',
      ch: '标记:图像对齐',
    },
    lastNewsContent2: {
      en: 'Proin ut quam eros. Donec sed lobortis diam. Nulla nec odio\n' +
      '              lacus. Quisque.Proin ut quam eros. Donec sed lobortis diam. Nulla nec odio lacus. Quisque\n' +
      '            ',
      ch: 'Proin ut quam eros. Donec sed lobortis diam. Nulla nec odio\n' +
      '              lacus. Quisque.Proin ut quam eros. Donec sed lobortis diam. Nulla nec odio lacus. Quisque\n' +
      '            ',
    },
    lastNewsContinue2: {
      en: 'READ ON ',
      ch: '继续阅读',
    },
    lastNewsBoxtitle3: {
      en: 'Markup: Image Alignment',
      ch: '标记:图像对齐',
    },
    lastNewsContent3: {
      en: 'Proin ut quam eros. Donec sed lobortis diam. Nulla nec odio\n' +
      '              lacus. Quisque.Proin ut quam eros. Donec sed lobortis diam. Nulla nec odio lacus. Quisque\n' +
      '            ',
      ch: 'Proin ut quam eros. Donec sed lobortis diam. Nulla nec odio\n' +
      '              lacus. Quisque.Proin ut quam eros. Donec sed lobortis diam. Nulla nec odio lacus. Quisque\n' +
      '            ',
    },
    lastNewsContinue3: {
      en: 'READ ON ',
      ch: '继续阅读',
    },
    contactUs: {
      en: 'CONTACT US',
      ch: '联系我们',
    },
    contactUsText: {
      en: 'Fill out the form below and you will hear from us shortly',
      ch: '填写下面的表格，你很快就会收到我们的来信',
    },
    firstNameLabel: {
      en: 'YOUR NAME',
      ch: '你的名字',
    },
    yourEmailLabel: {
      en: 'YOUR EMAIL',
      ch: '你的邮箱',
    },
    yourSubjectLabel: {
      en: 'CONTACT',
      ch: '标题',
    },
    yourMessageLabel: {
      en: 'YOUR MESSAGE',
      ch: '你的信息内容',
    },
    submit: {
      en: 'SEND',
      ch: '提交',
    },
    aboutEssence: {
      en: 'ABOUT  ESSENCE ',
      ch: '关于精华',
    },
    foot_content: {
      en: 'Big - Bold and stylish, Screenr is a multiuse parallax fullscreen WordPress theme.\n' +
      '            Be sure to check out the Screenr Demo or Screenr Plus Demo to see some of the possibilities.',
      ch: '大-大胆和时尚，Screenr是一个多功能的视差全屏WordPress主题。\n' +
      '            请务必查看Screenr演示或Screenr Plus演示，以了解其中的一些可能性。',
    },
    foot_lastNews: {
      en: 'RECENT NEWS ',
      ch: '最新报道',
    },
    foot_markup: {
      en: 'Markup: Image Alignment',
      ch: '标记:图像对齐',
    },
    foot_html: {
      en: 'HTML Tags and Formatting',
      ch: 'HTML标记和格式',
    },
    foot_align: {
      en: 'Markup: Image Alignment',
      ch: '标记:文本对齐',
    },
    foot_address: {
      en: 'COMPANY OFFICE',
      ch: '公司地址',
    },
    foot_time: {
      en: 'BUSINESS HOURS',
      ch: '服务时间',
    },
    foot_timeText: {
      en: 'Our support available to help you 24 hours a day, seven days a week.',
      ch: '我们的支持可以帮助你一天24小时，\n' +
      '              一周7天。\n',
    },
    foot_timeText1: {
      en: 'Monday-Friday: 9am to 5pm',
      ch: '星期一至五:上午九时至下午五时',
    },
    foot_timeText2: {
      en: 'Saturday: 10am to 2pm',
      ch: '星期六:上午10时至下午2时',
    },
    foot_timeText3: {
      en: 'Sunday: Closed',
      ch: '星期日:关闭',
    },
    slide_navTitle1: {
      en: 'FEATURES',
      ch: '特点',
    },
    slide_navTitle2: {
      en: 'ABOUT',
      ch: '关于',
    },
    slide_navTitle3: {
      en: 'SHOWREEL',
      ch: '产品',
    },
    slide_navTitle4: {
      en: 'SERVICES',
      ch: '服务',
    },
    slide_navTitle5: {
      en: 'CLIENTS',
      ch: '客户',
    },
    slide_navTitle6: {
      en: 'NEWS',
      ch: '新闻',
    },
    slide_navTitle7: {
      en: 'CONTACT',
      ch: '联系我们',
    },
    closesidenav: {
      en: 'CLOSE',
      ch: '关闭菜单',
    },
    contentBoxTitle: {
      en: 'Responsive Design',
      ch: 'Responsive Design',
    },
    contentBoxText: {
      en: 'TMaecenas eu placerat ante. Fusce ut neque justo, et aliquet enim. In hac habitasse platea dictumst. Nullam\n' +
      '          commodo neque erat, vitae facilisis erat. Cras at mauris ut tortor vestibulum fringilla vel sed metus. Donec\n' +
      '          interdum purus a justo feugiat rutrum. Sed ac neque ut neque dictum accumsan. Cras lacinia rutrum risus, id\n' +
      '          viverra metus dictum sit amet. Fusce venenatis, urna eget cursus placerat, dui nisl fringilla purus, nec\n' +
      '          tincidunt sapien justo ut nisl. Curabitur lobortis semper neque et varius. Etiam eget lectus risus, a varius\n' +
      '          orci. Nam placerat mauris at dolor imperdiet at aliquet lectus ultricies. Duis tincidunt mi at quam\n' +
      '          condimentum lobortis.\n' +
      '        ',
      ch: 'TMaecenas eu placerat ante. Fusce ut neque justo, et aliquet enim. In hac habitasse platea dictumst. Nullam\n' +
      '          commodo neque erat, vitae facilisis erat. Cras at mauris ut tortor vestibulum fringilla vel sed metus. Donec\n' +
      '          interdum purus a justo feugiat rutrum. Sed ac neque ut neque dictum accumsan. Cras lacinia rutrum risus, id\n' +
      '          viverra metus dictum sit amet. Fusce venenatis, urna eget cursus placerat, dui nisl fringilla purus, nec\n' +
      '          tincidunt sapien justo ut nisl. Curabitur lobortis semper neque et varius. Etiam eget lectus risus, a varius\n' +
      '          orci. Nam placerat mauris at dolor imperdiet at aliquet lectus ultricies. Duis tincidunt mi at quam\n' +
      '          condimentum lobortis.\n' +
      '        ',
    },
    contentBoxText2: {
      en: '\n' +
      '\n' +
      '          Proin ut quam eros. Donec sed lobortis diam. Nulla nec odio lacus. Quisque porttitor egestas dolor in\n' +
      '          placerat. Nunc vehicula dapibus ipsum. Duis venenatis risus non nunc fermentum dapibus. Morbi lorem ante,\n' +
      '          malesuada in mollis nec, auctor nec massa. Aenean tempus dui eget felis blandit at fringilla urna ultrices.\n' +
      '          Suspendisse feugiat, ante et viverra lacinia, lectus sem lobortis dui, ultricies consectetur leo mauris at\n' +
      '          tortor. Nunc et tortor sit amet orci consequat semper. Nulla non fringilla diam.\n' +
      '\n' +
      '        ',
      ch: '\n' +
      '\n' +
      '          Proin ut quam eros. Donec sed lobortis diam. Nulla nec odio lacus. Quisque porttitor egestas dolor in\n' +
      '          placerat. Nunc vehicula dapibus ipsum. Duis venenatis risus non nunc fermentum dapibus. Morbi lorem ante,\n' +
      '          malesuada in mollis nec, auctor nec massa. Aenean tempus dui eget felis blandit at fringilla urna ultrices.\n' +
      '          Suspendisse feugiat, ante et viverra lacinia, lectus sem lobortis dui, ultricies consectetur leo mauris at\n' +
      '          tortor. Nunc et tortor sit amet orci consequat semper. Nulla non fringilla diam.\n' +
      '\n' +
      '        ',
    },
    contentBoxText3: {
      en: '\n' +
      '          In facilisis scelerisque dui vel dignissim. Sed nunc orci, ultricies congue vehicula quis, facilisis a orci.\n' +
      '          In aliquet facilisis condimentum. Donec at orci orci, a dictum justo. Sed a nunc non lectus fringilla\n' +
      '          suscipit. Vivamus pretium sapien sit amet mauris aliquet eleifend vel vitae arcu. Fusce pharetra dignissim\n' +
      '          nisl egestas pretium.\n' +
      '\n' +
      '        ',
      ch: '\n' +
      '          In facilisis scelerisque dui vel dignissim. Sed nunc orci, ultricies congue vehicula quis, facilisis a orci.\n' +
      '          In aliquet facilisis condimentum. Donec at orci orci, a dictum justo. Sed a nunc non lectus fringilla\n' +
      '          suscipit. Vivamus pretium sapien sit amet mauris aliquet eleifend vel vitae arcu. Fusce pharetra dignissim\n' +
      '          nisl egestas pretium.\n' +
      '\n' +
      '        ',
    },
    contentBoxText4: {
      en: '\n' +
      '          Integer elementum massa at nulla placerat varius. Suspendisse in libero risus, in interdum massa. Vestibulum\n' +
      '          ac leo vitae metus faucibus gravida ac in neque. Nullam est eros, suscipit sed dictum quis, accumsan a ligula.\n' +
      '          In sit amet justo lectus. Etiam feugiat dolor ac elit suscipit in elementum orci fringilla. Aliquam in felis\n' +
      '          eros. Praesent hendrerit lectus sit amet turpis tempus hendrerit. Donec laoreet volutpat molestie. Praesent\n' +
      '          tempus dictum nibh ac ullamcorper. Sed eu consequat nisi. Quisque ligula metus, tristique eget euismod at,\n' +
      '          ullamcorper et nibh. Duis ultricies quam egestas nibh mollis in ultrices turpis pharetra. Vivamus et volutpat\n' +
      '          mi. Donec nec est eget dolor laoreet iaculis a sit amet diam.\n' +
      '        ',
      ch: '\n' +
      '          Integer elementum massa at nulla placerat varius. Suspendisse in libero risus, in interdum massa. Vestibulum\n' +
      '          ac leo vitae metus faucibus gravida ac in neque. Nullam est eros, suscipit sed dictum quis, accumsan a ligula.\n' +
      '          In sit amet justo lectus. Etiam feugiat dolor ac elit suscipit in elementum orci fringilla. Aliquam in felis\n' +
      '          eros. Praesent hendrerit lectus sit amet turpis tempus hendrerit. Donec laoreet volutpat molestie. Praesent\n' +
      '          tempus dictum nibh ac ullamcorper. Sed eu consequat nisi. Quisque ligula metus, tristique eget euismod at,\n' +
      '          ullamcorper et nibh. Duis ultricies quam egestas nibh mollis in ultrices turpis pharetra. Vivamus et volutpat\n' +
      '          mi. Donec nec est eget dolor laoreet iaculis a sit amet diam.\n' +
      '        ',
    },
    left_submit: {
      en: 'SEND',
      ch: '提交',
    },
    left_topic: {
      en: 'RECENT POSTS',
      ch: 'RECENT POSTS',
    },
    left_text: {
      en: 'Markup: Image Alignment',
      ch: 'Markup: Image Alignment',
    },
    left_formatting1: {
      en: 'HTML Tags and Formatting',
      ch: 'HTML Tags and Formatting',
    },
    left_formatting2: {
      en: 'HTML Tags and Formatting',
      ch: 'HTML Tags and Formatting',
    },
    left_formatting3: {
      en: 'HTML Tags and Formatting',
      ch: 'HTML Tags and Formatting',
    },
  };
  window.lanData = lanData;
});

