"use client"

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts"
import { AlertTriangle, CheckCircle2, Info, XCircle } from "lucide-react"

import {
  cashbackEntries,
  customers,
  orders,
  shops,
  transactions,
} from "@/data/mock"
import {
  alerts,
  cashbackFunnel,
  customerInsights,
  dailyMetrics,
} from "@/data/mock/admin-metrics"

import { useDictionary } from "@/contexts/dictionary-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { DashboardCard } from "@/components/dashboards/dashboard-card"

const chartConfig = {
  revenue: { label: "Revenue", color: "hsl(var(--primary))" },
  orders: { label: "Orders", color: "hsl(var(--primary))" },
  cashback: { label: "Cashback", color: "hsl(var(--primary))" },
}

export function AdminDashboardOverview() {
  const dictionary = useDictionary()
  const d = dictionary.admin

  const totalShops = shops.filter((s) => s.status === "active").length
  const activeCustomers = customers.filter((c) => c.status === "active").length
  const ordersToday =
    orders.filter((o) => o.createdAt === "2024-06-27").length || 28
  const revenueToday = dailyMetrics[dailyMetrics.length - 1]?.revenue || 6200
  const cashbackIssued = dailyMetrics.reduce(
    (sum, m) => sum + m.cashbackIssued,
    0
  )
  const pendingCashback = cashbackEntries
    .filter((c) => c.status === "pending")
    .reduce((sum, c) => sum + c.cashbackAmount, 0)
  const platformCommission = transactions
    .filter((t) => t.type === "commission")
    .reduce((sum, t) => sum + t.amount, 0)
  const activeCampaigns = 3

  const topShops = [...shops]
    .sort((a, b) => b.totalSales - a.totalSales)
    .slice(0, 5)

  return (
    <>
      <div className="col-span-full grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard title={d.totalShops} period="" size="xs">
          <p className="text-2xl font-semibold">{totalShops}</p>
        </DashboardCard>
        <DashboardCard title={d.activeCustomers} period="" size="xs">
          <p className="text-2xl font-semibold">{activeCustomers}</p>
        </DashboardCard>
        <DashboardCard title={d.ordersToday} period="" size="xs">
          <p className="text-2xl font-semibold">{ordersToday}</p>
        </DashboardCard>
        <DashboardCard title={d.revenueToday} period="" size="xs">
          <p className="text-2xl font-semibold">
            ${revenueToday.toLocaleString()}
          </p>
        </DashboardCard>
      </div>

      <div className="col-span-full grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DashboardCard title={d.cashbackIssued} period="" size="xs">
          <p className="text-2xl font-semibold">${cashbackIssued.toFixed(2)}</p>
        </DashboardCard>
        <DashboardCard title={d.pendingCashback} period="" size="xs">
          <p className="text-2xl font-semibold">
            ${pendingCashback.toFixed(2)}
          </p>
        </DashboardCard>
        <DashboardCard title={d.platformCommission} period="" size="xs">
          <p className="text-2xl font-semibold">
            ${platformCommission.toFixed(2)}
          </p>
        </DashboardCard>
        <DashboardCard title={d.activeCampaigns} period="" size="xs">
          <p className="text-2xl font-semibold">{activeCampaigns}</p>
        </DashboardCard>
      </div>

      <Card className="col-span-full lg:col-span-2">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>{d.revenueTrend}</CardTitle>
          <Select defaultValue="7d">
            <SelectTrigger className="w-24">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">{d.days7}</SelectItem>
              <SelectItem value="30d">{d.days30}</SelectItem>
              <SelectItem value="90d">{d.days90}</SelectItem>
              <SelectItem value="1y">{d.year1}</SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-64 w-full">
            <AreaChart data={dailyMetrics}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="hsl(var(--chart-1))"
                fill="hsl(var(--chart-1))"
                fillOpacity={0.3}
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card className="col-span-full lg:col-span-2">
        <CardHeader>
          <CardTitle>{d.cashbackFunnel}</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-64 w-full">
            <BarChart
              data={[
                { stage: d.generated, value: cashbackFunnel.generated },
                {
                  stage: dictionary.cashback.pending,
                  value: cashbackFunnel.pending,
                },
                {
                  stage: dictionary.cashback.approved,
                  value: cashbackFunnel.approved,
                },
                {
                  stage: dictionary.cashback.redeemed,
                  value: cashbackFunnel.redeemed,
                },
                { stage: d.expired, value: cashbackFunnel.expired },
              ]}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="stage" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="value" fill="hsl(var(--chart-1))" radius={4} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card className="col-span-full">
        <CardHeader>
          <CardTitle>{d.topPerformingShops}</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Shop</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Sales</TableHead>
                <TableHead>Orders</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {topShops.map((shop) => (
                <TableRow key={shop.id}>
                  <TableCell className="font-medium">{shop.name}</TableCell>
                  <TableCell>{shop.category}</TableCell>
                  <TableCell>{shop.location}</TableCell>
                  <TableCell>${shop.totalSales.toLocaleString()}</TableCell>
                  <TableCell>{shop.totalOrders}</TableCell>
                  <TableCell>{shop.rating}</TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        shop.status === "active"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                      }`}
                    >
                      {shop.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card className="col-span-full lg:col-span-2">
        <CardHeader>
          <CardTitle>{d.cashbackLiability}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">{d.issued}</p>
              <p className="text-2xl font-bold">
                $
                {(
                  cashbackFunnel.approved + cashbackFunnel.pending
                ).toLocaleString()}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">
                {d.totalRedeemed || "Redeemed"}
              </p>
              <p className="text-2xl font-bold">
                ${cashbackFunnel.redeemed.toLocaleString()}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">
                {d.pendingCashback}
              </p>
              <p className="text-2xl font-bold">
                ${pendingCashback.toFixed(2)}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">{d.expired}</p>
              <p className="text-2xl font-bold">
                ${cashbackFunnel.expired.toLocaleString()}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="col-span-full lg:col-span-2">
        <CardHeader>
          <CardTitle>{d.customerInsights}</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={{}} className="h-64 w-full">
            <BarChart
              data={[
                { segment: d.newCustomers, count: customerInsights.new },
                { segment: d.returning, count: customerInsights.returning },
                { segment: d.dormant, count: customerInsights.dormant },
                { segment: d.vip, count: customerInsights.vip },
              ]}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="segment" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="count" fill="hsl(var(--chart-1))" radius={4} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card className="col-span-full lg:col-span-2">
        <CardHeader>
          <CardTitle>{d.shopGrowth}</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-64 w-full">
            <AreaChart data={dailyMetrics}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area
                type="monotone"
                dataKey="activeShops"
                stroke="hsl(var(--chart-2))"
                fill="hsl(var(--chart-2))"
                fillOpacity={0.3}
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card className="col-span-full lg:col-span-2">
        <CardHeader>
          <CardTitle>{d.operationalAlerts}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {alerts.length === 0 ? (
              <p className="text-sm text-muted-foreground">{d.noAlerts}</p>
            ) : (
              alerts.map((alert) => (
                <div key={alert.id} className="flex items-start gap-3">
                  {alert.type === "warning" && (
                    <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5" />
                  )}
                  {alert.type === "error" && (
                    <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                  )}
                  {alert.type === "info" && (
                    <Info className="h-5 w-5 text-blue-500 mt-0.5" />
                  )}
                  {alert.type === "success" && (
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                  )}
                  <div className="flex-1">
                    <p className="text-sm font-medium">{alert.message}</p>
                    <p className="text-xs text-muted-foreground">
                      {alert.time}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </>
  )
}
