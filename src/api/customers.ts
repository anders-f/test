// import api from "./axios";

const mockedCustomers = [
  {
    id: "1",
    name: "Apoteket",
    hasPriceLadder: true,
  },
  {
    id: "2",
    name: "Snusbolaget",
    hasPriceLadder: false,
  },
  {
    id: "3",
    name: "Gymgrossisten",
    hasPriceLadder: false,
  },
];

export interface Customer {
  id: string;
  name: string;
  hasPriceLadder: boolean;
}

export const getCustomers = async (): Promise<Customer[]> => {
  return Promise.resolve(mockedCustomers);
  // const response = await api.get<Customer[]>("customers");
  // return response?.data;
};

export const getCustomer = async (
  id: string | undefined
): Promise<Customer> => {
  // const response = await api.get<Customer>(`customers/${id}`);
  // return response?.data;
  const customer = mockedCustomers.find((customer) => customer?.id === id);
  if (customer) return Promise.resolve(customer);
  return Promise.resolve({ id: "", name: "", hasPriceLadder: false });
};
