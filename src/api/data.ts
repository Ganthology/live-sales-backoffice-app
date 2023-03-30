export const commissions: Commission[] = [
  {
    id: 1,
    userId: 2,
    campaignId: 1,
    orderId: 1,
    createdAt: '2020-01-01',
    amount: 10,
  },
  {
    id: 2,
    userId: 2,
    campaignId: 1,
    orderId: 2,
    createdAt: '2020-01-01',
    amount: 10,
  },
];

export const users: User[] = [
  {
    id: 1,
    name: 'John Doe',
    username: 'johndoe',
    password: 'password',
    role: Role.ADMIN,
  },
  {
    id: 2,
    name: 'Jane Doe',
    username: 'janedoe',
    password: 'password',
    role: Role.SALES,
    commissionRate: 0.1,
    commissions: [commissions[0], commissions[1]],
  },
  {
    id: 3,
    name: 'John Smith',
    username: 'johnsmith',
    password: 'password',
    role: Role.SALES,
    commissionRate: 0.2,
  },
];

export const orders: Order[] = [
  {
    id: 1,
    campaignId: 1,
    product: {
      name: 'Product 1',
      quantity: 1,
      basePrice: 100,
      totalPrice: 100,
    },
  },
  {
    id: 2,
    campaignId: 1,
    product: {
      name: 'Product 2',
      quantity: 2,
      basePrice: 50,
      totalPrice: 100,
    },
  },
];

export const campaigns: Campaign[] = [
  {
    id: 1,
    title: 'Campaign 1',
    type: CampaignType.POST,
    socialMedia: SocialMedia.FACEBOOK,
    salesperson: users[1],
    orders: [orders[0], orders[1]],
  },
  {
    id: 2,
    title: 'Campaign 2',
    type: CampaignType.EVENT,
    socialMedia: SocialMedia.INSTAGRAM,
    salesperson: users[2],
    orders: [],
  },
  {
    id: 3,
    title: 'Campaign 3',
    type: CampaignType.LIVE,
    socialMedia: SocialMedia.FACEBOOK,
    salesperson: users[2],
    orders: [],
  },
];
