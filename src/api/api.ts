import { campaigns, orders, users } from './data';

const login = (username: string, password: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find((user) => user.username === username);
      if (user && user.password === password) {
        resolve(user);
      } else {
        reject('Incorrect username or password');
      }
    }, 1000);
  });
};

const listUsers = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(users);
    }, 1000);
  });
};

const getCommissions = (userId: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find((user) => user.id === userId);
      if (user) {
        resolve(user.commissions);
      } else {
        reject('User not found');
      }
    }, 1000);
  });
};

const listCampaigns = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(campaigns);
    }, 1000);
  });
};

const createCampaign = (campaign: Campaign) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const newCampaign = {
        ...campaign,
        id: campaigns.length + 1,
      };
      campaigns.push(newCampaign);
      resolve(newCampaign);
    }, 1000);
  });
};

const listOrders = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(orders);
    }, 1000);
  });
};

const createOrder = (order: Order) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const newOrder = {
        ...order,
        id: orders.length + 1,
      };
      orders.push(newOrder);
      resolve(newOrder);
    }, 1000);
  });
};

export { login, listUsers, getCommissions, listCampaigns, createCampaign, listOrders, createOrder };
