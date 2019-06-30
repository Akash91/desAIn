export const questionSet = [
  {
    label: 'What is your product?',
    name: 'aboutProduct',
    type: 'select',
    options: [{
      label: 'Water',
      value: 'WATER',
    },{
      label: 'Energy & Soft Drinks',
      value: 'Energy and Soft Drinks',
    },{
      label: 'Tea',
      value: 'TEA',
    },{
      label: 'Fruit Juices & Drinks',
      value: 'Fruit Juices and Drinks',
    }, {
      label: 'Coffee',
      value: 'COFFEE',
    }]
  },
  {
    label: 'What describes your product?',
    name: 'tangibleBenefits',
    type: 'checkbox',
    possibleValues: [{
      label: 'Delicious',
      value: 'DELICIOUS',
    },{
      label: 'Organic',
      value: 'ORGANIC',
    },{
      label: 'Delicious',
      value: 'DELICIOUS',
    },{
      label: 'Sugar-free',
      value: 'SUGAR FREE',
    }]
  },
  {
    label: 'What are other benefits of your product?',
    name: 'emotionalBenefits',
    type: 'checkbox',
    possibleValues: [{
      label: 'Refreshing',
      value: 'REFRESHING',
    },{
      label: 'Energizing',
      value: 'ENERGIZING',
    },{
      label: 'Feel good',
      value: 'FEEL GOOD',
    },{
      label: 'Stimulating',
      value: 'STIMULATING',
    }]
  },
  {
    label: 'What is the age of your target users ?',
    name: 'ageGroup',
    type: 'checkbox',
    possibleValues: [{
      label: 'Babies',
      value: 'BABIES',
    },{
      label: 'Teenagers',
      value: 'TEENAGERS',
    },{
      label: 'School kids',
      value: 'SCHOOL_KIDS',
    },{
      label: 'Millennials',
      value: 'MILLENNIALS',
    },{
      label: 'Adults',
      value: 'ADULTS',
    },{
      label: 'Elderly',
      value: 'ELDERLY',
    }]
  },
  {
    label: 'What is the type of your target users ?',
    name: 'groupType',
    type: 'checkbox',
    possibleValues: [{
      PREGNANT: 'Pregnant',
      SICK: 'Sick',
      BUSINESS_PERSON: 'Business person',
      ATHLETE: 'Athlete',
      TRAVELLER: 'Traveller',
      PARENTS: 'Parents',
      FOODIE: 'Foodie',
    }]
  },
  {
    label: 'What does your brand stand for ?',
    name: 'groupType',
    type: 'radio',
    possibleValues: [],
  },
]