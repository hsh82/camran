"use client"

import { useState } from "react"
import { MoreHorizontal, PlusCircle } from "lucide-react"

import type { CustomerType } from "@/data/mock"

import { customers as initialCustomers } from "@/data/mock"

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

const statuses = ["active", "inactive", "vip", "dormant"] as const

export function CustomersTable() {
  const [customersList, setCustomersList] =
    useState<CustomerType[]>(initialCustomers)
  const [open, setOpen] = useState(false)
  const [editing, setEditing] = useState<CustomerType | null>(null)
  const [form, setForm] = useState<Partial<CustomerType>>({
    name: "",
    phone: "",
    email: "",
    address: "",
    status: "active",
    referralCode: "",
  })

  const resetForm = () => {
    setForm({
      name: "",
      phone: "",
      email: "",
      address: "",
      status: "active",
      referralCode: "",
    })
    setEditing(null)
  }

  const handleOpenChange = (v: boolean) => {
    setOpen(v)
    if (!v) resetForm()
  }

  const handleChange = (field: keyof CustomerType, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSave = () => {
    if (!form.name || !form.phone) return
    if (editing) {
      setCustomersList((prev) =>
        prev.map((c) =>
          c.id === editing.id
            ? ({ ...c, ...form, id: c.id } as CustomerType)
            : c
        )
      )
    } else {
      const newCustomer: CustomerType = {
        id: `${Date.now()}`,
        name: form.name,
        phone: form.phone,
        email:
          form.email ||
          `${form.name.toLowerCase().replace(" ", ".")}@example.demo`,
        address: form.address || "Iran",
        joinedAt: new Date().toISOString().split("T")[0],
        totalSpent: 0,
        totalCashback: 0,
        pendingCashback: 0,
        ordersCount: 0,
        status: (form.status as CustomerType["status"]) || "active",
        referralCode:
          form.referralCode || `${form.name.toUpperCase().slice(0, 5)}-NEW`,
      }
      setCustomersList((prev) => [...prev, newCustomer])
    }
    handleOpenChange(false)
  }

  const handleEdit = (customer: CustomerType) => {
    setEditing(customer)
    setForm({
      name: customer.name,
      phone: customer.phone,
      email: customer.email,
      address: customer.address,
      status: customer.status,
      referralCode: customer.referralCode || "",
    })
    setOpen(true)
  }

  const handleDelete = (id: string) => {
    setCustomersList((prev) => prev.filter((c) => c.id !== id))
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Registered Customers</CardTitle>
        <Dialog open={open} onOpenChange={handleOpenChange}>
          <DialogTrigger asChild>
            <Button size="sm">
              <PlusCircle className="mr-2 h-4 w-4" /> Add Customer
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>
                {editing ? "Edit Customer" : "Add New Customer"}
              </DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  value={form.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
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
              <div className="grid gap-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  value={form.address}
                  onChange={(e) => handleChange("address", e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="status">Status</Label>
                <Select
                  onValueChange={(v) => handleChange("status", v)}
                  defaultValue="active"
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {statuses.map((s) => (
                      <SelectItem key={s} value={s}>
                        {s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="referral">Referral Code</Label>
                <Input
                  id="referral"
                  value={form.referralCode}
                  onChange={(e) => handleChange("referralCode", e.target.value)}
                />
              </div>
              <Button onClick={handleSave} className="w-full">
                Save Customer
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Joined</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Orders</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customersList.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell className="font-medium">{customer.name}</TableCell>
                <TableCell>{customer.phone}</TableCell>
                <TableCell>{customer.joinedAt}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      customer.status === "active" || customer.status === "vip"
                        ? "default"
                        : "secondary"
                    }
                  >
                    {customer.status}
                  </Badge>
                </TableCell>
                <TableCell>{customer.ordersCount}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem onClick={() => handleEdit(customer)}>
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleDelete(customer.id)}
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
