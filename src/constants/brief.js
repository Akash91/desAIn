export const questionSet = [
  {
    label: 'What is your product?',
    name: 'aboutProduct',
    type: 'select',
    options: [{
      WATER: 'Water',
      ESD: 'Energy & Soft Drinks',
      TEA: 'Tea',
      FJD: 'Fruit Juices & Drinks',
      COFFEE: 'Coffee',
    }]
  },
  {
    label: 'What describes your product?',
    name: 'tangibleBenefits',
    type: 'checkbox',
    possibleValues: [{
      DELICIOUS: 'Delicious',
      ORGANIC: 'Organic',
      SUGAR_FREE: 'Sugar-free',
      HEALTHY: 'Healthy',
      NUTRIONAL: 'Nutritional',
    }]
  },
  {
    label: 'What are other benefits of your product?',
    name: 'emotionalBenefits',
    type: 'checkbox',
    possibleValues: [{
      REFRESHING: 'Refreshing',
      ENERGIZING: 'Energizing',
      FEEL_GOOD: 'Feel good',
      STIMULATING: 'Stimulating',
    }]
  },
  {
    label: 'What is the age of your target users ?',
    name: 'ageGroup',
    type: 'checkbox',
    possibleValues: [{
      BABIES: 'Babies',
      TEENAGERS: 'Teenagers',
      SCHOOL_KIDS: 'School kids',
      MILLENNIALS: 'Millennials',
      ADULTS: 'Adults',
      ELDERLY: 'Elderly',
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