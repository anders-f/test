import { useQuery } from "react-query";

const data = [
  {
    step: "-3",
    discount: 57,
    price: 38.35,
    volume: 47678,
    fill: "#FBC2C1",
    markedFill: "#fa9897",
  },
  {
    step: "-2",
    discount: 59,
    price: 37.13,
    volume: 72345,
    fill: "#FBC2C1",
    markedFill: "#fa9897",
  },
  {
    step: "-1",
    discount: 62,
    price: 36.05,
    volume: 89743,
    fill: "#FBC2C1",
    markedFill: "#fa9897",
  },
  {
    step: "Current",
    discount: 65,
    price: 35.75,
    volume: 103598,
    fill: "#8EDDF9",
    markedFill: "#64d3fb",
  },
  {
    step: "1",
    discount: 68,
    price: 35.15,
    volume: 128945,
    fill: "#ABE3BB",
    markedFill: "#88cd9b",
  },
  {
    step: "2",
    discount: 71,
    price: 35.11,
    volume: 158965,
    fill: "#ABE3BB",
    markedFill: "#88cd9b",
  },
  {
    step: "3",
    discount: 73,
    price: 34.97,
    volume: 178944,
    fill: "#ABE3BB",
    markedFill: "#88cd9b",
  },
  {
    step: "4",
    discount: 74,
    price: 34.64,
    volume: 201456,
    fill: "#ABE3BB",
    markedFill: "#88cd9b",
  },
  {
    step: "5",
    discount: 75,
    price: 34.45,
    volume: 229067,
    fill: "#ABE3BB",
    markedFill: "#88cd9b",
  },
  {
    step: "6",
    discount: 75.5,
    price: 34.12,
    volume: 259444,
    fill: "#ABE3BB",
    markedFill: "#88cd9b",
  },
  {
    step: "7",
    discount: 76,
    price: 34.05,
    volume: 278043,
    fill: "#ABE3BB",
    markedFill: "#88cd9b",
  },
  {
    step: "8",
    discount: 76.5,
    price: 33.98,
    volume: 291867,
    fill: "#ABE3BB",
    markedFill: "#88cd9b",
  },
  {
    step: "9",
    discount: 77,
    price: 33.85,
    volume: 298745,
    fill: "#ABE3BB",
    markedFill: "#88cd9b",
  },
];

const usePriceLadder = (productId: string | undefined) => {
  const query = useQuery({
    queryKey: ["productId", productId],
    queryFn: () => {
      if (productId === "mpc") return data;
      else return null;
    },
  });
  return query;
};

export default usePriceLadder;
