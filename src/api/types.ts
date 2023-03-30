enum Role {
  ADMIN = 'admin',
  SALES = 'sales',
}

type User = {
  id: number;
  name: string;
  username: string;
  password: string;
  role: Role;
  commissionRate?: number;
  commissions?: Commission[];
};

type Campaign = {
  id: number;
  title: string;
  type: CampaignType;
  socialMedia: SocialMedia;
  salesperson: User;
  orders: Order[];
};

enum CampaignType {
  POST = 'post',
  EVENT = 'event',
  LIVE = 'live',
}

enum SocialMedia {
  FACEBOOK = 'facebook',
  INSTAGRAM = 'instagram',
}

type Order = {
  id: number;
  campaignId: number;
  product: {
    name: string;
    quantity: number;
    basePrice: number;
    totalPrice: number;
  };
};

type Commission = {
  id: number;
  userId: number;
  campaignId: number;
  orderId: number;
  createdAt: string;
  amount: number;
};
