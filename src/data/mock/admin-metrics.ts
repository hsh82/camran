export interface DailyMetric {
  date: string
  revenue: number
  orders: number
  cashbackIssued: number
  newCustomers: number
  activeShops: number
}

export const dailyMetrics: DailyMetric[] = [
  {
    date: "2024-06-19",
    revenue: 4250,
    orders: 18,
    cashbackIssued: 42.5,
    newCustomers: 3,
    activeShops: 8,
  },
  {
    date: "2024-06-20",
    revenue: 5100,
    orders: 24,
    cashbackIssued: 51.0,
    newCustomers: 5,
    activeShops: 9,
  },
  {
    date: "2024-06-21",
    revenue: 3890,
    orders: 16,
    cashbackIssued: 38.9,
    newCustomers: 2,
    activeShops: 8,
  },
  {
    date: "2024-06-22",
    revenue: 6750,
    orders: 31,
    cashbackIssued: 67.5,
    newCustomers: 7,
    activeShops: 9,
  },
  {
    date: "2024-06-23",
    revenue: 4200,
    orders: 19,
    cashbackIssued: 42.0,
    newCustomers: 4,
    activeShops: 8,
  },
  {
    date: "2024-06-24",
    revenue: 3100,
    orders: 13,
    cashbackIssued: 31.0,
    newCustomers: 1,
    activeShops: 7,
  },
  {
    date: "2024-06-25",
    revenue: 5600,
    orders: 27,
    cashbackIssued: 56.0,
    newCustomers: 6,
    activeShops: 9,
  },
  {
    date: "2024-06-26",
    revenue: 4800,
    orders: 22,
    cashbackIssued: 48.0,
    newCustomers: 4,
    activeShops: 8,
  },
  {
    date: "2024-06-27",
    revenue: 6200,
    orders: 28,
    cashbackIssued: 62.0,
    newCustomers: 8,
    activeShops: 9,
  },
]

export const monthlyMetrics: DailyMetric[] = [
  {
    date: "2024-01",
    revenue: 45000,
    orders: 210,
    cashbackIssued: 450,
    newCustomers: 28,
    activeShops: 5,
  },
  {
    date: "2024-02",
    revenue: 52000,
    orders: 245,
    cashbackIssued: 520,
    newCustomers: 32,
    activeShops: 6,
  },
  {
    date: "2024-03",
    revenue: 61000,
    orders: 289,
    cashbackIssued: 610,
    newCustomers: 41,
    activeShops: 7,
  },
  {
    date: "2024-04",
    revenue: 58000,
    orders: 267,
    cashbackIssued: 580,
    newCustomers: 35,
    activeShops: 7,
  },
  {
    date: "2024-05",
    revenue: 67000,
    orders: 312,
    cashbackIssued: 670,
    newCustomers: 48,
    activeShops: 8,
  },
  {
    date: "2024-06",
    revenue: 72000,
    orders: 335,
    cashbackIssued: 720,
    newCustomers: 55,
    activeShops: 9,
  },
]

export const quarterlyMetrics: DailyMetric[] = [
  {
    date: "Q1 2024",
    revenue: 158000,
    orders: 744,
    cashbackIssued: 1580,
    newCustomers: 101,
    activeShops: 6,
  },
  {
    date: "Q2 2024",
    revenue: 197000,
    orders: 914,
    cashbackIssued: 1970,
    newCustomers: 138,
    activeShops: 8,
  },
]

export const yearlyMetrics: DailyMetric[] = [
  {
    date: "2023",
    revenue: 420000,
    orders: 2100,
    cashbackIssued: 4200,
    newCustomers: 180,
    activeShops: 3,
  },
  {
    date: "2024",
    revenue: 580000,
    orders: 2850,
    cashbackIssued: 5800,
    newCustomers: 320,
    activeShops: 9,
  },
]

export const cashbackFunnel = {
  generated: 125000,
  pending: 18500,
  approved: 45000,
  redeemed: 52000,
  expired: 9500,
}

export const customerInsights = {
  new: 85,
  returning: 210,
  dormant: 45,
  vip: 38,
}

export const alerts = [
  {
    id: "1",
    type: "warning" as const,
    message: "3 shops pending verification",
    time: "2h ago",
  },
  {
    id: "2",
    type: "error" as const,
    message: "Cashback liability exceeds threshold",
    time: "4h ago",
  },
  {
    id: "3",
    type: "info" as const,
    message: "New campaign launched: Summer Sale",
    time: "6h ago",
  },
  {
    id: "4",
    type: "success" as const,
    message: "Platform revenue target achieved",
    time: "1d ago",
  },
]
