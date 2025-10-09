import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, XCircle, Eye, Users, Home } from "lucide-react";

const Admin = () => {
  const [pendingRooms] = useState([
    {
      id: "1",
      title: "Cozy Single Room Near Sandip University",
      owner: "Rajesh Singh",
      college: "Sandip University",
      rent: 8500,
      status: "pending",
    },
    {
      id: "2",
      title: "Shared Room with Study Area",
      owner: "Priya Sharma",
      college: "MIT Pune",
      rent: 6000,
      status: "pending",
    },
    {
      id: "3",
      title: "Modern PG with Common Area",
      owner: "Amit Patel",
      college: "VIT Pune",
      rent: 9500,
      status: "pending",
    },
  ]);

  const [users] = useState([
    {
      id: "1",
      name: "Rahul Mehta",
      email: "rahul@vit.edu",
      college: "VIT Pune",
      type: "Student",
    },
    {
      id: "2",
      name: "Priya Sharma",
      email: "priya@mit.edu",
      college: "MIT Pune",
      type: "Student",
    },
    {
      id: "3",
      name: "Rajesh Singh",
      email: "rajesh@email.com",
      college: "N/A",
      type: "Landlord",
    },
  ]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="font-poppins font-bold text-3xl md:text-4xl mb-2">Admin Dashboard</h1>
          <p className="font-inter text-muted-foreground">Manage rooms, users, and reports</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-card rounded-2xl p-6 shadow-card">
            <div className="flex items-center justify-between mb-2">
              <p className="font-inter text-sm text-muted-foreground">Pending Rooms</p>
              <Home className="h-5 w-5 text-primary" />
            </div>
            <p className="font-poppins font-bold text-3xl">{pendingRooms.length}</p>
          </div>
          
          <div className="bg-card rounded-2xl p-6 shadow-card">
            <div className="flex items-center justify-between mb-2">
              <p className="font-inter text-sm text-muted-foreground">Total Users</p>
              <Users className="h-5 w-5 text-primary" />
            </div>
            <p className="font-poppins font-bold text-3xl">{users.length}</p>
          </div>

          <div className="bg-card rounded-2xl p-6 shadow-card">
            <div className="flex items-center justify-between mb-2">
              <p className="font-inter text-sm text-muted-foreground">Active Listings</p>
              <CheckCircle className="h-5 w-5 text-green-600" />
            </div>
            <p className="font-poppins font-bold text-3xl">42</p>
          </div>

          <div className="bg-card rounded-2xl p-6 shadow-card">
            <div className="flex items-center justify-between mb-2">
              <p className="font-inter text-sm text-muted-foreground">Reports</p>
              <XCircle className="h-5 w-5 text-destructive" />
            </div>
            <p className="font-poppins font-bold text-3xl">3</p>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="rooms" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="rooms">Room Approvals</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          {/* Rooms Table */}
          <TabsContent value="rooms">
            <div className="bg-card rounded-2xl shadow-card overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-poppins">Room Title</TableHead>
                    <TableHead className="font-poppins">Owner</TableHead>
                    <TableHead className="font-poppins">College</TableHead>
                    <TableHead className="font-poppins">Rent</TableHead>
                    <TableHead className="font-poppins">Status</TableHead>
                    <TableHead className="font-poppins text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pendingRooms.map((room) => (
                    <TableRow key={room.id}>
                      <TableCell className="font-inter font-medium">{room.title}</TableCell>
                      <TableCell className="font-inter">{room.owner}</TableCell>
                      <TableCell className="font-inter">{room.college}</TableCell>
                      <TableCell className="font-inter">₹{room.rent.toLocaleString()}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                          Pending
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex gap-2 justify-end">
                          <Button size="sm" variant="ghost">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Approve
                          </Button>
                          <Button size="sm" variant="destructive">
                            <XCircle className="h-4 w-4 mr-1" />
                            Reject
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          {/* Users Table */}
          <TabsContent value="users">
            <div className="bg-card rounded-2xl shadow-card overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-poppins">Name</TableHead>
                    <TableHead className="font-poppins">Email</TableHead>
                    <TableHead className="font-poppins">College</TableHead>
                    <TableHead className="font-poppins">Type</TableHead>
                    <TableHead className="font-poppins text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-inter font-medium">{user.name}</TableCell>
                      <TableCell className="font-inter">{user.email}</TableCell>
                      <TableCell className="font-inter">{user.college}</TableCell>
                      <TableCell>
                        <Badge variant={user.type === "Student" ? "default" : "secondary"}>
                          {user.type}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button size="sm" variant="ghost">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          {/* Reports Table */}
          <TabsContent value="reports">
            <div className="bg-card rounded-2xl shadow-card p-8 text-center">
              <p className="font-inter text-muted-foreground">No reports to review</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
