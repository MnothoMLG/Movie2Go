import { IDeliverySlot, IDeliverySlotItem, EOrderStatus } from './types';

export * from './types';
export const provinces = [
  'Eastern Cape',
  'Free State',
  'Gauteng',
  'KwaZulu-Natal',
  'Limpopo',
  'Mpumalanga',
  'Northern Cape',
  'North West',
  'Western Cape',
];
export const policyURl = 'https://www.buildit.co.za/privacy-policy';
export const termsURl = 'https://www.buildit.co.za/legal';
export const placeholderImg = 'https://via.placeholder.com/150';

export const lengthTestString =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo';

export const MOCK_RETURN = {
  id: 157,
  order_id: 2330,
  customer_id: '0543d317-1859-4661-b7e0-4d910cd6d3b6',
  store_id: '420',
  store_name: 'Pinetown-B2UTest',
  billing: {
    type: null,
    payment_url: null,
    payment_status: null,
    payment_reference: null,
    address: '',
  },
  collection: {
    type: 'RETURN',
  },
  items: [
    {
      product_id: '150302629',
      store_product_id: '6001008751349',
      store_barcode: '6001008751349',
      brand: 'Build it',
      range: 'Halogen Globes',
      name: 'Halogen A55 42W E27.',
      description: "HALOGEN A55 42W E27 1'S",
      image:
        'https://eyeot1.blob.core.windows.net/ftg/8694d90a-5e0e-4885-8eab-ca7f427b357f/b50fcb72-1e7c-4cf4-bae0-f1cf166cffae/81417163302_304804.jpg',
      quantity: 1,
      note: 'INCORRECT',
    },
  ],
  items_total: 1,
  additional_fees: 0,
  return_status: 'PROCESSING',
  created_at: '2024-04-30T11:40:42.603000Z',
  updated_at: '2024-04-30T11:40:42.603000Z',
};

export const MOCK_RETURN_2 = {
  id: 156,
  order_id: 2304,
  customer_id: '0543d317-1859-4661-b7e0-4d910cd6d3b6',
  store_id: '420',
  store_name: 'Pinetown-B2UTest',
  billing: {
    type: null,
    payment_url: null,
    payment_status: null,
    payment_reference: null,
    address: '',
  },
  collection: {
    type: 'COLLECTION',
    slot: {
      id: 70,
      slot_id: '1548',
      date: '2024-05-03',
      start_time: '09:00:00.0000000',
      end_time: '12:00:00.0000000',
      quote_id: '01HWQ91WTZKF0KE1JNX5244457',
    },
    fee: '291.81',
    status_meta: {
      some: 'string',
    },
    address: {
      id: 5997,
      firstname: 'Nduduzo Thabo lordswill',
      lastname: 'Bukhosini',
      email: 'nduduzo@plusnarrative.com',
      phone: '+27614360281',
      street: '46 St Ives Rd, Bellair, Durban, 4006, South Africa',
      building: null,
      apartment: null,
      postcode: '4006',
      postal_area: 'Durban',
      city: 'Durban',
      province: null,
      country_code: 'ZA',
      additional_information: null,
      latitude: '-29.82018120',
      longitude: '30.86041020',
      created_at: '2024-04-30T10:33:45.047000Z',
      updated_at: '2024-04-30T10:33:45.047000Z',
    },
    PROCESSING: {
      quantity: '1',
      meta: {
        '150302629': {
          quantity: 1,
          meta: [],
        },
      },
      updated_at: '2024-04-30T10:33:47.157000Z',
    },
    PLANNED: {
      quantity: '1',
      meta: {
        '150302629': {
          quantity: 1,
          meta: [],
        },
      },
      updated_at: '2024-04-30T10:33:47.220000Z',
    },
    COLLECTED: {
      quantity: null,
      meta: [],
      updated_at: '2024-04-30T10:33:47.173000Z',
    },
    RETURNED: {
      quantity: null,
      meta: [],
      updated_at: '2024-04-30T10:33:47.183000Z',
    },
    CANCELLED: {
      quantity: null,
      meta: [],
      updated_at: '2024-04-30T10:33:47.190000Z',
    },
  },
  items: [
    {
      product_id: '150302629',
      store_product_id: '6001008751349',
      store_barcode: '6001008751349',
      brand: 'Build it',
      range: 'Halogen Globes',
      name: 'Halogen A55 42W E27.',
      description: "HALOGEN A55 42W E27 1'S",
      image:
        'https://eyeot1.blob.core.windows.net/ftg/8694d90a-5e0e-4885-8eab-ca7f427b357f/b50fcb72-1e7c-4cf4-bae0-f1cf166cffae/81417163302_304804.jpg',
      quantity: 1,
      note: 'INCORRECT',
    },
  ],
  items_total: 1,
  additional_fees: '291.81',
  return_status: 'PLANNED',
  created_at: '2024-04-30T10:33:45.027000Z',
  updated_at: '2024-04-30T10:33:47.210000Z',
};

export const MOCK_ORDER = {
  id: 199,
  customer_id: 'bc2b20a6-f2cc-426d-9a9b-201f281282be',
  debtor_id: null,
  store_id: '452',
  store_name: 'Pinetown-B2UTest',
  can_cancel: false,
  billing: {
    type: 'CARD',
    payment_url:
      'https://uat-secure.transactionjunction.com/payments?ipgwSId=d5f35f75-0906-404a-ba40-241b609ecae0',
    payment_status: 'PAYMENT_SETTLED',
    payment_reference: '92401c69-b28e-48e0-8e48-5c9f100cfa4a',
    address: {
      id: 766,
      firstname: 'Gareth',
      lastname: 'Hastings',
      email: 'garethshastings@gmail.com',
      phone: '+27833772759',
      street: '90 Underwood Rd, Hatton Estate, Pinetown, 3610, South Africa',
      building: null,
      apartment: null,
      postcode: '3610',
      postal_area: 'Pinetown',
      city: 'Pinetown',
      province: 'KwaZulu-Natal',
      country_code: 'ZA',
      additional_information: null,
      latitude: '-29.82857470',
      longitude: '30.86518290',
      created_at: '2024-05-05T10:18:52.747000Z',
      updated_at: '2024-05-05T10:18:52.747000Z',
      site_restrictions: null,
      company: 'Gareth',
      vat_number: null,
    },
  },
  delivery: {
    type: 'DELIVERY',
    fee: 291.81,
    status_meta: {
      some: 'info',
    },
    can_reschedule: false,
    slot: {
      date: '2024-05-08',
      start_time: '09:00:00',
      end_time: '12:00:00',
      quote_id: '01HX446FCEEJDFQ7B7X8F6AXPZ',
      slot_id: 1578,
      price_incl: 291.81,
      price_excl: 253.75,
    },
    address: {
      id: 765,
      firstname: 'Gareth',
      lastname: 'Hastings',
      email: 'garethshastings@gmail.com',
      phone: '+27833772759',
      street: '90 Underwood Rd, Hatton Estate, Pinetown, 3610, South Africa',
      building: null,
      apartment: null,
      postcode: '3610',
      postal_area: 'Pinetown',
      city: 'Pinetown',
      province: 'KwaZulu-Natal',
      country_code: 'ZA',
      additional_information: null,
      latitude: '-29.82857470',
      longitude: '30.86518290',
      created_at: '2024-05-05T10:18:48.783000Z',
      updated_at: '2024-05-05T10:18:48.783000Z',
      site_restrictions: null,
      company: 'Gareth',
      vat_number: null,
    },
    PLANNED: {
      quantity: '6',
      meta: {
        '160400021': {
          quantity: 6,
          meta: [],
        },
      },
      updated_at: '2024-05-05T10:18:50.303000Z',
    },
    PICKING: {
      quantity: '6',
      meta: {
        '160400021': {
          message: 'Picking 1x 100103507',
          quantity: 6,
        },
      },
      updated_at: '2024-05-05T10:20:14.227000Z',
    },
    PICKED: {
      quantity: '6',
      meta: {
        '160400021': {
          message: 'Picking 1x 100103507',
          quantity: 6,
        },
      },
      updated_at: '2024-05-05T10:21:14.667000Z',
    },
    COLLECTED: {
      quantity: '6',
      meta: {
        '160400021': {
          message: 'Picking 1x 100103507',
          quantity: 6,
        },
      },
      updated_at: '2024-05-05T10:21:30.327000Z',
    },
    DELIVERED: {
      quantity: '6',
      meta: {
        '160400021': {
          message: 'Picking 1x 100103507',
          quantity: 6,
        },
      },
      updated_at: '2024-05-05T10:22:22.703000Z',
    },
  },
  items: [
    {
      product_id: '160400021',
      store_product_id: '6003851052451',
      store_barcode: '6003851052451',
      brand: 'Plascon',
      range: 'PVA',
      name: 'SUPER ACRYLIC POLVIN',
      description: 'PLASCON SUPER ACRYLIC POLVIN 20 LITRE 380X320X320MM WHITE',
      height: '380',
      width: '320',
      length: '320',
      product_dimension_unit: 'mm',
      image:
        'https://storage.xrx.co.za/ftg/6a07b7ee-314c-482b-86b3-9dcd265c1a44/6ed3ce79-fa90-41b4-a6ae-bfe2e89b9d7c/EPL000030-0020.jpg',
      quantity: 6,
      store_price: 1279,
      store_total: 7674,
      note: 'product: 160400021',
      allow_substitution: false,
    },
  ],
  items_total: 1,
  additional_fees: 291.81,
  order_total: 7674,
  order_status: 'DELIVERED',
  created_at: '2024-05-05T10:18:50.277000Z',
  updated_at: '2024-05-05T10:22:22.710000Z',
};
export const TOKEN_KEY = 'isRefreshing';

export const BOTTOM_TAB_HEIGHT = 104;
