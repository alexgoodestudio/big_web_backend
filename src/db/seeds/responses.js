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
      service_type: 'holidayCleaning',
      responses: "Hosting a holiday gathering? Let us handle the cleaning! Reach out at support@getneatfreakclean.com to book holiday cleaning services.",
      keywords: 'holiday,christmas,thanksgiving,holiday clean,special events,new year'
    },
    {
      service_type: 'kitchenCleaning',
      responses: "We provide comprehensive kitchen cleaning, including countertops, sinks, and cabinet exteriors. Let us know if you have specific areas of concern.",
      keywords: 'kitchen,countertops,sink,cabinets,stove,clean kitchen'
    },
    {
      service_type: 'livingRoomCleaning',
      responses: "We tidy and clean living rooms, including dusting furniture, vacuuming carpets, and organizing spaces as needed.",
      keywords: 'living room,tidy,clean,dust,vacuum,organize'
    },
    {
      service_type: 'postRenovationCleaning',
      responses: "After renovations, we offer detailed cleaning to remove dust and debris, leaving your home spotless and ready to enjoy.",
      keywords: 'post-renovation,construction clean,after remodel,renovation cleaning'
    },
    {
      service_type: 'preEventCleaning',
      responses: "Hosting an event? We provide pre-event cleaning to ensure your home is guest-ready. Contact us to schedule.",
      keywords: 'event,party,pre-event cleaning,prepare for guests,clean before event'
    },
    {
      service_type: 'postEventCleaning',
      responses: "After your event, we offer post-event cleaning to restore your home to its pristine condition. Reach out to book this service.",
      keywords: 'post-event,after party,clean up,event cleaning,restore home'
    },
    {
      service_type: 'petHairRemoval',
      responses: "Our cleaning services include pet hair removal from furniture and floors to keep your home clean and allergen-free.",
      keywords: 'pet hair,remove pet hair,clean fur,allergen removal'
    },
    {
      service_type: 'childSafeProducts',
      responses: "We prioritize your family's safety by using child-safe cleaning products. Let us know if you have specific concerns.",
      keywords: 'child safe,baby safe,non-toxic,cleaning with kids,kid friendly products'
    },
    {
      service_type: 'allergyCleaning',
      responses: "We specialize in cleaning to reduce allergens such as dust and pet dander. Contact us for allergy-focused cleaning.",
      keywords: 'allergy,dust mites,cleaning for allergies,allergen reduction'
    },
    {
      service_type: 'moldCleaning',
      responses: "We handle small-scale mold cleaning for areas like bathrooms and windowsills. Contact us for details on this service.",
      keywords: 'mold,remove mold,cleaning mold,windowsill mold,bathroom mold'
    },
    {
      service_type: 'petOdorRemoval',
      responses: "Our team specializes in removing pet odors and stains, ensuring your home smells fresh and clean.",
      keywords: 'dog, cat,pet odor,smell,stain,pet cleaning,remove pet odor'
    },
    {
      service_type: 'seasonalCleaning',
      responses: "Our seasonal cleaning services, such as spring or fall cleaning, provide a deep clean to refresh your home. Schedule your seasonal clean today.",
      keywords: 'seasonal,spring cleaning,fall cleaning,deep clean,refresh home'
    },
    {
      service_type: 'bathroomSanitization',
      responses: "Our team thoroughly cleans and sanitizes bathrooms, including toilets, showers, bathtubs, and sinks, ensuring a hygienic environment.",
      keywords: 'bathroom,restroom,toilet,shower,bathtub,sink,sanitize,clean'
    },
    {
      service_type: 'refundPolicy',
      responses: "We strive for excellence, but if you're unsatisfied, please contact us to discuss adjustments.",
      keywords: 'refund,refund policy,money back,unsatisfied,disappointed,compensation'
    },
    {
      service_type: 'applianceCleaning',
      responses: "We offer cleaning for household appliances such as ovens, refrigerators, and microwaves. Please specify which appliances you'd like cleaned when booking.",
      keywords: 'appliance,oven,fridge,refrigerator,microwave,stove,kitchen appliances'
    },
    {
      service_type: 'glassCleaning',
      responses: "Yes, we clean glass surfaces, including windows and mirrors, ensuring they are spotless and streak-free. For specialized glass surfaces, please let us know in advance.",
      keywords: 'glass,windows,mirrors,glass cleaning,window cleaning,mirror cleaning'
    },
    {
      service_type: 'giftCards',
      responses: "Looking for the perfect gift? We offer gift cards for our cleaning services! Email support@getneatfreakclean.com to purchase.",
      keywords: 'gift card,gift,gift certificate,present'
    },
    {
      service_type: 'cleaningFrequency',
      responses: "Not sure how often you need cleaning? Contact us at support@getneatfreakclean.com, and we’ll help you decide based on your needs.",
      keywords: 'how often,frequency,recurring,regular,weekly,monthly,bi-weekly'
    },
    {
      service_type: 'feedback',
      responses: "Your feedback matters to us! Share your experience by emailing support@getneatfreakclean.com or leaving a review online.",
      keywords: 'feedback,review,complaint,praise,experience,opinion,rate'
    },
    {
      service_type: 'supplies',
      responses: "Our team brings all the necessary supplies for cleaning. If you prefer specific products, let us know in advance.",
      keywords: 'supplies,equipment,bring,own products,cleaning materials'
    },
    {
      service_type: 'deepClean',
      responses: "For spaces needing extra care, our Deep Clean service provides a meticulous and thorough approach. Contact us to learn more!",
      keywords: 'deep clean,thorough,extensive,detailed cleaning'
    },
    {
      service_type: 'paymentMethods',
      responses: "We accept various payment methods including credit cards, debit cards, and digital payments. Contact us for details!",
      keywords: 'payment,method,methods,credit,debit,card,cash,pay,payments'
    },
    {
      service_type: 'petFriendly',
      responses: "We love pets! Our cleaning products are safe for your furry friends. Let us know if you have specific concerns when booking.",
      keywords: 'pet,pets,pet safe,animals,dog,cat,pet friendly'
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
      service_type: 'basementCleaning',
      responses: "Need your basement cleaned? We handle dusting, vacuuming, and decluttering to make it a usable space again.",
      keywords: 'basement,cleaning basement,declutter,organize,deep basement clean'
    },
    {
      service_type: 'garageCleaning',
      responses: "Our garage cleaning service helps declutter and tidy up your space, removing dust and debris to make it functional again.",
      keywords: 'garage,garage cleaning,clean out garage,declutter,organize garage'
    },
    {
      service_type: 'laundryServices',
      responses: "While we don’t provide full laundry services, we can assist with folding and organizing clothes as part of a cleaning session.",
      keywords: 'laundry,folding,organize clothes,laundry help'
    },
    {
      service_type: 'apartmentCleaning',
      responses: "We clean apartments of all sizes! Whether it’s a studio or multi-room apartment, we’ll ensure it looks its best.",
      keywords: 'apartment,apartment cleaning,studio cleaning,flat clean'
    },
    {
      service_type: 'sanitizationServices',
      responses: "We offer sanitization services for high-touch surfaces like doorknobs, light switches, and countertops to keep your home germ-free.",
      keywords: 'sanitize,germ-free,high-touch surfaces,disinfect,sanitization'
    },
    {
      service_type: 'kitchenDeepClean',
      responses: "Our kitchen deep-clean includes scrubbing appliances, degreasing surfaces, and sanitizing cabinets. Perfect for a fresh start.",
      keywords: 'deep kitchen clean,sanitize kitchen,grease removal,appliance clean'
    },
    {
      service_type: 'specificRequests',
      responses: "Have specific cleaning needs? Let us know, and we’ll customize our service to meet your expectations.",
      keywords: 'specific request,custom request,tailored cleaning,special focus,details'
    },
    {
      service_type: 'apology',
      responses: "We sincerely apologize for any inconvenience caused. We take your concerns seriously and are committed to resolving this for you. Please share more details at support@getneatfreakclean.com, and we’ll address it immediately.",
      keywords: 'angry,complaint,issue,problem,fix,resolve'
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
    service_type: 'homeStaging',
    responses: "Preparing your home for sale? Our home staging cleaning ensures your property looks its best for potential buyers.",
    keywords: 'home staging,prepare for sale,showing home,real estate cleaning'
  },
  {
    service_type: 'greeting',
    responses: "Hey there! How can I help you?",
    keywords: 'hello,hi,good afternoon,hii,hiii,hellooo,howdy,good morning,good afternoon,good evening,whats up,hey'
  },
  {
    service_type: 'sameDayService',
    responses: "We may be able to accommodate same-day cleaning requests depending on availability. Please call us at (804) 482-0516 to check.",
    keywords: 'same day,urgent clean,clean today,immediate cleaning'
  },
  {
    service_type: 'howManyCleaners',
    responses: "We typically assign one to two cleaners per job, depending on the size of the space and the services required. Let us know if you have a preference.",
    keywords: 'how many cleaners,team size,number of cleaners,how many people'
  },
  {
    service_type: 'postTenantCleaning',
    responses: "If you're a landlord or tenant, we provide move-out and post-tenant cleaning to prepare the property for new occupants.",
    keywords: 'post-tenant,landlord,move out,tenant cleaning,property clean'
  },
  
  {
    service_type: 'cleaningDuration',
    responses: "The time needed for cleaning depends on the size of your space and the requested services. We’ll provide an estimated duration when you book.",
    keywords: 'how long,time needed,cleaning duration,how much time'
  },
  {
    service_type: 'customCleaning',
    responses: "We can customize our cleaning services to focus on specific areas or tasks. Let us know your needs when booking.",
    keywords: 'custom cleaning,specific area,focus on,particular task'
  },
  {
    "service_type": "checkStatement",
    "responses": "Perfect! Feel free to reach out for any additional help at support@getneatfreakclean.com",
    "keywords": "sounds good,perf,Thank you,Appreciate it,Thanks,thank,cool,awesome,great,perfect,wonderful,fantastic,that's all,all set,good to go,no more questions,no I'm good,all good,no further, that's it,fine,agreed,nothing else,all good"
  },
  {
    service_type: 'discount',
    responses: "Unfortunately we have no discounts right now, but join our news letter by following the subscribe tab at the top for future promotions.",
    keywords: 'discount,discounts,veteran,veterans,teacher,sales,promotion,military,coupons,sale,promotions,free,deals,deal'
  },
  {
    service_type: 'airbnbRentalCleaning',
    responses: "Do you own a short-term rental or Airbnb? We provide turnover cleaning services to ensure your property is guest-ready between stays.",
    keywords: 'airbnb cleaning,rental cleaning,short-term rental,guest cleaning,turnover cleaning'
  },
  {
    service_type: 'outdoorFurnitureCleaning',
    responses: "We offer outdoor furniture cleaning to remove dirt, pollen, and grime from chairs, tables, and more, keeping your patio or garden space welcoming.",
    keywords: 'outdoor furniture,patio cleaning,clean outdoor furniture,clean patio,deck cleaning'
  },
  {
    service_type: 'emergencyCleaning',
    responses: "Need cleaning on short notice due to an emergency? Contact us directly at (804) 482-0516, and we’ll do our best to assist.",
    keywords: 'emergency clean,last minute cleaning,urgent cleaning,quick clean,emergency'
  },
  {
    service_type: 'cleaningForSeniors',
    responses: "We understand the unique needs of seniors. Our team provides gentle, reliable cleaning services to make homes safer and more comfortable.",
    keywords: 'senior cleaning,elderly service,older adults,help for seniors,senior assistance'
  }
  ];

  // Inserts seed entries
  await knex('chatbot').insert(responses.map(response => ({
    ...response,
    keywords: response.keywords
  })));
};
