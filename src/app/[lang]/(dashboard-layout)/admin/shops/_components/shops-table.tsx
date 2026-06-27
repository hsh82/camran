"use client"

import { useState } from "react"
import { MoreHorizontal, PlusCircle } from "lucide-react"

import type { ShopType } from "@/data/mock"

import { shops as initialShops } from "@/data/mock"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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

const categories = [
  "Electronics",
  "Clothing",
  "Books",
  "Home & Garden",
  "Sports",
  "Food & Beverage",
  "Toys",
  "Pets",
]
const locations = [
  "Tehran",
  "Mashhad",
  "Isfahan",
  "Shiraz",
  "Tabriz",
  "Karaj",
  "Ahvaz",
]

const sampleOwners = [
  "Hossein Mousavi",
  "Sara Ahmadi",
  "Reza Karimi",
  "Niloofar Hosseini",
  "Ali Ghasemi",
  "Mina Jafari",
  "Kian Pour",
  "Zahra Rahnama",
  "Omid Hosseini",
  "Parsa Tabatabaei",
]

export function ShopsTable() {
  const [shopsList, setShopsList] = useState<ShopType[]>(initialShops)
  const [open, setOpen] = useState(false)
  const [editing, setEditing] = useState<ShopType | null>(null)
  const [form, setForm] = useState<Partial<ShopType>>({
    name: "",
    email: "",
    owner: "",
    category: "",
    status: "pending",
    verified: false,
    location: "",
    cashbackRate: 5,
  })

  const resetForm = () => {
    setForm({
      name: "",
      email: "",
      owner: "",
      category: "",
      status: "pending",
      verified: false,
      location: "",
      cashbackRate: 5,
    })
    setEditing(null)
  }

  const handleOpenChange = (v: boolean) => {
    setOpen(v)
    if (!v) resetForm()
  }

  const handleChange = (
    field: keyof ShopType,
    value: string | number | boolean
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSave = () => {
    if (!form.name || !form.owner) return
    if (editing) {
      setShopsList((prev) =>
        prev.map((s) =>
          s.id === editing.id ? ({ ...s, ...form, id: s.id } as ShopType) : s
        )
      )
    } else {
      const newShop: ShopType = {
        id: `${Date.now()}`,
        name: form.name,
        email: form.email || `contact@demo.shop`,
        owner: form.owner,
        category: form.category || "General",
        status: form.status as ShopType["status"],
        verified: form.verified || false,
        joinedAt: new Date().toISOString().split("T")[0],
        balance: 0,
        cashbackRate: form.cashbackRate || 5,
        totalSales: 0,
        totalOrders: 0,
        customersCount: 0,
        rating: 0,
        location: form.location || "Tehran",
      }
      setShopsList((prev) => [...prev, newShop])
    }
    handleOpenChange(false)
  }

  const handleEdit = (shop: ShopType) => {
    setEditing(shop)
    setForm({
      name: shop.name,
      email: shop.email,
      owner: shop.owner,
      category: shop.category,
      status: shop.status,
      verified: shop.verified,
      location: shop.location,
      cashbackRate: shop.cashbackRate,
    })
    setOpen(true)
  }

  const handleDelete = (id: string) => {
    setShopsList((prev) => prev.filter((s) => s.id !== id))
  }

  const handleQuickAdd = () => {
    const randomOwner =
      sampleOwners[Math.floor(Math.random() * sampleOwners.length)]
    const randomCategory =
      categories[Math.floor(Math.random() * categories.length)]
    const randomLocation =
      locations[Math.floor(Math.random() * locations.length)]
    const newShop: ShopType = {
      id: `${Date.now()}`,
      name: `Demo Shop ${Math.floor(Math.random() * 1000)}`,
      email: `contact@demoshop${Math.floor(Math.random() * 1000)}.demo`,
      owner: randomOwner,
      category: randomCategory,
      status: "active",
      verified: true,
      joinedAt: new Date().toISOString().split("T")[0],
      balance: Math.floor(Math.random() * 5000),
      cashbackRate: Math.floor(Math.random() * 10) + 2,
      totalSales: Math.floor(Math.random() * 100000),
      totalOrders: Math.floor(Math.random() * 500),
      customersCount: Math.floor(Math.random() * 300),
      rating: parseFloat((Math.random() * 2 + 3).toFixed(1)),
      location: randomLocation,
    }
    setShopsList((prev) => [...prev, newShop])
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Registered Shops</CardTitle>
        <div className="flex gap-2">
          <Button size="sm" variant="outline" onClick={handleQuickAdd}>
            Quick Add Demo
          </Button>
          <Dialog open={open} onOpenChange={handleOpenChange}>
            <DialogTrigger asChild>
              <Button size="sm">
                <PlusCircle className="mr-2 h-4 w-4" /> Add Shop
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>
                  {editing ? "Edit Shop" : "Add New Shop"}
                </DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Shop Name</Label>
                  <Input
                    id="name"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="owner">Owner</Label>
                  <Input
                    id="owner"
                    value={form.owner}
                    onChange={(e) => handleChange("owner", e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="category">Category</Label>
                    <Select onValueChange={(v) => handleChange("category", v)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((c) => (
                          <SelectItem key={c} value={c}>
                            {c}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="location">Location</Label>
                    <Select onValueChange={(v) => handleChange("location", v)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select city" />
                      </SelectTrigger>
                      <SelectContent>
                        {locations.map((l) => (
                          <SelectItem key={l} value={l}>
                            {l}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="cashbackRate">Cashback Rate (%)</Label>
                    <Input
                      id="cashbackRate"
                      type="number"
                      value={form.cashbackRate}
                      onChange={(e) =>
                        handleChange("cashbackRate", Number(e.target.value))
                      }
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="status">Status</Label>
                    <Select
                      onValueChange={(v) => handleChange("status", v)}
                      defaultValue="pending"
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="suspended">Suspended</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="verified"
                    checked={form.verified}
                    onChange={(e) => handleChange("verified", e.target.checked)}
                  />
                  <Label htmlFor="verified">Verified Shop</Label>
                </div>
                <Button onClick={handleSave} className="w-full">
                  Save Shop
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Shop Name</TableHead>
              <TableHead>Owner</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Rating</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {shopsList.map((shop) => (
              <TableRow key={shop.id}>
                <TableCell className="font-medium">{shop.name}</TableCell>
                <TableCell>{shop.owner}</TableCell>
                <TableCell>{shop.category}</TableCell>
                <TableCell>{shop.location}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      shop.status === "active"
                        ? "default"
                        : shop.status === "pending"
                          ? "secondary"
                          : "destructive"
                    }
                  >
                    {shop.status}
                  </Badge>
                </TableCell>
                <TableCell>{shop.rating || "-"}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem onClick={() => handleEdit(shop)}>
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleDelete(shop.id)}
                        className="text-destructive"
                      >
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
