import axios from "@/lib/axios";
import { redirect } from "react-router-dom";
import { toast } from "sonner";
import { create } from "zustand";

// Define the User type (adjust according to your user structure)
interface User {
  id?: string;
  name?: string;
  email?: string;
  // Add other user properties as needed
}

interface Users {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface FullPageDataInt {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Users[];
  support: {
    url: string;
    text: string;
  };
}

// Define the store's state interface
interface UserStore {
  user: User | null;
  users: Users[] | [];
  fullPageData: FullPageDataInt | null;
  loading: boolean;
  checkingAuth: boolean;
  createUserModal: boolean;
  editUserModal: boolean;

  login: ({ email, password }: { email: string; password: string }) => Promise<void>;
  logout: () => Promise<void>;
  checkAuth: () => void;
  getUsers: ({ page }: { page: number }) => Promise<void>;
  createUser: ({
    first_name,
    last_name,
    email,
  }: {
    first_name: string;
    last_name: string;
    email: string;
  }) => Promise<void>;
  editUser: ({
    id,
    first_name,
    last_name,
    email,
  }: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
  }) => Promise<void>;
  deleteUser: ({ id }: { id: number }) => Promise<void>;

  // setter functions here if needed
  setUser?: (user: User | null) => void;
  setLoading?: (loading: boolean) => void;
  setCheckingAuth?: (checking: boolean) => void;
  setCreateUserModal: (val: boolean) => void;
  setEditUserModal: (val: boolean) => void;
}

const useUserStore = create<UserStore>((set) => ({
  user: null,
  users: [],
  fullPageData: null,
  loading: false,
  checkingAuth: true,
  createUserModal: false,
  editUserModal: false,

  // Optional: Add setter functions
  setUser: (user: User | null) => set({ user }),
  setLoading: (loading) => set({ loading }),
  setCheckingAuth: (checkingAuth) => set({ checkingAuth }),
  setCreateUserModal: (val) => set({ createUserModal: val }),
  setEditUserModal: (val) => set({ editUserModal: val }),

  // Modals

  login: async ({ email, password }: { email: string; password: string }) => {
    try {
      set({ loading: true });
      const { data } = await axios.post<{ token: string; user?: User }>(
        "/login",
        {
          email,
          password,
        },
        {
          headers: {
            "x-api-key": "reqres-free-v1",
          },
        }
      );

      localStorage.setItem("accessToken", data.token);
      toast.success("User Logged in successfully.");
      set({ user: data.user || { id: "122" } });
    } catch (error) {
      console.error("Login failed:", error);
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An unexpected error occurred during login");
      }
      throw error;
    } finally {
      set({ loading: false });
    }
  },

  logout: async () => {
    try {
      set({ loading: true });
      localStorage.removeItem("accessToken");
      toast.success("User Logged out successfully.");
      set({ user: null });
    } catch (error) {
      console.error("Logout failed:", error);
      const errorMessage = "An unexpected error occurred during logout";

      if (error instanceof Error) toast.error(error.message);
      toast.error(errorMessage);
      throw error;
    } finally {
      set({ loading: false });
    }
  },

  checkAuth: () => {
    try {
      const token = localStorage.getItem("accessToken");

      if (token) {
        set({ user: { id: "123" } });
        redirect("/");
      }

      return redirect("/auth");
    } catch (error) {
      console.error("Logout failed:", error);
      const errorMessage = "Login first.";

      if (error instanceof Error) toast.error(error.message);
      toast.error(errorMessage);
      throw error;
    }
  },

  getUsers: async ({ page }: { page: number }) => {
    try {
      const { data } = await axios.get(`/users?page=${page}`, {
        // headers: {
        //   "x-api-key": "reqres-free-v1",
        // },
      });
      set({ users: data.data, fullPageData: data });
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  },

  createUser: async ({ email, first_name, last_name }) => {
    try {
      set({ loading: true });
      await axios.post(`/users`, { first_name, last_name, email });
      toast.success("Created user successfully");
    } catch (error) {
      if (error instanceof Error) toast.error(error.message);
      console.log(error);
    } finally {
      set({ loading: false });
    }
  },

  editUser: async ({ id, email, first_name, last_name }) => {
    try {
      set({ loading: true });
      await axios.put(`/users/${id}`, { first_name, last_name, email });
      toast.success("User edited successfully");
    } catch (error) {
      if (error instanceof Error) toast.error(error.message);
      console.log(error);
    } finally {
      set({ loading: false });
    }
  },

  deleteUser: async ({ id }) => {
    try {
      set({ loading: true });
      const res = await axios.delete(`/users/${id}`);
      console.log(res);
      toast.success("User deleted successfully");
    } catch (error) {
      if (error instanceof Error) toast.error(error.message);
      console.log(error);
    } finally {
      set({ loading: false });
    }
  },
}));

export default useUserStore;
