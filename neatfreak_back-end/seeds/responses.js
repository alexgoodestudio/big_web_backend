exports.seed = async function(knex) {
  await knex('chatbot').del();

  const responses = [
    {
      service_type: 'pricing',
      responses: "We don't have a one-size-fits-all pricing model because every home has unique needs. To ensure we provide a tailored service, we offer FREE  estimates. Book yours today through the 'Contact' tab or reach out to us at support@getneatfreakclean.com with your details.",
      keywords: 'pricing,cost,charge,price,prices,estimate,range,money'
    },
    {
      service_type: 'move',
      responses: "Transitioning to a new place? We've got you covered with our move-in/out cleaning services, ensuring your space is pristine. Let us help make your move smoother. Head on over to the Contact tab at the top to get in contact to schedule or request an estimate.",
      keywords: 'move,moving,relocation,relocating,transition'
    },
    {
      service_type: 'cancellation',
      responses: "Life happens, no problem! For cancellations or rescheduling, please give us a 48-hour notice and email us at support@getneatfreakclean.com. If you need to cancel within 48 hours, you can text or call us directly at (804) 482-0516, and we'll assist you.",
      keywords: 'cancellation,cancel,canceling,notice,reschedule,rescheduling,unable'
    },
    {
      service_type: 'contact',
      responses: "Got questions? We're here to help! Call us at (804) 482-0516 or email support@getneatfreakclean.com for assistance.",
      keywords: 'contact,touch,questions,support,email,phone'
    },
    {
      service_type: 'remove',
      responses: "Want to opt-out of our subscriber list? Just email us with 'Remove' in the subject, and we'll take care of it promptly.",
      keywords: 'remove,unsubscribe,opt-out,optout'
    },
    {
      service_type: 'forMoreInfo',
      responses: "Need detailed support? Email us at support@getneatfreakclean.com, and we'll ensure you get the information you need.",
      keywords: 'more info,information,details,support,additional,speak,representative,real'
    },
    {
      service_type: 'howToBook',
      responses: "Would you like to book an appointment? Simply click the Contact' tab to schedule an estimate/ set up an appointment. Additionally you can email us your details at support@getneatfreakclean.com, and we'll follow up ASAP about setting up an apointment.",
      keywords: 'book,hire,availability,booking,schedule,scheduling,make,times,appointment,estimate'
    },
    {
      service_type: 'newsletter',
      responses: "Join our newsletter to keep up with special offers created just for you by following the Subscribe tab at the top of page!",
      keywords: 'newsletter,news letter,subscribe,subscriber'
    },
    {
      service_type: 'where',
      responses: "We proudly serve Richmond, Virginia, and surrounding areas.",
      keywords: 'where,location,Richmond,Virginia,Henrico,Short Pump,Manchester,Carytown,North Side,Varina,Hanover,Shockoe Bottom,Henrico,South Side,East End,Goochland'
    },
    {
      service_type: 'ecoFriendly',
      responses: "We're committed to the environment just as much as to cleaning. That's why we use eco-friendly and sustainable products, ensuring a safe and healthy space for you and your loved ones.",
      keywords: 'eco-friendly,products,environment,sustainable,safety,safe'
    },
    {
      service_type: 'oneTimeClean',
      responses: "Need a thorough clean for a special occasion or just a seasonal refresh? Our One-Time Clean service has got you covered.",
      keywords: 'one-time clean,one time,1 time,special occasion,party,event'
    },
    {
      service_type: 'recurringCleaning',
      responses: "Keep your home consistently clean without lifting a finger. Our Recurring Cleaning service, available weekly, bi-weekly, or monthly, ensures your space is always welcoming and healthy. We use environmentally safe products for your peace of mind.",
      keywords: 'recurring cleaning,recurring,reoccuring,consistently clean,consistently,consistent,2 weeks,weekly,bi-weekly,monthly'
    },
    {
      "service_type": "ASAP",
      "responses": "Need help right away? Call us at (804) 482-0516 for assistance.",
      "keywords": "asap,as soon,immediate,immediately,soon,times,sooner,free,night,tomorrow,today,late,early,this monday,this tuesday,this wednesday,this thursday,this friday,this saturday,this sunday"
    },
  {
    service_type: 'services',
    responses: "We offer one time, recurring, and moving in/ out cleaning services! For additional information feel free to message us at support@getneatfreakclean.com for planning your next big clean!",
    keywords: 'services,type,types,offer'
  },
  {
    service_type: 'greeting',
    responses: "Hey there! How can I help you?",
    keywords: 'hello,hi,good afternoon,hii,hiii,hellooo,howdy,good morning,good afternoon,good evening,whats up,hey'
  },
  {
    "service_type": "checkStatement",
    "responses": "Perfect! Feel free to reach out for any additional help at support@getneatfreakclean.com",
    "keywords": "sounds good,perf,Thank you,Appreciate it,Thanks,thank,cool,awesome,great,perfect,wonderful,fantastic,that's all,all set,good to go,no more questions,no I'm good,all good,no further, that's it,fine,agreed,nothing else,all good"
  },
  {
    service_type: 'discount',
    responses: "Unfortunately we have no discounts right now, but join our news letter by follwing the subscribe tab at the top for future promotions.",
    keywords: 'discount,discounts,veteran,veterans,teacher,sales,promotion,military,coupons,sale,promotions,free,deals,deal'
  }
  ];

  // Inserts seed entries
  await knex('chatbot').insert(responses.map(response => ({
    ...response,
    keywords: response.keywords
  })));
};
